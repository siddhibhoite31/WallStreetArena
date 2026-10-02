import React, { useEffect, useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Crown, Award, Zap, Sparkles } from 'lucide-react';
import { EVENT_CONFIG } from '../config';

export default function Prizes() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [count, setCount] = useState(0);

  // Smooth counting animation for ₹10K+
  useEffect(() => {
    if (!isInView) return;

    let start = 0;
    const end = 10;
    const duration = 1800; // ms
    const startTime = performance.now();

    const animateNumber = (currentTime) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      // Ease out cubic
      const easeOut = 1 - Math.pow(1 - progress, 3);
      const currentVal = Math.floor(easeOut * end);
      
      setCount(currentVal);

      if (progress < 1) {
        requestAnimationFrame(animateNumber);
      } else {
        setCount(end);
      }
    };

    requestAnimationFrame(animateNumber);
  }, [isInView]);

  const cards = [
    {
      title: "WIN",
      subtitle: "Prize + Recognition",
      icon: Crown,
      tier: "PODIUM TOPPER",
      highlight: "Prize Pool",
      borderGlow: "group-hover:border-[#FFD700] group-hover:shadow-[0_0_30px_rgba(255,215,0,0.3)]",
    },
    {
      title: "ACHIEVE",
      subtitle: "Certificates + Recognition",
      icon: Award,
      tier: "OFFICIAL MERIT",
      highlight: "National-Grade ACM-W Credential",
      borderGlow: "group-hover:border-[#D4AF37] group-hover:shadow-[0_0_25px_rgba(212,175,55,0.25)]",
    },
    {
      title: "EXPERIENCE",
      subtitle: "Build your competitive edge",
      icon: Zap,
      tier: "ELITE NETWORK",
      highlight: "Live High-Stakes Trading Simulation",
      borderGlow: "group-hover:border-[#16C784] group-hover:shadow-[0_0_25px_rgba(22,199,132,0.25)]",
    },
  ];

  return (
    <section
      id="prizes"
      ref={ref}
      className="relative py-28 sm:py-36 bg-[#08080A] border-t border-[#D4AF37]/15 overflow-hidden"
    >
      {/* Background Graphic: Stock Market Candlestick Graph */}
      <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
        <img
          src="/graph_bg.png"
          alt="Stock Market Trading Graph"
          className="w-full h-full object-cover object-center opacity-25 contrast-125 brightness-95"
        />
        {/* Dark Vignette & Edge Blending for High Text Readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#08080A] via-[#08080A]/80 to-[#08080A]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(8,8,10,0.3)_0%,#08080A_85%)]" />
      </div>

      {/* Floating Gold Particles in the background */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {Array.from({ length: 18 }).map((_, i) => (
          <span
            key={i}
            className="absolute rounded-full bg-[#FFD700] opacity-30 animate-float"
            style={{
              width: `${(i % 3) * 2 + 3}px`,
              height: `${(i % 3) * 2 + 3}px`,
              top: `${(i * 19) % 100}%`,
              left: `${(i * 23) % 100}%`,
              animationDelay: `${i * 0.4}s`,
              animationDuration: `${4 + (i % 4)}s`,
              boxShadow: '0 0 10px #FFD700',
            }}
          />
        ))}

        {/* Ambient Gold Radial Core Glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[radial-gradient(circle,rgba(255,215,0,0.12)_0%,rgba(212,175,55,0.03)_50%,transparent_70%)] blur-[100px]" />
      </div>

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 sm:mb-20">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-neutral-900/90 border border-[#D4AF37]/30 text-[11px] font-mono tracking-widest text-[#FFD700] uppercase mb-4"
          >
            <Sparkles className="w-3.5 h-3.5 text-[#FFD700]" />
            <span>EXCELLENCE INCENTIVES</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="font-cinzel text-3xl sm:text-4xl md:text-5xl font-extrabold uppercase text-gold-gradient tracking-wide mb-3"
          >
            THE REWARD
          </motion.h2>
        </div>

        {/* ============================================================== */}
        {/* DRAMATIC CENTERPIECE: ₹10K+ PRIZE POOL                         */}
        {/* ============================================================== */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-16 sm:mb-24 relative"
        >
          {/* Circular Gold Halo */}
          <div className="inline-block relative">
            <div className="text-7xl sm:text-9xl md:text-[11rem] font-cinzel font-black tracking-tight text-gold-gradient drop-shadow-[0_10px_45px_rgba(255,215,0,0.4)] select-none">
              ₹{count}K+
            </div>

            <div className="mt-2 sm:mt-4">
              <span className="font-cinzel text-xl sm:text-2xl md:text-3xl font-bold tracking-[0.25em] uppercase text-white/90 drop-shadow-[0_2px_10px_rgba(212,175,55,0.3)]">
                PRIZE POOL
              </span>
            </div>

            
            
          </div>
        </motion.div>

        {/* ============================================================== */}
        {/* THREE MINIMAL CARDS: WIN, ACHIEVE, EXPERIENCE                  */}
        {/* ============================================================== */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 max-w-5xl mx-auto">
          {cards.map((card, idx) => {
            const Icon = card.icon;
            return (
              <motion.div
                key={card.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.7, delay: idx * 0.15, ease: [0.16, 1, 0.3, 1] }}
                className={`group glass-panel p-8 sm:p-9 rounded-2xl glass-panel-hover border border-[#D4AF37]/20 flex flex-col justify-between text-center relative overflow-hidden ${card.borderGlow}`}
              >
                {/* Subtle Top Accent */}
                <div className="w-12 h-1 bg-gradient-to-r from-transparent via-[#FFD700] to-transparent mx-auto mb-6" />

                <div>
                  {/* Icon */}
                  <div className="w-14 h-14 mx-auto rounded-full bg-neutral-900 border border-[#D4AF37]/35 flex items-center justify-center text-[#FFD700] mb-6 shadow-[0_0_15px_rgba(212,175,55,0.2)] group-hover:scale-110 transition-transform duration-300">
                    <Icon className="w-6 h-6 stroke-[1.8]" />
                  </div>

                  {/* Title */}
                  <h3 className="font-cinzel text-2xl sm:text-3xl font-extrabold tracking-wider uppercase text-neutral-100 group-hover:text-gold-gradient transition-colors mb-2">
                    {card.title}
                  </h3>

                  {/* Description Required by Prompt */}
                  <p className="text-neutral-300 text-sm sm:text-base font-light italic mb-4">
                    &ldquo;{card.subtitle}&rdquo;
                  </p>
                </div>

                {/* Card Tagline */}
                <div className="pt-4 border-t border-neutral-800/80 mt-6">
                  <span className="text-[11px] font-mono tracking-widest uppercase text-neutral-400 group-hover:text-[#FFD700] transition-colors">
                    {card.highlight}
                  </span>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
