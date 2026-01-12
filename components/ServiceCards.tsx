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
              {/* CARD */}
              <Link
                href={service.href}
                className="
                  group block h-full
                  rounded-2xl overflow-hidden
                  bg-zinc-900
                  border border-white/10
                  shadow-xl
                  cursor-pointer
                  transition-all duration-300
                  hover:-translate-y-1
                  hover:border-blue-500/40
                  hover:shadow-2xl hover:shadow-blue-500/10
                  focus-visible:outline-none
                  focus-visible:ring-2
                  focus-visible:ring-blue-500/50
                "
              >
                {/* IMAGE */}
                <div className="relative h-56 overflow-hidden">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="
                      object-cover
                      transition-transform duration-700
                      group-hover:scale-110
                    "
                  />
                </div>

                {/* TEXT */}
                <div className="relative p-6">
                  <h3 className="text-xl font-semibold text-white">
                    {service.title}
                  </h3>
                  <p className="mt-2 text-zinc-400">
                    {service.desc}
                  </p>

                  {/* ARROW INDICATOR */}
                  <span
                    className="
                      absolute bottom-6 right-6
                      text-zinc-500 text-xl
                      transition-all
                      group-hover:text-blue-400
                      group-hover:translate-x-1
                    "
                  >
                    →
                  </span>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
