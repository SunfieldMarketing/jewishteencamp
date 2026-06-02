import Link from 'next/link';
import ContactForm from '../../components/ContactForm';
import {
  CalendarIcon, UsersIcon, PersonIcon, StarOfDavidIcon,
  HeartIcon, GlobeIcon, HandshakeIcon, ChatIcon, TentIcon,
} from '../../components/Icons';
import { featuredPhoto, culturePhotos, campLifePhotos, img, thumb } from '../../lib/photos';

export const metadata = {
  title: 'Social Events | Chicago Jewish Teen Camp',
  description:
    'Explore social events at Chicago Jewish Teen Camp - connect, have fun, and engage in Jewish culture with other teens ages 12–17 in Beverly Hills, CA.',
};

export default function SocialEventsPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative py-28 bg-gradient-to-br from-primary-dark via-primary to-gold text-white overflow-hidden">
        <div className="absolute inset-0 opacity-30 bg-cover bg-center"
          style={{ backgroundImage: `url("${img(featuredPhoto, 1400)}")` }} />
        <div className="absolute inset-0 bg-gradient-to-br from-primary-dark/80 via-primary/70 to-gold/80" />
        <div className="relative max-w-4xl mx-auto px-4 text-center">
          <p className="text-gold font-semibold text-sm uppercase tracking-widest mb-4">Year-Round Programming</p>
          <h1 className="text-5xl md:text-6xl font-bold mb-6" style={{ fontFamily: 'Playfair Display, serif' }}>
            Social Events &amp; <br />
            <span className="text-gold">Teen Gatherings</span>
          </h1>
          <p className="text-xl text-blue-100 max-w-2xl mx-auto mb-8">
            Beyond the summer, Chicago Jewish Teen Camp brings teens together year-round for exciting social events, community volunteering, and memorable get-togethers.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact?program=social-events" className="btn-primary">Get Involved</Link>
            <Link href="/contact" className="btn-outline">Contact Us</Link>
          </div>
          <nav className="mt-8 flex items-center justify-center gap-2 text-sm text-blue-300">
            <Link href="/" className="hover:text-gold">Home</Link>
            <span>/</span>
            <span className="text-white">Social Events</span>
          </nav>
        </div>
      </section>

      {/* Overview Stats */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <p className="section-subheading">Community First</p>
            <h2 className="section-heading mb-4">
              Building <span className="text-gold">Lifelong Connections</span>
            </h2>
            <p className="text-gray-600 text-lg max-w-3xl mx-auto">
              Our social events are designed to help Jewish teens from across the community stay connected, forge new friendships, and grow as individuals in a warm, welcoming Jewish environment.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
            {quickStats.map((stat) => (
              <div key={stat.label} className="text-center p-6 bg-accent rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                <div className="w-10 h-10 mx-auto mb-3 text-primary">{stat.icon}</div>
                <div className="text-3xl font-bold text-primary mb-1" style={{ fontFamily: 'Playfair Display, serif' }}>{stat.value}</div>
                <div className="text-gray-500 text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Teen Mixers & Networking */}
      <section className="py-20 bg-accent">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="section-subheading">Teen Mixers & Networking</p>
              <h2 className="section-heading mb-6">
                Make Friends <span className="text-gold">That Last</span>
              </h2>
              <p className="text-gray-600 leading-relaxed mb-6">
                We host regular social gatherings specifically designed to bring teens together in a relaxed, fun environment. From casual hangouts and game tournaments to group outings at local attractions, these events are perfect for meeting new people and staying connected with old friends.
              </p>
              <div className="space-y-4">
                {mixerEvents.map((event) => (
                  <div key={event.name} className="flex items-start gap-4 p-4 bg-white rounded-xl shadow-sm border border-gray-50">
                    <div className="w-8 h-8 text-primary flex-shrink-0 mt-0.5">{event.icon}</div>
                    <div>
                      <h4 className="font-bold text-primary-dark">{event.name}</h4>
                      <p className="text-gray-500 text-sm">{event.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {campLifePhotos.slice(0, 4).map((photo, i) => (
                <div key={i} className={`rounded-2xl overflow-hidden shadow-lg ${i === 0 ? 'col-span-2 h-64' : 'h-48'}`}>
                  <img src={thumb(photo.id)} alt={photo.alt}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Types of Events */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <p className="section-subheading">What We Do</p>
            <h2 className="section-heading mb-4">
              Events for <span className="text-gold">Every Teen</span>
            </h2>
            <p className="text-gray-600 text-lg max-w-3xl mx-auto">
              Our social programming spans a wide range of activities and themes, ensuring there's something exciting for every teen to enjoy throughout the year.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {eventTypes.map((type, i) => (
              <div key={type.name} className="bg-accent rounded-3xl p-8 relative overflow-hidden group hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-gray-100">
                <div className="absolute top-0 right-0 w-24 h-24 bg-gold/5 rounded-full blur-2xl -mr-8 -mt-8 group-hover:bg-gold/10 transition-colors" />
                <div className="w-14 h-14 rounded-2xl flex items-center justify-center mb-6 relative z-10" style={{ background: type.bg }}>
                  <div className="w-7 h-7" style={{ color: type.color }}>{type.icon}</div>
                </div>
                <h3 className="text-xl font-bold text-primary-dark mb-3 relative z-10" style={{ fontFamily: 'Playfair Display, serif' }}>{type.name}</h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-6 relative z-10">{type.desc}</p>
                <div className="space-y-2 relative z-10">
                  {type.features.map(f => (
                    <div key={f} className="flex items-center gap-2 text-sm text-gray-600">
                      <span className="text-gold font-bold">✓</span> {f}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Community Volunteering */}
      <section className="py-20 bg-accent">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1 grid grid-cols-2 gap-4">
              {culturePhotos.slice(0, 4).map((photo, i) => (
                <div key={i} className={`rounded-2xl overflow-hidden shadow-lg ${i % 2 === 0 ? 'mt-8' : ''} h-56`}>
                  <img src={thumb(photo.id)} alt={photo.alt}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
                </div>
              ))}
            </div>
            <div className="order-1 lg:order-2">
              <p className="section-subheading">Giving Back</p>
              <h2 className="section-heading mb-6">
                Community <span className="text-gold">Volunteering</span>
              </h2>
              <p className="text-gray-600 leading-relaxed mb-6">
                Giving back is a core Jewish value. We organize volunteer opportunities that let teens make a real difference while building character and earning community service hours.
              </p>
              <div className="space-y-4 mb-8">
                {volunteeringFeatures.map((f) => (
                  <div key={f.title} className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-gold/10 rounded-xl flex items-center justify-center text-gold flex-shrink-0">
                      <HeartIcon className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="font-bold text-primary-dark">{f.title}</h4>
                      <p className="text-gray-500 text-sm">{f.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
              <Link href="/contact?program=social-events" className="btn-primary">Join the Next Project</Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA + Form */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="section-heading mb-4">
              Never Miss <span className="text-gold">An Event</span>
            </h2>
            <p className="text-gray-600 text-lg">
              Reach out to get added to our events list and never miss a social gathering.
            </p>
          </div>
          <div className="bg-accent rounded-3xl shadow-sm border border-gray-100 p-8 md:p-12">
            <ContactForm />
          </div>
        </div>
      </section>
    </>
  );
}

const quickStats = [
  { icon: <CalendarIcon className="w-full h-full" />, value: '12+', label: 'Events Per Year' },
  { icon: <UsersIcon className="w-full h-full" />, value: '150+', label: 'Active Teens' },
  { icon: <HeartIcon className="w-full h-full" />, value: '500+', label: 'Volunteer Hours' },
  { icon: <StarOfDavidIcon className="w-full h-full" />, value: '100%', label: 'Jewish Values' },
];

const mixerEvents = [
  { icon: <ChatIcon className="w-full h-full" />, name: 'Casual Hangouts & Lounges', desc: 'Relaxed evenings with food, music, and great conversations.' },
  { icon: <HandshakeIcon className="w-full h-full" />, name: 'Game & Trivia Nights', desc: 'Friendly competitions and interactive group activities with awesome prizes.' },
  { icon: <GlobeIcon className="w-full h-full" />, name: 'Group Outings', desc: 'Trips to local attractions, restaurants, and entertainment venues.' },
];

const eventTypes = [
  {
    icon: <UsersIcon className="w-full h-full" />,
    name: 'Social Mixers',
    desc: 'Regular get-togethers for teens to meet, mingle, and have fun in a welcoming Jewish environment.',
    bg: '#dbeafe',
    color: '#1d4ed8',
    features: ['Monthly gatherings', 'Ice-breaker activities', 'New friendship opportunities'],
  },
  {
    icon: <TentIcon className="w-full h-full" />,
    name: 'Group Adventures',
    desc: 'Organized group outings to exciting local and regional destinations for teens to bond and explore together.',
    bg: '#dcfce7',
    color: '#15803d',
    features: ['Local attractions', 'Group dining', 'Shared experiences'],
  },
  {
    icon: <StarOfDavidIcon className="w-full h-full" />,
    name: 'Cultural Events',
    desc: 'Engaging events that celebrate Jewish culture, heritage, and community throughout the Jewish calendar.',
    bg: '#ede9fe',
    color: '#7c3aed',
    features: ['Jewish calendar events', 'Heritage celebrations', 'Community programming'],
  },
];

const volunteeringFeatures = [
  { title: 'Food Bank Drives', desc: 'Packing and organizing meals for those in need across the community.' },
  { title: 'Senior Center Visits', desc: 'Bringing joy and companionship to the elderly.' },
  { title: 'Community Cleanups', desc: 'Taking care of our local parks, streets, and green spaces.' },
];
