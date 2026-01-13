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
        <div className="mt-20 grid gap-8 md:grid-cols-3">
          {services.map((service, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="relative"
            >
              <Link
                href={service.href}
                className="
                  group relative block h-full
                  rounded-2xl overflow-hidden
                  bg-zinc-900
                  border border-white/10
                  shadow-lg
                  transition-all duration-300 ease-out
                  hover:-translate-y-2
                  hover:border-blue-500/40
                  hover:shadow-2xl hover:shadow-blue-500/10
                  active:scale-[0.98]
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
                      transition-transform duration-700 ease-out
                      group-hover:scale-110
                    "
                  />

                  {/* IMAGE OVERLAY */}
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition" />
                </div>

                {/* CONTENT */}
                <div className="relative p-6 pb-14">
                  <h3 className="text-xl font-semibold text-white">
                    {service.title}
                  </h3>

                  <p className="mt-2 text-zinc-400 leading-relaxed">
                    {service.desc}
                  </p>

                  {/* CTA INDICATOR */}
                  <span
                    className="
                      absolute bottom-5 right-6
                      flex items-center gap-1
                      text-sm font-medium
                      text-zinc-500
                      transition-all
                      group-hover:text-blue-400
                      group-hover:translate-x-1
                    "
                  >
                    Saznaj više
                    <span className="text-lg">→</span>
                  </span>
                </div>

                {/* GLOW */}
                <div
                  className="
                    pointer-events-none
                    absolute inset-0
                    rounded-2xl
                    opacity-0
                    group-hover:opacity-100
                    transition
                    bg-gradient-to-br
                    from-blue-500/10 via-transparent to-transparent
                  "
                />
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
