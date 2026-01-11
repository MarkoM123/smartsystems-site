import "./globals.css";
import Link from "next/link";
import Footer from "@/components/Footer";

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
      "Pametno grejanje, sigurnost i automatika. Projektovanje i ugradnja smart home sistema u Beogradu.Sisteme projektuje inzenjer elektrotehnike",
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

        {/* HEADER */}
        <header className="fixed top-0 left-0 w-full z-50">
  <div className="bg-zinc-900/95 backdrop-blur-xl border-b border-white/10">
            <div className="max-w-7xl mx-auto px-6 py-5 flex items-center justify-between">
              
              {/* LOGO */}
              <Link
                href="/"
                className="text-xl font-semibold text-white tracking-wide"
              >
                SmartSystems<span className="text-blue-500">.BG</span>
              </Link>

              {/* NAV */}
              <nav className="flex items-center gap-8 text-base font-medium text-zinc-300">
                <Link href="/heating" className="hover:text-white transition">
                  Grejanje
                </Link>
                <Link href="/security" className="hover:text-white transition">
                  Sigurnost
                </Link>
                <Link href="/automation" className="hover:text-white transition">
                  Automatika
                </Link>
                <Link
                  href="/contact"
                  className="ml-4 px-5 py-2 rounded-lg bg-blue-600 text-white hover:bg-blue-500 transition"
                >
                  Kontakt
                </Link>
              </nav>
            </div>
          </div>
        </header>

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
