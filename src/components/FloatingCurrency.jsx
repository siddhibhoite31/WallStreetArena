import React from 'react';
import { motion } from 'framer-motion';

/**
 * CurrencyNote
 * Realistic, high-definition floating US dollar currency note.
 * Features:
 * - Authentic 2.3 : 1 aspect ratio
 * - Treasury green engraved guilloche border and corner rosettes
 * - Corner "100" denominations
 * - WallStreet Arena emblem, Federal Reserve seal, and green serial numbers
 * - Drop shadow and subtle paper texture
 */
function CurrencyNote({ width = 105, className = "" }) {
  const height = Math.round(width * 0.44);

  return (
    <div
      style={{ width: `${width}px`, height: `${height}px` }}
      className={`rounded-[2px] bg-[#0c1813] border border-[#16C784]/45 p-[3px] shadow-[0_10px_25px_rgba(0,0,0,0.85),0_0_15px_rgba(22,199,132,0.12)] select-none relative overflow-hidden group ${className}`}
    >
      {/* Intricate Treasury Engraved Inner Border */}
      <div className="w-full h-full border border-[#D4AF37]/40 rounded-[1px] p-[2px] flex items-center justify-between relative bg-gradient-to-r from-[#0a1c15] via-[#0f2a20] to-[#0a1c15]">
        
        {/* Subtle Watermark Grid & Micro Guilloche */}
        <div className="absolute inset-0 bg-financial-grid opacity-20 pointer-events-none" />

        {/* 4 Corner Numbers */}
        <span className="absolute top-[2px] left-[3px] text-[7px] sm:text-[8px] font-mono font-bold text-[#16C784] leading-none drop-shadow-sm">
          100
        </span>
        <span className="absolute top-[2px] right-[3px] text-[7px] sm:text-[8px] font-mono font-bold text-[#16C784] leading-none drop-shadow-sm">
          100
        </span>
        <span className="absolute bottom-[2px] left-[3px] text-[7px] sm:text-[8px] font-mono font-bold text-[#16C784] leading-none drop-shadow-sm">
          100
        </span>
        <span className="absolute bottom-[2px] right-[3px] text-[7px] sm:text-[8px] font-mono font-bold text-[#16C784] leading-none drop-shadow-sm">
          100
        </span>

        {/* Top Header Label */}
        <div className="absolute top-[1px] left-0 right-0 text-center">
          <span className="text-[5px] sm:text-[6px] font-mono tracking-widest text-[#D4AF37]/90 uppercase scale-90 block">
            FEDERAL ARENA NOTE
          </span>
        </div>

        {/* Left Side: Treasury Green Seal */}
        <div className="ml-3 sm:ml-4 w-4 h-4 rounded-full border border-[#16C784]/60 flex items-center justify-center bg-[#071912]/80">
          <span className="text-[6px] font-mono font-black text-[#16C784]">★</span>
        </div>

        {/* Center: Iconic Oval Medallion */}
        <div className="mx-auto w-7 h-7 sm:w-8 sm:h-8 rounded-full border border-[#D4AF37]/60 flex items-center justify-center bg-[#06140e] shadow-[0_0_8px_rgba(212,175,55,0.2)]">
          <span className="font-cinzel text-[11px] sm:text-[13px] font-black text-[#FFD700] drop-shadow-[0_1px_2px_rgba(0,0,0,0.8)]">
            $
          </span>
        </div>

        {/* Right Side: Serial Number Stamp */}
        <div className="mr-3 sm:mr-4 flex flex-col items-end">
          <span className="text-[4.5px] sm:text-[5px] font-mono font-bold text-[#16C784]/90 tracking-tighter">
            WA2026$
          </span>
        </div>

        {/* Bottom Banner Ribbon */}
        <div className="absolute bottom-[1px] left-0 right-0 text-center">
          <span className="text-[4.5px] sm:text-[5px] font-mono tracking-wider text-[#A3B899] uppercase scale-90 block">
            IN STRATEGY WE TRUST
          </span>
        </div>
      </div>
    </div>
  );
}

/**
 * FloatingCurrency
 * Renders an artistic floating field of ONLY currency banknotes / dollar bills.
 * Excludes any cursor icons and coins as requested.
 * @param {string} section - 'about' | 'journey'
 */
