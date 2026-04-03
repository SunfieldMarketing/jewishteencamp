import Link from 'next/link';
import ContactForm from '../../components/ContactForm';
import {
  CalendarIcon, TentIcon, PersonIcon, MountainIcon, WavesIcon,
  SportsIcon, FishingIcon, MartialArtsIcon, CompassIcon, StarOfDavidIcon,
} from '../../components/Icons';
import { featuredPhoto, adventurePhotos, sportsPhotos, tripPhotos, img, thumb } from '../../lib/photos';

export const metadata = {
  title: 'Day Camp Programs | Chicago Jewish Teens',
  description:
    'Explore all programs at Chicago Jewish Teens day camp - sports, adventures, trips, Jewish culture, overnight experiences, and more for teens ages 12–17 in Northbrook, IL.',
};

export default function DayCampPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative py-28 bg-gradient-to-br from-primary-dark via-primary to-gold text-white overflow-hidden">
        <div className="absolute inset-0 opacity-30 bg-cover bg-center"
          style={{ backgroundImage: `url("${img(featuredPhoto, 1400)}")` }} />
        <div className="absolute inset-0 bg-gradient-to-br from-primary-dark/80 via-primary/70 to-gold/80" />
        <div className="relative max-w-4xl mx-auto px-4 text-center">
          <p className="text-gold font-semibold text-sm uppercase tracking-widest mb-4">Day Camp Programs</p>
          <h1 className="text-5xl md:text-6xl font-bold mb-6" style={{ fontFamily: 'Playfair Display, serif' }}>
            The Ultimate Jewish <br />
            <span className="text-gold">Teen Camp Experience</span>
          </h1>
          <p className="text-xl text-blue-100 max-w-2xl mx-auto mb-8">
            Daily adventures, expert coaching, authentic Jewish culture - all designed to challenge, inspire, and transform your teen.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="btn-primary">Enroll Now</Link>
            <Link href="/schedule" className="btn-outline">View Schedule</Link>
          </div>
          <nav className="mt-8 flex items-center justify-center gap-2 text-sm text-blue-300">
            <Link href="/" className="hover:text-gold">Home</Link>
            <span>/</span>
            <span className="text-white">Day Camp</span>
          </nav>
        </div>
      </section>

      {/* Overview */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <p className="section-subheading">Camp Overview</p>
            <h2 className="section-heading mb-4">
              Every Day is a New <span className="text-gold">Adventure</span>
            </h2>
            <p className="text-gray-600 text-lg max-w-3xl mx-auto">
              At Chicago Jewish Teens, we combine the best elements of overnight camp with the convenience of a day camp. Extended hours, bi-weekly full-day trips, and special weekend Shabbatons create an immersive summer experience.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
            {quickStats.map((stat) => (
              <div key={stat.label} className="text-center p-6 bg-accent rounded-2xl">
                <div className="w-10 h-10 mx-auto mb-3 text-primary">{stat.icon}</div>
                <div className="text-3xl font-bold text-primary mb-1" style={{ fontFamily: 'Playfair Display, serif' }}>{stat.value}</div>
                <div className="text-gray-500 text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Adventure Trips */}
      <section className="py-20 bg-accent">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="section-subheading">Adventure Trips</p>
              <h2 className="section-heading mb-6">
                Beyond the <span className="text-gold">Campgrounds</span>
              </h2>
              <p className="text-gray-600 leading-relaxed mb-6">
                Teen Camp specializes in adventurous camping and field trips designed to boost the self-confidence and sense of responsibility in our teens. On a daily basis our campers leave our camp grounds to go on specially designed field trips.
              </p>
              <div className="space-y-4">
                {adventureTrips.map((trip) => (
                  <div key={trip.name} className="flex items-start gap-4 p-4 bg-white rounded-xl shadow-sm">
                    <div className="w-8 h-8 text-primary flex-shrink-0 mt-0.5">{trip.icon}</div>
                    <div>
                      <h4 className="font-bold text-primary-dark">{trip.name}</h4>
                      <p className="text-gray-500 text-sm">{trip.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
              <p className="text-gray-500 text-sm mt-4">
                * Campers are provided with all food they&apos;ll need every day, including dinner and snacks on full-day trips.
              </p>
            </div>
            {/* Real adventure photos */}
            <div className="grid grid-cols-2 gap-3">
              {adventurePhotos.slice(0, 4).map((photo, i) => (
                <div key={i} className={`rounded-2xl overflow-hidden ${i === 0 ? 'col-span-2' : ''}`}
                  style={{ height: i === 0 ? '220px' : '160px' }}>
                  <img src={thumb(photo.id)} alt={photo.alt}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Sports & Athletics */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <p className="section-subheading">Sports & Athletics</p>
            <h2 className="section-heading mb-4">
              Champions in <span className="text-gold">the Making</span>
            </h2>
            <p className="text-gray-600 text-lg max-w-3xl mx-auto">
              At Teen Camp campers participate in various sports activities, receive expert coaching, and enjoy a wide array of recreational activities. Professional PE instructors teach with patience, guidance, and encouragement.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
            {sports.map((sport) => (
              <div key={sport.name} className="text-center p-6 border-2 border-gray-100 rounded-2xl hover:border-gold hover:shadow-lg transition-all duration-300">
                <div className="w-10 h-10 mx-auto mb-3 text-primary">{sport.icon}</div>
                <h3 className="font-bold text-primary-dark text-sm">{sport.name}</h3>
              </div>
            ))}
          </div>

          <div className="bg-primary-dark rounded-3xl p-8 md:p-12 text-white">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-3xl font-bold mb-4" style={{ fontFamily: 'Playfair Display, serif' }}>
                  Expert Athletic Direction
                </h3>
                <p className="text-blue-200 leading-relaxed mb-6">
                  We have an experienced athletic director to ensure that the finest instruction is given on a daily basis. We stress good sportsmanship above all else while ensuring no teen will be a benchwarmer - full participation is guaranteed.
                </p>
                <Link href="/contact" className="btn-primary">Join the Team</Link>
              </div>
              <div className="grid grid-cols-2 gap-4">
                {sportsFeatures.map((f) => (
                  <div key={f} className="flex items-center gap-2 text-sm text-blue-200">
                    <span className="text-gold">✓</span>
                    {f}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Overnight & Shabbatons */}
      <section className="py-20 bg-accent">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <p className="section-subheading">Special Experiences</p>
            <h2 className="section-heading mb-4">
              Overnight Trips & <span className="text-gold">Shabbatons</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-3xl overflow-hidden shadow-xl">
              <div className="bg-gradient-to-br from-primary to-primary-light p-8 text-white">
                <div className="w-14 h-14 mb-4 text-white/80 mx-auto"><TentIcon className="w-full h-full" /></div>
                <h3 className="text-2xl font-bold" style={{ fontFamily: 'Playfair Display, serif' }}>Overnight Trips</h3>
              </div>
              <div className="p-8">
                <p className="text-gray-600 leading-relaxed mb-6">
                  Throughout the summer Teen Camp will embark on several overnight trips. Our overnights are geared toward teaching our teens good communication and survival skills. Typically held at a Boy Scouts camping site where teens are supervised by skilled Boy Scout staff.
                </p>
                <ul className="space-y-2">
                  {overnightFeatures.map((f) => (
                    <li key={f} className="flex items-center gap-2 text-sm text-gray-600">
                      <span className="text-gold">✦</span>
                      {f}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="bg-white rounded-3xl overflow-hidden shadow-xl">
              <div className="bg-gradient-to-br from-gold to-gold-light p-8 text-white">
                <div className="w-14 h-14 mb-4 text-white/80 mx-auto"><StarOfDavidIcon className="w-full h-full" /></div>
                <h3 className="text-2xl font-bold" style={{ fontFamily: 'Playfair Display, serif' }}>Shabbatons</h3>
              </div>
              <div className="p-8">
                <p className="text-gray-600 leading-relaxed mb-6">
                  Weekend trips to a nearby Jewish community where teens are comfortably housed and get to experience the finer meaning of the traditional Shabbat. Great camaraderie and friendships are nourished during this special supervised environment.
                </p>
                <ul className="space-y-2">
                  {shabbatonFeatures.map((f) => (
                    <li key={f} className="flex items-center gap-2 text-sm text-gray-600">
                      <span className="text-gold">✦</span>
                      {f}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Meals Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="section-subheading">Food & Nutrition</p>
              <h2 className="section-heading mb-6">
                Delicious <span className="text-gold">Kosher Meals</span>
              </h2>
              <p className="text-gray-600 leading-relaxed mb-6">
                Nutritious and delicious kosher snacks, lunches, and drinks are served daily to all Teen Campers. You can be assured your child will be well provided for throughout the entire camp experience.
              </p>
              <div className="space-y-3 mb-8">
                {mealsInfo.map((item) => (
                  <div key={item} className="flex items-center gap-3 p-3 bg-accent rounded-lg text-sm text-gray-700">
                    <svg className="w-4 h-4 text-gold flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7"/></svg>
                    {item}
                  </div>
                ))}
              </div>
              <Link href="/contact" className="btn-secondary">Ask About Our Menu</Link>
            </div>
            <div className="bg-gradient-to-br from-primary-dark to-primary rounded-3xl p-10 text-white text-center">
              <div className="w-20 h-20 mx-auto mb-6 text-gold/60"><StarOfDavidIcon className="w-full h-full" /></div>
              <h3 className="text-3xl font-bold mb-4" style={{ fontFamily: 'Playfair Display, serif' }}>100% Kosher</h3>
              <p className="text-blue-200 leading-relaxed">
                All meals and snacks follow strict kosher guidelines. During our overnight and Shabbaton programming, we serve nutritious and appetizing meals throughout.
              </p>
              <div className="mt-8 grid grid-cols-3 gap-4">
                {['Breakfast', 'Lunch', 'Snacks'].map((meal) => (
                  <div key={meal} className="bg-white/10 rounded-xl py-3 text-sm font-medium">
                    {meal}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA + Form */}
      <section className="py-20 bg-accent">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="section-heading mb-4">
              Ready to Join <span className="text-gold">the Adventure?</span>
            </h2>
            <p className="text-gray-600 text-lg">
              Contact us today to secure your teen&apos;s spot. Enrollment fills up fast!
            </p>
          </div>
          <div className="bg-white rounded-3xl shadow-xl p-8 md:p-12">
            <ContactForm />
          </div>
        </div>
      </section>
    </>
  );
}

const quickStats = [
  { icon: <CalendarIcon className="w-full h-full" />, value: '8', label: 'Weeks of Summer Fun' },
  { icon: <MountainIcon className="w-full h-full" />, value: '2x', label: 'Full-Day Trips Weekly' },
  { icon: <TentIcon className="w-full h-full" />, value: '3+', label: 'Overnight Experiences' },
  { icon: <PersonIcon className="w-full h-full" />, value: '5:1', label: 'Camper to Staff Ratio' },
];

const adventureTrips = [
  { icon: <MountainIcon className="w-full h-full" />, name: 'Indiana Dunes Hiking', desc: 'Twice weekly full-day hikes at Indiana Dunes National Park' },
  { icon: <WavesIcon className="w-full h-full" />, name: 'White Water Rafting', desc: "Rafting on Illinois's Vermillion River with certified guides" },
  { icon: <SportsIcon className="w-full h-full" />, name: 'Ice Skating', desc: 'Daily excursion including ice skating at local rinks' },
  { icon: <CompassIcon className="w-full h-full" />, name: 'Gymnastics', desc: 'Professional gymnastics instruction and sessions' },
  { icon: <FishingIcon className="w-full h-full" />, name: 'Canoeing', desc: 'Canoeing excursions on local waterways' },
  { icon: <MartialArtsIcon className="w-full h-full" />, name: 'Paintballing & Go-Karting', desc: 'High-energy paintball and go-kart racing experiences' },
];

const tripCards = [
  { icon: <MountainIcon className="w-full h-full" />, title: 'Indiana Dunes & Michigan Adventures', desc: 'Full-day hikes to Indiana Dunes and multi-day Michigan adventures that teens look forward to all summer long.' },
  { icon: <WavesIcon className="w-full h-full" />, title: 'Speed Boating', desc: 'Exciting speed boating supervised by certified Red Cross lifeguards.' },
  { icon: <FishingIcon className="w-full h-full" />, title: 'Canoeing & Fishing', desc: 'Peaceful canoeing and fishing trips connecting teens with nature.' },
];

const sports = [
  { icon: <SportsIcon className="w-full h-full" />, name: 'Baseball' },
  { icon: <SportsIcon className="w-full h-full" />, name: 'Basketball' },
  { icon: <SportsIcon className="w-full h-full" />, name: 'Football' },
  { icon: <SportsIcon className="w-full h-full" />, name: 'Soccer' },
  { icon: <MartialArtsIcon className="w-full h-full" />, name: 'Boxing' },
  { icon: <MartialArtsIcon className="w-full h-full" />, name: 'Martial Arts' },
  { icon: <FishingIcon className="w-full h-full" />, name: 'Fishing' },
  { icon: <CompassIcon className="w-full h-full" />, name: 'Horseback Riding' },
];

const sportsFeatures = [
  'Professional PE instructors',
  'Individual & group training',
  'Sports league competitions',
  'Sportsmanship focus',
  'Full participation guaranteed',
  'Athletic director on staff',
  'Skill development',
  'Team building',
];

const overnightFeatures = [
  'Boy Scout camping sites',
  'Survival skills training',
  'Communication workshops',
  'Campfire experiences',
  'Team bonding activities',
  'All meals included',
];

const shabbatonFeatures = [
  'Weekend in Jewish community',
  'Traditional Shabbat experience',
  'Comfortable housing provided',
  'Meaningful Jewish programming',
  'Lifelong friendships formed',
  'All meals included',
];

const mealsInfo = [
  'Daily kosher snacks and lunches for all campers',
  'Dinner provided on all full-day "Late Night" trips',
  'Meals at local Kosher restaurants several times per summer',
  'Pizza-making sessions and diner menu choices',
  'All overnight and Shabbaton meals fully catered',
];
