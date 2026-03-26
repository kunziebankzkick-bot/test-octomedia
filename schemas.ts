const SITE_URL = 'https://octomedia.agency';

export const websiteSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  '@id': `${SITE_URL}/#website`,
  url: SITE_URL,
  name: 'Octo Media Group',
  description: 'The best iGaming influencer marketing agency for crypto casino and online casino brands. Verified gambling streamers on Twitch, YouTube, and Kick.',
  publisher: {
    '@type': 'Organization',
    '@id': `${SITE_URL}/#organization`,
  },
  potentialAction: {
    '@type': 'SearchAction',
    target: {
      '@type': 'EntryPoint',
      urlTemplate: `${SITE_URL}/?q={search_term_string}`,
    },
    'query-input': 'required name=search_term_string',
  },
};

export const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': ['Organization', 'ProfessionalService'],
  '@id': `${SITE_URL}/#organization`,
  name: 'Octo Media Group',
  alternateName: 'Octo Media',
  url: SITE_URL,
  logo: {
    '@type': 'ImageObject',
    url: `${SITE_URL}/image.png`,
    width: 400,
    height: 400,
  },
  image: `${SITE_URL}/Social_Media_Kit_Profile_Picture.jpg`,
  description:
    'Octo Media Group is the leading iGaming influencer marketing agency and casino streamer marketing specialist. We drive player acquisition, first-time deposits (FTDs), and long-term retention for crypto casino, online casino, and sportsbook brands worldwide through verified streamers on Twitch, YouTube, and Kick.',
  slogan: 'iGaming acquisition optimized for high-LTV yield.',
  email: 'contact@octomediagroup.com',
  foundingDate: '2024',
  numberOfEmployees: {
    '@type': 'QuantitativeValue',
    value: 8,
  },
  knowsAbout: [
    'iGaming influencer marketing',
    'casino influencer marketing agency',
    'gambling influencer marketing',
    'crypto casino streamer marketing',
    'Twitch casino streamers',
    'YouTube gambling influencers',
    'Kick gambling streamers',
    'sportsbook influencer marketing',
    'iGaming affiliate marketing',
    'player acquisition for online casinos',
    'first-time deposit campaigns',
    'compliant casino influencer marketing',
    'gambling influencer marketing strategy',
    'how to promote an online casino with influencers',
    'cost of Twitch casino sponsorship',
    'hire gambling streamers',
    'iGaming performance marketing',
  ],
  areaServed: [
    {
      '@type': 'Place',
      name: 'Europe',
    },
    {
      '@type': 'Place',
      name: 'North America',
    },
    {
      '@type': 'Place',
      name: 'Latin America',
    },
    {
      '@type': 'Place',
      name: 'Oceania',
    },
    {
      '@type': 'Place',
      name: 'Asia-Pacific',
    },
  ],
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'iGaming Marketing Services',
    itemListElement: [
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'iGaming Streamer Marketing',
          url: `${SITE_URL}/services#streamer-marketing`,
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'iGaming Affiliate Marketing',
          url: `${SITE_URL}/services#affiliate-marketing`,
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'iGaming Influencer Marketing',
          url: `${SITE_URL}/services#influencer-marketing`,
        },
      },
    ],
  },
  founder: [
    {
      '@type': 'Person',
      name: 'Octo Media Founding Team',
      jobTitle: 'iGaming Industry Veterans',
      description: 'A collective of 8 casino industry professionals with combined experience in player acquisition, streamer marketing, and iGaming performance campaigns.',
      worksFor: {
        '@type': 'Organization',
        '@id': `${SITE_URL}/#organization`,
      },
    },
  ],
  sameAs: ['https://t.me/OctoMediaGroup'],
  contactPoint: {
    '@type': 'ContactPoint',
    email: 'contact@octomediagroup.com',
    contactType: 'sales',
    availableLanguage: ['English'],
  },
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: '5.0',
    reviewCount: '6',
    bestRating: '5',
    worstRating: '1',
  },
  review: [
    {
      '@type': 'Review',
      reviewRating: { '@type': 'Rating', ratingValue: '5', bestRating: '5', worstRating: '1' },
      author: { '@type': 'Person', name: 'Brand Manager' },
      reviewBody: "Octo Media's casino streamer marketing strategy helped us scale quickly in key iGaming markets. Their execution and transparency are top-tier.",
    },
    {
      '@type': 'Review',
      reviewRating: { '@type': 'Rating', ratingValue: '5', bestRating: '5', worstRating: '1' },
      author: { '@type': 'Person', name: 'Head of Marketing' },
      reviewBody: 'Working with Octo Media transformed our iGaming player acquisition pipeline. Their deep understanding of gambling influencer marketing delivered measurable FTD results from day one.',
    },
    {
      '@type': 'Review',
      reviewRating: { '@type': 'Rating', ratingValue: '5', bestRating: '5', worstRating: '1' },
      author: { '@type': 'Person', name: 'Partnership Director' },
      reviewBody: 'The quality of Twitch casino streamers and iGaming influencers Octo Media sources is unmatched. Our brand visibility in competitive gambling markets grew significantly within weeks.',
    },
    {
      '@type': 'Review',
      reviewRating: { '@type': 'Rating', ratingValue: '5', bestRating: '5', worstRating: '1' },
      author: { '@type': 'Person', name: 'Growth Lead' },
      reviewBody: "Octo Media brought a data-driven approach to our iGaming influencer campaigns that we hadn't seen before. Retention metrics improved across every channel they managed.",
    },
    {
      '@type': 'Review',
      reviewRating: { '@type': 'Rating', ratingValue: '5', bestRating: '5', worstRating: '1' },
      author: { '@type': 'Person', name: 'Acquisition Manager' },
      reviewBody: 'Partnering with Octo Media gave us access to a curated network of high-impact gambling streamers. Our crypto casino campaign performance consistently exceeded benchmarks.',
    },
    {
      '@type': 'Review',
      reviewRating: { '@type': 'Rating', ratingValue: '5', bestRating: '5', worstRating: '1' },
      author: { '@type': 'Person', name: 'Growth Lead' },
      reviewBody: 'The professionalism Octo Media brought to our casino influencer marketing campaigns set them apart. Their player retention focus delivered exceptional ROI for our sportsbook brand.',
    },
  ],
};

