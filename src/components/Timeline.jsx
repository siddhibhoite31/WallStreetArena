import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ClipboardList, Binary, Award, Flag, ChevronRight } from 'lucide-react';
import FloatingCurrency from './FloatingCurrency';

export default function Timeline() {
  const containerRef = useRef(null);
  
  // Track scroll progress through the timeline container
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"],
  });

  // Vertical line growth driven by user scroll
  const scaleY = useTransform(scrollYProgress, [0, 1], [0, 1]);
  const glowOpacity = useTransform(scrollYProgress, [0, 0.5, 1], [0.3, 0.8, 1]);

  const steps = [
    {
      number: "01",
      title: "REGISTRATION",
      description: "Register your team and get ready.",
      tagline: "PHASE // PARTICIPANT ENROLLMENT",
      status: "OPEN FOR ENTRIES",
      icon: ClipboardList,
      metric: "ENTRY STAGE",
      candlestick: { high: "+12.4%", green: true },
    },
    {
      number: "02",
      title: "APTITUDE TEST",
      description: "Test your knowledge and logical thinking.",
      tagline: "PHASE // QUANTITATIVE SCREENING",
      status: "LOGICAL & FINANCE ROUND",
      icon: Binary,
      metric: "PRELIMINARY",
      candlestick: { high: "+24.8%", green: true },
    },
    {
      number: "03",
      title: "SHORTLISTING",
      description: "Top-performing teams move ahead.",
      tagline: "PHASE // PORTFOLIO CUTOFF",
      status: "TOP SQUAD SELECTION",
      icon: Award,
      metric: "SHORTLIST",
      candlestick: { high: "+38.1%", green: true },
    },
    {
      number: "04",
      title: "FINALE",
      description: "Face the final challenge at PCCOE.",
      tagline: "PHASE // RINGING THE ARENA BELL",
      status: "ON-CAMPUS FINALE",
      icon: Flag,
      metric: "GRAND FINAL",
      candlestick: { high: "₹10K+ POOL", green: true },
    },
  ];

  return (
    <section
      id="timeline"
      ref={containerRef}
      className="relative py-24 sm:py-36 bg-[#050505] border-t border-[#D4AF37]/15 overflow-hidden"
    >
      {/* Background Graphic: Stock Market Candlestick Graph */}
      <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
        <img
          src="/graph_bg.png"
          alt="Stock Market Trading Graph"
          className="w-full h-full object-cover object-center opacity-25 contrast-125 brightness-95"
        />
        {/* Dark Vignette & Edge Blending for High Text Readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#050505] via-[#050505]/80 to-[#050505]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(5,5,5,0.3)_0%,#050505_85%)]" />
      </div>

      {/* Background Stock Grid Coordinate Markers */}
      <div className="absolute inset-0 bg-financial-grid opacity-20 pointer-events-none" />
      <div className="absolute top-1/3 left-0 w-80 h-80 bg-[#16C784]/5 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-[#D4AF37]/5 rounded-full blur-[140px] pointer-events-none" />

      {/* Continuously Floating Coins & Notes in The Journey section */}
      <FloatingCurrency section="journey" />

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-2xl mx-auto mb-20 sm:mb-28">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-neutral-900/80 border border-[#D4AF37]/25 text-[11px] font-mono tracking-widest text-[#FFD700] uppercase mb-4"
          >
            <span>ROADMAP</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="font-cinzel text-3xl sm:text-4xl md:text-5xl font-extrabold uppercase text-gold-gradient tracking-wide mb-4"
          >
            THE JOURNEY
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-neutral-400 text-sm sm:text-base font-light font-mono tracking-wide"
          >
            EXECUTION PIPELINE // FROM ENROLLMENT TO THE ARENA PODIUM
          </motion.p>
        </div>

        {/* ============================================================== */}
        {/* TIMELINE CONTAINER WITH PROGRESSIVE GLOWING VERTICAL LINE     */}
        {/* ============================================================== */}
        <div className="relative">
          
          {/* Base Unlit Track (Desktop Center, Mobile Left) */}
          <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-[2px] -translate-x-1/2 bg-neutral-800/80 z-0">
            {/* Subtle candle markers along track */}
            <div className="absolute top-[25%] left-1/2 -translate-x-1/2 w-4 h-[1px] bg-neutral-700" />
            <div className="absolute top-[50%] left-1/2 -translate-x-1/2 w-4 h-[1px] bg-neutral-700" />
            <div className="absolute top-[75%] left-1/2 -translate-x-1/2 w-4 h-[1px] bg-neutral-700" />
          </div>

          {/* Glowing Animated Gold Line that Progressively Illuminates */}
          <motion.div
            style={{ scaleY }}
            className="absolute left-6 md:left-1/2 top-0 bottom-0 w-[3px] -translate-x-1/2 origin-top z-0 bg-gradient-to-b from-[#FFE885] via-[#FFD700] to-[#D4AF37] shadow-[0_0_15px_rgba(255,215,0,0.8),0_0_30px_rgba(212,175,55,0.4)]"
          />

          {/* Timeline Nodes & Content */}
          <div className="space-y-12 sm:space-y-20 relative z-10">
            {steps.map((step, idx) => {
              const isEven = idx % 2 === 1;
              const IconComp = step.icon;

              return (
                <div
                  key={step.number}
                  className={`flex flex-col md:flex-row items-start ${
                    isEven ? "md:flex-row-reverse" : ""
                  } relative`}
                >
                  {/* Left / Right Card Container */}
                  <motion.div
                    initial={{ opacity: 0, x: isEven ? 40 : -40, y: 20 }}
                    whileInView={{ opacity: 1, x: 0, y: 0 }}
                    viewport={{ once: true, margin: "-80px" }}
                    transition={{ duration: 0.7, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
                    className={`w-full md:w-[calc(50%-48px)] pl-16 md:pl-0 ${
                      isEven ? "md:text-left" : "md:text-right"
                    }`}
                  >
                    <div className="group glass-panel p-6 sm:p-7 rounded-2xl glass-panel-hover border border-[#D4AF37]/20 relative overflow-hidden">
                      {/* Top Stock-chart Inspired Header */}
                      <div
                        className={`flex items-center gap-3 mb-4 font-mono text-[11px] ${
                          isEven ? "justify-between" : "justify-between md:flex-row-reverse"
                        }`}
                      >
                        <span className="text-[#FFD700] font-bold tracking-widest bg-[#D4AF37]/10 px-2.5 py-1 rounded border border-[#D4AF37]/25">
                          {step.tagline}
                        </span>

                        <span className="text-[#16C784] font-semibold flex items-center gap-1">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#16C784] animate-pulse" />
                          {step.candlestick.high}
                        </span>
                      </div>

                      {/* Main Title */}
                      <div
                        className={`flex items-baseline gap-3 mb-2 ${
                          isEven ? "justify-start" : "justify-start md:justify-end"
                        }`}
                      >
                        <span className="font-cinzel text-2xl sm:text-3xl font-bold tracking-wider text-white group-hover:text-gold-gradient transition-colors">
                          {step.title}
                        </span>
                      </div>

                      {/* Description */}
                      <p className="text-neutral-300 text-sm sm:text-base font-light leading-relaxed mb-4">
                        &ldquo;{step.description}&rdquo;
                      </p>

                      {/* Stock Card Metadata Footer */}
                      <div
                        className={`pt-3 border-t border-neutral-800/80 flex items-center gap-4 text-xs font-mono text-neutral-400 ${
                          isEven ? "justify-start" : "justify-start md:justify-end"
                        }`}
                      >
                        <span className="text-neutral-500 uppercase">{step.status}</span>
                        <span className="text-[#D4AF37]/40">•</span>
                        <span className="text-neutral-400 font-semibold">{step.metric}</span>
                      </div>
                    </div>
                  </motion.div>

                  {/* Central Node on Glowing Line */}
                  <div className="absolute left-6 md:left-1/2 -translate-x-1/2 top-4 md:top-6 flex items-center justify-center">
                    <motion.div
                      initial={{ scale: 0.6, opacity: 0 }}
                      whileInView={{ scale: 1, opacity: 1 }}
                      viewport={{ once: true, margin: "-80px" }}
                      transition={{ duration: 0.5, delay: 0.1 }}
                      className="relative flex items-center justify-center"
                    >
                      {/* Glowing Ambient Halo */}
                      <div className="w-11 h-11 sm:w-13 sm:h-13 rounded-full bg-gradient-to-tr from-[#997B19] via-[#FFD700] to-[#FFE885] p-0.5 shadow-[0_0_25px_rgba(255,215,0,0.65)]">
                        <div className="w-full h-full rounded-full bg-[#08080B] flex items-center justify-center text-[#FFD700]">
                          <span className="font-cinzel text-xs sm:text-sm font-extrabold tracking-wider">
                            {step.number}
                          </span>
                        </div>
                      </div>

                      {/* Candlestick Crosshair Guides for Desktop */}
                      <div className="hidden md:block absolute -left-8 w-6 h-[1px] bg-gradient-to-r from-transparent to-[#D4AF37]/40" />
                      <div className="hidden md:block absolute -right-8 w-6 h-[1px] bg-gradient-to-l from-transparent to-[#D4AF37]/40" />
                    </motion.div>
                  </div>

                  {/* Empty Spacer on Opposite Side for Desktop Grid Symmetry */}
                  <div className="hidden md:block w-[calc(50%-48px)]" />
                </div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
}
