export default function HeatingProcess() {
  return (
    <section className="relative py-28 bg-gradient-to-b from-zinc-950 via-zinc-900 to-zinc-950 text-zinc-100 overflow-hidden">

      {/* BACKGROUND GLOW */}
      <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-blue-500/10 blur-[160px] rounded-full" />

      {/* SECTION INDEX */}
      <div className="absolute top-16 right-10 text-[140px] font-bold text-white/5 select-none">
        03
      </div>

      <div className="relative max-w-6xl mx-auto px-6">

        {/* TITLE */}
        <h2 className="text-4xl md:text-5xl font-bold text-center">
          Kako izgleda <span className="text-blue-400">ugradnja</span> sistema
        </h2>

        {/* ACCENT LINE */}
        <div className="mt-6 h-1 w-20 bg-blue-500 mx-auto rounded-full" />

        <p className="mt-8 text-lg text-zinc-300 max-w-3xl mx-auto text-center">
          Proces ugradnje je jednostavan, brz i prilagođen postojećem sistemu
          grejanja — bez nepotrebnih radova.
        </p>

        {/* STEPS */}
        <div className="mt-20 grid md:grid-cols-4 gap-10">

          {/* STEP 1 */}
          <div className="relative bg-zinc-900/60 backdrop-blur-xl p-8 rounded-2xl border border-white/10 shadow-xl hover:border-blue-500/40 transition">
            <span className="absolute -top-5 left-6 w-10 h-10 rounded-full bg-blue-600 flex items-center justify-center font-bold text-white">
              1
            </span>

            <h3 className="mt-6 text-xl font-semibold text-white">
              Analiza prostora
            </h3>

            <p className="mt-3 text-zinc-400">
              Kratak razgovor i procena postojećeg sistema grejanja, navika i
              potreba korisnika.
            </p>
          </div>

          {/* STEP 2 */}
          <div className="relative bg-zinc-900/60 backdrop-blur-xl p-8 rounded-2xl border border-white/10 shadow-xl hover:border-blue-500/40 transition">
            <span className="absolute -top-5 left-6 w-10 h-10 rounded-full bg-blue-600 flex items-center justify-center font-bold text-white">
              2
            </span>

            <h3 className="mt-6 text-xl font-semibold text-white">
              Predlog rešenja
            </h3>

            <p className="mt-3 text-zinc-400">
              Dobijate jasan predlog sistema prilagođen vašem prostoru i
              očekivanjima.
            </p>
          </div>

          {/* STEP 3 */}
          <div className="relative bg-zinc-900/60 backdrop-blur-xl p-8 rounded-2xl border border-white/10 shadow-xl hover:border-blue-500/40 transition">
            <span className="absolute -top-5 left-6 w-10 h-10 rounded-full bg-blue-600 flex items-center justify-center font-bold text-white">
              3
            </span>

            <h3 className="mt-6 text-xl font-semibold text-white">
              Ugradnja sistema
            </h3>

            <p className="mt-3 text-zinc-400">
              Profesionalna instalacija bez većih građevinskih radova i prekida
              grejanja.
            </p>
          </div>

          {/* STEP 4 */}
          <div className="relative bg-zinc-900/60 backdrop-blur-xl p-8 rounded-2xl border border-white/10 shadow-xl hover:border-blue-500/40 transition">
            <span className="absolute -top-5 left-6 w-10 h-10 rounded-full bg-blue-600 flex items-center justify-center font-bold text-white">
              4
            </span>

            <h3 className="mt-6 text-xl font-semibold text-white">
              Podešavanje i obuka
            </h3>

            <p className="mt-3 text-zinc-400">
              Podešavanje aplikacije, objašnjenje sistema i podrška za dalju
              upotrebu.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}
