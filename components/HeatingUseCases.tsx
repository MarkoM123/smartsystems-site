export default function HeatingUseCases() {
  return (
    <section className="relative py-28 bg-gradient-to-b from-zinc-900 via-zinc-950 to-zinc-900 text-zinc-100 overflow-hidden">

      {/* BACKGROUND GLOW */}
      <div className="absolute -bottom-32 -right-32 w-[500px] h-[500px] bg-blue-500/10 blur-[140px] rounded-full" />

      {/* SECTION INDEX */}
      <div className="absolute top-16 left-10 text-[140px] font-bold text-white/5 select-none">
        02
      </div>

      <div className="relative max-w-6xl mx-auto px-6">

        {/* TITLE */}
        <h2 className="text-4xl md:text-5xl font-bold text-center">
          Kako izgleda pametno grejanje u <span className="text-blue-400">praksi</span>
        </h2>

        {/* ACCENT LINE */}
        <div className="mt-6 h-1 w-20 bg-blue-500 mx-auto rounded-full" />

        <p className="mt-8 text-lg text-zinc-300 max-w-3xl mx-auto text-center">
          Svaki prostor ima drugačije potrebe. Pametni sistem se prilagođava
          načinu života, kvadraturi i navikama korisnika.
        </p>

        {/* USE CASE CARDS */}
        <div className="mt-20 grid md:grid-cols-3 gap-10">

          {/* CASE 1 */}
          <div className="relative bg-zinc-900/60 backdrop-blur-xl p-8 rounded-2xl border border-white/10 shadow-xl hover:border-blue-500/40 transition">
            <span className="absolute top-6 right-6 text-sm text-blue-400 font-medium">
              Stan
            </span>

            <h3 className="text-xl font-semibold text-white">
              Stan 60 m²
            </h3>

            <p className="mt-4 text-zinc-400">
              Dnevna i spavaća soba sa različitim temperaturama, automatsko
              smanjenje grejanja kada niko nije kod kuće i paljenje pre dolaska.
            </p>
          </div>

          {/* CASE 2 */}
          <div className="relative bg-zinc-900/60 backdrop-blur-xl p-8 rounded-2xl border border-white/10 shadow-xl hover:border-blue-500/40 transition">
            <span className="absolute top-6 right-6 text-sm text-blue-400 font-medium">
              Kuća
            </span>

            <h3 className="text-xl font-semibold text-white">
              Porodična kuća
            </h3>

            <p className="mt-4 text-zinc-400">
              Zoniranje po spratovima, noćni režim, automatsko snižavanje
              temperature i daljinska kontrola sa telefona.
            </p>
          </div>

          {/* CASE 3 */}
          <div className="relative bg-zinc-900/60 backdrop-blur-xl p-8 rounded-2xl border border-white/10 shadow-xl hover:border-blue-500/40 transition">
            <span className="absolute top-6 right-6 text-sm text-blue-400 font-medium">
              Biznis
            </span>

            <h3 className="text-xl font-semibold text-white">
              Poslovni prostor
            </h3>

            <p className="mt-4 text-zinc-400">
              Grejanje prema radnom vremenu, automatsko gašenje van radnih
              sati i smanjeni troškovi bez gubitka komfora.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}
