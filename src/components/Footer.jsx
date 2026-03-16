export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-950 border-t border-amber-400/20">
      {/* Amber decorative line */}
      <div className="w-full h-px bg-gradient-to-r from-transparent via-amber-400/60 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 text-center">
        {/* Logo */}
        <p
          className="text-amber-400 text-3xl font-bold mb-3"
          style={{ fontFamily: "'Playfair Display', serif" }}
        >
          Capy Foto
        </p>

        {/* Tagline */}
        <p className="text-gray-400 text-sm max-w-md mx-auto mb-8 leading-relaxed">
          Oslava pokoja a krásy kapybár – najroztomilejších hlodavcov
          na svete. Každá fotografia je okno do ich sveta.
        </p>

        {/* Divider */}
        <div className="w-12 h-px bg-amber-400/40 mx-auto mb-8" />

        {/* Copyright */}
        <p className="text-gray-600 text-xs tracking-widest uppercase">
          &copy; {currentYear} Capy Foto. Všetky práva vyhradené.
        </p>
      </div>
    </footer>
  );
}
