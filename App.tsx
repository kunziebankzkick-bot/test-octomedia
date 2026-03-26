import { lazy, Suspense } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import CosmicCursor from './components/CosmicCursor';
import StarField from './components/StarField';
import HomePage from './pages/HomePage';
import { GeoLandingPage } from './pages/geo/GeoLandingLayout';
import { geoConfigs } from './pages/geo/geoConfigs';
import { I18nProvider } from './i18n/context';
import { ErrorBoundary, RouteErrorBoundary } from './components/ErrorBoundary';

const StreamersPage = lazy(() => import('./pages/streamers/StreamersPage'));
const WhyUsPage = lazy(() => import('./pages/why-us/WhyUsPage'));
const ServicesPage = lazy(() => import('./pages/services/ServicesPage'));
const PrivacyPolicy = lazy(() => import('./pages/legal/PrivacyPolicy'));
const TermsOfService = lazy(() => import('./pages/legal/TermsOfService'));
const CookiePolicy = lazy(() => import('./pages/legal/CookiePolicy'));
const NotFoundPage = lazy(() => import('./pages/NotFoundPage'));

const ResourcesIndexPage = lazy(() => import('./pages/resources/ResourcesIndexPage'));
const IgamingInfluencerROI = lazy(() => import('./pages/resources/IgamingInfluencerROI'));
const CasinoCompliancePage = lazy(() => import('./pages/resources/CasinoCompliancePage'));
const AffiliateVsInfluencer = lazy(() => import('./pages/resources/AffiliateVsInfluencer'));
const CryptoCasinoTrends = lazy(() => import('./pages/resources/CryptoCasinoTrends'));
const TwitchCasinoGuide = lazy(() => import('./pages/resources/TwitchCasinoGuide'));
const EsportsBettingStrategy = lazy(() => import('./pages/resources/EsportsBettingStrategy'));

const CaseStudiesPage = lazy(() => import('./pages/case-studies/CaseStudiesPage'));
const CaseStudyDetailPage = lazy(() => import('./pages/case-studies/CaseStudyDetailPage'));
const BlogIndexPage = lazy(() => import('./pages/blog/BlogIndexPage'));
const FakeStreamerDetection = lazy(() => import('./pages/blog/FakeStreamerDetection'));
const FindRightStreamer = lazy(() => import('./pages/blog/FindRightStreamer'));
const TwitchCasinoStrategy = lazy(() => import('./pages/blog/TwitchCasinoStrategy'));
const MeasureROI = lazy(() => import('./pages/blog/MeasureROI'));
const AffiliateVsInfluencerCasino = lazy(() => import('./pages/blog/AffiliateVsInfluencerCasino'));
const CostCasinoStreamers = lazy(() => import('./pages/blog/CostCasinoStreamers'));
const VetGamblingInfluencers = lazy(() => import('./pages/blog/VetGamblingInfluencers'));
const SportsBookKPIs = lazy(() => import('./pages/blog/SportsBookKPIs'));
const MicroVsMacroIgaming = lazy(() => import('./pages/blog/MicroVsMacroIgaming'));
const RevenueShareDeals = lazy(() => import('./pages/blog/RevenueShareDeals'));
const ScaleCasinoAcquisition = lazy(() => import('./pages/blog/ScaleCasinoAcquisition'));
const ComplianceGamblingInfluencer = lazy(() => import('./pages/blog/ComplianceGamblingInfluencer'));
const CryptoCasinoInfluencer = lazy(() => import('./pages/blog/CryptoCasinoInfluencer'));
const EsportsBettingInfluencer = lazy(() => import('./pages/blog/EsportsBettingInfluencer'));
const KickVsTwitch = lazy(() => import('./pages/blog/KickVsTwitch'));
const AvoidInfluencerFraud = lazy(() => import('./pages/blog/AvoidInfluencerFraud'));
const BrandAmbassadorPrograms = lazy(() => import('./pages/blog/BrandAmbassadorPrograms'));
const CasinoStreamerCaseStudy = lazy(() => import('./pages/blog/CasinoStreamerCaseStudy'));
const AnalyzeStreamerDemographics = lazy(() => import('./pages/blog/AnalyzeStreamerDemographics'));
const ConversionTracking = lazy(() => import('./pages/blog/ConversionTracking'));
const IncrementalityVsAttribution = lazy(() => import('./pages/blog/IncrementalityVsAttribution'));
const CommonMistakesCasino = lazy(() => import('./pages/blog/CommonMistakesCasino'));
const InfluencerOutreachTemplates = lazy(() => import('./pages/blog/InfluencerOutreachTemplates'));
const GeoTargetingGambling = lazy(() => import('./pages/blog/GeoTargetingGambling'));
const FutureInfluencerMarketing = lazy(() => import('./pages/blog/FutureInfluencerMarketing'));