export default function FloatingCurrency({ section = 'about' }) {
  // Preset note configurations for About section
  const aboutNotes = [
    // 1. Top Left - Tilted Currency Note
    {
      width: 105,
      top: '10%',
      left: '4%',
      floatY: [-18, 20, -18],
      rotateZ: [-14, 8, -14],
      rotateX: [0, 20, 0],
      duration: 11,
      delay: 0,
      opacity: 0.8,
    },
    // 2. Top Right - Gracefully Drifting Note
    {
      width: 115,
      top: '8%',
      right: '6%',
      floatY: [20, -22, 20],
      rotateZ: [16, -10, 16],
      rotateX: [15, 0, 15],
      duration: 13,
      delay: 1.2,
      opacity: 0.85,
    },
    // 3. Middle Left - Floating Banknote
    {
      width: 95,
      top: '46%',
      left: '2%',
      floatY: [-22, 18, -22],
      rotateZ: [-18, 4, -18],
      duration: 12,
      delay: 0.5,
      opacity: 0.7,
    },
    // 4. Middle Right - Broad Floating Note
    {
      width: 110,
      top: '42%',
      right: '4%',
      floatY: [18, -20, 18],
      rotateZ: [12, -14, 12],
      rotateX: [0, 18, 0],
      duration: 14,
      delay: 2.0,
      opacity: 0.8,
    },
    // 5. Bottom Left - Tilted Banknote
    {
      width: 90,
      top: '78%',
      left: '5%',
      floatY: [-16, 16, -16],
      rotateZ: [10, -12, 10],
      duration: 10,
      delay: 1.8,
      opacity: 0.75,
    },
    // 6. Bottom Right - Floating Dollar Bill
    {
      width: 100,
      top: '82%',
      right: '5%',
      floatY: [-20, 18, -20],
      rotateZ: [-16, 10, -16],
      duration: 13,
      delay: 2.8,
      opacity: 0.75,
    },
    // 7. Ambient Background Note (Center-left)
    {
      width: 80,
      top: '26%',
      left: '38%',
      floatY: [12, -16, 12],
      rotateZ: [6, -14, 6],
      duration: 16,
      delay: 3.2,
      opacity: 0.3,
      blur: 'blur-[1px]',
    },
  ];

  // Preset note configurations for The Journey (Timeline) section
  const journeyNotes = [
    // 1. Stage 01 (Registration) - Left Note
    {
      width: 110,
      top: '6%',
      left: '4%',
      floatY: [-18, 22, -18],
      rotateZ: [-14, 10, -14],
      rotateX: [0, 18, 0],
      duration: 11,
      delay: 0,
      opacity: 0.8,
    },
    // 2. Stage 01 (Registration) - Right Note
    {
      width: 105,
      top: '9%',
      right: '5%',
      floatY: [22, -18, 22],
      rotateZ: [15, -8, 15],
      duration: 12.5,
      delay: 1.4,
      opacity: 0.85,
    },
    // 3. Stage 02 (Aptitude Test) - Left Note
    {
      width: 95,
      top: '28%',
      left: '3%',
      floatY: [-24, 18, -24],
      rotateZ: [16, -12, 16],
      duration: 13,
      delay: 0.6,
      opacity: 0.75,
    },
    // 4. Stage 02 (Aptitude Test) - Right Note
    {
      width: 115,
      top: '32%',
      right: '4%',
      floatY: [18, -22, 18],
      rotateZ: [-12, 14, -12],
      rotateX: [15, 0, 15],
      duration: 14,
      delay: 2.2,
      opacity: 0.8,
    },
    // 5. Stage 03 (Shortlisting) - Left Note
    {
      width: 120,
      top: '52%',
      left: '4%',
      floatY: [-20, 24, -20],
      rotateZ: [-16, 12, -16],
      duration: 12,
      delay: 1.0,
      opacity: 0.85,
    },
    // 6. Stage 03 (Shortlisting) - Right Note
    {
      width: 95,
      top: '56%',
      right: '5%',
      floatY: [18, -18, 18],
      rotateZ: [14, -14, 14],
      duration: 13.5,
      delay: 2.5,
      opacity: 0.75,
    },
    // 7. Stage 04 (Finale) - Left Grand Finale Note
    {
      width: 115,
      top: '76%',
      left: '3%',
      floatY: [-22, 22, -22],
      rotateZ: [12, -16, 12],
      rotateX: [0, 20, 0],
      duration: 14.5,
      delay: 0.8,
      opacity: 0.85,
    },
    // 8. Stage 04 (Finale) - Right Grand Finale Note
    {
      width: 125,
      top: '78%',
      right: '4%',
      floatY: [24, -22, 24],
      rotateZ: [-15, 15, -15],
      duration: 11,
      delay: 1.8,
      opacity: 0.9,
    },
    // 9. Midground Ambient Note
    {
      width: 85,
      top: '42%',
      left: '12%',
      floatY: [-14, 16, -14],
      rotateZ: [8, -12, 8],
      duration: 15,
      delay: 3.0,
      opacity: 0.35,
      blur: 'blur-[1px]',
    },
    // 10. Lower Ambient Note
    {
      width: 80,
      top: '90%',
      right: '12%',
      floatY: [14, -15, 14],
      rotateZ: [-10, 10, -10],
      duration: 16,
      delay: 2.0,
      opacity: 0.4,
      blur: 'blur-[1px]',
    },
  ];

  const items = section === 'journey' ? journeyNotes : aboutNotes;

  return (
    <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden" aria-hidden="true">
      {items.map((item, idx) => {
        const style = {
          position: 'absolute',
          top: item.top,
          left: item.left,
          right: item.right,
          opacity: item.opacity,
          perspective: 800,
        };

        return (
          <motion.div
            key={idx}
            style={style}
            className={`${item.blur || ''} will-change-transform`}
            animate={{
              y: item.floatY,
              rotateZ: item.rotateZ || 0,
              rotateX: item.rotateX || 0,
            }}
            transition={{
              duration: item.duration,
              repeat: Infinity,
              repeatType: 'reverse',
              ease: 'easeInOut',
              delay: item.delay,
            }}
          >
            <CurrencyNote width={item.width} />
          </motion.div>
        );
      })}
    </div>
  );
}
