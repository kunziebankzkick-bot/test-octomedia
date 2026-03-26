import { Users, Tv, MonitorPlay, Activity, Globe, CalendarClock, Check } from 'lucide-react';
import { useInView } from '../../hooks/useInView';
import MiniOctopus from '../../components/MiniOctopus';
import { useI18n } from '../../i18n/context';

const REQ_ICONS = [Users, Tv, MonitorPlay, Activity, Globe, CalendarClock];

export default function Eligibility() {
  const { ref, isInView } = useInView(0.1);
  const { t } = useI18n();
  const e = t.streamersPage.eligibility;

  return (
    <section ref={ref} className="py-24 relative overflow-hidden">
      <MiniOctopus className="absolute top-20 -left-6 w-24 h-24 opacity-10" flip />
      <div className="section-divider" />
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-16">
        <div
          className={`text-center mb-14 transition-all duration-700 ${
            isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <h2 className="font-poppins font-bold text-3xl sm:text-4xl lg:text-5xl mb-3">
            {e.title} <span className="gradient-text">{e.titleHighlight}</span>
          </h2>
          <p className="font-poppins text-sm text-white/40 max-w-xl mx-auto">
            {e.subtitle}
          </p>
        </div>

        <div className="hidden md:grid grid-cols-2 lg:grid-cols-3 gap-5">
          {e.items.map((r, i) => {
            const Icon = REQ_ICONS[i];
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

        <div className="md:hidden rounded-xl border border-white/[0.08] overflow-hidden">
          {e.items.map((r, i) => (
            <div
              key={i}
              className={`flex items-start gap-3 p-4 transition-all duration-700 ${
                i < e.items.length - 1 ? 'border-b border-white/[0.05]' : ''
              } ${i % 2 === 0 ? 'bg-white/[0.02]' : ''} ${
                isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`}
              style={{ transitionDelay: `${i * 60}ms` }}
            >
              <div className="w-8 h-8 rounded-full bg-gradient-to-br from-brand-purple/20 to-brand-pink/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                <Check size={14} className="text-brand-pink" />
              </div>
              <div className="min-w-0">
                <h3 className="font-poppins font-semibold text-sm text-white mb-0.5">
                  {r.title}
                </h3>
                <p className="font-poppins text-xs text-white/40 leading-relaxed">
                  {r.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
