import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowRight, TrendingUp, Users, DollarSign, Award,
  ChevronDown, Target, Globe, Tv, BarChart3
} from 'lucide-react';
import SEOHead from '../../components/SEOHead';
import { supabase } from '../../lib/supabase';
import type { CaseStudy } from '../../lib/supabase';
import { CASE_STUDY_CONTENT, CASE_STUDY_ORDER, LOGO_MAP } from './caseStudyData';

const CALENDLY = 'https://calendly.com/contact-octomediagroup/30min';

const AGGREGATE_STATS = [
  { value: '$2.5M+', label: 'Total Campaign Budget Managed', icon: <DollarSign size={20} />, color: 'text-cyan-400' },
  { value: '113K+', label: 'First-Time Depositors Acquired', icon: <TrendingUp size={20} />, color: 'text-emerald-400' },
  { value: '500+', label: 'Streamers & Influencers Deployed', icon: <Users size={20} />, color: 'text-blue-400' },
  { value: '~$72', label: 'Average CPA Across All Campaigns', icon: <Award size={20} />, color: 'text-amber-400' },
];

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

interface CaseStudyGridCardProps {
  study: CaseStudy;
  index: number;
}

function CaseStudyGridCard({ study, index }: CaseStudyGridCardProps) {
  const content = CASE_STUDY_CONTENT[study.brand];
  const logoSrc = LOGO_MAP[study.brand];
  const slug = content?.slug;

  const initials = study.brand.split(' ').map((w: string) => w[0]).join('').slice(0, 2).toUpperCase();

  return (
    <article className="group relative rounded-3xl border border-white/8 bg-[#111118]/80 backdrop-blur-sm overflow-hidden hover:border-cyan-400/20 hover:shadow-[0_0_60px_rgba(34,211,238,0.05)] transition-all duration-500 flex flex-col">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan-400/20 to-transparent group-hover:via-cyan-400/40 transition-all duration-500" />

      <div className="p-7 flex flex-col flex-1">
        <div className="flex items-start justify-between gap-4 mb-5">
          <div className="flex items-center gap-3">
            <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center overflow-hidden p-2 shrink-0">
              {logoSrc ? (
                <img src={logoSrc} alt={`${study.brand} logo`} className="max-w-full max-h-full object-contain filter brightness-110" />
              ) : (
                <span className="text-cyan-300 font-poppins font-bold text-lg">{initials}</span>
              )}
            </div>
            <div>
              <p className="text-cyan-400/60 font-poppins text-xs font-semibold uppercase tracking-widest mb-0.5">
                Case Study {String(index + 1).padStart(2, '0')}
              </p>
              <h2 className="text-white font-poppins font-bold text-base leading-snug">{study.brand}</h2>
            </div>
          </div>
          <span className="shrink-0 px-2.5 py-1 rounded-full text-xs font-poppins font-semibold bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
            {study.geo}
          </span>
        </div>

        {content && (
          <h3 className="text-white/80 font-poppins font-semibold text-sm leading-snug mb-3 line-clamp-2">
            {content.title}
          </h3>
        )}

        {content && (
          <p className="text-white/40 font-poppins text-xs leading-relaxed mb-5 line-clamp-3">
            {content.previewSummary}
          </p>
        )}

        <div className="grid grid-cols-3 gap-2 mb-6">
          <div className="rounded-xl border border-white/6 bg-white/2 p-3 text-center">
            <div className="flex justify-center mb-1">
              <TrendingUp size={13} className="text-emerald-400" />
            </div>
            <p className="text-emerald-400 font-poppins font-bold text-sm leading-none mb-0.5">{formatNumber(study.ftds)}</p>
            <p className="text-white/30 font-poppins text-xs">FTDs</p>
          </div>
          <div className="rounded-xl border border-white/6 bg-white/2 p-3 text-center">
            <div className="flex justify-center mb-1">
              <Target size={13} className="text-cyan-400" />
            </div>
            <p className="text-cyan-400 font-poppins font-bold text-sm leading-none mb-0.5">~${study.cpa}</p>
            <p className="text-white/30 font-poppins text-xs">CPA</p>
          </div>
          <div className="rounded-xl border border-white/6 bg-white/2 p-3 text-center">
            <div className="flex justify-center mb-1">
              <BarChart3 size={13} className="text-blue-400" />
            </div>
            <p className="text-blue-400 font-poppins font-bold text-sm leading-none mb-0.5">{study.reg_to_ftd_rate}%</p>
            <p className="text-white/30 font-poppins text-xs">Reg→FTD</p>
          </div>
        </div>

        <div className="flex flex-wrap items-center gap-3 text-white/30 font-poppins text-xs mb-6">
          <span className="flex items-center gap-1">
            <Tv size={11} className="text-white/20" />
            {study.platform}
          </span>
          <span className="w-px h-3 bg-white/10" />
          <span className="flex items-center gap-1">
            <Users size={11} className="text-white/20" />
            {study.influencer_count} creators
          </span>
          <span className="w-px h-3 bg-white/10" />
          <span className="flex items-center gap-1">
            <DollarSign size={11} className="text-white/20" />
            {formatBudget(study.budget)} budget
          </span>
          {study.campaign_length && (
            <>
              <span className="w-px h-3 bg-white/10" />
              <span className="flex items-center gap-1">
                <Globe size={11} className="text-white/20" />
                {study.campaign_length}
              </span>
            </>
          )}
        </div>

        <div className="mt-auto">
          {slug ? (
            <Link
              to={`/case-studies/${slug}`}
              className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 rounded-full font-poppins text-sm font-semibold text-white bg-gradient-to-r from-cyan-500/15 via-blue-500/15 to-blue-600/15 border border-cyan-400/20 hover:border-cyan-400/50 hover:from-cyan-500/25 hover:via-blue-500/25 hover:to-blue-600/25 transition-all duration-300 group/btn"
            >
              <span>View Case Study</span>
              <ArrowRight size={14} className="transition-transform duration-300 group-hover/btn:translate-x-1" />
            </Link>
          ) : (
            <a
              href={CALENDLY}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 rounded-full font-poppins text-sm font-semibold text-white/50 border border-white/10 hover:border-white/20 hover:text-white/70 transition-all duration-300"
            >
              Contact for Details
            </a>
          )}
        </div>
      </div>
    </article>
  );
}

