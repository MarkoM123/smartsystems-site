"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import MobileMenu from "@/components/MobileMenu";

export default function Header() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      {/* HEADER */}
      <header className="fixed top-0 left-0 w-full z-50">
        <div className="bg-zinc-900/95 backdrop-blur-xl border-b border-white/10">
          <div className="max-w-7xl mx-auto px-6 py-5 flex items-center justify-between">
            {/* LOGO */}
            <Link href="/" className="text-xl font-semibold text-white">
              SmartSystems<span className="text-blue-500">.BG</span>
            </Link>

            {/* DESKTOP NAV */}
            <nav className="hidden md:flex gap-8 text-zinc-300">
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
                className="px-5 py-2 rounded bg-blue-600 text-white hover:bg-blue-500 transition"
              >
                Kontakt
              </Link>
            </nav>

            {/* BURGER */}
            <button
              onClick={() => setOpen(true)}
              className="md:hidden text-white text-2xl"
              aria-label="Open menu"
            >
              ☰
            </button>
          </div>
        </div>
      </header>

      {/* MOBILE MENU */}
      <MobileMenu open={open} onClose={() => setOpen(false)} />
    </>
  );
}
