import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsOpen(false);
    }
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white shadow-lg' : 'bg-white/90 backdrop-blur-md'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center">
            <div className="bg-gradient-to-r from-blue-600 to-green-600 text-white font-bold text-xl px-3 py-2 rounded-lg">
              BantuAja
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <button onClick={() => scrollToSection('about')} className="text-gray-700 hover:text-blue-600 transition-colors font-medium">
              Tentang
            </button>
            <button onClick={() => scrollToSection('services')} className="text-gray-700 hover:text-blue-600 transition-colors font-medium">
              Layanan
            </button>
            <button onClick={() => scrollToSection('why-choose')} className="text-gray-700 hover:text-blue-600 transition-colors font-medium">
              Keunggulan
            </button>
            <button onClick={() => scrollToSection('testimonials')} className="text-gray-700 hover:text-blue-600 transition-colors font-medium">
              Testimoni
            </button>
          </nav>

          <div className="hidden md:block">
            <a
              href="https://wa.me/6281234567890?text=Halo,%20saya%20butuh%20bantuan"
              className="bg-gradient-to-r from-green-500 to-green-600 text-white px-6 py-2 rounded-full font-medium hover:from-green-600 hover:to-green-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
            >
              Hubungi Kami
            </a>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-gray-700"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden pb-4 border-t border-gray-200 mt-4">
            <div className="flex flex-col space-y-4 pt-4">
              <button onClick={() => scrollToSection('about')} className="text-gray-700 hover:text-blue-600 text-left font-medium">
                Tentang
              </button>
              <button onClick={() => scrollToSection('services')} className="text-gray-700 hover:text-blue-600 text-left font-medium">
                Layanan
              </button>
              <button onClick={() => scrollToSection('why-choose')} className="text-gray-700 hover:text-blue-600 text-left font-medium">
                Keunggulan
              </button>
              <button onClick={() => scrollToSection('testimonials')} className="text-gray-700 hover:text-blue-600 text-left font-medium">
                Testimoni
              </button>
              <a
                href="https://wa.me/6281234567890?text=Halo,%20saya%20butuh%20bantuan"
                className="bg-gradient-to-r from-green-500 to-green-600 text-white px-6 py-2 rounded-full font-medium text-center hover:from-green-600 hover:to-green-700 transition-all duration-300"
              >
                Hubungi Kami
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;