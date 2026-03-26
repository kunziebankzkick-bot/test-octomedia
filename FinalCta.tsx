import { useInView } from '../hooks/useInView';
import { ArrowRight, Check } from 'lucide-react';
import { useI18n } from '../i18n/context';

export default function FinalCta() {
  const { ref, isInView } = useInView(0.1);
  const { t } = useI18n();

  return (
    <section ref={ref} className="py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a12] via-[#0d0d16] to-[#0a0a12]" />

      <div className="hidden md:block absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-brand-purple/5 rounded-full blur-[200px] animate-pulse-glow" />
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <div className={`transition-all duration-1000 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-brand-purple/10 to-brand-pink/10 border border-white/10 mb-6">
            <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
            <span className="font-poppins text-sm text-white/70">{t.finalCta.badge}</span>
          </div>

          <h2 className="font-poppins font-bold text-4xl sm:text-5xl md:text-6xl mb-6">
            {t.finalCta.title1}
            <br />
            <span className="gradient-text animate-gradient-shift">{t.finalCta.title2}</span>
          </h2>

          <p className="font-poppins text-xl text-white/60 mb-4 max-w-3xl mx-auto">{t.finalCta.subtitle}</p>
          <p className="font-poppins text-base text-white/40 mb-10 max-w-2xl mx-auto">{t.finalCta.body}</p>

          <a
            href="https://calendly.com/contact-octomediagroup/30min"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-3 btn-primary px-10 py-5 rounded-full font-poppins text-base font-bold text-white uppercase tracking-wider mb-10"
          >
            <span className="relative z-10">{t.finalCta.cta}</span>
            <ArrowRight size={18} className="relative z-10 transition-transform duration-300 group-hover:translate-x-1" />
          </a>

          <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3">
            {t.finalCta.guarantees.map((item) => (
              <div key={item} className="flex items-center gap-2">
                <Check size={16} className="text-green-400 flex-shrink-0" />
                <span className="font-poppins text-sm text-white/60">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
