"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function CTA() {
  return (
    <section className="relative py-32 bg-zinc-950 overflow-hidden">
      
      {/* GLOW */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 via-cyan-500/10 to-blue-600/20 blur-3xl" />

      <div className="relative z-10 max-w-5xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="rounded-3xl bg-white/5 backdrop-blur-xl border border-white/10 shadow-2xl p-16 text-center"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white">
            Zatražite procenu sistema
          </h2>

          <p className="mt-6 text-lg text-zinc-300 max-w-2xl mx-auto">
            Javite nam se za predlog rešenja prilagođen vašem prostoru,
            navikama i budžetu.
          </p>

          <Link
            href="/contact"
            className="inline-block mt-10 px-8 py-4 rounded-xl 
            bg-blue-600 text-white text-lg font-medium
            hover:bg-blue-500 transition"
          >
            Kontakt
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
