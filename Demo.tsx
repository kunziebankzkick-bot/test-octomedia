import { DollarSign, Target, TrendingUp, Check, ArrowRight, Shield } from 'lucide-react';
import { useInView } from '../hooks/useInView';
import { useI18n } from '../i18n/context';

const STEP_ICONS = [DollarSign, Target, TrendingUp];

export default function Demo() {
  const { ref, isInView } = useInView(0.1);
  const { t } = useI18n();

  return (
    <section id="demo" ref={ref} className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a12] via-[#0d0d16] to-[#0a0a12]" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className={`text-center mb-14 transition-all duration-700 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-brand-purple/10 to-brand-pink/10 border border-white/10 mb-4">
            <Shield className="w-4 h-4 text-brand-pink" />
            <span className="font-poppins text-sm text-white/70 uppercase tracking-wider">{t.demo.badge}</span>
          </div>
          <h2 className="font-poppins font-bold text-3xl sm:text-4xl lg:text-5xl mb-4">
            {t.demo.title1} <span className="gradient-text">{t.demo.title2}</span>
          </h2>
          <p className="font-poppins text-lg text-white/60 max-w-2xl mx-auto">{t.demo.subtitle}</p>
        </div>

        <div className={`grid grid-cols-1 md:grid-cols-3 gap-5 mb-12 transition-all duration-700 delay-100 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          {t.demo.steps.map((step, i) => {
            const Icon = STEP_ICONS[i];
            return (
              <div key={i} className="relative p-6 rounded-2xl bg-gradient-to-br from-white/[0.04] to-white/[0.01] border border-white/10 text-center hover:border-brand-pink/20 transition-all duration-300" style={{ transitionDelay: `${i * 100}ms` }}>
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-brand-purple/20 to-brand-pink/20 flex items-center justify-center mx-auto mb-4">
                  <Icon className="w-6 h-6 text-brand-pink" />
                </div>
                <h3 className="font-poppins font-bold text-base text-white mb-2">{step.title}</h3>
                <p className="font-poppins text-sm text-white/50">{step.description}</p>
                {i < t.demo.steps.length - 1 && (
                  <div className="hidden md:flex absolute top-1/2 -right-3 w-6 items-center justify-center">
                    <ArrowRight size={14} className="text-white/20" />
                  </div>
                )}
              </div>
            );
          })}
        </div>

        <div className={`rounded-2xl overflow-hidden border-2 border-brand-pink/30 bg-gradient-to-br from-brand-purple/5 to-brand-pink/5 transition-all duration-700 delay-300 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-8 sm:p-10 items-center">
            <div>
              <h3 className="font-poppins font-bold text-xl text-white mb-5">{t.demo.whatsIncluded}</h3>
              <ul className="space-y-3 mb-6">
                {t.demo.includes.map((item) => (
                  <li key={item} className="flex items-start gap-2.5">
                    <Check size={16} className="text-brand-pink mt-0.5 flex-shrink-0" />
                    <span className="font-poppins text-sm text-white/70">{item}</span>
                  </li>
                ))}
              </ul>
              <p className="font-poppins text-xs text-white/30">{t.demo.noContract}</p>
            </div>
            <div className="text-center">
              <div className="font-poppins text-5xl font-bold gradient-text mb-2">$10,000</div>
              <p className="font-poppins text-sm text-white/50 mb-6">{t.demo.pilotLabel}</p>
              <a
                href="https://calendly.com/contact-octomediagroup/30min"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2 btn-primary px-8 py-4 rounded-xl font-poppins text-sm font-bold text-white uppercase tracking-wider"
              >
                <span className="relative z-10">{t.demo.cta}</span>
                <ArrowRight size={16} className="relative z-10 transition-transform duration-300 group-hover:translate-x-1" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
