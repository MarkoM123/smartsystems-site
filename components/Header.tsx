"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Header() {
  const pathname = usePathname();

  return (
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

          {/* NAV */}
          <nav className="flex items-center gap-8 text-base font-medium">
            <NavLink href="/" active={pathname === "/"}>
              Početna
            </NavLink>

            <NavLink href="/heating" active={pathname === "/heating"}>
              Grejanje
            </NavLink>

            <NavLink href="/security" active={pathname === "/security"}>
              Sigurnost
            </NavLink>

            <NavLink href="/automation" active={pathname === "/automation"}>
              Automatika
            </NavLink>

            <Link
              href="/contact"
              className={`ml-4 px-5 py-2 rounded-lg transition ${
                pathname === "/contact"
                  ? "bg-blue-500 text-white"
                  : "bg-blue-600 text-white hover:bg-blue-500"
              }`}
            >
              Kontakt
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
}

function NavLink({
  href,
  active,
  children,
}: {
  href: string;
  active: boolean;
  children: React.ReactNode;
}) {
  return (
    <Link
      href={href}
      className={`transition ${
        active
          ? "text-white"
          : "text-zinc-300 hover:text-white"
      }`}
    >
      {children}
    </Link>
  );
}
