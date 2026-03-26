import { Link } from 'react-router-dom';
import { Home, Users, ArrowRight } from 'lucide-react';
import SEOHead from '../components/SEOHead';
import { SITE_URL } from '../utils/canonicalUrl';

export default function NotFoundPage() {
  return (
    <>
      <SEOHead
        title="Page Not Found | Octo Media Group"
        description="The page you're looking for doesn't exist. Navigate back to our homepage or explore our services."
        canonical={`${SITE_URL}/404`}
        robots="noindex, nofollow"
      />

      <section className="relative min-h-screen flex items-center justify-center">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(137,127,217,0.08),transparent_60%)]" />

        <div className="max-w-xl mx-auto px-6 text-center relative z-10">
          <div className="font-poppins text-[120px] md:text-[180px] font-black leading-none bg-gradient-to-b from-white/20 to-white/5 bg-clip-text text-transparent select-none mb-4">
            404
          </div>

          <h1 className="text-3xl md:text-4xl font-black text-white mb-4 font-poppins">
            Page Not Found
          </h1>

          <p className="text-lg text-gray-400 mb-10 font-poppins">
            The page you're looking for doesn't exist or has been moved. Let's get you back on track.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-gradient-to-r from-brand-pink to-brand-purple font-poppins font-bold text-white hover:shadow-2xl hover:shadow-brand-pink/30 transition-all duration-300 hover:scale-105"
            >
              <Home className="w-5 h-5" />
              Back to Home
            </Link>
            <Link
              to="/services"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-white/5 border border-white/20 font-poppins font-bold text-white hover:bg-white/10 transition-all duration-300"
            >
              <Users className="w-5 h-5" />
              View Services
            </Link>
          </div>

          <div className="mt-16 pt-8 border-t border-white/10">
            <p className="text-sm text-gray-500 mb-4 font-poppins">Quick links</p>
            <div className="flex flex-wrap justify-center gap-4">
              {[
                { label: 'For Streamers', to: '/streamers' },
                { label: 'Why Us', to: '/why-us' },
                { label: 'Services', to: '/services' },
              ].map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  className="inline-flex items-center gap-1 text-sm text-gray-400 hover:text-brand-pink transition-colors font-poppins"
                >
                  {link.label}
                  <ArrowRight className="w-3 h-3" />
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
