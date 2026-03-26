import { useState, useEffect, useCallback, useRef } from 'react';
import { useInView } from '../hooks/useInView';
import { Quote, Star } from 'lucide-react';
import { useI18n } from '../i18n/context';

const brands = [
  { name: 'BC.GAME - iGaming brand partner', logo: '/brandlogo/bc-game-logo.png' },
  { name: 'BET365 - online sports betting partner', logo: '/brandlogo/bet365.png' },
  { name: 'LEON - iGaming casino partner', logo: '/brandlogo/leon-logo.png' },
  { name: 'MELBET - online betting platform partner', logo: '/brandlogo/melbet.png' },
  { name: 'STAKE - crypto casino partner', logo: '/brandlogo/stake.png' },
  { name: 'TRUSTDICE - crypto gambling platform partner', logo: '/brandlogo/trustdice.png' },
];

const TESTIMONIAL_LOGOS = [
  '/brandlogo/bc-game-logo.png',
  '/brandlogo/bet365.png',
  '/brandlogo/leon-logo.png',
  '/brandlogo/melbet.png',
  '/brandlogo/stake.png',
  '/brandlogo/trustdice.png',
];

export default function SocialProof() {
  const { ref, isInView } = useInView(0.05);
  const { t } = useI18n();
  const [activeIndex, setActiveIndex] = useState(0);
  const [direction, setDirection] = useState<'left' | 'right'>('right');
  const [isAnimating, setIsAnimating] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const testimonials = t.socialProof.testimonials;

  const navigate = useCallback((dir: 'left' | 'right') => {
    if (isAnimating) return;
    setIsAnimating(true);
    setDirection(dir);
    setTimeout(() => {
      setActiveIndex((prev) => {
        if (dir === 'right') return (prev + 1) % testimonials.length;
        return (prev - 1 + testimonials.length) % testimonials.length;
      });
      setTimeout(() => setIsAnimating(false), 50);
    }, 300);
  }, [isAnimating, testimonials.length]);

  useEffect(() => {
    if (isPaused || !isInView) {
      if (intervalRef.current) clearInterval(intervalRef.current);
      return;
    }
    intervalRef.current = setInterval(() => navigate('right'), 5000);
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [isPaused, isInView, navigate]);

  const active = testimonials[activeIndex];
  const activeLogo = TESTIMONIAL_LOGOS[activeIndex];

  return (
    <section ref={ref} className="relative py-24 sm:py-32 overflow-hidden">
      <div className="absolute inset-0 bg-[#0a0a12]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_0%,rgba(137,127,217,0.06),transparent_60%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_100%,rgba(205,128,217,0.04),transparent_60%)]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className={`transition-all duration-1000 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
          <div className="text-center mb-6">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/[0.04] border border-white/[0.06] mb-6">
              <div className="flex gap-0.5">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-3 h-3 fill-brand-pink text-brand-pink" />
                ))}
              </div>
              <span className="font-poppins text-xs text-white/50 tracking-wider uppercase">{t.socialProof.badge}</span>
            </div>
            <h2 className="font-poppins font-bold text-3xl sm:text-4xl lg:text-5xl mb-3 tracking-tight">
              {t.socialProof.title}{' '}
              <span className="gradient-text">{t.socialProof.titleHighlight}</span> {t.socialProof.titleEnd}
            </h2>
            <p className="font-poppins text-base text-white/40 max-w-xl mx-auto">{t.socialProof.subtitle}</p>
          </div>
        </div>

        <div className={`relative mb-14 sm:mb-20 transition-all duration-1000 delay-200 ${isInView ? 'opacity-100' : 'opacity-0'}`}>
          <div className="absolute left-0 top-0 bottom-0 w-12 sm:w-40 bg-gradient-to-r from-[#0a0a12] to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-12 sm:w-40 bg-gradient-to-l from-[#0a0a12] to-transparent z-10 pointer-events-none" />

          <div className="logo-marquee-track">
            <div className="logo-marquee-inner">
              {[...brands, ...brands, ...brands, ...brands].map((brand, i) => (
                <div key={i} className="flex-shrink-0 mx-3 sm:mx-6 md:mx-10 group">
                  <div className="relative px-4 py-3 sm:px-6 sm:py-4 rounded-xl sm:rounded-2xl bg-gradient-to-br from-white/[0.06] to-white/[0.02] border border-white/[0.08] hover:border-brand-pink/30 hover:bg-white/[0.08] transition-all duration-500 group-hover:shadow-[0_0_40px_rgba(205,128,217,0.25)]">
                    <img src={brand.logo} alt={brand.name} className="h-8 sm:h-10 md:h-12 w-auto object-contain opacity-85 group-hover:opacity-100 transition-all duration-500" loading="lazy" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className={`max-w-5xl mx-auto transition-all duration-1000 delay-400 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`} onMouseEnter={() => setIsPaused(true)} onMouseLeave={() => setIsPaused(false)}>
          <div className="relative">
            <div className="absolute -inset-px rounded-3xl bg-gradient-to-br from-brand-purple/20 via-transparent to-brand-pink/20 opacity-60 blur-sm" />
            <div className="absolute -inset-px rounded-3xl testimonial-border-glow" />

            <div className="relative rounded-3xl bg-gradient-to-br from-white/[0.08] via-white/[0.03] to-white/[0.01] backdrop-blur-xl border border-brand-pink/20 overflow-hidden">
              <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-brand-pink/50 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-brand-purple/40 to-transparent" />
              <div className="absolute top-0 left-0 w-1 h-32 bg-gradient-to-b from-brand-pink/30 to-transparent rounded-full blur-xl" />
              <div className="absolute bottom-0 right-0 w-1 h-32 bg-gradient-to-t from-brand-purple/30 to-transparent rounded-full blur-xl" />

              <div className="absolute top-8 right-8 sm:top-10 sm:right-10">
                <Quote className="w-16 h-16 sm:w-24 sm:h-24 text-brand-pink/[0.08]" />
              </div>

              <div className="p-8 sm:p-10 lg:p-12">
                <div className={`testimonial-slide ${isAnimating ? (direction === 'right' ? 'slide-out-left' : 'slide-out-right') : 'slide-in'}`}>
                  <div className="flex-1 min-w-0">
                    <div className="flex gap-1 mb-5">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-brand-pink text-brand-pink" />
                      ))}
                    </div>

                    <p className="font-poppins text-base sm:text-lg text-white leading-relaxed font-light mb-4">
                      "{active.quote}"
                    </p>

                    <p className="font-poppins text-base sm:text-lg text-white leading-relaxed mb-6">
                      {active.detail}
                    </p>

                    <div className="flex items-center gap-4">
                      <div className="w-16 h-16 rounded-xl overflow-hidden bg-gradient-to-br from-white/[0.12] to-white/[0.05] border border-brand-pink/30 flex items-center justify-center p-2">
                        <img src={activeLogo} alt={active.company} className="w-full h-full object-contain" />
                      </div>
                      <div>
                        <p className="font-poppins font-semibold text-sm text-white/90">{active.role}</p>
                        <p className="font-poppins text-sm font-medium text-white/60">{active.company}</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex items-center justify-center mt-6 pt-6 border-t border-white/[0.04]">
                  <div className="flex items-center gap-2">
                    {testimonials.map((_, i) => (
                      <button
                        key={i}
                        onClick={() => {
                          if (i === activeIndex || isAnimating) return;
                          setDirection(i > activeIndex ? 'right' : 'left');
                          setIsAnimating(true);
                          setTimeout(() => {
                            setActiveIndex(i);
                            setTimeout(() => setIsAnimating(false), 50);
                          }, 300);
                        }}
                        className="group/dot p-1 cursor-pointer"
                      >
                        <div className={`h-1.5 rounded-full transition-all duration-500 ${i === activeIndex ? 'w-8 bg-gradient-to-r from-brand-purple to-brand-pink' : 'w-1.5 bg-white/15 group-hover/dot:bg-white/30'}`} />
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className={`mt-16 transition-all duration-1000 delay-500 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
            {t.socialProof.stats.map((stat, i) => (
              <div key={i} className="group text-center p-5 rounded-2xl bg-white/[0.02] border border-white/[0.04] hover:border-white/[0.1] hover:bg-white/[0.03] transition-all duration-500" style={{ transitionDelay: `${i * 100}ms` }}>
                <div className="font-poppins text-2xl sm:text-3xl font-bold gradient-text mb-1 group-hover:scale-105 transition-transform duration-300">{stat.value}</div>
                <div className="font-poppins text-xs text-white/35 uppercase tracking-wider">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
