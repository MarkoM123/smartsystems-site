import Image from "next/image";
import SecurityWhy from "@/components/SecurityWhy";
import SecurityUseCases from "@/components/SecurityUseCases";
import SecurityProcess from "@/components/SecurityProcess";


export default function SecurityPage() {
  return (
    <main className="bg-zinc-950 text-zinc-100">

      {/* HERO */}
      <section className="relative h-[70vh] flex items-center">
        <Image
          src="/images/security-hero.jpg"
          alt="Pametna sigurnost"
          fill
          className="object-cover opacity-60"
        />
        <div className="absolute inset-0 bg-black/60" />

        <div className="relative z-10 max-w-6xl mx-auto px-6">
          <h1 className="text-5xl md:text-6xl font-bold">
            Pametna sigurnost objekta
          </h1>
          <p className="mt-6 text-xl text-zinc-300 max-w-3xl">
            Video nadzor, alarmi i kontrola pristupa —
            integrisani u jedan pouzdan sistem.
          </p>
        </div>
      </section>

      {/* PROBLEM */}
      <section className="py-24">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-3xl font-semibold">
            Klasični sistemi više nisu dovoljni
          </h2>
          <p className="mt-6 text-zinc-400 text-lg">
            Odvojene kamere, alarm bez konteksta i fizički ključevi
            ne pružaju stvarnu sigurnost. Pametna sigurnost znači
            pregled, automatiku i reakciju u realnom vremenu.
          </p>
        </div>
      </section>

      {/* SOLUTION */}
      <section className="py-24 bg-zinc-900">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
          <div>
            <h3 className="text-3xl font-semibold">
              Jedinstveni sigurnosni ekosistem
            </h3>
            <ul className="mt-6 space-y-3 text-zinc-300">
              <li>• Video nadzor sa AI detekcijom</li>
              <li>• Alarmni sistemi i senzori</li>
              <li>• Pametne brave i kodovi</li>
              <li>• Notifikacije u realnom vremenu</li>
              <li>• Daljinski nadzor i servis</li>
            </ul>
          </div>

          <Image
            src="/images/security-system.jpg"
            alt="Sigurnosni sistem"
            width={600}
            height={400}
            className="rounded-xl"
          />
        </div>
      </section>

      {/* SCENARIOS */}
      <section className="py-24">
        <div className="max-w-6xl mx-auto px-6">
          <h3 className="text-3xl font-semibold">
            Tipični scenariji
          </h3>

          <div className="mt-10 grid md:grid-cols-3 gap-8 text-zinc-300">
            <div>
              <h4 className="font-semibold">Stan</h4>
              <p className="mt-2 text-zinc-400">
                Praćenje ulaza, alarm tokom odsustva,
                notifikacije na telefon.
              </p>
            </div>

            <div>
              <h4 className="font-semibold">Kuća</h4>
              <p className="mt-2 text-zinc-400">
                Kamere za dvorište, senzori kapija,
                automatsko osvetljenje.
              </p>
            </div>

            <div>
              <h4 className="font-semibold">Poslovni prostor</h4>
              <p className="mt-2 text-zinc-400">
                Kontrola pristupa zaposlenih,
                evidencija i nadzor.
              </p>
            </div>
          </div>
        </div>
      </section>
      <SecurityWhy />
      <SecurityUseCases />
      <SecurityProcess />
      
<section className="relative py-32 bg-gradient-to-b from-zinc-900 via-zinc-950 to-black text-zinc-100 overflow-hidden">

  {/* SUBTLE GLOW */}
  <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-blue-500/10 blur-[180px] rounded-full" />

  {/* DIVIDER */}
  <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

  <div className="relative max-w-5xl mx-auto px-6 text-center">

    <h3 className="text-4xl md:text-5xl font-bold">
      Želite da <span className="text-blue-400">zaštitite</span> svoj prostor?
    </h3>

    <p className="mt-8 text-lg text-zinc-300 max-w-2xl mx-auto">
      Projektujemo sigurnosni sistem prilagođen vašem objektu, navikama i
      nivou zaštite koji vam je potreban.
    </p>

    <div className="mt-14 flex flex-col sm:flex-row gap-6 justify-center">
      <a
        href="/contact"
        className="px-10 py-4 rounded-xl bg-blue-600 text-white text-lg font-medium
        hover:bg-blue-500 transition"
      >
        Zatraži procenu
      </a>

      <a
        href="tel:+381658258144"
        className="px-10 py-4 rounded-xl border border-white/20 text-white text-lg font-medium
        hover:border-white/40 transition"
      >
        Pozovi direktno
      </a>
    </div>

  </div>
</section>
    </main>
  );
}
