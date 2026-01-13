"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative min-h-screen pt-[88px] flex items-center justify-center overflow-hidden bg-[#020617]">

      {/* BACKGROUND IMAGE */}
      <Image
        src="/images/hero-smart-home.jpg"
        alt="Pametna kuća sa smart sistemima"
        fill
        priority
        className="object-cover"
      />

      {/* DARK OVERLAY – da tekst ostane čitljiv */}
      <div className="absolute inset-0 bg-black/50" />

      {/* ANIMATED GRADIENT (SADA SU TILNIJI) */}
      <motion.div
        className="absolute inset-0 opacity-40"
        initial={{ backgroundPosition: "0% 50%" }}
        animate={{ backgroundPosition: "100% 50%" }}
        transition={{
          duration: 30,
          repeat: Infinity,
          repeatType: "mirror",
          ease: "linear",
        }}
        style={{
          background:
            "radial-gradient(circle at 30% 20%, #0f1c3a, #020617 60%)",
        }}
      />

      {/* PARTICLE LAYER */}
      <div className="absolute inset-0 pointer-events-none particles" />

      {/* VIGNETTE */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-black/30" />

      {/* CONTENT */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9 }}
          className="text-5xl md:text-6xl font-bold text-white"
        >
          Pametni sistemi za stanove i objekte
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15, duration: 0.8 }}
          className="mt-8 text-lg md:text-xl text-zinc-300"
        >
          Grejanje • Sigurnost • Automatika
          <br />
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="mt-14"
        >
          <Link
            href="/contact"
            className="inline-block px-10 py-4 rounded-xl 
            bg-blue-600 text-white text-lg font-medium
            hover:bg-blue-500 transition
            shadow-lg shadow-blue-600/40"
          >
            Zatraži procenu
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
