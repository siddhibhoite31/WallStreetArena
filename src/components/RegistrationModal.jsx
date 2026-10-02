import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ExternalLink, ArrowRight } from 'lucide-react';
import { EVENT_CONFIG } from '../config';

/**
 * RegistrationModal
 * Centered modal matching the application portal reference image:
 * - Subtle teal ambient & border
 * - Top APPLICATION PORTAL indicator
 * - "CHOOSE YOUR REGISTRATION" serif heading
 * - Two distinct cards: PCCOE Students & External Students
 */
export default function RegistrationModal({ isOpen, onClose }) {
  // Prevent background scrolling while modal is open & handle Escape key
  useEffect(() => {
    if (!isOpen) return;

    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = originalOverflow;
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  const pccoeUrl = EVENT_CONFIG.registrationUrls?.pccoe || EVENT_CONFIG.registrationUrl;
  const externalUrl = EVENT_CONFIG.registrationUrls?.external || EVENT_CONFIG.registrationUrl;

  return (
    <AnimatePresence>
      {isOpen && (
        <div
          role="dialog"
          aria-modal="true"
          aria-labelledby="modal-title"
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto"
        >
          {/* Backdrop Overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/85 backdrop-blur-md"
          />

          {/* Centered Modal Content Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 15 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 15 }}
            transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
            onClick={(e) => e.stopPropagation()}
            className="relative w-full max-w-4xl bg-[#050808] border border-[#00dfa2]/25 rounded-2xl sm:rounded-3xl p-6 sm:p-10 lg:p-12 shadow-[0_25px_80px_rgba(0,0,0,0.95),0_0_50px_rgba(0,223,162,0.08)] overflow-hidden my-auto"
          >
            {/* Subtle Teal Ambient Glow in background */}
            <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[460px] h-[300px] bg-[#00dfa2]/10 rounded-full blur-[100px] pointer-events-none" />

            {/* Circular Close Button in Top-Right Corner */}
            <button
              type="button"
              onClick={onClose}
              aria-label="Close registration modal"
              className="absolute top-4 right-4 sm:top-6 sm:right-6 w-10 h-10 rounded-full bg-neutral-900/90 border border-neutral-800 text-neutral-400 hover:text-white hover:border-[#00dfa2]/50 flex items-center justify-center transition-all duration-200 z-20 cursor-pointer"
            >
              <X className="w-4 h-4 stroke-[2.2]" />
            </button>

            {/* Top Indicator: • APPLICATION PORTAL • */}
            <div className="text-center relative z-10">
              <div className="inline-flex items-center justify-center gap-2.5 text-[11px] sm:text-xs font-mono font-bold tracking-[0.25em] text-[#00dfa2] uppercase">
                <span className="w-1.5 h-1.5 rounded-full bg-[#00dfa2] shadow-[0_0_8px_#00dfa2]" />
                <span>APPLICATION PORTAL</span>
                <span className="w-1.5 h-1.5 rounded-full bg-[#00dfa2] shadow-[0_0_8px_#00dfa2]" />
              </div>

              {/* Main Heading */}
              <h2
                id="modal-title"
                className="font-cinzel text-2xl sm:text-4xl lg:text-5xl font-extrabold tracking-wide text-white uppercase mt-3 mb-2 drop-shadow-sm"
              >
                CHOOSE YOUR REGISTRATION
              </h2>

              {/* Subtitle */}
              <p className="text-neutral-300/80 text-xs sm:text-sm font-light leading-relaxed max-w-md mx-auto">
                Select your participant category to continue with registration.
              </p>

              {/* Subtle Decorative Crystal Shards */}
              <div className="flex items-center justify-center gap-1.5 mt-3 mb-1">
                <div className="w-3 h-3 rotate-45 bg-gradient-to-tr from-[#16C784] to-[#FFD700] rounded-[1px] opacity-75 shadow-[0_0_10px_rgba(22,199,132,0.6)]" />
                <div className="w-2 h-2 rotate-45 bg-[#00dfa2] rounded-[1px] opacity-60 shadow-[0_0_6px_#00dfa2]" />
              </div>
            </div>

            {/* Two Registration Cards Side by Side */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6 mt-6 sm:mt-8 relative z-10">
              
              {/* ------------------------------------------------------------ */}
              {/* LEFT CARD — PCCOE STUDENTS                                   */}
              {/* ------------------------------------------------------------ */}
              <div className="rounded-2xl bg-[#070c0b]/90 border border-[#00dfa2]/30 p-6 sm:p-8 flex flex-col items-center justify-between text-center min-h-[340px] hover:border-[#00dfa2]/60 hover:shadow-[0_0_30px_rgba(0,223,162,0.12)] transition-all duration-300">
                <div className="flex flex-col items-center w-full">
                  <h3 className="font-cinzel text-xl sm:text-2xl font-bold tracking-wider text-white uppercase mb-3">
                    PCCOE STUDENTS
                  </h3>

                  {/* Teal Pill Badge */}
                  <span className="inline-block px-4 py-1.5 rounded-full border border-[#00dfa2]/45 bg-[#00dfa2]/8 text-[#00dfa2] text-[11px] font-semibold tracking-widest uppercase mb-6 shadow-[0_0_12px_rgba(0,223,162,0.15)]">
                    EXCLUSIVE REGISTRATION
                  </span>

                  {/* Description */}
                  <p className="text-neutral-400 text-xs sm:text-sm font-normal leading-relaxed max-w-[240px]">
                    For students of Pimpri Chinchwad College of Engineering.
                  </p>
                </div>

                {/* Action Button */}
                <a
                  href={pccoeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full mt-8 py-3.5 px-4 rounded-xl bg-[#091815] border border-[#00dfa2]/40 text-neutral-100 hover:text-white hover:bg-[#00dfa2]/15 hover:border-[#00dfa2] font-mono text-xs sm:text-sm font-bold tracking-wider uppercase transition-all duration-200 flex items-center justify-center gap-2 group/btn cursor-pointer shadow-[0_0_15px_rgba(0,223,162,0.08)]"
                >
                  <span>REGISTER AS PCCOE STUDENT</span>
                  <ExternalLink className="w-4 h-4 text-[#00dfa2] group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
                </a>
              </div>

              {/* ------------------------------------------------------------ */}
              {/* RIGHT CARD — EXTERNAL STUDENTS                               */}
              {/* ------------------------------------------------------------ */}
              <div className="rounded-2xl bg-[#080b0b]/90 border border-neutral-800/90 p-6 sm:p-8 flex flex-col items-center justify-between text-center min-h-[340px] hover:border-[#D4AF37]/50 hover:shadow-[0_0_30px_rgba(212,175,55,0.12)] transition-all duration-300">
                <div className="flex flex-col items-center w-full">
                  <h3 className="font-cinzel text-xl sm:text-2xl font-bold tracking-wider text-white uppercase mb-3 leading-tight">
                    EXTERNAL<br />STUDENTS
                  </h3>

                  {/* Golden Pill Badge */}
                  <span className="inline-block px-4 py-1.5 rounded-full border border-[#D4AF37]/45 bg-[#D4AF37]/8 text-[#FFD700] text-[11px] font-semibold tracking-widest uppercase mb-6 shadow-[0_0_12px_rgba(212,175,55,0.15)]">
                    OPEN PARTICIPATION
                  </span>

                  {/* Description */}
                  <p className="text-neutral-400 text-xs sm:text-sm font-normal leading-relaxed max-w-[240px]">
                    For participants who are not students of PCCOE.
                  </p>
                </div>

                {/* Action Button */}
                <a
                  href={externalUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full mt-8 py-3.5 px-4 rounded-xl bg-[#071613] border border-[#0d3b34] text-neutral-100 hover:text-white hover:bg-[#00dfa2]/15 hover:border-[#00dfa2]/60 font-mono text-xs sm:text-sm font-bold tracking-wider uppercase transition-all duration-200 flex items-center justify-center gap-2 group/btn cursor-pointer shadow-[0_0_15px_rgba(0,0,0,0.5)]"
                >
                  <span>AS EXTERNAL STUDENT</span>
                  <ArrowRight className="w-4 h-4 text-[#00dfa2] group-hover/btn:translate-x-1 transition-transform" />
                </a>
              </div>

            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
