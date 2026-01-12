"use client";

import { useState } from "react";
import Link from "next/link";

export default function MobileMenu() {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* BURGER BUTTON */}
      <button
        onClick={() => setOpen(true)}
        className="md:hidden text-white focus:outline-none"
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

      {/* OVERLAY MENU */}
      {open && (
        <div className="fixed inset-0 z-[100] bg-zinc-950/95 backdrop-blur-xl">
          {/* CLOSE */}
          <button
            onClick={() => setOpen(false)}
            className="absolute top-6 right-6 text-white"
            aria-label="Close menu"
          >
            <svg
              className="w-8 h-8"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" d="M6 6l12 12M6 18L18 6" />
            </svg>
          </button>

          {/* LINKS */}
          <nav className="h-full flex flex-col items-center justify-center gap-10 text-2xl font-medium text-white">
            <Link href="/" onClick={() => setOpen(false)}>Početna</Link>
            <Link href="/heating" onClick={() => setOpen(false)}>Grejanje</Link>
            <Link href="/security" onClick={() => setOpen(false)}>Sigurnost</Link>
            <Link href="/automation" onClick={() => setOpen(false)}>Automatika</Link>
            <Link
              href="/contact"
              onClick={() => setOpen(false)}
              className="mt-4 px-8 py-4 bg-blue-600 rounded-xl"
            >
              Kontakt
            </Link>
          </nav>
        </div>
      )}
    </>
  );
}
