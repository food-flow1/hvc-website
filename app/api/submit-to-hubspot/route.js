// import { NextResponse } from 'next/server';

// export async function POST(request) {
//   try {
//     const { formData } = await request.json();

//     // Create contact in HubSpot
//     const hubspotResponse = await fetch(
//       "https://api.hubapi.com/crm/v3/objects/contacts",
//       {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//           Authorization: `Bearer ${process.env.HUBSPOT_PRIVATE_APP_ACCESS_TOKEN}`,
//         },
//         body: JSON.stringify({
//           properties: {
//             email: formData.email,
//             firstname: formData.firstName,
//             lastname: formData.lastName,
//             phone: formData.phone,
//             // Custom properties (you'll need to create these in HubSpot)
//             farm_fuel_interests: formData.interests.join(", "),
//             comments: formData.comments,
//             preferred_contact_time: formData.contactTime,
//             lead_source: "Farm Fuel Interest Form",
//             lifecyclestage: "lead",
//           },
//         }),
//       }
//     );

//     if (!hubspotResponse.ok) {
//       const errorText = await hubspotResponse.text();
//       console.error("HubSpot API Error:", errorText);
//       throw new Error("Failed to create contact in HubSpot");
//     }

//     const hubspotData = await hubspotResponse.json();

//     // Optional: Add to specific list
//     if (process.env.HUBSPOT_LIST_ID) {
//       await fetch(
//         `https://api.hubapi.com/contacts/v1/lists/${process.env.HUBSPOT_LIST_ID}/add`,
//         {
//           method: "POST",
//           headers: {
//             "Content-Type": "application/json",
//             Authorization: `Bearer ${process.env.HUBSPOT_PRIVATE_APP_ACCESS_TOKEN}`,
//           },
//           body: JSON.stringify({
//             vids: [hubspotData.id],
//           }),
//         }
//       );
//     }

//     return NextResponse.json({
//       success: true,
//       message: "Contact created successfully",
//       contactId: hubspotData.id,
//     });

//   } catch (error) {
//     console.error("Error:", error);
//     return NextResponse.json(
//       {
//         error: "Failed to submit to HubSpot",
//         message: error.message,
//       },
//       { status: 500 }
//     );
//   }
// }

// // Handle GET requests (optional - for testing)
// export async function GET(request) {
//   return NextResponse.json(
//     { message: 'HubSpot API endpoint is working' },
//     { status: 200 }
//   );
// }

// // If you need to handle other HTTP methods, export them similarly:
// // export async function PUT(request) { ... }
// // export async function DELETE(request) { ... }
// // export async function PATCH(request) { ... }



// import { NextResponse } from 'next/server';

// export async function POST(request) {
//   try {
//     const { formData } = await request.json();

//     console.log("Form data received:", formData);

//     // Start with only basic HubSpot properties that definitely exist
//     const hubspotPayload = {
//       properties: {
//         email: formData.email,
//         firstname: formData.firstName,
//         lastname: formData.lastName,
//         phone: formData.phone,
//         farm_fuel_interests:formData.interests.join(";"),
//        preferred_contact_time:formData.contactTime,
//        comments:formData.comments,
//         // Only use standard HubSpot properties initially
//         ...(formData.comments && { message: formData.comments }),
//       }
//     };

//     console.log("HubSpot payload:", JSON.stringify(hubspotPayload, null, 2));

//     // Create contact in HubSpot
//     const hubspotResponse = await fetch(
//       "https://api.hubapi.com/crm/v3/objects/contacts",
//       {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//           Authorization: `Bearer ${process.env.HUBSPOT_PRIVATE_APP_ACCESS_TOKEN}`,
//         },
//         body: JSON.stringify(hubspotPayload),
//       }
//     );

//     console.log("HubSpot response status:", hubspotResponse.status);
//     console.log("HubSpot response headers:", hubspotResponse.headers);

//     if (!hubspotResponse.ok) {
//       const errorText = await hubspotResponse.text();
//       console.error("HubSpot API Error Status:", hubspotResponse.status);
//       console.error("HubSpot API Error Response:", errorText);
      
//       // Try to parse the error as JSON for more details
//       try {
//         const errorJson = JSON.parse(errorText);
//         console.error("Parsed HubSpot error:", JSON.stringify(errorJson, null, 2));
//       } catch (parseError) {
//         console.error("Could not parse error response as JSON");
//       }
      
//       return NextResponse.json(
//         {
//           error: "HubSpot API Error",
//           status: hubspotResponse.status,
//           details: errorText,
//         },
//         { status: 500 }
//       );
//     }

//     const hubspotData = await hubspotResponse.json();
//     console.log("Successfully created contact:", hubspotData.id);

//     return NextResponse.json({
//       success: true,
//       message: "Contact created successfully",
//       contactId: hubspotData.id,
//     });

//   } catch (error) {
//     console.error("Unexpected error:", error);
//     return NextResponse.json(
//       {
//         error: "Failed to submit to HubSpot",
//         message: error.message,
//         stack: error.stack,
//       },
//       { status: 500 }
//     );
//   }
// }

// export async function GET(request) {
//   // Test endpoint to verify API key
//   try {
//     const testResponse = await fetch(
//       "https://api.hubapi.com/crm/v3/objects/contacts?limit=1",
//       {
//         method: "GET",
//         headers: {
//           Authorization: `Bearer ${process.env.HUBSPOT_PRIVATE_APP_ACCESS_TOKEN}`,
//         },
//       }
//     );

