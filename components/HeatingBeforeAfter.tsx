"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function HeatingBeforeAfter() {
  return (
    <section className="py-32 bg-zinc-900">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* CONTAINER */}
        <div className="rounded-3xl bg-zinc-950 border border-white/10 shadow-2xl p-12">
          
          {/* TITLE */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-bold text-center text-white"
          >
            Grejanje – pre i posle pametnog sistema
          </motion.h2>

          {/* IMAGE */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mt-16"
          >
            <Image
              src="/images/heating-before-after.jpg"
              alt="Pre i posle pametnog grejanja"
              width={1200}
              height={600}
              className="rounded-2xl shadow-lg"
            />
          </motion.div>

          {/* COMPARISON */}
          <div className="mt-12 grid md:grid-cols-2 gap-8 text-zinc-300">
            <ul className="space-y-3">
              <li>• Jedna temperatura za ceo stan</li>
              <li>• Grejanje i kad niko nije kući</li>
              <li>• Nema uvida u potrošnju</li>
              <li>• Visoki mesečni računi</li>
            </ul>

            <ul className="space-y-3">
              <li>• Svaka soba ima svoju temperaturu</li>
              <li>• Grejanje samo kada je potrebno</li>
              <li>• Kontrola sa telefona</li>
              <li>• Niži računi i veći komfor</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
