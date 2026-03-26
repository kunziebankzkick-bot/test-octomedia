import { Check, Star, ArrowRight } from 'lucide-react';
import { useInView } from '../hooks/useInView';
import { useI18n } from '../i18n/context';

const TIER_CTA_HREFS = [
  'https://calendly.com/contact-octomediagroup/30min',
  '#contact',
  '#contact',
  '#contact',
];
const TIER_HIGHLIGHTS = [false, false, true, false];

export default function Pricing() {
  const { ref, isInView } = useInView(0.05);
  const { t } = useI18n();

  return (
    <section id="services" ref={ref} className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-[#0d0d16] to-[#0a0a12]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className={`text-center mb-14 transition-all duration-700 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <h2 className="font-poppins font-bold text-3xl sm:text-4xl lg:text-5xl mb-4">
            {t.pricing.title} <span className="gradient-text">{t.pricing.titleHighlight}</span>
          </h2>
          <p className="font-poppins text-lg text-white/60 max-w-2xl mx-auto">{t.pricing.subtitle}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-5 mb-14">
          {t.pricing.tiers.map((tier, i) => {
            const highlight = TIER_HIGHLIGHTS[i];
            const ctaHref = TIER_CTA_HREFS[i];
            return (
              <div
                key={i}
                className={`relative rounded-2xl transition-all duration-700 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'} ${highlight ? 'bg-gradient-to-br from-brand-purple/10 to-brand-pink/10 border-2 border-brand-pink/40 shadow-lg shadow-brand-pink/5' : 'bg-gradient-to-br from-white/[0.03] to-white/[0.01] border border-white/10 hover:border-brand-purple/30'}`}
                style={{ transitionDelay: `${i * 100}ms` }}
              >
                {i === 2 && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 flex items-center gap-1.5 px-4 py-1 rounded-full bg-gradient-to-r from-brand-pink to-brand-purple">
                    <Star size={12} className="text-white" />
                    <span className="font-poppins text-[10px] font-bold text-white uppercase tracking-wider">{t.pricing.mostPopular}</span>
                  </div>
                )}

                <div className="p-6">
                  <h3 className="font-poppins font-bold text-lg text-white mb-1">{tier.name}</h3>
                  <p className="font-poppins text-xs text-white/40 mb-5">{tier.tagline}</p>

                  <div className="mb-6">
                    <span className="font-poppins font-bold text-3xl text-white">{tier.price}</span>
                    <span className="font-poppins text-sm text-white/40 ml-1">{tier.period}</span>
                  </div>

                  <ul className="space-y-3 mb-6">
                    {tier.features.map((f, fi) => (
                      <li key={fi} className="flex items-start gap-2.5">
                        <Check size={14} className="text-brand-pink mt-0.5 flex-shrink-0" />
                        <span className="font-poppins text-sm text-white/70">{f}</span>
                      </li>
                    ))}
                  </ul>

                  <a
                    href={ctaHref}
                    target={ctaHref.startsWith('http') ? '_blank' : undefined}
                    rel={ctaHref.startsWith('http') ? 'noopener noreferrer' : undefined}
                    className={`group flex items-center justify-center gap-2 w-full py-3 rounded-xl font-poppins text-sm font-semibold transition-all duration-300 ${highlight ? 'btn-primary text-white' : 'border border-white/10 text-white/70 hover:border-brand-purple/40 hover:text-white hover:bg-white/[0.03]'}`}
                  >
                    {tier.cta}
                    <ArrowRight size={14} className="transition-transform duration-300 group-hover:translate-x-1" />
                  </a>
                </div>
              </div>
            );
          })}
        </div>

        <div className={`text-center transition-all duration-700 delay-500 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <p className="font-poppins text-sm text-white/40">{t.pricing.footerNote}</p>
        </div>
      </div>
    </section>
  );
}
