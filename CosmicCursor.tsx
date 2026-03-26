import { useEffect, useRef, useState } from 'react';

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  life: number;
  maxLife: number;
  size: number;
  hue: number;
  brightness: number;
}

function isMobile() {
  if (typeof window === 'undefined') return true;
  return window.innerWidth < 768 || 'ontouchstart' in window;
}

export default function CosmicCursor() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [mobile] = useState(() => isMobile());
  const [ready, setReady] = useState(false);
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    const onInteract = () => setReady(true);
    window.addEventListener('mousemove', onInteract, { once: true, passive: true });
    return () => window.removeEventListener('mousemove', onInteract);
  }, []);

  useEffect(() => {
    if (mobile || !ready || hasError) return;

    try {
      const canvas = canvasRef.current;
      if (!canvas) return;

      const ctx = canvas.getContext('2d');
      if (!ctx) return;

      let animId: number;
      let mouseX = -100;
      let mouseY = -100;
      let prevMouseX = -100;
      let prevMouseY = -100;
      const particles: Particle[] = [];
      const maxParticles = 120;

      const resize = () => {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
      };
      resize();
      window.addEventListener('resize', resize);

      const onMouseMove = (e: MouseEvent) => {
        prevMouseX = mouseX;
        prevMouseY = mouseY;
        mouseX = e.clientX;
        mouseY = e.clientY;

        const dx = mouseX - prevMouseX;
        const dy = mouseY - prevMouseY;
        const speed = Math.sqrt(dx * dx + dy * dy);
        const count = Math.min(Math.floor(speed * 0.3), 5);

        for (let i = 0; i < count; i++) {
          if (particles.length >= maxParticles) break;
          const angle = Math.random() * Math.PI * 2;
          const velocity = 0.3 + Math.random() * 1.2;
          const life = 40 + Math.random() * 60;
          particles.push({
            x: mouseX + (Math.random() - 0.5) * 8,
            y: mouseY + (Math.random() - 0.5) * 8,
            vx: Math.cos(angle) * velocity + dx * 0.05,
            vy: Math.sin(angle) * velocity + dy * 0.05,
            life,
            maxLife: life,
            size: 1 + Math.random() * 2.5,
            hue: 270 + Math.random() * 30,
            brightness: 50 + Math.random() * 30,
          });
        }
      };

      window.addEventListener('mousemove', onMouseMove);

      const animate = () => {
        try {
          ctx.clearRect(0, 0, canvas.width, canvas.height);

          for (let i = particles.length - 1; i >= 0; i--) {
            const p = particles[i];
            p.x += p.vx;
            p.y += p.vy;
            p.vx *= 0.98;
            p.vy *= 0.98;
            p.life--;

            if (p.life <= 0) {
              particles.splice(i, 1);
              continue;
            }

            const alpha = (p.life / p.maxLife) * 0.7;
            const glow = p.size * 3;

            ctx.save();
            ctx.globalAlpha = alpha * 0.3;
            ctx.beginPath();
            ctx.arc(p.x, p.y, glow, 0, Math.PI * 2);
            ctx.fillStyle = `hsla(${p.hue}, 80%, ${p.brightness}%, 1)`;
            ctx.fill();

            ctx.globalAlpha = alpha;
            ctx.beginPath();
            ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
            ctx.fillStyle = `hsla(${p.hue}, 90%, ${p.brightness + 20}%, 1)`;
            ctx.fill();

            ctx.globalAlpha = alpha * 0.8;
            ctx.beginPath();
            ctx.arc(p.x, p.y, p.size * 0.4, 0, Math.PI * 2);
            ctx.fillStyle = '#fff';
            ctx.fill();
            ctx.restore();
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
        window.removeEventListener('mousemove', onMouseMove);
      };
    } catch {
      setHasError(true);
    }
  }, [mobile, ready, hasError]);

  if (mobile || !ready || hasError) return null;

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 z-[9999] pointer-events-none"
      style={{ mixBlendMode: 'screen' }}
    />
  );
}
