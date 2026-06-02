'use client';
import { TrophyIcon, StarOfDavidIcon, CalendarIcon } from '../Icons';

export default function OriginsSection() {
  return (
    <section className="py-20 bg-accent">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <p className="section-subheading">Our Heritage</p>
          <h2 className="section-heading mb-4">Rooted in <span className="text-gold">50 Years of Excellence</span></h2>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {origins.map((item) => (
            <div key={item.title} className="bg-white rounded-3xl p-8 shadow-lg text-center">
              <div className="w-14 h-14 mx-auto mb-4 text-gold">{item.icon}</div>
              <h3 className="text-xl font-bold text-primary-dark mb-3" style={{ fontFamily: 'Playfair Display, serif' }}>{item.title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

const origins = [
  { icon: <TrophyIcon className="w-full h-full" />, title: 'CGI Camp Network', desc: 'Teen Camp is proudly founded on 50 years of successful camping principles and is affiliated with CGI camping - the largest worldwide network of Jewish camping.' },
  { icon: <StarOfDavidIcon className="w-full h-full" />, title: 'Trendsetting Programs', desc: "CGI camps enjoy a well-earned reputation as a trendsetter with adventurous trips, creative programs, and sports instruction that teens look forward to all year." },
  { icon: <CalendarIcon className="w-full h-full" />, title: 'Est. Since 2000', desc: "Chicago Jewish Teen Camp has served as a haven for children and their families since 2000 - building a legacy of transformative summer experiences." },
];

