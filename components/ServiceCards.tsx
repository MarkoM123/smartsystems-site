"use client";

import Link from "next/link";
import { motion } from "framer-motion";

const services = [
  {
    title: "Pametno grejanje",
    description:
      "Upravljanje temperaturom, zoniranje po prostorijama i optimizacija potrošnje energije.",
    href: "/heating",
  },
  {
    title: "Pametna sigurnost",
    description:
      "Video nadzor, pametne brave, alarmni sistemi i obaveštenja u realnom vremenu.",
    href: "/security",
  },
  {
    title: "Rasveta & automatika",
    description:
      "Scene, automatika po prisustvu i inteligentna kontrola osvetljenja i prostora.",
    href: "/automation",
  },
];

export default function ServiceCards() {
  return (
    <section className="py-24 bg-zinc-50">
      <div className="max-w-7xl mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold text-center"
        >
          Šta nudimo
        </motion.h2>

        <div className="mt-16 grid gap-8 md:grid-cols-3">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-lg transition"
            >
              <h3 className="text-2xl font-semibold">{service.title}</h3>
              <p className="mt-4 text-gray-500">{service.description}</p>

              <Link
                href={service.href}
                className="inline-block mt-6 text-blue-600 font-medium hover:underline"
              >
                Saznaj više →
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
