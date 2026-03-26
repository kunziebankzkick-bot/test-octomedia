import { useEffect, useRef, useState } from 'react';

function isMobile() {
  if (typeof window === 'undefined') return true;
  return window.innerWidth < 768;
}

export default function StarField() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [mobile] = useState(() => isMobile());
  const [ready, setReady] = useState(false);
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    const hasIdle = typeof requestIdleCallback !== 'undefined';
    if (hasIdle) {
      const id = requestIdleCallback(() => setReady(true), { timeout: 2000 });
      return () => cancelIdleCallback(id);
    } else {
      const id = window.setTimeout(() => setReady(true), 500);
      return () => clearTimeout(id);
    }
  }, []);

  useEffect(() => {
    if (mobile || !ready || hasError) return;

    try {
      const canvas = canvasRef.current;
      if (!canvas) return;
      const ctx = canvas.getContext('2d');
      if (!ctx) return;

      let animId: number;

      const stars: { x: number; y: number; size: number; speed: number; twinkleSpeed: number; phase: number }[] = [];
      const starCount = 200;

      const resize = () => {
        canvas.width = window.innerWidth;
        canvas.height = document.documentElement.scrollHeight;
        if (stars.length === 0) {
          for (let i = 0; i < starCount; i++) {
            stars.push({
              x: Math.random() * canvas.width,
              y: Math.random() * canvas.height,
              size: Math.random() * 1.8 + 0.2,
              speed: 0.02 + Math.random() * 0.08,
              twinkleSpeed: 0.5 + Math.random() * 2,
              phase: Math.random() * Math.PI * 2,
            });
          }
        }
      };
      resize();
      window.addEventListener('resize', resize);

      const animate = () => {
        try {
          ctx.clearRect(0, 0, canvas.width, canvas.height);
          const time = performance.now() * 0.001;

          for (const star of stars) {
            const twinkle = 0.3 + 0.7 * ((Math.sin(time * star.twinkleSpeed + star.phase) + 1) / 2);
            ctx.globalAlpha = twinkle * 0.5;
            ctx.beginPath();
            ctx.arc(star.x, star.y, star.size, 0, Math.PI * 2);
            ctx.fillStyle = '#c8a0e8';
            ctx.fill();

            if (star.size > 1.2) {
              ctx.globalAlpha = twinkle * 0.15;
              ctx.beginPath();
              ctx.arc(star.x, star.y, star.size * 3, 0, Math.PI * 2);
              ctx.fillStyle = '#a070d0';
              ctx.fill();
            }
          }

          animId = requestAnimationFrame(animate);
        } catch {
          setHasError(true);
        }
      };
      animate();

      return () => {
        cancelAnimationFrame(animId);
        window.removeEventListener('resize', resize);
      };
    } catch {
      setHasError(true);
    }
  }, [mobile, ready, hasError]);

  if (mobile || !ready || hasError) return null;

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 z-0 pointer-events-none"
      style={{ opacity: 0.6 }}
    />
  );
}