const LANG_PREFIXES = ['', '/ru', '/es', '/uk', '/sv', '/de', '/fr'];

function PageLoader() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="w-8 h-8 border-2 border-brand-pink/30 border-t-brand-pink rounded-full animate-spin" />
    </div>
  );
}

function SafePage({ children }: { children: React.ReactNode }) {
  return (
    <RouteErrorBoundary>
      <Suspense fallback={<PageLoader />}>
        {children}
      </Suspense>
    </RouteErrorBoundary>
  );
}

export default function App() {
  return (
    <ErrorBoundary>
      <BrowserRouter>
        <I18nProvider>
          <div className="min-h-screen bg-[#0a0a12] bg-site relative">
            <StarField />
            <CosmicCursor />
            <Navbar />
            <div className="relative z-10">
              <Routes>
                {LANG_PREFIXES.map((p) => [
                  <Route key={`${p}/`} path={p === '' ? '/' : p} element={<HomePage />} />,
                  <Route key={`${p}/streamers`} path={`${p}/streamers`} element={<SafePage><StreamersPage /></SafePage>} />,
                  <Route key={`${p}/why-us`} path={`${p}/why-us`} element={<SafePage><WhyUsPage /></SafePage>} />,
                  <Route key={`${p}/services`} path={`${p}/services`} element={<SafePage><ServicesPage /></SafePage>} />,
                  <Route key={`${p}/privacy`} path={`${p}/privacy`} element={<SafePage><PrivacyPolicy /></SafePage>} />,
                  <Route key={`${p}/terms`} path={`${p}/terms`} element={<SafePage><TermsOfService /></SafePage>} />,
                  <Route key={`${p}/cookies`} path={`${p}/cookies`} element={<SafePage><CookiePolicy /></SafePage>} />,
                  <Route key={`${p}/resources`} path={`${p}/resources`} element={<SafePage><ResourcesIndexPage /></SafePage>} />,
                  <Route key={`${p}/resources/roi`} path={`${p}/resources/igaming-influencer-marketing-roi`} element={<SafePage><IgamingInfluencerROI /></SafePage>} />,
                  <Route key={`${p}/resources/compliance`} path={`${p}/resources/casino-influencer-marketing-compliance`} element={<SafePage><CasinoCompliancePage /></SafePage>} />,
                  <Route key={`${p}/resources/affiliate`} path={`${p}/resources/affiliate-vs-influencer-marketing-igaming`} element={<SafePage><AffiliateVsInfluencer /></SafePage>} />,
                  <Route key={`${p}/resources/crypto`} path={`${p}/resources/crypto-casino-marketing-trends`} element={<SafePage><CryptoCasinoTrends /></SafePage>} />,
                  <Route key={`${p}/resources/twitch`} path={`${p}/resources/twitch-casino-marketing-guide`} element={<SafePage><TwitchCasinoGuide /></SafePage>} />,
                  <Route key={`${p}/resources/esports`} path={`${p}/resources/esports-betting-influencer-strategy`} element={<SafePage><EsportsBettingStrategy /></SafePage>} />,
                ])}

                <Route path="/case-studies" element={<SafePage><CaseStudiesPage /></SafePage>} />
                <Route path="/case-studies/:slug" element={<SafePage><CaseStudyDetailPage /></SafePage>} />
                <Route path="/blog" element={<SafePage><BlogIndexPage /></SafePage>} />
                <Route path="/blog/how-to-detect-fake-streamers-inflated-metrics" element={<SafePage><FakeStreamerDetection /></SafePage>} />
                <Route path="/blog/how-to-find-right-streamer-casino" element={<SafePage><FindRightStreamer /></SafePage>} />
                <Route path="/blog/twitch-casino-marketing-strategy-2026" element={<SafePage><TwitchCasinoStrategy /></SafePage>} />
                <Route path="/blog/measure-roi-influencer-marketing-igaming" element={<SafePage><MeasureROI /></SafePage>} />
                <Route path="/blog/affiliate-vs-influencer-marketing-casinos" element={<SafePage><AffiliateVsInfluencerCasino /></SafePage>} />
                <Route path="/blog/cost-hiring-twitch-casino-streamers" element={<SafePage><CostCasinoStreamers /></SafePage>} />
                <Route path="/blog/how-to-vet-gambling-influencers" element={<SafePage><VetGamblingInfluencers /></SafePage>} />
                <Route path="/blog/top-kpis-sportsbook-influencer-campaigns" element={<SafePage><SportsBookKPIs /></SafePage>} />
                <Route path="/blog/micro-vs-macro-influencers-igaming" element={<SafePage><MicroVsMacroIgaming /></SafePage>} />
                <Route path="/blog/revenue-share-deals-streamers" element={<SafePage><RevenueShareDeals /></SafePage>} />
                <Route path="/blog/scale-casino-acquisition-influencer-campaigns" element={<SafePage><ScaleCasinoAcquisition /></SafePage>} />
                <Route path="/blog/compliance-gambling-influencer-marketing" element={<SafePage><ComplianceGamblingInfluencer /></SafePage>} />
                <Route path="/blog/crypto-casino-influencer-marketing-strategies" element={<SafePage><CryptoCasinoInfluencer /></SafePage>} />
                <Route path="/blog/esports-betting-influencer-strategy" element={<SafePage><EsportsBettingInfluencer /></SafePage>} />
                <Route path="/blog/kick-vs-twitch-gambling-marketing" element={<SafePage><KickVsTwitch /></SafePage>} />
                <Route path="/blog/avoid-influencer-fraud-igaming" element={<SafePage><AvoidInfluencerFraud /></SafePage>} />
                <Route path="/blog/brand-ambassador-programs-casino" element={<SafePage><BrandAmbassadorPrograms /></SafePage>} />
                <Route path="/blog/casino-streamer-campaign-case-study" element={<SafePage><CasinoStreamerCaseStudy /></SafePage>} />
                <Route path="/blog/analyze-streamer-audience-demographics" element={<SafePage><AnalyzeStreamerDemographics /></SafePage>} />
                <Route path="/blog/conversion-tracking-influencer-campaigns" element={<SafePage><ConversionTracking /></SafePage>} />
                <Route path="/blog/incrementality-vs-attribution-gambling" element={<SafePage><IncrementalityVsAttribution /></SafePage>} />
                <Route path="/blog/common-mistakes-influencer-marketing-casinos" element={<SafePage><CommonMistakesCasino /></SafePage>} />
                <Route path="/blog/influencer-outreach-templates-igaming" element={<SafePage><InfluencerOutreachTemplates /></SafePage>} />
                <Route path="/blog/geo-targeting-gambling-influencer-campaigns" element={<SafePage><GeoTargetingGambling /></SafePage>} />
                <Route path="/blog/future-influencer-marketing-igaming-2026" element={<SafePage><FutureInfluencerMarketing /></SafePage>} />

                <Route path="/igaming-influencer-marketing-uk" element={<SafePage><GeoPageLoader geo="uk" /></SafePage>} />
                <Route path="/igaming-influencer-marketing-malta" element={<SafePage><GeoPageLoader geo="malta" /></SafePage>} />
                <Route path="/igaming-influencer-marketing-curacao" element={<SafePage><GeoPageLoader geo="curacao" /></SafePage>} />
                <Route path="/igaming-influencer-marketing-germany" element={<SafePage><GeoPageLoader geo="germany" /></SafePage>} />
                <Route path="/igaming-influencer-marketing-canada" element={<SafePage><GeoPageLoader geo="canada" /></SafePage>} />
                <Route path="/igaming-influencer-marketing-uae" element={<SafePage><GeoPageLoader geo="uae" /></SafePage>} />
                <Route path="/igaming-influencer-marketing-india" element={<SafePage><GeoPageLoader geo="india" /></SafePage>} />

                <Route path="*" element={<SafePage><NotFoundPage /></SafePage>} />
              </Routes>
              <Footer />
            </div>
          </div>
        </I18nProvider>
      </BrowserRouter>
    </ErrorBoundary>
  );
}

function GeoPageLoader({ geo }: { geo: string }) {
  const config = geoConfigs[geo];
  if (!config) {
    return (
      <Suspense fallback={<PageLoader />}>
        <NotFoundPage />
      </Suspense>
    );
  }
  return <GeoLandingPage geo={config} />;
}
