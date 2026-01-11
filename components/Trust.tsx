export default function Trust() {
  return (
    <section className="py-24 bg-zinc-950 text-zinc-100">
      <div className="max-w-5xl mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold">
          Zašto SmartSystems BG
        </h2>

        <div className="mt-16 grid md:grid-cols-3 gap-10 text-left">
          <div>
            <h3 className="text-lg font-semibold">Inženjerski pristup</h3>
            <p className="mt-3 text-zinc-400">
              Sisteme projektuje elektroinženjer — ne prodavac.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold">Rešenja po meri</h3>
            <p className="mt-3 text-zinc-400">
              Ne vezujemo se za jedan brend — biramo ono što je
              najbolje za klijenta.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold">Lokalna podrška</h3>
            <p className="mt-3 text-zinc-400">
              Beograd i okolina, direktna komunikacija i podrška.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
