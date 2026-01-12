export default function HeatingWhy() {
  return (
    <section className="relative py-28 bg-gradient-to-b from-zinc-950 via-zinc-900 to-zinc-950 text-zinc-100 overflow-hidden">

      {/* BACKGROUND GLOW */}
      <div className="absolute -top-32 -left-32 w-[480px] h-[480px] bg-blue-500/10 blur-[140px] rounded-full" />

      {/* SECTION INDEX */}
      <div className="absolute top-16 right-10 text-[140px] font-bold text-white/5 select-none">
        01
      </div>

      <div className="relative max-w-6xl mx-auto px-6">

        {/* TITLE */}
        <h2 className="text-4xl md:text-5xl font-bold text-center">
          <span className="text-blue-400">Zašto</span> pametno upravljanje grejanjem
        </h2>

        {/* ACCENT LINE */}
        <div className="mt-6 h-1 w-20 bg-blue-500 mx-auto rounded-full" />

        <p className="mt-8 text-lg text-zinc-300 max-w-3xl mx-auto text-center">
          Klasični termostati greju ceo prostor jednako, bez obzira da li ste kod
          kuće ili ne. Pametno grejanje rešava taj problem kroz preciznu kontrolu
          i optimizaciju potrošnje.
        </p>

        {/* CARDS */}
        <div className="mt-20 grid md:grid-cols-3 gap-10">

          <div className="bg-zinc-900/60 backdrop-blur-xl border border-white/10 rounded-2xl p-8 shadow-xl hover:border-blue-500/40 transition">
            <h3 className="text-xl font-semibold text-white">
              Niži računi
            </h3>
            <p className="mt-3 text-zinc-400">
              Grejanje samo kada i gde je potrebno – bez rasipanja energije i
              nepotrebnih troškova.
            </p>
          </div>

          <div className="bg-zinc-900/60 backdrop-blur-xl border border-white/10 rounded-2xl p-8 shadow-xl hover:border-blue-500/40 transition">
            <h3 className="text-xl font-semibold text-white">
              Komfor po sobama
            </h3>
            <p className="mt-3 text-zinc-400">
              Svaka prostorija ima svoju temperaturu i individualni raspored
              grejanja.
            </p>
          </div>

          <div className="bg-zinc-900/60 backdrop-blur-xl border border-white/10 rounded-2xl p-8 shadow-xl hover:border-blue-500/40 transition">
            <h3 className="text-xl font-semibold text-white">
              Potpuna kontrola
            </h3>
            <p className="mt-3 text-zinc-400">
              Upravljanje putem telefona, čak i kada niste kod kuće ili ste na
              putu.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}
