export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center bg-gray-950 overflow-hidden"
    >
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage:
            "url('https://loremflickr.com/1200/800/capybara?random=0')",
        }}
        role="img"
        aria-label="Capybara v prírodnom prostredí"
      />

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-950/80 via-gray-950/60 to-gray-950/90" />

      {/* Content */}
      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        <p className="text-amber-400 text-sm font-medium tracking-[0.3em] uppercase mb-6">
          Vitajte na našej stránke
        </p>

        <h1
          className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight"
          style={{ fontFamily: "'Playfair Display', serif" }}
        >
          Svet Kapybár
        </h1>

        <p className="text-lg sm:text-xl text-gray-300 mb-4 max-w-2xl mx-auto leading-relaxed">
          Objavte čaro najväčších hlodavcov na svete. Kapybary sú pokojné,
          spoločenské a neobyčajne roztomilé zvieratá, ktoré si získajú vaše srdce.
        </p>

        <p className="text-base text-gray-400 mb-10 max-w-xl mx-auto">
          Prechádzajte naše fotografie a nechajte sa uniesť do sveta týchto
          úžasných tvorov juhoamerických riek a pralesa.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          {/* Primary CTA */}
          <a
            href="#gallery"
            className="inline-block border border-amber-400 text-amber-400 hover:bg-amber-400 hover:text-gray-950 transition-all duration-300 px-8 py-3 text-sm font-semibold tracking-widest uppercase rounded-sm"
          >
            Zobraziť galériu
          </a>

          {/* Secondary ghost CTA */}
          <a
            href="#hero"
            className="inline-block border border-white/30 text-white/70 hover:border-white/60 hover:text-white transition-all duration-300 px-8 py-3 text-sm font-semibold tracking-widest uppercase rounded-sm"
          >
            Zistiť viac
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-amber-400/60">
        <span className="text-xs tracking-widest uppercase">Skrolovať</span>
        <svg
          className="w-4 h-4 animate-bounce"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          aria-hidden="true"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </div>
    </section>
  );
}
