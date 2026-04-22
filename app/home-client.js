"use client";

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
import BlurFade from '../components/ui/blur-fade';
import Spotlight from '../components/ui/spotlight';
import { aboutPhoto, featuredPhoto, img } from '../lib/photos';

const iconsMap = {
  Tent: <TentIcon className="w-full h-full" />,
  Mountain: <MountainIcon className="w-full h-full" />,
  Waves: <WavesIcon className="w-full h-full" />,
  Sports: <SportsIcon className="w-full h-full" />,
  Trophy: <TrophyIcon className="w-full h-full" />,
  Person: <PersonIcon className="w-full h-full" />,
  Globe: <GlobeIcon className="w-full h-full" />,
  MartialArts: <MartialArtsIcon className="w-full h-full" />,
};

// Simple helper to render Tina Rich Text JSON if it exists, otherwise treat as string
function RenderRichText({ content }) {
  if (!content) return null;
  if (typeof content === 'string') return <p>{content}</p>;
  
  if (content.type === 'root' && content.children) {
    return content.children.map((node, i) => {
      if (node.type === 'p') {
        return <p key={i} className="mb-4">{node.children?.map(c => c.text).join('')}</p>;
      }
      return null;
    });
  }
  return null;
}

export default function HomeClient({ data }) {
  if (!data || !data.blocks) return null;

  const blockComponents = {
    hero: (block, i) => (
      <section key={i} data-sb-field-path={`blocks.${i}`} className="relative min-h-[92vh] flex items-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary-dark via-primary to-primary-light" />
        <div
          className="absolute inset-0 bg-cover bg-center opacity-20 pointer-events-none"
          style={{ backgroundImage: `url("${block.backgroundImage || img(featuredPhoto, 1400)}")` }}
        />
        <div className="relative z-10 max-w-4xl mx-auto px-4 py-20 text-center">
            <h1 data-sb-field-path=".title" className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6">
              {block.title || "Jewishteencamp"}
            </h1>
            <p data-sb-field-path=".subtitle" className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              {block.subtitle}
            </p>
            <ShimmerButton href={block.ctaLink || "/contact"} data-sb-field-path=".ctaText">
              {block.ctaText || "Join Now"}
            </ShimmerButton>
        </div>
      </section>
    ),
    stats: (block, i) => (
      <section key={i} data-sb-field-path={`blocks.${i}`} className="bg-gold py-10">
         <div className="max-w-7xl mx-auto px-4 grid grid-cols-2 lg:grid-cols-4 gap-6 divide-x divide-white/20">
            {block.items?.map((stat, s) => (
              <div key={s} data-sb-field-path={`.items.${s}`} className="text-center text-white">
                <div className="text-4xl font-bold" data-sb-field-path=".value">
                  <NumberTicker value={parseFloat(stat.value)} suffix={stat.value?.includes('%') ? '%' : '+'} />
                </div>
                <div className="text-sm" data-sb-field-path=".label">{stat.label}</div>
              </div>
            ))}
         </div>
      </section>
    ),
    featureGrid: (block, i) => (
      <section key={i} data-sb-field-path={`blocks.${i}`} className={`py-24 ${block.design?.background || 'bg-primary-dark'} text-white`}>
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <p className="text-gold font-semibold text-sm uppercase tracking-widest mb-3" data-sb-field-path=".subheading">{block.subheading}</p>
            <h2 className="text-4xl md:text-5xl font-bold mb-4" data-sb-field-path=".heading">{block.heading}</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {block.items?.map((item, idx) => (
              <div key={idx} data-sb-field-path={`.items.${idx}`} className="flex gap-4 p-6 bg-white/5 rounded-2xl hover:bg-white/10 transition-colors">
                <div className="w-12 h-12 bg-gold/20 rounded-xl flex items-center justify-center text-gold flex-shrink-0">
                  <div className="w-6 h-6">{iconsMap[item.icon] || <StarIcon />}</div>
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-2" data-sb-field-path=".title">{item.title}</h3>
                  <p className="text-blue-200 text-sm leading-relaxed" data-sb-field-path=".desc">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    ),
    splitSection: (block, i) => (
        <section key={i} data-sb-field-path={`blocks.${i}`} className="py-24 bg-white">
          <BlurFade delay={0.1} className="max-w-7xl mx-auto px-4">
            <div className={`grid lg:grid-cols-2 gap-16 items-center ${block.imageSide === 'right' ? 'lg:flex-row-reverse' : ''}`}>
              <div className="relative">
                <div className="aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl">
                  <img src={img(aboutPhoto, 900)} alt="Camp" className="w-full h-full object-cover" />
                </div>
              </div>
              <div>
                <p data-sb-field-path=".tagline" className="section-subheading">{block.tagline}</p>
                <h2 data-sb-field-path=".heading" className="text-4xl font-bold mb-6">{block.heading}</h2>
                <div data-sb-field-path=".body" className="text-gray-600 text-lg leading-relaxed mb-6">
                  <RenderRichText content={block.body} />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  {block.listItems?.map((item, idx) => (
                    <div key={idx} data-sb-field-path={`.listItems.${idx}`} className="flex items-center gap-3 p-3 bg-accent rounded-xl text-sm font-bold text-primary-dark">
                       <span data-sb-field-path=".text">{item.text}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </BlurFade>
        </section>
    ),
    staff: (block, i) => (
      <section key={i} data-sb-field-path={`blocks.${i}`} className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16">Our Leadership</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {block.members?.map((member, idx) => (
              <div key={idx} data-sb-field-path={`.members.${idx}`} className="text-center p-8 bg-white rounded-3xl shadow-sm border border-gray-100 hover:shadow-xl transition-shadow">
                <div className="w-32 h-32 mx-auto mb-6 rounded-full overflow-hidden ring-4 ring-gold/10">
                  <img src={img(member.image, 300)} alt={member.name} className="w-full h-full object-cover" />
                </div>
                <h3 className="text-xl font-bold mb-1" data-sb-field-path=".name">{member.name}</h3>
                <p className="text-gold font-semibold text-sm mb-4" data-sb-field-path=".title">{member.title}</p>
                <p className="text-gray-500 text-sm" data-sb-field-path=".phone">{member.phone}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    ),
    testimonials: (block, i) => (
      <section key={i} data-sb-field-path={`blocks.${i}`} className="py-24 bg-accent">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-16 italic">What Parents Say</h2>
          <div className="flex flex-wrap justify-center gap-8">
            {block.quotes?.map((t, idx) => (
              <div key={idx} data-sb-field-path={`.quotes.${idx}`} className="bg-white p-8 rounded-3xl shadow-sm max-w-sm">
                <p className="text-gray-600 italic mb-6" data-sb-field-path=".quote">"{t.quote}"</p>
                <div className="font-bold" data-sb-field-path=".name">{t.name}</div>
                <div className="text-gold text-xs" data-sb-field-path=".location">{t.location}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    ),
    programs: (block, i) => (
      <section key={i} data-sb-field-path={`blocks.${i}`} className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            {block.plans?.map((p, idx) => (
              <div key={idx} data-sb-field-path={`.plans.${idx}`} className="border-2 border-primary-dark rounded-3xl p-8 hover:bg-primary-dark hover:text-white transition-all group">
                <h3 className="text-2xl font-bold mb-2" data-sb-field-path=".name">{p.name}</h3>
                <p className="text-gold font-bold mb-4" data-sb-field-path=".dates">{p.dates}</p>
                <p className="text-3xl font-bold mb-6" data-sb-field-path=".price">{p.price}</p>
                <Link href="/contact" className="btn-primary w-full block text-center">Enroll Now</Link>
              </div>
            ))}
          </div>
        </div>
      </section>
    ),
    faqs: (block, i) => (
      <section key={i} data-sb-field-path={`blocks.${i}`} className="py-24 bg-accent">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16">Common Questions</h2>
          <div className="space-y-4">
            {block.items?.map((item, idx) => (
              <FAQItem key={idx} index={idx} question={item.q} answer={item.a} />
            ))}
          </div>
        </div>
      </section>
    )
  }

  return (
    <div className="flex flex-col" data-sb-object-id="content/pages/home.json">
       {data.blocks?.map((block, i) => {
          const renderer = blockComponents[block._template];
          return renderer ? renderer(block, i) : null;
       })}
    </div>
  );
}

function FAQItem({ question, answer, index }) {
  return (
    <details className="faq-item group" data-sb-field-path={`.items.${index}`}>
      <summary className="flex items-center justify-between p-6 cursor-pointer font-semibold text-primary-dark hover:text-gold transition-colors list-none">
        <span data-sb-field-path=".q">{question}</span>
        <svg className="w-5 h-5 flex-shrink-0 transition-transform group-open:rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </summary>
      <div className="px-6 pb-6 text-gray-600 leading-relaxed border-t border-gray-100 pt-4" data-sb-field-path=".a">{answer}</div>
    </details>
  );
}

const StarIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
  </svg>
);
