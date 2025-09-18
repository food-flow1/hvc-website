
import { NextResponse } from "next/server";

export async function POST(request) {
  try {
    const { formData, pageUrl } = await request.json();
    
    const portalId = "146771318";
    const formGuid = "238901cf-20e8-4214-adb5-07e59ef7d0dc";

    // Get the hutk from cookies (set by HubSpot tracking code)
    const cookies = request.headers.get('cookie') || '';
    const hutkMatch = cookies.match(/hubspotutk=([^;]+)/);
    const hutk = hutkMatch ? hutkMatch[1] : undefined;

    // Get real client IP and referrer
    const clientIP = request.headers.get('x-forwarded-for') || 
                    request.headers.get('x-real-ip') || 
                    request.ip;
    
    const referer = request.headers.get('referer') || 'https://hvc-website-rho.vercel.app/';

    // Base fields that both forms have
    const baseFields = [
      { name: "email", value: formData.email || "" },
      { name: "firstname", value: formData.firstName || "" },
      { name: "lastname", value: formData.lastName || "" },
      { name: "phone", value: formData.phone || "" },
      { name: "comments", value: formData.comments || "" },
      { name: "contact_methods", value: formData.contactMethod || "" }, 
    ];

    // Check if this is the Food Freedom form (has subscription_type)
    const isFoodFreedomForm = formData.subscriptionType !== undefined;

    let allFields = [...baseFields];

    if (isFoodFreedomForm) {
      // Add Food Freedom specific fields
      const foodFreedomFields = [
        { name: "subscription_type", value: formData.subscriptionType || "" },
        { name: "preferred_packages", value: Array.isArray(formData.package) ? formData.package.join("; ") : "" },
        { name: "referral_interest", value: formData.referralInterest || "" }, // Now it's a string, not array
        { name: "contact_methods", value: formData.contactMethod || "" }, // Fixed field name
      ];
      allFields = [...baseFields, ...foodFreedomFields];
    } else {
      // Add Farm Fuel specific fields
      const farmFuelFields = [
        { name: "interests", value: Array.isArray(formData.interests) ? formData.interests.join("; ") : "" },
        { name: "contact_methods", value: formData.contactMethod || "" }, 
      ];
      allFields = [...baseFields, ...farmFuelFields];
    }

    // Filter out empty fields
    const fieldsToSubmit = allFields.filter(field => field.value !== "");

    const hubspotPayload = {
      fields: fieldsToSubmit,
      context: {
        hutk: hutk,
        pageUri: pageUrl || referer,
        pageName: isFoodFreedomForm ? "Food Freedom Interest Form" : "Farm Fuel Interest Form",
        ipAddress: clientIP,
      },
    };

    console.log(`${isFoodFreedomForm ? 'Food Freedom' : 'Farm Fuel'} form - Submitting to HubSpot:`, {
      formType: isFoodFreedomForm ? 'Food Freedom' : 'Farm Fuel',
      fieldsCount: fieldsToSubmit.length,
      fields: fieldsToSubmit.map(f => ({ name: f.name, hasValue: !!f.value }))
    });

    const hubspotResponse = await fetch(
      `https://api.hsforms.com/submissions/v3/integration/submit/${portalId}/${formGuid}`,
      {
        method: "POST",
        headers: { 
          "Content-Type": "application/json",
        },
        body: JSON.stringify(hubspotPayload),
      }
    );

    if (!hubspotResponse.ok) {
      const errorText = await hubspotResponse.text();
      console.error('HubSpot Error:', errorText);
      return NextResponse.json(
        { error: "HubSpot API error", details: errorText },
        { status: hubspotResponse.status }
      );
    }

    const hubspotData = await hubspotResponse.json();
    console.log('HubSpot submission successful');
    return NextResponse.json({ success: true, hubspotData });
  } catch (error) {
    console.error('API Error:', error);
    return NextResponse.json(
      { error: "Unexpected error", message: error?.message || String(error) },
      { status: 500 }
    );
  }
}