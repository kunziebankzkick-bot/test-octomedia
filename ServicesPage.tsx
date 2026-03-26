import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Video,
  Users,
  TrendingUp,
  ArrowRight,
  Check,
  ChevronDown,
  BarChart3,
  Shield,
  Globe2,
  Zap,
  Target,
  Eye,
  Clock,
  DollarSign,
  Star,
} from 'lucide-react';
import SEOHead from '../../components/SEOHead';
import { serviceSchemas, servicesFaqSchema, breadcrumbSchema } from '../../seo/schemas';
import { useInView } from '../../hooks/useInView';
import { useI18n } from '../../i18n/context';
import { SITE_URL } from '../../utils/canonicalUrl';

const STAT_ICONS = [Globe2, Users, BarChart3, Clock];

const STREAMER_FEATURE_ICONS = [Shield, Target, BarChart3, Globe2, Eye, Zap];
const AFFILIATE_FEATURE_ICONS = [DollarSign, Shield, Target, Globe2, BarChart3, Eye];
const INFLUENCER_FEATURE_ICONS = [Users, Target, Shield, BarChart3, Zap, Eye];

function StatBar() {
  const { ref, isInView } = useInView(0.1);
  const { t } = useI18n();
  return (
    <div ref={ref} className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
      {t.servicesPage.stats.map((s, i) => {
        const Icon = STAT_ICONS[i];
        return (
          <div
            key={s.label}
            className={`flex flex-col items-center text-center p-5 rounded-2xl bg-white/[0.03] border border-white/10 transition-all duration-700 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}
            style={{ transitionDelay: `${i * 80}ms` }}
          >
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-brand-purple/20 to-brand-pink/10 flex items-center justify-center mb-3">
              <Icon className="w-5 h-5 text-brand-pink" />
            </div>
            <p className="font-poppins font-bold text-2xl gradient-text leading-tight">{s.value}</p>
            <p className="font-poppins text-xs text-white/50 mt-1">{s.label}</p>
          </div>
        );
      })}
    </div>
  );
}

function FeatureGrid({ features }: { features: { icon: React.ComponentType<{ className?: string }>; text: string }[] }) {
  const { ref, isInView } = useInView(0.1);
  return (
    <div ref={ref} className="grid grid-cols-1 sm:grid-cols-2 gap-3">
      {features.map((f, i) => {
        const Icon = f.icon;
        return (
          <div
            key={i}
            className={`flex items-start gap-3 p-4 rounded-xl bg-white/[0.03] border border-white/[0.06] hover:border-brand-pink/20 transition-all duration-500 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
            style={{ transitionDelay: `${i * 60}ms` }}
          >
            <div className="w-8 h-8 rounded-lg bg-brand-pink/10 flex items-center justify-center flex-shrink-0 mt-0.5">
              <Icon className="w-4 h-4 text-brand-pink" />
            </div>
            <p className="font-poppins text-sm text-white/70 leading-relaxed">{f.text}</p>
          </div>
        );
      })}
    </div>
  );
}

function StepTimeline({ steps }: { steps: { num: string; title: string; desc: string }[] }) {
  const { ref, isInView } = useInView(0.1);
  return (
    <div ref={ref} className="space-y-0">
      {steps.map((step, i) => (
        <div
          key={step.num}
          className={`relative flex gap-5 transition-all duration-700 ${isInView ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-6'}`}
          style={{ transitionDelay: `${i * 100}ms` }}
        >
          <div className="flex flex-col items-center">
            <div className="w-9 h-9 rounded-full bg-gradient-to-br from-brand-purple/30 to-brand-pink/20 border border-brand-pink/30 flex items-center justify-center flex-shrink-0">
              <span className="font-poppins font-bold text-[10px] text-brand-pink">{step.num}</span>
            </div>
            {i < steps.length - 1 && (
              <div className="w-px flex-1 bg-gradient-to-b from-brand-pink/20 to-transparent my-1 min-h-[32px]" />
            )}
          </div>
          <div className="pb-6">
            <p className="font-poppins font-semibold text-sm text-white mb-1">{step.title}</p>
            <p className="font-poppins text-sm text-white/50 leading-relaxed">{step.desc}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

function AccordionSection({
  label,
  children,
  defaultOpen = false,
}: {
  label: string;
  children: React.ReactNode;
  defaultOpen?: boolean;
}) {
  const [open, setOpen] = useState(defaultOpen);
  return (
    <div className="border border-white/10 rounded-xl overflow-hidden">
      <button
        onClick={() => setOpen((v) => !v)}
        className="w-full flex items-center justify-between px-5 py-4 bg-white/[0.03] hover:bg-white/[0.05] transition-colors duration-200"
      >
        <span className="font-poppins font-semibold text-sm text-white/90">{label}</span>
        <ChevronDown
          className={`w-4 h-4 text-brand-pink transition-transform duration-300 ${open ? 'rotate-180' : ''}`}
        />
      </button>
      <div
        className={`overflow-hidden transition-all duration-400 ${open ? 'max-h-[600px] opacity-100' : 'max-h-0 opacity-0'}`}
      >
        <div className="px-5 pb-5 pt-4 bg-white/[0.01]">{children}</div>
      </div>
    </div>
  );
}

function InlineCta({ href, label, note, btnText }: { href: string; label: string; note: string; btnText: string }) {
  return (
    <div className="my-16 relative overflow-hidden rounded-2xl border border-brand-pink/20 bg-gradient-to-r from-brand-purple/10 via-transparent to-brand-pink/10 px-6 py-8 text-center">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(205,128,217,0.06),transparent_70%)]" />
      <div className="relative z-10">
        <Star className="w-5 h-5 text-brand-pink mx-auto mb-3 opacity-60" />
        <p className="font-poppins font-bold text-xl text-white mb-2">{label}</p>
        <p className="font-poppins text-sm text-white/50 mb-5 max-w-md mx-auto">
          {note}
        </p>
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl btn-primary font-poppins font-bold text-sm text-white"
        >
          {btnText}
          <ArrowRight className="w-4 h-4" />
        </a>
      </div>
    </div>
  );
}

function ServiceSection({
  id,
  icon: Icon,
  badge,
  title,
  titleHighlight,
  subtitle,
  positioning,
  features,
  accordion,
  cta,
  ctaHref,
  accentSide = 'left',
  showHowItWorks = false,
  steps,
  howItWorksLabel,
  whatYouGetLabel,
}: {
  id: string;
  icon: React.ComponentType<{ className?: string }>;
  badge: string;
  title: string;
  titleHighlight: string;
  subtitle: string;
  positioning: string;
  features: { icon: React.ComponentType<{ className?: string }>; text: string }[];
  accordion?: { label: string; items: string[] }[];
  cta: string;
  ctaHref: string;
  accentSide?: 'left' | 'right';
  showHowItWorks?: boolean;
  steps?: { num: string; title: string; desc: string }[];
  howItWorksLabel?: string;
  whatYouGetLabel?: string;
}) {
  const { ref, isInView } = useInView(0.08);
  return (
    <section id={id} ref={ref} className="py-20 relative">
      <div
        className={`absolute top-0 bottom-0 w-[300px] opacity-[0.04] blur-[120px] pointer-events-none ${
          accentSide === 'left' ? 'left-0 bg-brand-purple' : 'right-0 bg-brand-pink'
        }`}
      />
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div
          className={`transition-all duration-700 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
        >
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-brand-pink/10 border border-brand-pink/20 mb-5">
            <Icon className="w-3.5 h-3.5 text-brand-pink" />
            <span className="font-poppins text-xs font-semibold text-brand-pink uppercase tracking-wider">{badge}</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-start mb-10">
            <div>
              <h2 className="font-poppins font-bold text-3xl md:text-4xl text-white mb-4 leading-tight">
                {title}{' '}
                <span className="gradient-text">{titleHighlight}</span>
              </h2>
              <p className="font-poppins text-sm text-white/40 uppercase tracking-wider mb-3 font-semibold">{subtitle}</p>
              <p className="font-poppins text-base text-white/65 leading-relaxed mb-7">{positioning}</p>

              <a
                href={ctaHref}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl btn-primary font-poppins font-bold text-sm text-white group"
              >
                {cta}
                <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
              </a>

              {showHowItWorks && steps && (
                <div className="mt-10">
                  <p className="font-poppins text-xs text-white/40 uppercase tracking-wider mb-5 font-semibold">
                    {howItWorksLabel}
                  </p>
                  <StepTimeline steps={steps} />
                </div>
              )}
            </div>

            <div className="space-y-4">
              <p className="font-poppins text-xs text-white/40 uppercase tracking-wider font-semibold mb-4">
                {whatYouGetLabel}
              </p>
              <FeatureGrid features={features} />
            </div>
          </div>

          {accordion && accordion.length > 0 && (
            <div className="space-y-3 max-w-4xl">
              {accordion.map((a, i) => (
                <AccordionSection key={i} label={a.label} defaultOpen={i === 0}>
                  <ul className="space-y-2.5">
                    {a.items.map((item) => (
                      <li key={item} className="flex items-start gap-2.5">
                        <Check className="w-4 h-4 text-brand-pink flex-shrink-0 mt-0.5" />
                        <span className="font-poppins text-sm text-white/65">{item}</span>
                      </li>
                    ))}
                  </ul>
                </AccordionSection>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

export default function ServicesPage() {
  const { ref: heroRef, isInView: heroInView } = useInView(0.1);
  const { t, localePath } = useI18n();
  const sp = t.servicesPage;

  const streamerFeatures = sp.streamerSection.featureTexts.map((text, i) => ({
    icon: STREAMER_FEATURE_ICONS[i],
    text,
  }));
  const affiliateFeatures = sp.affiliateSection.featureTexts.map((text, i) => ({
    icon: AFFILIATE_FEATURE_ICONS[i],
    text,
  }));
  const influencerFeatures = sp.influencerSection.featureTexts.map((text, i) => ({
    icon: INFLUENCER_FEATURE_ICONS[i],
    text,
  }));

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <SEOHead
        title={t.meta.services.title}
        description={t.meta.services.description}
        canonical={`${SITE_URL}/services`}
        jsonLd={[
          ...serviceSchemas,
          servicesFaqSchema,
          breadcrumbSchema([
            { name: 'Home', url: `${SITE_URL}/` },
            { name: 'Services', url: `${SITE_URL}/services` },
          ]),
        ]}
      />

      <section className="relative min-h-[52vh] flex items-end pb-0 pt-32 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_30%_0%,rgba(137,127,217,0.1),transparent_55%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_80%_60%,rgba(205,128,217,0.06),transparent_55%)]" />

        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full pb-16">
          <div
            ref={heroRef}
            className={`transition-all duration-1000 ${heroInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/[0.04] border border-white/10 mb-6">
              <Zap className="w-3.5 h-3.5 text-brand-pink" />
              <span className="font-poppins text-xs font-semibold text-white/60 uppercase tracking-widest">
                {sp.heroBadge}
              </span>
            </div>

            <h1 className="font-poppins font-black text-4xl md:text-5xl lg:text-6xl text-white leading-[1.06] mb-6 max-w-4xl">
              {sp.heroTitle}{' '}
              <span className="gradient-text">{sp.heroTitleHighlight}</span>
            </h1>

            <p className="font-poppins text-lg text-white/55 max-w-2xl leading-relaxed mb-10">
              {sp.heroSubtitle}
            </p>

            <div className="flex flex-wrap gap-3 mb-12">
              {[
                { href: '#streamer-marketing', label: sp.tab1 },
                { href: '#affiliate-marketing', label: sp.tab2 },
                { href: '#influencer-marketing', label: sp.tab3 },
              ].map((tab) => (
                <a
                  key={tab.href}
                  href={tab.href}
                  className="font-poppins text-sm font-medium px-5 py-2.5 rounded-lg bg-white/[0.04] border border-white/10 text-white/70 hover:text-white hover:border-brand-pink/30 hover:bg-brand-pink/5 transition-all duration-200"
                >
                  {tab.label}
                </a>
              ))}
            </div>
          </div>

          <StatBar />
        </div>
      </section>

      <div className="h-px max-w-6xl mx-auto bg-gradient-to-r from-transparent via-white/10 to-transparent" />

      <ServiceSection
        id="streamer-marketing"
        icon={Video}
        badge={sp.streamerSection.badge}
        title={sp.streamerSection.title}
        titleHighlight={sp.streamerSection.titleHighlight}
        subtitle={sp.streamerSection.subtitle}
        positioning={sp.streamerSection.positioning}
        features={streamerFeatures}
        accordion={[
          {
            label: sp.streamerSection.accordion1Label,
            items: sp.streamerSection.accordion1Items,
          },
          {
            label: sp.streamerSection.accordion2Label,
            items: sp.streamerSection.accordion2Items,
          },
        ]}
        cta={sp.services[0].cta}
        ctaHref="https://calendly.com/contact-octomediagroup/30min"
        accentSide="left"
        showHowItWorks
        steps={sp.streamerSection.steps}
        howItWorksLabel={sp.howItWorksLabel}
        whatYouGetLabel={sp.whatYouGetLabel}
      />

      <InlineCta
        href="https://calendly.com/contact-octomediagroup/30min"
        label={sp.inlineCta1}
        note={sp.inlineCtaNote}
        btnText={sp.inlineCtaBtn}
      />

      <div className="h-px max-w-6xl mx-auto bg-gradient-to-r from-transparent via-white/10 to-transparent" />

      <ServiceSection
        id="affiliate-marketing"
        icon={Users}
        badge={sp.affiliateSection.badge}
        title={sp.affiliateSection.title}
        titleHighlight={sp.affiliateSection.titleHighlight}
        subtitle={sp.affiliateSection.subtitle}
        positioning={sp.affiliateSection.positioning}
        features={affiliateFeatures}
        accordion={[
          {
            label: sp.affiliateSection.accordion1Label,
            items: sp.affiliateSection.accordion1Items,
          },
          {
            label: sp.affiliateSection.accordion2Label,
            items: sp.affiliateSection.accordion2Items,
          },
        ]}
        cta={sp.services[1].cta}
        ctaHref="https://calendly.com/contact-octomediagroup/30min"
        accentSide="right"
        whatYouGetLabel={sp.whatYouGetLabel}
      />

      <InlineCta
        href="https://calendly.com/contact-octomediagroup/30min"
        label={sp.inlineCta2}
        note={sp.inlineCtaNote}
        btnText={sp.inlineCtaBtn}
      />

      <div className="h-px max-w-6xl mx-auto bg-gradient-to-r from-transparent via-white/10 to-transparent" />

      <ServiceSection
        id="influencer-marketing"
        icon={TrendingUp}
        badge={sp.influencerSection.badge}
        title={sp.influencerSection.title}
        titleHighlight={sp.influencerSection.titleHighlight}
        subtitle={sp.influencerSection.subtitle}
        positioning={sp.influencerSection.positioning}
        features={influencerFeatures}
        accordion={[
          {
            label: sp.influencerSection.accordion1Label,
            items: sp.influencerSection.accordion1Items,
          },
          {
            label: sp.influencerSection.accordion2Label,
            items: sp.influencerSection.accordion2Items,
          },
        ]}
        cta={sp.services[2].cta}
        ctaHref="https://calendly.com/contact-octomediagroup/30min"
        accentSide="left"
        whatYouGetLabel={sp.whatYouGetLabel}
      />

      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-brand-purple/[0.04] to-transparent" />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center relative z-10">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/[0.04] border border-white/10 mb-6">
            <Star className="w-3.5 h-3.5 text-brand-pink" />
            <span className="font-poppins text-xs font-semibold text-white/50 uppercase tracking-widest">
              {sp.closingBadge}
            </span>
          </div>
          <h2 className="font-poppins font-black text-3xl md:text-4xl text-white mb-5 leading-tight">
            {sp.closing.title}
          </h2>
          <p className="font-poppins text-base text-white/55 max-w-2xl mx-auto mb-9 leading-relaxed">
            {sp.closing.body}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://calendly.com/contact-octomediagroup/30min"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl btn-primary font-poppins font-bold text-sm text-white group"
            >
              {sp.closing.cta1}
              <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
            </a>
            <Link
              to={localePath('/streamers')}
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-white/[0.04] border border-white/15 font-poppins font-semibold text-sm text-white/80 hover:text-white hover:bg-white/[0.07] hover:border-white/25 transition-all duration-200"
            >
              {sp.closing.cta2}
            </Link>
          </div>

          <div className="mt-10 pt-10 border-t border-white/[0.06] grid grid-cols-2 md:grid-cols-4 gap-6">
            {sp.trustSignals.map((g) => (
              <div key={g} className="flex items-center justify-center gap-2">
                <Check className="w-3.5 h-3.5 text-brand-pink flex-shrink-0" />
                <span className="font-poppins text-xs text-white/50">{g}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
