"use client";

import { useTina } from "tinacms/dist/react";
import Link from 'next/link';
import ContactForm from '../components/ContactForm';
import {
  WavesIcon, SportsIcon, PaletteIcon, TentIcon, StarOfDavidIcon,
  MartialArtsIcon, FishingIcon, MountainIcon, BookOpenIcon,
  TrophyIcon, UsersIcon, GlobeIcon, LockIcon, HandshakeIcon, StarIcon,
  PersonIcon, ChatIcon, MapPinIcon, PhoneIcon, MailIcon,
} from '../components/Icons';
import ShimmerButton from '../components/ui/shimmer-button';
import NumberTicker from '../components/ui/number-ticker';
import Marquee from '../components/ui/marquee';
import BlurFade from '../components/ui/blur-fade';
import BorderBeam from '../components/ui/border-beam';
import Spotlight from '../components/ui/spotlight';
import { aboutPhoto, featuredPhoto, homepageGallery, allPhotos, img, thumb, staffScheiman, staffNotik, staffGoldshmidt } from '../lib/photos';

export const metadata = {
  title: 'Chicago Jewish Teens | Jewish Day Camp Northbrook IL - Ages 12-17',
  description:
    'Chicago Jewish Teens is the premier Jewish day camp for teens ages 12-17 in Northbrook, IL. Adventures, sports, overnight trips, Shabbatons, Bar Mitzvah prep, and authentic Jewish culture. Enroll today!',
};

