import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { useI18n } from '../i18n/context';
import LanguageSwitcher from './LanguageSwitcher';

interface NavLink {
  labelKey: string;
  href: string;
  isRoute?: boolean;
}

function NavItem({ link, label, onClick }: { link: NavLink; label: string; onClick?: () => void }) {
  const cls = 'font-poppins text-base font-semibold text-white hover:text-white transition-all duration-300 hover:scale-110 hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.3)] relative group';

  const handleAnchorNavigation = (e: React.MouseEvent<HTMLAnchorElement>) => {
    const href = link.href;
    if (href.includes('#')) {
      const [path, anchor] = href.split('#');
      if (path && path !== '/') {
        onClick?.();
        return;
      }
      setTimeout(() => {
        const element = document.getElementById(anchor);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }, 100);
    }
    onClick?.();
  };

  if (link.isRoute) {
    return (
      <Link to={link.href} onClick={(e: React.MouseEvent<HTMLAnchorElement>) => handleAnchorNavigation(e)} className={cls}>
        {label}
        <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-cyan-400 to-blue-500 transition-all duration-300 group-hover:w-full"></span>
      </Link>
    );
  }
  return (
    <a href={link.href} onClick={(e: React.MouseEvent<HTMLAnchorElement>) => handleAnchorNavigation(e)} className={cls}>
      {label}
      <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-cyan-400 to-blue-500 transition-all duration-300 group-hover:w-full"></span>
    </a>
  );
}

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const location = useLocation();
  const { t, localePath } = useI18n();

  const isStreamersPage = location.pathname.endsWith('/streamers');

  const defaultLinks: NavLink[] = [
    { labelKey: 'home', href: localePath('/'), isRoute: true },
    { labelKey: 'services', href: localePath('/services'), isRoute: true },
    { labelKey: 'ourStory', href: localePath('/why-us'), isRoute: true },
    { labelKey: 'forStreamers', href: localePath('/streamers'), isRoute: true },
    { labelKey: 'blog', href: '/blog', isRoute: true },
    { labelKey: 'caseStudies', href: '/case-studies', isRoute: true },
    { labelKey: 'faq', href: localePath('/#faq'), isRoute: true },
    { labelKey: 'contact', href: localePath('/#contact'), isRoute: true },
  ];

  const streamerLinks: NavLink[] = [
    { labelKey: 'home', href: localePath('/'), isRoute: true },
    { labelKey: 'whyJoin', href: localePath('/streamers') + '#why-join', isRoute: true },
    { labelKey: 'howItWorks', href: localePath('/streamers') + '#how-it-works', isRoute: true },
    { labelKey: 'faq', href: localePath('/streamers') + '#faq', isRoute: true },
    { labelKey: 'apply', href: localePath('/streamers') + '#apply', isRoute: true },
  ];

  const navLinks = isStreamersPage ? streamerLinks : defaultLinks;

  useEffect(() => {
    setIsVisible(true);
  }, []);

  useEffect(() => {
    let ticking = false;
    const onScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          setScrolled(window.scrollY > 20);
          ticking = false;
        });
        ticking = true;
      }
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const ctaHref = isStreamersPage ? '#apply' : 'https://calendly.com/contact-octomediagroup/30min';
  const ctaLabel = isStreamersPage ? t.nav.ctaApplyNow : t.nav.ctaGrowthPlan;
  const ctaExternal = !isStreamersPage;

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 px-4 sm:px-6 lg:px-8 pt-4">
      <div className="max-w-7xl mx-auto">
        <div
          className={`flex items-center justify-between h-16 lg:h-20 px-4 sm:px-6 lg:px-8 rounded-2xl transition-all duration-500 ${
            scrolled
              ? 'bg-[#0a0a12]/60 backdrop-blur-xl border border-white/20 shadow-[0_8px_32px_0_rgba(0,0,0,0.37)]'
              : 'bg-transparent backdrop-blur-sm border border-white/0'
          } ${
            isVisible
              ? 'opacity-100 translate-y-0'
              : 'opacity-0 -translate-y-4'
          }`}
        >
          <Link to={localePath('/')} className="flex items-center group">
            <img
              src="/image.png"
              alt="Octo Media Group"
              width="200"
              height="64"
              className="h-16 w-auto transition-all duration-300 group-hover:scale-105"
              loading="eager"
              fetchPriority="high"
              decoding="sync"
            />
          </Link>

          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <NavItem
                key={link.labelKey}
                link={link}
                label={t.nav[link.labelKey as keyof typeof t.nav]}
              />
            ))}
          </div>

          <div className="hidden lg:flex items-center gap-3">
            <LanguageSwitcher />
            <a
              href={ctaHref}
              {...(ctaExternal ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full font-poppins text-sm font-semibold text-white bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-600 transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-cyan-500/40 active:scale-95 relative overflow-hidden group"
            >
              <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-purple-600 via-blue-500 to-cyan-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></span>
              <span className="relative z-10">{ctaLabel}</span>
              <svg className="relative z-10 w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </a>
          </div>

          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden text-white/70 hover:text-white transition-all duration-300 hover:scale-110 hover:rotate-90 active:scale-95"
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {mobileOpen && (
          <div className="lg:hidden mt-2 bg-[#0a0a12]/60 backdrop-blur-xl border border-white/20 rounded-2xl animate-slideDown shadow-[0_8px_32px_0_rgba(0,0,0,0.37)]">
            <div className="px-4 py-6 space-y-4">
            {navLinks.map((link, index) => (
              <div
                key={link.labelKey}
                className="block opacity-0 animate-fade-up"
                style={{ animationDelay: `${index * 50}ms`, animationFillMode: 'forwards' }}
              >
                <NavItem
                  link={link}
                  label={t.nav[link.labelKey as keyof typeof t.nav]}
                  onClick={() => setMobileOpen(false)}
                />
              </div>
            ))}
            <div className="pt-2">
              <LanguageSwitcher />
            </div>
            <a
              href={ctaHref}
              {...(ctaExternal ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
              onClick={() => setMobileOpen(false)}
              className="flex items-center justify-center gap-2 px-6 py-3 rounded-full font-poppins text-sm font-semibold text-white bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-600 mt-4 opacity-0 animate-fade-up transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-cyan-500/40 active:scale-95 relative overflow-hidden group"
              style={{ animationDelay: `${navLinks.length * 50}ms`, animationFillMode: 'forwards' }}
            >
              <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-purple-600 via-blue-500 to-cyan-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></span>
              <span className="relative z-10">{ctaLabel}</span>
              <svg className="relative z-10 w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
