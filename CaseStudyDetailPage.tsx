import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import {
  ArrowRight, ChevronRight, Globe, Tv, Users, DollarSign,
  UserCheck, TrendingUp, Target, Zap, Clock, User, Calendar,
  CheckCircle, ArrowUpRight, BarChart3, Layers
} from 'lucide-react';
import SEOHead from '../../components/SEOHead';
import { supabase } from '../../lib/supabase';
import type { CaseStudy } from '../../lib/supabase';
import {
  SLUG_TO_BRAND,
  CASE_STUDY_CONTENT,
  CASE_STUDY_ORDER,
  LOGO_MAP,
} from './caseStudyData';

const CALENDLY = 'https://calendly.com/contact-octomediagroup/30min';

function formatNumber(n: number | null | undefined): string {
  if (n === null || n === undefined) return '—';
  if (n >= 1_000_000) return `${(n / 1_000_000).toFixed(1)}M+`;
  if (n >= 1_000) return `${(n / 1_000).toFixed(0)}K+`;
  return n.toLocaleString();
}

function formatBudget(n: number): string {
  if (n >= 1_000_000) return `$${(n / 1_000_000).toFixed(1)}M`;
  if (n >= 1_000) return `$${(n / 1_000).toFixed(0)}K`;
  return `$${n.toLocaleString()}`;
}

interface CtaProps {
  label: string;
  sublabel?: string;
  variant?: 'primary' | 'secondary';
}

function CtaBlock({ label, sublabel, variant = 'primary' }: CtaProps) {
  if (variant === 'secondary') {
    return (
      <div className="rounded-2xl border border-white/10 bg-white/3 p-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div>
          <p className="text-white font-poppins font-semibold text-base">{label}</p>
          {sublabel && <p className="text-white/40 font-poppins text-sm mt-1">{sublabel}</p>}
        </div>
        <a
          href={CALENDLY}
          target="_blank"
          rel="noopener noreferrer"
          className="shrink-0 inline-flex items-center gap-2 px-6 py-3 rounded-full font-poppins text-sm font-semibold text-white border border-cyan-400/40 hover:border-cyan-400 hover:bg-cyan-400/10 transition-all duration-300 group"
        >
          <span>Book a Call</span>
          <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
        </a>
      </div>
    );
  }

  return (
    <div className="relative rounded-2xl overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-cyan-950/60 via-blue-950/40 to-cyan-950/60" />
      <div className="absolute inset-0 border border-cyan-400/15 rounded-2xl" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan-400/40 to-transparent" />
      <div className="relative p-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
        <div>
          <p className="text-white font-poppins font-bold text-lg lg:text-xl mb-2">{label}</p>
          {sublabel && <p className="text-white/50 font-poppins text-sm">{sublabel}</p>}
        </div>
        <a
          href={CALENDLY}
          target="_blank"
          rel="noopener noreferrer"
          className="shrink-0 inline-flex items-center gap-2 px-7 py-3.5 rounded-full font-poppins text-sm font-semibold text-white bg-gradient-to-r from-cyan-500 via-blue-500 to-blue-600 hover:shadow-lg hover:shadow-cyan-500/30 hover:scale-105 active:scale-95 transition-all duration-300 relative overflow-hidden group whitespace-nowrap"
        >
          <span className="absolute inset-0 bg-gradient-to-r from-blue-600 via-blue-500 to-cyan-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          <span className="relative z-10">Schedule Free Consultation</span>
          <ArrowRight size={14} className="relative z-10 transition-transform group-hover:translate-x-1" />
        </a>
      </div>
    </div>
  );
}

interface FunnelStep {
  label: string;
  value: string;
  sub?: string;
  color: string;
}

