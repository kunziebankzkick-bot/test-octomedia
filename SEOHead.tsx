import { Helmet } from 'react-helmet-async';

interface HreflangEntry {
  hrefLang: string;
  href: string;
}

interface SEOHeadProps {
  title: string;
  description: string;
  canonical: string;
  ogImage?: string;
  ogType?: string;
  robots?: string;
  jsonLd?: Record<string, unknown> | Record<string, unknown>[];
  hreflang?: HreflangEntry[];
}

const SITE_NAME = 'Octo Media Group';
const DEFAULT_OG_IMAGE = 'https://octomedia.agency/og-image.jpg';
const SITE_BASE = 'https://octomedia.agency';

const LOCALE_PREFIXES: Record<string, string> = {
  en: '',
  ru: '/ru',
  es: '/es',
  uk: '/uk',
  sv: '/sv',
  de: '/de',
  fr: '/fr',
};

function buildHreflangEntries(canonical: string): HreflangEntry[] {
  const path = canonical.replace(SITE_BASE, '');
  const basePath = path.replace(/^\/(ru|es|uk|sv|de|fr)(\/|$)/, '/').replace(/\/$/, '') || '/';

  const entries: HreflangEntry[] = Object.entries(LOCALE_PREFIXES).map(([lang, prefix]) => ({
    hrefLang: lang,
    href: `${SITE_BASE}${prefix}${basePath === '/' ? (prefix ? '' : '/') : basePath}`,
  }));

  entries.push({
    hrefLang: 'x-default',
    href: `${SITE_BASE}${basePath === '/' ? '/' : basePath}`,
  });

  return entries;
}

export default function SEOHead({
  title,
  description,
  canonical,
  ogImage = DEFAULT_OG_IMAGE,
  ogType = 'website',
  robots = 'index, follow',
  jsonLd,
  hreflang,
}: SEOHeadProps) {
  const schemas = jsonLd
    ? Array.isArray(jsonLd)
      ? jsonLd
      : [jsonLd]
    : [];

  const hreflangEntries = hreflang ?? buildHreflangEntries(canonical);

  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="robots" content={robots} />
      <link rel="canonical" href={canonical} />

      {hreflangEntries.map((entry) => (
        <link key={entry.hrefLang} rel="alternate" hrefLang={entry.hrefLang} href={entry.href} />
      ))}

      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:url" content={canonical} />
      <meta property="og:type" content={ogType} />
      <meta property="og:site_name" content={SITE_NAME} />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />

      {schemas.map((schema, i) => (
        <script key={i} type="application/ld+json">
          {JSON.stringify(schema)}
        </script>
      ))}
    </Helmet>
  );
}
