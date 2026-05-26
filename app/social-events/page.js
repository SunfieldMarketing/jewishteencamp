import Link from 'next/link';
import ContactForm from '../../components/ContactForm';
import {
  CalendarIcon, UsersIcon, PersonIcon, StarOfDavidIcon,
  HeartIcon, GlobeIcon, HandshakeIcon, ChatIcon
} from '../../components/Icons';
import { featuredPhoto, culturePhotos, campLifePhotos, img, thumb } from '../../lib/photos';

export const metadata = {
  title: 'Social Events | Chicago Jewish Teens',
  description:
    'Explore social events at Chicago Jewish Teens - connect, have fun, and engage in Jewish culture with other teens ages 12–17 in Beverly Hills, CA.',
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
          <p className="text-gold font-semibold text-sm uppercase tracking-widest mb-4">Social Events</p>
          <h1 className="text-5xl md:text-6xl font-bold mb-6" style={{ fontFamily: 'Playfair Display, serif' }}>
            Unforgettable <br />
            <span className="text-gold">Social Gatherings</span>
          </h1>
          <p className="text-xl text-blue-100 max-w-2xl mx-auto mb-8">
            Connect with friends, enjoy exciting activities, and experience authentic Jewish culture through our dynamic year-round social events.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact?program=social-events" className="btn-primary">Join the Fun</Link>
            <Link href="/schedule" className="btn-outline">View Calendar</Link>
          </div>
          <nav className="mt-8 flex items-center justify-center gap-2 text-sm text-blue-300">
            <Link href="/" className="hover:text-gold">Home</Link>
            <span>/</span>
            <span className="text-white">Social Events</span>
          </nav>
        </div>
      </section>

      {/* Overview */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <p className="section-subheading">Event Overview</p>
            <h2 className="section-heading mb-4">
              Building a <span className="text-gold">Strong Community</span>
            </h2>
            <p className="text-gray-600 text-lg max-w-3xl mx-auto">
              Our social events are specifically tailored to help Jewish teens from across the community connect, network, and form lasting friendships in a safe and welcoming environment.
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

      {/* Teen Mixers */}
      <section className="py-20 bg-accent">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="section-subheading">Teen Mixers & Networking</p>
              <h2 className="section-heading mb-6">
                Make Friends <span className="text-gold">For Life</span>
              </h2>
              <p className="text-gray-600 leading-relaxed mb-6">
                We host monthly teen mixers designed to break the ice and bring teens together. Whether it's a casual lounge night, a game tournament, or an interactive workshop, these events are perfect for meeting new people and staying connected with camp friends.
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
            {/* Real photos */}
            <div className="grid grid-cols-2 gap-4">
              {campLifePhotos.slice(0, 4).map((photo, i) => (
                <div key={i} className={`rounded-2xl overflow-hidden ${i === 0 ? 'col-span-2 h-64' : 'h-48'}`}>
                  <img src={thumb(photo.id)} alt={photo.alt}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Holiday Parties */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <p className="section-subheading">Celebrations</p>
            <h2 className="section-heading mb-4">
              Holiday <span className="text-gold">Parties</span>
            </h2>
            <p className="text-gray-600 text-lg max-w-3xl mx-auto">
              Celebrate Jewish heritage with a modern twist! We throw the most exciting holiday parties of the year, combining tradition with incredible entertainment and themes.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {holidays.map((holiday) => (
              <div key={holiday.name} className="bg-primary-dark rounded-3xl p-8 text-white relative overflow-hidden group">
                <div className="absolute top-0 right-0 w-32 h-32 bg-gold/10 rounded-full blur-2xl -mr-10 -mt-10 transition-transform group-hover:scale-150" />
                <div className="w-12 h-12 mb-6 text-gold relative z-10">{holiday.icon}</div>
                <h3 className="text-2xl font-bold mb-3 relative z-10" style={{ fontFamily: 'Playfair Display, serif' }}>{holiday.name}</h3>
                <p className="text-blue-200 text-sm leading-relaxed mb-6 relative z-10">{holiday.desc}</p>
                <div className="space-y-2 relative z-10">
                  {holiday.features.map(f => (
                    <div key={f} className="flex items-center gap-2 text-sm text-blue-100">
                      <span className="text-gold">✓</span> {f}
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
              <p className="section-subheading">Social Action</p>
              <h2 className="section-heading mb-6">
                Community <span className="text-gold">Volunteering</span>
              </h2>
              <p className="text-gray-600 leading-relaxed mb-6">
                Giving back is a core Jewish value. Our volunteering events offer teens the chance to make a real difference in the local community while earning community service hours for school.
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
              Sign up to receive invites to our exclusive social gatherings and community events.
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
  { icon: <ChatIcon className="w-full h-full" />, value: '100%', label: 'Fun & Engaging' },
];

const mixerEvents = [
  { icon: <ChatIcon className="w-full h-full" />, name: 'Teen Lounges', desc: 'Relaxed evenings with food, music, and great conversations.' },
  { icon: <HandshakeIcon className="w-full h-full" />, name: 'Game & Trivia Nights', desc: 'Friendly competitions with awesome prizes.' },
  { icon: <GlobeIcon className="w-full h-full" />, name: 'Cultural Outings', desc: 'Group trips to local attractions, museums, and entertainment venues.' },
];

const holidays = [
  {
    icon: <StarOfDavidIcon className="w-full h-full" />,
    name: 'Chanukah Bash',
    desc: 'The ultimate festival of lights celebration featuring live music, menorah lighting, and traditional treats.',
    features: ['Live DJ & Entertainment', 'Latkes & Sufganiyot', 'Gift Exchanges']
  },
  {
    icon: <UsersIcon className="w-full h-full" />,
    name: 'Purim Masquerade',
    desc: 'Our biggest party of the year! Dress up, enjoy incredible food, and celebrate Purim in style.',
    features: ['Costume Contests', 'Megillah Reading', 'Carnival Games']
  },
  {
    icon: <PersonIcon className="w-full h-full" />,
    name: 'Sukkot Under the Stars',
    desc: 'A beautiful evening spent in the Sukkah with great food, friends, and meaningful discussions.',
    features: ['Gourmet BBQ', 'Acoustic Music', 'Lulav & Etrog']
  }
];

const volunteeringFeatures = [
  { title: 'Food Bank Drives', desc: 'Packing and organizing meals for those in need.' },
  { title: 'Senior Center Visits', desc: 'Bringing joy and companionship to the elderly.' },
  { title: 'Environmental Cleanups', desc: 'Taking care of our local parks and beaches.' },
];
