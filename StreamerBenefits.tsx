import {
  Headphones,
  Handshake,
  DollarSign,
  Shield,
  Repeat,
  CalendarOff,
  TrendingUp,
  Plane,
  Sparkles
} from 'lucide-react';
import { useInView } from '../../hooks/useInView';
import MiniOctopus from '../../components/MiniOctopus';
import { useI18n } from '../../i18n/context';

const BENEFIT_ICONS = [Headphones, Handshake, DollarSign, Shield, Repeat, CalendarOff, TrendingUp, Plane, Sparkles];
const HIGHLIGHT_INDICES = [0, 3, 6];

export default function StreamerBenefits() {
  const { ref, isInView } = useInView(0.1);
  const { t } = useI18n();
  const b = t.streamersPage.benefits;

  return (
    <section ref={ref} className="py-24 relative overflow-hidden">
      <MiniOctopus className="absolute top-10 -left-4 w-32 h-32 opacity-8" />
      <div className="section-divider" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16">
        <div
          className={`text-center mb-16 transition-all duration-700 ${
            isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-brand-purple/10 to-brand-pink/10 border border-brand-purple/20 mb-6">
            <Sparkles className="w-4 h-4 text-brand-pink" />
            <span className="font-poppins text-sm text-white/70 uppercase tracking-wider">
              {b.badge}
            </span>
          </div>
          <h2 className="font-poppins font-bold text-3xl sm:text-4xl lg:text-6xl mb-5">
            {b.title} <span className="gradient-text">{b.titleHighlight}</span>
          </h2>
          <p className="font-poppins text-base sm:text-lg text-white/60 max-w-3xl mx-auto">
            {b.subtitle}
          </p>
        </div>

        <div className="hidden md:grid grid-cols-2 lg:grid-cols-3 gap-6">
          {b.items.map((benefit, i) => {
            const Icon = BENEFIT_ICONS[i];
            const highlight = HIGHLIGHT_INDICES.includes(i);
            return (
              <div
                key={i}
                className={`relative group transition-all duration-700 ${
                  isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
                } ${highlight ? 'md:col-span-2 lg:col-span-1' : ''}`}
                style={{ transitionDelay: `${i * 60}ms` }}
              >
                {highlight && (
                  <div className="absolute inset-0 bg-gradient-to-br from-brand-purple/20 to-brand-pink/20 rounded-2xl blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                )}
                <div
                  className={`relative h-full rounded-2xl p-8 transition-all duration-300 ${
                    highlight
                      ? 'bg-gradient-to-br from-white/[0.06] to-white/[0.03] border-2 border-brand-purple/30 hover:border-brand-pink/50'
                      : 'bg-gradient-to-br from-white/[0.03] to-white/[0.01] border border-white/10 hover:border-brand-purple/30'
                  }`}
                >
                  <div
                    className={`w-14 h-14 rounded-xl flex items-center justify-center mb-5 transition-all duration-300 ${
                      highlight
                        ? 'bg-gradient-to-br from-brand-purple/30 to-brand-pink/30 group-hover:shadow-lg group-hover:shadow-brand-pink/30'
                        : 'bg-gradient-to-br from-brand-purple/10 to-brand-pink/10'
                    }`}
                  >
                    <Icon size={24} className="text-brand-pink" />
                  </div>
                  <h3 className="font-poppins font-bold text-xl text-white mb-3">
                    {benefit.title}
                  </h3>
                  <p className="font-poppins text-sm text-white/60 leading-relaxed">
                    {benefit.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        <div className="md:hidden space-y-3">
          {b.items.map((benefit, i) => {
            const Icon = BENEFIT_ICONS[i];
            const highlight = HIGHLIGHT_INDICES.includes(i);
            return (
              <div
                key={i}
                className={`transition-all duration-700 ${
                  isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
                }`}
                style={{ transitionDelay: `${i * 50}ms` }}
              >
                {highlight ? (
                  <div className="rounded-xl p-5 bg-gradient-to-r from-brand-purple/[0.12] via-brand-pink/[0.06] to-transparent border border-brand-purple/25">
                    <div className="flex items-start gap-4">
                      <div className="w-11 h-11 rounded-lg bg-gradient-to-br from-brand-purple/30 to-brand-pink/30 flex items-center justify-center flex-shrink-0">
                        <Icon size={20} className="text-brand-pink" />
                      </div>
                      <div className="min-w-0">
                        <h3 className="font-poppins font-bold text-sm text-white mb-1">{benefit.title}</h3>
                        <p className="font-poppins text-xs text-white/55 leading-relaxed">{benefit.desc}</p>
                      </div>
                    </div>
                  </div>
                ) : (
                  <div className="flex items-start gap-4 p-4 rounded-xl border border-white/[0.06] bg-white/[0.02]">
                    <div className="w-9 h-9 rounded-lg bg-brand-purple/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Icon size={16} className="text-brand-pink" />
                    </div>
                    <div className="min-w-0">
                      <h3 className="font-poppins font-semibold text-sm text-white mb-1">{benefit.title}</h3>
                      <p className="font-poppins text-xs text-white/45 leading-relaxed">{benefit.desc}</p>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        <div
          className={`mt-12 sm:mt-16 text-center transition-all duration-700 delay-500 ${
            isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <div className="inline-block rounded-2xl bg-gradient-to-br from-brand-purple/10 to-brand-pink/10 border border-brand-pink/20 p-6 sm:p-8">
            <p className="font-poppins text-base text-white/80 mb-2">
              {b.commissionNote}
            </p>
            <p className="font-poppins text-sm text-white/50">
              {b.commissionSub}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
