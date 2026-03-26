import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, BookOpen } from 'lucide-react';
import SEOHead from '../../components/SEOHead';
import { breadcrumbSchema, organizationSchema } from '../../seo/schemas';
import { SITE_URL } from '../../utils/canonicalUrl';

const articles = [
  {
    href: '/resources/igaming-influencer-marketing-roi',
    badge: 'Strategy',
    title: 'ROI of iGaming Influencer Marketing: What Brands Actually Get',
    description: 'A data-driven breakdown of real ROI metrics, cost-per-FTD benchmarks, and how to measure campaign performance for casino influencer marketing.',
    readTime: '8 min read',
    keywords: 'ROI, FTD, player acquisition',
  },
  {
    href: '/resources/casino-influencer-marketing-compliance',
    badge: 'Compliance',
    title: 'Gambling Influencer Marketing Compliance: UK, Malta, Curacao & USA',
    description: 'Region-by-region breakdown of casino advertising regulations, responsible gambling requirements, and compliant influencer campaign frameworks.',
    readTime: '10 min read',
    keywords: 'compliance, regulations, responsible gambling',
  },
  {
    href: '/resources/affiliate-vs-influencer-marketing-igaming',
    badge: 'Comparison',
    title: 'Affiliate vs Influencer Marketing for iGaming: Which Drives Better ROI?',
    description: 'A direct comparison of iGaming affiliate programs vs influencer marketing campaigns — cost structures, conversion rates, and when to use each.',
    readTime: '7 min read',
    keywords: 'affiliate, influencer, comparison',
  },
  {
    href: '/resources/crypto-casino-marketing-trends',
    badge: 'Trends',
    title: 'Crypto Casino Marketing Trends 2026: Streamers, Web3 & Player Acquisition',
    description: 'The latest trends shaping crypto casino and blockchain gambling marketing — from Twitch streamers to Web3-native influencer campaigns.',
    readTime: '9 min read',
    keywords: 'crypto casino, trends, 2026',
  },
  {
    href: '/resources/twitch-casino-marketing-guide',
    badge: 'Platform Guide',
    title: 'Twitch Casino Marketing: The Complete Brand Guide for 2026',
    description: 'How to run effective Twitch casino sponsorships — finding gambling streamers, structuring deals, compliance considerations, and tracking ROI.',
    readTime: '11 min read',
    keywords: 'Twitch, casino streamers, sponsorship',
  },
  {
    href: '/resources/esports-betting-influencer-strategy',
    badge: 'Strategy',
    title: 'Esports Betting Influencer Marketing Strategy for Sportsbooks',
    description: 'How sportsbook and esports betting brands can leverage gaming influencers, esports streamers, and content creators to drive depositing players.',
    readTime: '8 min read',
    keywords: 'esports, sportsbook, betting influencers',
  },
];

export default function ResourcesIndexPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const resourcesListSchema = {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    '@id': 'https://octomedia.agency/resources',
    name: 'iGaming Marketing Resources | Octo Media Group',
    description: 'Expert guides on iGaming influencer marketing, casino advertising compliance, affiliate vs influencer strategy, and crypto casino marketing trends.',
    url: 'https://octomedia.agency/resources',
    publisher: {
      '@type': 'Organization',
      '@id': 'https://octomedia.agency/#organization',
    },
    hasPart: articles.map((a) => ({
      '@type': 'Article',
      name: a.title,
      url: `https://octomedia.agency${a.href}`,
      description: a.description,
    })),
  };

  return (
    <>
      <SEOHead
        title="iGaming Marketing Resources & Guides | Octo Media Group"
        description="Expert iGaming influencer marketing guides: compliance, ROI benchmarks, Twitch casino strategy, crypto casino trends, affiliate vs influencer comparison, and more."
        canonical={`${SITE_URL}/resources`}
        jsonLd={[
          resourcesListSchema,
          organizationSchema,
          breadcrumbSchema([
            { name: 'Home', url: `${SITE_URL}/` },
            { name: 'iGaming Marketing Resources', url: `${SITE_URL}/resources` },
          ]),
        ]}
      />

      <section className="relative pt-32 pb-16 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(137,127,217,0.08),transparent_50%)]" />
        <div className="max-w-5xl mx-auto px-6 relative z-10 text-center">
          <div className="inline-block mb-4 px-3 py-1 bg-brand-pink/10 border border-brand-pink/20 rounded-full">
            <span className="text-brand-pink font-poppins font-semibold text-xs tracking-wider uppercase">
              iGaming Marketing Resources
            </span>
          </div>
          <h1 className="font-poppins font-black text-4xl md:text-5xl text-white leading-tight mb-4">
            iGaming Influencer Marketing Guides
          </h1>
          <p className="font-poppins text-lg text-white/50 max-w-2xl mx-auto leading-relaxed">
            In-depth resources on casino influencer marketing strategy, gambling advertising compliance, ROI measurement, and crypto casino marketing trends — written by iGaming industry insiders.
          </p>
        </div>
      </section>

      <section className="pb-24">
        <div className="max-w-5xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {articles.map((article) => (
              <Link
                key={article.href}
                to={article.href}
                className="group block p-6 rounded-2xl bg-white/[0.02] border border-white/8 hover:border-white/15 transition-all duration-300 hover:bg-white/[0.04]"
              >
                <div className="flex items-center justify-between mb-3">
                  <span className="font-poppins text-xs font-semibold text-brand-pink uppercase tracking-wider">
                    {article.badge}
                  </span>
                  <span className="font-poppins text-xs text-white/25">
                    {article.readTime}
                  </span>
                </div>
                <h2 className="font-poppins font-bold text-base text-white leading-snug mb-2 group-hover:text-white/80 transition-colors">
                  {article.title}
                </h2>
                <p className="font-poppins text-sm text-white/40 leading-relaxed mb-4">
                  {article.description}
                </p>
                <div className="flex items-center gap-1">
                  <span className="font-poppins text-xs text-brand-pink">Read guide</span>
                  <ArrowRight className="w-3 h-3 text-brand-pink transition-transform group-hover:translate-x-1" />
                </div>
              </Link>
            ))}
          </div>

          <div className="mt-16 p-8 rounded-2xl bg-gradient-to-r from-brand-pink/10 to-brand-purple/10 border border-white/10 text-center">
            <BookOpen className="w-8 h-8 text-brand-pink mx-auto mb-3" />
            <h2 className="font-poppins font-bold text-xl text-white mb-2">
              Ready to Apply These Strategies?
            </h2>
            <p className="font-poppins text-sm text-white/50 mb-6 max-w-lg mx-auto">
              Our iGaming marketing team implements these strategies every day for crypto casino and online casino brands. Book a free 30-minute consultation.
            </p>
            <a
              href="https://calendly.com/contact-octomediagroup/30min"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-7 py-3 rounded-xl bg-gradient-to-r from-brand-pink to-brand-purple font-poppins font-bold text-sm text-white hover:shadow-xl hover:shadow-brand-pink/20 transition-all duration-300 hover:scale-105"
            >
              Book Free Strategy Call
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
