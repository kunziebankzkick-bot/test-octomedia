import SEOHead from '../../components/SEOHead';
import BlogLayout from './BlogLayout';
import { breadcrumbSchema, organizationSchema } from '../../seo/schemas';

const toc = [
  { id: 'why-generic-fails', label: 'Why Generic Outreach Fails in iGaming', level: 2 as const },
  { id: 'anatomy-of-outreach', label: 'The Anatomy of a High-Response Cold Outreach Message', level: 2 as const },
  { id: 'template-1-cold-email', label: 'Template 1: Cold Email to a Twitch Casino Streamer', level: 2 as const },
  { id: 'template-2-dm-outreach', label: 'Template 2: DM Outreach via Discord or Twitter', level: 2 as const },
  { id: 'template-3-follow-up', label: 'Template 3: Follow-Up After No Response', level: 2 as const },
  { id: 'template-4-rate-negotiation', label: 'Template 4: Rate Negotiation Email', level: 2 as const },
  { id: 'template-5-campaign-brief', label: 'Template 5: Campaign Brief Template', level: 2 as const },
  { id: 'streamer-crm', label: 'Building a Streamer CRM and Outreach Pipeline', level: 2 as const },
  { id: 'faq', label: 'FAQ', level: 2 as const },
];

const relatedPosts = [
  {
    title: 'How to Find the Right Streamer for Your Casino',
    href: '/blog/how-to-find-right-streamer-casino',
    excerpt: 'A sourcing framework for identifying streamers who actually convert.',
    badge: 'Strategy',
  },
  {
    title: 'How to Vet Gambling Influencers',
    href: '/blog/how-to-vet-gambling-influencers',
    excerpt: 'Due diligence you need before signing any streamer deal.',
    badge: 'Strategy',
  },
  {
    title: 'Revenue Share Deals with Streamers',
    href: '/blog/revenue-share-deals-streamers',
    excerpt: 'When revenue share makes sense — and how to structure it properly.',
    badge: 'Deals',
  },
];

