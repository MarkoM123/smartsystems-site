export default function WhyUs() {
  return (
    <section className="py-28 bg-gradient-to-b from-zinc-950 to-zinc-900 text-zinc-100">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <span className="text-blue-500 text-sm font-semibold tracking-wider">
          ZAŠTO MI
        </span>

        <h2 className="mt-4 text-4xl md:text-5xl font-bold">
          Zašto SmartSystems BG
        </h2>

        <p className="mt-6 text-lg text-zinc-300 max-w-3xl mx-auto">
          Ne prodajemo gadgete. Projektujemo funkcionalne sisteme
          koji imaju smisla u realnom prostoru i svakodnevnom životu.
        </p>

        <div className="mt-16 grid md:grid-cols-3 gap-10 text-left">
          {[
            {
              title: "Direktna komunikacija",
              desc: "Bez posrednika – razgovarate direktno sa inženjerom koji projektuje i ugrađuje sistem.",
            },
            {
              title: "Rešenja po meri",
              desc: "Svaki sistem se prilagođava prostoru, navikama i budžetu – bez šablona.",
            },
            {
              title: "Dugoročna podrška",
              desc: "Sistem je modularan i spreman za kasnije proširenje i nadogradnju.",
            },
          ].map((item, i) => (
            <div
              key={i}
              className="rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10 p-8"
            >
              <h3 className="text-xl font-semibold">{item.title}</h3>
              <p className="mt-3 text-zinc-400">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
