import React from 'react';
import { Phone, Mail, ChevronRight } from 'lucide-react';
import { EVENT_CONFIG } from '../config';
import WallStreetLogo from './WallStreetLogo';

/**
 * Footer
 * Clean, premium 3-column footer for WallStreet Arena:
 * - Left: Brand Identity (Logo, Title, Edition badge, Finance Tagline)
 * - Center: Clean Navigation (Home, About, Timeline, Prizes, Contact Us)
 * - Right: Direct Coordinator Contact (Names, Mobile numbers, Emails)
 * - Bottom: Divider & Centered Copyright Notice
 */
export default function Footer() {
  const handleNavClick = (e, href) => {
    if (href && href.startsWith('#')) {
      e.preventDefault();
      const target = document.querySelector(href);
      if (target) {
        target.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  const navCol1 = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Timeline', href: '#timeline' },
  ];

  const navCol2 = [
    { name: 'Prizes', href: '#prizes' },
    { name: 'Contact Us', href: '#contact' },
  ];

  return (
    <footer className="relative bg-[#040405] border-t border-[#D4AF37]/15 pt-16 pb-12 text-neutral-400 overflow-hidden">
      
      {/* Subtle background ambient financial grid */}
      <div className="absolute inset-0 bg-financial-grid opacity-15 pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* ============================================================== */}
        {/* 3-COLUMN MAIN FOOTER LAYOUT                                     */}
        {/* ============================================================== */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 lg:gap-14 pb-12">
          
          {/* ------------------------------------------------------------ */}
          {/* 1. LEFT SECTION — BRAND IDENTITY (Col span 4)                */}
          {/* ------------------------------------------------------------ */}
          <div className="md:col-span-4 flex flex-col items-start text-left">
            {/* WallStreet Arena Logo */}
            <div className="w-16 h-16 rounded-full border border-[#D4AF37]/40 bg-black/80 p-1 flex items-center justify-center shadow-[0_4px_25px_rgba(0,0,0,0.9)] flex-shrink-0 group">
              <WallStreetLogo
                alt="WallStreet Arena"
                className="w-full h-full object-contain rounded-full transition-transform duration-300 group-hover:scale-105"
              />
            </div>

            {/* Title: WALLSTREET ARENA */}
            <h3 className="font-cinzel text-xl sm:text-2xl font-bold tracking-wider text-white uppercase mt-4">
              WALLSTREET ARENA
            </h3>

            <div className="flex items-center gap-2 mt-1">
              <span className="text-xs font-mono font-semibold text-[#D4AF37] tracking-widest uppercase">
                ACM-W PCCOE
              </span>
              <span className="text-neutral-700">•</span>
              <span className="text-[11px] font-mono px-2 py-0.5 rounded bg-neutral-900 text-[#FFD700] border border-[#D4AF37]/25 uppercase font-medium">
                EDITION 2026
              </span>
            </div>

            {/* Financial Competition Description */}
            <p className="text-neutral-400 text-xs sm:text-sm font-light leading-relaxed mt-4 max-w-sm">
              Empowering the next generation of quantitative minds, financial strategists, and virtual market traders through high-stakes arena competition.
            </p>
          </div>

          {/* ------------------------------------------------------------ */}
          {/* 2. CENTER SECTION — NAVIGATION (Col span 4)                  */}
          {/* ------------------------------------------------------------ */}
          <div className="md:col-span-4 flex flex-col justify-start">
            {/* Prominent Heading: WALLSTREET ARENA */}
            <h4 className="font-cinzel text-base sm:text-lg font-bold tracking-wider text-white uppercase mb-6 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#D4AF37]" />
              WALLSTREET ARENA
            </h4>

            {/* Two Column Navigation Links Grid */}
            <div className="grid grid-cols-2 gap-x-6 sm:gap-x-8 gap-y-3.5 text-xs sm:text-sm font-medium">
              {/* Column 1 */}
              <div className="space-y-3">
                {navCol1.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    onClick={(e) => handleNavClick(e, item.href)}
                    className="group flex items-center gap-1.5 text-neutral-400 hover:text-[#FFD700] transition-colors cursor-pointer"
                  >
                    <ChevronRight className="w-3 h-3 text-neutral-600 group-hover:text-[#FFD700] transition-transform group-hover:translate-x-0.5" />
                    <span>{item.name}</span>
                  </a>
                ))}
              </div>

              {/* Column 2 */}
              <div className="space-y-3">
                {navCol2.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    onClick={(e) => handleNavClick(e, item.href)}
                    className="group flex items-center gap-1.5 text-neutral-400 hover:text-[#FFD700] transition-colors cursor-pointer"
                  >
                    <ChevronRight className="w-3 h-3 text-neutral-600 group-hover:text-[#FFD700] transition-transform group-hover:translate-x-0.5" />
                    <span>{item.name}</span>
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* ------------------------------------------------------------ */}
          {/* 3. RIGHT SECTION — CONTACT INFORMATION (Col span 4)          */}
          {/* ------------------------------------------------------------ */}
          <div className="md:col-span-4 flex flex-col justify-start">
            {/* Heading: CONTACT US */}
            <h4 className="font-cinzel text-base sm:text-lg font-bold tracking-wider text-white uppercase mb-6 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#16C784]" />
              CONTACT US
            </h4>

            {/* Event Coordinators Contact (Clean Unboxed Format) */}
            <div className="space-y-5">
              {EVENT_CONFIG.coordinators.map((coordinator) => (
                <div key={coordinator.name} className="space-y-1">
                  <span className="font-cinzel text-xs sm:text-sm font-bold text-neutral-200 tracking-wide uppercase block">
                    {coordinator.name}
                  </span>

                  <div className="flex flex-col gap-1 text-xs font-mono text-neutral-400">
                    <a
                      href={`tel:${coordinator.phone}`}
                      className="inline-flex items-center gap-2 hover:text-[#FFD700] transition-colors"
                    >
                      <Phone className="w-3.5 h-3.5 text-[#D4AF37] flex-shrink-0" />
                      <span>Mob: +91 {coordinator.phone}</span>
                    </a>
                    {coordinator.email && (
                      <a
                        href={`mailto:${coordinator.email}`}
                        className="inline-flex items-center gap-2 hover:text-[#FFD700] transition-colors truncate"
                      >
                        <Mail className="w-3.5 h-3.5 text-[#D4AF37] flex-shrink-0" />
                        <span className="truncate">Mail: {coordinator.email}</span>
                      </a>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* ============================================================== */}
        {/* 4. BOTTOM COPYRIGHT BAR                                        */}
        {/* ============================================================== */}
        <div className="pt-8 border-t border-neutral-900/90 text-center">
          <div className="flex items-center justify-center gap-3 sm:gap-4 mb-3">
            <img
              src="/acm-w.png"
              alt="ACM-W PCCOE"
              className="h-5 w-auto object-contain opacity-75 hover:opacity-100 transition-opacity"
            />
            <span className="text-neutral-800">|</span>
            <img
              src="/pccoe-logo.png"
              alt="PCCOE Pune"
              className="h-6 w-auto object-contain opacity-75 hover:opacity-100 transition-opacity"
            />
            <span className="text-neutral-600 text-[11px] font-mono hidden sm:inline-block">
              ACM-W PCCOE STUDENT CHAPTER
            </span>
          </div>

          <p className="text-xs font-mono text-neutral-500 tracking-wider">
            &copy; 2026 WallStreet Arena. All Rights Reserved.
          </p>
        </div>

      </div>
    </footer>
  );
}
