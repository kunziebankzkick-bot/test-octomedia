import SEOHead from '../../components/SEOHead';
import { breadcrumbSchema, organizationSchema } from '../../seo/schemas';
import WhyUsHero from './WhyUsHero';
import FoundingStory from './FoundingStory';
import FoundingTeam from './FoundingTeam';
import Differentiators from './Differentiators';
import WhyUsClosing from './WhyUsClosing';
import { useI18n } from '../../i18n/context';
import { SITE_URL } from '../../utils/canonicalUrl';

function WhyUsPage() {
  const { t } = useI18n();
  return (
    <>
      <SEOHead
        title={t.meta.whyUs.title}
        description={t.meta.whyUs.description}
        canonical={`${SITE_URL}/why-us`}
        jsonLd={[
          organizationSchema,
          breadcrumbSchema([
            { name: 'Home', url: 'https://octomedia.agency/' },
            { name: 'Why Us', url: 'https://octomedia.agency/why-us' },
          ]),
        ]}
      />
      <WhyUsHero />
      <FoundingStory />
      <FoundingTeam />
      <Differentiators />
      <WhyUsClosing />
    </>
  );
}

export default WhyUsPage;
