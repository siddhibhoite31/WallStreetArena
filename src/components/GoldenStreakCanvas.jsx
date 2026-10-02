import React, { useEffect, useRef } from 'react';

/**
 * GoldenStreakCanvas
 * Renders a large, elegant, continuously moving stock-market streak made of
 * fine golden lines across the background.
 * Uses hardware-accelerated HTML5 Canvas with devicePixelRatio scaling,
 * responsive resize handling, and IntersectionObserver pausing.
 */
export default function GoldenStreakCanvas() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId;
    let width = 0;
    let height = 0;
    let dpr = 1;
    let isVisible = true;
    let time = 0;

    // Handle high-DPI screens and resizing
    const updateSize = () => {
      const rect = canvas.getBoundingClientRect();
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      width = rect.width;
      height = rect.height;
      canvas.width = Math.floor(width * dpr);
      canvas.height = Math.floor(height * dpr);
    };

    updateSize();

    const resizeObserver = new ResizeObserver(() => {
      updateSize();
    });
    resizeObserver.observe(canvas);

    // Pause animation when scrolled offscreen to conserve CPU/GPU
    const intersectionObserver = new IntersectionObserver(
      ([entry]) => {
        isVisible = entry.isIntersecting;
      },
      { threshold: 0.05 }
    );
    intersectionObserver.observe(canvas);

    // Primary ribbon line count and secondary ribbon line count
    const PRIMARY_LINES = 18;
    const SECONDARY_LINES = 9;

    const render = () => {
      if (!isVisible || width === 0 || height === 0) {
        animationFrameId = requestAnimationFrame(render);
        return;
      }

      time += 0.0075; // Smooth, slow continuous flow

      ctx.save();
      ctx.scale(dpr, dpr);
      ctx.clearRect(0, 0, width, height);

      // -------------------------------------------------------------
      // 1. Primary Main Market Streak (Broad, sweeping upward trend)
      // -------------------------------------------------------------
      const centerY1 = height * 0.52;
      const mid1 = PRIMARY_LINES / 2;

      // Create a smooth horizontal gradient for the primary streak
      const grad1 = ctx.createLinearGradient(0, 0, width, 0);
      grad1.addColorStop(0, 'rgba(212, 175, 55, 0)');
      grad1.addColorStop(0.12, 'rgba(212, 175, 55, 0.22)');
      grad1.addColorStop(0.45, 'rgba(255, 215, 0, 0.42)');
      grad1.addColorStop(0.75, 'rgba(212, 175, 55, 0.30)');
      grad1.addColorStop(1, 'rgba(212, 175, 55, 0)');

      ctx.lineWidth = 1;
      ctx.lineCap = 'round';
      ctx.lineJoin = 'round';

      for (let i = 0; i < PRIMARY_LINES; i++) {
        // Line spread across the streak ribbon (total spread ~110px)
        const lineOffset = (i - mid1) * 6;
        // Subtle phase delay between adjacent strands creates organic ribbon twist
        const strandPhase = i * 0.07;
        // Central strands have slightly higher opacity for metallic core
        const intensity = 1 - Math.abs(i - mid1) / (mid1 + 2);
        
        ctx.strokeStyle = grad1;
        ctx.globalAlpha = 0.28 + intensity * 0.48;

        ctx.beginPath();
        const step = 16;
        for (let x = 0; x <= width + step; x += step) {
          const p = x / width; // 0 to 1
          
          // Stock market trajectory: accumulation -> breakout swing -> consolidation
          const baseTrajectory = Math.sin(p * Math.PI * 1.35 - 0.3) * (height * 0.18);
          
          // Fluid continuous harmonics
          const wave1 = Math.sin(p * 3.8 - time * 1.1 + strandPhase) * 26;
          const wave2 = Math.cos(p * 2.2 + time * 0.7 + strandPhase * 0.8) * 16;
          const microWave = Math.sin(p * 7.0 - time * 1.8 + strandPhase) * 6;

          const y = centerY1 + baseTrajectory + wave1 + wave2 + microWave + lineOffset;

          if (x === 0) {
            ctx.moveTo(x, y);
          } else {
            ctx.lineTo(x, y);
          }
        }
        ctx.stroke();
      }

      // -------------------------------------------------------------
      // 2. Secondary Harmonic Streak (Counter-flow in upper zone)
      // -------------------------------------------------------------
      const centerY2 = height * 0.28;
      const mid2 = SECONDARY_LINES / 2;

      const grad2 = ctx.createLinearGradient(0, 0, width, 0);
      grad2.addColorStop(0, 'rgba(212, 175, 55, 0)');
      grad2.addColorStop(0.2, 'rgba(212, 175, 55, 0.14)');
      grad2.addColorStop(0.6, 'rgba(255, 215, 0, 0.22)');
      grad2.addColorStop(0.85, 'rgba(212, 175, 55, 0.14)');
      grad2.addColorStop(1, 'rgba(212, 175, 55, 0)');

      for (let j = 0; j < SECONDARY_LINES; j++) {
        const lineOffset2 = (j - mid2) * 5.5;
        const strandPhase2 = j * 0.09;
        const intensity2 = 1 - Math.abs(j - mid2) / (mid2 + 1);

        ctx.strokeStyle = grad2;
        ctx.globalAlpha = 0.15 + intensity2 * 0.25;

        ctx.beginPath();
        const step2 = 20;
        for (let x = 0; x <= width + step2; x += step2) {
          const p = x / width;
          const baseTrajectory2 = Math.cos(p * Math.PI * 1.1) * (height * 0.12);
          const waveA = Math.sin(p * 3.2 + time * 0.85 + strandPhase2) * 20;
          const waveB = Math.cos(p * 5.4 - time * 1.0 + strandPhase2) * 10;
          const y = centerY2 + baseTrajectory2 + waveA + waveB + lineOffset2;

          if (x === 0) {
            ctx.moveTo(x, y);
          } else {
            ctx.lineTo(x, y);
          }
        }
        ctx.stroke();
      }

      ctx.restore();
      animationFrameId = requestAnimationFrame(render);
    };

    animationFrameId = requestAnimationFrame(render);

    return () => {
      cancelAnimationFrame(animationFrameId);
      resizeObserver.disconnect();
      intersectionObserver.disconnect();
    };
  }, []);

  return (
    <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
      <canvas
        ref={canvasRef}
        className="w-full h-full block"
        style={{ mixBlendMode: 'screen' }}
      />
    </div>
  );
}
