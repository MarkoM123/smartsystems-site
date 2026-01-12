"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

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

      {/* MOBILE MENU OVERLAY */}
{open && (
  <>
    {/* BACKDROP */}
    <div
      className="fixed inset-0 bg-black/60 z-40"
      onClick={() => setOpen(false)}
    />

    {/* MENU PANEL */}
    <div
      className="fixed top-20 left-1/2 -translate-x-1/2 
                 w-[90%] max-w-sm 
                 bg-zinc-900/95 backdrop-blur-xl 
                 rounded-2xl border border-white/10 
                 shadow-2xl z-50
                 max-h-[75vh] overflow-y-auto"
    >
      <nav className="flex flex-col divide-y divide-white/10">

        <Link
          href="/"
          onClick={() => setOpen(false)}
          className="px-6 py-5 text-lg hover:bg-white/5 transition"
        >
          Početna
        </Link>

        <Link
          href="/heating"
          onClick={() => setOpen(false)}
          className="px-6 py-5 text-lg hover:bg-white/5 transition"
        >
          Grejanje
        </Link>

        <Link
          href="/security"
          onClick={() => setOpen(false)}
          className="px-6 py-5 text-lg hover:bg-white/5 transition"
        >
          Sigurnost
        </Link>

        <Link
          href="/automation"
          onClick={() => setOpen(false)}
          className="px-6 py-5 text-lg hover:bg-white/5 transition"
        >
          Automatika
        </Link>

        <Link
          href="/contact"
          onClick={() => setOpen(false)}
          className="px-6 py-5 text-lg font-semibold text-blue-400 hover:bg-white/5 transition"
        >
          Kontakt
        </Link>
      </nav>

      {/* SCROLL HINT */}
      <div className="pointer-events-none absolute bottom-0 left-0 w-full h-8 
                      bg-gradient-to-t from-zinc-900 to-transparent rounded-b-2xl" />
    </div>
  </>
)}
