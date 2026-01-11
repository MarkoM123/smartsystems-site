"use client";

import { motion } from "framer-motion";
import { useState } from "react";

const capabilities = [
  {
    title: "Pametno grejanje",
    short: "Kontrola, ušteda i komfor",
    items: [
      "Zoniranje po prostorijama",
      "Rasporedi po satima i danima",
      "Upravljanje sa telefona",
      "Detekcija odsustva",
      "Integracija sa vremenskom prognozom",
      "Analitika i optimizacija potrošnje",
    ],
  },
  {
    title: "Pametna sigurnost",
    short: "Zaštita doma i imovine",
    items: [
      "Video nadzor (unutra / spolja)",
      "Pametne brave i kodovi",
      "Alarmni sistemi",
      "Detekcija pokreta i otvaranja",
      "Notifikacije u realnom vremenu",
      "Daljinski nadzor objekta",
    ],
  },
  {
    title: "Automatika & rasveta",
    short: "Komfor i luksuz",
    items: [
      "Scene osvetljenja",
      "Automatsko paljenje / gašenje",
      "Noćni režimi",
      "Prisustvo i senzori",
      "Centralna kontrola",
      "Integracija sa ostalim sistemima",
    ],
  },
];

export default function CapabilityGrid() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section className="py-32 bg-zinc-900">
      <div className="max-w-7xl mx-auto px-6">

        {/* TITLE */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold text-center text-white"
        >
          Šta sve možete da automatizujete
        </motion.h2>

        <p className="mt-6 text-center text-zinc-300 max-w-3xl mx-auto">
          Svaki sistem se projektuje prema vašem prostoru, navikama i potrebama.
        </p>

        {/* GRID */}
        <div className="mt-20 grid md:grid-cols-3 gap-8">
          {capabilities.map((cap, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="rounded-2xl bg-zinc-950 border border-white/10 p-8 shadow-xl"
            >
              <h3 className="text-xl font-semibold text-white">
                {cap.title}
              </h3>

              <p className="mt-2 text-zinc-400">
                {cap.short}
              </p>

              <button
                onClick={() => setOpen(open === index ? null : index)}
                className="mt-6 text-blue-500 hover:text-blue-400 transition"
              >
                {open === index ? "Sakrij detalje" : "Prikaži detalje"}
              </button>

              {open === index && (
                <ul className="mt-6 space-y-2 text-zinc-300">
                  {cap.items.map((item, i) => (
                    <li key={i}>• {item}</li>
                  ))}
                </ul>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