export default function InfluencerOutreachTemplates() {
  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'Influencer Outreach Templates for iGaming Brands',
    author: { '@type': 'Person', name: 'Alexei Volkov' },
    publisher: { '@type': 'Organization', name: 'Octo Media Group', url: 'https://octomedia.agency' },
    datePublished: '2026-02-25',
    url: 'https://octomedia.agency/blog/influencer-outreach-templates-igaming',
  };

  return (
    <>
      <SEOHead
        title="Influencer Outreach Templates for iGaming Brands | Octo Media"
        description="Five proven outreach templates for iGaming brands — cold email, DM, follow-up, rate negotiation, and campaign briefs — plus a CRM pipeline setup guide."
        canonical="https://octomedia.agency/blog/influencer-outreach-templates-igaming"
        jsonLd={[
          articleSchema,
          organizationSchema,
          breadcrumbSchema([
            { name: 'Home', url: 'https://octomedia.agency/' },
            { name: 'Blog', url: 'https://octomedia.agency/blog' },
            { name: 'Influencer Outreach Templates for iGaming Brands', url: 'https://octomedia.agency/blog/influencer-outreach-templates-igaming' },
          ]),
        ]}
      />
      <BlogLayout
        title="Influencer Outreach Templates for iGaming Brands"
        metaTitle="Influencer Outreach Templates for iGaming Brands"
        metaDescription="Five proven outreach templates for iGaming brands — cold email, DM, follow-up, rate negotiation, and campaign briefs — plus a CRM pipeline setup guide."
        slug="influencer-outreach-templates-igaming"
        badge="Templates"
        publishDate="February 25, 2026"
        readTime={8}
        excerpt="Streamers with 20,000+ followers receive dozens of pitches weekly. Most go unanswered. Here are five outreach templates built specifically for iGaming brands, plus a pipeline system to manage the process at scale."
        toc={toc}
        relatedPosts={relatedPosts}
      >
        <p>
          Reaching out to streamers cold is harder than most casino marketing teams expect. The problem isn't finding contact information — it's that every decent gambling streamer has seen hundreds of identical outreach messages and developed an efficient filter for deleting them. "Hi [Name], I love your content. We'd love to partner with you. Here's our media kit." That message gets ignored before the second sentence.
        </p>
        <p>
          Outreach in iGaming requires more specificity, more genuine knowledge of the creator's work, and a clearer value proposition than most other verticals. The templates below are starting points, not copy-paste solutions. The personalisation gaps are where the work actually happens.
        </p>

        <h2 id="why-generic-fails">Why Generic Outreach Fails in iGaming</h2>
        <p>
          Established casino streamers on Twitch and Kick receive 50 or more partnership enquiries per week. That's not an exaggeration — for anyone with a meaningful audience, the inbox volume is constant. Most of those messages share the same problems: they're written by someone who has clearly never watched the streamer's content, they lead with how the brand benefits rather than why the partnership makes sense for the creator, and they read like a mail merge.
        </p>
        <p>
          iGaming outreach has an additional layer of complexity. Streamers who do gambling content regularly are approached by casinos with exploitative commission-only deals, platforms with poor player reputations, and operators who don't understand compliance requirements. A significant portion of the outreach they receive is from brands they'd never work with. Your first message needs to signal quickly that you're not one of those.
        </p>

        <div className="callout-box">
          <strong>What high-response outreach signals:</strong> You've actually watched their content. You understand the difference between a flat fee and revenue share and have an opinion on which makes sense for this partnership. You're licensed and compliant. You have a clear, specific proposal rather than a vague "let's explore." You respect their time.
        </div>

        <h2 id="anatomy-of-outreach">The Anatomy of a High-Response Cold Outreach Message</h2>
        <p>
          The elements that determine whether a cold message gets a response, in rough order of importance:
        </p>
        <p>
          <strong>Subject line or opening line:</strong> Specific reference to something about the creator, not generic flattery. Mention a recent stream, a specific game they play, a community running joke — anything that proves you've paid attention.
        </p>
        <p>
          <strong>Who you are in one sentence:</strong> Brand name, licensed market, and one distinguishing factor. Not a paragraph about your history.
        </p>
        <p>
          <strong>Why this partnership specifically:</strong> What's the alignment? Their audience geo matches your licensed markets. They play the exact game category your bonus is optimised for. Their content style aligns with your brand positioning. Make the logic visible.
        </p>
        <p>
          <strong>A concrete proposal:</strong> Don't ask to "explore opportunities." Have a structure in mind — a monthly flat fee, a per-activation rate, a revenue share model — and lead with it. Streamers don't have time to educate brands on how partnerships work.
        </p>
        <p>
          <strong>A clear next step:</strong> Not "let me know if you're interested." A specific ask — a 15-minute call on Tuesday or Thursday, a rate card request, a yes or no on the proposed structure.
        </p>

        <h2 id="template-1-cold-email">Template 1: Cold Email to a Twitch Casino Streamer</h2>
        <p>
          Use this for streamers you've identified through research, reaching out via a business email address listed in their media kit or Twitch panels.
        </p>

        <div className="callout-box">
          <strong>Subject: Partnership proposal — [Brand Name] x [Streamer Handle]</strong>
          <br /><br />
          Hi [First Name],<br /><br />
          Watched your [specific stream title or date] session — the [specific moment, e.g., the Pragmatic bonus hunt segment] was great content, and the chat engagement during that sequence was unusually strong.<br /><br />
          I'm [Your Name] from [Brand Name]. We're a [jurisdiction]-licensed casino currently building partnerships with a small group of streamers whose audiences overlap with our target markets. Based on your geo breakdown — primarily UK and Canada from what I can see — there's a strong fit with where we operate.<br /><br />
          What we're offering: [flat fee per stream / monthly retainer of £X / revenue share at Y% NGR — choose one and specify it]. We're not looking for a one-off slot — we want to build a proper ongoing partnership with a handful of streamers who become genuine brand advocates.<br /><br />
          A few things you'd want to know upfront: we're fully licensed with [MGA/UKGC/etc.], we don't script content (compliance requirements aside), and we've worked with [X number / type of] streamers previously.<br /><br />
          Is this something you'd consider? If you want to jump on a 15-minute call to run through the specifics, I'm available [Tuesday/Thursday] next week. Or if you'd prefer, I can send a one-pager with the full proposal.<br /><br />
          Either way — keep up the content, it's genuinely good.<br /><br />
          [Your Name]<br />
          [Title], [Brand Name]<br />
          [Email] | [Website]
        </div>

        <p>
          The key moves in this template: the opening specific reference, the geo rationale (shows you've done research), the concrete deal structure (not "we'd love to explore"), and the clear binary next step. The closing line is optional but humanises the message in a way that generic sign-offs don't.
        </p>

        <h2 id="template-2-dm-outreach">Template 2: DM Outreach via Discord or Twitter</h2>
        <p>
          For smaller streamers who may not have a formal business email, Discord server DMs or Twitter direct messages are the realistic contact route. The format needs to be shorter — people read DMs differently than emails, and walls of text in a DM get scrolled past.
        </p>

        <div className="callout-box">
          <strong>Twitter/X DM:</strong>
          <br /><br />
          Hey [Handle], been following your content for a while — the [specific recent thing] was a good watch.<br /><br />
          I work with [Brand Name], [jurisdiction]-licensed casino. We're looking to partner with a small group of streamers on an ongoing basis — flat monthly fee, not commission-only. Your UK audience split makes you a strong fit for our licensed markets.<br /><br />
          Would you be open to a quick chat to see if there's alignment? Happy to send a brief overview first if you'd prefer to check us out before committing to a call.
        </div>

        <p>
          For Discord outreach, use the same structure but be aware that many streamers have partner inquiry channels in their servers with specific instructions. Follow those instructions exactly — ignoring them signals that you haven't paid attention.
        </p>
        <p>
          One thing to avoid in any DM: don't immediately attach media kits, PDFs, or links to external documents. It reads as spam and triggers suspicion. Build the conversation first.
        </p>

        <h2 id="template-3-follow-up">Template 3: Follow-Up After No Response</h2>
        <p>
          Wait at least five to seven business days before following up. Less than that feels aggressive. More than two weeks and the context has faded enough that you're essentially starting fresh anyway.
        </p>

        <div className="callout-box">
          <strong>Subject: Re: Partnership proposal — [Brand Name] x [Streamer Handle]</strong>
          <br /><br />
          Hi [First Name],<br /><br />
          Following up on my message from [date]. I know the inbox volume gets out of hand — completely understand if this got buried.<br /><br />
          The short version: [Brand Name] is a [jurisdiction]-licensed casino looking to build an ongoing partnership with you specifically because [one clear reason — their audience geo, their content niche, their community engagement]. We're offering [the specific deal structure from your original message].<br /><br />
          If this isn't a fit or the timing is wrong, no pressure — just let me know and I won't follow up again. If there's any interest, I can work around your schedule for a quick call.<br /><br />
          [Your Name]
        </div>

        <p>
          This follow-up does two things that most don't: it acknowledges the inbox reality without being sycophantic, and it gives them an explicit out ("let me know and I won't follow up again"). That opt-out paradoxically increases response rates because it removes the social pressure of feeling obligated to reply.
        </p>
        <p>
          Send one follow-up maximum. A second follow-up is occasionally appropriate if you have a genuine update (new deal structure, newly licensed market that changes the fit). Beyond that, the lack of response is an answer.
        </p>

        <h2 id="template-4-rate-negotiation">Template 4: Rate Negotiation Email</h2>
        <p>
          When a streamer comes back with rates above your budget, the worst approach is a flat "that's too high." Counter with context and alternatives.
        </p>

        <div className="callout-box">
          <strong>Subject: Re: Partnership rates — [Brand Name]</strong>
          <br /><br />
          Hi [First Name],<br /><br />
          Thanks for sending over your rate card — genuinely appreciate the transparency. The per-stream rate of [their rate] is above our current budget for this partnership structure, but I want to find something that works for both sides rather than just saying no.<br /><br />
          A few options I'd like to explore:<br /><br />
          Option A: We start with a 3-month arrangement at [lower monthly rate] — below your standard rate — but with a performance review built in. If FTD numbers hit [specific target], we move to [higher rate] from month four onwards.<br /><br />
          Option B: We reduce the monthly deliverable count from [their proposed number] to [lower number] at a proportionally adjusted rate, which brings us in line with our budget while keeping the partnership ongoing.<br /><br />
          Option C: A hybrid flat + revenue share structure where we pay [lower flat rate] plus [X%] on NGR from your referrals. If your audience converts well, this likely exceeds your standard rate over a six-month window.<br /><br />
          I'm flexible on the structure — the goal is to build something long-term that's worth your time commercially. What resonates?<br /><br />
          [Your Name]
        </div>

        <p>
          Presenting three options serves a specific purpose: it shifts the conversation from "your price vs my budget" to "which structure works best." Most counterparties will engage with one of the options, which opens a real negotiation rather than a yes/no standoff. For more on structuring revenue share specifically, see our post on <a href="/blog/revenue-share-deals-streamers">revenue share deals with streamers</a>.
        </p>

        <h2 id="template-5-campaign-brief">Template 5: Campaign Brief Template</h2>
        <p>
          Once you've agreed terms, the brief you send determines whether the content actually performs. It needs to give the streamer everything they need to stay compliant and on-brand, without over-constraining the creative execution.
        </p>

        <div className="callout-box">
          <strong>Campaign Brief Structure:</strong>
          <br /><br />
          <strong>Brand:</strong> [Casino Name] | [License jurisdiction]<br />
          <strong>Campaign period:</strong> [Start date] – [End date]<br />
          <strong>Deliverables:</strong> [Number and type — e.g., 4 sponsored streams per month, minimum 30 minutes of branded content per stream]<br /><br />
          <strong>Tracking:</strong> Your unique link: [URL]. Please use this link in your stream description, panels, and any clips. Sub-ID format if you create clips: [format].<br /><br />
          <strong>Offer to promote:</strong> [Specific welcome offer or ongoing promotion]. Key terms to communicate: [deposit minimum, wagering requirement, expiry]. Do not exaggerate or misrepresent these terms.<br /><br />
          <strong>Required disclosures (mandatory, exact wording):</strong><br />
          "[Gambling can be addictive. Play responsibly. 18+. [License body] licensed. BeGambleAware.org / [relevant RG body for market]"]<br />
          Must be visible on screen for a minimum of [X] seconds per session and included in stream description.<br /><br />
          <strong>Prohibited:</strong> Targeting or implying the offer is suitable for anyone under 18. Claiming guaranteed wins or misleading odds. Promoting to viewers in [restricted geos]. Mentioning competitor casinos positively.<br /><br />
          <strong>Content approach (guideline, not script):</strong> We want natural gameplay content. Authentic reactions, honest commentary on the experience. You know your audience — trust that. The only mandatory inclusions are the tracking link, the disclosure language, and the offer details above.<br /><br />
          <strong>Content approval:</strong> Please send us a clip or screen recording from the first stream for compliance review within 24 hours. Ongoing content doesn't require pre-approval unless it includes a new promotional message.<br /><br />
          <strong>Contact:</strong> [Name, email, and a backup contact for urgent compliance questions during streams]
        </div>

        <h2 id="streamer-crm">Building a Streamer CRM and Outreach Pipeline</h2>
        <p>
          Managing outreach across 20, 50, or 100+ potential streamer partners without a system results in duplicate contacts, missed follow-ups, and no institutional memory when team members change. A basic CRM setup prevents all of this.
        </p>
        <p>
          You don't need enterprise software. A well-structured Notion database or Airtable setup handles everything most iGaming brands need. Your streamer CRM should track: streamer name and handle, platform(s), audience size and geo split, contact channel and email address, outreach status (identified, contacted, replied, negotiating, contracted, active, paused, declined), last contact date and next follow-up date, deal terms if contracted, and performance data for active partners (FTDs, CPA, NGR by period).
        </p>
        <p>
          The pipeline stages that matter most are the transitions: identified to contacted (this is where research quality determines outreach quality), and negotiating to contracted (this is where deal structure knowledge matters). Build templates and checklists for each transition to keep quality consistent across whoever is doing the outreach.
        </p>
        <p>
          Tag streamers by content category (slots, live casino, sports betting, crypto), platform, and primary market so you can filter your pipeline when you're launching a specific campaign type. A UK slots campaign needs a different shortlist than a crypto casino push targeting a Tier-2 English-language audience.
        </p>
        <p>
          For sourcing, our <a href="/streamers">streamer discovery</a> section covers methods for finding creators beyond the obvious top 10 in any category. The pipeline only works if the top of funnel has genuine quality — and in iGaming, the most valuable streamer relationships are often with creators you find before everyone else does.
        </p>

        <h2 id="faq">FAQ</h2>

        <h3>How many cold outreaches should I send per week?</h3>
        <p>
          Quality scales better than volume in iGaming. Twenty highly personalised messages per week to carefully researched streamers will outperform 200 generic messages every time. The research required per message — watching content, checking audience geo data, understanding their deal history — takes real time. Budget 30–45 minutes per outreach target minimum if you're doing it properly.
        </p>

        <h3>What response rate should I expect?</h3>
        <p>
          For cold email to established streamers with well-researched, personalised outreach, 15–25% response rates are realistic. For DMs, response rates tend to be lower — 8–15% — because the format feels more casual and many streamers are more guarded about DM outreach. A response rate below 10% on email usually signals the messages aren't personalised enough or the targeting is off.
        </p>

        <h3>Should I use a personal email or a brand email for outreach?</h3>
        <p>
          A brand email from a recognisable domain establishes credibility immediately. Outreach from a personal Gmail account looks unprofessional and raises questions about legitimacy — which is already a concern in an industry where many fraudulent casino "brands" send partnership pitches. Use [yourname]@[casinodomain].com at minimum.
        </p>

        <h3>Can I reach streamers through their talent agencies?</h3>
        <p>
          Increasingly yes — mid-to-large streamers often have management or talent representation. Going through an agency adds a layer to negotiations but also signals seriousness. Agents know their clients' rate expectations and can move deals faster than cold email chains. The tradeoff is typically a higher floor on deal terms. For large partnerships, agency relationships are worth it.
        </p>

        <div className="callout-box">
          <strong>Want someone to handle your outreach pipeline?</strong> We build and manage streamer relationships for iGaming brands across Twitch, Kick, and YouTube — from first contact to contracted partnerships. <a href="https://calendly.com/contact-octomediagroup/30min" target="_blank" rel="noopener noreferrer">Book a 30-minute call</a> to discuss what's realistic for your market and budget.
        </div>

        <p>
          The brands that build the strongest streamer rosters treat outreach as a skill and a system — not an afterthought. The templates above give you functional starting points, but the real advantage comes from building genuine knowledge of creators before you ever send a message. Streamers remember the brands that reached out with evident understanding of their work, and they remember the ones that didn't.
        </p>
        <p>
          For the pre-outreach research phase, see our guide on <a href="/blog/how-to-find-right-streamer-casino">how to find the right streamer for your casino</a> — it covers sourcing methodology before you start building the pipeline.
        </p>
      </BlogLayout>
    </>
  );
}
