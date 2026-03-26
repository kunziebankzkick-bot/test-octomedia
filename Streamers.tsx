import { Link } from 'react-router-dom';
import { Check, ArrowRight } from 'lucide-react';
import { useInView } from '../hooks/useInView';
import MiniOctopus from './MiniOctopus';
import { useI18n } from '../i18n/context';

export default function Streamers() {
  const { ref, isInView } = useInView(0.1);
  const { t, localePath } = useI18n();
  const s = t.streamersSection;

  return (
    <section id="streamers" ref={ref} className="py-24 relative overflow-hidden">
      <MiniOctopus className="absolute top-20 -left-6 w-24 h-24 opacity-10" />
      <div className="section-divider" />
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pt-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className={`transition-all duration-700 ${isInView ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'}`}>
            <p className="font-poppins text-xs text-brand-purple uppercase tracking-[0.2em] mb-3">{s.badge}</p>
            <h2 className="font-poppins font-bold text-3xl sm:text-4xl mb-4">
              {s.title} <span className="gradient-text">{s.titleHighlight}</span>
            </h2>
            <p className="font-poppins text-sm text-white/50 leading-relaxed mb-8">{s.subtitle}</p>

            <ul className="space-y-3 mb-8">
              {s.benefits.map((b) => (
                <li key={b} className="flex items-center gap-2.5">
                  <Check size={16} className="text-brand-pink flex-shrink-0" />
                  <span className="font-poppins text-sm text-white/60">{b}</span>
                </li>
              ))}
            </ul>

            <Link to={localePath('/streamers')} className="inline-flex items-center gap-2 btn-primary px-6 py-3 rounded-lg font-poppins text-sm font-medium text-white">
              {s.cta}
              <ArrowRight size={16} />
            </Link>
          </div>

          <div className={`transition-all duration-700 delay-300 ${isInView ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'}`}>
            <div className="card rounded-2xl p-8">
              <div className="text-center mb-6">
                <p className="font-poppins text-3xl font-bold gradient-text mb-1">750+</p>
                <p className="font-poppins text-sm text-white/40">{s.verifiedStreamers}</p>
              </div>
              <div className="space-y-4">
                <div className="flex justify-between items-center py-3 border-b border-white/5">
                  <span className="font-poppins text-xs text-white/40">{s.avgEarnings}</span>
                  <span className="font-poppins text-sm font-medium text-white">{s.avgEarningsValue}</span>
                </div>
                <div className="flex justify-between items-center py-3 border-b border-white/5">
                  <span className="font-poppins text-xs text-white/40">{s.platforms}</span>
                  <span className="font-poppins text-sm font-medium text-white">{s.platformsValue}</span>
                </div>
                <div className="flex justify-between items-center py-3 border-b border-white/5">
                  <span className="font-poppins text-xs text-white/40">{s.paymentSchedule}</span>
                  <span className="font-poppins text-sm font-medium text-white">{s.paymentScheduleValue}</span>
                </div>
                <div className="flex justify-between items-center py-3">
                  <span className="font-poppins text-xs text-white/40">{s.markets}</span>
                  <span className="font-poppins text-sm font-medium text-white">{s.marketsValue}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
