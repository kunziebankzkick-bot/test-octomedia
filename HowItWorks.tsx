import { ClipboardList, ShieldCheck, Handshake, DollarSign } from 'lucide-react';
import { useInView } from '../../hooks/useInView';
import MiniOctopus from '../../components/MiniOctopus';
import { useI18n } from '../../i18n/context';

const STEP_ICONS = [ClipboardList, ShieldCheck, Handshake, DollarSign];

export default function HowItWorks() {
  const { ref, isInView } = useInView(0.1);
  const { t } = useI18n();
  const hiw = t.streamersPage.howItWorks;

  return (
    <section id="how-it-works" ref={ref} className="py-24 relative overflow-hidden">
      <MiniOctopus className="absolute -top-2 -left-4 w-24 h-24 opacity-10" flip />
      <div className="section-divider" />
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-16">
        <div
          className={`text-center mb-14 transition-all duration-700 ${
            isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <h2 className="font-poppins font-bold text-3xl sm:text-4xl lg:text-5xl mb-3">
            {hiw.title} <span className="gradient-text">{hiw.titleHighlight}</span>
          </h2>
          <p className="font-poppins text-sm text-white/40 max-w-xl mx-auto">
            {hiw.subtitle}
          </p>
        </div>

        <div className="hidden sm:grid grid-cols-2 lg:grid-cols-4 gap-5">
          {hiw.steps.map((s, i) => {
            const Icon = STEP_ICONS[i];
            return (
              <div
                key={i}
                className={`relative transition-all duration-700 ${
                  isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
                }`}
                style={{ transitionDelay: `${i * 100}ms` }}
              >
                <div className="card rounded-2xl p-7 h-full text-center group">
                  <span className="font-poppins text-xs font-bold text-brand-purple/40 tracking-widest">
                    {hiw.step} {String(i + 1).padStart(2, '0')}
                  </span>
                  <div className="w-14 h-14 rounded-xl bg-brand-purple/10 flex items-center justify-center mx-auto mt-4 mb-5 transition-shadow duration-300 group-hover:shadow-[0_0_20px_rgba(205,128,217,0.2)]">
                    <Icon size={24} className="text-brand-pink transition-transform duration-300 group-hover:scale-110" />
                  </div>
                  <h3 className="font-poppins font-semibold text-lg text-white mb-2">
                    {s.title}
                  </h3>
                  <p className="font-poppins text-sm text-white/40 leading-relaxed">
                    {s.desc}
                  </p>
                </div>

                {i < hiw.steps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-3 w-6 h-px bg-gradient-to-r from-brand-purple/30 to-transparent" />
                )}
              </div>
            );
          })}
        </div>

        <div className="sm:hidden">
          {hiw.steps.map((s, i) => {
            const Icon = STEP_ICONS[i];
            return (
              <div
                key={i}
                className={`flex gap-4 transition-all duration-700 ${
                  isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
                }`}
                style={{ transitionDelay: `${i * 100}ms` }}
              >
                <div className="flex flex-col items-center flex-shrink-0">
                  <div className="w-11 h-11 rounded-full bg-gradient-to-br from-brand-purple to-brand-pink flex items-center justify-center">
                    <span className="font-poppins text-sm font-bold text-white">{String(i + 1).padStart(2, '0')}</span>
                  </div>
                  {i < hiw.steps.length - 1 && (
                    <div className="w-px h-full min-h-[40px] bg-gradient-to-b from-brand-pink/40 to-transparent my-1" />
                  )}
                </div>
                <div className="pb-6 pt-1.5">
                  <div className="flex items-center gap-2 mb-1.5">
                    <Icon size={16} className="text-brand-pink" />
                    <h3 className="font-poppins font-bold text-base text-white">{s.title}</h3>
                  </div>
                  <p className="font-poppins text-xs text-white/45 leading-relaxed">
                    {s.desc}
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
