import { Link } from 'react-router-dom';
import { useInView } from '../hooks/useInView';
import { Video, Users, TrendingUp, Award } from 'lucide-react';
import { useI18n } from '../i18n/context';

const SERVICE_ICONS = [Video, Users, TrendingUp];
const SERVICE_HREFS = ['/streamers', '/services#affiliate-marketing', '/services#influencer-marketing'];

export default function Solution() {
  const { ref, isInView } = useInView(0.1);
  const { t, localePath } = useI18n();

  return (
    <section ref={ref} className="relative py-24 overflow-hidden" id="services">
      <div className="absolute inset-0 bg-gradient-to-b from-[#0d0d16] to-[#0a0a12]" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className={`transition-all duration-1000 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-brand-purple/10 to-brand-pink/10 border border-white/10 mb-4">
              <Award className="w-4 h-4 text-brand-pink" />
              <span className="font-poppins text-sm text-white/70 uppercase tracking-wider">{t.solution.badge}</span>
            </div>
            <h2 className="font-poppins font-bold text-3xl sm:text-4xl md:text-5xl mb-4">
              {t.solution.title} <span className="gradient-text">{t.solution.titleHighlight}</span>
            </h2>
            <p className="font-poppins text-lg text-white/60 max-w-3xl mx-auto">{t.solution.subtitle}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {t.solution.services.map((service, index) => {
              const Icon = SERVICE_ICONS[index];
              return (
                <div key={index} className="group card rounded-2xl p-8 transition-all duration-700" style={{ transitionDelay: `${index * 100}ms` }}>
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-brand-purple/20 to-brand-pink/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <Icon className="w-7 h-7 text-brand-pink" />
                    </div>
                    <div className="flex items-center gap-2">
                      {[service.tag1, service.tag2].map((tag) => (
                        <span key={tag} className="font-poppins text-xs font-semibold text-brand-purple uppercase tracking-wider px-3 py-1 rounded-full bg-brand-purple/10 border border-brand-purple/20">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                  <h3 className="font-poppins font-bold text-xl text-white mb-3">{service.title}</h3>
                  <p className="font-poppins text-sm text-white/60 leading-relaxed mb-6">{service.description}</p>
                  <Link to={localePath(SERVICE_HREFS[index])} className="inline-block font-poppins text-sm font-medium text-brand-pink hover:text-brand-purple transition-colors duration-300">
                    {service.link} &rarr;
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
