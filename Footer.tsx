import { Link } from 'react-router-dom';
import { Mail, MessageCircle, Youtube, Linkedin, Instagram } from 'lucide-react';
import { useI18n } from '../i18n/context';

function XIcon({ size = 16 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M4 4l11.733 16h4.267l-11.733 -16z" />
      <path d="M4 20l6.768 -6.768m2.46 -2.46l6.772 -6.772" />
    </svg>
  );
}

export default function Footer() {
  const year = new Date().getFullYear();
  const { t, localePath } = useI18n();

  return (
    <footer className="border-t border-white/5 bg-[#08080e]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          <div>
            <Link to={localePath('/')} className="inline-block mb-6" aria-label="Octo Media Group — iGaming Influencer Marketing Agency">
              <img src="/image.png" alt="Octo Media Group - iGaming influencer marketing agency for crypto casino brands" className="h-20 w-auto" loading="lazy" />
            </Link>
            <p className="font-poppins text-sm text-white/30 leading-relaxed">{t.footer.description}</p>
          </div>

          <div>
            <h4 className="font-poppins font-semibold text-sm text-white mb-5">{t.footer.quickLinks}</h4>
            <ul className="space-y-3">
              {[
                { label: t.footer.links.agency, href: localePath('/') },
                { label: t.footer.links.services, href: localePath('/services') },
                { label: t.footer.links.whyOcto, href: localePath('/why-us') },
                { label: 'Case Studies', href: '/case-studies' },
                { label: t.footer.links.hireStreamers, href: localePath('/streamers') },
                { label: t.footer.links.faq, href: localePath('/#faq') },
                { label: t.footer.links.contact, href: localePath('/#contact') },
              ].map((link) => (
                <li key={link.label}>
                  <Link to={link.href} className="font-poppins text-sm text-white/40 hover:text-white/60 transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-poppins font-semibold text-sm text-white mb-5">{t.footer.ourServices}</h4>
            <ul className="space-y-3">
              {[
                { label: t.footer.serviceLinks.streamer, href: localePath('/services') + '#streamer-marketing' },
                { label: t.footer.serviceLinks.affiliate, href: localePath('/services') + '#affiliate-marketing' },
                { label: t.footer.serviceLinks.influencer, href: localePath('/services') + '#influencer-marketing' },
              ].map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="font-poppins text-sm text-white/40 hover:text-white/60 transition-colors">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
            <div className="mt-6">
              <h4 className="font-poppins font-semibold text-sm text-white mb-5">{t.footer.legal}</h4>
              <ul className="space-y-3">
                {[
                  { label: t.footer.legalLinks.privacy, href: localePath('/privacy') },
                  { label: t.footer.legalLinks.terms, href: localePath('/terms') },
                  { label: t.footer.legalLinks.cookies, href: localePath('/cookies') },
                ].map((link) => (
                  <li key={link.label}>
                    <Link to={link.href} className="font-poppins text-sm text-white/40 hover:text-white/60 transition-colors">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div>
            <h4 className="font-poppins font-semibold text-sm text-white mb-5">{t.footer.contact}</h4>
            <div className="space-y-3">
              <a href="mailto:contact@octomediagroup.com" className="flex items-center gap-2.5 font-poppins text-sm text-white/40 hover:text-white/60 transition-colors">
                <Mail size={16} />
                contact@octomediagroup.com
              </a>
              <a href="https://t.me/OctoMediaGroup" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2.5 font-poppins text-sm text-white/40 hover:text-white/60 transition-colors">
                <MessageCircle size={16} />
                {t.footer.telegram}
              </a>
            </div>

            <div className="mt-6">
              <h4 className="font-poppins font-semibold text-sm text-white mb-5">Social</h4>
              <div className="flex items-center gap-4">
                <a
                  href="https://x.com/octomediaagency"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/40 hover:text-white/60 transition-colors"
                  aria-label="Follow us on X"
                >
                  <XIcon size={18} />
                </a>
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/40 hover:text-white/60 transition-colors"
                  aria-label="Follow us on Instagram"
                >
                  <Instagram size={18} />
                </a>
                <a
                  href="https://youtube.com/@OctomediaAgency"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/40 hover:text-white/60 transition-colors"
                  aria-label="Subscribe to our YouTube channel"
                >
                  <Youtube size={18} />
                </a>
                <a
                  href="https://www.linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/40 hover:text-white/60 transition-colors"
                  aria-label="Connect with us on LinkedIn"
                >
                  <Linkedin size={18} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <p className="font-poppins text-xs text-white/20 leading-relaxed mb-2">
            {t.footer.bottomText1.split('iGaming influencer marketing agency').map((part, i, arr) =>
              i < arr.length - 1 ? (
                <span key={i}>{part}<Link to={localePath('/services')} className="hover:text-white/40 transition-colors underline">iGaming influencer marketing agency</Link></span>
              ) : <span key={i}>{part}</span>
            )}
          </p>
          <p className="font-poppins text-xs text-white/20 leading-relaxed mb-2">
            {t.footer.bottomText2}
          </p>
          <p className="font-poppins text-xs text-white/20">
            &copy; {year} Octo Media Group. {t.footer.copyright}
          </p>
        </div>
      </div>
    </footer>
  );
}
