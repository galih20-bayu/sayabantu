import React, { useState, useEffect } from 'react';
import { MessageCircle, X } from 'lucide-react';

const WhatsAppFloat: React.FC = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [showTooltip, setShowTooltip] = useState(false);

  useEffect(() => {
    // Show tooltip after 3 seconds, then hide after 5 seconds
    const showTimer = setTimeout(() => {
      setShowTooltip(true);
    }, 3000);

    const hideTimer = setTimeout(() => {
      setShowTooltip(false);
    }, 8000);

    return () => {
      clearTimeout(showTimer);
      clearTimeout(hideTimer);
    };
  }, []);

  if (!isVisible) return null;

  return (
    <>
      {/* WhatsApp Floating Button */}
      <div className="fixed bottom-6 right-6 z-50">
        {/* Tooltip */}
        {showTooltip && (
          <div className="absolute bottom-16 right-0 bg-white rounded-lg shadow-xl p-3 mb-2 max-w-xs animate-bounce">
            <div className="flex items-center justify-between">
              <div>
                <div className="text-sm font-semibold text-gray-800">Ada yang bisa kami bantu?</div>
                <div className="text-xs text-gray-600">Chat kami sekarang!</div>
              </div>
              <button
                onClick={() => setShowTooltip(false)}
                className="ml-2 text-gray-400 hover:text-gray-600"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
            <div className="absolute bottom-0 right-6 transform translate-y-1/2 rotate-45 w-2 h-2 bg-white"></div>
          </div>
        )}

        {/* Main Button */}
        <a
          href="https://wa.me/6281234567890?text=Halo,%20saya%20tertarik%20dengan%20layanan%20BantuAja"
          className="flex items-center justify-center w-14 h-14 bg-green-500 hover:bg-green-600 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-110 group"
          aria-label="Chat via WhatsApp"
        >
          <MessageCircle className="w-7 h-7 text-white group-hover:animate-pulse" />
        </a>

        {/* Ripple Effect */}
        <div className="absolute inset-0 rounded-full bg-green-400 animate-ping opacity-20"></div>
      </div>

      {/* Background Overlay untuk Mobile saat tooltip muncul */}
      {showTooltip && (
        <div 
          className="fixed inset-0 bg-black/10 z-40 md:hidden"
          onClick={() => setShowTooltip(false)}
        />
      )}
    </>
  );
};

export default WhatsAppFloat;