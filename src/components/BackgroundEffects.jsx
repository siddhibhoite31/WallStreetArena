import React, { useEffect, useRef, useState } from 'react';

export default function BackgroundEffects() {
  const canvasRef = useRef(null);
  const [mousePos, setMousePos] = useState({ x: -500, y: -500 });
  const [smoothMouse, setSmoothMouse] = useState({ x: -500, y: -500 });

  // Smooth mouse movement for radial cursor glow
  useEffect(() => {
    let animationFrameId;
    let targetX = -500;
    let targetY = -500;
    let currentX = -500;
    let currentY = -500;

    const handleMouseMove = (e) => {
      targetX = e.clientX;
      targetY = e.clientY;
    };

    const updateGlow = () => {
      currentX += (targetX - currentX) * 0.08;
      currentY += (targetY - currentY) * 0.08;
      setSmoothMouse({ x: currentX, y: currentY });
      animationFrameId = requestAnimationFrame(updateGlow);
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    animationFrameId = requestAnimationFrame(updateGlow);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  // Global Canvas Background Animation
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };
    window.addEventListener('resize', handleResize);

    // Particle System: Golden micro-particles
    const particleCount = Math.min(width > 768 ? 60 : 30, 70);
    const particles = Array.from({ length: particleCount }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      size: Math.random() * 2 + 0.8,
      speedY: (Math.random() * -0.4 - 0.15) * 0.8,
      speedX: (Math.random() - 0.5) * 0.25,
      alpha: Math.random() * 0.5 + 0.15,
      pulseSpeed: Math.random() * 0.02 + 0.01,
      pulse: Math.random() * Math.PI,
    }));

    // Floating subtle Candlesticks
    const candlestickCount = Math.min(width > 768 ? 14 : 7, 16);
    const candlesticks = Array.from({ length: candlestickCount }, () => {
      const isGreen = Math.random() > 0.45;
      return {
        x: Math.random() * width,
        y: Math.random() * height,
        bodyWidth: Math.random() * 8 + 6,
        bodyHeight: Math.random() * 35 + 20,
        wickTop: Math.random() * 15 + 8,
        wickBottom: Math.random() * 15 + 8,
        speedX: (Math.random() * 0.15 + 0.05) * (Math.random() > 0.5 ? 1 : -1),
        speedY: (Math.random() - 0.5) * 0.1,
        color: isGreen ? 'rgba(22, 199, 132,' : 'rgba(234, 57, 67,',
        alpha: Math.random() * 0.15 + 0.06,
      };
    });

    // Subtle Currency Silhouettes
    const currencies = ['$', '₹', '€', '¥', '£'];
    const currencyCount = Math.min(width > 768 ? 10 : 5, 12);
    const currencyParticles = Array.from({ length: currencyCount }, (v, i) => ({
      char: currencies[i % currencies.length],
      x: Math.random() * width,
      y: Math.random() * height,
      size: Math.random() * 20 + 24,
      speedY: Math.random() * -0.2 - 0.05,
      alpha: Math.random() * 0.04 + 0.02,
    }));

    // Moving Financial Graph Wave Points
    let graphOffset = 0;

    let lastTime = performance.now();

    const render = (time) => {
      const dt = (time - lastTime) / 1000;
      lastTime = time;

      ctx.clearRect(0, 0, width, height);

      // 1. Draw subtle financial grid
      ctx.strokeStyle = 'rgba(212, 175, 55, 0.025)';
      ctx.lineWidth = 1;
      const gridSize = 70;
      for (let x = 0; x < width; x += gridSize) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, height);
        ctx.stroke();
      }
      for (let y = 0; y < height; y += gridSize) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(width, y);
        ctx.stroke();
      }

      // 2. Draw Subtle Financial Bezier Lines
      graphOffset += 0.003;
      ctx.save();
      ctx.strokeStyle = 'rgba(212, 175, 55, 0.08)';
      ctx.lineWidth = 1.5;
      ctx.beginPath();
      for (let x = 0; x <= width; x += 30) {
        const y =
          height * 0.65 +
          Math.sin(x * 0.004 + graphOffset) * 40 +
          Math.cos(x * 0.008 + graphOffset * 0.7) * 25;
        if (x === 0) ctx.moveTo(x, y);
        else ctx.lineTo(x, y);
      }
      ctx.stroke();

      // Secondary stock graph wave with subtle green glow
      ctx.strokeStyle = 'rgba(22, 199, 132, 0.06)';
      ctx.lineWidth = 1;
      ctx.beginPath();
      for (let x = 0; x <= width; x += 40) {
        const y =
          height * 0.45 +
          Math.cos(x * 0.003 - graphOffset * 0.9) * 55 +
          Math.sin(x * 0.006 + graphOffset) * 20;
        if (x === 0) ctx.moveTo(x, y);
        else ctx.lineTo(x, y);
      }
      ctx.stroke();
      ctx.restore();

      // 3. Render Subtle Currency Silhouettes
      ctx.save();
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';
      currencyParticles.forEach((c) => {
        c.y += c.speedY;
        if (c.y < -50) {
          c.y = height + 30;
          c.x = Math.random() * width;
        }
        ctx.font = `600 ${c.size}px 'Cinzel', serif`;
        ctx.fillStyle = `rgba(212, 175, 55, ${c.alpha})`;
        ctx.fillText(c.char, c.x, c.y);
      });
      ctx.restore();

      // 4. Render Subtle Floating Candlesticks
      candlesticks.forEach((cs) => {
        cs.x += cs.speedX;
        cs.y += cs.speedY;
        if (cs.x > width + 40) cs.x = -40;
        if (cs.x < -40) cs.x = width + 40;
        if (cs.y > height + 40) cs.y = -40;
        if (cs.y < -40) cs.y = height + 40;

        ctx.fillStyle = `${cs.color} ${cs.alpha})`;
        ctx.strokeStyle = `${cs.color} ${cs.alpha * 1.2})`;
        ctx.lineWidth = 1.2;

        // Wick
        ctx.beginPath();
        ctx.moveTo(cs.x + cs.bodyWidth / 2, cs.y - cs.wickTop);
        ctx.lineTo(cs.x + cs.bodyWidth / 2, cs.y + cs.bodyHeight + cs.wickBottom);
        ctx.stroke();

        // Body
        ctx.fillRect(cs.x, cs.y, cs.bodyWidth, cs.bodyHeight);
      });

      // 5. Render Floating Golden Micro-Particles
      particles.forEach((p) => {
        p.y += p.speedY;
        p.x += p.speedX;
        p.pulse += p.pulseSpeed;

        if (p.y < -10) {
          p.y = height + 10;
          p.x = Math.random() * width;
        }
        if (p.x < 0) p.x = width;
        if (p.x > width) p.x = 0;

        const currentAlpha = p.alpha * (0.6 + 0.4 * Math.sin(p.pulse));
        ctx.fillStyle = `rgba(255, 215, 0, ${currentAlpha})`;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fill();
      });

      animationFrameId = requestAnimationFrame(render);
    };

    animationFrameId = requestAnimationFrame(render);

    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <>
      {/* Fixed Canvas for smooth ambient animated graphics */}
      <canvas
        ref={canvasRef}
        className="fixed inset-0 pointer-events-none z-[1] w-full h-full opacity-90"
        style={{ mixBlendMode: 'screen' }}
      />

      {/* Subtle Desktop Cursor Follower Radial Glow */}
      <div
        className="fixed pointer-events-none z-[2] transition-opacity duration-500 hidden md:block"
        style={{
          width: '600px',
          height: '600px',
          left: `${smoothMouse.x - 300}px`,
          top: `${smoothMouse.y - 300}px`,
          background: 'radial-gradient(circle, rgba(212, 175, 55, 0.08) 0%, rgba(212, 175, 55, 0.02) 40%, transparent 70%)',
          transform: 'translate3d(0, 0, 0)',
        }}
      />

      {/* Global Vignette and Grain Overlay */}
      <div className="fixed inset-0 pointer-events-none z-[3] bg-[radial-gradient(ellipse_at_center,transparent_35%,rgba(5,5,5,0.75)_100%)]" />
    </>
  );
}
