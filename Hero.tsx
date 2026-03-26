import { useEffect, useState } from 'react';
import { ArrowRight, TrendingUp, Repeat, DollarSign } from 'lucide-react';
import Octopus3D from './Octopus3D';
import { useI18n } from '../i18n/context';

const IMPACT_ICONS = [DollarSign, Repeat, TrendingUp];

export default function Hero() {
  const [subLoaded, setSubLoaded] = useState(false);
  const { t } = useI18n();

  const impactPoints = [
    { icon: IMPACT_ICONS[0], value: t.hero.stat1Value, label: t.hero.stat1Label },
    { icon: IMPACT_ICONS[1], value: t.hero.stat2Value, label: t.hero.stat2Label },
    { icon: IMPACT_ICONS[2], value: t.hero.stat3Value, label: t.hero.stat3Label },
  ];

  useEffect(() => {
    const id = setTimeout(() => setSubLoaded(true), 50);
    return () => clearTimeout(id);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      <div className="absolute inset-0 bg-site" />

      <div className="absolute inset-0 hero-grid-bg opacity-[0.03]" />

      <div className="hidden md:block absolute top-1/3 left-1/5 w-[500px] h-[500px] bg-brand-purple/8 rounded-full blur-[160px] hero-orb-drift" />
      <div className="hidden md:block absolute bottom-1/4 right-1/3 w-[400px] h-[400px] bg-brand-pink/6 rounded-full blur-[140px] hero-orb-drift-reverse" />
      <div className="hidden md:block absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-brand-purple/[0.03] rounded-full blur-[200px]" />

      <div className="absolute top-24 right-2 w-[160px] h-[160px] opacity-20 pointer-events-none md:hidden">
        <img
          src="/octoput.png"
          alt="Octo Media Group - iGaming streamer marketing agency mascot"
          width="160"
          height="160"
          className="w-full h-full object-contain"
          loading="eager"
          fetchPriority="low"
          style={{ filter: 'drop-shadow(0 0 15px rgba(147, 51, 234, 0.3))' }}
        />
      </div>
      <div className="hidden md:block absolute top-20 right-0 w-[500px] h-[500px] lg:w-[600px] lg:h-[600px] opacity-40 lg:opacity-60 pointer-events-none">
        <Octopus3D className="w-full h-full" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="max-w-4xl">

          <h1 className="font-poppins font-bold text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-[1.08] mb-7">
            <span className="text-white">{t.hero.headline1}</span>
            <br />
            <span className="text-white">{t.hero.headline2} </span>
            <span className="hero-headline-gradient">{t.hero.headline3}</span>
          </h1>

          <p
            className={`font-poppins text-lg sm:text-xl text-white/50 max-w-2xl mb-10 leading-relaxed transition-opacity duration-700 ${
              subLoaded ? 'opacity-100' : 'opacity-0'
            }`}
          >
            {t.hero.subheadline}
          </p>

          <div
            className={`flex flex-wrap items-center gap-4 sm:gap-6 mb-12 transition-opacity duration-700 delay-100 ${
              subLoaded ? 'opacity-100' : 'opacity-0'
            }`}
          >
            {impactPoints.map((point, i) => {
              const colors = [
                { bullet: 'bg-emerald-400/80', text: 'text-emerald-300' },
                { bullet: 'bg-cyan-400/80', text: 'text-cyan-300' },
                { bullet: 'bg-violet-400/80', text: 'text-violet-300' },
              ];
              const color = colors[i];
              return (
                <div
                  key={point.label}
                  className="group flex items-center gap-3 transition-all duration-500 hover:scale-105"
                  style={{ transitionDelay: `${i * 80}ms` }}
                >
                  <div className={`w-3 h-3 rounded-full ${color.bullet} flex-shrink-0 group-hover:scale-125 transition-transform duration-300`} />
                  <div>
                    <p className={`font-poppins text-base sm:text-lg font-semibold ${color.text} leading-tight`}>
                      {point.value}
                    </p>
                    <p className="font-poppins text-sm text-white/50 leading-tight">
                      {point.label}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          <div
            className={`flex flex-col sm:flex-row items-stretch sm:items-center gap-4 transition-opacity duration-700 delay-200 ${
              subLoaded ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <a
              href="https://calendly.com/contact-octomediagroup/30min"
              target="_blank"
              rel="noopener noreferrer"
              className="hero-cta-btn group relative inline-flex items-center justify-center gap-3 px-8 py-4 sm:px-10 sm:py-[18px] rounded-xl font-poppins text-sm sm:text-[15px] font-bold tracking-wide overflow-hidden cursor-pointer"
            >
              <span className="hero-cta-bg" />
              <span className="hero-cta-glow" />
              <span className="hero-cta-shine" />
              <span className="relative z-10 text-white">
                {t.hero.ctaPrimary}
              </span>
              <ArrowRight className="relative z-10 w-4 h-4 text-white transition-transform duration-300 group-hover:translate-x-1" />
            </a>

            <a
              href="#services"
              className="btn-secondary px-8 py-4 rounded-xl font-poppins text-sm font-medium text-white/70 hover:text-white/90 text-center"
            >
              {t.hero.ctaSecondary}
            </a>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-[#0a0a12] to-transparent" />
    </section>
  );
}
