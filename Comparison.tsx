import { useInView } from '../hooks/useInView';
import { Check, X, Target, TrendingUp, Clock, Eye, Users, Zap, Award, CheckCircle2 } from 'lucide-react';
import { useI18n } from '../i18n/context';

const METRIC_ICONS = [Users, TrendingUp, Clock, Eye];
const HIGHLIGHT_ICONS = [CheckCircle2, Zap, Award];

const METRIC_VALUES = [
  { standard: { value: '15%', bar: 15 }, octo: { value: '65%', bar: 65 } },
  { standard: { value: '0.8%', bar: 12 }, octo: { value: '3.2%', bar: 48 } },
  { standard: { value: '6 weeks', bar: 75 }, octo: { value: '2 weeks', bar: 25 } },
  { standard: { value: '~30%', bar: 30 }, octo: { value: '100%', bar: 100 } },
];

export default function Comparison() {
  const { ref, isInView } = useInView(0.1);
  const { t } = useI18n();

  return (
    <section id="about" ref={ref} className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a12] to-[#0d0d16]" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className={`text-center mb-16 transition-all duration-700 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-brand-purple/10 to-brand-pink/10 border border-white/10 mb-4">
            <Target className="w-4 h-4 text-brand-pink" />
            <span className="font-poppins text-sm text-white/70 uppercase tracking-wider">{t.comparison.badge}</span>
          </div>
          <h2 className="font-poppins font-bold text-3xl sm:text-4xl lg:text-5xl mb-4">
            {t.comparison.title}{' '}
            <span className="gradient-text">{t.comparison.titleHighlight}</span>
          </h2>
          <p className="font-poppins text-lg text-white/60 max-w-3xl mx-auto">{t.comparison.subtitle}</p>
        </div>

        <div className={`grid grid-cols-1 md:grid-cols-2 gap-5 mb-16 transition-all duration-700 delay-200 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          {t.comparison.metrics.map((metric, i) => {
            const Icon = METRIC_ICONS[i];
            const vals = METRIC_VALUES[i];
            return (
              <div key={i} className="p-6 rounded-2xl bg-gradient-to-br from-white/[0.03] to-white/[0.01] border border-white/10 hover:border-brand-pink/20 transition-all duration-300" style={{ transitionDelay: `${i * 80}ms` }}>
                <div className="flex items-center gap-2 mb-5">
                  <Icon className="w-4 h-4 text-brand-pink" />
                  <span className="font-poppins text-sm font-semibold text-white/80">{metric.label}</span>
                </div>
                <div className="space-y-3">
                  <div>
                    <div className="flex items-center justify-between mb-1.5">
                      <span className="font-poppins text-xs text-white/40">{t.comparison.standardAgency}</span>
                      <span className="font-poppins text-sm font-bold text-red-400">{vals.standard.value}</span>
                    </div>
                    <div className="h-2 w-full rounded-full bg-white/5 overflow-hidden">
                      <div className={`h-full rounded-full bg-gradient-to-r from-red-500/60 to-red-400/60 transition-all duration-1000 ${isInView ? 'opacity-100' : 'opacity-0'}`} style={{ width: `${vals.standard.bar}%` }} />
                    </div>
                  </div>
                  <div>
                    <div className="flex items-center justify-between mb-1.5">
                      <span className="font-poppins text-xs text-white/60">Octo Media Group</span>
                      <span className="font-poppins text-sm font-bold gradient-text">{vals.octo.value}</span>
                    </div>
                    <div className="h-2 w-full rounded-full bg-white/5 overflow-hidden">
                      <div className={`h-full rounded-full bg-gradient-to-r from-brand-purple to-brand-pink transition-all duration-1000 delay-300 ${isInView ? 'opacity-100' : 'opacity-0'}`} style={{ width: `${vals.octo.bar}%` }} />
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className={`rounded-2xl overflow-hidden border border-white/5 mb-12 transition-all duration-700 delay-300 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="grid grid-cols-[1fr_1fr_1fr] bg-white/[0.04]">
            <div className="p-4 font-poppins text-xs font-bold text-white/60 uppercase tracking-wider border-b border-white/5" />
            <div className="p-4 font-poppins text-xs font-bold text-red-300/70 uppercase tracking-wider border-b border-white/5 text-center">{t.comparison.standardAgency}</div>
            <div className="p-4 font-poppins text-xs font-bold text-brand-pink uppercase tracking-wider border-b border-white/5 text-center">Octo Media Group</div>
          </div>

          {t.comparison.features.map((row, i) => (
            <div key={i} className={`grid grid-cols-[1fr_1fr_1fr] ${i < t.comparison.features.length - 1 ? 'border-b border-white/5' : ''} ${i % 2 === 0 ? 'bg-white/[0.01]' : ''}`}>
              <div className="p-4 font-poppins text-sm font-medium text-white/80 flex items-center">{row.category}</div>
              <div className="p-4 font-poppins text-sm text-white/40 flex items-center justify-center gap-2 text-center">
                <X size={14} className="text-red-400/50 flex-shrink-0" />
                <span className="hidden sm:inline">{row.standard}</span>
              </div>
              <div className="p-4 font-poppins text-sm text-white/80 flex items-center justify-center gap-2 text-center">
                <Check size={14} className="text-brand-pink flex-shrink-0" />
                <span className="hidden sm:inline">{row.octo}</span>
              </div>
            </div>
          ))}
        </div>

        <div className={`transition-all duration-700 delay-500 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4 max-w-3xl mx-auto">
            {t.comparison.highlights.map((text, index) => {
              const Icon = HIGHLIGHT_ICONS[index];
              return (
                <div key={index} className="flex items-center gap-3 sm:flex-col sm:text-center px-5 py-4 sm:px-4 sm:py-6 rounded-xl bg-gradient-to-br from-brand-purple/5 to-brand-pink/5 border border-brand-pink/20 sm:border-white/10 sm:hover:border-brand-pink/30 transition-all duration-300">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-gradient-to-br from-brand-purple/20 to-brand-pink/20 flex items-center justify-center flex-shrink-0">
                    <Icon className="w-5 h-5 text-brand-pink" />
                  </div>
                  <span className="font-poppins text-sm sm:text-base font-semibold text-white/90">{text}</span>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
