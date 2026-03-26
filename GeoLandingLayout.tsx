import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle, MapPin } from 'lucide-react';
import SEOHead from '../../components/SEOHead';
import { breadcrumbSchema, organizationSchema } from '../../seo/schemas';
import { SITE_URL } from '../../utils/canonicalUrl';

interface GeoConfig {
  slug: string;
  country: string;
  countryCode: string;
  flag: string;
  headline: string;
  subheadline: string;
  description: string;
  regulatoryBody: string;
  licenseTypes: string[];
  keyInsight: string;
  platforms: string[];
  complianceNotes: string[];
  caseStudySnippet: string;
  metaTitle: string;
  metaDescription: string;
}

export function GeoLandingPage({ geo }: { geo: GeoConfig }) {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const geoServiceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: `iGaming Influencer Marketing Agency — ${geo.country}`,
    provider: { '@type': 'Organization', '@id': `${SITE_URL}/#organization` },
    description: geo.description,
    areaServed: {
      '@type': 'Country',
      name: geo.country,
    },
    url: `${SITE_URL}/igaming-influencer-marketing-${geo.slug}`,
  };

  return (
    <>
      <SEOHead
        title={geo.metaTitle}
        description={geo.metaDescription}
        canonical={`${SITE_URL}/igaming-influencer-marketing-${geo.slug}`}
        jsonLd={[
          geoServiceSchema,
          organizationSchema,
          breadcrumbSchema([
            { name: 'Home', url: `${SITE_URL}/` },
            { name: 'iGaming Influencer Marketing', url: `${SITE_URL}/services` },
            { name: `${geo.country}`, url: `${SITE_URL}/igaming-influencer-marketing-${geo.slug}` },
          ]),
        ]}
      />

      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(137,127,217,0.08),transparent_50%)]" />
        <div className="max-w-5xl mx-auto px-6 relative z-10">
          <nav className="flex items-center gap-2 text-xs font-poppins text-white/30 mb-8 flex-wrap">
            <Link to="/" className="hover:text-white/60 transition-colors">Home</Link>
            <span>/</span>
            <Link to="/services" className="hover:text-white/60 transition-colors">iGaming Marketing Services</Link>
            <span>/</span>
            <span className="text-white/50">{geo.country}</span>
          </nav>

          <div className="flex items-center gap-3 mb-4">
            <span className="text-3xl" role="img" aria-label={`${geo.country} flag`}>{geo.flag}</span>
            <div className="flex items-center gap-2 px-3 py-1 bg-brand-pink/10 border border-brand-pink/20 rounded-full">
              <MapPin className="w-3 h-3 text-brand-pink" />
              <span className="text-brand-pink font-poppins font-semibold text-xs tracking-wider uppercase">{geo.country}</span>
            </div>
          </div>

          <h1 className="font-poppins font-black text-4xl md:text-5xl text-white leading-tight mb-4">
            {geo.headline}
          </h1>
          <p className="font-poppins text-xl text-white/50 leading-relaxed max-w-3xl mb-8">
            {geo.subheadline}
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="https://calendly.com/contact-octomediagroup/30min"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-7 py-3 rounded-xl bg-gradient-to-r from-brand-pink to-brand-purple font-poppins font-bold text-sm text-white hover:shadow-xl hover:shadow-brand-pink/20 transition-all duration-300 hover:scale-105"
            >
              Get a Free {geo.country} Strategy Call
              <ArrowRight className="w-4 h-4" />
            </a>
            <Link
              to="/services"
              className="inline-flex items-center gap-2 px-7 py-3 rounded-xl bg-white/5 border border-white/15 font-poppins font-bold text-sm text-white hover:bg-white/10 transition-all duration-300"
            >
              View All Services
            </Link>
          </div>
        </div>
      </section>

      <section className="pb-8">
        <div className="max-w-5xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="lg:col-span-2 space-y-8">
              <div>
                <h2 className="font-poppins font-bold text-2xl text-white mb-4">
                  iGaming Influencer Marketing in {geo.country}
                </h2>
                <p className="font-poppins text-sm text-white/50 leading-relaxed">
                  {geo.description}
                </p>
              </div>

              <div>
                <h2 className="font-poppins font-bold text-xl text-white mb-4">
                  Platforms We Run {geo.country} iGaming Campaigns On
                </h2>
                <div className="grid grid-cols-2 gap-3">
                  {geo.platforms.map((platform) => (
                    <div key={platform} className="flex items-center gap-2 p-3 rounded-lg bg-white/[0.03] border border-white/8">
                      <CheckCircle className="w-4 h-4 text-brand-pink flex-shrink-0" />
                      <span className="font-poppins text-sm text-white/60">{platform}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h2 className="font-poppins font-bold text-xl text-white mb-4">
                  {geo.country} iGaming Compliance Overview
                </h2>
                <div className="p-5 rounded-xl bg-white/[0.02] border border-white/8">
                  <p className="font-poppins text-xs text-brand-pink font-semibold uppercase tracking-wider mb-3">
                    Regulatory Body: {geo.regulatoryBody}
                  </p>
                  <ul className="space-y-2">
                    {geo.complianceNotes.map((note) => (
                      <li key={note} className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-white/30 mt-0.5 flex-shrink-0" />
                        <span className="font-poppins text-sm text-white/45 leading-relaxed">{note}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div>
                <h2 className="font-poppins font-bold text-xl text-white mb-3">
                  {geo.country} iGaming Market Insight
                </h2>
                <blockquote className="border-l-2 border-brand-pink pl-4">
                  <p className="font-poppins text-sm text-white/50 leading-relaxed italic">
                    {geo.keyInsight}
                  </p>
                </blockquote>
              </div>
            </div>

            <div className="space-y-5">
              <div className="p-6 rounded-2xl bg-gradient-to-br from-brand-pink/10 to-brand-purple/10 border border-white/10">
                <h3 className="font-poppins font-bold text-base text-white mb-4">
                  {geo.country} Licensing
                </h3>
                <ul className="space-y-2">
                  {geo.licenseTypes.map((lt) => (
                    <li key={lt} className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-brand-pink flex-shrink-0" />
                      <span className="font-poppins text-sm text-white/55">{lt}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/8">
                <h3 className="font-poppins font-bold text-sm text-white mb-3">
                  Campaign Example
                </h3>
                <p className="font-poppins text-xs text-white/45 leading-relaxed">
                  {geo.caseStudySnippet}
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/8 space-y-3">
                <h3 className="font-poppins font-bold text-sm text-white">
                  Our {geo.country} Services
                </h3>
                <Link to="/services#streamer-marketing" className="flex items-center gap-2 text-sm font-poppins text-white/50 hover:text-white/70 transition-colors">
                  <ArrowRight className="w-3 h-3 text-brand-pink" />
                  Casino Streamer Marketing
                </Link>
                <Link to="/services#influencer-marketing" className="flex items-center gap-2 text-sm font-poppins text-white/50 hover:text-white/70 transition-colors">
                  <ArrowRight className="w-3 h-3 text-brand-pink" />
                  Gambling Influencer Marketing
                </Link>
                <Link to="/services#affiliate-marketing" className="flex items-center gap-2 text-sm font-poppins text-white/50 hover:text-white/70 transition-colors">
                  <ArrowRight className="w-3 h-3 text-brand-pink" />
                  iGaming Affiliate Marketing
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 border-t border-white/5">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="font-poppins font-bold text-2xl text-white mb-3">
            Launch Your {geo.country} iGaming Campaign
          </h2>
          <p className="font-poppins text-sm text-white/45 mb-6 leading-relaxed">
            Our team has hands-on experience running compliant iGaming influencer campaigns in {geo.country}. Book a free 30-minute consultation to discuss your player acquisition goals.
          </p>
          <a
            href="https://calendly.com/contact-octomediagroup/30min"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-7 py-3 rounded-xl bg-gradient-to-r from-brand-pink to-brand-purple font-poppins font-bold text-sm text-white hover:shadow-xl hover:shadow-brand-pink/20 transition-all duration-300 hover:scale-105"
          >
            Book Free {geo.country} Strategy Call
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </section>

      <section className="py-8 border-t border-white/5">
        <div className="max-w-5xl mx-auto px-6">
          <p className="font-poppins text-xs text-white/20 leading-relaxed">
            Octo Media Group delivers <Link to="/services#influencer-marketing" className="text-white/30 underline hover:text-white/50 transition-colors">gambling influencer marketing</Link> and{' '}
            <Link to="/services#streamer-marketing" className="text-white/30 underline hover:text-white/50 transition-colors">casino streamer marketing</Link> campaigns for iGaming brands operating in {geo.country}.
            All campaigns are structured in compliance with {geo.regulatoryBody} requirements and platform-specific gambling content policies.
            <Link to="/resources/casino-influencer-marketing-compliance" className="text-white/30 underline hover:text-white/50 transition-colors"> Read our compliance guide</Link> for more detail on {geo.country} gambling advertising regulations.
          </p>
        </div>
      </section>
    </>
  );
}
