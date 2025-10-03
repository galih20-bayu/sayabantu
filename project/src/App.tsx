import React from 'react';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import ServicesSection from './components/ServicesSection';
import WhyChooseSection from './components/WhyChooseSection';
import TestimonialsSection from './components/TestimonialsSection';
import CtaSection from './components/CtaSection';
import Footer from './components/Footer';
import WhatsAppFloat from './components/WhatsAppFloat';

function App() {
  return (
    <div className="min-h-screen bg-white font-poppins">
      <Header />
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <WhyChooseSection />
      <TestimonialsSection />
      <CtaSection />
      <Footer />
      <WhatsAppFloat />
    </div>
  );
}

export default App;