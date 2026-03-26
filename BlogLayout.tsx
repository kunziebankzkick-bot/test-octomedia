import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ArrowLeft, Clock, Calendar, User, ChevronRight } from 'lucide-react';

export interface RelatedPost {
  title: string;
  href: string;
  excerpt: string;
  badge: string;
}

export interface BlogLayoutProps {
  title: string;
  metaTitle: string;
  metaDescription: string;
  slug: string;
  badge: string;
  publishDate: string;
  readTime: number;
  excerpt: string;
  children: React.ReactNode;
  relatedPosts?: RelatedPost[];
  toc?: { id: string; label: string; level: 2 | 3 }[];
  jsonLd?: Record<string, unknown>[];
}

export default function BlogLayout({
  title,
  badge,
  publishDate,
  readTime,
  children,
  relatedPosts = [],
  toc = [],
}: BlogLayoutProps) {
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    if (toc.length === 0) return;
    const ids = toc.map((t) => t.id);
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        }
      },
      { rootMargin: '-20% 0px -70% 0px' }
    );
    ids.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, [toc]);

  return (
    <>
      <section className="relative pt-32 pb-12 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(205,128,217,0.07),transparent_55%)]" />
        <div className="max-w-5xl mx-auto px-6 relative z-10">
          <nav className="flex items-center gap-2 text-xs font-poppins text-white/30 mb-8 flex-wrap">
            <Link to="/" className="hover:text-white/60 transition-colors">Home</Link>
            <ChevronRight className="w-3 h-3" />
            <Link to="/blog" className="hover:text-white/60 transition-colors">Blog</Link>
            <ChevronRight className="w-3 h-3" />
            <span className="text-white/50 truncate max-w-xs">{title}</span>
          </nav>

          <div className="inline-block mb-4 px-3 py-1 bg-brand-pink/10 border border-brand-pink/20 rounded-full">
            <span className="text-brand-pink font-poppins font-semibold text-xs tracking-wider uppercase">
              {badge}
            </span>
          </div>

          <h1 className="font-poppins font-black text-3xl sm:text-4xl md:text-5xl text-white leading-tight mb-6 max-w-4xl">
            {title}
          </h1>

          <div className="flex flex-wrap items-center gap-5 text-white/35 font-poppins text-xs">
            <div className="flex items-center gap-1.5">
              <User className="w-3.5 h-3.5" />
              <span>By <span className="text-white/55">Alexei Volkov</span></span>
            </div>
            <div className="flex items-center gap-1.5">
              <Calendar className="w-3.5 h-3.5" />
              <span>{publishDate}</span>
            </div>
            <div className="flex items-center gap-1.5">
              <Clock className="w-3.5 h-3.5" />
              <span>{readTime} min read</span>
            </div>
          </div>
        </div>
      </section>

      <div className="max-w-5xl mx-auto px-6 pb-24">
        <div className="flex gap-10 items-start">
          {toc.length > 0 && (
            <aside className="hidden xl:block w-60 flex-shrink-0 sticky top-28 self-start">
              <p className="font-poppins text-xs font-semibold text-white/30 uppercase tracking-wider mb-3">
                Contents
              </p>
              <nav className="space-y-1">
                {toc.map((item) => (
                  <a
                    key={item.id}
                    href={`#${item.id}`}
                    className={`block font-poppins text-xs leading-snug transition-colors duration-150 py-1 ${
                      item.level === 3 ? 'pl-3' : ''
                    } ${
                      activeSection === item.id
                        ? 'text-brand-pink'
                        : 'text-white/30 hover:text-white/60'
                    }`}
                  >
                    {item.label}
                  </a>
                ))}
              </nav>
            </aside>
          )}

          <div className="flex-1 min-w-0">
            <article className="prose-custom">
              {children}
            </article>

            <div className="mt-14 p-8 rounded-2xl bg-gradient-to-r from-brand-pink/10 to-brand-purple/10 border border-white/10">
              <p className="font-poppins text-xs font-semibold text-brand-pink uppercase tracking-wider mb-2">
                Ready to Apply This?
              </p>
              <p className="font-poppins font-bold text-xl text-white mb-2">
                Get a Free iGaming Marketing Consultation
              </p>
              <p className="font-poppins text-sm text-white/45 mb-6 max-w-lg">
                Our team implements these exact strategies for casino and crypto brands daily. Book a free 30-minute call to see what's possible for your brand.
              </p>
              <a
                href="https://calendly.com/contact-octomediagroup/30min"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-7 py-3 rounded-xl bg-gradient-to-r from-brand-pink to-brand-purple font-poppins font-bold text-sm text-white hover:shadow-xl hover:shadow-brand-pink/20 transition-all duration-300 hover:scale-105"
              >
                Schedule a Free Consultation
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>

            {relatedPosts.length > 0 && (
              <aside className="mt-14 pt-10 border-t border-white/10">
                <h2 className="font-poppins font-bold text-lg text-white mb-6">
                  Related Articles
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                  {relatedPosts.map((post) => (
                    <Link
                      key={post.href}
                      to={post.href}
                      className="group block p-5 rounded-xl bg-white/[0.03] border border-white/10 hover:border-white/20 transition-all duration-300 hover:bg-white/[0.05]"
                    >
                      <span className="font-poppins text-xs font-semibold text-brand-pink uppercase tracking-wider block mb-2">
                        {post.badge}
                      </span>
                      <p className="font-poppins text-sm font-semibold text-white group-hover:text-white/80 mb-2 transition-colors leading-snug">
                        {post.title}
                      </p>
                      <p className="font-poppins text-xs text-white/35 leading-relaxed mb-3">
                        {post.excerpt}
                      </p>
                      <div className="flex items-center gap-1">
                        <span className="font-poppins text-xs text-brand-pink">Read more</span>
                        <ArrowRight className="w-3 h-3 text-brand-pink transition-transform group-hover:translate-x-1" />
                      </div>
                    </Link>
                  ))}
                </div>
              </aside>
            )}

            <div className="mt-10">
              <Link
                to="/blog"
                className="inline-flex items-center gap-2 font-poppins text-sm text-white/30 hover:text-white/60 transition-colors"
              >
                <ArrowLeft className="w-4 h-4" />
                Back to Blog
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
