import React, { useEffect, useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import LogoNuurtec from '../assets/LogoNuurtec.png';
import LogoNuurtecSinTexto from '../assets/LogoNuurtecSinTextoPng.png';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const location = useLocation();
  const navigate = useNavigate();

  const navItems = [
    { label: 'Why Nuurtec', id: 'problem-solution' },
    { label: 'How It Works', id: 'how-it-works' },
    { label: 'Who is it for', id: 'benefits' },
    { label: 'FAQ', id: 'faq' },
  ];

  // Cambia estilo al hacer scroll
  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 50);
    onScroll();
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Bloquear scroll de fondo al abrir menú móvil
  useEffect(() => {
    if (!isMenuOpen) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = prev || 'auto';
    };
  }, [isMenuOpen]);

  // 🔹 Función general de scroll a sección
  const scrollToSection = (sectionId) => {
    const doScroll = () => {
      const el = document.getElementById(sectionId);
      if (el) {
        const nav = document.querySelector('nav');
        const offset = (nav ? nav.getBoundingClientRect().height : 64) + 16;
        const y = el.getBoundingClientRect().top + window.scrollY - offset;
        window.scrollTo({ top: Math.max(0, y), behavior: 'smooth' });
      } else {
        window.location.hash = sectionId;
      }
    };

    if (location.pathname !== '/') {
      navigate('/');
      setTimeout(doScroll, 400);
    } else {
      doScroll();
    }
  };

  // 🔹 Logo: si estás en home, hace scroll hasta la hero; si no, vuelve a home
  const handleLogoClick = (e) => {
    e.preventDefault();
    if (location.pathname !== '/') {
      navigate('/');
      setTimeout(() => scrollToSection('home'), 400);
    } else {
      scrollToSection('home');
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 h-20 px-4 sm:px-6 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between h-full">
        {/* Logo (scroll a hero o volver a home) */}
        <div className="flex items-center">
          <a href="/" onClick={handleLogoClick} aria-label="Go to home">
            <img
              src={LogoNuurtec}
              alt="NUURTEC Logo"
              className="h-16 sm:h-20 w-auto object-contain cursor-pointer"
            />
          </a>
        </div>

        {/* Links desktop */}
        <div className="hidden lg:flex items-center justify-center flex-1 space-x-8 mx-12">
          {navItems.map((item) => (
            <button
              key={item.label}
              onClick={() => scrollToSection(item.id)}
              className={`transition-all duration-300 font-medium ${
                isScrolled
                  ? 'text-gray-900 hover:text-green-600'
                  : 'text-white hover:text-green-300'
              }`}
            >
              {item.label}
            </button>
          ))}
        </div>

        {/* Apply to Join (desktop) */}
        <div className="hidden lg:flex items-center gap-4">
          <button
            onClick={() => scrollToSection('apply')}
            className="px-6 py-2.5 rounded-lg font-semibold transform hover:scale-105 transition-all duration-300 shadow-lg bg-gradient-to-r from-green-500 to-emerald-600 text-white hover:from-green-600 hover:to-emerald-700"
          >
            Apply to Join
          </button>
        </div>

        {/* Botón hamburguesa móvil */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className={`lg:hidden p-2 rounded-lg transition-colors ${
            isScrolled ? 'text-gray-900 hover:bg-gray-100' : 'text-white hover:bg-white/10'
          }`}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Menú móvil */}
      {isMenuOpen && (
        <div className="fixed inset-0 z-40 lg:hidden">
          {/* Overlay */}
          <div
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            onClick={() => setIsMenuOpen(false)}
          />

          {/* Panel */}
          <div className="absolute top-0 left-0 w-full h-full bg-neutral-950 text-white flex flex-col">
            {/* Header */}
            <div className="flex items-center justify-between px-5 py-4 border-b border-white/10">
              <div className="flex items-center">
                <a href="/" onClick={handleLogoClick} aria-label="Go to home">
                  <img
                    src={LogoNuurtecSinTexto}
                    alt="NUURTEC Logo Isotipo"
                    className="h-12 w-auto object-contain cursor-pointer"
                  />
                </a>
              </div>
              <button
                onClick={() => setIsMenuOpen(false)}
                className="p-2 rounded-lg hover:bg-white/10"
                aria-label="Close menu"
              >
                <X size={24} />
              </button>
            </div>

            {/* Links navegación */}
            <nav className="flex flex-col px-6 pt-6">
              {navItems.map((item) => (
                <button
                  key={item.label}
                  onClick={() => {
                    scrollToSection(item.id);
                    setIsMenuOpen(false);
                  }}
                  className="w-full text-left text-lg font-semibold py-3.5 border-b border-white/10 hover:bg-white/5 transition-colors"
                >
                  {item.label}
                </button>
              ))}
              <button
                onClick={() => {
                  scrollToSection('apply');
                  setIsMenuOpen(false);
                }}
                className="w-full text-left text-lg font-semibold py-3.5 border-b border-white/10 hover:bg-white/5 transition-colors"
              >
                Apply to Join
              </button>
            </nav>

            {/* CTA Apply to Join */}
            <div className="mt-auto px-6 pb-8">
              <button
                onClick={() => {
                  scrollToSection('apply');
                  setIsMenuOpen(false);
                }}
                className="w-full block text-center bg-gradient-to-r from-green-500 to-emerald-600 text-white px-6 py-4 rounded-xl font-semibold text-lg hover:from-green-600 hover:to-emerald-700 transition-all duration-300 shadow-lg"
              >
                Apply to Join
              </button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
