import Link from 'next/link';

export const metadata = {
  title: '404 – Page Not Found | Chicago Jewish Teen Camp',
  description: 'The page you were looking for could not be found.',
};

export default function NotFound() {
  return (
    <main className="min-h-screen bg-primary-dark flex items-center justify-center relative overflow-hidden">
      {/* Background glow blobs */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-gold/10 rounded-full blur-3xl -mr-40 -mt-40 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary-light/10 rounded-full blur-3xl -ml-40 -mb-40 pointer-events-none" />

      {/* Dot pattern */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage: 'radial-gradient(circle, #ffffff 1px, transparent 1px)',
          backgroundSize: '28px 28px',
        }}
      />

      <div className="relative z-10 text-center px-4 py-20 max-w-2xl mx-auto">
        {/* Star of David icon */}
        <div className="w-20 h-20 bg-gold/20 rounded-2xl flex items-center justify-center mx-auto mb-8 border border-gold/30">
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinejoin="miter"
            strokeMiterlimit="10"
            className="w-10 h-10 text-gold"
          >
            <path d="M12 2l8.66 15H3.34z" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="miter" />
                <path d="M12 22l8.66-15H3.34z" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="miter" />
          </svg>
        </div>

        {/* 404 number */}
        <div
          className="text-8xl md:text-9xl font-black text-white/10 leading-none mb-2 select-none"
          style={{ fontFamily: 'Playfair Display, serif' }}
        >
          404
        </div>

        <h1
          className="text-3xl md:text-4xl font-bold text-white mb-4 -mt-4"
          style={{ fontFamily: 'Playfair Display, serif' }}
        >
          Page Not Found
        </h1>

        <p className="text-blue-200 text-lg leading-relaxed mb-10 max-w-md mx-auto">
          Looks like this page took a detour on the way to camp. Let&apos;s get you back on track.
        </p>

        {/* Quick links */}
        <div className="flex flex-wrap justify-center gap-3 mb-10">
          {[
            { href: '/', label: 'Home' },
            { href: '/day-camp', label: 'Day Camp' },
            { href: '/social-events', label: 'Social Events' },
            { href: '/schedule', label: 'Schedule' },
            { href: '/contact', label: 'Contact Us' },
          ].map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="px-5 py-2.5 bg-white/10 hover:bg-white/20 border border-white/10 hover:border-white/30 text-white text-sm font-medium rounded-full transition-all duration-200"
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Primary CTA */}
        <Link
          href="/"
          className="inline-flex items-center gap-3 bg-gold text-white font-bold px-8 py-4 rounded-full hover:bg-gold-dark transition-all duration-300 hover:shadow-[0_0_30px_rgba(200,146,42,0.4)] hover:-translate-y-0.5"
        >
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
          </svg>
          <span>Back to Home</span>
        </Link>
      </div>
    </main>
  );
}
