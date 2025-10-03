import React from 'react';
import { MessageCircle, Phone, ArrowRight } from 'lucide-react';

const CtaSection: React.FC = () => {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-600 via-blue-700 to-green-600 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-96 h-96 bg-white/5 rounded-full transform -translate-x-48 -translate-y-48"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-white/5 rounded-full transform translate-x-48 translate-y-48"></div>
      </div>

      <div className="relative max-w-4xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
          Punya Kebutuhan Mendesak?
        </h2>
        <p className="text-xl text-blue-100 mb-8 leading-relaxed">
          Jangan tunggu lagi! Chat kami sekarang dan dapatkan solusi cepat untuk semua kebutuhan Anda. 
          Tim profesional kami siap membantu 24/7.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
          <a
            href="https://wa.me/6281234567890?text=Halo,%20saya%20butuh%20bantuan%20segera"
            className="inline-flex items-center bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
          >
            <MessageCircle className="w-6 h-6 mr-3" />
            Hubungi via WhatsApp
            <ArrowRight className="w-5 h-5 ml-2" />
          </a>
          
          <a
            href="tel:+6281234567890"
            className="inline-flex items-center bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 border border-white/20"
          >
            <Phone className="w-6 h-6 mr-3" />
            Atau Telepon Langsung
          </a>
        </div>

        <div className="grid md:grid-cols-3 gap-8 text-center">
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
            <div className="text-2xl font-bold text-white mb-2">{'< 5 Menit'}</div>
            <div className="text-blue-100">Waktu Respon</div>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
            <div className="text-2xl font-bold text-white mb-2">24/7</div>
            <div className="text-blue-100">Siap Melayani</div>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
            <div className="text-2xl font-bold text-white mb-2">1000+</div>
            <div className="text-blue-100">Pelanggan Puas</div>
          </div>
        </div>
      </div>
    </section>
  )
};

export default CtaSection;