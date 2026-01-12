export default function ProcessSteps() {
  return (
    <section className="py-28 bg-zinc-900 text-zinc-100">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <span className="text-blue-500 text-sm font-semibold tracking-wider">
          PROCES
        </span>

        <h2 className="mt-4 text-4xl md:text-5xl font-bold">
          Kako izgleda saradnja
        </h2>

        <div className="mt-20 grid md:grid-cols-4 gap-10">
          {[
            {
              step: "01",
              title: "Konsultacija",
              desc: "Razgovor o prostoru, potrebama i očekivanjima.",
            },
            {
              step: "02",
              title: "Predlog rešenja",
              desc: "Jasan plan sistema i okvirna cena.",
            },
            {
              step: "03",
              title: "Ugradnja",
              desc: "Profesionalna instalacija i testiranje.",
            },
            {
              step: "04",
              title: "Podrška",
              desc: "Podrška, održavanje i nadogradnje.",
            },
          ].map((item) => (
            <div key={item.step} className="relative">
              <div className="text-5xl font-bold text-blue-500/20">
                {item.step}
              </div>
              <h3 className="mt-2 text-xl font-semibold">
                {item.title}
              </h3>
              <p className="mt-3 text-zinc-400">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
