import { useInView } from '../hooks/useInView';
import MiniOctopus from './MiniOctopus';
import { AlertTriangle } from 'lucide-react';
import { useI18n } from '../i18n/context';

const BAR_WIDTHS = ['w-[70%]', 'w-[5%]', 'w-[0%]'];

export default function Problem() {
  const { ref, isInView } = useInView(0.1);
  const { t } = useI18n();

  const problems = t.problem.items.map((item, i) => ({
    ...item,
    barWidth: BAR_WIDTHS[i],
    barColor: 'from-red-500 to-red-400',
  }));

  return (
    <section
      ref={ref}
      className="relative py-24 overflow-hidden"
      id="problem"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a12] to-[#0d0d16]" />
      <MiniOctopus className="absolute -bottom-4 -right-4 w-24 h-24 opacity-15" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div
          className={`transition-all duration-1000 ${
            isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-red-500/10 border border-red-500/20 mb-4">
              <AlertTriangle className="w-4 h-4 text-red-400" />
              <span className="font-poppins text-sm text-red-300 uppercase tracking-wider">{t.problem.badge}</span>
            </div>
            <h2 className="font-poppins font-bold text-3xl sm:text-4xl md:text-5xl mb-4">
              {t.problem.title} <span className="text-red-400">{t.problem.titleHighlight}</span>
            </h2>
            <p className="font-poppins text-lg text-white/60 max-w-3xl mx-auto">
              {t.problem.subtitle}
            </p>
          </div>

          <div className="space-y-6 mb-12">
            {problems.map((problem, index) => (
              <div
                key={index}
                className="group p-6 sm:p-8 rounded-2xl bg-gradient-to-br from-white/[0.03] to-white/[0.01] border border-white/10 hover:border-red-500/30 transition-all duration-300"
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="flex flex-col lg:flex-row lg:items-center gap-6">
                  <div className="flex-shrink-0">
                    <div className="font-poppins text-5xl sm:text-6xl font-bold text-red-400">
                      {problem.stat}
                    </div>
                  </div>
                  <div className="flex-grow">
                    <h3 className="font-poppins font-bold text-xl text-white mb-2">
                      {problem.title}
                    </h3>
                    <p className="font-poppins text-sm text-white/60 leading-relaxed mb-4">
                      {problem.description}
                    </p>
                    <div className="h-2 w-full rounded-full bg-white/5 overflow-hidden">
                      <div className={`h-full rounded-full bg-gradient-to-r ${problem.barColor} ${problem.barWidth} transition-all duration-1000 ${isInView ? 'opacity-100' : 'opacity-0'}`} />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="relative p-8 rounded-3xl bg-gradient-to-br from-red-500/[0.08] via-red-500/[0.04] to-transparent border border-red-500/20">
            <div className="absolute top-4 right-4">
              <AlertTriangle className="w-6 h-6 text-red-400/40" />
            </div>

            <div className="mb-6 text-center">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-red-500/10 border border-red-500/25 mb-3">
                <div className="w-2 h-2 rounded-full bg-red-400 animate-pulse" />
                <span className="font-poppins text-xs text-red-300 uppercase tracking-wider font-semibold">
                  {t.problem.realityCheck}
                </span>
              </div>
              <h3 className="font-poppins text-xl sm:text-2xl font-bold text-white mb-2">
                {t.problem.typicalMetrics}
              </h3>
              <p className="font-poppins text-sm text-white/50">
                {t.problem.typicalSubtitle}
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {[
                { value: '$10K', label: t.problem.spent },
                { value: '120', label: t.problem.signUps },
                { value: '40', label: t.problem.ftds },
                { value: '$250', label: t.problem.costPerFtd },
              ].map((stat) => (
                <div key={stat.label} className="relative group p-6 rounded-xl bg-gradient-to-br from-white/[0.04] to-white/[0.01] border border-red-500/20 hover:border-red-500/30 transition-all duration-300 text-center">
                  <div className="absolute inset-0 rounded-xl bg-red-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="relative">
                    <div className="font-poppins text-4xl font-bold text-red-400 mb-2">{stat.value}</div>
                    <div className="font-poppins text-sm text-white/60 mb-1">{stat.label}</div>
                    <div className="h-1 w-12 mx-auto rounded-full bg-red-500/30" />
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-6 pt-6 border-t border-red-500/15 text-center">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-red-500/10 border border-red-500/20">
                <div className="font-poppins text-2xl font-bold text-red-400">&lt;20%</div>
                <div className="text-left">
                  <div className="font-poppins text-xs text-white/70 font-semibold">{t.problem.secondDepositors}</div>
                  <div className="font-poppins text-xs text-red-300">{t.problem.noRetention}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
