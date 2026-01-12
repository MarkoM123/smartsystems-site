import Image from "next/image";
import AutomationWhy from "@/components/AutomationWhy";
import AutomationUseCases from "@/components/AutomationUseCases";
import AutomationProcess from "@/components/AutomationProcess";




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

      {/* WHY */}
      <AutomationWhy />

      {/* USE CASES */}
      <AutomationUseCases />

      {/* PROCESS */}
      <AutomationProcess />

     <section className="relative py-32 overflow-hidden bg-gradient-to-b from-zinc-900 via-zinc-950 to-black">

  {/* SUBTLE GLOW */}
  <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.15),transparent_60%)]" />

  <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
    <div className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl shadow-2xl p-16">

      <h3 className="text-4xl md:text-5xl font-bold text-white">
        Pametniji prostor. Manje razmišljanja.
      </h3>

      <p className="mt-6 text-lg text-zinc-300 max-w-2xl mx-auto">
        Automatizujemo rasvetu, scene i svakodnevne radnje tako da se
        prostor prilagođava vama – ne obrnuto.
      </p>

      <a
        href="/contact"
        className="inline-flex items-center gap-3 mt-10 px-10 py-4 rounded-xl
        bg-blue-600 text-white text-lg font-medium
        hover:bg-blue-500 hover:scale-[1.02] transition"
      >
        Kontaktirajte nas
        <span className="text-xl">→</span>
      </a>
    </div>
  </div>
</section>

    </main>
  );
}
