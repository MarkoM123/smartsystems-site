"use client";

import Image from "next/image";
import { motion } from "framer-motion";
export const metadata = {
  title: "Kontakt | SmartSystems BG – Pametni sistemi Beograd",
  description:
    "Kontaktirajte SmartSystems BG. Pozovite nas ili pošaljite upit za procenu pametnog sistema u vašem prostoru.",

  openGraph: {
    title: "Kontakt | SmartSystems BG",
    description:
      "Zatražite procenu pametnog sistema za vaš dom ili objekat.",
    url: "https://smartsystems-site.vercel.app/contact",
    images: [
      {
        url: "https://smartsystems-site.vercel.app/images/contact-hero.jpg",
        width: 1200,
        height: 630,
        alt: "Kontakt SmartSystems BG",
      },
    ],
  },
};


export default function ContactPage() {
  return (
    <section className="relative min-h-screen overflow-hidden">

      {/* BACKGROUND IMAGE */}
      <Image
        src="/images/contact-hero.jpg"
        alt="Kontakt SmartSystems"
        fill
        priority
        className="object-cover"
      />

      {/* DARK GRADIENT OVERLAY */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/70 to-black/60" />

      {/* CONTENT WRAPPER */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 pt-32 pb-24">

        {/* HERO TEXT */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl mb-20"
        >
          <h1 className="text-5xl md:text-6xl font-bold text-white drop-shadow-lg">
            Kontaktirajte nas
          </h1>

          <p className="mt-6 text-lg text-zinc-300">
            Izaberite način komunikacije koji vam najviše odgovara.
          </p>
        </motion.div>

        {/* GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-stretch">

          {/* CALL CARD */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            className="max-w-md rounded-2xl bg-zinc-900/80 backdrop-blur-xl p-10 text-white shadow-2xl flex flex-col justify-center"
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
              className="mt-8 text-3xl font-bold text-blue-400 hover:text-blue-300 transition"
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
            className="rounded-2xl bg-white/95 backdrop-blur-xl p-10 shadow-2xl text-zinc-900 flex flex-col justify-center"
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
