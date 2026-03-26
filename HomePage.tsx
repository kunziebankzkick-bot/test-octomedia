import { lazy, Suspense } from 'react';
import { Link } from 'react-router-dom';
import { Shield } from 'lucide-react';
import SEOHead from '../components/SEOHead';
import { websiteSchema, organizationSchema, homeFaqSchema, serviceSchemas } from '../seo/schemas';
import { SITE_URL } from '../utils/canonicalUrl';
import Hero from '../components/Hero';
import SocialProof from '../components/SocialProof';
import { useI18n } from '../i18n/context';

const Problem = lazy(() => import('../components/Problem'));
const HowWeSolve = lazy(() => import('../components/HowWeSolve'));
const Solution = lazy(() => import('../components/Solution'));
const Markets = lazy(() => import('../components/Markets'));
const Comparison = lazy(() => import('../components/Comparison'));
const Pricing = lazy(() => import('../components/Pricing'));
const Demo = lazy(() => import('../components/Demo'));
const FAQ = lazy(() => import('../components/FAQ'));
const Contact = lazy(() => import('../components/Contact'));
const FinalCta = lazy(() => import('../components/FinalCta'));

function SectionLoader() {
  return <div className="min-h-[200px]" />;
}

export default function HomePage() {
  const { t, localePath } = useI18n();

  return (
    <>
      <SEOHead
        title={t.meta.home.title}
        description={t.meta.home.description}
        canonical={`${SITE_URL}/`}
        jsonLd={[websiteSchema, organizationSchema, homeFaqSchema, ...serviceSchemas]}
      />
      <Hero />
      <SocialProof />
      <Suspense fallback={<SectionLoader />}>
        <Problem />
        <HowWeSolve />
        <Solution />
        <Markets />
        <Comparison />
        <Pricing />
        <Demo />
        <FAQ />
        <Contact />
        <FinalCta />

        <section className="py-12 border-t border-white/5">
          <div className="max-w-4xl mx-auto px-6">
            <h2 className="font-poppins text-base font-semibold text-white/30 mb-4">
              The iGaming Influencer Marketing Agency Built for Performance
            </h2>
            <p className="font-poppins text-sm text-white/20 leading-relaxed mb-4">
              Octo Media Group is a specialist <Link to={localePath('/services')} className="text-white/25 hover:text-white/40 underline transition-colors">iGaming influencer marketing agency</Link> and{' '}
              <Link to={localePath('/services') + '#streamer-marketing'} className="text-white/25 hover:text-white/40 underline transition-colors">casino streamer marketing</Link> partner for crypto casino, online casino, and sportsbook brands worldwide.
              Our campaigns run on Twitch, YouTube, and Kick — the three primary platforms for gambling streamers and casino influencers — and are executed by a team of 8 iGaming industry veterans with deep experience in player acquisition, FTD optimization, and compliant gambling influencer marketing strategy.
            </p>
            <p className="font-poppins text-sm text-white/20 leading-relaxed mb-4">
              Whether you need to hire gambling streamers for a Twitch casino sponsorship, scale your crypto casino influencer marketing across YouTube gambling channels, or build a compliant sportsbook influencer marketing program, Octo Media Group delivers verified creators, measurable ROI, and full campaign management.
              We specialize in the commercial intent that drives real depositing players — not impressions — covering Tier 1/2/3 markets across Europe, LATAM, North America, Oceania, and APAC.
            </p>
            <p className="font-poppins text-sm text-white/20 leading-relaxed">
              Our services include{' '}
              <Link to={localePath('/services') + '#streamer-marketing'} className="text-white/25 hover:text-white/40 underline transition-colors">iGaming streamer marketing</Link>,{' '}
              <Link to={localePath('/services') + '#influencer-marketing'} className="text-white/25 hover:text-white/40 underline transition-colors">gambling influencer marketing</Link>, and{' '}
              <Link to={localePath('/services') + '#affiliate-marketing'} className="text-white/25 hover:text-white/40 underline transition-colors">iGaming affiliate marketing</Link>.
              If you are a Twitch casino streamer, YouTube gambling influencer, or Kick casino content creator looking for consistent iGaming sponsorships, visit our{' '}
              <Link to={localePath('/streamers')} className="text-white/25 hover:text-white/40 underline transition-colors">casino streamer network</Link> to apply.
              To learn more about our approach and the team behind it, read{' '}
              <Link to={localePath('/why-us')} className="text-white/25 hover:text-white/40 underline transition-colors">why iGaming brands choose Octo Media</Link>.
            </p>
          </div>
        </section>
      </Suspense>

      <Link to={localePath('/why-us')} className="fixed bottom-6 right-6 z-50 group">
        <div className="flex items-center gap-2 px-4 py-3 rounded-full bg-gradient-to-r from-brand-pink/10 to-brand-purple/10 backdrop-blur-md border border-white/10 hover:border-brand-pink/50 transition-all duration-300 hover:scale-105 shadow-lg">
          <Shield size={20} className="text-brand-pink" />
          <div className="flex flex-col">
            <span className="font-poppins text-[10px] text-white/50 uppercase tracking-wider">Built</span>
            <span className="font-poppins text-xs font-semibold text-white">By iGaming Veterans</span>
          </div>
        </div>
      </Link>
    </>
  );
}
