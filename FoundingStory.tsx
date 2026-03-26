import { useInView } from '../../hooks/useInView';
import { Briefcase, AlertTriangle, Lightbulb, Rocket } from 'lucide-react';
import { useI18n } from '../../i18n/context';

const CARD_ICONS = [Briefcase, AlertTriangle, Lightbulb, Rocket];

function FoundingStory() {
  const { ref, isInView } = useInView(0.1);
  const { t } = useI18n();
  const fs = t.whyUsPage.foundingStory;

  return (
    <section ref={ref} className="py-20 sm:py-24 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#1a1a3e]/30 to-transparent" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 relative z-10">
        <div
          className={`transition-all duration-1000 ${
            isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black mb-10 sm:mb-14 text-white font-poppins text-center sm:text-left">
            {fs.title}
          </h2>

          <div className="hidden md:block space-y-6 text-lg text-gray-300 leading-relaxed font-poppins max-w-4xl">
            <p>{fs.body1}</p>
            <p>{fs.body2}</p>
            <p>{fs.body3}</p>
            <p>{fs.body4}</p>
            <div className="pt-8 border-t border-white/10 mt-12">
              <p className="text-xl font-semibold text-white">
                {fs.closing}
              </p>
            </div>
          </div>

          <div className="md:hidden space-y-4">
            {fs.cards.map((card, i) => {
              const Icon = CARD_ICONS[i];
              const accent = i === 1;
              return (
                <div
                  key={card.heading}
                  className={`rounded-xl p-5 transition-all duration-700 ${
                    accent
                      ? 'bg-gradient-to-br from-red-500/[0.08] to-transparent border border-red-500/20'
                      : 'bg-gradient-to-br from-white/[0.04] to-white/[0.01] border border-white/[0.08]'
                  } ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}
                  style={{ transitionDelay: `${i * 100}ms` }}
                >
                  <div className="flex items-center gap-3 mb-3">
                    <div className={`w-9 h-9 rounded-lg flex items-center justify-center ${
                      accent ? 'bg-red-500/15' : 'bg-brand-purple/15'
                    }`}>
                      <Icon size={18} className={accent ? 'text-red-400' : 'text-brand-pink'} />
                    </div>
                    <h3 className="font-poppins font-bold text-base text-white">
                      {card.heading}
                    </h3>
                  </div>
                  <p className="font-poppins text-sm text-white/55 leading-relaxed">
                    {card.text}
                  </p>
                </div>
              );
            })}

            <div className="mt-6 pt-5 border-t border-white/10 text-center">
              <p className="font-poppins text-lg font-semibold text-white">
                {fs.closing}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default FoundingStory;
