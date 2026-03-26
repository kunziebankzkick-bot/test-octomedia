import { useInView } from '../../hooks/useInView';
import { useI18n } from '../../i18n/context';

function WhyUsHero() {
  const { ref, isInView } = useInView(0.1);
  const { t } = useI18n();
  const wh = t.whyUsPage.hero;

  return (
    <section
      ref={ref}
      className="relative min-h-[80vh] flex items-center justify-center pt-32 pb-20 overflow-hidden"
    >
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(137,127,217,0.15),transparent_50%)]" />

      <div className="max-w-5xl mx-auto px-6 relative z-10">
        <div
          className={`text-center transition-all duration-1000 ${
            isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <div className="inline-block mb-6 px-4 py-2 bg-brand-purple/10 border border-brand-purple/30 rounded-full">
            <span className="text-brand-purple font-poppins font-semibold text-sm tracking-wider">
              {wh.badge}
            </span>
          </div>

          <h1 className="text-5xl md:text-6xl font-black mb-8 bg-gradient-to-r from-white via-white to-gray-400 bg-clip-text text-transparent leading-tight font-poppins whitespace-pre-line">
            {wh.title}
          </h1>

          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed font-poppins mb-8">
            {wh.subtitle}
          </p>

          <div className="flex flex-wrap justify-center gap-6 text-sm font-poppins font-medium">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-brand-green" />
              <span className="text-gray-300">{wh.point1}</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-brand-green" />
              <span className="text-gray-300">{wh.point2}</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-brand-green" />
              <span className="text-gray-300">{wh.point3}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default WhyUsHero;
