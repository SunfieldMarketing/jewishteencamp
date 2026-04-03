'use client';

export default function ShimmerButton({ children, className = '', href, onClick, ...props }) {
  const base =
    'relative inline-flex items-center justify-center overflow-hidden rounded-full font-bold transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold ' +
    'bg-[length:200%_100%] animate-shimmer ' +
    'bg-[linear-gradient(110deg,#C8922A_0%,#C8922A_40%,#f5d78e_50%,#C8922A_60%,#C8922A_100%)] ' +
    'text-white shadow-[0_0_0_3px_rgba(200,146,42,0.3)] hover:shadow-[0_0_0_6px_rgba(200,146,42,0.2)] ' +
    className;

  if (href) {
    return (
      <a href={href} className={base} {...props}>
        <span className="relative z-10 px-8 py-4 text-sm md:text-base">{children}</span>
      </a>
    );
  }

  return (
    <button onClick={onClick} className={base} {...props}>
      <span className="relative z-10 px-8 py-4 text-sm md:text-base">{children}</span>
    </button>
  );
}
