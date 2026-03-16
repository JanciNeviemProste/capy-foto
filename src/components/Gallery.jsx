const galleryItems = [
  {
    id: 1,
    src: 'https://loremflickr.com/600/600/capybara?random=1',
    alt: 'Kapybara odpočívajúca pri rieke v tropickom lese',
    caption: 'Oddych pri rieke',
  },
  {
    id: 2,
    src: 'https://loremflickr.com/600/600/capybara?random=2',
    alt: 'Skupina kapybár pasúcich sa na zelenej lúke',
    caption: 'Stádo na lúke',
  },
  {
    id: 3,
    src: 'https://loremflickr.com/600/600/capybara?random=3',
    alt: 'Kapybara kúpajúca sa vo vode za slnečného dňa',
    caption: 'Kúpanie v jazere',
  },
  {
    id: 4,
    src: 'https://loremflickr.com/600/600/capybara?random=4',
    alt: 'Mladá kapybara skúmajúca okolie s prirodzenou zvedavosťou',
    caption: 'Mladá zvedavkyňa',
  },
  {
    id: 5,
    src: 'https://loremflickr.com/600/600/capybara?random=5',
    alt: 'Kapybara s vtákmi sediacioi na chrbte v symbiotickom vzťahu',
    caption: 'Priatelia vtáci',
  },
  {
    id: 6,
    src: 'https://loremflickr.com/600/600/capybara?random=6',
    alt: 'Kapybara jediaca trávu pri súmraku s oranžovým nebom',
    caption: 'Večerná pastva',
  },
  {
    id: 7,
    src: 'https://loremflickr.com/600/600/capybara?random=7',
    alt: 'Rodina kapybár – matka a mláďatá odpočívajúce v tieni',
    caption: 'Rodinná idylka',
  },
  {
    id: 8,
    src: 'https://loremflickr.com/600/600/capybara?random=8',
    alt: 'Kapybara v úzkej blízkosti divokej prírody amazónskeho pralesa',
    caption: 'Divočina Amazónie',
  },
];

export default function Gallery() {
  return (
    <section id="gallery" className="bg-gray-900 py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-14">
          <p className="text-amber-400 text-sm font-medium tracking-[0.3em] uppercase mb-4">
            Fotogaléria
          </p>
          <h2
            className="text-4xl sm:text-5xl font-bold text-white mb-6"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Krásne Momenty
          </h2>
          <div className="w-16 h-0.5 bg-amber-400 mx-auto mb-6" />
          <p className="text-gray-400 max-w-xl mx-auto text-base leading-relaxed">
            Zbierka fotografií zachytávajúcich každodenný život kapybár
            v ich prirodzenom prostredí. Každý záber je príbehom plným
            pokoja a krásy.
          </p>
        </div>

        {/* Gallery grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {galleryItems.map((item) => (
            <div
              key={item.id}
              className="relative aspect-square overflow-hidden rounded-lg group"
            >
              <img
                src={item.src}
                alt={item.alt}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                loading="lazy"
              />
              {/* Hover overlay */}
              <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                <p
                  className="text-white text-sm font-semibold leading-snug"
                  style={{ fontFamily: "'Playfair Display', serif" }}
                >
                  {item.caption}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
