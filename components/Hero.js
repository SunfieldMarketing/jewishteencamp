'use client';
import ShimmerButton from './ui/shimmer-button';

import { featuredPhoto, img } from '../lib/photos';

const heroTrust = [
  { text: 'Est. Since 2000', icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6" /><path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18" /><path d="M4 22h16" /><path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22" /><path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22" /><path d="M18 2H6v7a6 6 0 0 0 12 0V2z" /></svg> },
  { text: 'CGI Camp Network', icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10" /><line x1="2" y1="12" x2="22" y2="12" /><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" /></svg> },
  { text: '100+ Families', icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M23 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" /></svg> },
  { text: 'Ages 12–17', icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="12,0 14.5,8.5 23,8.5 16.5,13.5 19,22 12,17 5,22 7.5,13.5 1,8.5 9.5,8.5" /></svg> },
];

export default function Hero({ 
  tagline = "Now Enrolling for 2026", 
  title = "California Jewish Teens", 
  subtitle = "The ultimate summer adventure for Jewish teens.",
  ctaText = "Enroll Now",
  ctaLink = "/contact",
  backgroundImage
}) {
  return (
    <section className="relative min-h-[92vh] flex items-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#0B1F3D] via-[#1B3A6B] to-[#2A5298]" />
        <div
          className="absolute inset-0 bg-cover bg-center opacity-20 pointer-events-none"
          style={{ backgroundImage: `url("${backgroundImage || img(featuredPhoto, 1400)}")` }}
        />
        <div className="relative z-20 max-w-5xl mx-auto px-4 py-32 text-center">
            <p className="text-[#C8922A] font-bold uppercase tracking-widest mb-6 opacity-90 drop-shadow-md">
              {tagline}
            </p>
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-8 leading-tight drop-shadow-lg">
              {title}
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 mb-12 max-w-3xl mx-auto leading-relaxed opacity-95">
              {subtitle}
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
              <ShimmerButton href={ctaLink}>
                <span>{ctaText}</span>
              </ShimmerButton>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 pt-12 border-t border-white/10">
              {heroTrust.map((signal, idx) => (
                <div key={idx} className="flex flex-col items-center text-white/80 group">
                  <div className="w-8 h-8 mb-3 text-[#C8922A] opacity-80 group-hover:opacity-100 transition-opacity">
                    {signal.icon}
                  </div>
                  <span className="text-sm font-medium tracking-wide uppercase">
                    {signal.text}
                  </span>
                </div>
              ))}
            </div>
        </div>
      </section>
  );
}
