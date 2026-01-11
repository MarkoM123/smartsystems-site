import "./globals.css";
import Link from "next/link";

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
      <body className="bg-white text-gray-900 antialiased">
        {/* HEADER */}
        <header className="fixed top-0 left-0 w-full z-50 bg-white/80 backdrop-blur border-b border-gray-200">
          <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
            {/* LOGO */}
            <Link href="/" className="text-xl font-bold">
              SmartSystems<span className="text-blue-600">.BG</span>
            </Link>

            {/* NAVIGATION */}
            <nav className="hidden md:flex gap-8 text-sm font-medium">
              <Link href="/heating" className="hover:text-blue-600 transition">
                Grejanje
              </Link>
              <Link href="/security" className="hover:text-blue-600 transition">
                Sigurnost
              </Link>
              <Link
                href="/automation"
                className="hover:text-blue-600 transition"
              >
                Automatika
              </Link>
              <Link href="/contact" className="hover:text-blue-600 transition">
                Kontakt
              </Link>
            </nav>
          </div>
        </header>

        {/* PAGE CONTENT */}
        <main className="pt-24">{children}</main>

        {/* FOOTER */}
        <footer className="border-t border-gray-200 mt-24">
          <div className="max-w-7xl mx-auto px-6 py-10 flex flex-col md:flex-row gap-6 justify-between text-sm text-gray-500">
            <div>
              © {new Date().getFullYear()} SmartSystems.BG<br />
              Pametni sistemi – Beograd
            </div>

            <div className="flex gap-6">
              <Link href="/heating" className="hover:text-gray-900">
                Grejanje
              </Link>
              <Link href="/security" className="hover:text-gray-900">
                Sigurnost
              </Link>
              <Link href="/automation" className="hover:text-gray-900">
                Automatika
              </Link>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
