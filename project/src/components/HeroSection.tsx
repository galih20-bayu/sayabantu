import React from 'react';
import { ArrowRight, Users, Clock, Shield } from 'lucide-react';

const HeroSection: React.FC = () => {
  return (
    <section className="relative bg-gradient-to-br from-blue-50 via-white to-green-50 pt-24 pb-16 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-l from-blue-100 to-transparent rounded-full transform translate-x-48 -translate-y-48"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-r from-green-100 to-transparent rounded-full transform -translate-x-48 translate-y-48"></div>
      
      <div className="relative max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="text-center lg:text-left">
            <div className="inline-flex items-center bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-medium mb-6">
              <Clock className="w-4 h-4 mr-2" />
              Respon Cepat 24/7
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6">
              Butuh Bantuan 
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-green-600">
                {' '}Apa Saja?
              </span>
              <br />
              Kami Siap Bantu!
            </h1>
            
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Dari bersih-bersih, antar barang, perbaikan, hingga jasa admin & desain. 
              Semua bisa kami bantu dengan <strong>cepat, mudah, dan profesional</strong>.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <a
                href="https://wa.me/6281234567890?text=Halo,%20saya%20butuh%20bantuan"
                className="inline-flex items-center justify-center bg-gradient-to-r from-green-500 to-green-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:from-green-600 hover:to-green-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
              >
                Pesan via WhatsApp
                <ArrowRight className="ml-2 w-5 h-5" />
              </a>
              
              <button 
                onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
                className="inline-flex items-center justify-center border-2 border-blue-600 text-blue-600 px-8 py-4 rounded-full text-lg font-semibold hover:bg-blue-600 hover:text-white transition-all duration-300"
              >
                Lihat Layanan
              </button>
            </div>
            
            {/* Stats */}
            <div className="flex flex-wrap justify-center lg:justify-start gap-6 text-center">
              <div className="flex items-center">
                <Users className="w-5 h-5 text-blue-600 mr-2" />
                <span className="text-gray-600">1000+ Pelanggan Puas</span>
              </div>
              <div className="flex items-center">
                <Shield className="w-5 h-5 text-green-600 mr-2" />
                <span className="text-gray-600">100% Terpercaya</span>
              </div>
            </div>
          </div>
          
          {/* Right Content - Illustration */}
          <div className="relative">
            <div className="relative bg-gradient-to-br from-blue-400 via-blue-500 to-green-500 rounded-3xl p-8 transform rotate-3 hover:rotate-0 transition-transform duration-500">
              <div className="bg-white rounded-2xl p-8 transform -rotate-3">
                <div className="grid grid-cols-3 gap-4 mb-6">
                  <div className="bg-blue-100 rounded-xl p-4 text-center">
                    <div className="text-2xl mb-2">🧹</div>
                    <div className="text-xs text-gray-600">Kebersihan</div>
                  </div>
                  <div className="bg-green-100 rounded-xl p-4 text-center">
                    <div className="text-2xl mb-2">🚚</div>
                    <div className="text-xs text-gray-600">Kurir</div>
                  </div>
                  <div className="bg-orange-100 rounded-xl p-4 text-center">
                    <div className="text-2xl mb-2">🔧</div>
                    <div className="text-xs text-gray-600">Perbaikan</div>
                  </div>
                  <div className="bg-purple-100 rounded-xl p-4 text-center">
                    <div className="text-2xl mb-2">👥</div>
                    <div className="text-xs text-gray-600">Asisten</div>
                  </div>
                  <div className="bg-pink-100 rounded-xl p-4 text-center">
                    <div className="text-2xl mb-2">💻</div>
                    <div className="text-xs text-gray-600">Admin</div>
                  </div>
                  <div className="bg-indigo-100 rounded-xl p-4 text-center">
                    <div className="text-2xl mb-2">🎨</div>
                    <div className="text-xs text-gray-600">Desain</div>
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-sm font-semibold text-gray-800 mb-2">Multi Service</div>
                  <div className="text-xs text-gray-600">Semua kebutuhan dalam satu tempat</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;