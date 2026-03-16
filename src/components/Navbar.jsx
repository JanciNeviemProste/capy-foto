import { useState } from 'react';

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-gray-950 border-b border-amber-400/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <a
            href="#hero"
            className="text-amber-400 text-2xl font-bold tracking-wide"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Capy Foto
          </a>

          {/* Desktop nav links */}
          <div className="hidden md:flex items-center gap-8">
            <a
              href="#hero"
              className="text-gray-300 hover:text-amber-400 transition-colors duration-200 text-sm font-medium tracking-widest uppercase"
            >
              Domov
            </a>
            <a
              href="#gallery"
              className="text-gray-300 hover:text-amber-400 transition-colors duration-200 text-sm font-medium tracking-widest uppercase"
            >
              Galéria
            </a>
          </div>

          {/* Hamburger button */}
          <button
            className="md:hidden flex flex-col justify-center items-center w-10 h-10 gap-1.5 text-amber-400 focus:outline-none"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Otvoriť menu"
          >
            <span
              className={`block w-6 h-0.5 bg-amber-400 transition-transform duration-300 ${
                menuOpen ? 'rotate-45 translate-y-2' : ''
              }`}
            />
            <span
              className={`block w-6 h-0.5 bg-amber-400 transition-opacity duration-300 ${
                menuOpen ? 'opacity-0' : ''
              }`}
            />
            <span
              className={`block w-6 h-0.5 bg-amber-400 transition-transform duration-300 ${
                menuOpen ? '-rotate-45 -translate-y-2' : ''
              }`}
            />
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
          menuOpen ? 'max-h-40' : 'max-h-0'
        }`}
      >
        <div className="bg-gray-950 border-t border-amber-400/10 px-4 py-3 flex flex-col gap-4">
          <a
            href="#hero"
            className="text-gray-300 hover:text-amber-400 transition-colors duration-200 text-sm font-medium tracking-widest uppercase"
            onClick={() => setMenuOpen(false)}
          >
            Domov
          </a>
          <a
            href="#gallery"
            className="text-gray-300 hover:text-amber-400 transition-colors duration-200 text-sm font-medium tracking-widest uppercase"
            onClick={() => setMenuOpen(false)}
          >
            Galéria
          </a>
        </div>
      </div>
    </nav>
  );
}
