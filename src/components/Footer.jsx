import React from 'react';
import { Mail, Phone, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';
import LogoNuurtec from '../assets/LogoNuurtec.png';

const Footer = () => {
  const year = new Date().getFullYear();

  // 🔝 Subir al inicio al hacer clic en cualquier enlace legal
  const scrollTop = () => {
    // Usa 'auto' si no quieres animación
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  };

  return (
    <footer id="contact" className="relative bg-gray-950 text-white overflow-hidden">
      {/* Fondo gradiente */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-950 via-gray-900 to-gray-950" />
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-green-500 to-transparent" />
      
      <div className="relative z-10 py-20 max-w-7xl mx-auto px-6">
        {/* Contenido principal */}
        <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-12 mb-16">
          
          {/* Company Info */}
          <div>
            <div className="flex items-center mb-8">
              <div className="relative">
                <img
                  src={LogoNuurtec}
                  alt="Nuurtec Logo"
                  className="w-28 h-28 object-contain filter drop-shadow-lg"
                />
                <div className="absolute -inset-2 bg-green-500/10 rounded-full blur-xl" />
              </div>
            </div>

            <p className="text-gray-3 00 text-lg leading-relaxed max-w-lg mb-8">
              Revolutionizing the solar industry through strategic B2B connections, verified partnerships,
              and AI-powered supply chain optimization.
            </p>
          </div>

          {/* Navigation Links */}
          <div>
            <h3 className="text-xl font-bold mb-8 text-white">Navigation</h3>
            <nav className="space-y-4" aria-label="Footer Navigation">
              <a href="#home" className="block text-gray-400 hover:text-green-400 transition-all duration-300 hover:translate-x-1">
                Home
              </a>
              <a href="#how-it-works" className="block text-gray-400 hover:text-green-400 transition-all duration-300 hover:translate-x-1">
                How it Works
              </a>
              <a href="#faq" className="block text-gray-400 hover:text-green-400 transition-all duration-300 hover:translate-x-1">
                FAQ
              </a>

              {/* 🔽 Enlaces legales: navegan y fuerzan scroll al inicio */}
              <Link to="/legal/aviso-legal" onClick={scrollTop} className="block text-gray-400 hover:text-green-400 transition-all duration-300 hover:translate-x-1">
                Legal Notice
              </Link>
              <Link to="/legal/privacidad" onClick={scrollTop} className="block text-gray-400 hover:text-green-400 transition-all duration-300 hover:translate-x-1">
                Privacy Policy
              </Link>
              <Link to="/legal/cookies" onClick={scrollTop} className="block text-gray-400 hover:text-green-400 transition-all duration-300 hover:translate-x-1">
                Cookies Policy
              </Link>
              <Link to="/legal/terminos" onClick={scrollTop} className="block text-gray-400 hover:text-green-400 transition-all duration-300 hover:translate-x-1">
                Terms of Service
              </Link>
            </nav>
          </div>

          {/* Contact / Extra info */}
          <div>
            <h3 className="text-xl font-bold mb-8 text-white">Get in Touch</h3>
            <div className="space-y-5">
              <div className="group flex items-center space-x-4">
                <div className="flex items-center justify-center w-10 h-10 rounded-full bg-green-500/10 group-hover:bg-green-500/20 transition-colors">
                  <Mail className="w-5 h-5 text-green-400" />
                </div>
                <a
                  href="mailto:info@nuurtec.com"
                  className="text-gray-300 hover:text-white transition-colors font-medium"
                >
                  info@nuurtec.com
                </a>
              </div>
              <div className="group flex items-center space-x-4">
                <div className="flex items-center justify-center w-10 h-10 rounded-full bg-green-500/10 group-hover:bg-green-500/20 transition-colors">
                  <Phone className="w-5 h-5 text-green-400" />
                </div>
                <a
                  href="tel:+34614418204"
                  className="text-gray-300 hover:text-white transition-colors font-medium"
                >
                  +34 614 418 204
                </a>
              </div>
              {/* Bloque extra para balancear diseño */}
              <div className="flex items-start space-x-3 mt-6">
                <Sparkles className="w-6 h-6 text-green-400 flex-shrink-0 mt-1" />
                <p className="text-gray-400 text-sm leading-relaxed">
                  Join us in building the future of solar trade — smart, trusted, and global.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="relative">
          <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-gray-700 to-transparent" />
          <div className="flex flex-col md:flex-row justify-between items-center pt-8 gap-6">
            <p className="text-gray-400 text-sm font-medium">
              © {year} NUURTEC. All rights reserved.
            </p>
            <p className="text-gray-400 text-sm italic">
              Building the future of solar industry connections
            </p>
          </div>
        </div>
      </div>

      {/* Efectos decorativos */}
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-green-500/5 rounded-full blur-3xl" />
      <div className="absolute top-1/2 right-0 w-72 h-72 bg-emerald-500/3 rounded-full blur-3xl" />
    </footer>
  );
};

export default Footer;
