export default function SecurityUseCases() {
  return (
    <section className="relative py-28 bg-gradient-to-b from-zinc-900 via-zinc-950 to-zinc-900 text-zinc-100 overflow-hidden">

      {/* BACKGROUND GLOW */}
      <div className="absolute -bottom-32 -right-32 w-[520px] h-[520px] bg-blue-500/10 blur-[150px] rounded-full" />

      {/* SECTION INDEX */}
      <div className="absolute top-16 left-10 text-[140px] font-bold text-white/5 select-none">
        02
      </div>

      <div className="relative max-w-6xl mx-auto px-6">

        {/* TITLE */}
        <h2 className="text-4xl md:text-5xl font-bold text-center">
          Kako izgleda pametna <span className="text-blue-400">sigurnost</span> u praksi
        </h2>

        {/* ACCENT LINE */}
        <div className="mt-6 h-1 w-20 bg-blue-500 mx-auto rounded-full" />

        <p className="mt-8 text-lg text-zinc-300 max-w-3xl mx-auto text-center">
          Različiti prostori imaju različite bezbednosne potrebe. Sistem se
          prilagođava načinu korišćenja, broju korisnika i nivou zaštite.
        </p>

        {/* USE CASE CARDS */}
        <div className="mt-20 grid md:grid-cols-3 gap-10">

          {/* CASE 1 */}
          <div className="relative bg-zinc-900/60 backdrop-blur-xl p-8 rounded-2xl border border-white/10 shadow-xl hover:border-blue-500/40 transition">
            <span className="absolute top-6 right-6 text-sm text-blue-400 font-medium">
              Stan
            </span>

            <h3 className="text-xl font-semibold text-white">
              Stan / Apartman
            </h3>

            <p className="mt-4 text-zinc-400">
              Video nadzor ulaza, detekcija pokreta, notifikacije na telefon i
              daljinski pregled prostora u realnom vremenu.
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
              Spoljašnje i unutrašnje kamere, alarmni senzori, osvetljenje na
              pokret i potpuna kontrola dok ste van kuće.
            </p>
          </div>

          {/* CASE 3 */}
          <div className="relative bg-zinc-900/60 backdrop-blur-xl p-8 rounded-2xl border border-white/10 shadow-xl hover:border-blue-500/40 transition">
            <span className="absolute top-6 right-6 text-sm text-blue-400 font-medium">
              Biznis
            </span>

            <h3 className="text-xl font-semibold text-white">
              Poslovni prostor / Airbnb
            </h3>

            <p className="mt-4 text-zinc-400">
              Kontrola pristupa, evidencija ulazaka, video nadzor i daljinski
              nadzor više objekata sa jednog mesta.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}
