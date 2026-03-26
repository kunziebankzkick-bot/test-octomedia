import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, PenLine } from 'lucide-react';
import SEOHead from '../../components/SEOHead';
import { breadcrumbSchema, organizationSchema } from '../../seo/schemas';
import { SITE_URL } from '../../utils/canonicalUrl';

const posts = [
  {
    href: '/blog/how-to-detect-fake-streamers-inflated-metrics',
    badge: 'Fraud Prevention',
    title: 'How to Detect Fake Streamers and Inflated Metrics',
    excerpt: 'A practical guide to spotting bot traffic, fake followers, and inflated viewer counts before you sign a casino streamer deal.',
    author: 'Alexei Volkov',
    date: 'January 8, 2026',
    readTime: 9,
  },
  {
    href: '/blog/how-to-find-right-streamer-casino',
    badge: 'Strategy',
    title: 'How to Find the Right Streamer for Your Casino Brand',
    excerpt: 'Platform selection, audience matching, geo-alignment, and the vetting process that separates high-converting partnerships from wasted budget.',
    author: 'Alexei Volkov',
    date: 'January 10, 2026',
    readTime: 10,
  },
  {
    href: '/blog/twitch-casino-marketing-strategy-2026',
    badge: 'Platform Guide',
    title: 'Twitch Casino Marketing Strategy for 2026',
    excerpt: 'Streamer tiers, deal structures, compliance hurdles, and content formats that drive real depositors on Twitch in 2026.',
    author: 'Alexei Volkov',
    date: 'January 13, 2026',
    readTime: 11,
  },
  {
    href: '/blog/measure-roi-influencer-marketing-igaming',
    badge: 'Analytics',
    title: 'How to Measure ROI from Influencer Marketing in iGaming',
    excerpt: 'The ROI formula, tracking infrastructure, and weekly reporting framework every casino brand needs before spending a dollar on influencers.',
    author: 'Alexei Volkov',
    date: 'January 15, 2026',
    readTime: 10,
  },
  {
    href: '/blog/affiliate-vs-influencer-marketing-casinos',
    badge: 'Comparison',
    title: 'Affiliate Marketing vs Influencer Marketing for Casinos',
    excerpt: 'Cost structures, conversion rates, player lifetime value, and when the hybrid approach beats either channel on its own.',
    author: 'Alexei Volkov',
    date: 'January 17, 2026',
    readTime: 9,
  },
  {
    href: '/blog/cost-hiring-twitch-casino-streamers',
    badge: 'Budgeting',
    title: 'The Real Cost of Hiring Twitch Casino Streamers',
    excerpt: 'Sponsorship rates by tier, hidden fees, exclusivity premiums, and how to build a budget that actually delivers positive ROI.',
    author: 'Alexei Volkov',
    date: 'January 20, 2026',
    readTime: 8,
  },
  {
    href: '/blog/how-to-vet-gambling-influencers',
    badge: 'Due Diligence',
    title: 'How to Vet Gambling Influencers Before Signing Deals',
    excerpt: 'The eight-point vetting checklist that protects your brand from compliance risk, fraud, and underperforming partnerships.',
    author: 'Alexei Volkov',
    date: 'January 22, 2026',
    readTime: 9,
  },
  {
    href: '/blog/top-kpis-sportsbook-influencer-campaigns',
    badge: 'Analytics',
    title: 'Top KPIs for Sportsbook Influencer Campaigns',
    excerpt: 'Which metrics actually matter for betting brands, how to set benchmarks before campaigns launch, and what to cut when numbers miss.',
    author: 'Alexei Volkov',
    date: 'January 24, 2026',
    readTime: 9,
  },
  {
    href: '/blog/micro-vs-macro-influencers-igaming',
    badge: 'Strategy',
    title: 'Micro vs Macro Influencers in iGaming: Which Wins?',
    excerpt: 'Engagement rates, cost-per-FTD, audience trust, and the portfolio approach that most successful casino brands use today.',
    author: 'Alexei Volkov',
    date: 'January 27, 2026',
    readTime: 8,
  },
  {
    href: '/blog/revenue-share-deals-streamers',
    badge: 'Deals',
    title: 'How to Structure Revenue Share Deals with Streamers',
    excerpt: 'Base rates, rev-share tiers, hybrid deal structures, performance bonuses, and the contract clauses that protect both sides.',
    author: 'Alexei Volkov',
    date: 'January 29, 2026',
    readTime: 9,
  },
  {
    href: '/blog/scale-casino-acquisition-influencer-campaigns',
    badge: 'Growth',
    title: 'How to Scale Casino Player Acquisition with Influencer Campaigns',
    excerpt: 'Moving from one-off sponsorships to a systematic acquisition engine — processes, tooling, and the team structure that supports scale.',
    author: 'Alexei Volkov',
    date: 'February 1, 2026',
    readTime: 10,
  },
  {
    href: '/blog/compliance-gambling-influencer-marketing',
    badge: 'Compliance',
    title: 'Compliance Guide for Gambling Influencer Marketing',
    excerpt: 'ASA, UKGC, MGA, and platform-level rules decoded — plus a practical checklist every brief should include before content goes live.',
    author: 'Alexei Volkov',
    date: 'February 3, 2026',
    readTime: 11,
  },
  {
    href: '/blog/crypto-casino-influencer-marketing-strategies',
    badge: 'Crypto',
    title: 'Crypto Casino Influencer Marketing Strategies That Work',
    excerpt: 'How Web3 audiences differ, which platforms convert for crypto casinos, and the content formats that drive wallet deposits.',
    author: 'Alexei Volkov',
    date: 'February 5, 2026',
    readTime: 10,
  },
  {
    href: '/blog/esports-betting-influencer-strategy',
    badge: 'Esports',
    title: 'Esports Betting Influencer Strategy Guide for Sportsbooks',
    excerpt: 'Finding esports-native creators, aligning campaigns with tournament calendars, and measuring incremental bettors against organic baseline.',
    author: 'Alexei Volkov',
    date: 'February 7, 2026',
    readTime: 9,
  },
  {
    href: '/blog/kick-vs-twitch-gambling-marketing',
    badge: 'Platform Guide',
    title: 'Kick vs Twitch for Gambling Marketing: 2026 Comparison',
    excerpt: 'Audience size, gambling policy differences, streamer rates, and the platform split strategy most casino brands are adopting this year.',
    author: 'Alexei Volkov',
    date: 'February 10, 2026',
    readTime: 9,
  },
  {
    href: '/blog/avoid-influencer-fraud-igaming',
    badge: 'Fraud Prevention',
    title: 'How to Avoid Influencer Fraud in iGaming',
    excerpt: 'Click farms, fake conversions, cookie stuffing, and the detection methods that protect your affiliate tracking from manipulation.',
    author: 'Alexei Volkov',
    date: 'February 12, 2026',
    readTime: 9,
  },
  {
    href: '/blog/brand-ambassador-programs-casino',
    badge: 'Strategy',
    title: 'Building Long-Term Brand Ambassador Programs for Casinos',
    excerpt: 'Why transactional sponsorships underperform, how to identify ambassador candidates, and the retention tactics that build lasting partnerships.',
    author: 'Alexei Volkov',
    date: 'February 14, 2026',
    readTime: 9,
  },
  {
    href: '/blog/casino-streamer-campaign-case-study',
    badge: 'Case Study',
    title: 'Real Case Study: A Successful Casino Streamer Campaign',
    excerpt: 'The full breakdown of a six-figure streamer campaign — brief, casting, execution, results, and what we would do differently.',
    author: 'Alexei Volkov',
    date: 'February 16, 2026',
    readTime: 10,
  },
  {
    href: '/blog/analyze-streamer-audience-demographics',
    badge: 'Analytics',
    title: 'How to Analyze Streamer Audience Demographics for Casinos',
    excerpt: 'Age, geography, deposit intent signals, and the tools that surface the audience data you actually need before committing budget.',
    author: 'Alexei Volkov',
    date: 'February 18, 2026',
    readTime: 8,
  },
  {
    href: '/blog/conversion-tracking-influencer-campaigns',
    badge: 'Analytics',
    title: 'Conversion Tracking for Casino Influencer Campaigns',
    excerpt: 'Custom tracking links, pixel events, postback URLs, and the attribution window debate every casino brand needs to resolve early.',
    author: 'Alexei Volkov',
    date: 'February 19, 2026',
    readTime: 9,
  },
  {
    href: '/blog/incrementality-vs-attribution-gambling',
    badge: 'Analytics',
    title: 'Incrementality vs Attribution in Gambling Influencer Marketing',
    excerpt: 'Why last-click attribution lies, how to run holdout tests for influencer campaigns, and what incrementality actually tells you about ROI.',
    author: 'Alexei Volkov',
    date: 'February 21, 2026',
    readTime: 9,
  },
  {
    href: '/blog/common-mistakes-influencer-marketing-casinos',
    badge: 'Strategy',
    title: 'Common Mistakes in Influencer Marketing for Casinos',
    excerpt: 'The twelve errors that burn iGaming marketing budgets — from vanity metrics obsession to compliance shortcuts that create legal exposure.',
    author: 'Alexei Volkov',
    date: 'February 23, 2026',
    readTime: 9,
  },
  {
    href: '/blog/influencer-outreach-templates-igaming',
    badge: 'Templates',
    title: 'Influencer Outreach Templates for iGaming Brands',
    excerpt: 'Cold outreach scripts, follow-up sequences, rate negotiation frameworks, and brief templates built specifically for gambling sponsorships.',
    author: 'Alexei Volkov',
    date: 'February 25, 2026',
    readTime: 8,
  },
  {
    href: '/blog/geo-targeting-gambling-influencer-campaigns',
    badge: 'GEO Strategy',
    title: 'GEO Targeting Strategies for Gambling Influencer Campaigns',
    excerpt: 'How to align streamer audiences with licensed markets, manage multi-geo campaigns, and avoid serving content to restricted jurisdictions.',
    author: 'Alexei Volkov',
    date: 'February 27, 2026',
    readTime: 9,
  },
  {
    href: '/blog/future-influencer-marketing-igaming-2026',
    badge: 'Trends',
    title: 'The Future of Influencer Marketing in iGaming (2026 & Beyond)',
    excerpt: 'AI-driven creator matching, short-form video, regulatory tightening, and the five shifts that will reshape casino influencer marketing.',
    author: 'Alexei Volkov',
    date: 'February 28, 2026',
    readTime: 10,
  },
];

