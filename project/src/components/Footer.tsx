import React from 'react';
import { MessageCircle, Mail, MapPin, Clock, Instagram, Facebook } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="bg-gradient-to-r from-blue-600 to-green-600 text-white font-bold text-2xl px-4 py-3 rounded-lg inline-block mb-4">
              BantuAja
            </div>
            <p className="text-gray-300 leading-relaxed mb-6 max-w-md">
              Platform jasa serabutan terpercaya yang siap membantu berbagai kebutuhan Anda. 
              Dari hal sederhana hingga kompleks, kami selalu siap memberikan solusi terbaik.
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                className="bg-gray-800 p-3 rounded-lg hover:bg-blue-600 transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="bg-gray-800 p-3 rounded-lg hover:bg-blue-600 transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Kontak */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Hubungi Kami</h3>
            <div className="space-y-4">
              <a
                href="https://wa.me/6281234567890"
                className="flex items-center text-gray-300 hover:text-green-400 transition-colors"
              >
                <MessageCircle className="w-5 h-5 mr-3 flex-shrink-0" />
                <span>+62 812-3456-7890</span>
              </a>
              <a
                href="mailto:hello@bantuaja.com"
                className="flex items-center text-gray-300 hover:text-blue-400 transition-colors"
              >
                <Mail className="w-5 h-5 mr-3 flex-shrink-0" />
                <span>hello@bantuaja.com</span>
              </a>
              <div className="flex items-start text-gray-300">
                <MapPin className="w-5 h-5 mr-3 flex-shrink-0 mt-0.5" />
                <span>Jl. Merdeka No. 123<br />Jakarta Selatan, DKI Jakarta</span>
              </div>
              <div className="flex items-center text-gray-300">
                <Clock className="w-5 h-5 mr-3 flex-shrink-0" />
                <span>24/7 Siap Melayani</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Layanan Populer</h3>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-gray-300 hover:text-white transition-colors">
                  Jasa Kebersihan
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white transition-colors">
                  Kurir & Antar Barang
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white transition-colors">
                  Perbaikan & Tukang
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white transition-colors">
                  Asisten Rumah Tangga
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white transition-colors">
                  Jasa Admin Online
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white transition-colors">
                  Desain & Digital
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 pt-8 mt-12">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-400 text-sm mb-4 md:mb-0">
              © {currentYear} BantuAja. Semua hak cipta dilindungi undang-undang.
            </div>
            <div className="flex space-x-6 text-sm">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                Syarat & Ketentuan
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                Kebijakan Privasi
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;