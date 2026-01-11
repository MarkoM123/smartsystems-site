"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center px-6">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center max-w-4xl"
      >
        <h1 className="text-5xl md:text-6xl font-bold">
          Pametni sistemi za stanove i objekte
        </h1>

        <p className="mt-6 text-xl text-gray-500">
          Grejanje • Sigurnost • Automatika
          <br />
          Beograd
        </p>

        <a
          href="/contact"
          className="inline-block mt-10 px-8 py-4 bg-blue-600 text-white rounded-xl hover:scale-105 transition"
        >
          Zatraži procenu
        </a>
      </motion.div>
    </section>
  );
}
