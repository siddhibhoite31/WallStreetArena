import React from 'react';
import { motion } from 'framer-motion';
import { Brain, LineChart, Trophy, ArrowUpRight } from 'lucide-react';
import { EVENT_CONFIG } from '../config';
import FloatingCurrency from './FloatingCurrency';

export default function About() {
  const pillars = [
    {
      step: "01",
      title: "THINK",
      description: "Challenge your logic and aptitude.",
      icon: Brain,
      tag: "APTITUDE & LOGIC",
      accent: "from-[#FFD700]/20 to-transparent",
    },
    {
      step: "02",
      title: "ANALYZE",
      description: "Make smart decisions under pressure.",
      icon: LineChart,
      tag: "MARKET DYNAMICS",
      accent: "from-[#16C784]/20 to-transparent",
    },
    {
      step: "03",
      title: "COMPETE",
      description: "Compete with teams and prove your skills.",
      icon: Trophy,
      tag: "FINALE ARENA",
      accent: "from-[#D4AF37]/20 to-transparent",
    },
  ];

  return (
    <section
      id="about"
      className="relative py-24 sm:py-32 bg-[#08080A] border-t border-[#D4AF37]/15 overflow-hidden"
    >
      {/* Background Graphic: Stock Market Candlestick Graph */}
      <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
        <img
          src="/graph_bg.png"
          alt="Stock Market Trading Graph"
          className="w-full h-full object-cover object-center opacity-25 contrast-125 brightness-95"
        />
        {/* Dark Vignette & Edge Blending for High Text Readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#08080A] via-[#08080A]/75 to-[#08080A]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(8,8,10,0.3)_0%,#08080A_85%)]" />
      </div>

      {/* Background Decorative Gold Ambient Orb */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[550px] bg-[#D4AF37]/5 rounded-full blur-[140px] pointer-events-none" />

      {/* Continuously Floating Coins & Notes */}
      <FloatingCurrency section="about" />

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-neutral-900/80 border border-[#D4AF37]/25 text-[11px] font-mono tracking-widest text-[#FFD700] uppercase mb-4"
          >
            <span>OVERVIEW</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="font-cinzel text-3xl sm:text-4xl md:text-5xl font-extrabold uppercase text-gold-gradient tracking-wide mb-6"
          >
            ABOUT THE ARENA
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-neutral-300 text-base sm:text-lg md:text-xl font-light leading-relaxed max-w-2xl mx-auto"
          >
            Wallstreet Arena is a finance-themed challenge designed to test logical thinking, decision-making and problem-solving skills.
          </motion.p>
        </div>

        {/* 3 Elegant Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {pillars.map((pillar, index) => {
            const IconComponent = pillar.icon;
            return (
              <motion.div
                key={pillar.title}
                initial={{ opacity: 0, y: 35 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.7, delay: index * 0.18, ease: [0.16, 1, 0.3, 1] }}
                className="group relative rounded-2xl glass-panel p-8 sm:p-9 glass-panel-hover flex flex-col justify-between overflow-hidden"
              >
                {/* Subtle Card Top Highlight */}
                <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${pillar.accent}`} />
                
                {/* Subtle Watermark Step Number */}
                <span className="absolute -bottom-4 -right-2 text-7xl sm:text-8xl font-cinzel font-black text-neutral-800/25 pointer-events-none select-none group-hover:text-[#D4AF37]/10 transition-colors">
                  {pillar.step}
                </span>

                <div>
                  {/* Icon and Tag Header */}
                  <div className="flex items-center justify-between mb-8">
                    <div className="w-13 h-13 rounded-xl bg-neutral-900/90 border border-[#D4AF37]/30 flex items-center justify-center text-[#FFD700] shadow-[0_0_15px_rgba(212,175,55,0.15)] group-hover:border-[#FFD700]/70 group-hover:shadow-[0_0_20px_rgba(255,215,0,0.3)] transition-all duration-300">
                      <IconComponent className="w-6 h-6 stroke-[1.75]" />
                    </div>

                    <span className="text-[10px] font-mono tracking-widest uppercase text-neutral-400 group-hover:text-[#FFD700] transition-colors">
                      {pillar.tag}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="font-cinzel text-xl sm:text-2xl font-bold tracking-wider uppercase text-neutral-100 group-hover:text-gold-gradient transition-all mb-3">
                    {pillar.title}
                  </h3>

                  {/* Description */}
                  <p className="text-neutral-400 text-sm sm:text-base font-light leading-relaxed">
                    &ldquo;{pillar.description}&rdquo;
                  </p>
                </div>

                {/* Subtle Bottom Accent Indicator */}
                <div className="mt-8 pt-4 border-t border-neutral-800/80 flex items-center justify-between text-xs font-mono text-neutral-500 group-hover:text-neutral-300 transition-colors">
                  <span>STAGE {pillar.step}</span>
                  <div className="w-2 h-2 rounded-full bg-[#D4AF37]/30 group-hover:bg-[#FFD700] transition-colors" />
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
