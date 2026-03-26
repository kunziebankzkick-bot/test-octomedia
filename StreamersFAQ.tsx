import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { useInView } from '../../hooks/useInView';
import MiniOctopus from '../../components/MiniOctopus';
import { useI18n } from '../../i18n/context';

export default function StreamersFAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const { ref, isInView } = useInView(0.1);
  const { t } = useI18n();
  const f = t.streamersPage.faq;

  return (
    <section ref={ref} className="py-24 relative overflow-hidden">
      <MiniOctopus className="absolute -top-2 -right-4 w-20 h-20 opacity-10" />
      <div className="section-divider" />
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 pt-16">
        <div
          className={`text-center mb-14 transition-all duration-700 ${
            isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <h2 className="font-poppins font-bold text-3xl sm:text-4xl lg:text-5xl mb-3">
            {f.title} <span className="gradient-text">{f.titleHighlight}</span>
          </h2>
          <p className="font-poppins text-sm text-white/40">
            {f.subtitle}
          </p>
        </div>

        <div className="space-y-3">
          {f.items.map((faq, i) => (
            <div
              key={i}
              className={`card rounded-xl overflow-hidden transition-all duration-700 ${
                isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`}
              style={{ transitionDelay: `${i * 60}ms` }}
            >
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full flex items-center justify-between p-5 text-left"
              >
                <span className="font-poppins text-sm font-medium text-white/80 pr-4">
                  {faq.q}
                </span>
                <ChevronDown
                  size={18}
                  className={`text-white/30 flex-shrink-0 transition-transform duration-300 ${
                    openIndex === i ? 'rotate-180 text-brand-purple' : ''
                  }`}
                />
              </button>
              <div
                className={`overflow-hidden transition-all duration-300 ${
                  openIndex === i ? 'max-h-60 opacity-100' : 'max-h-0 opacity-0'
                }`}
              >
                <p className="font-poppins text-sm text-white/40 leading-relaxed px-5 pb-5">
                  {faq.a}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
