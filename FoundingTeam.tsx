import { useState } from 'react';
import { useInView } from '../../hooks/useInView';
import { useI18n } from '../../i18n/context';

interface Founder {
  id: number;
  name: string;
  years: number;
  role: string;
  exCasino: string;
  strength: string;
  color: string;
}

const founders: Founder[] = [
  { id: 1, name: 'Alexei Volkov', years: 11, role: 'Head of Acquisition', exCasino: 'MegaPari', strength: 'Scalable FTD growth without retention burn', color: '#10b981' },
  { id: 2, name: 'Daniel Reyes', years: 9, role: 'Retention & CRM Lead', exCasino: '4rabet', strength: 'LTV & second-deposit optimisation', color: '#3b82f6' },
  { id: 3, name: 'Markus Klein', years: 12, role: 'Performance Director', exCasino: 'European Tier-1 Casino Group', strength: 'KPI frameworks & attribution clarity', color: '#8b5cf6' },
  { id: 4, name: 'Leonardo Costa', years: 7, role: 'Streaming Partnerships', exCasino: 'LATAM Crypto Casino', strength: 'Kick & Twitch streamer ecosystems', color: '#f59e0b' },
  { id: 5, name: 'Ravi Malhotra', years: 8, role: 'Market Expansion', exCasino: 'Asian iGaming Brands', strength: 'GEO-specific influencer scaling', color: '#ec4899' },
  { id: 6, name: 'Tomás Novak', years: 6, role: 'Affiliate & Hybrid Deals Manager', exCasino: 'Crypto Casino', strength: 'CPA + RevShare hybrid deals', color: '#06b6d4' },
  { id: 7, name: 'Ethan Brooks', years: 4, role: 'Brand & Compliance Strategy', exCasino: 'UK-Facing Casino', strength: 'Compliance-safe growth frameworks', color: '#84cc16' },
  { id: 8, name: 'Noah Sinclair', years: 5, role: 'Launch Manager', exCasino: 'Casino Startups', strength: 'Pre-launch & market entry execution', color: '#f43f5e' },
];

function FounderCard({ founder, index, yearsLabel, exLabel, strengthLabel }: {
  founder: Founder;
  index: number;
  yearsLabel: string;
  exLabel: string;
  strengthLabel: string;
}) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="group relative"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{ animationDelay: `${index * 100}ms` }}
    >
      <div
        className={`relative bg-gradient-to-br from-[#1a1a3e] to-[#0f0f23] rounded-2xl p-6 border transition-all duration-500 ${
          isHovered
            ? 'border-brand-green shadow-2xl shadow-brand-green/20 transform -translate-y-2'
            : 'border-white/10'
        }`}
      >
        <div className="relative mb-6">
          <div className="w-32 h-32 mx-auto rounded-full overflow-hidden border-4 border-white/10 relative">
            <svg
              viewBox="0 0 200 200"
              className="w-full h-full"
              style={{ background: `linear-gradient(135deg, ${founder.color}20, ${founder.color}10)` }}
            >
              <circle cx="100" cy="80" r="35" fill={`${founder.color}40`} />
              <ellipse cx="100" cy="180" rx="70" ry="50" fill={`${founder.color}50`} />
              <circle cx="85" cy="75" r="4" fill={founder.color} />
              <circle cx="115" cy="75" r="4" fill={founder.color} />
              <path d="M 85 95 Q 100 100 115 95" stroke={founder.color} strokeWidth="3" fill="none" strokeLinecap="round" />
              <rect x="70" y="55" width="60" height="15" rx="7" fill={`${founder.color}30`} />
            </svg>
          </div>

          <div
            className={`absolute top-2 right-2 px-3 py-1 rounded-full text-xs font-bold transition-all duration-300 ${
              isHovered ? 'opacity-100 scale-100' : 'opacity-0 scale-90'
            }`}
            style={{
              background: `linear-gradient(135deg, ${founder.color}40, ${founder.color}20)`,
              color: founder.color,
            }}
          >
            {founder.years} {yearsLabel}
          </div>
        </div>

        <div className="text-center mb-4">
          <h3 className="text-xl font-bold text-white mb-2 font-poppins">{founder.name}</h3>
          <p className="text-sm text-brand-purple font-semibold mb-1 font-poppins">{founder.role}</p>
          <p className="text-xs text-gray-400 font-poppins">{exLabel} {founder.exCasino}</p>
        </div>

        <div className="pt-4 border-t border-white/10">
          <p className="text-sm text-gray-300 leading-relaxed font-poppins">
            <span className="text-brand-green font-semibold">{strengthLabel} </span>
            {founder.strength}
          </p>
        </div>

        <div
          className={`absolute inset-0 rounded-2xl transition-opacity duration-300 pointer-events-none ${
            isHovered ? 'opacity-100' : 'opacity-0'
          }`}
          style={{ background: `radial-gradient(circle at center, ${founder.color}15, transparent 70%)` }}
        />
      </div>
    </div>
  );
}

function FoundingTeam() {
  const { ref, isInView } = useInView(0.1);
  const { t } = useI18n();
  const ft = t.whyUsPage.foundingTeam;

  return (
    <section ref={ref} className="py-24 relative">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(16,185,129,0.05),transparent_70%)]" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div
          className={`text-center mb-16 transition-all duration-1000 ${
            isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <h2 className="text-4xl md:text-5xl font-black mb-6 text-white font-poppins">
            {ft.title}
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto font-poppins">
            {ft.subtitle}
          </p>
        </div>

        <div
          className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 transition-all duration-1000 delay-300 ${
            isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          {founders.map((founder, index) => (
            <FounderCard
              key={founder.id}
              founder={founder}
              index={index}
              yearsLabel={ft.yearsLabel}
              exLabel={ft.exLabel}
              strengthLabel={ft.strengthLabel}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default FoundingTeam;
