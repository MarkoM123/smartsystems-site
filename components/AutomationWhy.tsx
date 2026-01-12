export default function AutomationWhy() {
  return (
    <section className="relative py-28 bg-gradient-to-b from-zinc-950 via-zinc-900 to-zinc-950 text-zinc-100 overflow-hidden">

      {/* BACKGROUND GLOW */}
      <div className="absolute -top-32 -right-32 w-[520px] h-[520px] bg-blue-500/10 blur-[150px] rounded-full" />

      {/* SECTION INDEX */}
      <div className="absolute top-16 left-10 text-[140px] font-bold text-white/5 select-none">
        01
      </div>

      <div className="relative max-w-6xl mx-auto px-6">

        {/* TITLE */}
        <h2 className="text-4xl md:text-5xl font-bold text-center">
          <span className="text-blue-400">Zašto</span> pametna automatika
        </h2>

        {/* ACCENT LINE */}
        <div className="mt-6 h-1 w-20 bg-blue-500 mx-auto rounded-full" />

        <p className="mt-8 text-lg text-zinc-300 max-w-3xl mx-auto text-center">
          Pametna automatika povezuje rasvetu, uređaje i scene u jedan sistem
          koji se prilagođava vašim navikama i svakodnevnom životu.
        </p>

        {/* CARDS */}
        <div className="mt-20 grid md:grid-cols-3 gap-10">

          <div className="bg-zinc-900/60 backdrop-blur-xl border border-white/10 rounded-2xl p-8 shadow-xl hover:border-blue-500/40 transition">
            <h3 className="text-xl font-semibold text-white">
              Više komfora
            </h3>
            <p className="mt-3 text-zinc-400">
              Svetla, roletne i uređaji rade automatski, bez stalnog
              razmišljanja i ručnog upravljanja.
            </p>
          </div>

          <div className="bg-zinc-900/60 backdrop-blur-xl border border-white/10 rounded-2xl p-8 shadow-xl hover:border-blue-500/40 transition">
            <h3 className="text-xl font-semibold text-white">
              Jednostavno upravljanje
            </h3>
            <p className="mt-3 text-zinc-400">
              Sve kontrolišete sa jednog mesta — telefon, tablet ili zidni
              panel.
            </p>
          </div>

          <div className="bg-zinc-900/60 backdrop-blur-xl border border-white/10 rounded-2xl p-8 shadow-xl hover:border-blue-500/40 transition">
            <h3 className="text-xl font-semibold text-white">
              Fleksibilnost
            </h3>
            <p className="mt-3 text-zinc-400">
              Sistem raste sa vašim potrebama i može se postepeno
              nadograđivati.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}
