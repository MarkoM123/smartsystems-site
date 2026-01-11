"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function ContactPage() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">

      {/* BACKGROUND IMAGE */}
      <Image
        src="/images/contact-hero.jpg"
        alt="Kontakt SmartSystems"
        fill
        priority
        className="object-cover"
      />

      {/* DARK OVERLAY */}
      <div className="absolute inset-0 bg-black/70" />

      {/* CONTENT */}
      <div className="relative z-10 w-full max-w-6xl mx-auto px-6">

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold text-white text-center"
        >
          Kontaktirajte nas
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.6 }}
          className="mt-6 text-lg text-zinc-300 text-center max-w-2xl mx-auto"
        >
          Izaberite način komunikacije koji vam najviše odgovara.
        </motion.p>

        <div className="mt-16 grid md:grid-cols-2 gap-10">

          {/* CALL CARD */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            className="bg-white/10 backdrop-blur-xl rounded-2xl p-10 text-white shadow-xl"
          >
            <h2 className="text-2xl font-semibold">
              📞 Pozovite nas direktno
            </h2>

            <p className="mt-4 text-zinc-300">
              Ako želite brzu konsultaciju ili imate konkretna pitanja,
              slobodno nas pozovite.
            </p>

            <a
              href="tel:+381658258144"
              className="inline-block mt-8 text-3xl font-bold text-blue-400 hover:text-blue-300 transition"
            >
              +381 65 8258 144
            </a>

            <p className="mt-4 text-sm text-zinc-400">
              Radnim danima 09–18h
            </p>
          </motion.div>

          {/* FORM CARD */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            className="bg-white/95 backdrop-blur-xl rounded-2xl p-8 shadow-2xl text-zinc-900"
          >
            <h2 className="text-2xl font-semibold">
              ✍️ Zatražite procenu
            </h2>

            <form
              action="https://formspree.io/f/xpqqaelv"
              method="POST"
              className="mt-6 space-y-4"
            >
              <input
                type="text"
                name="name"
                placeholder="Ime i prezime"
                required
                className="w-full px-4 py-3 rounded-lg border border-zinc-300 focus:ring-2 focus:ring-blue-500"
              />

              <input
                type="email"
                name="email"
                placeholder="Email adresa"
                required
                className="w-full px-4 py-3 rounded-lg border border-zinc-300 focus:ring-2 focus:ring-blue-500"
              />

              <textarea
                name="message"
                rows={4}
                placeholder="Ukratko opišite prostor i potrebe"
                required
                className="w-full px-4 py-3 rounded-lg border border-zinc-300 focus:ring-2 focus:ring-blue-500"
              />

              <button
                type="submit"
                className="w-full mt-4 px-6 py-4 rounded-xl bg-blue-600 text-white font-medium hover:bg-blue-500 transition"
              >
                Pošalji upit
              </button>
            </form>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
