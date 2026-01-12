export default function AutomationUseCases() {
  return (
    <section className="relative py-28 bg-gradient-to-b from-zinc-900 via-zinc-950 to-zinc-900 text-zinc-100 overflow-hidden">

      {/* BACKGROUND GLOW */}
      <div className="absolute -bottom-32 -left-32 w-[520px] h-[520px] bg-blue-500/10 blur-[150px] rounded-full" />

      {/* SECTION INDEX */}
      <div className="absolute top-16 right-10 text-[140px] font-bold text-white/5 select-none">
        02
      </div>

      <div className="relative max-w-6xl mx-auto px-6">

        {/* TITLE */}
        <h2 className="text-4xl md:text-5xl font-bold text-center">
          Kako izgleda pametna <span className="text-blue-400">automatika</span> u praksi
        </h2>

        {/* ACCENT LINE */}
        <div className="mt-6 h-1 w-20 bg-blue-500 mx-auto rounded-full" />

        <p className="mt-8 text-lg text-zinc-300 max-w-3xl mx-auto text-center">
          Automatika ne znači komplikaciju — već jednostavniji život kroz
          unapred definisane scene i pametna pravila.
        </p>

        {/* USE CASE CARDS */}
        <div className="mt-20 grid md:grid-cols-3 gap-10">

          {/* CASE 1 */}
          <div className="relative bg-zinc-900/60 backdrop-blur-xl p-8 rounded-2xl border border-white/10 shadow-xl hover:border-blue-500/40 transition">
            <span className="absolute top-6 right-6 text-sm text-blue-400 font-medium">
              Stan
            </span>

            <h3 className="text-xl font-semibold text-white">
              Dnevne scene
            </h3>

            <p className="mt-4 text-zinc-400">
              Jednim klikom aktivirate scenarije poput „Veče“, „Film“ ili
              „Odlazak od kuće“ — svetla, roletne i uređaji se automatski
              prilagođavaju.
            </p>
          </div>

          {/* CASE 2 */}
          <div className="relative bg-zinc-900/60 backdrop-blur-xl p-8 rounded-2xl border border-white/10 shadow-xl hover:border-blue-500/40 transition">
            <span className="absolute top-6 right-6 text-sm text-blue-400 font-medium">
              Kuća
            </span>

            <h3 className="text-xl font-semibold text-white">
              Automatika po rasporedu
            </h3>

            <p className="mt-4 text-zinc-400">
              Svetla, grejanje i uređaji rade po vremenskom rasporedu ili
              prema prisustvu ukućana.
            </p>
          </div>

          {/* CASE 3 */}
          <div className="relative bg-zinc-900/60 backdrop-blur-xl p-8 rounded-2xl border border-white/10 shadow-xl hover:border-blue-500/40 transition">
            <span className="absolute top-6 right-6 text-sm text-blue-400 font-medium">
              Komfor
            </span>

            <h3 className="text-xl font-semibold text-white">
              Pametna rasveta
            </h3>

            <p className="mt-4 text-zinc-400">
              Automatsko paljenje i prigušivanje svetla, noćni režimi i
              prilagođavanje ambijenta prema dobu dana.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}
