import { useInView } from '../../hooks/useInView';
import { Target, TrendingUp, Shield, Users, BarChart3, CheckCircle } from 'lucide-react';
import { useI18n } from '../../i18n/context';

const DIFF_ICONS = [Target, TrendingUp, BarChart3, Shield, Users, CheckCircle];

function Differentiators() {
  const { ref, isInView } = useInView(0.1);
  const { t } = useI18n();
  const d = t.whyUsPage.differentiators;

  return (
    <section ref={ref} className="py-24 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-[#1a1a3e]/30 via-transparent to-[#1a1a3e]/30" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div
          className={`text-center mb-16 transition-all duration-1000 ${
            isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <h2 className="text-4xl md:text-5xl font-black mb-6 text-white font-poppins">
            {d.title}
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto font-poppins">
            {d.subtitle}
          </p>
        </div>

        <div
          className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 transition-all duration-1000 delay-300 ${
            isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          {d.items.map((item, index) => {
            const Icon = DIFF_ICONS[index];
            return (
              <div
                key={index}
                className="group relative bg-gradient-to-br from-[#1a1a3e] to-[#0f0f23] rounded-2xl p-8 border border-white/10 hover:border-brand-green transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-brand-green/20"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-brand-green/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                <div className="relative">
                  <div className="w-16 h-16 mb-6 rounded-xl bg-brand-green/10 flex items-center justify-center group-hover:bg-brand-green/20 transition-colors duration-300">
                    <Icon className="w-8 h-8 text-brand-green" />
                  </div>

                  <h3 className="text-xl font-bold text-white mb-3 font-poppins">
                    {item.title}
                  </h3>

                  <p className="text-gray-300 leading-relaxed font-poppins">
                    {item.description}
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

export default Differentiators;
