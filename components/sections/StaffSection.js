'use client';
import { img, staffScheiman, staffNotik, staffGoldshmidt } from '../../lib/photos';
import { LockIcon, StarOfDavidIcon, UsersIcon, GlobeIcon } from '../Icons';

export default function StaffSection() {
  return (
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
        <div className="grid md:grid-cols-3 gap-8">
          {staffDirectory.map((person) => (
            <div key={person.name} className="bg-white/5 border border-white/10 rounded-3xl p-8 text-center hover:bg-white/10 transition-all duration-300">
              <div className="w-24 h-24 rounded-full overflow-hidden mx-auto mb-6 ring-4 ring-gold/20">
                <img src={img(person.image, 300)} alt={person.name} className="w-full h-full object-cover scale-110" />
              </div>
              <h4 className="text-xl font-bold text-gold mb-1" style={{ fontFamily: 'Playfair Display, serif' }}>{person.name}</h4>
              <p className="text-blue-100 text-sm font-semibold mb-4">{person.role}</p>
              <div className="space-y-1 text-sm text-blue-200/70">
                <a href={`tel:${person.phone.replace(/\D/g, '')}`} className="block hover:text-gold transition-colors">{person.phone}</a>
                {person.email && <a href={`mailto:${person.email}`} className="block hover:text-gold transition-colors break-all">{person.email}</a>}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

const staffDetails = [
  { icon: <LockIcon className="w-full h-full" />, title: 'Rigorous Selection', desc: 'Each staff member has been carefully chosen after a scrupulous application and training process. Our counselors are hand-picked for their experience, expertise, good social skills, and a love for working with teens.' },
  { icon: <StarOfDavidIcon className="w-full h-full" />, title: 'Experienced & Returning', desc: 'Many staff members return year after year, lending experience and continuity to our programs. Each counselor is a role model for our teens, promising friendship that will last forever.' },
  { icon: <UsersIcon className="w-full h-full" />, title: 'Low Camper Ratio', desc: 'Our low camper-to-staff ratio ensures that each child will have the highest quality supervision along with caring and attentive guidance throughout the program.' },
  { icon: <GlobeIcon className="w-full h-full" />, title: 'Diverse International Team', desc: 'Our experienced counselors come from around the world and are known for their personal warmth and ability to care for each teen as a unique individual.' },
];

const staffDirectory = [
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
    email: 'RabbiZalman@chabadmammoth.com',
    image: staffNotik,
  },
  {
    name: 'Dovid Goldshmidt',
    role: 'Executive Coordinator',
    phone: '+1 (312) 972-1816',
    email: 'info@chabadmammoth.com',
    image: staffGoldshmidt,
  },
];

