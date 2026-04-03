import Link from 'next/link';
import ContactForm from '../../components/ContactForm';
import { PaletteIcon, TentIcon, MountainIcon } from '../../components/Icons';
import { featuredPhoto, sportsPhotos, img, thumb } from '../../lib/photos';

export const metadata = {
  title: 'Schedule & Pricing | Chicago Jewish Teens',
  description:
    'View the summer schedule, program dates, and pricing for Chicago Jewish Teens. Boys Teen Camp, Girls Art & Adventure, and Pacific Northwest Adventure programs available.',
};

export default function SchedulePage() {
  return (
    <>
      {/* Hero */}
      <section className="relative py-28 bg-gradient-to-br from-primary-dark to-primary text-white overflow-hidden">
        <div className="absolute inset-0 opacity-20 bg-cover bg-center"
          style={{ backgroundImage: `url("${img(featuredPhoto, 1400)}")` }} />
        <div className="absolute inset-0 bg-gradient-to-br from-primary-dark/85 to-primary/80" />
        <div className="relative max-w-4xl mx-auto px-4 text-center">
          <p className="text-gold font-semibold text-sm uppercase tracking-widest mb-4">Programs & Pricing</p>
          <h1 className="text-5xl md:text-6xl font-bold mb-6" style={{ fontFamily: 'Playfair Display, serif' }}>
            Summer Schedule & <span className="text-gold">Pricing</span>
          </h1>
          <p className="text-xl text-blue-100 max-w-2xl mx-auto">
            Choose the perfect program for your teen. Financial assistance is available - no family should miss out on this incredible experience.
          </p>
          <nav className="mt-8 flex items-center justify-center gap-2 text-sm text-blue-300">
            <Link href="/" className="hover:text-gold">Home</Link>
            <span>/</span>
            <span className="text-white">Schedule & Pricing</span>
          </nav>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <p className="section-subheading">Our Programs</p>
            <h2 className="section-heading mb-4">
              Find Your <span className="text-gold">Perfect Fit</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {pricingPlans.map((plan, idx) => (
              <div
                key={plan.name}
                className={`relative rounded-3xl overflow-hidden shadow-xl ${
                  idx === 1 ? 'ring-4 ring-gold' : ''
                }`}
              >
                {idx === 1 && (
                  <div className="bg-gold text-white text-center text-sm font-bold py-2 uppercase tracking-widest">
                    Most Popular
                  </div>
                )}
                <div className={`p-8 ${idx === 1 ? 'bg-primary-dark text-white' : 'bg-white'}`}>
                  <div className={`w-12 h-12 mb-4 ${idx === 1 ? 'text-gold' : 'text-primary'}`}>{plan.icon}</div>
                  <h3
                    className={`text-2xl font-bold mb-1 ${idx === 1 ? 'text-white' : 'text-primary-dark'}`}
                    style={{ fontFamily: 'Playfair Display, serif' }}
                  >
                    {plan.name}
                  </h3>
                  <p className={`text-sm mb-2 ${idx === 1 ? 'text-blue-300' : 'text-gray-500'}`}>{plan.subtitle}</p>
                  <div className={`text-sm mb-4 flex items-center gap-2 ${idx === 1 ? 'text-blue-200' : 'text-gray-500'}`}>
                    <svg className="w-4 h-4 text-gold" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
                    </svg>
                    {plan.dates}
                  </div>
                  <div className={`text-4xl font-bold mb-6 ${idx === 1 ? 'text-gold' : 'text-primary'}`}>
                    {plan.price}
                    {plan.priceSuffix && <span className="text-lg font-normal opacity-70">{plan.priceSuffix}</span>}
                  </div>

                  <ul className="space-y-3 mb-8">
                    {plan.features.map((f) => (
                      <li key={f} className={`flex items-start gap-2 text-sm ${idx === 1 ? 'text-blue-100' : 'text-gray-600'}`}>
                        <svg className="w-4 h-4 text-gold flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        {f}
                      </li>
                    ))}
                  </ul>

                  <Link
                    href="/contact"
                    className={`block text-center py-3 rounded-xl font-bold transition-all ${
                      idx === 1
                        ? 'bg-gold text-white hover:bg-gold-dark'
                        : 'bg-primary text-white hover:bg-primary-dark'
                    }`}
                  >
                    Register Now
                  </Link>
                </div>
              </div>
            ))}
          </div>

          <div className="bg-accent rounded-3xl p-8 text-center">
            <div className="w-12 h-12 mx-auto mb-4 text-gold">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" className="w-full h-full"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg>
            </div>
            <h3 className="text-2xl font-bold text-primary-dark mb-3" style={{ fontFamily: 'Playfair Display, serif' }}>
              Financial Assistance Available
            </h3>
            <p className="text-gray-600 max-w-2xl mx-auto mb-6">
              We believe every teen deserves the Chicago Jewish Teens experience. Financial aid and payment plans are available. Don&apos;t let budget be a barrier - reach out and we&apos;ll work something out.
            </p>
            <a href="tel:+18474524609" className="btn-secondary">
              Call to Discuss Options: (847) 452-4609
            </a>
          </div>
        </div>
      </section>

      {/* Weekly Schedule */}
      <section className="py-20 bg-accent">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <p className="section-subheading">A Typical Week</p>
            <h2 className="section-heading mb-4">
              What Your Teen&apos;s <span className="text-gold">Week Looks Like</span>
            </h2>
            <p className="text-gray-600 text-lg">Sample weekly schedule - actual activities vary week to week for maximum excitement!</p>
          </div>

          <div className="bg-white rounded-3xl shadow-xl overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="bg-primary text-white">
                    <th className="py-4 px-6 text-left font-semibold">Day</th>
                    <th className="py-4 px-6 text-left font-semibold">Morning</th>
                    <th className="py-4 px-6 text-left font-semibold">Afternoon</th>
                    <th className="py-4 px-6 text-left font-semibold">Evening</th>
                  </tr>
                </thead>
                <tbody>
                  {weeklySchedule.map((day, i) => (
                    <tr key={day.day} className={i % 2 === 0 ? 'bg-white' : 'bg-accent'}>
                      <td className="py-4 px-6 font-bold text-primary-dark">{day.day}</td>
                      <td className="py-4 px-6 text-gray-600 text-sm">{day.morning}</td>
                      <td className="py-4 px-6 text-gray-600 text-sm">{day.afternoon}</td>
                      <td className="py-4 px-6 text-gray-600 text-sm">{day.evening}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <p className="text-center text-gray-500 text-sm mt-6">
            * Schedule is approximate and subject to change based on weather and special events
          </p>
        </div>
      </section>

      {/* Summer Calendar */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <p className="section-subheading">Mark Your Calendar</p>
            <h2 className="section-heading mb-4">
              Summer <span className="text-gold">2025 Highlights</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {calendarEvents.map((event) => (
              <div key={event.title} className="border-l-4 border-gold pl-5 py-3">
                <div className="text-gold font-bold text-sm uppercase tracking-wide mb-1">{event.date}</div>
                <h4 className="font-bold text-primary-dark mb-1">{event.title}</h4>
                <p className="text-gray-500 text-sm">{event.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Registration CTA */}
      <section className="py-20 bg-primary-dark text-white">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-6" style={{ fontFamily: 'Playfair Display, serif' }}>
              Secure Your Spot Before It&apos;s Gone!
            </h2>
            <p className="text-blue-200 text-xl mb-8">
              Enrollment is limited. Early registration ensures your teen gets their preferred program.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Link href="/contact" className="btn-primary">Register Now</Link>
              <a href="tel:+18474524609" className="btn-outline">Call (847) 452-4609</a>
            </div>
          </div>
          <div className="bg-white rounded-3xl p-8">
            <h3 className="text-2xl font-bold text-primary-dark mb-6 text-center" style={{ fontFamily: 'Playfair Display, serif' }}>
              Start Your Registration
            </h3>
            <ContactForm />
          </div>
        </div>
      </section>
    </>
  );
}

const pricingPlans = [
  {
    icon: <PaletteIcon className="w-full h-full" />,
    name: "Girls' Art & Adventure",
    subtitle: 'Week-Long Intensive Program',
    dates: 'July 17 – July 22',
    price: '$375',
    priceSuffix: '/week',
    features: [
      'Full week immersive program',
      'Art and creative workshops',
      'Adventure outdoor activities',
      'Jewish heritage programming',
      'Professional instructors',
      'All meals & snacks included',
    ],
  },
  {
    icon: <TentIcon className="w-full h-full" />,
    name: "Boys' Teen Camp",
    subtitle: 'Full Summer Program',
    dates: 'June 18 – July 11',
    price: 'From $450',
    priceSuffix: '',
    features: [
      'Full summer experience',
      'Daily sports & athletics',
      'Bi-weekly full-day trips',
      'Overnight camping trips',
      'Shabbaton weekend experiences',
      'Bar Mitzvah preparation',
      'Indiana Dunes & Michigan trips',
      'All kosher meals included',
    ],
  },
  {
    icon: <MountainIcon className="w-full h-full" />,
    name: 'Pacific NW Adventure',
    subtitle: 'Premium Multi-Day Trip',
    dates: 'Extended Summer Trip',
    price: '$4,695',
    priceSuffix: '/trip',
    features: [
      'Multi-day Pacific Northwest exploration',
      'Wilderness adventures',
      'Professional guides',
      'All transportation included',
      'All meals & accommodations',
      'Team building challenges',
    ],
  },
];

const weeklySchedule = [
  {
    day: 'Sunday',
    morning: 'Camp arrival, Davening, warm-up sports',
    afternoon: 'Swimming & aquatic activities',
    evening: 'Jewish cultural program',
  },
  {
    day: 'Monday',
    morning: 'Full-day trip: Indiana Dunes hiking',
    afternoon: 'Continued trip activities',
    evening: 'Late Night dinner (trip day)',
  },
  {
    day: 'Tuesday',
    morning: 'Sports league - baseball & soccer',
    afternoon: 'Martial arts instruction',
    evening: 'Camp arrives home',
  },
  {
    day: 'Wednesday',
    morning: 'Arts, culture & Jewish learning',
    afternoon: 'Paintballing / Go-Karting trip',
    evening: 'Free time',
  },
  {
    day: 'Thursday',
    morning: 'Full-day trip: White Water Rafting',
    afternoon: 'Continued rafting adventure',
    evening: 'Dinner on trip, Late Night',
  },
  {
    day: 'Friday',
    morning: 'Basketball & football league',
    afternoon: 'Shabbat preparation, Havdalah',
    evening: 'Shabbat celebration (Shabbaton weeks)',
  },
];

const calendarEvents = [
  { date: 'June 18', title: "Boys' Camp Opens", desc: "First day of the summer for Boys' Teen Camp" },
  { date: 'Late June', title: 'First Indiana Dunes Trip', desc: 'Full-day hiking adventure at Indiana Dunes National Park' },
  { date: 'Early July', title: 'First Shabbaton', desc: 'Weekend trip to a nearby Jewish community' },
  { date: 'July 4th', title: 'July 4th Celebration', desc: 'Special camp celebration and activities' },
  { date: 'July 8', title: 'West Coast Trip', desc: 'Multi-day West Coast adventure for select campers' },
  { date: 'July 11', title: "Boys' Camp Ends", desc: "Last day of Boys' summer program" },
  { date: 'July 17', title: "Girls' Program Begins", desc: "Girls' Week of Art & Adventure kicks off" },
  { date: 'July 22', title: "Girls' Program Ends", desc: "Conclusion of Girls' Art & Adventure week" },
  { date: 'Summer', title: 'Bar Mitzvah Prep', desc: 'Ongoing personalized Bar Mitzvah preparation sessions' },
];
