import "./globals.css";
import Footer from "@/components/Footer";
import Header from "@/components/Header";

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
  metadataBase: new URL("https://smartsystems-site1.vercel.app"),
  openGraph: {
    title: "SmartSystems BG | Pametni sistemi za dom i objekte",
    description:
      "Pametno grejanje, sigurnost i automatika. Projektovanje i ugradnja smart home sistema u Beogradu. Sisteme projektuje inzenjer elektrotehnike",
    url: "https://smartsystems-site1.vercel.app",
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
    <html lang="sr">
      <body className="bg-gradient-to-b from-zinc-950 via-zinc-900 to-zinc-950 text-zinc-100 antialiased">

        {/* HEADER – PRAVA KOMPONENTA */}
        <Header />

        {/* PAGE CONTENT */}
        <main className="pt-24">
          {children}
        </main>

        {/* FOOTER */}
        <Footer />
      </body>
    </html>
  );
}