//     if (!testResponse.ok) {
//       const errorText = await testResponse.text();
//       return NextResponse.json(
//         {
//           error: "API key test failed",
//           status: testResponse.status,
//           details: errorText,
//         },
//         { status: 500 }
//       );
//     }

//     return NextResponse.json(
//       { 
//         message: 'HubSpot API endpoint is working',
//         apiKeyValid: true
//       },
//       { status: 200 }
//     );
//   } catch (error) {
//     return NextResponse.json(
//       { 
//         error: "API key test error",
//         message: error.message 
//       },
//       { status: 500 }
//     );
//   }
// }



import { NextResponse } from 'next/server';

export async function POST(request) {
  try {
    const { formData } = await request.json();

    console.log("Form data received:", formData);

    // HubSpot payload with custom properties
    const hubspotPayload = {
      properties: {
        email: formData.email,
        firstname: formData.firstName,
        lastname: formData.lastName,
        phone: formData.phone,
        // Standard HubSpot properties
        ...(formData.comments && { message: formData.comments }),
        // Multi-select property (create as "Multiple checkboxes" in HubSpot)
        farm_fuel_interests: formData.interests.join(";"),
        // Single select dropdown - send value directly
        preferred_contact_time: formData.contactTime,
        lead_source: "Farm Fuel Interest Form",
        lifecyclestage: "lead",
      }
    };

    console.log("HubSpot payload:", JSON.stringify(hubspotPayload, null, 2));

    // Submit to specific HubSpot form using portal ID and form GUID
    const portalId = "146771318";
    const formGuid = "238901cf-20e8-4214-adb5-07e59ef7d0dc";
    
    const hubspotResponse = await fetch(
      `https://api.hsforms.com/submissions/v3/integration/submit/${portalId}/${formGuid}`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          // fields: [
          //   { name: "email", value: formData.email },
          //   { name: "firstname", value: formData.firstName },
          //   { name: "lastname", value: formData.lastName },
          //   { name: "phone", value: formData.phone },
          //   { name: "comments", value: formData.comments },
          //   // { name: "interests", value: formData.interests.join("; ") },
          //    { name: "farm_fuel_interests", value: formData.interests.join(";") },
          //   { name: "contact_method", value: formData.contactMethod },
          //   //  { name: "subscription_type", value: subscription_type.join("; ")  },
          //   { name: "monthly_package", value: formData.monthly_package },
          //   { name: "referral_program", value: formData.referral_program },
          // ],
          fields: [
  { name: "email", value: formData.email },
  { name: "firstname", value: formData.firstName },
  { name: "lastname", value: formData.lastName },
  { name: "phone", value: formData.phone },
  { name: "comments", value: formData.comments || "" },
  { name: "farm_fuel_interests", value: formData.interests.length ? formData.interests.join(";") : "" },
  { name: "preferred_contact_time", value: formData.contactTime || "" },
  ...(formData.monthly_package ? [{ name: "monthly_package", value: formData.monthly_package }] : []),
  ...(formData.referral_program ? [{ name: "referral_program", value: formData.referral_program }] : []),
],

          context: {
            pageUri: "https://yourwebsite.com/farm-fuel-form",
            pageName: "Farm Fuel Interest Form"
          }
        }),
      }
    );

    console.log("HubSpot response status:", hubspotResponse.status);
    console.log("HubSpot response headers:", hubspotResponse.headers);

    if (!hubspotResponse.ok) {
      const errorText = await hubspotResponse.text();
      console.error("HubSpot Forms API Error Status:", hubspotResponse.status);
      console.error("HubSpot Forms API Error Response:", errorText);
      
      // Try to parse the error as JSON for more details
      try {
        const errorJson = JSON.parse(errorText);
        console.error("Parsed HubSpot error:", JSON.stringify(errorJson, null, 2));
      } catch (parseError) {
        console.error("Could not parse error response as JSON");
      }
      
      return NextResponse.json(
        {
          error: "HubSpot Forms API Error",
          status: hubspotResponse.status,
          details: errorText,
        },
        { status: 500 }
      );
    }

    const hubspotData = await hubspotResponse.json();
    console.log("Successfully submitted form:", hubspotData);

    return NextResponse.json({
      success: true,
      message: "Form submitted successfully",
      submissionData: hubspotData,
    });

  } catch (error) {
    console.error("Unexpected error:", error);
    return NextResponse.json(
      {
        error: "Failed to submit to HubSpot",
        message: error.message,
        stack: error.stack,
      },
      { status: 500 }
    );
  }
}

export async function GET(request) {
  // Test endpoint to verify API key
  try {
    const testResponse = await fetch(
      "https://api.hubapi.com/crm/v3/objects/contacts?limit=1",
      {
        method: "GET",
        headers: {
          Authorization: `Bearer ${process.env.HUBSPOT_PRIVATE_APP_ACCESS_TOKEN}`,
        },
      }
    );

    if (!testResponse.ok) {
      const errorText = await testResponse.text();
      return NextResponse.json(
        {
          error: "API key test failed",
          status: testResponse.status,
          details: errorText,
        },
        { status: 500 }
      );
    }

    return NextResponse.json(
      { 
        message: 'HubSpot API endpoint is working',
        apiKeyValid: true
      },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      { 
        error: "API key test error",
        message: error.message 
      },
      { status: 500 }
    );
  }
}