export const homeFaqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What is the best iGaming influencer marketing agency?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Octo Media Group is widely regarded as a leading iGaming influencer marketing agency, built by 8 casino industry veterans. Unlike generic agencies, we specialize exclusively in iGaming, crypto casino, and sportsbook brands — delivering verified streamers on Twitch, YouTube, and Kick with measurable FTD results and full ROI transparency.',
      },
    },
    {
      '@type': 'Question',
      name: 'How does casino influencer marketing work?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Casino influencer marketing connects gambling and crypto casino brands with verified content creators — primarily streamers on Twitch, YouTube, and Kick — who produce live content showcasing the platform to their audiences. Campaigns are structured around player acquisition KPIs: sign-ups, first-time deposits (FTDs), and long-term retention. A specialized iGaming influencer agency handles streamer sourcing, compliance, campaign execution, and ROI reporting.',
      },
    },
    {
      '@type': 'Question',
      name: 'How much does Twitch casino sponsorship cost?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The cost of a Twitch casino sponsorship varies by streamer size, content type, and campaign scope. Micro-influencer casino streams can start from a few hundred dollars per session, while established Twitch gambling streamers with large audiences command thousands per sponsored stream. Octo Media Group offers a $10,000 demo pilot that includes 5–10 verified streamers, 10–15 hours of live content, and a full ROI report — giving brands proof of concept before scaling.',
      },
    },
    {
      '@type': 'Question',
      name: 'How do you promote an online casino with influencers?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Promoting an online casino with influencers involves: (1) Identifying verified gambling content creators with real, engaged audiences matching your target geo; (2) Structuring compliance-aware sponsorship agreements; (3) Briefing streamers on brand messaging, bonuses, and responsible gambling requirements; (4) Executing live or recorded content across Twitch, YouTube, Kick, or TikTok; (5) Tracking conversions via unique referral links and promo codes. Octo Media Group manages this entire process end-to-end for iGaming brands.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is compliant casino influencer marketing?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Compliant casino influencer marketing ensures campaigns meet local gambling advertising regulations, platform policies, and responsible gambling standards. This includes age-gating content, including required disclaimers, avoiding claims that target problem gamblers, and respecting geo-specific restrictions. Octo Media Group applies compliance-aware practices across all streamer and influencer campaigns, protecting both brands and creators.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is sportsbook influencer marketing?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Sportsbook influencer marketing uses content creators — YouTube channels, Twitch streamers, TikTok creators, and sports betting tipsters — to drive brand awareness and new player acquisition for online sports betting platforms. Campaigns typically leverage live bet streams, tipster content, and affiliate-style partnerships. Octo Media Group delivers sportsbook influencer marketing campaigns focused on real depositing players, not just impressions.',
      },
    },
    {
      '@type': 'Question',
      name: 'What makes you different from other iGaming marketing agencies?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Most agencies sell reach. We deliver verified streamers, real players, and measurable ROI. Every campaign is built around deposits, retention, and LTV — not vanity metrics. We are built by 8 casino industry insiders who have operated on both the brand and agency side of iGaming marketing.',
      },
    },
    {
      '@type': 'Question',
      name: 'How do you verify gambling streamers and influencers?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Every gambling streamer and influencer in our network is manually vetted for audience authenticity, real engagement quality, geographic reach, and past iGaming conversion performance. We reject creators with bot-inflated metrics and only onboard those with proven deposit-driving track records on Twitch, YouTube, or Kick.',
      },
    },
    {
      '@type': 'Question',
      name: "What's included in the $10,000 iGaming marketing demo?",
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'A 2-week pilot with 5–10 verified gambling streamers, 10–15 hours of live casino content, and a full ROI performance report. You get measurable proof of our casino influencer marketing approach before committing to scale — no long-term contracts required.',
      },
    },
    {
      '@type': 'Question',
      name: 'Which markets do you serve for iGaming influencer marketing?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'We operate across 25+ markets including Europe (UK, Germany, Malta), North America (Canada, US), Oceania (Australia, New Zealand), Asia-Pacific (Taiwan), Dubai, and emerging LATAM markets. Every gambling streamer and influencer is matched to your specific target geo for maximum conversion relevance.',
      },
    },
    {
      '@type': 'Question',
      name: 'What platforms do your gambling influencer campaigns run on?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'We run iGaming influencer campaigns on Twitch (casino streamers and gambling live streams), YouTube (gambling channels and casino review content), Kick (emerging gambling streamers), and TikTok (short-form casino content creators). Multi-platform execution ensures maximum reach and frequency for crypto casino and online casino brands.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is the ROI of iGaming influencer marketing?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Our iGaming influencer marketing clients typically see 3–5x ROI on campaigns, with cost-per-FTD significantly lower than traditional paid acquisition channels. We provide full weekly transparency: spend, first-time deposits, total deposits, player retention rates, and ROI — broken down per streamer or influencer.',
      },
    },
    {
      '@type': 'Question',
      name: 'Do you work with crypto casino brands?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. Crypto casino influencer marketing is a core specialization. We connect Bitcoin casino and crypto gambling platforms with verified streamers and influencers whose audiences are already engaged in both cryptocurrency and online gaming — maximizing conversion rates and player lifetime value.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is your iGaming influencer marketing pricing model?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'We offer a $10,000 demo pilot for new brands, then scalable monthly retainers aligned to your campaign scope, target geos, and growth stage. No hidden fees — all pricing is transparent and tied to performance delivery.',
      },
    },
    {
      '@type': 'Question',
      name: 'How do I get started with casino influencer marketing?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Book a free 30-minute consultation with our iGaming marketing team. We will review your current player acquisition strategy, identify the best gambling streamer and influencer channels for your brand, and propose a performance-driven campaign plan. If there is a fit, we launch a demo and prove results before scaling.',
      },
    },
  ],
};

