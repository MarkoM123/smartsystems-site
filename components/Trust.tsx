export default function Trust() {
  return (
    <section className="py-28 bg-gradient-to-b from-zinc-950 to-zinc-900 text-zinc-100">
      <div className="max-w-6xl mx-auto px-6 text-center">
        
        {/* EYEBROW */}
        <span className="text-blue-500 text-sm font-semibold tracking-wider">
          POVERENJE
        </span>

        {/* TITLE */}
        <h2 className="mt-4 text-4xl md:text-5xl font-bold">
          Zašto SmartSystems BG
        </h2>

        {/* SUBTEXT */}
        <p className="mt-6 text-lg text-zinc-300 max-w-3xl mx-auto">
          Fokus na funkcionalnost, pouzdanost i dugoročna rešenja —
          bez marketinških trikova i generičkih paketa.
        </p>

        {/* CARDS */}
        <div className="mt-20 grid md:grid-cols-3 gap-10 text-left">
          
          <div className="rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10 p-8">
            <div className="text-blue-500 text-3xl font-bold mb-4">
              01
            </div>
            <h3 className="text-xl font-semibold">
              Inženjerski pristup
            </h3>
            <p className="mt-3 text-zinc-400">
              Sisteme projektuje elektroinženjer — ne prodavac.
              Fokus je na stabilnosti i smislenoj arhitekturi.
            </p>
          </div>

          <div className="rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10 p-8">
            <div className="text-blue-500 text-3xl font-bold mb-4">
              02
            </div>
            <h3 className="text-xl font-semibold">
              Rešenja po meri
            </h3>
            <p className="mt-3 text-zinc-400">
              Ne vezujemo se za jedan brend — biramo tehnologiju
              koja je realno najbolja za vaš prostor i budžet.
            </p>
          </div>

          <div className="rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10 p-8">
            <div className="text-blue-500 text-3xl font-bold mb-4">
              03
            </div>
            <h3 className="text-xl font-semibold">
              Lokalna podrška
            </h3>
            <p className="mt-3 text-zinc-400">
              Beograd i okolina — direktna komunikacija,
              brza reakcija i mogućnost kasnije nadogradnje.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}
