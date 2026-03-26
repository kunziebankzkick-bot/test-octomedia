import { useInView } from '../../hooks/useInView';
import { ArrowRight } from 'lucide-react';
import { useI18n } from '../../i18n/context';

function WhyUsClosing() {
  const { ref, isInView } = useInView(0.1);
  const { t, localePath } = useI18n();
  const c = t.whyUsPage.closing;

  return (
    <section ref={ref} className="py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(137,127,217,0.2),transparent_70%)]" />

      <div className="max-w-4xl mx-auto px-6 relative z-10">
        <div
          className={`text-center transition-all duration-1000 ${
            isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <div className="inline-block mb-8 px-6 py-3 bg-brand-purple/10 border border-brand-purple/30 rounded-full">
            <span className="text-brand-purple font-poppins font-semibold text-sm tracking-wider">
              {c.badge}
            </span>
          </div>

          <h2 className="text-4xl md:text-6xl font-black mb-8 bg-gradient-to-r from-white via-white to-gray-400 bg-clip-text text-transparent leading-tight font-poppins whitespace-pre-line">
            {c.title}
          </h2>

          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed font-poppins mb-12">
            {c.subtitle}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href={localePath('/streamers')}
              className="group px-8 py-4 bg-gradient-to-r from-brand-green to-emerald-400 text-black font-bold rounded-full hover:shadow-2xl hover:shadow-brand-green/50 transition-all duration-300 hover:scale-105 flex items-center gap-2 font-poppins"
            >
              {c.cta1}
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>

            <a
              href="/#contact"
              className="group px-8 py-4 bg-white/5 border border-white/20 text-white font-bold rounded-full hover:bg-white/10 hover:border-brand-purple transition-all duration-300 font-poppins"
            >
              {c.cta2}
            </a>
          </div>

          <div className="mt-16 pt-16 border-t border-white/10">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div>
                <div className="text-4xl font-black text-brand-green mb-2 font-poppins">{c.stat1Value}</div>
                <div className="text-sm text-gray-400 font-poppins">{c.stat1Label}</div>
              </div>
              <div>
                <div className="text-4xl font-black text-brand-green mb-2 font-poppins">{c.stat2Value}</div>
                <div className="text-sm text-gray-400 font-poppins">{c.stat2Label}</div>
              </div>
              <div>
                <div className="text-4xl font-black text-brand-green mb-2 font-poppins">{c.stat3Value}</div>
                <div className="text-sm text-gray-400 font-poppins">{c.stat3Label}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default WhyUsClosing;
