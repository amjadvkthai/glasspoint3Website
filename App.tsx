import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import IntroSection from './components/IntroSection';
import Stats from './components/Stats';
import FeatureSection from './components/FeatureSection';
import ServicesGallery from './components/ServicesGallery';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-[#FDFDFD] font-sans selection:bg-black selection:text-white">
      <Navbar />
      <main>
        <Hero />
        <IntroSection />
        <Stats />
        <FeatureSection />
        <ServicesGallery />
      </main>
      <Footer />
    </div>
  );
}

export default App;