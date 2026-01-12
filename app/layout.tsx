import "./globals.css";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Script from "next/script";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    default: "SmartSystems BG | Pametni sistemi za grejanje, sigurnost i automatiku",
    template: "%s | SmartSystems BG",
  },
  description:
    "Projektovanje i ugradnja pametnih sistema za grejanje, sigurnost i automatiku. Pametna rešenja za stanove i objekte u Beogradu.",
  keywords: [
    "pametni sistemi",
    "pametno grejanje",
    "smart home Beograd",
    "video nadzor Beograd",
    "alarmni sistemi",
    "automatika rasveta",
    "smart home Srbija",
  ],
  authors: [{ name: "SmartSystems BG" }],
  creator: "SmartSystems BG",

  // 🔴 OVO MENJAMO (NOVI DOMEN)
  metadataBase: new URL("https://smartsystemsbg.cloud"),

  // 🔴 GOOGLE SEARCH CONSOLE VERIFIKACIJA
  verification: {
    google: "hKCYscZWnquKUt1bChZ-28zmvPd1RTlwdJOwxHb3NwU",
  },

  openGraph: {
    title: "SmartSystems BG | Pametni sistemi za dom i objekte",
    description:
      "Pametno grejanje, sigurnost i automatika. Projektovanje i ugradnja smart home sistema u Beogradu.",
    url: "https://smartsystemsbg.cloud",
    siteName: "SmartSystems BG",
    images: [
      {
        url: "/images/og-cover.jpg",
        width: 1200,
        height: 630,
        alt: "SmartSystems BG – Pametni sistemi",
      },
    ],
    locale: "sr_RS",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "SmartSystems BG | Pametni sistemi",
    description:
      "Pametna rešenja za grejanje, sigurnost i automatiku. Beograd.",
    images: ["/images/og-cover.jpg"],
  },
};


export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="sr" className="bg-zinc-950">
  <body className="bg-zinc-950 text-zinc-100 antialiased overflow-x-hidden">

<Script
  src={`https://www.googletagmanager.com/gtag/js?id=G-0SR2EKYKTF`}
  strategy="afterInteractive"
/>

<Script id="google-analytics" strategy="afterInteractive">
  {`
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', 'G-0SR2EKYKTF', {
      anonymize_ip: true,
    });
  `}
</Script>

        
        {/* HEADER – PRAVA KOMPONENTA */}
        <Header />

        {/* PAGE CONTENT */}
        <main>
          {children}
        </main>

        {/* FOOTER */}
        <Footer />
      </body>
    </html>
  );
}
