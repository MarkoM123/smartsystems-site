"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

const services = [
  {
    title: "Pametno grejanje",
    desc: "Precizna kontrola temperature i ušteda energije",
    image: "/images/service-heating.jpg",
    href: "/heating",
  },
  {
    title: "Pametna sigurnost",
    desc: "Video nadzor, alarmi i kontrola pristupa",
    image: "/images/service-security.jpg",
    href: "/security",
  },
  {
    title: "Automatika & rasveta",
    desc: "Komfor, scene i potpuna automatizacija prostora",
    image: "/images/service-automation.jpg",
    href: "/automation",
  },
];

export default function ServiceCards() {
  return (
    <section className="py-32 bg-zinc-950">
      <div className="max-w-7xl mx-auto px-6">

        {/* TITLE */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold text-center text-white"
        >
          Naše usluge
        </motion.h2>

        {/* GRID */}
        <div className="mt-20 grid md:grid-cols-3 gap-8">
          {services.map((service, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="relative"
            >
              {/* GLOW */}
              <div
                className="absolute inset-0 rounded-2xl 
                bg-blue-600/10 opacity-0 group-hover:opacity-100 
                blur-2xl transition pointer-events-none"
              />

              {/* CARD */}
              <Link
                href={service.href}
                className="group block rounded-2xl overflow-hidden 
                bg-zinc-900 border border-white/10 shadow-xl
                transition-all duration-500
                hover:-translate-y-2 hover:shadow-2xl"
              >
                {/* IMAGE */}
                <div className="relative h-56 overflow-hidden">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover transition-transform duration-700 
                    group-hover:scale-110"
                  />
                </div>

                {/* TEXT */}
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-white">
                    {service.title}
                  </h3>
                  <p className="mt-2 text-zinc-400">
                    {service.desc}
                  </p>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
