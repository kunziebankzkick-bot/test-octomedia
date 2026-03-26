import { Dice5, Trophy, Gamepad2, Spade } from 'lucide-react';
import { useInView } from '../hooks/useInView';
import MiniOctopus from './MiniOctopus';
import { useI18n } from '../i18n/context';

const MARKET_ICONS = [Dice5, Trophy, Gamepad2, Spade];

export default function Markets() {
  const { ref, isInView } = useInView(0.1);
  const { t } = useI18n();

  return (
    <section ref={ref} className="py-20 relative overflow-hidden">
      <MiniOctopus className="absolute -top-2 -left-4 w-20 h-20 opacity-10" flip />
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {t.markets.items.map((market, i) => {
            const Icon = MARKET_ICONS[i];
            return (
              <div
                key={i}
                className={`card rounded-xl p-6 text-center transition-all duration-700 group ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
                style={{ transitionDelay: `${i * 100}ms` }}
              >
                <div className="animate-float" style={{ animationDelay: `${i * 0.7}s` }}>
                  <Icon size={32} className="text-brand-purple mx-auto mb-3 transition-all duration-300 group-hover:scale-110 group-hover:text-brand-pink" />
                </div>
                <h3 className="font-poppins font-bold text-base text-white mb-1">{market.title}</h3>
                <p className="font-poppins text-sm text-white/70">{market.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
