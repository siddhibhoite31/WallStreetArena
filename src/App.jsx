import React from 'react';
import Navbar from './components/Navbar';
import BackgroundEffects from './components/BackgroundEffects';
import Hero from './components/Hero';
import About from './components/About';
import Timeline from './components/Timeline';
import Prizes from './components/Prizes';
import Contact from './components/Contact';
import CTA from './components/CTA';
import Footer from './components/Footer';
import MoneyCursor from './components/MoneyCursor';
import { RegistrationModalProvider } from './context/RegistrationModalContext';

export default function App() {
  return (
    <RegistrationModalProvider>
      {/* Custom Animated Folded US Dollar Bill Cursor */}
      <MoneyCursor />

      <div className="relative min-h-screen bg-[#050505] text-[#F5F5F5] overflow-x-hidden selection:bg-[#D4AF37]/30 selection:text-[#FFD700]">
      {/* 1. Global Cinematic Ambient Background */}
      <BackgroundEffects />

      {/* 2. Fixed Sticky Navbar with Glass Black Gold Trim */}
      <Navbar />

      {/* 3. Main Content Sections */}
      <main className="relative z-10 flex flex-col w-full">
        {/* Full-screen Hero Section */}
        <Hero />

        {/* About Section */}
        <About />

        {/* Timeline Section */}
        <Timeline />

        {/* Prizes Section */}
        <Prizes />

        {/* Contact Section */}
        <Contact />

        {/* Final Cinematic Call to Action */}
        <CTA />
      </main>

      {/* 4. Minimal Black Footer */}
      <Footer />
    </div>
    </RegistrationModalProvider>
  );
}
