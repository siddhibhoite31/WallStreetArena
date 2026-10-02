import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import { EVENT_CONFIG } from '../config';
import RegisterButton from './RegisterButton';
import WallStreetLogo from './WallStreetLogo';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }

      // Determine active section
      const sections = ['home', 'about', 'timeline', 'prizes', 'contact'];
      const scrollPosition = window.scrollY + 200;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e, href) => {
    e.preventDefault();
    setMobileMenuOpen(false);

    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#050505]/90 backdrop-blur-xl border-b border-[#D4AF37]/25 shadow-[0_4px_30px_rgba(0,0,0,0.8),0_1px_15px_rgba(212,175,55,0.08)] py-3'
          : 'bg-[#050505]/40 backdrop-blur-md border-b border-[#D4AF37]/10 py-4.5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* ============================================================== */}
          {/* LEFT: [ACM-W logo] [WALLSTREET ARENA logo]                     */}
          {/* ============================================================== */}
          <a
            href="#home"
            onClick={(e) => handleNavClick(e, '#home')}
            className="flex items-center gap-3 sm:gap-4 group cursor-pointer"
            aria-label="Wallstreet Arena Home"
          >
            {/* ACM-W Logo & PCCOE Badge */}
            <div className="flex items-center gap-2 pr-2.5 sm:pr-3.5 border-r border-[#D4AF37]/25">
              <img
                src="/acm-w.png"
                alt="ACM-W Logo"
                className="h-7 sm:h-8 w-auto object-contain brightness-110 drop-shadow-[0_0_8px_rgba(255,255,255,0.3)] transition-transform duration-300 group-hover:scale-105"
              />
              <img
                src="/pccoe-logo.png"
                alt="PCCOE Logo"
                className="h-7 sm:h-8 w-auto object-contain drop-shadow-[0_0_6px_rgba(212,175,55,0.3)] transition-transform duration-300 group-hover:scale-105 hidden xs:block"
              />
            </div>

            {/* Wallstreet Arena Logo */}
            <div className="flex items-center gap-2.5">
              <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full overflow-hidden p-0.5 bg-neutral-900 border border-neutral-700/90 shadow-sm flex items-center justify-center flex-shrink-0">
                <WallStreetLogo
                  alt="Wallstreet Arena Logo"
                  className="w-full h-full object-contain"
                />
              </div>

              <div className="flex flex-col text-left">
                <span className="font-cinzel text-xs sm:text-sm font-bold tracking-wider text-gold-gradient group-hover:brightness-110 transition-all">
                  WALLSTREET ARENA
                </span>
                <span className="text-[9px] sm:text-[10px] uppercase font-mono tracking-widest text-neutral-400 group-hover:text-neutral-200 transition-colors">
                  ACM-W PCCOE
                </span>
              </div>
            </div>
          </a>

          {/* ============================================================== */}
          {/* CENTER: HOME | ABOUT | TIMELINE | PRIZES | CONTACT            */}
          {/* ============================================================== */}
          <nav className="hidden md:flex items-center space-x-1 lg:space-x-2">
            {EVENT_CONFIG.navLinks.map((link) => {
              const isActive = activeSection === link.href.replace('#', '');
              return (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className={`relative px-3.5 py-1.5 text-xs lg:text-sm font-medium tracking-widest uppercase transition-all duration-200 rounded-md ${
                    isActive
                      ? 'text-[#FFD700] drop-shadow-[0_0_10px_rgba(255,215,0,0.5)]'
                      : 'text-neutral-300 hover:text-white hover:bg-white/[0.04]'
                  }`}
                >
                  {link.name}
                  {isActive && (
                    <span className="absolute bottom-0 left-2 right-2 h-[2px] bg-gradient-to-r from-transparent via-[#FFD700] to-transparent shadow-[0_0_8px_#FFD700]" />
                  )}
                </a>
              );
            })}
          </nav>

          {/* ============================================================== */}
          {/* RIGHT: [ REGISTER NOW ]                                        */}
          {/* ============================================================== */}
          <div className="hidden md:flex items-center">
            <RegisterButton size="sm" />
          </div>

          {/* Mobile Hamburger Toggle */}
          <div className="flex md:hidden items-center gap-2">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              type="button"
              aria-label="Toggle navigation menu"
              className="p-2 rounded-lg bg-neutral-900/80 border border-[#D4AF37]/30 text-[#FFD700] hover:text-white transition-colors"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      <div
        className={`md:hidden transition-all duration-300 ease-in-out overflow-hidden ${
          mobileMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="px-5 pt-3 pb-6 bg-[#08080A]/95 backdrop-blur-2xl border-b border-[#D4AF37]/30 shadow-2xl space-y-3 mt-2">
          <div className="flex flex-col space-y-1">
            {EVENT_CONFIG.navLinks.map((link) => {
              const isActive = activeSection === link.href.replace('#', '');
              return (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className={`flex items-center justify-between px-3 py-2.5 rounded-lg text-xs font-semibold tracking-widest uppercase transition-all ${
                    isActive
                      ? 'text-[#FFD700] bg-[#D4AF37]/10 border-l-2 border-[#FFD700]'
                      : 'text-neutral-300 hover:text-white hover:bg-white/5'
                  }`}
                >
                  <span>{link.name}</span>
                  <ArrowUpRight className="w-3.5 h-3.5 opacity-50" />
                </a>
              );
            })}
          </div>

          <div className="pt-2">
            <RegisterButton 
              className="w-full justify-center py-3" 
              size="md"
              onClick={() => setMobileMenuOpen(false)}
            />
          </div>
        </div>
      </div>
    </header>
  );
}
