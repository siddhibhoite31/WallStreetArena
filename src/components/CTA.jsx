import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Flame, ShieldAlert, Sparkles } from 'lucide-react';
import RegisterButton from './RegisterButton';
import { EVENT_CONFIG } from '../config';

export default function CTA() {
  return (
    <section className="relative py-28 sm:py-36 bg-[#050505] overflow-hidden border-t border-[#D4AF37]/20">
      
      {/* Background Skyline & Volumetric Light Streaks */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <img
          src="/financial_hero_bg.jpg"
          alt="Dark Skyline"
          className="w-full h-full object-cover object-bottom opacity-20 filter contrast-150 brightness-50"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-[#050505]/75 to-[#050505]" />
        
        {/* Animated Gold Light Streaks (SVG) */}
        <svg
          className="absolute inset-0 w-full h-full"
          preserveAspectRatio="none"
          viewBox="0 0 1200 600"
          fill="none"
        >
          <defs>
            <linearGradient id="ctaGoldStreak" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#D4AF37" stopOpacity="0" />
              <stop offset="50%" stopColor="#FFD700" stopOpacity="0.8" />
              <stop offset="100%" stopColor="#D4AF37" stopOpacity="0" />
            </linearGradient>
            <linearGradient id="ctaGreenStreak" x1="0%" y1="100%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#16C784" stopOpacity="0" />
              <stop offset="50%" stopColor="#16C784" stopOpacity="0.6" />
              <stop offset="100%" stopColor="#16C784" stopOpacity="0" />
            </linearGradient>
          </defs>

          {/* Animated Glowing Financial Waves */}
          <motion.path
            d="M 0 450 C 300 480, 500 320, 750 360 C 950 400, 1050 220, 1200 180"
            stroke="url(#ctaGoldStreak)"
            strokeWidth="3"
            fill="none"
            initial={{ pathLength: 0, opacity: 0 }}
            whileInView={{ pathLength: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 2, ease: "easeInOut" }}
          />

          <motion.path
            d="M 0 520 C 250 490, 480 390, 700 410 C 920 430, 1080 300, 1200 240"
            stroke="url(#ctaGreenStreak)"
            strokeWidth="1.5"
            fill="none"
            initial={{ pathLength: 0, opacity: 0 }}
            whileInView={{ pathLength: 1, opacity: 0.7 }}
            viewport={{ once: true }}
            transition={{ duration: 2.4, delay: 0.3 }}
          />
        </svg>

        {/* Ambient Gold Core Glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[400px] bg-[radial-gradient(ellipse_at_center,rgba(255,215,0,0.14)_0%,transparent_75%)] blur-[90px]" />
      </div>

      {/* Floating Particles in CTA */}
      <div className="absolute inset-0 pointer-events-none">
        {Array.from({ length: 12 }).map((_, i) => (
          <span
            key={i}
            className="absolute rounded-full bg-[#FFD700] opacity-40 animate-pulse"
            style={{
              width: `${(i % 3) + 2}px`,
              height: `${(i % 3) + 2}px`,
              top: `${(i * 17) % 90}%`,
              left: `${(i * 27) % 95}%`,
              animationDelay: `${i * 0.3}s`,
            }}
          />
        ))}
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        
        {/* Subtle Pill Badge */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#0E0E12] border border-[#D4AF37]/35 text-[11px] font-mono tracking-widest text-[#FFD700] uppercase mb-8 shadow-[0_0_20px_rgba(212,175,55,0.15)]"
        >
          <Sparkles className="w-3.5 h-3.5 text-[#FFD700]" />
          <span>ARENA REGISTRATION WINDOW ACTIVE</span>
        </motion.div>

        {/* Main Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="font-cinzel text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-black uppercase text-gold-gradient tracking-wider leading-tight mb-5 drop-shadow-[0_4px_30px_rgba(255,215,0,0.3)]"
        >
          READY TO ENTER THE ARENA?
        </motion.h2>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="font-cinzel text-base sm:text-xl md:text-2xl font-semibold tracking-wide text-neutral-200 mb-10 max-w-2xl mx-auto"
        >
          &ldquo;Your strategy. Your team. Your move.&rdquo;
        </motion.p>

        {/* Large Button: REGISTER NOW → */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="flex justify-center"
        >
          <RegisterButton
            size="lg"
            text="REGISTER NOW"
            showArrow={true}
            className="px-10 sm:px-14 py-4.5 sm:py-5 text-base sm:text-lg shadow-[0_0_45px_rgba(255,215,0,0.55)]"
          />
        </motion.div>

        {/* Micro Guarantee Note */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="mt-8 flex items-center justify-center gap-2 text-xs font-mono text-neutral-400"
        >
          <span className="text-[#16C784]">●</span>
          <span>10 OCTOBER 2026</span>
          <span className="text-neutral-600">|</span>
          <span>PCCOE, PUNE</span>
        </motion.div>

      </div>
    </section>
  );
}
