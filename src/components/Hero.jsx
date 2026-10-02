import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, MapPin } from 'lucide-react';
import { EVENT_CONFIG } from '../config';
import RegisterButton from './RegisterButton';
import WallStreetLogo from './WallStreetLogo';

export default function Hero() {
  const handleLogoClick = () => {
    // Scroll smoothly to next section (About)
    const nextSection = document.getElementById('about');
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      handleLogoClick();
    }
  };

  return (
    <section
      id="home"
      className="relative h-screen h-[100dvh] max-h-screen w-full flex flex-col justify-between items-center overflow-hidden bg-[#050505] pt-16 sm:pt-20 pb-0"
    >
      {/* ================================================================ */}
      {/* 1. CINEMATIC BACKGROUND: Properly positioned without distortion */}
      {/* ================================================================ */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.4, ease: "easeOut" }}
        className="absolute inset-0 pointer-events-none z-0 overflow-hidden"
      >
        <img
          src="/financial_hero_bg.jpg"
          alt="Wall Street Financial District at Night"
          className="w-full h-full object-cover object-center opacity-30 contrast-115 brightness-90"
        />
        {/* Balanced dark gradient masks */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#050505]/85 via-transparent to-[#050505]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(5,5,5,0.4)_0%,#050505_90%)]" />
      </motion.div>

      {/* ================================================================ */}
      {/* 2. SUBTLE FINANCIAL GRID & STOCK WAVE (Clean, Non-Intrusive)     */}
      {/* ================================================================ */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.5 }}
        transition={{ duration: 1.2, delay: 0.2 }}
        className="absolute inset-0 pointer-events-none z-0 overflow-hidden"
      >
        <div className="absolute inset-0 bg-financial-grid opacity-30" />

        <svg
          className="absolute inset-0 w-full h-full"
          preserveAspectRatio="none"
          viewBox="0 0 1440 800"
          fill="none"
        >
          <g opacity="0.35">
            <line x1="280" y1="360" x2="280" y2="440" stroke="#16C784" strokeWidth="1.5" />
            <rect x="274" y="380" width="12" height="40" fill="#16C784" rx="1.5" />

            <line x1="320" y1="390" x2="320" y2="470" stroke="#EA3943" strokeWidth="1.5" />
            <rect x="314" y="410" width="12" height="40" fill="#EA3943" rx="1.5" />

            <line x1="1120" y1="280" x2="1120" y2="380" stroke="#16C784" strokeWidth="1.5" />
            <rect x="1114" y="300" width="12" height="50" fill="#16C784" rx="1.5" />

            <line x1="1160" y1="320" x2="1160" y2="410" stroke="#EA3943" strokeWidth="1.5" />
            <rect x="1154" y="340" width="12" height="40" fill="#EA3943" rx="1.5" />
          </g>

          <defs>
            <linearGradient id="cleanTrendStroke" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#D4AF37" stopOpacity="0.1" />
              <stop offset="50%" stopColor="#16C784" stopOpacity="0.7" />
              <stop offset="80%" stopColor="#D4AF37" stopOpacity="0.8" />
              <stop offset="100%" stopColor="#D4AF37" stopOpacity="0.2" />
            </linearGradient>
          </defs>

          <motion.path
            d="M -10 520 C 180 500, 290 430, 420 460 C 580 495, 680 340, 840 370 C 1000 400, 1140 240, 1450 180"
            stroke="url(#cleanTrendStroke)"
            strokeWidth="2"
            fill="none"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 1 }}
            transition={{ duration: 2, delay: 0.4, ease: "easeInOut" }}
          />
        </svg>
      </motion.div>

      {/* ================================================================ */}
      {/* 3. CENTER HERO CONTENT: Scaled strictly to fit in 100vh          */}
      {/* ================================================================ */}
      <div className="relative z-10 w-full max-w-4xl mx-auto px-4 sm:px-6 text-center my-auto flex-1 flex flex-col items-center justify-center py-1 sm:py-2">
        
        {/* Top Organizer Badge */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-neutral-900/90 border border-neutral-700/80 text-[10px] sm:text-xs font-mono uppercase tracking-widest text-neutral-300 mb-2 sm:mb-2.5"
        >
          <span className="font-semibold text-neutral-200">ACM-W PCCOE PRESENTS</span>
          <span className="text-neutral-500">•</span>
          <span className="text-neutral-400">OCTOBER 2026</span>
        </motion.div>

        {/* 4. CLEAN HERO LOGO (Original Colors & Design, No Glow/Tint) */}
        <motion.div
          initial={{ opacity: 0, scale: 0.88 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="relative flex flex-col items-center my-1 sm:my-2"
        >
          <div
            role="button"
            tabIndex={0}
            onClick={handleLogoClick}
            onKeyDown={handleKeyDown}
            aria-label="Click Wallstreet Arena Logo to navigate to event details"
            className="relative cursor-pointer select-none transition-transform duration-300 hover:scale-105 active:scale-95 group flex items-center justify-center"
          >
            {/* Premium Transparent Logo in PNG Format (No Black Square, Enlarged) */}
            <WallStreetLogo
              alt="Wallstreet Arena Official Event Logo"
              className="w-auto h-[26vh] sm:h-[30vh] md:h-[35vh] lg:h-[40vh] max-h-60 sm:max-h-72 md:max-h-80 lg:max-h-96 max-w-[90vw] object-contain drop-shadow-[0_8px_32px_rgba(0,0,0,0.95)] drop-shadow-[0_0_24px_rgba(212,175,55,0.2)]"
            />
          </div>
        </motion.div>

        {/* 5. Headings & Tagline */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.7 }}
          className="space-y-1 sm:space-y-1.5 max-w-3xl"
        >
          <h1 className="font-cinzel text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-black tracking-wider uppercase text-gold-gradient leading-tight">
            WALL$TREET ARENA
          </h1>

          <p className="font-cinzel text-xs sm:text-sm md:text-base font-semibold tracking-wide text-neutral-200">
            &ldquo;Where Strategy Meets the Market.&rdquo;
          </p>

          <p className="text-[11px] sm:text-xs md:text-sm font-light tracking-wide text-neutral-400 max-w-lg mx-auto hidden sm:block">
            Think smart. Analyze fast. Conquer the arena.
          </p>
        </motion.div>

        {/* 6. Register CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.9 }}
          className="mt-2.5 sm:mt-3.5 flex items-center justify-center"
        >
          <RegisterButton size="md" text="REGISTER NOW" />
        </motion.div>

        {/* 7. Secondary Info: Date & Venue */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 1.1 }}
          className="mt-2 sm:mt-3 flex items-center justify-center gap-4 sm:gap-6 text-neutral-400 text-[10px] sm:text-xs font-mono tracking-widest uppercase border-t border-neutral-800/80 pt-2 sm:pt-2.5 w-full max-w-xs sm:max-w-sm mx-auto"
        >
          <div className="flex items-center gap-1.5 text-neutral-300">
            <Calendar className="w-3.5 h-3.5 text-[#D4AF37]" />
            <span className="font-semibold text-neutral-200">{EVENT_CONFIG.date}</span>
          </div>

          <span className="text-neutral-600">•</span>

          <a 
            href={EVENT_CONFIG.mapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 text-neutral-300 hover:text-white transition-colors"
          >
            <MapPin className="w-3.5 h-3.5 text-[#D4AF37]" />
            <span className="font-semibold text-neutral-200">{EVENT_CONFIG.venue}</span>
          </a>
        </motion.div>
      </div>

      {/* ================================================================ */}
      {/* 4. PINNED BOTTOM TICKER TAPE (Zero Viewport Overflow)            */}
      {/* ================================================================ */}
      <div className="relative z-10 w-full border-t border-neutral-800 bg-[#070709]/95 backdrop-blur-md py-1.5 sm:py-2 flex-shrink-0 select-none overflow-hidden">
        <div className="flex items-center">
          <div className="flex-shrink-0 px-3 sm:px-4 border-r border-neutral-800 bg-[#050505] z-10 flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-[#16C784]" />
            <span className="text-[9px] sm:text-[11px] font-mono font-bold tracking-widest text-[#D4AF37] uppercase">
              LIVE MARKETS
            </span>
          </div>

          <div className="flex overflow-hidden whitespace-nowrap">
            <div className="animate-ticker flex items-center gap-8 text-[11px] sm:text-xs font-mono">
              {[...EVENT_CONFIG.tickerItems, ...EVENT_CONFIG.tickerItems].map((item, idx) => (
                <div key={idx} className="inline-flex items-center gap-2">
                  <span className="font-bold text-neutral-300">{item.symbol}</span>
                  <span className="text-neutral-400">{item.price}</span>
                  <span className={`text-[10px] sm:text-[11px] font-semibold ${item.up ? 'text-[#16C784]' : 'text-[#EA3943]'}`}>
                    {item.change}
                  </span>
                  <span className="text-neutral-700">|</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
