import React, { useState, useEffect } from 'react';

// Singleton in-memory cache so transparency processing runs at most once
let cachedTransparentLogoUrl = null;
const subscribers = new Set();
let isProcessing = false;

function triggerProcessing() {
  if (cachedTransparentLogoUrl || isProcessing || typeof window === 'undefined') return;
  isProcessing = true;

  const img = new Image();
  img.crossOrigin = 'anonymous';
  img.src = '/wallstreet_arena_logo.png';

  img.onload = () => {
    try {
      const canvas = document.createElement('canvas');
      const w = img.naturalWidth || 1254;
      const h = img.naturalHeight || 1254;
      canvas.width = w;
      canvas.height = h;

      const ctx = canvas.getContext('2d', { willReadFrequently: true });
      if (!ctx) return;

      ctx.drawImage(img, 0, 0);
      const imgData = ctx.getImageData(0, 0, w, h);
      const data = imgData.data;
      const cx = w / 2;
      const cy = h / 2;
      const total = w * h;

      // Clean exterior background removal while 100% protecting medallion interior
      for (let i = 0; i < total; i++) {
        const x = i % w;
        const y = Math.floor(i / w);
        const dx = x - cx;
        const dy = y - cy;
        const dist = Math.sqrt(dx * dx + dy * dy);

        // Outside the inner medallion (protecting suit, tie, candlesticks, ARENA text)
        if (dist >= 518) {
          const idx = i * 4;
          const r = data[idx];
          const g = data[idx + 1];
          const b = data[idx + 2];
          const maxC = Math.max(r, g, b);

          if (dist > 632 && maxC <= 28) {
            // Far exterior corners: 100% transparent
            data[idx + 3] = 0;
          } else if (maxC <= 14) {
            // Pure black exterior: 100% transparent
            data[idx + 3] = 0;
          } else if (maxC <= 52) {
            // Smooth anti-aliased edge feathering
            const alphaRatio = Math.max(0, Math.min(1, (maxC - 14) / 38.0));
            data[idx] = Math.min(255, Math.round(r / Math.max(alphaRatio, 0.12)));
            data[idx + 1] = Math.min(255, Math.round(g / Math.max(alphaRatio, 0.12)));
            data[idx + 2] = Math.min(255, Math.round(b / Math.max(alphaRatio, 0.12)));
            data[idx + 3] = Math.round(alphaRatio * 255);
          }
        }
      }

      ctx.putImageData(imgData, 0, 0);
      cachedTransparentLogoUrl = canvas.toDataURL('image/png');
      subscribers.forEach((cb) => cb(cachedTransparentLogoUrl));
      subscribers.clear();
    } catch (err) {
      console.warn('Transparent logo processing fallback:', err);
    } finally {
      isProcessing = false;
    }
  };

  img.onerror = () => {
    isProcessing = false;
  };
}

export default function WallStreetLogo({
  className = '',
  alt = 'Wallstreet Arena Official Logo',
  style = {},
  ...props
}) {
  const [logoSrc, setLogoSrc] = useState(cachedTransparentLogoUrl || '/wallstreet_arena_logo.png');
  const isTransparent = Boolean(cachedTransparentLogoUrl || logoSrc !== '/wallstreet_arena_logo.png');

  useEffect(() => {
    if (cachedTransparentLogoUrl) {
      setLogoSrc(cachedTransparentLogoUrl);
      return;
    }

    const handler = (url) => setLogoSrc(url);
    subscribers.add(handler);
    triggerProcessing();

    return () => {
      subscribers.delete(handler);
    };
  }, []);

  // While waiting for offscreen canvas (first ~10-20ms), apply a radial mask so no black square can show
  const maskStyle = !isTransparent
    ? {
        maskImage: 'radial-gradient(circle at center, black 65%, transparent 72%)',
        WebkitMaskImage: 'radial-gradient(circle at center, black 65%, transparent 72%)',
      }
    : {};

  return (
    <img
      src={logoSrc}
      alt={alt}
      className={`select-none transition-opacity duration-300 ${className}`}
      style={{
        ...maskStyle,
        ...style,
      }}
      loading="eager"
      decoding="async"
      {...props}
    />
  );
}
