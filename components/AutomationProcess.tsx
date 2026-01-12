export default function AutomationProcess() {
  return (
    <section className="relative py-28 bg-gradient-to-b from-zinc-950 via-zinc-900 to-zinc-950 text-zinc-100 overflow-hidden">

      {/* BACKGROUND GLOW */}
      <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[620px] h-[620px] bg-blue-500/10 blur-[170px] rounded-full" />

      {/* SECTION INDEX */}
      <div className="absolute top-16 left-10 text-[140px] font-bold text-white/5 select-none">
        03
      </div>

      <div className="relative max-w-6xl mx-auto px-6">

        {/* TITLE */}
        <h2 className="text-4xl md:text-5xl font-bold text-center">
          Kako se uvodi <span className="text-blue-400">automatika</span>
        </h2>

        {/* ACCENT LINE */}
        <div className="mt-6 h-1 w-20 bg-blue-500 mx-auto rounded-full" />

        <p className="mt-8 text-lg text-zinc-300 max-w-3xl mx-auto text-center">
          Automatika se uvodi postepeno i bez komplikacija — sistem se prilagođava
          postojećoj instalaciji i vašem načinu života.
        </p>

        {/* STEPS */}
        <div className="mt-20 grid md:grid-cols-4 gap-10">

          {/* STEP 1 */}
          <div className="relative bg-zinc-900/60 backdrop-blur-xl p-8 rounded-2xl border border-white/10 shadow-xl hover:border-blue-500/40 transition">
            <span className="absolute -top-5 left-6 w-10 h-10 rounded-full bg-blue-600 flex items-center justify-center font-bold text-white">
              1
            </span>

            <h3 className="mt-6 text-xl font-semibold text-white">
              Razumevanje potreba
            </h3>

            <p className="mt-3 text-zinc-400">
              Razgovor o prostoru, navikama i funkcijama koje želite da
              automatizujete.
            </p>
          </div>

          {/* STEP 2 */}
          <div className="relative bg-zinc-900/60 backdrop-blur-xl p-8 rounded-2xl border border-white/10 shadow-xl hover:border-blue-500/40 transition">
            <span className="absolute -top-5 left-6 w-10 h-10 rounded-full bg-blue-600 flex items-center justify-center font-bold text-white">
              2
            </span>

            <h3 className="mt-6 text-xl font-semibold text-white">
              Dizajn scenarija
            </h3>

            <p className="mt-3 text-zinc-400">
              Kreiranje scena i pravila — svetlo, roletne, uređaji i
              rasporedi rada.
            </p>
          </div>

          {/* STEP 3 */}
          <div className="relative bg-zinc-900/60 backdrop-blur-xl p-8 rounded-2xl border border-white/10 shadow-xl hover:border-blue-500/40 transition">
            <span className="absolute -top-5 left-6 w-10 h-10 rounded-full bg-blue-600 flex items-center justify-center font-bold text-white">
              3
            </span>

            <h3 className="mt-6 text-xl font-semibold text-white">
              Instalacija
            </h3>

            <p className="mt-3 text-zinc-400">
              Ugradnja kontrolnih modula i povezivanje sa postojećom
              infrastrukturom.
            </p>
          </div>

          {/* STEP 4 */}
          <div className="relative bg-zinc-900/60 backdrop-blur-xl p-8 rounded-2xl border border-white/10 shadow-xl hover:border-blue-500/40 transition">
            <span className="absolute -top-5 left-6 w-10 h-10 rounded-full bg-blue-600 flex items-center justify-center font-bold text-white">
              4
            </span>

            <h3 className="mt-6 text-xl font-semibold text-white">
              Fino podešavanje
            </h3>

            <p className="mt-3 text-zinc-400">
              Testiranje, prilagođavanje scena i obuka za svakodnevno
              korišćenje.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}
