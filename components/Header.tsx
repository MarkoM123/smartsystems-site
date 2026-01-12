"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

export default function Header() {
  const [open, setOpen] = useState(false);

  // zaključaj scroll stranice
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      {/* HEADER */}
      <header className="fixed top-0 left-0 w-full z-40">
        <div className="bg-zinc-900/95 backdrop-blur border-b border-white/10">
          <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
            <Link href="/" className="text-lg font-semibold text-white">
              SmartSystems<span className="text-blue-500">.BG</span>
            </Link>

            <nav className="hidden md:flex gap-8 text-zinc-300">
              <Link href="/heating">Grejanje</Link>
              <Link href="/security">Sigurnost</Link>
              <Link href="/automation">Automatika</Link>
              <Link
                href="/contact"
                className="px-4 py-2 rounded bg-blue-600 text-white"
              >
                Kontakt
              </Link>
            </nav>

            <button
              onClick={() => setOpen(true)}
              className="md:hidden text-white text-2xl"
            >
              ☰
            </button>
          </div>
        </div>
      </header>

      {/* FULLSCREEN MOBILE MENU */}
      {open && (
        <div className="fixed inset-0 z-[100] bg-zinc-900 text-white">
          {/* TOP BAR */}
          <div className="flex items-center justify-between px-6 py-4 border-b border-white/10">
            <span className="text-lg font-medium">Meni</span>
            <button
              onClick={() => setOpen(false)}
              className="text-2xl"
            >
              ✕
            </button>
          </div>

          {/* MENU ITEMS */}
          <nav className="flex flex-col text-lg">
            <Link
              href="/heating"
              onClick={() => setOpen(false)}
              className="px-6 py-5 border-b border-white/10"
            >
              Grejanje
            </Link>

            <Link
              href="/security"
              onClick={() => setOpen(false)}
              className="px-6 py-5 border-b border-white/10"
            >
              Sigurnost
            </Link>

            <Link
              href="/automation"
              onClick={() => setOpen(false)}
              className="px-6 py-5 border-b border-white/10"
            >
              Automatika
            </Link>

            <Link
              href="/contact"
              onClick={() => setOpen(false)}
              className="px-6 py-5 text-blue-400 font-semibold"
            >
              Kontakt
            </Link>
          </nav>
        </div>
      )}
    </>
  );
}