function HeroSection() {
  return (
    <section className="relative min-h-[80vh] flex flex-col items-center justify-center pt-28 pb-16 px-4 overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] rounded-full bg-cyan-500/5 blur-[120px] animate-hero-orb-drift" />
        <div
          className="absolute bottom-1/3 right-1/4 w-[400px] h-[400px] rounded-full bg-blue-600/5 blur-[100px]"
          style={{ animationDuration: '16s', animationName: 'hero-orb-drift', animationIterationCount: 'infinite', animationTimingFunction: 'ease-in-out' }}
        />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto text-center">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-cyan-400/20 bg-cyan-400/5 mb-8">
          <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
          <span className="text-cyan-300 font-poppins text-xs font-semibold uppercase tracking-widest">
            Real Results From Real Campaigns
          </span>
        </div>

        <h1 className="font-poppins font-bold text-4xl sm:text-5xl lg:text-6xl text-white leading-tight mb-6">
          iGaming Influencer Marketing{' '}
          <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-blue-500 bg-clip-text text-transparent">
            Case Studies
          </span>
        </h1>

        <p className="text-white/50 font-poppins text-lg lg:text-xl leading-relaxed max-w-3xl mx-auto mb-10">
          Octomedia delivers data-driven streamer and influencer marketing campaigns for leading iGaming brands globally. Explore our performance-verified case studies highlighting campaign budgets, player registrations, FTD acquisition, CPA optimization, and the proven influencer marketing strategies driving scalable player growth.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
          <a
            href={CALENDLY}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full font-poppins text-base font-semibold text-white bg-gradient-to-r from-cyan-500 via-blue-500 to-blue-600 hover:shadow-xl hover:shadow-cyan-500/30 hover:scale-105 active:scale-95 transition-all duration-300 relative overflow-hidden group"
          >
            <span className="absolute inset-0 bg-gradient-to-r from-blue-600 via-blue-500 to-cyan-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <span className="relative z-10">Schedule a Free Consultation</span>
            <ArrowRight size={16} className="relative z-10 transition-transform duration-300 group-hover:translate-x-1" />
          </a>
          <a
            href="#case-studies-list"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full font-poppins text-base font-semibold text-white/70 border border-white/15 hover:border-white/30 hover:text-white hover:bg-white/5 transition-all duration-300 group"
          >
            <span>Browse Case Studies</span>
            <ChevronDown size={16} className="transition-transform duration-300 group-hover:translate-y-0.5" />
          </a>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {AGGREGATE_STATS.map((stat) => (
            <div
              key={stat.label}
              className="rounded-2xl border border-white/8 bg-white/3 backdrop-blur-sm p-5 text-center transition-all duration-300 hover:border-white/15 hover:bg-white/5"
            >
              <div className={`flex justify-center mb-2 ${stat.color}`}>{stat.icon}</div>
              <p className={`font-poppins font-bold text-2xl lg:text-3xl mb-1 ${stat.color}`}>{stat.value}</p>
              <p className="text-white/40 font-poppins text-xs leading-snug">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ClosingCta() {
  return (
    <section className="relative py-24 px-4 overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-cyan-950/10 to-transparent" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] rounded-full bg-cyan-500/5 blur-[120px]" />
      </div>
      <div className="relative z-10 max-w-3xl mx-auto text-center">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-emerald-500/20 bg-emerald-500/5 mb-8">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
          <span className="text-emerald-300 font-poppins text-xs font-semibold uppercase tracking-widest">
            Your Campaign Could Be Next
          </span>
        </div>
        <h2 className="font-poppins font-bold text-3xl sm:text-4xl lg:text-5xl text-white leading-tight mb-6">
          Ready to Scale Your iGaming Brand{' '}
          <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
            With Influencers?
          </span>
        </h2>
        <p className="text-white/50 font-poppins text-lg leading-relaxed mb-10 max-w-2xl mx-auto">
          Whether you are entering a new market, launching a new brand, or scaling an existing acquisition programme, Octomedia delivers verified streamer campaigns with transparent CPAs and measurable FTD outcomes.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-10">
          <a
            href={CALENDLY}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full font-poppins text-base font-semibold text-white bg-gradient-to-r from-cyan-500 via-blue-500 to-blue-600 hover:shadow-xl hover:shadow-cyan-500/30 hover:scale-105 active:scale-95 transition-all duration-300 relative overflow-hidden group"
          >
            <span className="absolute inset-0 bg-gradient-to-r from-blue-600 via-blue-500 to-cyan-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <span className="relative z-10">Book a Strategy Session</span>
            <ArrowRight size={16} className="relative z-10 transition-transform duration-300 group-hover:translate-x-1" />
          </a>
          <a
            href={CALENDLY}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full font-poppins text-base font-semibold text-white/70 border border-white/15 hover:border-white/30 hover:text-white hover:bg-white/5 transition-all duration-300 group"
          >
            <span>Learn How Streamer Marketing Can Scale Your Brand</span>
            <ArrowRight size={16} className="transition-transform duration-300 group-hover:translate-x-1" />
          </a>
        </div>
        <p className="text-white/25 font-poppins text-sm">
          Free 30-minute consultation. No obligation. Results guaranteed by performance data.
        </p>
      </div>
    </section>
  );
}

function SeoIntro() {
  return (
    <section className="max-w-4xl mx-auto px-4 py-8 text-center">
      <p className="text-white/35 font-poppins text-sm leading-relaxed">
        Octomedia is a specialist{' '}
        <strong className="text-white/50">iGaming influencer marketing agency</strong> delivering end-to-end streamer campaigns for casino brands, sportsbooks, and crypto gaming platforms. Our campaigns span Twitch, Kick, YouTube, and social platforms — targeting Tier 1 and emerging markets with proven{' '}
        <strong className="text-white/50">FTD acquisition</strong> models and full attribution transparency.
      </p>
    </section>
  );
}

export default function CaseStudiesPage() {
  const [studies, setStudies] = useState<CaseStudy[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    supabase
      .from('case_studies')
      .select('*')
      .order('created_at', { ascending: true })
      .then(({ data, error: fetchError }) => {
        if (fetchError) setError('Failed to load case studies. Please refresh the page.');
        else setStudies(data ?? []);
        setLoading(false);
      });
  }, []);

  const sorted = [...studies].sort((a, b) => {
    return CASE_STUDY_ORDER.indexOf(a.brand) - CASE_STUDY_ORDER.indexOf(b.brand);
  });

  return (
    <>
      <SEOHead
        title="iGaming Influencer Marketing Case Studies | Octomedia Agency"
        description="Verified iGaming influencer marketing case studies from Octomedia. Real CPAs, FTD counts, and campaign budgets across casino streamer campaigns on Twitch, Kick and YouTube."
        canonical="https://octomedia.agency/case-studies"
      />
      <main className="min-h-screen">
        <HeroSection />
        <SeoIntro />

        <section id="case-studies-list" className="max-w-7xl mx-auto px-4 py-8 pb-16">
          {loading && (
            <div className="flex items-center justify-center py-24">
              <div className="w-8 h-8 border-2 border-cyan-400/30 border-t-cyan-400 rounded-full animate-spin" />
            </div>
          )}

          {error && (
            <div className="text-center py-16">
              <p className="text-white/40 font-poppins">{error}</p>
            </div>
          )}

          {!loading && !error && (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
              {sorted.map((study, index) => (
                <CaseStudyGridCard key={study.id} study={study} index={index} />
              ))}
            </div>
          )}
        </section>

        <ClosingCta />
      </main>
    </>
  );
}
