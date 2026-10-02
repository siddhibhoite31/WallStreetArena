import React, { useEffect, useState, useRef } from 'react';

/**
 * MoneyCursor
 * A luxury custom animated money cursor shaped as a folded origami US dollar bill.
 * Features:
 * - Fluid mouse tracking with velocity-based tilt & rotation
 * - Fading ghost trail for a premium motion effect
 * - Click bounce / press animation
 * - Interactive element hover reaction (subtle scale & gold glow)
 * - Automatically disabled on mobile/touch screens
 * - Safe pointer-events: none, never blocks clicks
 */
export default function MoneyCursor() {
  const [enabled, setEnabled] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [isClicked, setIsClicked] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  const mousePos = useRef({ x: -100, y: -100 });
  const cursorRef = useRef(null);
  const trailRefs = useRef([]);

  // Store past positions for smooth trailing effect
  const history = useRef([
    { x: -100, y: -100, angle: 0 },
    { x: -100, y: -100, angle: 0 },
    { x: -100, y: -100, angle: 0 },
    { x: -100, y: -100, angle: 0 },
  ]);

  const currentPos = useRef({ x: -100, y: -100, angle: -12, scale: 1 });
  const velocity = useRef({ vx: 0, vy: 0 });

  useEffect(() => {
    // Only enable on devices that have a fine pointer (mouse/trackpad) and support hover
    const mediaQuery = window.matchMedia('(hover: hover) and (pointer: fine)');
    if (!mediaQuery.matches) {
      return;
    }
    setEnabled(true);

    const onMouseMove = (e) => {
      mousePos.current.x = e.clientX;
      mousePos.current.y = e.clientY;
      if (!isVisible) setIsVisible(true);

      // Check if hovering an interactive element
      const target = e.target;
      if (target) {
        const interactive = target.closest('a, button, input, textarea, select, [role="button"], .cursor-pointer');
        setIsHovered(!!interactive);
      }
    };

    const onMouseDown = () => setIsClicked(true);
    const onMouseUp = () => setIsClicked(false);
    const onMouseLeave = () => setIsVisible(false);
    const onMouseEnter = () => setIsVisible(true);

    window.addEventListener('mousemove', onMouseMove, { passive: true });
    window.addEventListener('mousedown', onMouseDown);
    window.addEventListener('mouseup', onMouseUp);
    document.addEventListener('mouseleave', onMouseLeave);
    document.addEventListener('mouseenter', onMouseEnter);

    let animationFrameId;

    const render = () => {
      // Smooth lerp toward mouse position
      const targetX = mousePos.current.x;
      const targetY = mousePos.current.y;

      const dx = targetX - currentPos.current.x;
      const dy = targetY - currentPos.current.y;

      // Update velocity
      velocity.current.vx = dx * 0.25;
      velocity.current.vy = dy * 0.25;

      currentPos.current.x += dx * 0.35;
      currentPos.current.y += dy * 0.35;

      // Calculate natural tilt angle based on horizontal movement
      // Base angle is -12deg (origami tip pointing top-left)
      const targetAngle = -12 + Math.max(-25, Math.min(25, velocity.current.vx * 1.2));
      currentPos.current.angle += (targetAngle - currentPos.current.angle) * 0.2;

      // Update trail history
      history.current.unshift({
        x: currentPos.current.x,
        y: currentPos.current.y,
        angle: currentPos.current.angle,
      });
      if (history.current.length > 15) {
        history.current.pop();
      }

      // Render main cursor
      if (cursorRef.current) {
        const x = currentPos.current.x;
        const y = currentPos.current.y;
        const rot = currentPos.current.angle;
        const clickScale = isClicked ? 0.82 : isHovered ? 1.2 : 1.0;

        cursorRef.current.style.transform = `translate3d(${x}px, ${y}px, 0) rotate(${rot}deg) scale(${clickScale})`;
      }

      // Render trail copies
      trailRefs.current.forEach((el, index) => {
        if (!el) return;
        const step = (index + 1) * 3;
        const histPoint = history.current[step] || history.current[history.current.length - 1];
        if (histPoint) {
          const trailScale = (0.75 - index * 0.18) * (isHovered ? 1.15 : 1);
          el.style.transform = `translate3d(${histPoint.x}px, ${histPoint.y}px, 0) rotate(${histPoint.angle}deg) scale(${trailScale})`;
        }
      });

      animationFrameId = requestAnimationFrame(render);
    };

    animationFrameId = requestAnimationFrame(render);

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('mousedown', onMouseDown);
      window.removeEventListener('mouseup', onMouseUp);
      document.removeEventListener('mouseleave', onMouseLeave);
      document.removeEventListener('mouseenter', onMouseEnter);
    };
  }, [isVisible, isClicked, isHovered]);

  if (!enabled) return null;

  return (
    <div
      className={`fixed inset-0 pointer-events-none z-[999999] transition-opacity duration-200 ${
        isVisible ? 'opacity-100' : 'opacity-0'
      }`}
      aria-hidden="true"
    >
      {/* Trailing Fading Dollar Copies */}
      {[0, 1, 2].map((i) => {
        const opacities = [0.3, 0.18, 0.08];
        return (
          <div
            key={i}
            ref={(el) => (trailRefs.current[i] = el)}
            className="fixed top-0 left-0 w-8 h-8 pointer-events-none origin-top-left transition-opacity duration-150"
            style={{
              opacity: isVisible ? opacities[i] : 0,
              filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.4))',
              willChange: 'transform',
            }}
          >
            <img
              src="/money_cursor.png"
              alt=""
              className="w-full h-full object-contain pointer-events-none select-none"
              draggable="false"
            />
          </div>
        );
      })}

      {/* Main Origami Dollar Bill Cursor */}
      <div
        ref={cursorRef}
        className="fixed top-0 left-0 w-8 h-8 sm:w-9 sm:h-9 pointer-events-none origin-top-left"
        style={{
          willChange: 'transform',
          filter: isHovered
            ? 'drop-shadow(0 0 10px rgba(255, 215, 0, 0.75)) drop-shadow(0 4px 10px rgba(0,0,0,0.8))'
            : 'drop-shadow(0 4px 8px rgba(0,0,0,0.7)) drop-shadow(0 0 4px rgba(212, 175, 55, 0.35))',
        }}
      >
        <img
          src="/money_cursor.png"
          alt="Money Cursor"
          className="w-full h-full object-contain pointer-events-none select-none"
          draggable="false"
        />

        {/* Small gold sparkle indicator on hover */}
        {isHovered && (
          <span className="absolute -top-1 -right-1 w-2 h-2 rounded-full bg-[#FFD700] animate-ping opacity-75" />
        )}
      </div>
    </div>
  );
}
