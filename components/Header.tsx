"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

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
          <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
            <Link href="/" className="text-lg font-semibold text-white">
              SmartSystems<span className="text-blue-500">.BG</span>
            </Link>

            <nav className="hidden md:flex gap-8 text-zinc-300">
              <Link href="/heating">Grejanje</Link>
              <Link href="/security">Sigurnost</Link>
              <Link href="/automation">Automatika</Link>
              <Link
                href="/contact"
                className="ml-4 px-5 py-2 rounded-lg bg-blue-600 text-white"
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

      {/* MOBILE MENU – NO SCROLL, ALL FITS */}
      {open && (
        <div className="fixed inset-0 z-50 bg-zinc-900 flex flex-col">
          {/* CLOSE */}
          <button
            onClick={() => setOpen(false)}
            className="absolute top-4 right-4 text-zinc-400 text-2xl"
          >
            ✕
          </button>

          {/* CENTERED NAV */}
          <nav className="flex flex-col justify-center flex-1 text-lg divide-y divide-white/10">
            <Link
              href="/"
              onClick={() => setOpen(false)}
              className="px-6 py-4 text-center"
            >
              Početna
            </Link>
            <Link
              href="/heating"
              onClick={() => setOpen(false)}
              className="px-6 py-4 text-center"
            >
              Grejanje
            </Link>
            <Link
              href="/security"
              onClick={() => setOpen(false)}
              className="px-6 py-4 text-center"
            >
              Sigurnost
            </Link>
            <Link
              href="/automation"
              onClick={() => setOpen(false)}
              className="px-6 py-4 text-center"
            >
              Automatika
            </Link>
            <Link
              href="/contact"
              onClick={() => setOpen(false)}
              className="px-6 py-4 text-center text-blue-400 font-semibold"
            >
              Kontakt
            </Link>
          </nav>
        </div>
      )}
    </>
  );
}
