"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import HeatingBeforeAfter from "@/components/Process";
import CTA from "@/components/CTA";


export default function HeatingPage() {
  return (
    <>
      {/* HERO */}
      <section className="relative h-[90vh] flex items-center">
        <Image
          src="/images/heating-hero.jpg"
          alt="Pametno grejanje"
          fill
          priority
          className="object-cover"
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/30 pointer-events-none" />

        <div className="relative z-10 max-w-5xl mx-auto px-6">
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-6xl font-bold text-white"
          >
            Pametno upravljanje grejanjem
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="mt-6 text-xl text-gray-200 max-w-2xl"
          >
            Precizna kontrola temperature, zoniranje po prostorijama i
            optimizacija potrošnje energije – bez komplikacija.
          </motion.p>
        </div>
      </section>
      <HeatingBeforeAfter />
      <CTA />
    </>
  );
}
