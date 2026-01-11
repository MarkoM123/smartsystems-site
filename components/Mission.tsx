"use client";

import { motion } from "framer-motion";

export default function Mission() {
  return (
    <section className="py-32 bg-zinc-900">
      <div className="max-w-6xl mx-auto px-6 text-center">

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold text-white"
        >
          Pametni sistemi koji rade za vas
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1, duration: 0.6 }}
          className="mt-8 text-lg text-zinc-300 max-w-3xl mx-auto"
        >
          Naš cilj je da vaš dom ili poslovni prostor učinimo
          energetski efikasnijim, sigurnijim i jednostavnijim za korišćenje.
          Projektujemo i ugrađujemo sisteme koji se prilagođavaju vašim navikama,
          a ne obrnuto.
        </motion.p>
      </div>
    </section>
  );
}
