'use client';

export default function Marquee({ children, speed = 30, className = '', pauseOnHover = true }) {
  return (
    <div
      className={`relative flex overflow-hidden [mask-image:linear-gradient(to_right,transparent,white_10%,white_90%,transparent)] ${className}`}
    >
      <div
        className={`flex min-w-full gap-6 ${pauseOnHover ? 'hover:[animation-play-state:paused]' : ''}`}
        style={{ animation: `infiniteScroll ${speed}s linear infinite` }}
      >
        {/* Duplicate children for seamless loop */}
        <div className="flex min-w-full gap-6 flex-shrink-0">{children}</div>
        <div className="flex min-w-full gap-6 flex-shrink-0" aria-hidden>{children}</div>
      </div>
    </div>
  );
}
