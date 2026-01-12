"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function CTA() {
  return (
    <section className="relative py-32 bg-gradient-to-b from-zinc-900 via-zinc-950 to-black text-zinc-100 overflow-hidden">

      {/* SUBTLE GLOW */}
      <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-blue-500/10 blur-[180px] rounded-full" />

      {/* DIVIDER LINE */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

      <div className="relative max-w-5xl mx-auto px-6 text-center">

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold"
        >
          Spremni ste za pametnije rešenje?
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1, duration: 0.6 }}
          className="mt-8 text-lg text-zinc-300 max-w-2xl mx-auto"
        >
          Javite nam se za kratak razgovor i saznajte da li pametni sistem ima
          smisla za vaš prostor.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="mt-14 flex flex-col sm:flex-row gap-6 justify-center"
        >
          <Link
            href="/contact"
            className="px-10 py-4 rounded-xl bg-blue-600 text-white text-lg font-medium
            hover:bg-blue-500 transition"
          >
            Zatraži procenu
          </Link>

          <a
            href="tel:+381658258144"
            className="px-10 py-4 rounded-xl border border-white/20 text-white text-lg font-medium
            hover:border-white/40 transition"
          >
            Pozovi direktno
          </a>
        </motion.div>

      </div>
    </section>
  );
}
