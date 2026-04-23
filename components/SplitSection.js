'use client';
import BlurFade from './ui/blur-fade';
import { aboutPhoto, img } from '../lib/photos';

export default function SplitSection({ 
  tagline = "About Us", 
  heading = "Our Mission", 
  body = "We provide an unforgettable summer experience.",
  imageSide = "left",
  listItems
}) {
  const defaultList = [
    { text: 'Expert Coaching' },
    { text: 'Aquatic Sports' },
    { text: 'Jewish Culture' },
    { text: 'Overnight Trips' },
  ];

  const displayList = listItems || defaultList;

  return (
    <section className="py-32 bg-white">
      <BlurFade delay={0.1} className="max-w-7xl mx-auto px-4">
        <div className={`grid lg:grid-cols-2 gap-20 items-center ${imageSide === 'right' ? 'lg:flex-row-reverse' : ''}`}>
          <div className="relative">
            <div className="aspect-[4/3] rounded-[3rem] overflow-hidden shadow-[0_50px_100px_-20px_rgba(0,0,0,0.15)] ring-1 ring-black/5">
              <img src={img(aboutPhoto, 1200)} alt="Action" className="w-full h-full object-cover" />
            </div>
            <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-gold rounded-full opacity-10 blur-3xl animate-pulse" />
          </div>
          <div className="lg:pl-10">
            <p className="text-[#C8922A] font-bold text-sm uppercase tracking-widest mb-4">{tagline}</p>
            <h2 className="text-4xl md:text-5xl font-bold mb-8 text-[#0B1F3D] leading-tight">{heading}</h2>
            <div className="text-gray-600 text-lg leading-relaxed mb-10">
              {body}
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {displayList.map((item, idx) => (
                <div key={idx} className="flex items-center gap-4 p-4 bg-accent rounded-2xl text-sm font-bold text-[#1B3A6B] border border-black/5 shadow-sm">
                   <div className="w-2 h-2 rounded-full bg-[#C8922A]" />
                   <span>{item.text}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </BlurFade>
    </section>
  );
}