export default function HomeClient({ props }) {
  const { data } = useTina({ query: props.query, variables: props.variables, data: props.data });
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
        {/* Subtle geometric pattern */}
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.15'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
        {/* Decorative geometric star - SVG, not emoji */}
        <div className="absolute top-16 right-8 opacity-5 hidden lg:block">
          <svg width="280" height="280" viewBox="0 0 24 24" fill="white">
            <path d="M12 2.5l7.5 13H4.5z" />
            <path d="M12 21.5l-7.5-13h15z" />
          </svg>
        </div>
        <div className="absolute bottom-8 left-8 opacity-5 hidden lg:block">
          <svg width="180" height="180" viewBox="0 0 24 24" fill="white">
            <path d="M12 2.5l7.5 13H4.5z" />
            <path d="M12 21.5l-7.5-13h15z" />
          </svg>
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-4 py-20 text-center">
          {/* Main Text */}
          <div className="flex flex-col items-center">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2 text-white text-sm font-medium mb-6 hero-animate">
              <span className="w-2 h-2 bg-gold rounded-full animate-pulse" />
              Now Enrolling for Summer 2026
            </div>

            <h1
              className="text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight mb-6 hero-animate-delay-1"
              style={{ fontFamily: 'Playfair Display, serif' }}
            >
              {data.page.title}
            </h1>

            <p className="text-xl text-blue-100 leading-relaxed mb-8 max-w-2xl hero-animate-delay-2">
              Chicago&apos;s premier Jewish day camp for teens ages 12-17. Adventures, sports, friendships, and authentic Jewish identity - all from the heart of Northbrook, IL.
            </p>

            <blockquote className="border-l-4 border-gold pl-5 text-blue-200 italic text-sm mb-10 hero-animate-delay-2 max-w-lg mx-auto">
              &ldquo;Every boy and girl is a seed and a sapling, which with the passage of time will bring forth fruit.&rdquo;
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

            {/* Trust signals - SVG icons */}
            <div className="mt-10 flex flex-wrap gap-5 justify-center hero-animate-delay-3">
              {heroTrust.map((item) => (
                <div key={item.text} className="flex items-center gap-2 text-white/80 text-sm">
                  <div className="text-gold w-4 h-4">{item.icon}</div>
                  <span>{item.text}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/50 scroll-indicator hidden md:block">
          <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </div>
      </section>

      {/* ===== STATS BAR ===== */}
      <section className="bg-gold py-10">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 divide-x divide-white/20">
            {[
              { value: 25, suffix: '+', label: 'Years of Excellence' },
              { value: 500, suffix: '+', label: 'Teen Campers Served' },
              { value: 50, suffix: '+', label: 'Adventure Trips' },
              { value: 100, suffix: '%', label: 'Parent Satisfaction' },
            ].map((stat) => (
              <div key={stat.label} className="text-center text-white px-4">
                <div className="text-4xl md:text-5xl font-bold mb-1" style={{ fontFamily: 'Playfair Display, serif' }}>
                  <NumberTicker value={stat.value} suffix={stat.suffix} duration={1800} />
                </div>
                <div className="text-white/80 text-sm font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== ABOUT OVERVIEW ===== */}
      <section className="py-24 bg-white">
        <BlurFade delay={0.1} className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left: Visual - real camp photo */}
            <div className="relative">
              <div className="aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl">
                <img
                  src={img(aboutPhoto, 900)}
                  alt="Chicago Jewish Teens campers at camp"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-white rounded-2xl shadow-xl p-4 hidden md:flex items-center gap-3">
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center text-primary">
                  <TentIcon className="w-6 h-6" />
                </div>
                <div>
                  <div className="font-bold text-primary text-sm">Day Camp</div>
                  <div className="text-gray-500 text-xs">Overnight Experience</div>
                </div>
              </div>
              <div className="absolute -top-6 -left-6 bg-gold text-white rounded-2xl shadow-xl p-4 hidden md:block">
                <div className="text-2xl font-bold">12–17</div>
                <div className="text-white/80 text-xs">Ages Welcome</div>
              </div>
            </div>

            {/* Right: Text */}
            <div>
              <p className="section-subheading">About Chicago Jewish Teens</p>
              <h2 className="section-heading mb-6">
                More Than a Camp - <span className="text-gold">A Life Experience</span>
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed mb-6">
                Teen eXtreme is a bold new concept in Jewish camping. As a child grows so does his ability for self-discovery, adventure, bonding with friends, and appreciation of group dynamics.
              </p>
              <p className="text-gray-600 leading-relaxed mb-8">
                Under the leadership of a team of senior staff members, Teen Camp combines out-of-state trips, camping excursions, athletics, swimming, and outdoor adventures with authentic Jewish spirit to impart timeless values and appreciation of others.
              </p>

              <div className="grid grid-cols-2 gap-4 mb-8">
                {aboutFeatures.map((item) => (
                  <div key={item.title} className="flex items-start gap-3 p-4 bg-accent rounded-xl">
                    <div className="w-8 h-8 text-primary flex-shrink-0 mt-0.5">
                      {item.icon}
                    </div>
                    <div>
                      <div className="font-semibold text-primary text-sm">{item.title}</div>
                      <div className="text-gray-500 text-xs">{item.desc}</div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="flex flex-wrap gap-4">
                <Link href="/about" className="btn-secondary">
                  Read Our Full Story
                </Link>
                <a href="tel:+18474524609" className="btn-outline !border-primary !text-primary hover:!bg-primary hover:!text-white">
                  Call (847) 452-4609
                </a>
              </div>
            </div>
          </div>
        </BlurFade>
      </section>

      {/* ===== ACTIONS / WHAT WE DO SECTION ===== */}
      <section className="py-24 bg-accent relative overflow-hidden">
        {/* Background decoration */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-gold/5 rounded-full blur-3xl -mr-32 -mt-32" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl -ml-40 -mb-40" />

        <BlurFade delay={0.1} className="max-w-7xl mx-auto px-4 relative z-10">
          <div className="text-center mb-20">
            <p className="section-subheading">Our Programs</p>
            <h2 className="section-heading mb-6">
              What We <span className="text-gold">Do Best</span>
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Every day at Chicago Jewish Teens is more than just a schedule - it&apos;s a curated journey of discovery, growth, and unapologetic fun.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {activities.map((activity, idx) => (
              <BlurFade key={activity.title} delay={0.1 + idx * 0.05}>
                <div className="group bg-white rounded-3xl p-8 shadow-sm hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:-translate-y-2 relative overflow-hidden h-full flex flex-col">
                  {/* Subtle hover background accent */}
                  <div className="absolute inset-0 bg-gradient-to-br from-transparent to-gray-50 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  
                  <div className="relative z-10">
                    <div
                      className="w-16 h-16 rounded-2xl flex items-center justify-center mb-8 transform group-hover:rotate-6 transition-transform duration-500"
                      style={{ background: activity.bg }}
                    >
                      <div className="w-8 h-8" style={{ color: activity.color }}>
                        {activity.icon}
                      </div>
                    </div>
                    
                    <h3 className="text-2xl font-bold text-primary-dark mb-4 leading-tight" style={{ fontFamily: 'Playfair Display, serif' }}>
                      {activity.title}
                    </h3>
                    
                    <p className="text-gray-600 leading-relaxed mb-6 flex-grow">
                      {activity.desc}
                    </p>

                    <Link href="/day-camp" className="pt-6 border-t border-gray-100 flex items-center justify-between text-sm font-semibold text-primary/60 group-hover:text-primary transition-colors cursor-pointer">
                      <span>Explore Program</span>
                      <svg className="w-5 h-5 transform group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </Link>
                  </div>
                </div>
              </BlurFade>
            ))}
          </div>

          <div className="text-center mt-20">
            <Link href="/day-camp" className="inline-flex items-center gap-3 bg-primary-dark text-white font-bold px-10 py-5 rounded-full text-lg hover:shadow-2xl hover:bg-primary transition-all duration-300">
              <span>Explore All Activities</span>
              <UsersIcon className="w-5 h-5" />
            </Link>
          </div>
        </BlurFade>
      </section>

      {/* ===== WHY CHOOSE US ===== */}
      <section className="py-24 bg-primary-dark text-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <p className="text-gold font-semibold text-sm uppercase tracking-widest mb-3">Why Families Choose Us</p>
            <h2 className="text-4xl md:text-5xl font-bold leading-tight mb-4" style={{ fontFamily: 'Playfair Display, serif' }}>
              The Chicago Jewish Teens Difference
            </h2>
            <p className="text-blue-200 text-lg max-w-2xl mx-auto">
              Built on 50 years of CGI camping excellence - we&apos;re not just a day camp, we&apos;re a life-changing experience.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {whyUs.map((item) => (
              <div key={item.title} className="flex gap-4 p-6 bg-white/5 rounded-2xl hover:bg-white/10 transition-colors">
                <div className="w-12 h-12 bg-gold/20 rounded-xl flex items-center justify-center text-gold flex-shrink-0">
                  <div className="w-6 h-6">{item.icon}</div>
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-2">{item.title}</h3>
                  <p className="text-blue-200 text-sm leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== PROGRAMS / PRICING SECTION ===== */}
      <section className="py-24 bg-white">
        <BlurFade delay={0.1} className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <p className="section-subheading">Summer Programs</p>
            <h2 className="section-heading mb-4">
              Choose Your <span className="text-gold">Perfect Program</span>
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              We offer a range of programs to fit every teen&apos;s interests and schedule.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
            {programs.map((program, idx) => {
              const inner = (
                <div className="relative rounded-3xl overflow-hidden shadow-xl">
                  {idx === 1 && (
                    <div className="absolute top-0 left-0 right-0 bg-gold text-white text-center text-sm font-bold py-2 uppercase tracking-widest z-10">
                      Most Popular
                    </div>
                  )}
                  <div className={`p-8 ${idx === 1 ? 'bg-primary-dark text-white pt-14' : 'bg-white border border-gray-100'}`}>
                    <div className={`w-14 h-14 rounded-xl flex items-center justify-center mb-5 ${idx === 1 ? 'bg-gold/20' : 'bg-primary/10'}`}>
                      <div className={`w-7 h-7 ${idx === 1 ? 'text-gold' : 'text-primary'}`}>{program.icon}</div>
                    </div>
                    <h3 className={`text-2xl font-bold mb-2 ${idx === 1 ? 'text-white' : 'text-primary-dark'}`} style={{ fontFamily: 'Playfair Display, serif' }}>
                      {program.name}
                    </h3>
                    <p className={`text-sm mb-4 ${idx === 1 ? 'text-blue-200' : 'text-gray-500'}`}>{program.dates}</p>
                    <div className={`text-4xl font-bold mb-6 ${idx === 1 ? 'text-gold' : 'text-primary'}`}>{program.price}</div>
                    <ul className="space-y-3 mb-8">
                      {program.features.map((f) => (
                        <li key={f} className={`flex items-start gap-2 text-sm ${idx === 1 ? 'text-blue-100' : 'text-gray-600'}`}>
                          <svg className="w-4 h-4 text-gold flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                          </svg>
                          {f}
                        </li>
                      ))}
                    </ul>
                    <Link href={`/contact?program=${program.name.toLowerCase().includes('boys') ? 'boys-teen-camp' : 'girls-art-adventure'}`} className={`block text-center py-3 rounded-xl font-bold transition-all ${idx === 1 ? 'bg-gold text-white hover:bg-gold-dark' : 'bg-primary text-white hover:bg-primary-dark'}`}>
                      Register Now
                    </Link>
                  </div>
                </div>
              );
              return idx === 1 ? (
                <BorderBeam key={program.name} className="scale-105 shadow-2xl" colorFrom="#C8922A" colorTo="#f5d78e" borderWidth={3}>
                  {inner}
                </BorderBeam>
              ) : (
                <div key={program.name}>{inner}</div>
              );
            })}
          </div>

          <p className="text-center text-gray-500 text-sm mt-8">
            Financial assistance available. Contact us for details.{' '}
            <a href="tel:+18474524609" className="text-primary hover:text-gold font-medium">
              Call (847) 452-4609
            </a>
          </p>
        </BlurFade>
      </section>

      {/* ===== STAFF SECTION ===== */}
      <section className="py-24 bg-accent">
        <BlurFade delay={0.1} className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <p className="section-subheading">Meet the Leadership</p>
            <h2 className="section-heading mb-4">
              Our <span className="text-gold">Dedicated Team</span>
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Hand-picked for their experience, expertise, and genuine love of working with teens.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {staff.map((member) => (
              <div key={member.name} className="bg-white rounded-3xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 text-center flex flex-col items-center border border-gray-100">
                <div className="w-32 h-32 mb-6 rounded-full overflow-hidden ring-4 ring-gold/10">
                  <img src={img(member.image, 300)} alt={member.name} className="w-full h-full object-cover scale-110" />
                </div>
                <div className="flex-grow">
                  <h3 className="text-xl font-bold text-primary-dark mb-1" style={{ fontFamily: 'Playfair Display, serif' }}>
                    {member.name}
                  </h3>
                  <p className="text-gold font-semibold text-sm mb-3">{member.title}</p>
                  <div className="space-y-2 text-sm text-gray-600">
                    {member.phone && (
                      <a href={`tel:${member.phone.replace(/\D/g, '')}`} className="flex items-center justify-center gap-2 hover:text-gold transition-colors">
                        <PhoneIcon className="w-4 h-4" />
                        {member.phone}
                      </a>
                    )}
                    {member.email && (
                      <a href={`mailto:${member.email}`} className="flex items-center justify-center gap-2 hover:text-gold transition-colors break-all">
                        <MailIcon className="w-4 h-4 flex-shrink-0" />
                        {member.email}
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </BlurFade>
      </section>

      {/* ===== TESTIMONIALS ===== */}
      <section className="py-24 bg-white">
        <BlurFade delay={0.1} className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <p className="section-subheading">Parent Testimonials</p>
            <h2 className="section-heading mb-4">
              What Families <span className="text-gold">Say About Us</span>
            </h2>
          </div>
          <div className="flex flex-wrap justify-center gap-8">
            {testimonials.map((t) => (
              <div key={t.name} className="testimonial-card w-full md:w-[calc(33.33%-1.5rem)] max-w-sm flex-shrink-0">
                <div className="mt-8">
                  <p className="text-gray-600 leading-relaxed mb-6 italic">{t.quote}</p>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center text-white font-bold text-sm">
                      {t.name[0]}
                    </div>
                    <div>
                      <div className="font-semibold text-primary-dark text-sm">{t.name}</div>
                      <div className="text-gray-500 text-xs">{t.location}</div>
                    </div>
                    <div className="ml-auto flex text-gold text-xs">
                      {[...Array(5)].map((_, i) => (
                        <StarOfDavidIcon key={i} className="w-3 h-3 fill-current" />
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </BlurFade>
      </section>

      {/* ===== PHOTO GALLERY PREVIEW ===== */}
      <section className="py-24 bg-primary-dark">
        <BlurFade delay={0.1} className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <p className="text-gold font-semibold text-sm uppercase tracking-widest mb-3">Camp Life</p>
            <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight mb-4" style={{ fontFamily: 'Playfair Display, serif' }}>
              See the Fun in Action
            </h2>
            <p className="text-blue-200 text-lg max-w-2xl mx-auto">
              A glimpse into life at Chicago Jewish Teens - where every day is an adventure.
            </p>
          </div>

          {/* Real photo grid - mix of local + Cloudinary */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-6">
            {/* Row 1: large rafting + featured Cloudinary */}
            <div className="col-span-2 rounded-2xl overflow-hidden" style={{ height: '320px' }}>
              <img src="/images/rafting.png" alt="White water rafting adventure"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
            </div>
            <div className="rounded-2xl overflow-hidden" style={{ height: '320px' }}>
              <img src={thumb(featuredPhoto)} alt="Chicago Jewish Teens campers"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
            </div>
            {/* Row 2: 3 Cloudinary photos */}
            {homepageGallery.slice(2, 5).map((photo, i) => (
              <div key={i} className="rounded-2xl overflow-hidden" style={{ height: '220px' }}>
                <img src={thumb(photo.id)} alt={photo.alt}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
              </div>
            ))}
            {/* Row 3: paintball + 2 more Cloudinary */}
            <div className="rounded-2xl overflow-hidden" style={{ height: '220px' }}>
              <img src="/images/paintball.png" alt="Paintball activity"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
            </div>
            {homepageGallery.slice(5, 7).map((photo, i) => (
              <div key={i} className="rounded-2xl overflow-hidden" style={{ height: '220px' }}>
                <img src={thumb(photo.id)} alt={photo.alt}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
              </div>
            ))}
          </div>

          <div className="text-center">
            <Link href="/photos" className="btn-primary">View Full Gallery</Link>
          </div>
        </BlurFade>
      </section>

      {/* ===== FAQ SECTION ===== */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-16">
            <p className="section-subheading">Frequently Asked Questions</p>
            <h2 className="section-heading mb-4">
              Everything You Need to <span className="text-gold">Know</span>
            </h2>
          </div>
          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <FAQItem key={i} question={faq.q} answer={faq.a} />
            ))}
          </div>
          <div className="text-center mt-12">
            <p className="text-gray-600 mb-4">Still have questions?</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="tel:+18474524609" className="btn-secondary">Call (847) 452-4609</a>
              <Link href="/contact" className="btn-primary">Send Us a Message</Link>
            </div>
          </div>
        </div>
      </section>

      {/* ===== CTA BANNER ===== */}
      <section className="py-20 bg-gradient-to-r from-gold to-gold-light text-white">
        <BlurFade delay={0.1} className="max-w-5xl mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6" style={{ fontFamily: 'Playfair Display, serif' }}>
            Give Your Teen the Summer of a Lifetime
          </h2>
          <p className="text-xl text-white/90 mb-10 max-w-2xl mx-auto">
            Spaces fill up fast. Secure your teen&apos;s spot today and make this summer truly unforgettable.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="bg-white text-gold font-bold px-10 py-4 rounded-full text-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-0.5">
              Enroll Now
            </Link>
            <a href="tel:+18474524609" className="border-2 border-white text-white font-bold px-10 py-4 rounded-full text-lg hover:bg-white hover:text-gold transition-all duration-300">
              Call (847) 452-4609
            </a>
          </div>
        </BlurFade>
      </section>

      {/* ===== CONTACT / LEAD FORM SECTION ===== */}
      <section id="contact" className="py-24 bg-accent">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            {/* Left: Info */}
            <div>
              <p className="section-subheading">Get In Touch</p>
              <h2 className="section-heading mb-6">
                Ready to Enroll? <span className="text-gold">Let&apos;s Talk!</span>
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed mb-8">
                Our team is here to answer all your questions and help you find the perfect program for your teen. Don&apos;t miss out - enrollment spots fill up quickly!
              </p>
              <div className="space-y-4 mb-10">
                <div className="flex items-start gap-4 p-4 bg-white rounded-2xl shadow-sm">
                  <div className="w-12 h-12 bg-primary rounded-xl flex items-center justify-center text-white flex-shrink-0">
                    <PhoneIcon className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="font-bold text-primary-dark">Phone / Text</div>
                    <a href="tel:+18474524609" className="text-gold font-bold text-lg hover:text-gold-dark transition-colors">
                      +1 (847) 452-4609
                    </a>
                    <p className="text-gray-500 text-xs mt-1">Call or text anytime - we respond fast!</p>
                  </div>
                </div>
                <div className="flex items-start gap-4 p-4 bg-white rounded-2xl shadow-sm">
                  <div className="w-12 h-12 bg-gold rounded-xl flex items-center justify-center text-white flex-shrink-0">
                    <MailIcon className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="font-bold text-primary-dark">Email</div>
                    <a href="mailto:zalman@chicagojewishteens.com" className="text-gold font-semibold hover:text-gold-dark transition-colors break-all">
                      zalman@chicagojewishteens.com
                    </a>
                    <p className="text-gray-500 text-xs mt-1">We reply within 24 hours</p>
                  </div>
                </div>
                <div className="flex items-start gap-4 p-4 bg-white rounded-2xl shadow-sm">
                  <div className="w-12 h-12 bg-primary-light rounded-xl flex items-center justify-center text-white flex-shrink-0">
                    <MapPinIcon className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="font-bold text-primary-dark">Camp Location</div>
                    <p className="text-gray-700 font-medium">2095 Landwehr Rd</p>
                    <p className="text-gray-500 text-sm">Northbrook, IL 60062</p>
                  </div>
                </div>
                <div className="flex items-start gap-4 p-4 bg-white rounded-2xl shadow-sm">
                  <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center text-primary flex-shrink-0">
                    <ChatIcon className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="font-bold text-primary-dark">Additional Contact</div>
                    <p className="text-gray-600 text-sm">info@chicagojewishteens.com</p>
                    <p className="text-gray-500 text-xs">Dovid Goldshmidt: (312) 972-1816</p>
                  </div>
                </div>
              </div>
              <div className="flex gap-4">
                <a href="https://www.facebook.com/ChicAgoJewishTeens/" target="_blank" rel="noopener noreferrer"
                  className="flex items-center gap-2 bg-blue-600 text-white px-5 py-3 rounded-xl font-semibold text-sm hover:bg-blue-700 transition-colors">
                  Facebook
                </a>
                <a href="https://www.instagram.com/chicagojewishteens" target="_blank" rel="noopener noreferrer"
                  className="flex items-center gap-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white px-5 py-3 rounded-xl font-semibold text-sm hover:opacity-90 transition-opacity">
                  Instagram
                </a>
              </div>
            </div>

            {/* Right: Form */}
            <div className="bg-white rounded-3xl shadow-xl p-8 md:p-10">
              <h3 className="text-2xl font-bold text-primary-dark mb-2" style={{ fontFamily: 'Playfair Display, serif' }}>
                Request Enrollment Information
              </h3>
              <p className="text-gray-500 text-sm mb-8">
                Fill out the form below and we&apos;ll be in touch within 24 hours with everything you need to know.
              </p>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      {/* ===== MAP ===== */}
      <section className="bg-white py-12">
        <div className="max-w-7xl mx-auto px-4">
          <div className="rounded-3xl overflow-hidden shadow-xl h-80">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2959.5!2d-87.8389!3d42.1294!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2s2095+Landwehr+Rd%2C+Northbrook%2C+IL+60062!5e0!3m2!1sen!2sus!4v1"
              width="100%" height="100%" style={{ border: 0 }}
              allowFullScreen loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Chicago Jewish Teens Camp Location"
            />
          </div>
        </div>
      </section>
    </>
  );
}

// ===== FAQ COMPONENT =====
function FAQItem({ question, answer }) {
  return (
    <details className="faq-item group">
      <summary className="flex items-center justify-between p-6 cursor-pointer font-semibold text-primary-dark hover:text-gold transition-colors list-none">
        <span>{question}</span>
        <svg className="w-5 h-5 flex-shrink-0 transition-transform group-open:rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </summary>
      <div className="px-6 pb-6 text-gray-600 leading-relaxed border-t border-gray-100 pt-4">{answer}</div>
    </details>
  );
}

// ===== DATA =====
const heroTrust = [
  {
    text: 'Est. Since 2000',
    icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6"/><path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18"/><path d="M4 22h16"/><path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22"/><path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22"/><path d="M18 2H6v7a6 6 0 0 0 12 0V2z"/></svg>,
  },
  {
    text: 'CGI Camp Network',
    icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>,
  },
  {
    text: '100+ Families',
    icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>,
  },
  {
    text: 'Ages 12–17',
    icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="12,0 14.5,8.5 23,8.5 16.5,13.5 19,22 12,17 5,22 7.5,13.5 1,8.5 9.5,8.5"/></svg>,
  },
];

const heroHighlights = [
  { icon: <MountainIcon className="w-5 h-5" />, label: 'Indiana Dunes & Michigan Adventures', sub: 'Full-day trips twice weekly' },
  { icon: <WavesIcon className="w-5 h-5" />, label: 'White Water Rafting & Speed Boating', sub: 'Certified Red Cross lifeguards' },
  { icon: <SportsIcon className="w-5 h-5" />, label: 'Professional Sports Instruction', sub: 'Baseball, soccer, basketball & more' },
  { icon: <StarOfDavidIcon className="w-5 h-5" />, label: 'Shabbatons & Jewish Culture', sub: 'Authentic heritage programming' },
  { icon: <BookOpenIcon className="w-5 h-5" />, label: 'Bar Mitzvah Preparation', sub: 'Personalized tutoring available' },
];

const aboutFeatures = [
  { icon: <SportsIcon className="w-full h-full" />, title: 'Expert Coaching', desc: 'Professional sports instructors' },
  { icon: <WavesIcon className="w-full h-full" />, title: 'Aquatic Sports', desc: 'Speed boating & rafting' },
  { icon: <StarOfDavidIcon className="w-full h-full" />, title: 'Jewish Culture', desc: 'Authentic heritage programs' },
  { icon: <TentIcon className="w-full h-full" />, title: 'Overnight Trips', desc: 'Shabbatons & adventures' },
];

const activities = [
  { icon: <WavesIcon className="w-full h-full" />, title: 'Aquatic Adventures', desc: 'Speed boating, white water rafting on the Vermillion River, and swimming supervised by certified Red Cross lifeguards.', bg: '#dbeafe', color: '#1d4ed8' },
  { icon: <SportsIcon className="w-full h-full" />, title: 'Sports & Athletics', desc: 'Baseball, basketball, football, soccer, martial arts, and more with professional physical education instructors.', bg: '#dcfce7', color: '#15803d' },
  { icon: <PaletteIcon className="w-full h-full" />, title: 'Arts & Culture', desc: 'Creative programs, Jewish heritage arts, music, and cultural exploration that brings tradition to life.', bg: '#fce7f3', color: '#be185d' },
  { icon: <TentIcon className="w-full h-full" />, title: 'Camping & Overnight', desc: 'Boy Scout camping sites, overnight trips that build communication, teamwork, and survival skills.', bg: '#fef3c7', color: '#b45309' },
  { icon: <StarOfDavidIcon className="w-full h-full" />, title: 'Shabbatons', desc: 'Weekend trips to nearby Jewish communities for authentic Shabbat experiences, camaraderie, and friendship.', bg: '#ede9fe', color: '#7c3aed' },
  { icon: <MartialArtsIcon className="w-full h-full" />, title: 'Martial Arts', desc: 'Professional martial arts instruction building discipline, confidence, and self-defense skills.', bg: '#fee2e2', color: '#dc2626' },
  { icon: <FishingIcon className="w-full h-full" />, title: 'Fishing & Biking', desc: 'Relaxing fishing excursions and scenic biking trips that connect teens with nature.', bg: '#d1fae5', color: '#059669' },
  { icon: <MountainIcon className="w-full h-full" />, title: 'Indiana Dunes Hiking', desc: 'Full-day hiking trips to Indiana Dunes and Michigan adventures building endurance and teamwork.', bg: '#fef9c3', color: '#ca8a04' },
  { icon: <BookOpenIcon className="w-full h-full" />, title: 'Bar Mitzvah Prep', desc: 'Dynamic Judaic tutoring and personalized Bar Mitzvah preparation and celebration available at camp.', bg: '#e0e7ff', color: '#4338ca' },
];

const whyUs = [
  { icon: <TrophyIcon className="w-full h-full" />, title: '50 Years of Excellence', desc: 'Founded on 50 years of CGI camping principles - the largest worldwide network of Jewish camping.' },
  { icon: <PersonIcon className="w-full h-full" />, title: 'Expert Staff', desc: 'Counselors hand-picked for experience, expertise, and a genuine love for teen development. Low camper-to-staff ratio.' },
  { icon: <GlobeIcon className="w-full h-full" />, title: 'CGI Network', desc: 'Part of the global CGI camp network - a trusted name in Jewish education and youth development.' },
  { icon: <LockIcon className="w-full h-full" />, title: 'Safe & Supervised', desc: 'Certified Red Cross lifeguards, experienced Boy Scout staff for overnight trips, and certified instructors.' },
  { icon: <HandshakeIcon className="w-full h-full" />, title: 'Close-Knit Community', desc: 'Small group sizes ensure every teen gets personal attention and forms real, lasting friendships.' },
  { icon: <StarOfDavidIcon className="w-full h-full" />, title: 'Life-Changing', desc: 'Campers return year after year - teens typically return to school with new energy, confidence, and Jewish pride.' },
];

const programs = [
  {
    icon: <PaletteIcon className="w-full h-full" />,
    name: "Girls' Art & Adventure",
    dates: 'July 17 – July 22',
    price: '$375',
    features: ['Week-long immersive program', 'Art, creativity & culture', 'Adventure activities', 'Jewish heritage', 'Professional instructors'],
  },
  {
    icon: <TentIcon className="w-full h-full" />,
    name: "Boys' Teen Camp",
    dates: 'June 18 – July 11',
    price: 'From $450',
    features: ['Full summer program', 'Sports & athletics', 'Overnight trips', 'Shabbaton experiences', 'Bar Mitzvah preparation', 'Indiana Dunes hiking'],
  },
  {
    icon: <MountainIcon className="w-full h-full" />,
    name: 'Pacific NW Adventure',
    dates: 'Extended Trip',
    price: '$4,695',
    features: ['Multi-day adventure', 'Pacific Northwest exploration', 'Nature & wilderness', 'Team building', 'All meals included'],
  },
];

const staff = [
  { name: "R' Schneur Scheiman", title: 'Camp Gan Israel Chicago Director', phone: '+1 (847) 485-9770', email: null, image: staffScheiman },
  { name: "R' Zalman Notik", title: 'Chicago Jewish Teens Director', phone: '+1 (847) 452-4609', email: 'zalman@chicagojewishteens.com', image: staffNotik },
  { name: 'Dovid Goldshmidt', title: 'Camp Executive Coordinator', phone: '+1 (312) 972-1816', email: 'info@chicagojewishteens.com', image: staffGoldshmidt },
];

const testimonials = [
  { quote: "My son came home from Teen Camp a completely different person - more confident, more Jewishly aware, and with friends he still talks to every day. Best investment we ever made.", name: 'Rachel K.', location: 'Northbrook, IL' },
  { quote: "The combination of exciting adventures and authentic Jewish values is unmatched. My teen couldn't stop talking about the Indiana Dunes hike and the Shabbaton experience.", name: 'David M.', location: 'Chicago, IL' },
  { quote: "Rabbi Notik and the entire staff are incredible. They truly care about each child as an individual. My son went back summer after summer and begged to go again.", name: 'Sarah L.', location: 'Glenview, IL' },
];

const galleryItems = [
  { gradient: 'linear-gradient(135deg, #1B3A6B, #2A5298)', icon: <TentIcon className="w-full h-full" />, label: 'Camp Life' },
  { gradient: 'linear-gradient(135deg, #C8922A, #E8B84B)', icon: <SportsIcon className="w-full h-full" />, label: 'Sports' },
  { gradient: 'linear-gradient(135deg, #16a34a, #22c55e)', icon: <MountainIcon className="w-full h-full" />, label: 'Adventures' },
  { gradient: 'linear-gradient(135deg, #7c3aed, #a78bfa)', icon: <StarOfDavidIcon className="w-full h-full" />, label: 'Culture' },
  { gradient: 'linear-gradient(135deg, #dc2626, #f87171)', icon: <MartialArtsIcon className="w-full h-full" />, label: 'Martial Arts' },
  { gradient: 'linear-gradient(135deg, #0891b2, #22d3ee)', icon: <WavesIcon className="w-full h-full" />, label: 'Aquatics' },
  { gradient: 'linear-gradient(135deg, #d97706, #fbbf24)', icon: <BookOpenIcon className="w-full h-full" />, label: 'Jewish Learning' },
  { gradient: 'linear-gradient(135deg, #1B3A6B, #C8922A)', icon: <TrophyIcon className="w-full h-full" />, label: 'Excellence' },
];

const faqs = [
  { q: 'What ages does Chicago Jewish Teens serve?', a: 'Our programs are designed for Jewish teens ages 12–17. We have separate programs and activities tailored to different age groups and interests.' },
  { q: 'Where is the camp located?', a: 'Our campsite is located at 2095 Landwehr Road in Northbrook, IL 60062 - right in the heart of Northbrook with excellent indoor and outdoor facilities.' },
  { q: 'Is transportation provided?', a: 'Yes, we offer transportation options. Please contact us at (847) 452-4609 to discuss your specific needs and our available transportation routes.' },
  { q: 'Is the food kosher?', a: 'Absolutely. We serve nutritious and delicious kosher snacks, lunches, and drinks daily. During extended trips, we also provide dinner. Teens even enjoy meals at local Kosher restaurants.' },
  { q: 'What is the camper-to-staff ratio?', a: 'We maintain a low camper-to-staff ratio to ensure each child receives the highest quality supervision, caring guidance, and individual attention from our experienced counselors.' },
  { q: 'Is Bar Mitzvah preparation available?', a: 'Yes! We offer dynamic Judaic tutoring as well as personalized Bar Mitzvah preparation and celebration. Contact us for details on this specialized program.' },
  { q: 'What is included in the price?', a: 'Program fees include all daily activities, snacks, lunches, and trips. Extended full-day trips include dinner. Overnight and Shabbaton programming includes all meals. Contact us for complete pricing details.' },
  { q: 'Is financial assistance available?', a: 'We are committed to making our program accessible. Please contact us directly to discuss financial assistance options. We want every teen who wants to attend to have the opportunity.' },
];
