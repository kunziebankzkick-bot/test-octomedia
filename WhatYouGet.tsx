import { Repeat, BadgeDollarSign, Headphones, Clock, Target, Shuffle, Zap } from 'lucide-react';
import { useInView } from '../../hooks/useInView';
import MiniOctopus from '../../components/MiniOctopus';
import { useI18n } from '../../i18n/context';

const PERK_ICONS = [Repeat, BadgeDollarSign, Headphones, Clock, Target, Shuffle];

export default function WhatYouGet() {
  const { ref, isInView } = useInView(0.1);
  const { t } = useI18n();
  const wyg = t.streamersPage.whatYouGet;

  return (
    <section ref={ref} className="py-24 relative overflow-hidden">
      <MiniOctopus className="absolute -bottom-2 -right-4 w-24 h-24 opacity-10" />
      <div className="section-divider" />
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-16">
        <div
          className={`text-center mb-16 transition-all duration-700 ${
            isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-brand-pink/10 to-brand-purple/10 border border-brand-pink/20 mb-6">
            <Zap className="w-4 h-4 text-brand-pink" />
            <span className="font-poppins text-sm text-white/70 uppercase tracking-wider">
              {wyg.badge}
            </span>
          </div>
          <h2 className="font-poppins font-bold text-3xl sm:text-4xl lg:text-5xl mb-4">
            {wyg.title} <span className="gradient-text">{wyg.titleHighlight}</span>
          </h2>
          <p className="font-poppins text-base text-white/60 max-w-2xl mx-auto">
            {wyg.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {wyg.items.map((p, i) => {
            const Icon = PERK_ICONS[i];
            return (
              <div
                key={i}
                className={`group relative transition-all duration-700 ${
                  isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
                }`}
                style={{ transitionDelay: `${i * 80}ms` }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-brand-pink/20 to-brand-purple/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="relative card rounded-2xl p-7 h-full hover:border-brand-pink/40 transition-all duration-300">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-brand-pink/20 to-brand-purple/10 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300">
                    <Icon size={22} className="text-brand-pink" />
                  </div>
                  <h3 className="font-poppins font-bold text-lg text-white mb-3">
                    {p.title}
                  </h3>
                  <p className="font-poppins text-sm text-white/60 leading-relaxed">
                    {p.desc}
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