export default function BlogIndexPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const blogListSchema = {
    '@context': 'https://schema.org',
    '@type': 'Blog',
    '@id': `${SITE_URL}/blog`,
    name: 'iGaming Influencer Marketing Blog | Octo Media Group',
    description: 'Expert insights on casino influencer marketing, streamer partnerships, iGaming compliance, and player acquisition strategy.',
    url: `${SITE_URL}/blog`,
    publisher: {
      '@type': 'Organization',
      '@id': `${SITE_URL}/#organization`,
    },
    blogPost: posts.map((p) => ({
      '@type': 'BlogPosting',
      headline: p.title,
      url: `${SITE_URL}${p.href}`,
      description: p.excerpt,
      author: { '@type': 'Person', name: p.author },
      datePublished: p.date,
    })),
  };

  return (
    <>
      <SEOHead
        title="iGaming Influencer Marketing Blog | Octo Media Group"
        description="25 expert guides on casino streamer partnerships, iGaming compliance, ROI measurement, fraud prevention, and player acquisition strategy — by Alexei Volkov."
        canonical={`${SITE_URL}/blog`}
        jsonLd={[
          blogListSchema,
          organizationSchema,
          breadcrumbSchema([
            { name: 'Home', url: `${SITE_URL}/` },
            { name: 'Blog', url: `${SITE_URL}/blog` },
          ]),
        ]}
      />

      <section className="relative pt-32 pb-16 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(205,128,217,0.07),transparent_50%)]" />
        <div className="max-w-5xl mx-auto px-6 relative z-10 text-center">
          <div className="inline-block mb-4 px-3 py-1 bg-brand-pink/10 border border-brand-pink/20 rounded-full">
            <span className="text-brand-pink font-poppins font-semibold text-xs tracking-wider uppercase">
              iGaming Marketing Blog
            </span>
          </div>
          <h1 className="font-poppins font-black text-4xl md:text-5xl text-white leading-tight mb-4">
            Casino &amp; iGaming Influencer Marketing Insights
          </h1>
          <p className="font-poppins text-lg text-white/50 max-w-2xl mx-auto leading-relaxed">
            Practical guides on streamer partnerships, player acquisition, compliance, and ROI measurement — written by iGaming industry practitioners.
          </p>
        </div>
      </section>

      <section className="pb-24">
        <div className="max-w-5xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {posts.map((post) => (
              <Link
                key={post.href}
                to={post.href}
                className="group block p-6 rounded-2xl bg-white/[0.02] border border-white/8 hover:border-white/15 transition-all duration-300 hover:bg-white/[0.04]"
              >
                <div className="flex items-center justify-between mb-3">
                  <span className="font-poppins text-xs font-semibold text-brand-pink uppercase tracking-wider">
                    {post.badge}
                  </span>
                  <span className="font-poppins text-xs text-white/25">
                    {post.readTime} min read
                  </span>
                </div>
                <h2 className="font-poppins font-bold text-base text-white leading-snug mb-2 group-hover:text-white/80 transition-colors">
                  {post.title}
                </h2>
                <p className="font-poppins text-sm text-white/40 leading-relaxed mb-4">
                  {post.excerpt}
                </p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1">
                    <span className="font-poppins text-xs text-brand-pink">Read article</span>
                    <ArrowRight className="w-3 h-3 text-brand-pink transition-transform group-hover:translate-x-1" />
                  </div>
                  <span className="font-poppins text-xs text-white/20">{post.date}</span>
                </div>
              </Link>
            ))}
          </div>

          <div className="mt-16 p-8 rounded-2xl bg-gradient-to-r from-brand-pink/10 to-brand-purple/10 border border-white/10 text-center">
            <PenLine className="w-8 h-8 text-brand-pink mx-auto mb-3" />
            <h2 className="font-poppins font-bold text-xl text-white mb-2">
              Want These Strategies Implemented for Your Brand?
            </h2>
            <p className="font-poppins text-sm text-white/50 mb-6 max-w-lg mx-auto">
              Our team executes iGaming influencer campaigns daily for crypto casinos, sportsbooks, and online gaming brands. Book a free 30-minute strategy call.
            </p>
            <a
              href="https://calendly.com/contact-octomediagroup/30min"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-7 py-3 rounded-xl bg-gradient-to-r from-brand-pink to-brand-purple font-poppins font-bold text-sm text-white hover:shadow-xl hover:shadow-brand-pink/20 transition-all duration-300 hover:scale-105"
            >
              Schedule a Free Consultation
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
