'use client';

export default function BorderBeam({
  children,
  className = '',
  colorFrom = '#C8922A',
  colorTo = '#f5d78e',
  size = 200,
  duration = 4,
  borderWidth = 2,
}) {
  return (
    <div className={`relative overflow-hidden rounded-3xl ${className}`}>
      {/* Animated beam border */}
      <span
        style={{
          '--size': size,
          '--duration': duration,
          '--colorFrom': colorFrom,
          '--colorTo': colorTo,
          '--border-width': `${borderWidth}px`,
          position: 'absolute',
          inset: 0,
          borderRadius: 'inherit',
          border: `${borderWidth}px solid transparent`,
          background: `linear-gradient(#fff,#fff) padding-box, conic-gradient(from calc(var(--angle,0)*1deg), transparent 10%, ${colorFrom}, ${colorTo}, transparent 40%) border-box`,
          animation: `beamSpin ${duration}s linear infinite`,
          maskComposite: 'exclude',
          WebkitMaskComposite: 'xor',
          mask: 'linear-gradient(#fff 0 0) padding-box, linear-gradient(#fff 0 0)',
          pointerEvents: 'none',
          zIndex: 10,
        }}
      />
      <style>{`
        @property --angle { syntax: '<angle>'; inherits: false; initial-value: 0deg; }
        @keyframes beamSpin { to { --angle: 360; } }
      `}</style>
      {children}
    </div>
  );
}
