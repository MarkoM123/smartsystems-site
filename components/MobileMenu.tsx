"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

export default function MobileMenu() {
  const [open, setOpen] = useState(false);

  // Lock scroll when menu is open
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      {/* BURGER BUTTON */}
      <button
        onClick={() => setOpen(true)}
        className="md:hidden text-white"
        aria-label="Open menu"
      >
        <svg
          className="w-7 h-7"
          fill="none"
          stroke="currentColor"
          strokeWidth={2}
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" d="M4 6h16M4 12h16M4 18h16" />
        </svg>
      </button>

      {/* OVERLAY */}
      {open && (
        <div className="fixed inset-0 z-[999]">
          {/* BACKDROP */}
          <div
            className="absolute inset-0 bg-black/60"
            onClick={() => setOpen(false)}
          />

          {/* PANEL */}
          <div className="absolute top-0 right-0 h-full w-[85%] max-w-sm bg-zinc-950 shadow-2xl flex flex-col">

            {/* HEADER */}
            <div className="flex items-center justify-between px-6 py-5 border-b border-white/10">
              <span className="text-lg font-semibold text-white">
                Meni
              </span>
              <button
                onClick={() => setOpen(false)}
                className="text-white"
                aria-label="Close menu"
              >
                <svg
                  className="w-7 h-7"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" d="M6 6l12 12M6 18L18 6" />
                </svg>
              </button>
            </div>

            {/* LINKS */}
            <nav className="flex-1 overflow-y-auto px-6 py-10 flex flex-col gap-6 text-lg text-white">
              <Link href="/" onClick={() => setOpen(false)}>Početna</Link>
              <Link href="/heating" onClick={() => setOpen(false)}>Grejanje</Link>
              <Link href="/security" onClick={() => setOpen(false)}>Sigurnost</Link>
              <Link href="/automation" onClick={() => setOpen(false)}>Automatika</Link>

              <Link
                href="/contact"
                onClick={() => setOpen(false)}
                className="mt-6 px-6 py-4 bg-blue-600 rounded-xl text-center font-medium"
              >
                Kontakt
              </Link>
            </nav>
          </div>
        </div>
      )}
    </>
  );
}
