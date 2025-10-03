import React from 'react';
import { 
  Home, 
  Truck, 
  Wrench, 
  UserCheck, 
  Monitor, 
  Palette, 
  ShoppingBag, 
  Car,
  Laptop,
  Camera,
  MessageCircle,
  Plus
} from 'lucide-react';

const ServicesSection: React.FC = () => {
  const services = [
    {
      icon: <Home className="w-8 h-8" />,
      title: "Jasa Kebersihan",
      description: "Bersih-bersih rumah, kantor, gedung",
      gradient: "from-blue-500 to-blue-600"
    },
    {
      icon: <Truck className="w-8 h-8" />,
      title: "Kurir / Antar Barang",
      description: "Antar dokumen, paket, makanan",
      gradient: "from-green-500 to-green-600"
    },
    {
      icon: <Wrench className="w-8 h-8" />,
      title: "Perbaikan & Tukang",
      description: "Listrik, pipa, furniture, dll",
      gradient: "from-orange-500 to-orange-600"
    },
    {
      icon: <UserCheck className="w-8 h-8" />,
      title: "Asisten Rumah Tangga",
      description: "Baby sitter, perawat, koki",
      gradient: "from-purple-500 to-purple-600"
    },
    {
      icon: <Monitor className="w-8 h-8" />,
      title: "Jasa Admin Online",
      description: "Entry data, admin sosmed, virtual assistant",
      gradient: "from-indigo-500 to-indigo-600"
    },
    {
      icon: <Palette className="w-8 h-8" />,
      title: "Jasa Desain & Digital",
      description: "Logo, banner, website, video",
      gradient: "from-pink-500 to-pink-600"
    },
    {
      icon: <ShoppingBag className="w-8 h-8" />,
      title: "Jasa Belanja",
      description: "Belanja groceries, obat, kebutuhan",
      gradient: "from-teal-500 to-teal-600"
    },
    {
      icon: <Car className="w-8 h-8" />,
      title: "Jasa Transportasi",
      description: "Antar jemput, sewa mobil/motor",
      gradient: "from-red-500 to-red-600"
    },
    {
      icon: <Laptop className="w-8 h-8" />,
      title: "IT Support",
      description: "Install software, troubleshooting",
      gradient: "from-gray-600 to-gray-700"
    },
    {
      icon: <Camera className="w-8 h-8" />,
      title: "Jasa Foto & Video",
      description: "Dokumentasi acara, produk, dll",
      gradient: "from-yellow-500 to-yellow-600"
    }
  ];

  return (
    <section id="services" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            Layanan <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-green-600">Kami</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Berbagai layanan profesional untuk memenuhi semua kebutuhan Anda. 
            Dari hal sederhana hingga yang kompleks, kami siap membantu!
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-12">
          {services.map((service, index) => (
            <div
              key={index}
              className="group bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100"
            >
              <div className={`inline-flex p-3 rounded-xl bg-gradient-to-r ${service.gradient} text-white mb-4 group-hover:scale-110 transition-transform duration-300`}>
                {service.icon}
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                {service.title}
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}

          {/* Special "Ask Us" Card */}
          <div className="group bg-gradient-to-br from-blue-500 to-green-500 rounded-2xl p-6 text-white shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
            <div className="inline-flex p-3 rounded-xl bg-white/20 backdrop-blur-sm mb-4 group-hover:scale-110 transition-transform duration-300">
              <Plus className="w-8 h-8" />
            </div>
            <h3 className="text-lg font-semibold mb-2">
              Butuh Selain Ini?
            </h3>
            <p className="text-white/90 text-sm leading-relaxed mb-4">
              Tanya kami langsung! Kami siap bantu kebutuhan lainnya.
            </p>
            <a
              href="https://wa.me/6281234567890?text=Halo,%20saya%20butuh%20bantuan%20untuk%20..."
              className="inline-flex items-center text-white font-medium hover:text-yellow-200 transition-colors"
            >
              <MessageCircle className="w-4 h-4 mr-2" />
              Chat Sekarang
            </a>
          </div>
        </div>

        <div className="text-center">
          <div className="inline-flex items-center bg-blue-50 text-blue-700 px-6 py-3 rounded-full">
            <MessageCircle className="w-5 h-5 mr-2" />
            <span className="font-medium">Tidak menemukan yang Anda cari? Hubungi kami dan kami akan carikan solusinya!</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;