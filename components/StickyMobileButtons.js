'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function StickyMobileButtons() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show after scrolling past hero section
      setIsVisible(window.scrollY > 400);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div
      className={`lg:hidden fixed bottom-5 left-4 right-4 z-[9999] transition-all duration-300 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8 pointer-events-none'
      }`}
    >
      <Link
        href="/contact"
        className="flex items-center justify-center w-full bg-gold text-white font-bold py-4 rounded-2xl text-lg shadow-[0_8px_30px_rgba(200,146,42,0.4)] active:scale-95 transition-all"
      >
        Enroll Now
      </Link>
    </div>
  );
}

