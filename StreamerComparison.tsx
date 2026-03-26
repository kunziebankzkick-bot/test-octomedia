import { useInView } from '../../hooks/useInView';
import { Check, X, DollarSign, Clock, Shield, Award, CheckCircle2, Zap, Target } from 'lucide-react';
import { useI18n } from '../../i18n/context';

const METRIC_ICONS = [DollarSign, Clock, Shield, Award];
const HIGHLIGHT_ICONS = [CheckCircle2, Zap, Award];

const METRIC_BARS = [
  { traditional: 75, us: 25 },
  { traditional: 80, us: 5 },
  { traditional: 85, us: 10 },
  { traditional: 35, us: 80 },
];

export default function StreamerComparison() {
  const { ref, isInView } = useInView(0.1);
  const { t } = useI18n();
  const c = t.streamersPage.comparison;

  return (
    <section ref={ref} className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a12] to-[#0d0d16]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div
          className={`text-center mb-12 sm:mb-16 transition-all duration-700 ${
            isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-brand-purple/10 to-brand-pink/10 border border-white/10 mb-4">
            <Target className="w-4 h-4 text-brand-pink" />
            <span className="font-poppins text-sm text-white/70 uppercase tracking-wider">
              {c.badge}
            </span>
          </div>
          <h2 className="font-poppins font-bold text-3xl sm:text-4xl lg:text-6xl mb-5">
            {c.title}{' '}
            <span className="gradient-text">{c.titleHighlight}</span>
          </h2>
          <p className="font-poppins text-base sm:text-lg text-white/60 max-w-3xl mx-auto">
            {c.subtitle}
          </p>
        </div>

        <div
          className={`grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5 mb-12 sm:mb-16 transition-all duration-700 delay-200 ${
            isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          {c.metrics.map((metric, i) => {
            const Icon = METRIC_ICONS[i];
            const bars = METRIC_BARS[i];
            return (
              <div
                key={i}
                className="p-5 sm:p-6 rounded-2xl bg-gradient-to-br from-white/[0.03] to-white/[0.01] border border-white/10 hover:border-brand-pink/20 transition-all duration-300"
                style={{ transitionDelay: `${i * 80}ms` }}
              >
                <div className="flex items-center gap-2 mb-4 sm:mb-5">
                  <Icon className="w-4 h-4 text-brand-pink" />
                  <span className="font-poppins text-sm font-semibold text-white/80">
                    {metric.label}
                  </span>
                </div>

                <div className="space-y-3">
                  <div>
                    <div className="flex items-center justify-between mb-1.5">
                      <span className="font-poppins text-xs text-white/40">{c.traditionalLabel}</span>
                      <span className="font-poppins text-sm font-bold text-red-400">
                        {metric.traditional}
                      </span>
                    </div>
                    <div className="h-2 w-full rounded-full bg-white/5 overflow-hidden">
                      <div
                        className={`h-full rounded-full bg-gradient-to-r from-red-500/60 to-red-400/60 transition-all duration-1000 ${
                          isInView ? 'opacity-100' : 'opacity-0'
                        }`}
                        style={{ width: `${bars.traditional}%` }}
                      />
                    </div>
                  </div>

                  <div>
                    <div className="flex items-center justify-between mb-1.5">
                      <span className="font-poppins text-xs text-white/60">{c.octoMedia}</span>
                      <span className="font-poppins text-sm font-bold gradient-text">
                        {metric.us}
                      </span>
                    </div>
                    <div className="h-2 w-full rounded-full bg-white/5 overflow-hidden">
                      <div
                        className={`h-full rounded-full bg-gradient-to-r from-brand-purple to-brand-pink transition-all duration-1000 delay-300 ${
                          isInView ? 'opacity-100' : 'opacity-0'
                        }`}
                        style={{ width: `${bars.us}%` }}
                      />
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div
          className={`hidden sm:block rounded-2xl overflow-hidden border border-white/5 mb-12 transition-all duration-700 delay-300 ${
            isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <div className="grid grid-cols-[1.2fr_1fr_1fr] bg-white/[0.04]">
            <div className="p-4 font-poppins text-xs font-bold text-white/60 uppercase tracking-wider border-b border-white/5" />
            <div className="p-4 font-poppins text-xs font-bold text-red-300/70 uppercase tracking-wider border-b border-white/5 text-center">
              {c.traditionalAgency}
            </div>
            <div className="p-4 font-poppins text-xs font-bold text-brand-pink uppercase tracking-wider border-b border-white/5 text-center">
              {c.octoMedia}
            </div>
          </div>

          {c.features.map((row, i) => (
            <div
              key={i}
              className={`grid grid-cols-[1.2fr_1fr_1fr] ${
                i < c.features.length - 1 ? 'border-b border-white/5' : ''
              } ${i % 2 === 0 ? 'bg-white/[0.01]' : ''}`}
            >
              <div className="p-4 font-poppins text-sm font-medium text-white/80 flex items-center">
                {row.category}
              </div>
              <div className="p-4 font-poppins text-xs sm:text-sm text-white/40 flex items-center justify-center gap-2 text-center">
                <X size={14} className="text-red-400/50 flex-shrink-0" />
                <span>{row.traditional}</span>
              </div>
              <div className="p-4 font-poppins text-xs sm:text-sm text-white/80 flex items-center justify-center gap-2 text-center">
                <Check size={14} className="text-brand-pink flex-shrink-0" />
                <span>{row.us}</span>
              </div>
            </div>
          ))}
        </div>

        <div
          className={`sm:hidden space-y-3 mb-10 transition-all duration-700 delay-300 ${
            isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          {c.features.map((row, i) => (
            <div
              key={i}
              className="rounded-xl border border-white/[0.06] overflow-hidden"
            >
              <div className="px-4 py-2.5 bg-white/[0.04] border-b border-white/[0.06]">
                <span className="font-poppins text-xs font-bold text-white/70 uppercase tracking-wider">
                  {row.category}
                </span>
              </div>
              <div className="divide-y divide-white/[0.04]">
                <div className="flex items-start gap-2.5 px-4 py-3">
                  <X size={14} className="text-red-400/60 flex-shrink-0 mt-0.5" />
                  <div>
                    <span className="font-poppins text-[10px] text-red-300/50 uppercase tracking-wider block mb-0.5">{c.traditionalLabel}</span>
                    <span className="font-poppins text-xs text-white/40">{row.traditional}</span>
                  </div>
                </div>
                <div className="flex items-start gap-2.5 px-4 py-3 bg-brand-purple/[0.03]">
                  <Check size={14} className="text-brand-pink flex-shrink-0 mt-0.5" />
                  <div>
                    <span className="font-poppins text-[10px] text-brand-pink/60 uppercase tracking-wider block mb-0.5">{c.octoMedia}</span>
                    <span className="font-poppins text-xs text-white/70">{row.us}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div
          className={`transition-all duration-700 delay-500 ${
            isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4 max-w-3xl mx-auto">
            {c.highlights.map((text, index) => {
              const Icon = HIGHLIGHT_ICONS[index];
              return (
                <div
                  key={index}
                  className="flex items-center gap-3 sm:flex-col sm:text-center px-5 py-4 sm:px-4 sm:py-6 rounded-xl bg-gradient-to-br from-brand-purple/5 to-brand-pink/5 border border-brand-pink/20 sm:border-white/10 sm:hover:border-brand-pink/30 transition-all duration-300"
                >
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-gradient-to-br from-brand-purple/20 to-brand-pink/20 flex items-center justify-center flex-shrink-0">
                    <Icon className="w-5 h-5 text-brand-pink" />
                  </div>
                  <span className="font-poppins text-sm sm:text-base font-semibold text-white/90">
                    {text}
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
