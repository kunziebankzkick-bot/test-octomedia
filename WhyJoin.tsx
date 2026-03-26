import { RefreshCw, TrendingUp, Briefcase, Zap, Gamepad2, Unlock } from 'lucide-react';
import { useInView } from '../../hooks/useInView';
import MiniOctopus from '../../components/MiniOctopus';
import { useI18n } from '../../i18n/context';

const ICONS = [RefreshCw, TrendingUp, Briefcase, Zap, Gamepad2, Unlock];

export default function WhyJoin() {
  const { ref, isInView } = useInView(0.1);
  const { t } = useI18n();
  const wj = t.streamersPage.whyJoin;

  return (
    <section id="why-join" ref={ref} className="py-24 relative overflow-hidden">
      <MiniOctopus className="absolute -bottom-4 -right-6 w-28 h-28 opacity-10" />
      <div className="section-divider" />
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-16">
        <div
          className={`text-center mb-14 transition-all duration-700 ${
            isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <h2 className="font-poppins font-bold text-3xl sm:text-4xl lg:text-5xl mb-3">
            {wj.title} <span className="gradient-text">{wj.titleHighlight}</span>
          </h2>
          <p className="font-poppins text-sm text-white/40 max-w-xl mx-auto">
            {wj.subtitle}
          </p>
        </div>

        <div className="hidden md:grid grid-cols-2 lg:grid-cols-3 gap-5">
          {wj.items.map((r, i) => {
            const Icon = ICONS[i];
            return (
              <div
                key={i}
                className={`card rounded-2xl p-7 transition-all duration-700 group ${
                  isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
                }`}
                style={{ transitionDelay: `${i * 80}ms` }}
              >
                <div className="w-10 h-10 rounded-lg bg-brand-purple/10 flex items-center justify-center mb-4">
                  <Icon size={20} className="text-brand-purple transition-colors duration-300 group-hover:text-brand-pink" />
                </div>
                <h3 className="font-poppins font-semibold text-base text-white mb-2">
                  {r.title}
                </h3>
                <p className="font-poppins text-sm text-white/40 leading-relaxed">
                  {r.desc}
                </p>
              </div>
            );
          })}
        </div>

        <div className="md:hidden space-y-3">
          {wj.items.map((r, i) => {
            const Icon = ICONS[i];
            return (
              <div
                key={i}
                className={`flex items-start gap-4 p-4 rounded-xl border border-white/[0.06] bg-gradient-to-r from-white/[0.03] to-transparent transition-all duration-700 ${
                  isInView ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-6'
                }`}
                style={{ transitionDelay: `${i * 60}ms` }}
              >
                <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-brand-purple/15 to-brand-pink/15 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <Icon size={18} className="text-brand-pink" />
                </div>
                <div className="min-w-0">
                  <h3 className="font-poppins font-semibold text-sm text-white mb-1">
                    {r.title}
                  </h3>
                  <p className="font-poppins text-xs text-white/45 leading-relaxed">
                    {r.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
