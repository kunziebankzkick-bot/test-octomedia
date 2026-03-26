import { useState } from 'react';

const COMING_SOON_COUNTRIES = [
  'North Korea', 'Iran', 'Myanmar', 'Yemen', 'Zimbabwe', 'South Sudan',
  'Afghanistan', 'Cuba', 'Iraq', 'Ivory Coast', 'Liberia', 'Libya',
  'Bulgaria', 'Malta', 'Sudan', 'Syria', 'Guam', 'Northern Mariana Islands',
  'Puerto Rico', 'U.S. Virgin Islands', 'Aruba', 'Curaçao', 'Lithuania',
  'New Caledonia', 'Sint Maarten', 'Saint Barthélemy', 'Saint Martin',
  'Saint Pierre & Miquelon', 'U.S. Outlying Islands', 'Wallis & Futuna',
  'French Guiana', 'Guadeloupe', 'Martinique', 'Cyprus'
];

const COUNTRY_POSITIONS = [
  { name: 'United States', lat: 37, lon: -95, isActive: true, flag: '🇺🇸' },
  { name: 'Canada', lat: 56, lon: -106, isActive: true, flag: '🇨🇦' },
  { name: 'Mexico', lat: 23, lon: -102, isActive: true, flag: '🇲🇽' },
  { name: 'Brazil', lat: -14, lon: -51, isActive: true, flag: '🇧🇷' },
  { name: 'Argentina', lat: -38, lon: -63, isActive: true, flag: '🇦🇷' },
  { name: 'United Kingdom', lat: 55, lon: -3, isActive: true, flag: '🇬🇧' },
  { name: 'France', lat: 46, lon: 2, isActive: true, flag: '🇫🇷' },
  { name: 'Germany', lat: 51, lon: 10, isActive: true, flag: '🇩🇪' },
  { name: 'Spain', lat: 40, lon: -3, isActive: true, flag: '🇪🇸' },
  { name: 'Italy', lat: 41, lon: 12, isActive: true, flag: '🇮🇹' },
  { name: 'Netherlands', lat: 52, lon: 5, isActive: true, flag: '🇳🇱' },
  { name: 'Belgium', lat: 50, lon: 4, isActive: true, flag: '🇧🇪' },
  { name: 'Switzerland', lat: 46, lon: 8, isActive: true, flag: '🇨🇭' },
  { name: 'Austria', lat: 47, lon: 13, isActive: true, flag: '🇦🇹' },
  { name: 'Poland', lat: 51, lon: 19, isActive: true, flag: '🇵🇱' },
  { name: 'Sweden', lat: 60, lon: 18, isActive: true, flag: '🇸🇪' },
  { name: 'Norway', lat: 60, lon: 8, isActive: true, flag: '🇳🇴' },
  { name: 'Denmark', lat: 56, lon: 9, isActive: true, flag: '🇩🇰' },
  { name: 'Finland', lat: 61, lon: 25, isActive: true, flag: '🇫🇮' },
  { name: 'Russia', lat: 61, lon: 105, isActive: true, flag: '🇷🇺' },
  { name: 'China', lat: 35, lon: 105, isActive: true, flag: '🇨🇳' },
  { name: 'Japan', lat: 36, lon: 138, isActive: true, flag: '🇯🇵' },
  { name: 'South Korea', lat: 37, lon: 127, isActive: true, flag: '🇰🇷' },
  { name: 'India', lat: 20, lon: 77, isActive: true, flag: '🇮🇳' },
  { name: 'Indonesia', lat: -0, lon: 113, isActive: true, flag: '🇮🇩' },
  { name: 'Australia', lat: -25, lon: 133, isActive: true, flag: '🇦🇺' },
  { name: 'New Zealand', lat: -40, lon: 174, isActive: true, flag: '🇳🇿' },
  { name: 'South Africa', lat: -30, lon: 22, isActive: true, flag: '🇿🇦' },
  { name: 'Nigeria', lat: 9, lon: 8, isActive: true, flag: '🇳🇬' },
  { name: 'Kenya', lat: -0, lon: 37, isActive: true, flag: '🇰🇪' },
  { name: 'Egypt', lat: 26, lon: 30, isActive: true, flag: '🇪🇬' },
  { name: 'Turkey', lat: 38, lon: 35, isActive: true, flag: '🇹🇷' },
  { name: 'Saudi Arabia', lat: 23, lon: 45, isActive: true, flag: '🇸🇦' },
  { name: 'UAE', lat: 23, lon: 53, isActive: true, flag: '🇦🇪' },
  { name: 'Israel', lat: 31, lon: 34, isActive: true, flag: '🇮🇱' },
  { name: 'Thailand', lat: 15, lon: 100, isActive: true, flag: '🇹🇭' },
  { name: 'Singapore', lat: 1, lon: 103, isActive: true, flag: '🇸🇬' },
  { name: 'Malaysia', lat: 4, lon: 101, isActive: true, flag: '🇲🇾' },
  { name: 'Philippines', lat: 12, lon: 121, isActive: true, flag: '🇵🇭' },
  { name: 'Vietnam', lat: 14, lon: 108, isActive: true, flag: '🇻🇳' },
  { name: 'Chile', lat: -35, lon: -71, isActive: true, flag: '🇨🇱' },
  { name: 'Colombia', lat: 4, lon: -72, isActive: true, flag: '🇨🇴' },
  { name: 'Peru', lat: -9, lon: -75, isActive: true, flag: '🇵🇪' },
  { name: 'Venezuela', lat: 6, lon: -66, isActive: true, flag: '🇻🇪' },
  { name: 'Ukraine', lat: 48, lon: 31, isActive: true, flag: '🇺🇦' },
  { name: 'Czech Republic', lat: 49, lon: 15, isActive: true, flag: '🇨🇿' },
  { name: 'Romania', lat: 45, lon: 24, isActive: true, flag: '🇷🇴' },
  { name: 'Portugal', lat: 39, lon: -8, isActive: true, flag: '🇵🇹' },
  { name: 'Greece', lat: 39, lon: 22, isActive: true, flag: '🇬🇷' },
  { name: 'Ireland', lat: 53, lon: -8, isActive: true, flag: '🇮🇪' },
  { name: 'Bulgaria', lat: 42, lon: 25, isActive: false, flag: '🇧🇬' },
  { name: 'Malta', lat: 35, lon: 14, isActive: false, flag: '🇲🇹' },
  { name: 'Cyprus', lat: 35, lon: 33, isActive: false, flag: '🇨🇾' },
  { name: 'Lithuania', lat: 55, lon: 23, isActive: false, flag: '🇱🇹' },
  { name: 'North Korea', lat: 40, lon: 127, isActive: false, flag: '🇰🇵' },
  { name: 'Iran', lat: 32, lon: 53, isActive: false, flag: '🇮🇷' },
  { name: 'Myanmar', lat: 21, lon: 95, isActive: false, flag: '🇲🇲' },
  { name: 'Cuba', lat: 21, lon: -77, isActive: false, flag: '🇨🇺' },
  { name: 'Syria', lat: 34, lon: 38, isActive: false, flag: '🇸🇾' },
  { name: 'Sudan', lat: 12, lon: 30, isActive: false, flag: '🇸🇩' },
  { name: 'Afghanistan', lat: 33, lon: 65, isActive: false, flag: '🇦🇫' },
];

