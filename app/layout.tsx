import "./globals.css";
import Link from "next/link";
import Footer from "@/components/Footer";

export const metadata = {
  title: "SmartSystems BG | Pametni sistemi",
  description:
    "Projektovanje i ugradnja pametnih sistema za grejanje, sigurnost i automatiku. Beograd.",
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
          <div className="bg-zinc-950/70 backdrop-blur-xl border-b border-white/10">
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
        <main className="pt-24">
          {children}
        </main>

        {/* FOOTER */}
        <Footer />

      </body>
    </html>
  );
}