function FunnelVisualization({ steps }: { steps: FunnelStep[] }) {
  return (
    <div className="relative">
      <div className="flex flex-col gap-1">
        {steps.map((step, i) => {
          const widths = ['w-full', 'w-11/12', 'w-9/12', 'w-7/12'];
          return (
            <div key={step.label} className="flex items-center gap-4">
              <div className={`${widths[Math.min(i, widths.length - 1)]} relative`}>
                <div className={`h-14 rounded-xl ${step.color} flex items-center justify-between px-5 transition-all duration-300`}>
                  <span className="text-white font-poppins font-semibold text-sm">{step.label}</span>
                  <div className="text-right">
                    <span className="text-white font-poppins font-bold text-base">{step.value}</span>
                    {step.sub && <span className="text-white/60 font-poppins text-xs ml-2">{step.sub}</span>}
                  </div>
                </div>
                {i < steps.length - 1 && (
                  <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 z-10">
                    <ChevronRight size={16} className="text-white/30 rotate-90" />
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

interface KpiCardProps {
  icon: React.ReactNode;
  label: string;
  value: string;
  sub?: string;
  color?: string;
}

function KpiCard({ icon, label, value, sub, color = 'text-cyan-400' }: KpiCardProps) {
  return (
    <div className="rounded-2xl border border-white/8 bg-white/3 p-5 hover:border-white/15 hover:bg-white/5 transition-all duration-300">
      <div className={`mb-3 ${color}`}>{icon}</div>
      <p className={`font-poppins font-bold text-2xl lg:text-3xl mb-1 ${color}`}>{value}</p>
      <p className="text-white/60 font-poppins text-sm font-medium">{label}</p>
      {sub && <p className="text-white/30 font-poppins text-xs mt-1">{sub}</p>}
    </div>
  );
}

function ConversionBar({ label, value, max = 100, color = 'bg-cyan-500' }: { label: string; value: number; max?: number; color?: string }) {
  const pct = Math.min((value / max) * 100, 100);
  return (
    <div className="space-y-2">
      <div className="flex justify-between items-center">
        <span className="text-white/60 font-poppins text-sm">{label}</span>
        <span className="text-white font-poppins font-semibold text-sm">{value}%</span>
      </div>
      <div className="h-2 rounded-full bg-white/8 overflow-hidden">
        <div
          className={`h-full rounded-full ${color} transition-all duration-1000`}
          style={{ width: `${pct}%` }}
        />
      </div>
    </div>
  );
}

function RelatedCard({ slug }: { slug: string }) {
  const brand = SLUG_TO_BRAND[slug];
  if (!brand) return null;
  const content = CASE_STUDY_CONTENT[brand];
  const logoSrc = LOGO_MAP[brand];
  const idx = CASE_STUDY_ORDER.indexOf(brand);

  return (
    <Link
      to={`/case-studies/${slug}`}
      className="group rounded-2xl border border-white/8 bg-white/3 p-6 hover:border-cyan-400/20 hover:bg-white/5 transition-all duration-300 flex flex-col gap-4"
    >
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center overflow-hidden p-1.5 shrink-0">
          {logoSrc ? (
            <img src={logoSrc} alt={brand} className="max-w-full max-h-full object-contain" />
          ) : (
            <span className="text-cyan-300 font-poppins font-bold text-xs">
              {brand.slice(0, 2).toUpperCase()}
            </span>
          )}
        </div>
        <div>
          <p className="text-cyan-400/60 font-poppins text-xs font-semibold uppercase tracking-widest">
            Case Study {String(idx + 1).padStart(2, '0')}
          </p>
          <p className="text-white font-poppins font-semibold text-sm">{brand}</p>
        </div>
      </div>
      <p className="text-white/40 font-poppins text-xs leading-relaxed line-clamp-2">
        {content?.previewSummary}
      </p>
      <div className="flex items-center gap-1 text-cyan-400 font-poppins text-xs font-semibold group-hover:gap-2 transition-all duration-300">
        <span>View Case Study</span>
        <ArrowUpRight size={12} />
      </div>
    </Link>
  );
}

export default function CaseStudyDetailPage() {
  const { slug } = useParams<{ slug: string }>();
  const brand = slug ? SLUG_TO_BRAND[slug] : undefined;
  const content = brand ? CASE_STUDY_CONTENT[brand] : undefined;

  const [study, setStudy] = useState<CaseStudy | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!brand) { setLoading(false); return; }
    let cancelled = false;
    supabase
      .from('case_studies')
      .select('*')
      .eq('brand', brand)
      .maybeSingle()
      .then(({ data }) => {
        if (!cancelled) {
          setStudy(data);
          setLoading(false);
        }
      })
      .catch(() => {
        if (!cancelled) setLoading(false);
      });
    return () => { cancelled = true; };
  }, [brand]);

  if (!brand || !content) {
    return (
      <main className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <p className="text-white/40 font-poppins text-lg">Case study not found.</p>
          <Link to="/case-studies" className="mt-4 inline-flex items-center gap-2 text-cyan-400 font-poppins text-sm hover:text-cyan-300 transition-colors">
            <ChevronRight size={14} className="rotate-180" />
            Back to Case Studies
          </Link>
        </div>
      </main>
    );
  }

  const idx = CASE_STUDY_ORDER.indexOf(brand);

  const funnelSteps: FunnelStep[] = study ? [
    ...(study.impressions ? [{ label: 'Total Impressions', value: formatNumber(study.impressions), color: 'bg-blue-600/60' }] : []),
    ...(study.clicks ? [{ label: 'Clicks / Link Visits', value: formatNumber(study.clicks), color: 'bg-blue-500/60' }] : []),
    { label: 'New Registrations', value: formatNumber(study.registrations), sub: '100%', color: 'bg-cyan-600/60' },
    { label: 'First-Time Deposits (FTDs)', value: formatNumber(study.ftds), sub: `${study.reg_to_ftd_rate}% rate`, color: 'bg-emerald-600/70' },
  ] : [];

  const kpiCards: KpiCardProps[] = study ? [
    { icon: <Users size={20} />, label: 'Influencers & Streamers', value: `${study.influencer_count}`, color: 'text-blue-400' },
    { icon: <DollarSign size={20} />, label: 'Campaign Budget', value: formatBudget(study.budget), color: 'text-amber-400' },
    { icon: <UserCheck size={20} />, label: 'First-Time Deposits', value: formatNumber(study.ftds), color: 'text-emerald-400' },
    { icon: <Target size={20} />, label: 'Cost Per FTD (CPA)', value: `~$${study.cpa}`, color: 'text-cyan-400' },
    { icon: <TrendingUp size={20} />, label: 'Reg → FTD Rate', value: `${study.reg_to_ftd_rate}%`, color: 'text-rose-400' },
    { icon: <Globe size={20} />, label: 'Primary Market', value: study.geo, color: 'text-sky-400' },
  ] : [];

  const pageUrl = `https://octomedia.agency/case-studies/${content.slug}`;

  const jsonLd = [
    {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://octomedia.agency/' },
        { '@type': 'ListItem', position: 2, name: 'Case Studies', item: 'https://octomedia.agency/case-studies' },
        { '@type': 'ListItem', position: 3, name: brand, item: pageUrl },
      ],
    },
    {
      '@context': 'https://schema.org',
      '@type': 'Article',
      headline: content.title,
      description: content.seo.description,
      url: pageUrl,
      datePublished: content.publishedDate,
      author: {
        '@type': 'Person',
        name: 'Alexei Volkov',
      },
      publisher: {
        '@type': 'Organization',
        name: 'Octo Media Group',
        url: 'https://octomedia.agency',
        logo: { '@type': 'ImageObject', url: 'https://octomedia.agency/image.png' },
      },
      image: `https://octomedia.agency${content.logoSrc}`,
      mainEntityOfPage: { '@type': 'WebPage', '@id': pageUrl },
      keywords: 'iGaming influencer marketing, casino streamer marketing, FTD acquisition, player acquisition, betting influencer campaigns',
    },
  ];

  return (
    <>
      <SEOHead
        title={content.seo.title}
        description={content.seo.description}
        canonical={pageUrl}
        ogType="article"
        jsonLd={jsonLd}
      />

      <main className="min-h-screen">
        {/* Hero */}
        <section className="relative pt-28 pb-16 px-4 overflow-hidden">
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-1/4 left-1/3 w-[600px] h-[400px] rounded-full bg-cyan-500/4 blur-[120px]" />
            <div className="absolute bottom-0 right-1/4 w-[400px] h-[300px] rounded-full bg-blue-600/4 blur-[100px]" />
          </div>
          <div className="relative z-10 max-w-5xl mx-auto">
            {/* Breadcrumb */}
            <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-white/30 font-poppins text-xs mb-8 flex-wrap">
              <Link to="/" className="hover:text-white/60 transition-colors">Home</Link>
              <ChevronRight size={12} className="text-white/20" />
              <Link to="/case-studies" className="hover:text-white/60 transition-colors">Case Studies</Link>
              <ChevronRight size={12} className="text-white/20" />
              <span className="text-white/50">{brand}</span>
            </nav>

            <div className="flex flex-col lg:flex-row lg:items-start gap-8">
              <div className="flex-1">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center overflow-hidden p-2 shrink-0">
                    <img src={content.logoSrc} alt={`${brand} logo`} className="max-w-full max-h-full object-contain filter brightness-110" />
                  </div>
                  <div>
                    <p className="text-cyan-400/70 text-xs font-poppins font-semibold uppercase tracking-widest mb-1">
                      Case Study {String(idx + 1).padStart(2, '0')}
                    </p>
                    <p className="text-white/60 font-poppins font-medium text-sm">{brand}</p>
                  </div>
                </div>

                <h1 className="font-poppins font-bold text-3xl sm:text-4xl lg:text-5xl text-white leading-tight mb-6">
                  {content.title}
                </h1>

                <div className="flex flex-wrap items-center gap-4 text-white/35 font-poppins text-sm mb-8">
                  <span className="flex items-center gap-1.5">
                    <User size={13} className="text-white/25" />
                    Alexei Volkov
                  </span>
                  <span className="w-px h-4 bg-white/15" />
                  <span className="flex items-center gap-1.5">
                    <Calendar size={13} className="text-white/25" />
                    {content.publishedDate}
                  </span>
                  <span className="w-px h-4 bg-white/15" />
                  <span className="flex items-center gap-1.5">
                    <Clock size={13} className="text-white/25" />
                    {content.readingTime}
                  </span>
                  {study && (
                    <>
                      <span className="w-px h-4 bg-white/15" />
                      <span className="px-3 py-1 rounded-full text-xs font-semibold bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                        {study.geo}
                      </span>
                      <span className="px-3 py-1 rounded-full text-xs font-semibold bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">
                        {study.platform}
                      </span>
                    </>
                  )}
                </div>

                {/* Hero stat pills */}
                {study && (
                  <div className="flex flex-wrap gap-3">
                    <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-500/10 border border-emerald-500/20">
                      <TrendingUp size={14} className="text-emerald-400" />
                      <span className="text-emerald-300 font-poppins font-semibold text-sm">{formatNumber(study.ftds)} FTDs</span>
                    </div>
                    <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-500/10 border border-cyan-500/20">
                      <Target size={14} className="text-cyan-400" />
                      <span className="text-cyan-300 font-poppins font-semibold text-sm">~${study.cpa} CPA</span>
                    </div>
                    <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20">
                      <BarChart3 size={14} className="text-blue-400" />
                      <span className="text-blue-300 font-poppins font-semibold text-sm">{study.reg_to_ftd_rate}% Reg→FTD</span>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </section>

        <div className="max-w-5xl mx-auto px-4 pb-24 space-y-16">

          {/* Campaign Overview */}
          <section>
            <div className="flex items-center gap-3 mb-5">
              <div className="w-8 h-8 rounded-lg bg-cyan-400/10 border border-cyan-400/20 flex items-center justify-center">
                <Layers size={15} className="text-cyan-400" />
              </div>
              <h2 className="text-white font-poppins font-bold text-xl">Campaign Overview</h2>
            </div>
            <p className="text-white/55 font-poppins text-base leading-relaxed">
              {content.overview}
            </p>
          </section>

          {/* CTA 1 — after overview */}
          <CtaBlock
            label="Want results like these for your brand?"
            sublabel="Book a free 30-minute strategy session with our iGaming acquisition team."
            variant="primary"
          />

          {/* Market Challenge */}
          <section>
            <div className="flex items-center gap-3 mb-5">
              <div className="w-8 h-8 rounded-lg bg-rose-400/10 border border-rose-400/20 flex items-center justify-center">
                <Target size={15} className="text-rose-400" />
              </div>
              <h2 className="text-white font-poppins font-bold text-xl">Market Challenge</h2>
            </div>
            <div className="rounded-2xl border border-white/8 bg-white/2 p-6 lg:p-8">
              <p className="text-white/55 font-poppins text-base leading-relaxed">
                {content.challenge}
              </p>
            </div>
          </section>

          {/* Strategy & Execution */}
          <section>
            <div className="flex items-center gap-3 mb-5">
              <div className="w-8 h-8 rounded-lg bg-blue-400/10 border border-blue-400/20 flex items-center justify-center">
                <Zap size={15} className="text-blue-400" />
              </div>
              <h2 className="text-white font-poppins font-bold text-xl">Strategy & Execution</h2>
            </div>
            <p className="text-white/55 font-poppins text-base leading-relaxed mb-6">
              {content.strategy}
            </p>

            {/* Strategy breakdown cards */}
            {study && (
              <div className="grid sm:grid-cols-3 gap-4">
                <div className="rounded-xl border border-white/8 bg-white/2 p-5 text-center">
                  <Users size={20} className="text-blue-400 mx-auto mb-3" />
                  <p className="text-white font-poppins font-bold text-2xl mb-1">{study.influencer_count}</p>
                  <p className="text-white/40 font-poppins text-xs">Streamers Deployed</p>
                </div>
                <div className="rounded-xl border border-white/8 bg-white/2 p-5 text-center">
                  <Tv size={20} className="text-cyan-400 mx-auto mb-3" />
                  <p className="text-white font-poppins font-bold text-lg mb-1">{study.platform}</p>
                  <p className="text-white/40 font-poppins text-xs">Platforms</p>
                </div>
                <div className="rounded-xl border border-white/8 bg-white/2 p-5 text-center">
                  <Globe size={20} className="text-emerald-400 mx-auto mb-3" />
                  <p className="text-white font-poppins font-bold text-lg mb-1">{study.geo}</p>
                  <p className="text-white/40 font-poppins text-xs">Target GEO</p>
                </div>
              </div>
            )}
          </section>

          {/* CTA 2 — mid-page */}
          <CtaBlock
            label="Learn how streamer marketing can scale your brand"
            sublabel="We build performance-focused iGaming influencer campaigns across Twitch, Kick, and YouTube."
            variant="secondary"
          />

          {/* Graphical Walkthrough */}
          {study && (
            <section>
              <div className="flex items-center gap-3 mb-8">
                <div className="w-8 h-8 rounded-lg bg-amber-400/10 border border-amber-400/20 flex items-center justify-center">
                  <BarChart3 size={15} className="text-amber-400" />
                </div>
                <h2 className="text-white font-poppins font-bold text-xl">Campaign Performance Breakdown</h2>
              </div>

              {/* KPI Grid */}
              <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 mb-10">
                {kpiCards.map((card) => (
                  <KpiCard key={card.label} {...card} />
                ))}
              </div>

              {/* Conversion Funnel */}
              {funnelSteps.length > 0 && (
                <div className="rounded-2xl border border-white/8 bg-white/2 p-6 lg:p-8 mb-8">
                  <h3 className="text-white/70 font-poppins font-semibold text-sm uppercase tracking-widest mb-6 flex items-center gap-2">
                    <TrendingUp size={14} className="text-cyan-400" />
                    Acquisition Funnel
                  </h3>
                  <FunnelVisualization steps={funnelSteps} />
                </div>
              )}

              {/* Conversion Rate Bars */}
              <div className="rounded-2xl border border-white/8 bg-white/2 p-6 lg:p-8">
                <h3 className="text-white/70 font-poppins font-semibold text-sm uppercase tracking-widest mb-6 flex items-center gap-2">
                  <BarChart3 size={14} className="text-cyan-400" />
                  Conversion Performance vs. Industry Benchmarks
                </h3>
                <div className="space-y-5">
                  <ConversionBar
                    label={`${brand} — Reg → FTD Rate`}
                    value={study.reg_to_ftd_rate}
                    max={35}
                    color="bg-cyan-500"
                  />
                  <ConversionBar
                    label="iGaming Industry Average Reg → FTD Rate"
                    value={8}
                    max={35}
                    color="bg-white/20"
                  />
                  <ConversionBar
                    label="Top-Quartile iGaming Campaigns"
                    value={15}
                    max={35}
                    color="bg-blue-500/60"
                  />
                </div>
                <p className="text-white/25 font-poppins text-xs mt-4">
                  Industry benchmark data sourced from Octomedia internal portfolio analysis across 40+ campaigns (2024–2025).
                </p>
              </div>
            </section>
          )}

          {/* Results & Performance Analysis */}
          <section>
            <div className="flex items-center gap-3 mb-5">
              <div className="w-8 h-8 rounded-lg bg-emerald-400/10 border border-emerald-400/20 flex items-center justify-center">
                <TrendingUp size={15} className="text-emerald-400" />
              </div>
              <h2 className="text-white font-poppins font-bold text-xl">Results & Performance Analysis</h2>
            </div>

            <div className="rounded-2xl border border-emerald-500/15 bg-emerald-500/4 p-6 lg:p-8 mb-6">
              <p className="text-white/60 font-poppins text-base leading-relaxed">
                {content.results}
              </p>
            </div>

            {/* Performance highlight quote */}
            {study && (
              <div className="relative rounded-2xl border-l-4 border-cyan-400 bg-white/2 p-6">
                <div className="absolute top-4 right-4 text-cyan-400/20">
                  <BarChart3 size={32} />
                </div>
                <p className="text-cyan-300 font-poppins font-bold text-2xl lg:text-3xl mb-2">
                  {formatNumber(study.ftds)} verified FTDs
                </p>
                <p className="text-white/40 font-poppins text-sm">
                  Acquired at <span className="text-white/70 font-semibold">~${study.cpa} CPA</span> with a{' '}
                  <span className="text-white/70 font-semibold">{study.reg_to_ftd_rate}% registration-to-deposit rate</span> — on a total budget of{' '}
                  <span className="text-white/70 font-semibold">{formatBudget(study.budget)}</span>.
                </p>
              </div>
            )}
          </section>

          {/* CTA 3 — after results */}
          <CtaBlock
            label="Book your acquisition strategy session"
            sublabel="We'll analyse your target markets, budget, and goals — then build a campaign plan around measurable FTD outcomes."
            variant="primary"
          />

          {/* Key Takeaways */}
          <section>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-8 h-8 rounded-lg bg-cyan-400/10 border border-cyan-400/20 flex items-center justify-center">
                <CheckCircle size={15} className="text-cyan-400" />
              </div>
              <h2 className="text-white font-poppins font-bold text-xl">Key Takeaways</h2>
            </div>
            <div className="grid sm:grid-cols-2 gap-4">
              {content.takeaways.map((item, i) => (
                <div
                  key={i}
                  className="flex items-start gap-3 rounded-xl border border-white/6 bg-white/2 p-5 hover:border-white/12 hover:bg-white/4 transition-all duration-300"
                >
                  <div className="shrink-0 mt-0.5 w-5 h-5 rounded-full bg-cyan-400/15 border border-cyan-400/30 flex items-center justify-center">
                    <span className="text-cyan-400 font-poppins font-bold text-xs">{i + 1}</span>
                  </div>
                  <p className="text-white/60 font-poppins text-sm leading-relaxed">{item}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Internal Links */}
          <section className="rounded-2xl border border-white/6 bg-white/2 p-6 lg:p-8">
            <h3 className="text-white/40 font-poppins font-semibold text-xs uppercase tracking-widest mb-4">Explore Further</h3>
            <div className="flex flex-wrap gap-3">
              <Link to="/services" className="inline-flex items-center gap-1.5 text-cyan-400/70 hover:text-cyan-300 font-poppins text-sm transition-colors group">
                <span>Our Services</span>
                <ArrowUpRight size={12} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Link>
              <span className="text-white/20">·</span>
              <Link to="/case-studies" className="inline-flex items-center gap-1.5 text-cyan-400/70 hover:text-cyan-300 font-poppins text-sm transition-colors group">
                <span>All Case Studies</span>
                <ArrowUpRight size={12} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Link>
              <span className="text-white/20">·</span>
              <Link to="/" className="inline-flex items-center gap-1.5 text-cyan-400/70 hover:text-cyan-300 font-poppins text-sm transition-colors group">
                <span>Homepage</span>
                <ArrowUpRight size={12} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Link>
              <span className="text-white/20">·</span>
              <Link to="/resources" className="inline-flex items-center gap-1.5 text-cyan-400/70 hover:text-cyan-300 font-poppins text-sm transition-colors group">
                <span>Resources</span>
                <ArrowUpRight size={12} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Link>
            </div>
          </section>

          {/* Related Case Studies */}
          {content.relatedSlugs.length > 0 && (
            <section>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-8 h-8 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center">
                  <ArrowRight size={15} className="text-white/50" />
                </div>
                <h2 className="text-white font-poppins font-bold text-xl">Related Case Studies</h2>
              </div>
              <div className="grid sm:grid-cols-3 gap-4">
                {content.relatedSlugs.map((s) => (
                  <RelatedCard key={s} slug={s} />
                ))}
              </div>
            </section>
          )}

          {/* Final CTA */}
          <section className="relative rounded-3xl overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-cyan-950/60 via-blue-950/40 to-[#0a0a12]" />
            <div className="absolute inset-0 border border-cyan-400/10 rounded-3xl" />
            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan-400/30 to-transparent" />
            <div className="relative p-10 lg:p-14 text-center">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-emerald-500/20 bg-emerald-500/5 mb-6">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <span className="text-emerald-300 font-poppins text-xs font-semibold uppercase tracking-widest">Your Campaign Could Be Next</span>
              </div>
              <h2 className="font-poppins font-bold text-3xl lg:text-4xl text-white leading-tight mb-4">
                Ready to Scale Your iGaming Brand{' '}
                <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                  With Streamers?
                </span>
              </h2>
              <p className="text-white/45 font-poppins text-base leading-relaxed max-w-2xl mx-auto mb-8">
                Whether you are entering a new market, launching a new brand, or scaling an existing acquisition programme, Octomedia delivers verified streamer campaigns with transparent CPAs and measurable FTD outcomes.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href={CALENDLY}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-8 py-4 rounded-full font-poppins text-base font-semibold text-white bg-gradient-to-r from-cyan-500 via-blue-500 to-blue-600 hover:shadow-xl hover:shadow-cyan-500/30 hover:scale-105 active:scale-95 transition-all duration-300 relative overflow-hidden group"
                >
                  <span className="absolute inset-0 bg-gradient-to-r from-blue-600 via-blue-500 to-cyan-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <span className="relative z-10">Schedule a Free Consultation Call</span>
                  <ArrowRight size={16} className="relative z-10 transition-transform group-hover:translate-x-1" />
                </a>
                <Link
                  to="/case-studies"
                  className="inline-flex items-center gap-2 px-8 py-4 rounded-full font-poppins text-base font-semibold text-white/60 border border-white/15 hover:border-white/30 hover:text-white hover:bg-white/5 transition-all duration-300"
                >
                  View All Case Studies
                </Link>
              </div>
            </div>
          </section>

          {loading && (
            <div className="flex items-center justify-center py-8">
              <div className="w-6 h-6 border-2 border-cyan-400/30 border-t-cyan-400 rounded-full animate-spin" />
            </div>
          )}
        </div>
      </main>
    </>
  );
}