export const streamersFaqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'How do I get hired as a casino streamer?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'To get hired as a casino streamer or gambling influencer, apply through the Octo Media Group streamer network. We manually review every application, evaluating your audience quality, platform engagement, geographic reach, and iGaming content history. Accepted streamers receive access to consistent casino sponsorships on Twitch, YouTube, or Kick.',
      },
    },
    {
      '@type': 'Question',
      name: 'How do I find gambling sponsorships on Twitch, YouTube, or Kick?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The most reliable way to secure ongoing gambling sponsorships on Twitch, YouTube, or Kick is through a dedicated iGaming streamer network like Octo Media Group. We connect verified casino streamers directly with iGaming brands seeking authentic live content, offering better rates and faster payments than self-sourced affiliate deals.',
      },
    },
    {
      '@type': 'Question',
      name: 'What are the requirements to join the Octo Media casino streamer network?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'We look for gambling streamers with real, engaged audiences on Twitch, YouTube, or Kick — not inflated follower counts. Experience with iGaming content is valued, but we also onboard emerging streamers with strong growth potential in our target markets. Compliance with responsible gambling standards is required for all streamers in our network.',
      },
    },
    {
      '@type': 'Question',
      name: 'How are streamer payments handled?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'All casino streamer payments are processed on a clear, agreed schedule. We offer competitive rates and faster payouts compared to standard iGaming affiliate programs, with full transparency on campaign earnings and performance metrics.',
      },
    },
    {
      '@type': 'Question',
      name: 'Which platforms does Octo Media support for casino streaming?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'We run gambling influencer campaigns across Twitch casino streams, YouTube gambling channels, Kick casino streamers, and TikTok casino content. Multi-platform streamers are especially valued in our network as they maximize campaign reach for our iGaming brand partners.',
      },
    },
  ],
};

