export default function SecurityWhy() {
  return (
    <section className="relative py-28 bg-gradient-to-b from-zinc-950 via-zinc-900 to-zinc-950 text-zinc-100 overflow-hidden">

      {/* BACKGROUND GLOW */}
      <div className="absolute -top-32 -left-32 w-[500px] h-[500px] bg-blue-500/10 blur-[140px] rounded-full" />

      {/* SECTION INDEX */}
      <div className="absolute top-16 right-10 text-[140px] font-bold text-white/5 select-none">
        01
      </div>

      <div className="relative max-w-6xl mx-auto px-6">

        {/* TITLE */}
        <h2 className="text-4xl md:text-5xl font-bold text-center">
          <span className="text-blue-400">Zašto</span> pametna sigurnost
        </h2>

        {/* ACCENT LINE */}
        <div className="mt-6 h-1 w-20 bg-blue-500 mx-auto rounded-full" />

        <p className="mt-8 text-lg text-zinc-300 max-w-3xl mx-auto text-center">
          Klasični alarmi i kamere često rade izolovano i bez konteksta.
          Pametna sigurnost objedinjuje nadzor, obaveštenja i kontrolu u jedan
          pouzdan sistem.
        </p>

        {/* CARDS */}
        <div className="mt-20 grid md:grid-cols-3 gap-10">

          {/* CARD 1 */}
          <div className="bg-zinc-900/60 backdrop-blur-xl border border-white/10 rounded-2xl p-8 shadow-xl hover:border-blue-500/40 transition">
            <h3 className="text-xl font-semibold text-white">
              Stalni nadzor
            </h3>
            <p className="mt-3 text-zinc-400">
              Pregled prostora u realnom vremenu, istorija događaja i
              obaveštenja direktno na telefonu.
            </p>
          </div>

          {/* CARD 2 */}
          <div className="bg-zinc-900/60 backdrop-blur-xl border border-white/10 rounded-2xl p-8 shadow-xl hover:border-blue-500/40 transition">
            <h3 className="text-xl font-semibold text-white">
              Brza reakcija
            </h3>
            <p className="mt-3 text-zinc-400">
              Trenutna obaveštenja o sumnjivim događajima, pokretu ili
              neovlašćenom pristupu.
            </p>
          </div>

          {/* CARD 3 */}
          <div className="bg-zinc-900/60 backdrop-blur-xl border border-white/10 rounded-2xl p-8 shadow-xl hover:border-blue-500/40 transition">
            <h3 className="text-xl font-semibold text-white">
              Jedinstvena kontrola
            </h3>
            <p className="mt-3 text-zinc-400">
              Kamere, alarmi i pristup objedinjeni u jednoj aplikaciji —
              jednostavno i pregledno.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}
