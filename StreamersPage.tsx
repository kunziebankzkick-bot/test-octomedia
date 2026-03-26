import { useEffect } from 'react';
import SEOHead from '../../components/SEOHead';
import { breadcrumbSchema, streamersFaqSchema } from '../../seo/schemas';
import StreamersHero from './StreamersHero';
import WhyJoin from './WhyJoin';
import HowItWorks from './HowItWorks';
import WhatYouGet from './WhatYouGet';
import StreamerBenefits from './StreamerBenefits';
import StreamerComparison from './StreamerComparison';
import Eligibility from './Eligibility';
import StreamersFAQ from './StreamersFAQ';
import ApplicationForm from './ApplicationForm';
import { useI18n } from '../../i18n/context';
import { SITE_URL } from '../../utils/canonicalUrl';

export default function StreamersPage() {
  const { t } = useI18n();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <SEOHead
        title={t.meta.streamers.title}
        description={t.meta.streamers.description}
        canonical={`${SITE_URL}/streamers`}
        jsonLd={[
          streamersFaqSchema,
          breadcrumbSchema([
            { name: 'Home', url: 'https://octomedia.agency/' },
            { name: 'For Streamers', url: 'https://octomedia.agency/streamers' },
          ]),
        ]}
      />
      <StreamersHero />
      <WhyJoin />
      <HowItWorks />
      <WhatYouGet />
      <StreamerBenefits />
      <StreamerComparison />
      <Eligibility />
      <StreamersFAQ />
      <ApplicationForm />
    </>
  );
}