export const servicesFaqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What iGaming influencer marketing services does Octo Media offer?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Octo Media Group offers three core iGaming marketing services: (1) iGaming Streamer Marketing — verified live streaming campaigns on Twitch, YouTube, and Kick for casino and crypto casino brands; (2) iGaming Affiliate Marketing — performance-based CPA and revenue share affiliate programs for online casinos and sportsbooks; (3) iGaming Influencer Marketing — strategic content creator campaigns for brand awareness and player acquisition across all major platforms.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is the difference between iGaming streamer marketing and influencer marketing?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'iGaming streamer marketing focuses on live streaming platforms — primarily Twitch, YouTube Live, and Kick — where casino streamers broadcast real-time gameplay to drive player acquisition. iGaming influencer marketing is broader, encompassing YouTube reviews, TikTok content, Instagram promotion, and other creator-led campaigns. Octo Media Group delivers both as distinct services with dedicated KPIs for each channel.',
      },
    },
    {
      '@type': 'Question',
      name: 'How do iGaming affiliate marketing programs work?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'iGaming affiliate marketing pays content creators and partners a commission — typically CPA (cost per acquisition), revenue share, or a hybrid — for every player they refer who registers and deposits at an online casino or sportsbook. Octo Media Group builds and manages these affiliate programs, handling tracking, creative assets, compliance, and performance reporting for iGaming brands.',
      },
    },
    {
      '@type': 'Question',
      name: 'How do you measure the success of an iGaming influencer campaign?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'We measure iGaming influencer campaign success through first-time deposits (FTDs), total deposit volume, player retention rates, cost-per-FTD, and overall campaign ROI. Every Octo Media campaign includes weekly performance reports broken down by streamer or influencer, providing full transparency on spend versus results.',
      },
    },
  ],
};

