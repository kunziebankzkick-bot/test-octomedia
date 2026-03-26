export default function Octopus3D({ className = '' }: { className?: string }) {
  const isMobile = typeof window !== 'undefined' && window.innerWidth < 768;

  if (typeof window === 'undefined') {
    return null;
  }

  return (
    <div className={`relative ${className}`}>
      <div className="absolute inset-0 flex items-center justify-center">
        <div
          className="relative w-full h-full"
          style={{
            filter: isMobile
              ? 'drop-shadow(0 0 20px rgba(147, 51, 234, 0.3))'
              : 'drop-shadow(0 0 40px rgba(147, 51, 234, 0.45)) drop-shadow(0 0 80px rgba(236, 72, 153, 0.2))',
            animation: 'float 6s ease-in-out infinite'
          }}
        >
          <img
            src="/octoput.png"
            alt="Octo Media Group Mascot"
            width="600"
            height="600"
            className="w-full h-full object-contain"
            loading="eager"
            fetchPriority="high"
            decoding="async"
            style={isMobile ? undefined : { filter: 'brightness(1.05) contrast(1.08) saturate(1.1)' }}
          />
        </div>
      </div>
    </div>
  );
}
