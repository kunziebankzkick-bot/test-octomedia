import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ArrowLeft } from 'lucide-react';

interface RelatedArticle {
  title: string;
  href: string;
  description: string;
}

interface ResourceLayoutProps {
  title: string;
  subtitle: string;
  badge: string;
  lastUpdated: string;
  children: React.ReactNode;
  relatedArticles?: RelatedArticle[];
  breadcrumbs: { name: string; href: string }[];
}

export default function ResourceLayout({
  title,
  subtitle,
  badge,
  lastUpdated,
  children,
  relatedArticles = [],
  breadcrumbs,
}: ResourceLayoutProps) {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <section className="relative pt-32 pb-16 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(137,127,217,0.08),transparent_50%)]" />
        <div className="max-w-4xl mx-auto px-6 relative z-10">
          <nav className="flex items-center gap-2 text-xs font-poppins text-white/30 mb-8 flex-wrap">
            {breadcrumbs.map((crumb, i) => (
              <span key={crumb.href} className="flex items-center gap-2">
                {i > 0 && <span>/</span>}
                {i < breadcrumbs.length - 1 ? (
                  <Link to={crumb.href} className="hover:text-white/60 transition-colors">
                    {crumb.name}
                  </Link>
                ) : (
                  <span className="text-white/50">{crumb.name}</span>
                )}
              </span>
            ))}
          </nav>

          <div className="inline-block mb-4 px-3 py-1 bg-brand-pink/10 border border-brand-pink/20 rounded-full">
            <span className="text-brand-pink font-poppins font-semibold text-xs tracking-wider uppercase">
              {badge}
            </span>
          </div>

          <h1 className="font-poppins font-black text-3xl sm:text-4xl md:text-5xl text-white leading-tight mb-4">
            {title}
          </h1>
          <p className="font-poppins text-lg text-white/50 leading-relaxed mb-4 max-w-3xl">
            {subtitle}
          </p>
          <p className="font-poppins text-xs text-white/25">
            Last updated: {lastUpdated} &nbsp;·&nbsp; By Octo Media Group iGaming Marketing Team
          </p>
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-6 pb-20">
        <article className="prose-custom">
          {children}
        </article>

        {relatedArticles.length > 0 && (
          <aside className="mt-16 pt-10 border-t border-white/10">
            <h2 className="font-poppins font-bold text-lg text-white mb-6">
              Related iGaming Marketing Resources
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {relatedArticles.map((article) => (
                <Link
                  key={article.href}
                  to={article.href}
                  className="group block p-5 rounded-xl bg-white/[0.03] border border-white/10 hover:border-white/20 transition-all duration-300"
                >
                  <p className="font-poppins text-sm font-semibold text-white group-hover:text-white/80 mb-1 transition-colors">
                    {article.title}
                  </p>
                  <p className="font-poppins text-xs text-white/40 leading-relaxed">
                    {article.description}
                  </p>
                  <div className="flex items-center gap-1 mt-3">
                    <span className="font-poppins text-xs text-brand-pink">Read more</span>
                    <ArrowRight className="w-3 h-3 text-brand-pink" />
                  </div>
                </Link>
              ))}
            </div>
          </aside>
        )}

        <div className="mt-12 pt-10 border-t border-white/10">
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6 justify-between">
            <div>
              <p className="font-poppins text-sm font-semibold text-white mb-1">
                Ready to launch your iGaming influencer campaign?
              </p>
              <p className="font-poppins text-xs text-white/40">
                Book a free 30-minute strategy call with our iGaming marketing team.
              </p>
            </div>
            <a
              href="https://calendly.com/contact-octomediagroup/30min"
              target="_blank"
              rel="noopener noreferrer"
              className="flex-shrink-0 inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-brand-pink to-brand-purple font-poppins font-bold text-sm text-white hover:shadow-xl hover:shadow-brand-pink/20 transition-all duration-300 hover:scale-105"
            >
              Book Free Strategy Call
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>

        <div className="mt-8">
          <Link to="/resources" className="inline-flex items-center gap-2 font-poppins text-sm text-white/30 hover:text-white/60 transition-colors">
            <ArrowLeft className="w-4 h-4" />
            Back to iGaming Marketing Resources
          </Link>
        </div>
      </div>
    </>
  );
}
