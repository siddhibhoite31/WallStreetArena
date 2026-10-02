import React from 'react';
import { motion } from 'framer-motion';
import { Phone, MessageCircle, Mail, MapPin, ExternalLink, ShieldCheck } from 'lucide-react';
import { EVENT_CONFIG } from '../config';
import GoldenStreakCanvas from './GoldenStreakCanvas';

export default function Contact() {
  return (
    <section
      id="contact"
      className="relative py-24 sm:py-32 bg-[#050505] border-t border-[#D4AF37]/15 overflow-hidden"
    >
      {/* Large Elegant Moving Golden Streak (Financial Stock Wave of Fine Lines) */}
      <GoldenStreakCanvas />

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 sm:mb-20">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-neutral-900/80 border border-[#D4AF37]/25 text-[11px] font-mono tracking-widest text-[#FFD700] uppercase mb-4"
          >
            <span>COMMUNICATION DESK</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="font-cinzel text-3xl sm:text-4xl md:text-5xl font-extrabold uppercase text-gold-gradient tracking-wide mb-3"
          >
            GET IN TOUCH
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-neutral-300 text-base sm:text-lg font-light leading-relaxed"
          >
            &ldquo;Have a question? We&apos;re here to help.&rdquo;
          </motion.p>
        </div>

        {/* Two Clean Contact Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 max-w-4xl mx-auto mb-12">
          {EVENT_CONFIG.coordinators.map((coordinator, idx) => (
            <motion.div
              key={coordinator.name}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.7, delay: idx * 0.15, ease: [0.16, 1, 0.3, 1] }}
              className="glass-panel p-7 sm:p-8 rounded-2xl glass-panel-hover border border-[#D4AF37]/20 relative overflow-hidden group"
            >
              {/* Subtle top indicator */}
              <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#FFD700]/50 to-transparent" />

              {/* Centered Coordinator Details */}
              <div className="flex flex-col items-center justify-center text-center mb-6">
                <span className="text-[10px] font-mono tracking-widest text-[#FFD700] uppercase block mb-1.5">
                  {coordinator.role || 'STUDENT COORDINATOR'}
                </span>
                <h3 className="font-cinzel text-xl sm:text-2xl font-bold tracking-wider uppercase text-neutral-100 group-hover:text-gold-gradient transition-colors">
                  {coordinator.name}
                </h3>
              </div>

              {/* Centered Contact Phone & Actions */}
              <div className="space-y-3.5 max-w-sm mx-auto w-full">
                <a
                  href={`tel:${coordinator.phone}`}
                  className="flex items-center justify-between p-3.5 rounded-xl bg-neutral-900/60 border border-neutral-800 hover:border-[#D4AF37]/50 hover:bg-neutral-900 transition-all text-neutral-200 group/link"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-[#D4AF37]/10 flex items-center justify-center text-[#FFD700]">
                      <Phone className="w-4 h-4" />
                    </div>
                    <span className="font-mono text-sm sm:text-base font-bold tracking-wider">
                      +91 {coordinator.phone}
                    </span>
                  </div>
                  <span className="text-xs font-mono text-[#D4AF37] uppercase tracking-wider group-hover/link:underline">
                    CALL
                  </span>
                </a>

                {/* WhatsApp Chat link */}
                <a
                  href={`https://wa.me/${coordinator.phoneRaw}?text=Hi%20${encodeURIComponent(coordinator.name)},%20I%20have%20a%20query%20regarding%20Wallstreet%20Arena%202026.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-3.5 rounded-xl bg-neutral-900/40 border border-neutral-800/80 hover:border-[#16C784]/50 hover:bg-neutral-900 transition-all text-neutral-300 group/link"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-[#16C784]/10 flex items-center justify-center text-[#16C784]">
                      <MessageCircle className="w-4 h-4" />
                    </div>
                    <span className="text-xs sm:text-sm font-medium">WhatsApp Assistance</span>
                  </div>
                  <span className="text-xs font-mono text-[#16C784] tracking-wider group-hover/link:underline">
                    MESSAGE →
                  </span>
                </a>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Location Banner: PCCOE, Pune */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="text-center p-6 rounded-2xl glass-panel max-w-xl mx-auto border border-[#D4AF37]/25"
        >
          <div className="flex items-center justify-center gap-2 text-[#FFD700] mb-2 font-mono text-xs uppercase tracking-widest">
            <MapPin className="w-4 h-4" />
            <span>VENUE</span>
          </div>

          <h4 className="font-cinzel text-xl sm:text-2xl font-bold uppercase text-white tracking-wider mb-1">
            PCCOE, Pune
          </h4>

          <p className="text-neutral-400 text-xs sm:text-sm font-light mb-4">
            Pimpri Chinchwad College of Engineering, Sector 26, Pradhikaran, Nigdi, Pune 411044
          </p>

          <a
            href={EVENT_CONFIG.mapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-xs font-mono tracking-widest text-[#FFD700] hover:text-white uppercase transition-colors"
          >
            <span>VIEW ON GOOGLE MAPS</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </motion.div>

      </div>
    </section>
  );
}
