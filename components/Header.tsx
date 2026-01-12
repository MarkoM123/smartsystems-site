"use client";

import { useState } from "react";
import Link from "next/link";

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* HEADER BAR */}
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

            {/* BURGER (MOBILE) */}
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
      {open && (
        <>
          {/* BACKDROP */}
          <div
            className="fixed inset-0 z-40 bg-black/70 backdrop-blur-sm"
            onClick={() => setOpen(false)}
          />

          {/* MENU PANEL – NO SCROLL, ALL VISIBLE */}
          <div
            className="fixed inset-x-0 top-20 z-50 mx-auto
                       w-[92%] max-w-sm
                       bg-zinc-900
                       rounded-2xl border border-white/10
                       shadow-2xl"
          >
            {/* CLOSE */}
            <button
              onClick={() => setOpen(false)}
              className="absolute top-4 right-4 text-zinc-400 hover:text-white text-xl"
              aria-label="Close menu"
            >
              ✕
            </button>

            {/* NAV */}
            <nav className="flex flex-col divide-y divide-white/10 text-lg">
              <Link
                href="/"
                onClick={() => setOpen(false)}
                className="px-6 py-5 hover:bg-white/5 transition"
              >
                Početna
              </Link>

              <Link
                href="/heating"
                onClick={() => setOpen(false)}
                className="px-6 py-5 hover:bg-white/5 transition"
              >
                Grejanje
              </Link>

              <Link
                href="/security"
                onClick={() => setOpen(false)}
                className="px-6 py-5 hover:bg-white/5 transition"
              >
                Sigurnost
              </Link>

              <Link
                href="/automation"
                onClick={() => setOpen(false)}
                className="px-6 py-5 hover:bg-white/5 transition"
              >
                Automatika
              </Link>

              <Link
                href="/contact"
                onClick={() => setOpen(false)}
                className="px-6 py-5 text-blue-400 font-semibold hover:bg-white/5 transition"
              >
                Kontakt
              </Link>
            </nav>
          </div>
        </>
      )}
    </>
  );
}
