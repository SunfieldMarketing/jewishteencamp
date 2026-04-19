import Link from 'next/link';
import ShimmerButton from '../ui/shimmer-button';
import Spotlight from '../ui/spotlight';
import { img, featuredPhoto } from '../../lib/photos';

export const HeroBlock = ({ data }) => {
  return (
    <section className="relative min-h-[92vh] flex items-center overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary-dark via-primary to-primary-light" />
      <div
        className="absolute inset-0 bg-cover bg-center opacity-20 pointer-events-none"
        style={{ backgroundImage: `url("${data.backgroundImage || img(featuredPhoto, 1400)}")` }}
      />
      <Spotlight className="-top-40 left-0 md:left-60 md:-top-20 h-screen" fill="rgba(200,146,42,0.15)" />
      
      <div className="relative z-10 max-w-4xl mx-auto px-4 py-20 text-center">
        <div className="flex flex-col items-center">
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2 text-white text-sm font-medium mb-6 hero-animate">
            <span className="w-2 h-2 bg-gold rounded-full animate-pulse" />
            {data.badgeText || "Now Enrolling for Summer 2026"}
          </div>

          <h1
            className="text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight mb-6 hero-animate-delay-1"
            style={{ fontFamily: 'Playfair Display, serif' }}
          >
            {data.title || "Make a Lifelong Investment in Your Teen"}
          </h1>

          <p className="text-xl text-blue-100 leading-relaxed mb-8 max-w-2xl hero-animate-delay-2">
            {data.description || "Chicago's premier Jewish day camp for teens ages 12-17."}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center hero-animate-delay-3">
            <ShimmerButton href={data.primaryLink || "/contact"}>
              {data.primaryLabel || "Enroll Now - Free Consultation"}
            </ShimmerButton>
            <Link href={data.secondaryLink || "/about"} className="btn-outline">
              {data.secondaryLabel || "Learn More"}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};
