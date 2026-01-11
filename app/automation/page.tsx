import Image from "next/image";

export const metadata = {
  title: "Pametna automatika i rasveta | Smart home rešenja – Beograd",
  description:
    "Pametna rasveta, automatizacija prostora i scene prilagođene vašem načinu života. Smart home rešenja u Beogradu.",

  openGraph: {
    title: "Pametna automatika | SmartSystems BG",
    description:
      "Automatizacija rasvete i pametne scene za veći komfor.",
    url: "https://smartsystems-site.vercel.app/automation",
    images: [
      {
        url: "https://smartsystems-site.vercel.app/images/service-automation.jpg",
        width: 1200,
        height: 630,
        alt: "Pametna automatika – SmartSystems BG",
      },
    ],
  },
};


export default function AutomationPage() {
  return (
    <main className="bg-zinc-950 text-zinc-100">

      {/* HERO */}
      <section className="relative h-[70vh] flex items-center">
        <Image
          src="/images/automation-hero.jpg"
          alt="Pametna automatizacija"
          fill
          className="object-cover opacity-60"
        />
        <div className="absolute inset-0 bg-black/60" />

        <div className="relative z-10 max-w-6xl mx-auto px-6">
          <h1 className="text-5xl md:text-6xl font-bold">
            Pametna automatizacija prostora
          </h1>
          <p className="mt-6 text-xl text-zinc-300 max-w-3xl">
            Automatizujte svetla, scene, senzore i rutine
            u jednom povezanom sistemu.
          </p>
        </div>
      </section>

      {/* WHAT */}
      <section className="py-24">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-3xl font-semibold">
            Automatika koja radi za vas
          </h2>
          <p className="mt-6 text-lg text-zinc-400">
            Pametna automatizacija eliminiše ručne radnje i
            prilagođava prostor vašim navikama — bez komplikacija.
          </p>
        </div>
      </section>

      {/* HOW */}
      <section className="py-24 bg-zinc-900">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
          <Image
            src="/images/automation-system.jpg"
            alt="Automatika"
            width={600}
            height={400}
            className="rounded-xl"
          />

          <div>
            <h3 className="text-3xl font-semibold">
              Šta se automatizuje
            </h3>
            <ul className="mt-6 space-y-3 text-zinc-300">
              <li>• Pametna rasveta i scene</li>
              <li>• Senzori prisustva</li>
              <li>• Vremenski i uslovni scenariji</li>
              <li>• Centralna kontrola</li>
              <li>• Integracija sa grejanjem i sigurnošću</li>
            </ul>
          </div>
        </div>
      </section>

      {/* USE CASES */}
      <section className="py-24">
        <div className="max-w-6xl mx-auto px-6">
          <h3 className="text-3xl font-semibold">
            Primeri upotrebe
          </h3>

          <div className="mt-10 grid md:grid-cols-3 gap-8 text-zinc-300">
            <div>
              <h4 className="font-semibold">Stan</h4>
              <p className="mt-2 text-zinc-400">
                Scene svetla, noćni režimi,
                automatika hodnika.
              </p>
            </div>

            <div>
              <h4 className="font-semibold">Kuća</h4>
              <p className="mt-2 text-zinc-400">
                Automatika spoljašnjeg osvetljenja,
                senzori pokreta.
              </p>
            </div>

            <div>
              <h4 className="font-semibold">Kancelarija</h4>
              <p className="mt-2 text-zinc-400">
                Automatika po prisustvu,
                energetska efikasnost.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-zinc-900 text-center">
        <h3 className="text-3xl font-semibold">
          Želite pametniji prostor?
        </h3>
        <p className="mt-4 text-zinc-400">
          Automatizacija prilagođena vašem načinu života.
        </p>
        <a
          href="/contact"
          className="inline-block mt-8 px-8 py-4 bg-blue-600 rounded-xl"
        >
          Kontaktirajte nas
        </a>
      </section>
    </main>
  );
}
