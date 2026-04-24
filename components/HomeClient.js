"use client";
import { useTina } from "tinacms/dist/react";
import Link from 'next/link';
import ContactForm from './ContactForm';
import {
  WavesIcon, SportsIcon, PaletteIcon, TentIcon, StarOfDavidIcon,
  MartialArtsIcon, FishingIcon, MountainIcon, BookOpenIcon,
  TrophyIcon, UsersIcon, GlobeIcon, LockIcon, HandshakeIcon, StarIcon,
  PersonIcon, ChatIcon, MapPinIcon, PhoneIcon, MailIcon,
} from './Icons';
import ShimmerButton from './ui/shimmer-button';
import NumberTicker from './ui/number-ticker';
import BlurFade from './ui/blur-fade';
import BorderBeam from './ui/border-beam';
import Spotlight from './ui/spotlight';
import { aboutPhoto, featuredPhoto, homepageGallery, allPhotos, img, thumb, staffScheiman, staffNotik, staffGoldshmidt } from '../lib/photos';

export default function HomeClient(props) {
  const { data } = useTina({
    query: props.query,
    variables: props.variables,
    data: props.data,
  });

  const homepage = data.homepage;

  return (
    <>
      {/* ===== HERO SECTION ===== */}
      <section className="relative min-h-[92vh] flex items-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary-dark via-primary to-primary-light" />
        <div
          className="absolute inset-0 bg-cover bg-center opacity-20 pointer-events-none"
          style={{ backgroundImage: `url("${img(featuredPhoto, 1400)}")` }}
        />
        <Spotlight className="-top-40 left-0 md:left-60 md:-top-20 h-screen" fill="rgba(200,146,42,0.15)" />
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.15'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
        <div className="relative z-10 max-w-4xl mx-auto px-4 py-20 text-center">
          <div className="flex flex-col items-center">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2 text-white text-sm font-medium mb-6 hero-animate">
              <span className="w-2 h-2 bg-gold rounded-full animate-pulse" />
              Now Enrolling for Summer 2026
            </div>

            <h1
              data-tina-field={props.tinaField(homepage, "heroTitle")}
              className="text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight mb-6 hero-animate-delay-1"
              style={{ fontFamily: 'Playfair Display, serif' }}
            >
              {homepage.heroTitle}
            </h1>

            <p 
              data-tina-field={props.tinaField(homepage, "heroSubtitle")}
              className="text-xl text-blue-100 leading-relaxed mb-8 max-w-2xl hero-animate-delay-2"
            >
              {homepage.heroSubtitle}
            </p>

            <blockquote 
              data-tina-field={props.tinaField(homepage, "heroQuote")}
              className="border-l-4 border-gold pl-5 text-blue-200 italic text-sm mb-10 hero-animate-delay-2 max-w-lg mx-auto"
            >
              &ldquo;{homepage.heroQuote}&rdquo;
              <footer className="text-gold text-xs mt-1.5 not-italic font-semibold">- The Lubavitcher Rebbe</footer>
            </blockquote>

            <div className="flex flex-col sm:flex-row gap-4 justify-center hero-animate-delay-3">
              <ShimmerButton href="/contact">
                Enroll Now - Free Consultation
              </ShimmerButton>
              <Link href="/about" className="btn-outline">
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ===== STATS BAR ===== */}
      <section className="bg-gold py-10">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 divide-x divide-white/20">
            {homepage.stats?.map((stat, i) => (
              <div key={i} className="text-center text-white px-4" data-tina-field={props.tinaField(stat)}>
                <div className="text-4xl md:text-5xl font-bold mb-1" style={{ fontFamily: 'Playfair Display, serif' }}>
                  <NumberTicker value={stat.value} suffix={stat.suffix} duration={1800} />
                </div>
                <div className="text-white/80 text-sm font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== THE REST OF THE PAGE (STILL HARDCODED FOR NOW) ===== */}
      <section className="py-24 bg-white">
        <BlurFade delay={0.1} className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <div className="aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl">
                <img src={img(aboutPhoto, 900)} className="w-full h-full object-cover" />
              </div>
            </div>
            <div>
              <p className="section-subheading">About Chicago Jewish Teens</p>
              <h2 className="section-heading mb-6">More Than a Camp - <span className="text-gold">A Life Experience</span></h2>
              <p className="text-gray-600 text-lg mb-8">Teen eXtreme is a bold new concept in Jewish camping...</p>
              <Link href="/about" className="btn-secondary">Read Our Full Story</Link>
            </div>
          </div>
        </BlurFade>
      </section>
    </>
  );
}
