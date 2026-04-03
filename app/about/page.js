import Link from 'next/link';
import ContactForm from '../../components/ContactForm';
import {
  CompassIcon, HandshakeIcon, LightningIcon, StarOfDavidIcon,
  TrophyIcon, StarIcon, CalendarIcon,
  WavesIcon, SportsIcon, TentIcon, LockIcon,
  PersonIcon, UsersIcon, GlobeIcon,
} from '../../components/Icons';
import { featuredPhoto, aboutPhoto, adventurePhotos, campLifePhotos, img, thumb, staffScheiman, staffNotik, staffGoldshmidt } from '../../lib/photos';

export const metadata = {
  title: 'About Our Camp | Chicago Jewish Teens',
  description:
    'Learn about Chicago Jewish Teens - our history, mission, facilities, staff, and the CGI camp network. A bold new concept in Jewish camping for teens ages 12–17 in Northbrook, IL.',
};

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative py-28 bg-gradient-to-br from-primary-dark via-primary to-primary-light text-white overflow-hidden">
        <div className="absolute inset-0 opacity-25 bg-cover bg-center"
          style={{ backgroundImage: `url("${img(featuredPhoto, 1400)}")` }} />
        <div className="absolute inset-0 bg-gradient-to-br from-primary-dark/85 via-primary/75 to-primary-light/80" />
        <div className="relative max-w-4xl mx-auto px-4 text-center">
          <p className="text-gold font-semibold text-sm uppercase tracking-widest mb-4">About Us</p>
          <h1 className="text-5xl md:text-6xl font-bold mb-6" style={{ fontFamily: 'Playfair Display, serif' }}>
            Our Story & Mission
          </h1>
          <p className="text-xl text-blue-100 max-w-2xl mx-auto">
            Teen eXtreme: A bold new concept in Jewish camping - combining adventure, athletics, and authentic Jewish spirit.
          </p>
          <nav className="mt-8 flex items-center justify-center gap-2 text-sm text-blue-300">
            <Link href="/" className="hover:text-gold">Home</Link>
            <span>/</span>
            <span className="text-white">About Us</span>
          </nav>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="section-subheading">Our Philosophy</p>
              <h2 className="section-heading mb-6">
                More Than a Summer Camp - <span className="text-gold">A Life Investment</span>
              </h2>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  As a child grows so does his ability for self-discovery, adventure, bonding with friends, and appreciation of group dynamics. Under the leadership of a team of senior staff members, Teen Camp combines out-of-state trips, camping excursions, athletics, swimming, and outdoor adventures with authentic Jewish spirit to impart timeless values and appreciation of others.
                </p>
                <p>
                  Teen Camp is a day camp that mimics the overnight camp experience with extended hours and special Shabbaton (weekend) experiences. This summer teen boys ages 12-17 can join the ultimate camping experience.
                </p>
                <p>
                  Highlights include paintballing, go-karting, fishing, biking and speed boating. Teen Camp features a sports league complete with professional instructors and competitions.
                </p>
              </div>
              <blockquote className="mt-8 border-l-4 border-gold pl-6 py-2">
                <p className="text-xl italic text-gray-700 leading-relaxed">
                  &ldquo;Every boy and girl is a seed and a sapling, which with the passage of time will bring forth fruit. And their fruit will produce more fruit, and so on for generations.&rdquo;
                </p>
                <footer className="text-gold font-semibold mt-2">- The Lubavitcher Rebbe</footer>
              </blockquote>
            </div>
            {/* Right: real camp photo + mission points */}
            <div className="space-y-6">
              <div className="rounded-3xl overflow-hidden shadow-xl mb-6" style={{ height: '260px' }}>
                <img
                  src={img(aboutPhoto, 900)}
                  alt="Chicago Jewish Teens campers"
                  className="w-full h-full object-cover"
                />
              </div>
              {missionPoints.map((point) => (
                <div key={point.title} className="flex gap-4 p-5 bg-accent rounded-2xl">
                  <div className="w-12 h-12 bg-primary rounded-xl flex items-center justify-center text-white flex-shrink-0 p-2.5">
                    {point.icon}
                  </div>
                  <div>
                    <h3 className="font-bold text-primary-dark mb-1">{point.title}</h3>
                    <p className="text-gray-600 text-sm leading-relaxed">{point.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Origins Section */}
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

      {/* Facilities */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1">
              <div className="grid grid-cols-2 gap-4">
                {facilities.map((f, i) => (
                  <div key={f.name} className={`rounded-2xl p-6 text-white ${i % 2 === 0 ? 'bg-primary' : 'bg-gold'}`}>
                    <div className="w-10 h-10 mb-3 text-white/80">{f.icon}</div>
                    <h4 className="font-bold mb-1">{f.name}</h4>
                    <p className="text-white/80 text-xs">{f.desc}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <p className="section-subheading">Our Facilities</p>
              <h2 className="section-heading mb-6">
                State-of-the-Art <span className="text-gold">Campus</span>
              </h2>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  Our campsite is located in the heart of Northbrook. The fully air-conditioned, spacious indoor facilities allow us to provide your son with the finest in teen programming.
                </p>
                <p>
                  Our beautiful outdoor site has many fine playing fields which include areas for baseball, football, and soccer where our teens can enjoy hours of sports in large green expanses.
                </p>
                <p>
                  The spacious indoor and outdoor facilities enable us to provide our teens with extreme summer fun, whatever the weather. The camp is located at 2095 Landwehr Road in Northbrook, IL.
                </p>
              </div>
              <div className="mt-6 flex items-center gap-3 p-4 bg-accent rounded-xl">
                <svg className="w-6 h-6 text-gold flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                </svg>
                <div>
                  <p className="font-semibold text-primary-dark text-sm">2095 Landwehr Road</p>
                  <p className="text-gray-500 text-xs">Northbrook, IL 60062</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Photo strip between facilities and staff */}
      <section className="py-10 bg-accent">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {campLifePhotos.slice(0, 4).map((photo, i) => (
              <div key={i} className="rounded-2xl overflow-hidden" style={{ height: '180px' }}>
                <img src={thumb(photo.id)} alt={photo.alt}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Staff Section */}
      <section className="py-20 bg-primary-dark text-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <p className="text-gold font-semibold text-sm uppercase tracking-widest mb-3">Our Team</p>
            <h2 className="text-4xl md:text-5xl font-bold leading-tight mb-4" style={{ fontFamily: 'Playfair Display, serif' }}>
              Staff You Can <span className="text-gold">Trust</span>
            </h2>
            <p className="text-blue-200 text-lg max-w-2xl mx-auto">
              You can be assured that you are entrusting your teen in the care of energetic staff-members who are hand-picked for their experience, expertise, and love of working with teens.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {staffDetails.map((item) => (
              <div key={item.title} className="bg-white/5 rounded-2xl p-6">
                <div className="w-10 h-10 mb-4 text-gold">{item.icon}</div>
                <h3 className="text-xl font-bold text-gold mb-3">{item.title}</h3>
                <p className="text-blue-200 leading-relaxed text-sm">{item.desc}</p>
              </div>
            ))}
          </div>

          {/* Staff Directory */}
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                name: "R' Schneur Scheiman",
                role: 'CGI Chicago Director',
                phone: '+1 (847) 485-9770',
                email: null,
                image: staffScheiman,
              },
              {
                name: "R' Zalman Notik",
                role: 'Chicago Jewish Teens Director',
                phone: '+1 (847) 452-4609',
                email: 'zalman@chicagojewishteens.com',
                image: staffNotik,
              },
              {
                name: 'Dovid Goldshmidt',
                role: 'Executive Coordinator',
                phone: '+1 (312) 972-1816',
                email: 'info@chicagojewishteens.com',
                image: staffGoldshmidt,
              },
            ].map((person) => (
              <div key={person.name} className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300">
                <div className="h-64 overflow-hidden">
                  <img src={img(person.image, 600)} alt={person.name} className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500" />
                </div>
                <div className="p-6 text-center">
                  <h4 className="font-bold text-primary-dark">{person.name}</h4>
                  <p className="text-gold text-sm font-medium mb-3">{person.role}</p>
                  <div className="space-y-1 text-sm text-gray-600">
                    <a href={`tel:${person.phone.replace(/\D/g, '')}`} className="block hover:text-gold">{person.phone}</a>
                    {person.email && <a href={`mailto:${person.email}`} className="block hover:text-gold break-all">{person.email}</a>}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Culture Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <p className="section-subheading">Jewish Culture</p>
          <h2 className="section-heading mb-6">
            A Deep Sense of <span className="text-gold">Jewish Pride</span>
          </h2>
          <p className="text-gray-600 text-lg leading-relaxed mb-8">
            Teen Campers are imbued with a deep sense of pride in their Jewish heritage. Our Jewish Fun Time program makes Judaism come alive and leaves the camper with a deeper sense of their Jewish identity. This one-of-a-kind program teaches campers the essentials of Judaism in a hands-on way.
          </p>
          <p className="text-gray-600 leading-relaxed mb-10">
            By integrating special activities, Judaism truly comes alive. Combined with group discussions and educational programs, these events bring to life the beauty and values of our tradition in a fun and spirited way. For our Bar Mitzvah aged boys, dynamic Judaic tutoring as well as personalized Bar Mitzvah prep and celebration is also available.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="btn-primary">Enroll Your Teen Today</Link>
            <Link href="/day-camp" className="btn-secondary">Explore Programs</Link>
          </div>
        </div>
      </section>

      {/* CTA with Form */}
      <section className="py-20 bg-accent">
        <div className="max-w-4xl mx-auto px-4">
          <div className="bg-white rounded-3xl shadow-xl overflow-hidden">
            <div className="bg-gradient-to-r from-primary to-primary-light p-8 text-center text-white">
              <h2 className="text-3xl font-bold mb-2" style={{ fontFamily: 'Playfair Display, serif' }}>
                Ready to Join the Chicago Jewish Teens Family?
              </h2>
              <p className="text-blue-200">Request your free information pack today</p>
            </div>
            <div className="p-8">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

const missionPoints = [
  { icon: <CompassIcon className="w-full h-full" />, title: 'Self-Discovery', desc: 'We create environments where teens discover their strengths, values, and Jewish identity.' },
  { icon: <HandshakeIcon className="w-full h-full" />, title: 'Lifelong Friendships', desc: 'Small group dynamics foster genuine friendships that last long beyond the summer.' },
  { icon: <LightningIcon className="w-full h-full" />, title: 'Confidence Building', desc: 'Every activity is designed to boost self-esteem and give teens a sense of accomplishment.' },
  { icon: <StarOfDavidIcon className="w-full h-full" />, title: 'Jewish Identity', desc: 'Authentic programming that makes Jewish heritage exciting, relevant, and personally meaningful.' },
];

const origins = [
  { icon: <TrophyIcon className="w-full h-full" />, title: 'CGI Camp Network', desc: 'Teen Camp is proudly founded on 50 years of successful camping principles and is affiliated with CGI camping - the largest worldwide network of Jewish camping.' },
  { icon: <StarIcon className="w-full h-full" />, title: 'Trendsetting Programs', desc: "CGI camps enjoy a well-earned reputation as a trendsetter with adventurous trips, creative programs, and sports instruction that teens look forward to all year." },
  { icon: <CalendarIcon className="w-full h-full" />, title: 'Est. Since 2000', desc: "Chicago Jewish Teens has served as a haven for children and their families since 2000 - building a legacy of transformative summer experiences." },
];

const facilities = [
  { icon: <LockIcon className="w-full h-full" />, name: 'Air-Conditioned Indoors', desc: 'Fully air-conditioned spacious facilities for year-round programming' },
  { icon: <SportsIcon className="w-full h-full" />, name: 'Sports Fields', desc: 'Baseball, football, and soccer fields in large green expanses' },
  { icon: <WavesIcon className="w-full h-full" />, name: 'Aquatic Facilities', desc: 'Swimming and water sports with certified lifeguards' },
  { icon: <TentIcon className="w-full h-full" />, name: 'Camping Area', desc: 'Dedicated outdoor camping and fire pit areas for overnight experiences' },
];

const staffDetails = [
  { icon: <LockIcon className="w-full h-full" />, title: 'Rigorous Selection', desc: 'Each staff member has been carefully chosen after a scrupulous application and training process. Our counselors are hand-picked for their experience, expertise, good social skills, and a love for working with teens.' },
  { icon: <StarIcon className="w-full h-full" />, title: 'Experienced & Returning', desc: 'Many staff members return year after year, lending experience and continuity to our programs. Each counselor is a role model for our teens, promising friendship that will last forever.' },
  { icon: <UsersIcon className="w-full h-full" />, title: 'Low Camper Ratio', desc: 'Our low camper-to-staff ratio ensures that each child will have the highest quality supervision along with caring and attentive guidance throughout the program.' },
  { icon: <GlobeIcon className="w-full h-full" />, title: 'Diverse International Team', desc: 'Our experienced counselors come from around the world and are known for their personal warmth and ability to care for each teen as a unique individual.' },
];
