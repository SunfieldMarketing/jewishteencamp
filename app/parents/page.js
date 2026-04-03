import Link from 'next/link';
import ContactForm from '../../components/ContactForm';
import {
  BookOpenIcon, LockIcon, TentIcon, CalendarIcon,
  PersonIcon, CompassIcon, PhoneIcon,
} from '../../components/Icons';
import { featuredPhoto, campLifePhotos, staffScheiman, staffNotik, staffGoldshmidt, img, thumb } from '../../lib/photos';

export const metadata = {
  title: 'Parents Area | Chicago Jewish Teens',
  description:
    "Resources for Chicago Jewish Teens parents - director's letter, forms, FAQs, safety information, and more. Everything you need to prepare your teen for an incredible summer.",
};

export default function ParentsPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative py-28 bg-gradient-to-br from-primary-dark via-primary to-primary-light text-white overflow-hidden">
        <div className="absolute inset-0 opacity-20 bg-cover bg-center"
          style={{ backgroundImage: `url("${img(featuredPhoto, 1400)}")` }} />
        <div className="absolute inset-0 bg-gradient-to-br from-primary-dark/85 via-primary/75 to-primary-light/80" />
        <div className="relative max-w-4xl mx-auto px-4 text-center">
          <p className="text-gold font-semibold text-sm uppercase tracking-widest mb-4">Parents Area</p>
          <h1 className="text-5xl md:text-6xl font-bold mb-6" style={{ fontFamily: 'Playfair Display, serif' }}>
            Everything You Need to <span className="text-gold">Know</span>
          </h1>
          <p className="text-xl text-blue-100 max-w-2xl mx-auto">
            We understand that sending your teen to camp is a big decision. We&apos;re here to make it easy, transparent, and stress-free.
          </p>
          <nav className="mt-8 flex items-center justify-center gap-2 text-sm text-blue-300">
            <Link href="/" className="hover:text-gold">Home</Link>
            <span>/</span>
            <span className="text-white">Parents Area</span>
          </nav>
        </div>
      </section>

      {/* Director's Letter */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-12">
            <p className="section-subheading">Director&apos;s Letter</p>
            <h2 className="section-heading mb-4">
              A Letter to <span className="text-gold">Our Camp Families</span>
            </h2>
          </div>

          <div className="bg-accent rounded-3xl p-8 md:p-12 relative">
            <div className="absolute top-8 right-8 text-gold/20 text-8xl select-none" style={{ fontFamily: 'Georgia, serif' }}>
              &ldquo;
            </div>
            <div className="prose max-w-none text-gray-700 leading-relaxed space-y-4">
              <p>Dear parents,</p>
              <p>
                This summer your son is invited to join a close-knit group of Jewish teens for an unforgettable, fun, wholesome, two month Jewish camp experience. Our program aims to boost your teen&apos;s self-esteem by providing robust sports instruction, exciting trips, and a passion for our rich Jewish heritage.
              </p>
              <p>
                Located close to home in Northbrook, Illinois, Teen Camp resembles the overnight camp program with exciting bi-weekly &ldquo;Late Nights&rdquo; (full day trips followed by dinner), an overnight, and special Shabbat (weekend) programming. Teen Camp will provide your son with memories, friendships, and inspiration that will last a lifetime.
              </p>
              <p>
                Camp Gan Israel&apos;s Teen Camp is founded on 50 years of successful camping principles and experiences and is affiliated with the largest worldwide network of Jewish camping. You can be assured that you are entrusting your son into the care of energetic staff-members hand-picked for their experience, expertise, good social skills and a love and knack for teen development.
              </p>
              <p>
                This summer&apos;s flagship activities are highlighted by exciting trips to the Indiana Dunes and Michigan adventures, as well as sports instruction combining contemporary American sports with boxing, fishing, and horseback-riding, emphasizing camaraderie, good sportsmanship, and teamwork.
              </p>
              <p>
                We are pleased to announce dynamic Judaic tutoring as well as personalized Bar-Mitzvah preparation and celebration will also be offered this summer.
              </p>
              <p className="font-semibold">
                This summer make an extreme investment in your teen!
              </p>
              <p>Looking forward to a healthy and fun summer,</p>
            </div>
            <div className="mt-6 flex items-center gap-4">
              <div className="w-14 h-14 bg-primary rounded-full flex items-center justify-center text-white p-3"><PersonIcon className="w-full h-full" /></div>
              <div>
                <div className="font-bold text-primary-dark text-lg">Zalman Notik</div>
                <div className="text-gold font-medium text-sm">Chicago Jewish Teens Director</div>
                <a href="tel:+18474524609" className="text-gray-500 text-xs hover:text-gold">+1 (847) 452-4609</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What Parents Need to Know */}
      <section className="py-20 bg-accent">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <p className="section-subheading">Parent Resources</p>
            <h2 className="section-heading mb-4">
              Before Camp <span className="text-gold">Checklist</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {parentResources.map((resource) => (
              <div key={resource.title} className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-lg transition-shadow">
                <div className="w-10 h-10 mb-4 text-primary">{resource.icon}</div>
                <h3 className="font-bold text-primary-dark text-lg mb-2">{resource.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-4">{resource.desc}</p>
                {resource.action && (
                  <a
                    href={resource.actionHref || '#'}
                    className="text-gold font-semibold text-sm hover:text-gold-dark transition-colors flex items-center gap-1"
                  >
                    {resource.action}
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </a>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Safety Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="section-subheading">Safety First</p>
              <h2 className="section-heading mb-6">
                Your Teen&apos;s Safety is Our <span className="text-gold">Top Priority</span>
              </h2>
              <p className="text-gray-600 leading-relaxed mb-6">
                We take every precaution to ensure your teen is safe, supervised, and cared for at all times. Our comprehensive safety protocols give parents complete peace of mind.
              </p>
              <div className="space-y-4">
                {safetyPoints.map((point) => (
                  <div key={point.title} className="flex gap-4">
                    <div className="w-10 h-10 bg-green-100 rounded-xl flex items-center justify-center text-green-600 flex-shrink-0">
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-bold text-primary-dark mb-1">{point.title}</h4>
                      <p className="text-gray-600 text-sm">{point.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-primary-dark rounded-3xl p-10 text-white">
              <h3 className="text-2xl font-bold mb-8 text-center" style={{ fontFamily: 'Playfair Display, serif' }}>
                Safety by the Numbers
              </h3>
              <div className="grid grid-cols-2 gap-6">
                {safetyStats.map((stat) => (
                  <div key={stat.label} className="text-center p-4 bg-white/10 rounded-2xl">
                    <div className="text-3xl font-bold text-gold mb-1">{stat.value}</div>
                    <div className="text-blue-200 text-xs">{stat.label}</div>
                  </div>
                ))}
              </div>
              <div className="mt-8 text-center">
                <a href="tel:+18474524609" className="btn-primary w-full block">
                  Call with Safety Questions
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ for Parents */}
      <section className="py-20 bg-accent">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-16">
            <p className="section-subheading">Parent FAQs</p>
            <h2 className="section-heading mb-4">
              Questions <span className="text-gold">Parents Ask</span>
            </h2>
          </div>

          <div className="space-y-4">
            {parentFaqs.map((faq, i) => (
              <details key={i} className="faq-item group">
                <summary className="flex items-center justify-between p-6 cursor-pointer font-semibold text-primary-dark hover:text-gold transition-colors list-none">
                  <span>{faq.q}</span>
                  <svg className="w-5 h-5 flex-shrink-0 transition-transform group-open:rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </summary>
                <div className="px-6 pb-6 text-gray-600 leading-relaxed border-t border-gray-100 pt-4">
                  {faq.a}
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Staff */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <p className="section-subheading">Direct Contact</p>
            <h2 className="section-heading mb-4">
              Reach Our <span className="text-gold">Leadership Team</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {contactStaff.map((person) => (
              <div key={person.name} className="bg-accent rounded-3xl p-8 text-center">
                <div className="w-24 h-24 rounded-full overflow-hidden mx-auto mb-6 ring-4 ring-gold/10">
                  <img src={img(person.image, 300)} alt={person.name} className="w-full h-full object-cover scale-110" />
                </div>
                <h3 className="text-xl font-bold text-primary-dark mb-1" style={{ fontFamily: 'Playfair Display, serif' }}>{person.name}</h3>
                <p className="text-gold font-semibold text-sm mb-4">{person.role}</p>
                <div className="space-y-2">
                  <a href={`tel:${person.phone.replace(/\D/g, '')}`} className="flex items-center justify-center gap-2 text-gray-600 hover:text-gold text-sm">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                    </svg>
                    {person.phone}
                  </a>
                  {person.email && (
                    <a href={`mailto:${person.email}`} className="flex items-center justify-center gap-2 text-gray-600 hover:text-gold text-sm break-all">
                      <svg className="w-4 h-4 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                        <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                      </svg>
                      {person.email}
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Form CTA */}
      <section className="py-20 bg-accent">
        <div className="max-w-4xl mx-auto px-4">
          <div className="bg-white rounded-3xl shadow-xl overflow-hidden">
            <div className="bg-gradient-to-r from-primary to-primary-light p-8 text-center text-white">
              <h2 className="text-3xl font-bold mb-2" style={{ fontFamily: 'Playfair Display, serif' }}>
                Have More Questions?
              </h2>
              <p className="text-blue-200">We&apos;re here to help - fill out the form and we&apos;ll be in touch quickly!</p>
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

const parentResources = [
  {
    icon: <BookOpenIcon className="w-full h-full" />,
    title: 'Registration Forms',
    desc: 'Download and complete enrollment forms before the start of camp. All required forms must be submitted at least 2 weeks before camp starts.',
    action: 'Contact to Get Forms',
    actionHref: '/contact',
  },
  {
    icon: <LockIcon className="w-full h-full" />,
    title: 'Health & Medical',
    desc: 'Medical forms, allergy information, and health protocols. Our staff is trained in first aid and CPR.',
    action: 'Contact Health Office',
    actionHref: 'tel:+18474524609',
  },
  {
    icon: <TentIcon className="w-full h-full" />,
    title: 'Packing List',
    desc: 'Everything your teen needs for a great summer. We provide a detailed packing list after enrollment is confirmed.',
    action: 'Request Packing List',
    actionHref: '/contact',
  },
  {
    icon: <CompassIcon className="w-full h-full" />,
    title: 'Transportation',
    desc: 'Transportation routes and pickup/dropoff information. Contact us to discuss your location and available options.',
    action: 'Ask About Transport',
    actionHref: 'tel:+18474524609',
  },
  {
    icon: <CalendarIcon className="w-full h-full" />,
    title: 'Camp Calendar',
    desc: 'Full summer schedule including trip dates, special events, Shabbatons, and important deadlines.',
    action: 'View Schedule',
    actionHref: '/schedule',
  },
  {
    icon: <PhoneIcon className="w-full h-full" />,
    title: 'Financial Aid',
    desc: 'We believe every teen deserves this experience. Financial aid and payment plans are available. Ask us about options.',
    action: 'Discuss Options',
    actionHref: 'tel:+18474524609',
  },
];

const safetyPoints = [
  { title: 'Certified Red Cross Lifeguards', desc: 'All aquatic activities are supervised by certified Red Cross lifeguards.' },
  { title: 'Low Camper-to-Staff Ratio', desc: 'Our ratio ensures every teen receives individual attention and close supervision.' },
  { title: 'Trained First Aid Staff', desc: 'Staff members are trained in first aid and emergency response protocols.' },
  { title: 'Background-Checked Counselors', desc: 'Every staff member undergoes thorough background checks and vetting.' },
  { title: 'Boy Scout Oversight', desc: 'Overnight trips are supervised by skilled Boy Scout staff at certified camping sites.' },
];

const safetyStats = [
  { value: '5:1', label: 'Camper to staff ratio' },
  { value: '100%', label: 'Background checked staff' },
  { value: '25+', label: 'Years of safe operation' },
  { value: '24/7', label: 'Supervision on overnights' },
];

const parentFaqs = [
  {
    q: 'How will I be updated about my teen during camp?',
    a: "We maintain open communication with parents. You can reach the camp director directly by phone or email at any time. We also post photos and updates on our Facebook and Instagram pages regularly.",
  },
  {
    q: 'What if my teen has dietary restrictions or food allergies?',
    a: "All our food is kosher. Please inform us of any specific dietary restrictions or allergies at registration so we can accommodate your teen's needs. We take allergies very seriously.",
  },
  {
    q: 'Can I visit camp during the summer?',
    a: "We have designated visitor days and events where parents are welcome. Please contact us in advance to arrange a visit. We want you to see firsthand what an amazing experience your teen is having!",
  },
  {
    q: 'What is the behavior/discipline policy?',
    a: "We have a positive reinforcement approach that emphasizes respect, responsibility, and Jewish values. Any behavioral concerns are handled directly by experienced staff in a supportive, caring manner.",
  },
  {
    q: 'What happens if my teen gets sick at camp?',
    a: "We have first aid trained staff on site at all times. For non-emergency situations, we will contact parents. For emergencies, we follow our comprehensive emergency protocol and contact parents immediately.",
  },
  {
    q: 'How do I enroll?',
    a: "Simply fill out the contact form on our website, call us at (847) 452-4609, or email zalman@chicagojewishteens.com. We'll guide you through the entire enrollment process step by step.",
  },
];

const contactStaff = [
  {
    name: "R' Schneur Scheiman",
    role: 'CGI Camp Gan Israel Chicago Director',
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
];