export const serviceSchemas = [
  {
    '@context': 'https://schema.org',
    '@type': 'Service',
    '@id': `${SITE_URL}/services#streamer-marketing`,
    name: 'iGaming Streamer Marketing',
    alternateName: 'Casino Streamer Marketing',
    provider: { '@type': 'Organization', '@id': `${SITE_URL}/#organization` },
    description:
      'Performance-driven casino streamer marketing for iGaming and crypto casino brands. We source, vet, and manage verified Twitch casino streamers, YouTube gambling influencers, and Kick gambling streamers to drive real player acquisition, first-time deposits (FTDs), and long-term retention. Our gambling influencer marketing strategy is built exclusively for iGaming brands.',
    serviceType: 'iGaming Streamer Marketing',
    areaServed: 'Worldwide',
    url: `${SITE_URL}/services#streamer-marketing`,
    offers: {
      '@type': 'Offer',
      description: 'Campaign pilot starting at $10,000 with full ROI reporting',
      availability: 'https://schema.org/InStock',
    },
  },
  {
    '@context': 'https://schema.org',
    '@type': 'Service',
    '@id': `${SITE_URL}/services#affiliate-marketing`,
    name: 'iGaming Affiliate Marketing',
    alternateName: 'Casino Affiliate Marketing',
    provider: { '@type': 'Organization', '@id': `${SITE_URL}/#organization` },
    description:
      'Performance-based affiliate marketing for iGaming brands including crypto casinos, traditional online casinos, and sportsbooks. We build CPA, revenue share, and hybrid affiliate programs with market-targeted creatives, compliance-aware management, and real-time conversion tracking for sustained gambling player acquisition.',
    serviceType: 'iGaming Affiliate Marketing',
    areaServed: 'Worldwide',
    url: `${SITE_URL}/services#affiliate-marketing`,
  },
  {
    '@context': 'https://schema.org',
    '@type': 'Service',
    '@id': `${SITE_URL}/services#influencer-marketing`,
    name: 'iGaming Influencer Marketing',
    alternateName: 'Gambling Influencer Marketing',
    provider: { '@type': 'Organization', '@id': `${SITE_URL}/#organization` },
    description:
      'Strategic gambling influencer marketing campaigns for iGaming and crypto casino platforms. We connect brands with verified casino influencers and content creators on YouTube, TikTok, Twitch, and Kick for brand awareness, player acquisition, and long-term engagement. Full campaign management from influencer briefing to ROI reporting.',
    serviceType: 'iGaming Influencer Marketing',
    areaServed: 'Worldwide',
    url: `${SITE_URL}/services#influencer-marketing`,
  },
];

export const reviewSchemas = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  '@id': `${SITE_URL}/#organization`,
  name: 'Octo Media Group',
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: '5.0',
    reviewCount: '6',
    bestRating: '5',
    worstRating: '1',
  },
  review: [
    {
      '@type': 'Review',
      reviewRating: {
        '@type': 'Rating',
        ratingValue: '5',
        bestRating: '5',
        worstRating: '1',
      },
      author: { '@type': 'Person', name: 'Brand Manager' },
      reviewBody:
        "Octo Media's casino streamer marketing strategy helped us scale quickly in key iGaming markets. Their execution and transparency are top-tier.",
    },
    {
      '@type': 'Review',
      reviewRating: {
        '@type': 'Rating',
        ratingValue: '5',
        bestRating: '5',
        worstRating: '1',
      },
      author: { '@type': 'Person', name: 'Head of Marketing' },
      reviewBody:
        'Working with Octo Media transformed our iGaming player acquisition pipeline. Their deep understanding of gambling influencer marketing delivered measurable FTD results from day one.',
    },
    {
      '@type': 'Review',
      reviewRating: {
        '@type': 'Rating',
        ratingValue: '5',
        bestRating: '5',
        worstRating: '1',
      },
      author: { '@type': 'Person', name: 'Partnership Director' },
      reviewBody:
        'The quality of Twitch casino streamers and iGaming influencers Octo Media sources is unmatched. Our brand visibility in competitive gambling markets grew significantly within weeks.',
    },
    {
      '@type': 'Review',
      reviewRating: {
        '@type': 'Rating',
        ratingValue: '5',
        bestRating: '5',
        worstRating: '1',
      },
      author: { '@type': 'Person', name: 'Growth Lead' },
      reviewBody:
        "Octo Media brought a data-driven approach to our iGaming influencer campaigns that we hadn't seen before. Retention metrics improved across every channel they managed.",
    },
    {
      '@type': 'Review',
      reviewRating: {
        '@type': 'Rating',
        ratingValue: '5',
        bestRating: '5',
        worstRating: '1',
      },
      author: { '@type': 'Person', name: 'Acquisition Manager' },
      reviewBody:
        'Partnering with Octo Media gave us access to a curated network of high-impact gambling streamers. Our crypto casino campaign performance consistently exceeded benchmarks.',
    },
    {
      '@type': 'Review',
      reviewRating: {
        '@type': 'Rating',
        ratingValue: '5',
        bestRating: '5',
        worstRating: '1',
      },
      author: { '@type': 'Person', name: 'Growth Lead' },
      reviewBody:
        'The professionalism Octo Media brought to our casino influencer marketing campaigns set them apart. Their player retention focus delivered exceptional ROI for our sportsbook brand.',
    },
  ],
};

export function breadcrumbSchema(items: { name: string; url: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: item.name,
      item: item.url,
    })),
  };
}
