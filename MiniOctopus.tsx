interface MiniOctopusProps {
  className?: string;
  flip?: boolean;
}

export default function MiniOctopus({ className = '', flip = false }: MiniOctopusProps) {
  const isMobile = typeof window !== 'undefined' && window.innerWidth < 768;

  return (
    <div
      className={`pointer-events-none select-none ${className}`}
      style={{
        transform: flip ? 'scaleX(-1)' : undefined,
        filter: isMobile
          ? 'drop-shadow(0 0 10px rgba(147, 51, 234, 0.2))'
          : 'drop-shadow(0 0 20px rgba(147, 51, 234, 0.35))'
      }}
    >
      <img
        src="/octopus2.png"
        alt="Octo Media Group"
        className="w-full h-full object-contain"
        loading="lazy"
        style={{
          filter: isMobile ? undefined : 'brightness(1.05) contrast(1.08) saturate(1.1)',
          animation: 'float 4s ease-in-out infinite'
        }}
      />
    </div>
  );
}
