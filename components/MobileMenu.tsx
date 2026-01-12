"use client";

import { createPortal } from "react-dom";
import Link from "next/link";

export default function MobileMenu({
  open,
  onClose,
}: {
  open: boolean;
  onClose: () => void;
}) {
  if (!open) return null;

  return createPortal(
    <div className="fixed inset-0 z-[9999] bg-zinc-900 text-white">
      {/* TOP BAR */}
      <div className="flex items-center justify-between px-6 py-4 border-b border-white/10">
        <span className="text-lg font-medium">Meni</span>
        <button onClick={onClose} className="text-2xl">
          ✕
        </button>
      </div>

      {/* ITEMS */}
      <nav className="flex flex-col text-lg">
        <Link href="/heating" onClick={onClose} className="px-6 py-5 border-b border-white/10">
          Grejanje
        </Link>
        <Link href="/security" onClick={onClose} className="px-6 py-5 border-b border-white/10">
          Sigurnost
        </Link>
        <Link href="/automation" onClick={onClose} className="px-6 py-5 border-b border-white/10">
          Automatika
        </Link>
        <Link href="/contact" onClick={onClose} className="px-6 py-5 text-blue-400 font-semibold">
          Kontakt
        </Link>
      </nav>
    </div>,
    document.body
  );
}
