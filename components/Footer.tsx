import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-zinc-950 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6 py-12 grid md:grid-cols-2 gap-8 items-center">
        
        {/* LEFT */}
        <div className="text-zinc-400 text-sm">
          <div className="text-white font-semibold text-lg">
            SmartSystems<span className="text-blue-500">.BG</span>
          </div>
          <p className="mt-2">
            Pametni sistemi • Beograd
          </p>
          <p className="mt-4">
            © 2026 SmartSystems.BG
          </p>
        </div>

        {/* RIGHT */}
        <nav className="flex gap-6 justify-start md:justify-end text-zinc-400 text-sm">
          <Link href="/heating" className="hover:text-white transition">
            Grejanje
          </Link>
          <Link href="/security" className="hover:text-white transition">
            Sigurnost
          </Link>
          <Link href="/automation" className="hover:text-white transition">
            Automatika
          </Link>
        </nav>
      </div>
    </footer>
  );
}