function CountryMarker({ x, y, name, isActive, flag }: { x: number, y: number, name: string, isActive: boolean, flag: string }) {
  const [hovered, setHovered] = useState(false);

  const isComingSoon = COMING_SOON_COUNTRIES.some(country =>
    name.toLowerCase().includes(country.toLowerCase()) ||
    country.toLowerCase().includes(name.toLowerCase())
  );

  return (
    <div
      className="absolute transform -translate-x-1/2 -translate-y-1/2 cursor-pointer group z-20"
      style={{ left: `${x}%`, top: `${y}%` }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div className={`relative ${!isComingSoon && isActive ? 'animate-pulse' : ''}`}>
        <div
          className="text-2xl transition-all duration-300"
          style={{
            filter: hovered ? 'drop-shadow(0 0 12px rgba(16, 185, 129, 0.9))' : isComingSoon ? 'grayscale(1) opacity(0.4)' : 'drop-shadow(0 0 6px rgba(16, 185, 129, 0.6))',
            transform: hovered ? 'scale(1.5)' : 'scale(1)',
          }}
        >
          {flag}
        </div>
        {!isComingSoon && isActive && (
          <div className="absolute inset-0 rounded-full bg-brand-green/30 blur-xl animate-ping" />
        )}
      </div>
      {hovered && (
        <div className="absolute top-full mt-3 left-1/2 transform -translate-x-1/2 z-50 whitespace-nowrap pointer-events-none">
          <div className="px-4 py-2.5 bg-black/95 border border-brand-purple/30 rounded-lg backdrop-blur-md shadow-2xl">
            <p className="text-white text-sm font-poppins font-semibold mb-1">
              {name}
            </p>
            <p className={`text-xs font-poppins font-medium tracking-wide ${isComingSoon ? 'text-gray-400' : 'text-brand-green'}`}>
              {isComingSoon ? '🔒 Coming Soon' : '✓ Active Coverage - Crypto + Fiat'}
            </p>
          </div>
        </div>
      )}
    </div>
  );
}

function latLonToXY(lat: number, lon: number): { x: number; y: number } {
  const x = ((lon + 180) / 360) * 100;
  const y = ((90 - lat) / 180) * 100;
  return { x, y };
}

function Globe() {
  const [hoveredRegion, setHoveredRegion] = useState<string | null>(null);

  const markers = COUNTRY_POSITIONS.map((country) => {
    const { x, y } = latLonToXY(country.lat, country.lon);
    return (
      <CountryMarker
        key={country.name}
        x={x}
        y={y}
        name={country.name}
        isActive={country.isActive}
        flag={country.flag}
      />
    );
  });

  return (
    <div className="relative w-full h-full bg-gradient-to-b from-[#0f0f23] via-[#1a1a35] to-[#0f0f23] rounded-2xl overflow-hidden shadow-2xl">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(137,127,217,0.15),transparent_70%)]" />

      <svg className="absolute inset-0 w-full h-full" viewBox="0 0 1000 500" preserveAspectRatio="xMidYMid meet">
        <defs>
          <filter id="glow">
            <feGaussianBlur stdDeviation="4" result="coloredBlur"/>
            <feMerge>
              <feMergeNode in="coloredBlur"/>
              <feMergeNode in="SourceGraphic"/>
            </feMerge>
          </filter>
          <linearGradient id="mapGradient" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" style={{ stopColor: '#4a5568', stopOpacity: 0.8 }} />
            <stop offset="100%" style={{ stopColor: '#2d3748', stopOpacity: 0.9 }} />
          </linearGradient>
        </defs>

        <g
          onMouseEnter={() => setHoveredRegion('north-america')}
          onMouseLeave={() => setHoveredRegion(null)}
          className="cursor-pointer transition-all duration-300"
          style={{ filter: hoveredRegion === 'north-america' ? 'url(#glow)' : 'none' }}
        >
          <path
            d="M 50,120 L 60,90 L 80,75 L 100,70 L 130,65 L 160,70 L 180,80 L 200,95 L 210,110 L 215,130 L 210,150 L 200,170 L 185,185 L 165,195 L 145,198 L 125,195 L 105,188 L 90,175 L 75,160 L 65,145 L 55,130 Z M 180,100 L 220,95 L 250,100 L 270,110 L 285,125 L 290,145 L 285,165 L 270,180 L 250,188 L 230,185 L 210,175 Z M 90,140 L 105,135 L 115,140 L 120,150 L 115,160 L 105,165 L 95,160 Z"
            fill={hoveredRegion === 'north-america' ? 'rgba(16, 185, 129, 0.4)' : 'url(#mapGradient)'}
            stroke="rgba(74, 144, 226, 0.6)"
            strokeWidth="1.5"
            className="transition-all duration-300"
            style={{
              filter: hoveredRegion === 'north-america' ? 'drop-shadow(0 0 20px rgba(16, 185, 129, 0.8))' : 'none',
            }}
          />
        </g>

        <g
          onMouseEnter={() => setHoveredRegion('south-america')}
          onMouseLeave={() => setHoveredRegion(null)}
          className="cursor-pointer transition-all duration-300"
        >
          <path
            d="M 235,225 L 250,220 L 265,222 L 280,230 L 290,245 L 295,265 L 298,285 L 295,305 L 288,325 L 275,340 L 258,350 L 240,355 L 225,353 L 212,345 L 205,330 L 200,310 L 200,290 L 205,270 L 215,250 L 225,235 Z"
            fill={hoveredRegion === 'south-america' ? 'rgba(16, 185, 129, 0.4)' : 'url(#mapGradient)'}
            stroke="rgba(74, 144, 226, 0.6)"
            strokeWidth="1.5"
            style={{
              filter: hoveredRegion === 'south-america' ? 'drop-shadow(0 0 20px rgba(16, 185, 129, 0.8))' : 'none'
            }}
          />
        </g>

        <g
          onMouseEnter={() => setHoveredRegion('europe')}
          onMouseLeave={() => setHoveredRegion(null)}
          className="cursor-pointer transition-all duration-300"
        >
          <path
            d="M 475,100 L 490,95 L 510,93 L 530,95 L 545,100 L 558,108 L 565,120 L 568,135 L 565,148 L 555,158 L 540,163 L 520,165 L 500,163 L 485,158 L 472,148 L 467,135 L 467,120 L 470,108 Z"
            fill={hoveredRegion === 'europe' ? 'rgba(16, 185, 129, 0.4)' : 'url(#mapGradient)'}
            stroke="rgba(74, 144, 226, 0.6)"
            strokeWidth="1.5"
            style={{
              filter: hoveredRegion === 'europe' ? 'drop-shadow(0 0 20px rgba(16, 185, 129, 0.8))' : 'none'
            }}
          />
        </g>

        <g
          onMouseEnter={() => setHoveredRegion('africa')}
          onMouseLeave={() => setHoveredRegion(null)}
          className="cursor-pointer transition-all duration-300"
        >
          <path
            d="M 475,180 L 495,175 L 515,175 L 535,180 L 550,190 L 560,205 L 565,225 L 565,250 L 560,275 L 550,295 L 535,310 L 518,320 L 500,325 L 482,323 L 468,315 L 458,300 L 452,280 L 450,255 L 453,230 L 460,205 L 470,190 Z"
            fill={hoveredRegion === 'africa' ? 'rgba(16, 185, 129, 0.4)' : 'url(#mapGradient)'}
            stroke="rgba(74, 144, 226, 0.6)"
            strokeWidth="1.5"
            style={{
              filter: hoveredRegion === 'africa' ? 'drop-shadow(0 0 20px rgba(16, 185, 129, 0.8))' : 'none'
            }}
          />
        </g>

        <g
          onMouseEnter={() => setHoveredRegion('asia')}
          onMouseLeave={() => setHoveredRegion(null)}
          className="cursor-pointer transition-all duration-300"
        >
          <path
            d="M 570,90 L 600,85 L 640,85 L 680,90 L 720,100 L 755,115 L 780,130 L 795,150 L 800,170 L 795,190 L 780,205 L 755,215 L 720,220 L 680,220 L 640,215 L 600,205 L 570,190 L 555,170 L 550,145 L 553,120 L 560,102 Z M 730,140 L 760,135 L 780,140 L 790,155 L 785,170 L 765,178 L 745,175 L 730,165 Z"
            fill={hoveredRegion === 'asia' ? 'rgba(16, 185, 129, 0.4)' : 'url(#mapGradient)'}
            stroke="rgba(74, 144, 226, 0.6)"
            strokeWidth="1.5"
            style={{
              filter: hoveredRegion === 'asia' ? 'drop-shadow(0 0 20px rgba(16, 185, 129, 0.8))' : 'none'
            }}
          />
        </g>

        <g
          onMouseEnter={() => setHoveredRegion('australia')}
          onMouseLeave={() => setHoveredRegion(null)}
          className="cursor-pointer transition-all duration-300"
        >
          <path
            d="M 770,320 L 795,315 L 820,318 L 840,325 L 855,335 L 865,350 L 867,365 L 862,378 L 850,388 L 830,393 L 808,395 L 788,390 L 772,380 L 762,365 L 760,348 L 763,333 Z"
            fill={hoveredRegion === 'australia' ? 'rgba(16, 185, 129, 0.4)' : 'url(#mapGradient)'}
            stroke="rgba(74, 144, 226, 0.6)"
            strokeWidth="1.5"
            style={{
              filter: hoveredRegion === 'australia' ? 'drop-shadow(0 0 20px rgba(16, 185, 129, 0.8))' : 'none'
            }}
          />
        </g>
      </svg>

      <div className="absolute inset-0">
        {markers}
      </div>

      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex items-center gap-6 px-6 py-3 bg-black/70 backdrop-blur-md rounded-full border border-brand-purple/30 shadow-2xl">
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-brand-green animate-pulse shadow-lg shadow-brand-green/50" />
          <span className="text-sm text-white font-poppins font-medium">Active Coverage</span>
        </div>
        <div className="w-px h-4 bg-white/20" />
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-gray-500" />
          <span className="text-sm text-gray-400 font-poppins font-medium">Coming Soon</span>
        </div>
      </div>
    </div>
  );
}

export default Globe;
