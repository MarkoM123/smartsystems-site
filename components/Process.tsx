export default function Process() {
  return (
    <section className="py-24 bg-zinc-900 text-zinc-100">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center">
          Kako radimo
        </h2>

        <div className="mt-16 grid md:grid-cols-3 gap-10">
          <div>
            <h3 className="text-xl font-semibold">1. Analiza prostora</h3>
            <p className="mt-3 text-zinc-400">
              Razumemo objekat, potrebe i očekivanja pre nego što
              predložimo bilo kakvo rešenje.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold">2. Projektovanje sistema</h3>
            <p className="mt-3 text-zinc-400">
              Biramo tehnologiju i opremu koja ima smisla — bez
              nepotrebnih troškova.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold">3. Ugradnja i podrška</h3>
            <p className="mt-3 text-zinc-400">
              Profesionalna ugradnja, testiranje i podrška nakon
              puštanja u rad.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
