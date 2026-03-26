import { ArrowDown } from 'lucide-react';
import { useInView } from '../../hooks/useInView';
import Octopus3D from '../../components/Octopus3D';
import { useI18n } from '../../i18n/context';

export default function StreamersHero() {
  const { ref, isInView } = useInView(0.1);
  const { t } = useI18n();
  const h = t.streamersPage.hero;

  return (
    <section
      ref={ref}
      className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden"
    >
      <div className="absolute inset-0 bg-site" />
      <div className="hidden md:block absolute top-1/3 left-1/4 w-[500px] h-[500px] bg-brand-purple/5 rounded-full blur-[150px] animate-pulse-glow" />
      <div className="hidden md:block absolute bottom-1/3 right-1/4 w-[400px] h-[400px] bg-brand-pink/5 rounded-full blur-[120px] animate-pulse-glow" style={{ animationDelay: '1.5s' }} />

      <div className="absolute top-24 left-2 w-[140px] h-[140px] opacity-15 pointer-events-none md:hidden">
        <img
          src="/octoput.png"
          alt="Octo Media Group - iGaming streamer network"
          className="w-full h-full object-contain"
          loading="lazy"
          style={{ filter: 'drop-shadow(0 0 12px rgba(147, 51, 234, 0.3))' }}
        />
      </div>
      <div className="hidden md:block absolute top-16 left-0 w-[450px] h-[450px] lg:w-[550px] lg:h-[550px] opacity-30 lg:opacity-50 pointer-events-none">
        <Octopus3D className="w-full h-full" />
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <div
          className={`transition-all duration-1000 ${
            isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <p className="font-poppins text-xs text-brand-purple uppercase tracking-[0.25em] mb-6">
            {h.badge}
          </p>

          <h1 className="font-poppins font-bold text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-[1.1] mb-6">
            {h.title1}
            <br />
            {h.title2} <span className="gradient-text animate-gradient-shift">{h.titleHighlight}</span>
          </h1>

          <p className="font-poppins text-lg sm:text-xl text-white/70 mb-2">
            {h.subtitle}
          </p>
          <p className="font-poppins text-sm text-white/40 mb-10">
            {h.subtitleSmall}
          </p>

          <a
            href="#apply"
            className="btn-primary px-10 py-4 rounded-lg font-poppins text-sm font-semibold text-white uppercase tracking-wider inline-flex items-center gap-2"
          >
            {h.cta}
          </a>

          <div className="mt-16 animate-bounce">
            <ArrowDown size={20} className="mx-auto text-white/20" />
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#0a0a12] to-transparent" />
    </section>
  );
}
