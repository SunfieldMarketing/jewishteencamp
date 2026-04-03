import Link from 'next/link';
import ContactForm from '../../components/ContactForm';
import { PersonIcon } from '../../components/Icons';
import { featuredPhoto, img } from '../../lib/photos';

export const metadata = {
  title: 'Contact Us | Chicago Jewish Teens',
  description:
    'Contact Chicago Jewish Teens to enroll your teen, ask questions, or get more information. Call (847) 452-4609, email zalman@chicagojewishteens.com, or fill out our contact form.',
};

export default function ContactPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative py-28 bg-gradient-to-br from-primary-dark via-primary to-primary-light text-white overflow-hidden">
        <div className="absolute inset-0 opacity-20 bg-cover bg-center"
          style={{ backgroundImage: `url("${img(featuredPhoto, 1400)}")` }} />
        <div className="absolute inset-0 bg-gradient-to-br from-primary-dark/85 via-primary/75 to-primary-light/80" />
        <div className="absolute -top-20 -right-20 w-80 h-80 bg-gold/10 rounded-full" />
        <div className="absolute -bottom-10 -left-10 w-60 h-60 bg-white/5 rounded-full" />
        <div className="relative max-w-4xl mx-auto px-4 text-center">
          <p className="text-gold font-semibold text-sm uppercase tracking-widest mb-4">Reach Out</p>
          <h1 className="text-5xl md:text-6xl font-bold mb-6" style={{ fontFamily: 'Playfair Display, serif' }}>
            Let&apos;s Start a <span className="text-gold">Conversation</span>
          </h1>
          <p className="text-xl text-blue-100 max-w-2xl mx-auto">
            Questions, enrollment inquiries, or just want to learn more — we&apos;d love to hear from you. We typically respond within a few hours.
          </p>
          <nav className="mt-8 flex items-center justify-center gap-2 text-sm text-blue-300">
            <Link href="/" className="hover:text-gold">Home</Link>
            <span>/</span>
            <span className="text-white">Contact Us</span>
          </nav>
        </div>
      </section>

      {/* Quick Action Cards */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 -mt-8">
            <a
              href="tel:+18474524609"
              className="bg-white rounded-2xl shadow-xl p-6 flex items-center gap-4 hover:shadow-2xl transition-shadow border-2 border-transparent hover:border-gold group"
            >
              <div className="w-14 h-14 bg-green-100 rounded-2xl flex items-center justify-center text-green-600 group-hover:bg-green-500 group-hover:text-white transition-colors">
                <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                </svg>
              </div>
              <div>
                <div className="font-bold text-primary-dark">Call Now</div>
                <div className="text-green-600 font-bold">(847) 452-4609</div>
                <div className="text-gray-400 text-xs">Fastest response</div>
              </div>
            </a>

            <a
              href="sms:+18474524609"
              className="bg-white rounded-2xl shadow-xl p-6 flex items-center gap-4 hover:shadow-2xl transition-shadow border-2 border-transparent hover:border-gold group"
            >
              <div className="w-14 h-14 bg-blue-100 rounded-2xl flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M18 10c0 3.866-3.582 7-8 7a8.841 8.841 0 01-4.083-.98L2 17l1.338-3.123C2.493 12.767 2 11.434 2 10c0-3.866 3.582-7 8-7s8 3.134 8 7zM7 9H5v2h2V9zm8 0h-2v2h2V9zM9 9h2v2H9V9z" clipRule="evenodd" />
                </svg>
              </div>
              <div>
                <div className="font-bold text-primary-dark">Text Us</div>
                <div className="text-primary font-bold">(847) 452-4609</div>
                <div className="text-gray-400 text-xs">Reply within hours</div>
              </div>
            </a>

            <a
              href="mailto:zalman@chicagojewishteens.com"
              className="bg-white rounded-2xl shadow-xl p-6 flex items-center gap-4 hover:shadow-2xl transition-shadow border-2 border-transparent hover:border-gold group"
            >
              <div className="w-14 h-14 bg-gold/10 rounded-2xl flex items-center justify-center text-gold group-hover:bg-gold group-hover:text-white transition-colors">
                <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                </svg>
              </div>
              <div>
                <div className="font-bold text-primary-dark">Email Us</div>
                <div className="text-gold font-semibold text-sm">zalman@chicagojewishteens.com</div>
                <div className="text-gray-400 text-xs">24-hour response</div>
              </div>
            </a>
          </div>
        </div>
      </section>

      {/* Main Contact Section */}
      <section className="py-20 bg-accent">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-5 gap-12 items-start">
            {/* Left: Staff Cards */}
            <div className="lg:col-span-2 space-y-6">
              <div>
                <p className="section-subheading">Our Team</p>
                <h2 className="text-3xl font-bold text-primary-dark mb-6" style={{ fontFamily: 'Playfair Display, serif' }}>
                  Committed to <span className="text-gold">Our Campers</span>
                </h2>
              </div>

              {staffDirectory.map((person) => (
                <div key={person.name} className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-lg transition-shadow">
                  <div className="flex items-start gap-4">
                    <div className="w-14 h-14 bg-primary rounded-xl flex items-center justify-center text-white flex-shrink-0 p-3">
                      <PersonIcon className="w-full h-full" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-bold text-primary-dark">{person.name}</h3>
                      <p className="text-gold text-sm font-semibold mb-3">{person.role}</p>
                      <div className="space-y-1.5">
                        <a href={`tel:${person.phone.replace(/\D/g, '')}`} className="flex items-center gap-2 text-gray-600 hover:text-gold text-sm transition-colors">
                          <svg className="w-3.5 h-3.5 text-gold" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                          </svg>
                          {person.phone}
                        </a>
                        {person.email && (
                          <a href={`mailto:${person.email}`} className="flex items-center gap-2 text-gray-600 hover:text-gold text-xs transition-colors break-all">
                            <svg className="w-3.5 h-3.5 text-gold flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                              <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                              <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                            </svg>
                            {person.email}
                          </a>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              ))}

              {/* Address Card */}
              <div className="bg-white rounded-2xl p-6 shadow-sm">
                <h3 className="font-bold text-primary-dark mb-3 flex items-center gap-2">
                  <svg className="w-5 h-5 text-gold" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                  </svg>
                  Camp Location
                </h3>
                <p className="text-gray-700">2095 Landwehr Rd</p>
                <p className="text-gray-700">Northbrook, IL 60062</p>
                <a
                  href="https://maps.google.com/?q=2095+Landwehr+Rd+Northbrook+IL+60062"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-3 inline-flex items-center gap-1 text-gold text-sm font-semibold hover:text-gold-dark"
                >
                  Get Directions
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </a>
              </div>

              {/* Social */}
              <div className="bg-white rounded-2xl p-6 shadow-sm">
                <h3 className="font-bold text-primary-dark mb-4">Follow Us</h3>
                <div className="space-y-3">
                  <a href="https://www.facebook.com/ChicAgoJewishTeens/" target="_blank" rel="noopener noreferrer"
                    className="flex items-center gap-3 p-3 bg-blue-50 rounded-xl hover:bg-blue-100 transition-colors">
                    <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center text-white text-sm">f</div>
                    <span className="text-blue-800 font-medium text-sm">@ChicAgoJewishTeens</span>
                  </a>
                  <a href="https://www.instagram.com/chicagojewishteens" target="_blank" rel="noopener noreferrer"
                    className="flex items-center gap-3 p-3 bg-pink-50 rounded-xl hover:bg-pink-100 transition-colors">
                    <div className="w-8 h-8 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg flex items-center justify-center text-white text-xs">ig</div>
                    <span className="text-pink-800 font-medium text-sm">@chicagojewishteens</span>
                  </a>
                </div>
              </div>
            </div>

            {/* Right: Form */}
            <div className="lg:col-span-3">
              <div className="bg-white rounded-3xl shadow-xl p-8 md:p-10">
                <div className="mb-8">
                  <h2 className="text-3xl font-bold text-primary-dark mb-2" style={{ fontFamily: 'Playfair Display, serif' }}>
                    Request Enrollment Information
                  </h2>
                  <p className="text-gray-500">
                    Fill out the form below and we&apos;ll contact you within 24 hours with enrollment details, pricing, and answers to all your questions.
                  </p>
                </div>

                {/* Trust signals */}
                <div className="grid grid-cols-3 gap-4 mb-8 p-4 bg-accent rounded-2xl">
                  {['No Obligation', 'Fast Response', 'Free Info Pack'].map((item) => (
                    <div key={item} className="text-center">
                      <div className="text-green-500 text-lg mb-1">✓</div>
                      <div className="text-xs font-semibold text-gray-600">{item}</div>
                    </div>
                  ))}
                </div>

                <ContactForm />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map */}
      <section className="bg-white py-12">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-2xl font-bold text-primary-dark mb-6 text-center" style={{ fontFamily: 'Playfair Display, serif' }}>
            Find Us in Northbrook
          </h2>
          <div className="rounded-3xl overflow-hidden shadow-xl h-96">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2959.5!2d-87.8389!3d42.1294!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2s2095+Landwehr+Rd%2C+Northbrook%2C+IL+60062!5e0!3m2!1sen!2sus!4v1"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Chicago Jewish Teens Location"
            />
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-primary-dark text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6" style={{ fontFamily: 'Playfair Display, serif' }}>
            This Summer Make an <span className="text-gold">Extreme Investment</span> in Your Teen!
          </h2>
          <p className="text-blue-200 text-xl mb-10 max-w-2xl mx-auto">
            Don&apos;t let this summer pass by. Every week your teen isn&apos;t at Chicago Jewish Teens is a week of memories, friendships, and growth they could be having.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="tel:+18474524609" className="btn-primary">
              Call Now: (847) 452-4609
            </a>
            <a href="mailto:zalman@chicagojewishteens.com" className="btn-outline">
              Email Us Today
            </a>
          </div>
          <p className="mt-8 text-blue-300 text-sm">
            R&apos; Zalman Notik — Chicago Jewish Teens Director
            <br />
            9041 Margail Ave, Des Plaines, IL 60015
          </p>
        </div>
      </section>
    </>
  );
}

const staffDirectory = [
  {
    name: "R' Schneur Scheiman",
    role: 'Camp Gan Israel Chicago Director',
    phone: '+1 (847) 485-9770',
    email: null,
  },
  {
    name: "R' Zalman Notik",
    role: 'Chicago Jewish Teens Director',
    phone: '+1 (847) 452-4609',
    email: 'zalman@chicagojewishteens.com',
  },
  {
    name: 'Dovid Goldshmidt',
    role: 'Chicago Jewish Teens Executive Coordinator',
    phone: '+1 (312) 972-1816',
    email: 'info@chicagojewishteens.com',
  },
];
