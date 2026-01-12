"use client";

import { motion } from "framer-motion";

const steps = [
  {
    step: "1",
    title: "Konsultacija",
    desc: "Kratak razgovor o prostoru, potrebama i očekivanjima.",
  },
  {
    step: "2",
    title: "Predlog rešenja",
    desc: "Jasan plan sistema i okvirna cena bez skrivenih troškova.",
  },
  {
    step: "3",
    title: "Ugradnja",
    desc: "Profesionalna instalacija i testiranje sistema na licu mesta.",
  },
  {
    step: "4",
    title: "Podrška",
    desc: "Podrška, održavanje i mogućnost kasnije nadogradnje.",
  },
];

export default function ProcessSteps() {
  return (
    <section className="py-28 bg-zinc-900 text-zinc-100">
      <div className="max-w-6xl mx-auto px-6 text-center">

        {/* EYEBROW */}
        <span className="text-blue-500 text-sm font-semibold tracking-wider">
          PROCES
        </span>

        {/* TITLE */}
        <h2 className="mt-4 text-4xl md:text-5xl font-bold">
          Kako izgleda saradnja
        </h2>

        {/* STEPS */}
        <div className="mt-20 grid md:grid-cols-4 gap-8">
          {steps.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="
                relative rounded-3xl
                bg-white/5 backdrop-blur-xl
                border border-white/10
                p-10 text-center
                shadow-xl
              "
            >
              {/* STEP CIRCLE */}
              <div className="
                mx-auto w-14 h-14
                rounded-full
                bg-blue-600/20
                flex items-center justify-center
                text-blue-400 text-xl font-bold
                shadow-inner
              ">
                {item.step}
              </div>

              <h3 className="mt-6 text-xl font-semibold">
                {item.title}
              </h3>

              <p className="mt-3 text-zinc-400 text-sm leading-relaxed">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
