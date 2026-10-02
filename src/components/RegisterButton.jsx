import React from 'react';
import { ArrowRight } from 'lucide-react';
import { useRegistrationModal } from '../context/RegistrationModalContext';

export default function RegisterButton({ 
  text = "REGISTER NOW", 
  className = "", 
  size = "md",
  showArrow = true,
  onClick
}) {
  const { openRegistrationModal } = useRegistrationModal();

  const sizeClasses = {
    sm: "px-4 py-2 text-xs font-semibold tracking-wider",
    md: "px-6 py-2.5 text-xs sm:text-sm font-bold tracking-widest",
    lg: "px-9 py-4 text-sm sm:text-base font-bold tracking-widest shadow-2xl"
  };

  const handleClick = (e) => {
    e.preventDefault();
    if (onClick) {
      onClick(e);
    }
    openRegistrationModal();
  };

  return (
    <button
      type="button"
      onClick={handleClick}
      aria-label={`${text} for Wallstreet Arena 2026`}
      className={`group relative inline-flex items-center justify-center gap-2.5 
        bg-gradient-to-r from-[#FFE885] via-[#FFD700] to-[#D4AF37] 
        text-[#050505] font-extrabold uppercase rounded-full
        transition-all duration-300 ease-out transform-gpu
        hover:scale-105 active:scale-95
        hover:shadow-[0_0_35px_rgba(255,215,0,0.65)]
        border border-[#FFF4B8]/80
        overflow-hidden select-none cursor-pointer ${sizeClasses[size]} ${className}`}
    >
      {/* Sweeping Gold / White Shine Effect */}
      <span 
        className="absolute -top-full -left-full w-full h-[300%] bg-gradient-to-r from-transparent via-white/70 to-transparent rotate-25 transition-all duration-700 ease-in-out group-hover:left-[150%] pointer-events-none"
      />
      
      {/* Button Text */}
      <span className="relative z-10 font-cinzel tracking-wider drop-shadow-[0_1px_1px_rgba(255,255,255,0.4)]">
        {text}
      </span>

      {/* Arrow on hover / visible */}
      {showArrow && (
        <span className="relative z-10 transition-transform duration-300 transform group-hover:translate-x-1.5 flex items-center">
          <ArrowRight className="w-4 h-4 stroke-[2.8]" />
        </span>
      )}
    </button>
  );
}
