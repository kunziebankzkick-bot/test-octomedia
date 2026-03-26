import { useInView } from '../hooks/useInView';
import { UserCheck, ShieldCheck, Radio, BarChart3, TrendingUp, Zap, Sparkles } from 'lucide-react';
import { useI18n } from '../i18n/context';

const STEP_ICONS = [UserCheck, ShieldCheck, Radio, BarChart3, TrendingUp];

function FloatingOrb({ delay, size, top, left }: { delay: number; size: number; top: string; left: string }) {
  return (
    <div
      className="floating-orb absolute rounded-full pointer-events-none"
      style={{
        width: size,
        height: size,
        top,
        left,
        animationDelay: `${delay}s`,
        background: 'radial-gradient(circle, rgba(205,128,217,0.12) 0%, transparent 70%)',
        filter: 'blur(40px)',
      }}
    />
  );
}

export default function HowWeSolve() {
  const { ref, isInView } = useInView(0.05);
  const { t } = useI18n();

  return (
    <section ref={ref} className="relative py-32 lg:py-40 overflow-hidden" id="how-we-solve">
      <div className="absolute inset-0 bg-gradient-to-b from-[#0d0d16] via-[#0a0a12] to-[#0d0d16]" />

      <div className="hidden md:block absolute inset-0 overflow-hidden">
        <div className="animated-gradient-1 absolute top-[10%] left-[-10%] w-[600px] h-[600px] rounded-full blur-[120px]" />
        <div className="animated-gradient-2 absolute bottom-[20%] right-[-5%] w-[500px] h-[500px] rounded-full blur-[100px]" />
        <div className="animated-gradient-3 absolute top-[50%] left-[50%] w-[400px] h-[400px] rounded-full blur-[80px] -translate-x-1/2 -translate-y-1/2" />
      </div>

      <div className="hidden md:block">
        <FloatingOrb delay={0} size={150} top="15%" left="20%" />
        <FloatingOrb delay={2} size={120} top="60%" left="75%" />
        <FloatingOrb delay={4} size={100} top="80%" left="30%" />
        <FloatingOrb delay={1.5} size={130} top="35%" left="85%" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className={`text-center mb-24 lg:mb-32 transition-all duration-1200 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-16'}`}>
          <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-brand-purple/10 to-brand-pink/10 border border-brand-pink/20 mb-6 backdrop-blur-xl">
            <Zap className="w-4 h-4 text-brand-pink icon-pulse" />
            <span className="font-poppins text-sm text-white/80 font-medium uppercase tracking-[0.15em]">{t.howWeSolve.badge}</span>
            <Sparkles className="w-4 h-4 text-brand-purple icon-pulse" style={{ animationDelay: '0.5s' }} />
          </div>

          <h2 className="font-poppins font-black text-4xl sm:text-5xl md:text-6xl lg:text-7xl mb-6 leading-[1.1]">
            {t.howWeSolve.title} <span className="gradient-text-animated">{t.howWeSolve.titleHighlight}</span>
          </h2>

          <p className="font-poppins text-xl text-white/60 max-w-3xl mx-auto leading-relaxed">
            {t.howWeSolve.subtitle.split(t.howWeSolve.fiveStep).map((part, i, arr) =>
              i < arr.length - 1 ? (
                <span key={i}>
                  {part}
                  <span className="text-brand-pink font-semibold">{t.howWeSolve.fiveStep}</span>
                </span>
              ) : (
                <span key={i}>
                  {part.split(t.howWeSolve.scalable).map((p, j, a) =>
                    j < a.length - 1 ? (
                      <span key={j}>
                        {p}
                        <span className="text-white/80 font-semibold">{t.howWeSolve.scalable}</span>
                      </span>
                    ) : (
                      <span key={j}>{p}</span>
                    )
                  )}
                </span>
              )
            )}
          </p>
        </div>

        <div className="relative max-w-5xl mx-auto">
          <div className="hidden lg:block absolute left-1/2 top-8 bottom-8 -translate-x-1/2 w-px">
            <div className="timeline-spine-premium h-full relative">
              <div className="timeline-pulse-premium absolute inset-0 w-full" />
            </div>
          </div>

          <div className="space-y-12 lg:space-y-0">
            {t.howWeSolve.steps.map((step, index) => {
              const Icon = STEP_ICONS[index];
              const isLeft = index % 2 === 0;
              const delay = 300 + index * 200;

              return (
                <div
                  key={index}
                  className={`relative transition-all duration-1000 ${isInView ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-20 scale-95'} ${index > 0 ? 'lg:mt-32' : ''}`}
                  style={{ transitionDelay: `${delay}ms` }}
                >
                  <div className="hidden lg:block">
                    <div className="flex items-center">
                      <div className={`flex-1 ${isLeft ? 'pr-16' : 'pl-16 order-3'}`}>
                        {isLeft && (
                          <div className="text-right group">
                            <div className="step-card-premium inline-block max-w-lg w-full text-left">
                              <div className="absolute -top-6 -right-8 font-poppins text-[120px] font-black leading-none text-white/[0.02] select-none number-float pointer-events-none">
                                {String(index + 1).padStart(2, '0')}
                              </div>
                              <div className="flex items-start justify-between mb-6">
                                <div className="icon-container-premium flex-shrink-0">
                                  <Icon className="w-7 h-7 text-brand-pink icon-float" />
                                </div>
                                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-brand-pink/10 border border-brand-pink/20 backdrop-blur-sm">
                                  <Sparkles className="w-3 h-3 text-brand-pink" />
                                  <span className="font-poppins text-xs font-bold text-white/90 uppercase tracking-wider">{step.highlight}</span>
                                </div>
                              </div>
                              <h3 className="font-poppins font-bold text-2xl text-white mb-4 leading-tight group-hover:text-brand-pink transition-colors duration-300">{step.title}</h3>
                              <p className="font-poppins text-base text-white/60 leading-relaxed">{step.description}</p>
                            </div>
                          </div>
                        )}
                        {!isLeft && (
                          <div className="group">
                            <div className="step-card-premium inline-block max-w-lg w-full">
                              <div className="absolute -top-6 -left-8 font-poppins text-[120px] font-black leading-none text-white/[0.02] select-none number-float pointer-events-none">
                                {String(index + 1).padStart(2, '0')}
                              </div>
                              <div className="flex items-start justify-between mb-6">
                                <div className="icon-container-premium flex-shrink-0">
                                  <Icon className="w-7 h-7 text-brand-pink icon-float" />
                                </div>
                                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-brand-pink/10 border border-brand-pink/20 backdrop-blur-sm">
                                  <Sparkles className="w-3 h-3 text-brand-pink" />
                                  <span className="font-poppins text-xs font-bold text-white/90 uppercase tracking-wider">{step.highlight}</span>
                                </div>
                              </div>
                              <h3 className="font-poppins font-bold text-2xl text-white mb-4 leading-tight group-hover:text-brand-pink transition-colors duration-300">{step.title}</h3>
                              <p className="font-poppins text-base text-white/60 leading-relaxed">{step.description}</p>
                            </div>
                          </div>
                        )}
                      </div>

                      <div className="timeline-marker-premium flex-shrink-0 order-2 z-20">
                        <div className="w-16 h-16 rounded-full border-2 border-brand-pink/30 bg-[#0a0a12] flex items-center justify-center backdrop-blur-xl marker-glow-refined relative transition-all duration-500 hover:scale-110 hover:border-brand-pink/60">
                          <div className="absolute inset-0 rounded-full bg-brand-pink/10 animate-ping" style={{ animationDuration: '3s' }} />
                          <div className="relative w-3 h-3 rounded-full bg-gradient-to-br from-brand-pink to-brand-purple shadow-glow-pink-refined" />
                        </div>
                      </div>

                      <div className="flex-1" />
                    </div>
                  </div>

                  <div className="lg:hidden">
                    <div className="flex gap-6">
                      <div className="flex-shrink-0 relative pt-1">
                        <div className="w-12 h-12 rounded-full border-2 border-brand-pink/30 bg-[#0a0a12] flex items-center justify-center backdrop-blur-xl marker-glow-refined">
                          <div className="w-2.5 h-2.5 rounded-full bg-gradient-to-br from-brand-pink to-brand-purple shadow-glow-pink-refined" />
                        </div>
                        {index < t.howWeSolve.steps.length - 1 && (
                          <div className="absolute top-12 left-1/2 -translate-x-1/2 w-px h-12 bg-gradient-to-b from-brand-pink/30 to-transparent" />
                        )}
                      </div>

                      <div className="flex-grow pb-4 group">
                        <div className="step-card-premium-mobile">
                          <div className="flex items-start justify-between mb-5">
                            <div className="icon-container-premium-mobile flex-shrink-0">
                              <Icon className="w-6 h-6 text-brand-pink" />
                            </div>
                            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-brand-pink/10 border border-brand-pink/20 backdrop-blur-sm">
                              <Sparkles className="w-3 h-3 text-brand-pink" />
                              <span className="font-poppins text-xs font-bold text-white/90 uppercase tracking-wider">{step.highlight}</span>
                            </div>
                          </div>
                          <h3 className="font-poppins font-bold text-xl text-white mb-3 leading-tight">{step.title}</h3>
                          <p className="font-poppins text-sm text-white/60 leading-relaxed">{step.description}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <div className={`text-center mt-20 lg:mt-28 transition-all duration-1000 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`} style={{ transitionDelay: '1400ms' }}>
          <div className="inline-block relative group">
            <div className="absolute inset-0 bg-gradient-to-r from-brand-pink/20 to-brand-purple/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-300" />
            <a href="#contact" className="relative inline-flex items-center gap-3 px-8 py-4 rounded-2xl bg-gradient-to-r from-brand-pink to-brand-purple font-poppins font-bold text-white hover:shadow-2xl hover:shadow-brand-pink/30 transition-all duration-300 hover:scale-105">
              <Zap className="w-5 h-5" />
              <span>{t.howWeSolve.cta}</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
