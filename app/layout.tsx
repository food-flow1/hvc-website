import type { Metadata } from "next";
import "@mantine/core/styles.layer.css";
import { Instrument_Sans } from "next/font/google";
import "./globals.css";
import { MantineProvider } from "@mantine/core";
import { theme } from "@/src/components/ui/theme";
import Header from "@/src/components/layout/header";
import Footer from "@/src/components/layout/footer";
import Script from "next/script";
import { ToastContainer } from "react-toastify";

// const instrumentSans = Instrument_Sans({
//   // variable: "--font-instrument-sans",
//   subsets: ["latin"],
// });

// Add your custom font here

export const metadata: Metadata = {
  title: "HVC",
  description: "HVC",
  icons: {
    icon: "/logo.svg",
    shortcut: "/logo.svg",
    apple: "/logo.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* Google Analytics */}
        <Script
          strategy="afterInteractive"
          src="https://www.googletagmanager.com/gtag/js?id=G-4S4GPFNQC2"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-4S4GPFNQC2');
          `}
        </Script>
      </head>
      <body className={`  antialiased`}>
        {/* ${instrumentSans.variable} */}
        <ToastContainer
          position="top-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
        />
        <MantineProvider theme={theme}>
          <Script
            type="text/javascript"
            id="hs-script-loader"
            async
            defer
            src="https://js-eu1.hs-scripts.com/146771318.js"
          />
          <main className="flex flex-col ">
            <Header />
            {children}
            <Footer />
          </main>
        </MantineProvider>
      </body>
    </html>
  );
}
