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
      <header className="sticky top-0 z-50">
        {/* 👇 OVO JE TAČNO ONO ŠTO JE FALILO */}
        <div className="bg-zinc-900/95 backdrop-blur-xl">
          <div className="max-w-7xl mx-auto px-6 py-5 flex items-center justify-between">

            {/* LOGO */}
            <Link
              href="/"
              className="text-xl font-semibold text-white tracking-wide"
            >
              SmartSystems<span className="text-blue-500">.BG</span>
            </Link>

            {/* DESKTOP NAV */}
            <nav className="hidden md:flex items-center gap-8 text-base font-medium text-zinc-300">
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
