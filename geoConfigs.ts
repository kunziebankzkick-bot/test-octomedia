export interface GeoConfig {
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

export const geoConfigs: Record<string, GeoConfig> = {
  uk: {
    slug: 'uk',
    country: 'United Kingdom',
    countryCode: 'GB',
    flag: '🇬🇧',
    headline: 'iGaming Influencer Marketing Agency — United Kingdom',
    subheadline: 'Compliant casino streamer and gambling influencer campaigns for UKGC-licensed operators. Verified Twitch, YouTube & Kick streamers targeting UK gambling audiences.',
    description: 'The UK is one of the world\'s most valuable — and most strictly regulated — online gambling markets. Octo Media Group delivers compliant iGaming influencer marketing campaigns for UKGC-licensed casino and sportsbook operators, connecting brands with verified UK gambling streamers on Twitch, YouTube, and Kick. Every UK campaign is structured to meet ASA CAP Code standards, UKGC marketing requirements, and responsible gambling disclosure obligations. Our UK streamer network includes creators with proven UK audience demographics and measurable first-time deposit track records.',
    regulatoryBody: 'UKGC (UK Gambling Commission) & ASA',
    licenseTypes: [
      'UKGC Online Casino License',
      'UKGC Remote Gambling License',
      'UKGC Sportsbook License',
    ],
    keyInsight: 'The UK online gambling market generates over £14bn GGR annually. Casino streamer content on Twitch and YouTube reaches millions of UK gambling-age adults — but UKGC compliance is non-negotiable. Brands that invest in compliant, vetted influencer campaigns build sustainable UK audience acquisition vs. those relying on grey-market approaches.',
    platforms: [
      'Twitch UK Casino Streamers',
      'YouTube UK Gambling Channels',
      'Kick UK Streamers',
      'TikTok UK (age-restricted)',
    ],
    complianceNotes: [
      'All influencer content must comply with ASA CAP Code gambling rules',
      'BeGambleAware.org or equivalent responsible gambling messaging required',
      'Under-18 audience restrictions — no content appealing to minors',
      'Paid sponsorship disclosure mandatory in all sponsored content',
      'Only UKGC-licensed operators may be promoted to UK audiences',
      'Bonus terms must be accurately represented with T&Cs accessible',
    ],
    caseStudySnippet: 'UK-market iGaming streamer campaigns on Twitch and YouTube typically deliver CPFTD of £45–£110. A 6-week multi-streamer campaign targeting UK casino audiences generated 340 FTDs with £67 average CPFTD and 32% D30 retention.',
    metaTitle: 'iGaming Influencer Marketing Agency UK | Casino Streamer Campaigns | Octo Media',
    metaDescription: 'UKGC-compliant casino influencer marketing and Twitch casino streamer campaigns for UK iGaming brands. Verified UK gambling influencers, proven FTD ROI. Book a strategy call.',
  },

  malta: {
    slug: 'malta',
    country: 'Malta',
    countryCode: 'MT',
    flag: '🇲🇹',
    headline: 'iGaming Influencer Marketing Agency — Malta',
    subheadline: 'MGA-compliant streamer and influencer marketing for Malta-licensed casino and sportsbook operators. Europe-wide campaign delivery from the iGaming hub.',
    description: 'Malta is the iGaming capital of Europe — home to more licensed online casino and sportsbook operators than anywhere else in the world. Octo Media Group delivers MGA-compliant iGaming influencer marketing for Malta-licensed brands, supporting both local market campaigns and pan-European player acquisition strategies. Our Malta iGaming marketing expertise covers streamer campaigns on Twitch and YouTube targeting key European markets (UK, Germany, Nordics, Southern Europe) from MGA-licensed operator bases, with full compliance to MGA marketing license conditions.',
    regulatoryBody: 'MGA (Malta Gaming Authority)',
    licenseTypes: [
      'MGA Gaming Service License (B2C)',
      'MGA Critical Gaming Supply License (B2B)',
    ],
    keyInsight: 'Malta-licensed operators account for a significant majority of Europe\'s online gambling GGR. Influencer marketing campaigns run from Malta bases often target multi-market European audiences — requiring geo-layered compliance approaches that cover UKGC, German GlüNeuRStV, and market-specific responsible gambling standards simultaneously.',
    platforms: [
      'Twitch EU Casino Streamers',
      'YouTube EU Gambling Channels',
      'Kick EU Streamers',
      'Multi-market European Coverage',
    ],
    complianceNotes: [
      'MGA licensees are responsible for ensuring affiliate/influencer marketing meets license conditions',
      'All marketing must include responsible gambling messaging per MGA requirements',
      'Content must not target minors or vulnerable individuals',
      'Bonus promotions require accurate T&C representation',
      'Geo-targeting must exclude prohibited jurisdictions',
      'MGA operators must maintain records of all marketing activities',
    ],
    caseStudySnippet: 'A Malta-licensed crypto casino running multi-market EU influencer campaigns across Twitch and YouTube achieved average CPFTD of €52 across UK, German, and Nordic audiences, with a 28% D30 retention rate — outperforming their existing affiliate channel CPFTD of €95.',
    metaTitle: 'iGaming Influencer Marketing Agency Malta | MGA-Compliant Casino Campaigns | Octo Media',
    metaDescription: 'MGA-compliant iGaming influencer marketing for Malta-licensed casino and sportsbook brands. Pan-European streamer campaigns with proven player acquisition ROI.',
  },

  curacao: {
    slug: 'curacao',
    country: 'Curaçao',
    countryCode: 'CW',
    flag: '🇨🇼',
    headline: 'Crypto Casino Influencer Marketing — Curaçao Licensed Brands',
    subheadline: 'Influencer and streamer marketing for Curaçao eGaming licensed crypto casinos. Platform-compliant campaigns on Twitch, YouTube, Kick & TikTok targeting global iGaming audiences.',
    description: 'Curaçao eGaming licensing is the most widely held license among crypto casino and blockchain gambling platforms globally. Octo Media Group has deep expertise in influencer marketing for Curaçao-licensed operators — understanding the platform-level compliance requirements that govern where and how Curaçao casino brands can run streaming and influencer campaigns. We build geo-targeted campaigns that reach your licensed markets while navigating Twitch, YouTube, and Kick platform policies for gambling content. Our crypto casino streamer network is particularly well-suited to Curaçao-licensed brands targeting crypto-native audiences.',
    regulatoryBody: 'Curaçao Gaming Control Board (GCB)',
    licenseTypes: [
      'Curaçao eGaming License (Sublicense)',
      'Curaçao GCB Master License',
    ],
    keyInsight: 'Curaçao-licensed crypto casinos face unique influencer marketing challenges: the license is internationally recognized but not accepted in all major markets. Campaigns must be geo-restricted to permitted markets, and platform-level restrictions (Twitch\'s 2022 gambling policy) require working with verified streamers on compliant platforms. Kick has become the primary streaming platform for Curaçao-licensed crypto casino brands.',
    platforms: [
      'Kick Crypto Casino Streamers',
      'YouTube Crypto Gambling Channels',
      'TikTok Emerging Markets',
      'Twitch (licensed market geo-targeting)',
    ],
    complianceNotes: [
      'Platform policies (Twitch, YouTube, TikTok) apply regardless of operator license jurisdiction',
      'Geo-restrict campaigns to markets where your license is recognized',
      'Comply with advertising laws of target player countries',
      'New Curaçao GCB framework (2024+) introduces stricter marketing standards',
      'All influencer partnerships must disclose commercial relationships',
      'Responsible gambling messaging required in all campaign content',
    ],
    caseStudySnippet: 'A Curaçao-licensed Bitcoin casino deployed a 4-week Kick streamer campaign targeting LATAM and Asia-Pacific audiences, generating 290 FTDs at $38 CPFTD — achieving 5.2x ROI against campaign spend with 35% of acquired players depositing in cryptocurrency.',
    metaTitle: 'Crypto Casino Influencer Marketing — Curaçao Licensed Brands | Octo Media',
    metaDescription: 'Influencer and streamer marketing for Curaçao eGaming licensed crypto casinos. Kick, YouTube & Twitch gambling streamers targeting global iGaming audiences. Proven ROI.',
  },

  germany: {
    slug: 'germany',
    country: 'Germany',
    countryCode: 'DE',
    flag: '🇩🇪',
    headline: 'iGaming Influencer Marketing Agency — Germany',
    subheadline: 'GlüNeuRStV-compliant casino influencer marketing for Germany-licensed online casino and sportsbook brands. Targeted German gambling streamer campaigns with compliance at the core.',
    description: 'Germany is one of Europe\'s largest gambling markets following the 2021 Interstate Treaty on Gambling (GlüNeuRStV) that created the new national online casino licensing framework. Octo Media Group delivers iGaming influencer marketing for Germany-licensed operators — navigating the strict German gambling advertising watershed rules, bonus advertising restrictions, and influencer disclosure requirements that apply in this heavily regulated market. Our German-market streamer network targets DSWV-licensed casino brands with verified German-audience creators on YouTube and Twitch, ensuring all campaign content meets GlüNeuRStV marketing standards.',
    regulatoryBody: 'GGL (Gemeinsame Glücksspielbehörde der Länder) / DSWV',
    licenseTypes: [
      'German Online Casino License (GGL)',
      'German Sports Betting License',
      'German Virtual Slots License',
    ],
    keyInsight: 'Germany\'s GlüNeuRStV watershed rule prohibits gambling advertising between 6am and 9pm — significantly restricting when influencer streaming content can include casino sponsorship messaging. Compliant German campaigns concentrate live stream sponsorships in evening hours and use VOD/YouTube content (not subject to the same watershed) as the primary daytime acquisition channel.',
    platforms: [
      'YouTube German Gambling Channels (VOD)',
      'Twitch German Streamers (9pm+ watershed)',
      'Kick German Casino Streamers',
      'German-language YouTube Reviews',
    ],
    complianceNotes: [
      'Gambling advertising restricted to 9pm–6am watershed (GlüNeuRStV)',
      'Only GGL/DSWV-licensed operators may advertise in Germany',
      'Bonus advertising faces strict disclosure requirements',
      'No appeal to minors — strict age verification obligations',
      'Paid sponsorship disclosure required per German TMG commercial communication rules',
      'Responsible gambling messaging (bundeszentrale.de or equivalent) mandatory',
    ],
    caseStudySnippet: 'A GGL-licensed German online casino running evening Twitch slots streams and YouTube review campaigns achieved 180 FTDs per month at €72 CPFTD, with campaigns concentrated in the 9pm–midnight watershed window and YouTube VOD driving complementary daytime registrations.',
    metaTitle: 'iGaming Influencer Marketing Germany — GlüNeuRStV Compliant Campaigns | Octo Media',
    metaDescription: 'GlüNeuRStV-compliant casino influencer and streamer marketing for Germany-licensed iGaming brands. German gambling audience targeting with full compliance framework.',
  },

  canada: {
    slug: 'canada',
    country: 'Canada',
    countryCode: 'CA',
    flag: '🇨🇦',
    headline: 'iGaming Influencer Marketing Agency — Canada',
    subheadline: 'Casino streamer and gambling influencer marketing for Canadian iGaming brands. Twitch, YouTube & Kick campaigns targeting English and French Canadian gambling audiences.',
    description: 'Canada is one of North America\'s most rapidly expanding regulated online gambling markets. Following Ontario\'s 2022 iGaming market opening and with other provinces exploring regulation, Canadian iGaming brands face a competitive acquisition landscape where influencer marketing is outperforming traditional digital channels. Octo Media Group delivers casino streamer and gambling influencer campaigns targeting Canadian markets — with particular expertise in Ontario (iGO-regulated), English Canada, and French Quebec audiences. Our Canadian gaming influencer campaigns run across Twitch, YouTube, and Kick with geo-targeted audience matching and bilingual (EN/FR) campaign capability.',
    regulatoryBody: 'iGO (Ontario) / AGCO / Provincial Regulators',
    licenseTypes: [
      'Ontario iGaming Ontario (iGO) Registration',
      'Provincial Lottery Partnerships',
    ],
    keyInsight: 'Ontario became the first Canadian province with a fully competitive iGaming market in April 2022. The Ontario market has attracted 50+ licensed operators and is growing rapidly. Casino influencer marketing — particularly through Twitch and YouTube English-Canadian gambling channels — is one of the most cost-effective player acquisition channels for Ontario-registered operators competing against both regulated and grey-market alternatives.',
    platforms: [
      'Twitch Canadian Casino Streamers',
      'YouTube English Canadian Gambling',
      'YouTube French Canadian (Quebec)',
      'Kick Canadian Streamers',
      'TikTok Canada (select campaigns)',
    ],
    complianceNotes: [
      'Ontario-registered operators must comply with iGO Advertising Standards',
      'Responsible gambling messaging (ConnexOntario) required in Ontario-facing content',
      'Influencer disclosure requirements apply under CRTC and Competition Bureau standards',
      'Under-18 audience restrictions mandatory across all Canadian markets',
      'Quebec requires French-language compliance for campaigns targeting Quebec audiences',
      'Grey-market operator restrictions: only iGO-registered brands may market in Ontario',
    ],
    caseStudySnippet: 'An Ontario iGO-registered online casino deployed a 5-week Twitch and YouTube campaign targeting English Canadian audiences, generating 220 FTDs at CAD $82 CPFTD. The campaign included bilingual French-language extensions for Quebec-adjacent audiences.',
    metaTitle: 'iGaming Influencer Marketing Canada — Ontario iGO Compliant | Octo Media',
    metaDescription: 'Casino streamer and gambling influencer marketing for Canadian iGaming brands. Ontario iGO-compliant Twitch, YouTube & Kick campaigns targeting English and French Canadian gambling audiences.',
  },

  uae: {
    slug: 'uae',
    country: 'UAE',
    countryCode: 'AE',
    flag: '🇦🇪',
    headline: 'iGaming Marketing Agency — UAE & Middle East',
    subheadline: 'Crypto casino and online gaming influencer marketing campaigns targeting UAE and Gulf market audiences. Compliant brand awareness and player acquisition for MENA-focused iGaming brands.',
    description: 'The UAE and broader Gulf Cooperation Council (GCC) region represents one of the fastest-growing audiences for online gambling and crypto casino platforms. While onshore gambling remains legally restricted in the UAE, a significant and engaged audience of UAE residents participates in offshore online casino and sports betting platforms — primarily crypto-based operators accessible in the region. Octo Media Group delivers brand awareness and acquisition campaigns targeting Arabic-speaking and expat gambling audiences in the UAE and wider MENA region through crypto casino streamers, YouTube gaming content, and selected influencer partnerships. Campaigns are structured to align with the legal realities of MENA market iGaming promotion.',
    regulatoryBody: 'Offshore/International Licensing (Curaçao, MGA, UKGC)',
    licenseTypes: [
      'International Casino Licenses (offshore operators)',
      'Crypto Casino Platforms (Curaçao/MGA)',
    ],
    keyInsight: 'UAE audiences — particularly expat populations from Western Europe, India, and Southeast Asia — represent a high-value, under-served iGaming demographic. Crypto casino brands with strong mobile and crypto-payment infrastructure are particularly well-positioned to acquire UAE-resident players through targeted streaming and influencer campaigns on YouTube, Telegram, and selected social platforms.',
    platforms: [
      'YouTube Arabic & English Gambling Content',
      'Telegram Crypto Community Campaigns',
      'Kick MENA-accessible Streamers',
      'Instagram (brand awareness, select accounts)',
    ],
    complianceNotes: [
      'Online gambling is legally restricted within the UAE — campaigns must target offshore-accessible platforms only',
      'No promotion of onshore gambling within UAE jurisdiction',
      'Campaigns must comply with the laws of the operator\'s licensing jurisdiction',
      'Platform policies for gambling content apply across all channels',
      'Crypto casino brands with offshore licenses can operate in grey-market capacity',
      'Legal counsel recommended before launching UAE-targeted iGaming campaigns',
    ],
    caseStudySnippet: 'A Curaçao-licensed crypto casino targeting UAE and Gulf expat audiences through Arabic-language YouTube gambling content and Telegram community campaigns achieved strong brand recognition metrics and consistent monthly registrations from UAE-resident crypto wallet holders.',
    metaTitle: 'iGaming Influencer Marketing UAE & Middle East | Crypto Casino Campaigns | Octo Media',
    metaDescription: 'Crypto casino and iGaming influencer marketing targeting UAE and MENA audiences. YouTube, Telegram & streaming campaigns for offshore gambling brands operating in the Gulf region.',
  },

  india: {
    slug: 'india',
    country: 'India',
    countryCode: 'IN',
    flag: '🇮🇳',
    headline: 'iGaming Influencer Marketing — India',
    subheadline: 'Casino and sports betting influencer campaigns targeting India\'s massive online gambling audience. YouTube, Telegram & emerging streaming channels for iGaming player acquisition in India.',
    description: 'India is one of the world\'s largest and fastest-growing online gambling markets — with a population of 1.4 billion, widespread smartphone penetration, and a deep cultural affinity for cricket betting, teen patti, and online casino games. Octo Media Group delivers iGaming influencer marketing campaigns targeting Indian gambling audiences through YouTube Hindi and English gambling channels, Telegram community campaigns, and emerging Indian streaming platforms. The Indian online gambling market is primarily served by offshore operators (primarily Curaçao and Isle of Man licensed) reaching players through digital channels where influencer marketing is the dominant player acquisition method.',
    regulatoryBody: 'State-Level Gaming Acts (varies) / Offshore Licensing',
    licenseTypes: [
      'Curaçao/MGA/UKGC (offshore operators serving India)',
      'Sikkim Online Gaming Regulation',
      'Goa Gambling Act (limited)',
    ],
    keyInsight: 'India\'s online gambling landscape is complex: online gambling regulation varies by state, but enforcement against players is effectively nil. The market is primarily served by offshore operators. YouTube Hindi-language gambling content — slots, teen patti, and IPL betting content — reaches millions of Indian adults and is the primary influencer acquisition channel for iGaming brands targeting India. Mobile-first campaigns optimized for low-bandwidth devices outperform desktop-focused approaches.',
    platforms: [
      'YouTube Hindi Gambling & Casino Channels',
      'YouTube English India Gambling Content',
      'Telegram India Casino Communities',
      'Emerging Indian Streaming Platforms',
      'Twitter/X India Cricket Betting',
    ],
    complianceNotes: [
      'Online gambling legality varies by Indian state — campaigns should target states with permissive frameworks',
      'Only offshore-licensed operators can legally serve the Indian market',
      'Platform-level gambling content restrictions apply (YouTube, Meta)',
      'Cricket betting content requires particular sensitivity given BCCI and government positions',
      'Influencer/content creator disclosure requirements apply under ASCI guidelines',
      'Responsible gambling messaging recommended for all India-facing campaigns',
    ],
    caseStudySnippet: 'An offshore-licensed online casino targeting Indian audiences deployed a YouTube Hindi-language slots and casino review campaign achieving 500+ monthly FTDs at $22–$35 CPFTD — among the lowest CPFTD across any market in our campaign portfolio, driven by strong audience demand and lower creator CPM rates.',
    metaTitle: 'iGaming Influencer Marketing India — Casino & Sports Betting Campaigns | Octo Media',
    metaDescription: 'iGaming influencer marketing targeting India\'s online gambling market. YouTube Hindi gambling channels, Telegram & streaming campaigns for cricket betting and online casino brands.',
  },
};
