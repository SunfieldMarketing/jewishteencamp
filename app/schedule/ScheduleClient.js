'use client';

import Link from 'next/link';
import { PaletteIcon, TentIcon, MountainIcon } from '../../components/Icons';
import { featuredPhoto, img } from '../../lib/photos';

export default function ScheduleClient({ data }) {
  if (!data) return null;

  const pricingPlans = data.pricingPlans || [];
  const weeklySchedule = data.weeklySchedule || [];
  const calendarEvents = data.calendarEvents || [];
  const heroTitle = data.heroTitle;
  const heroSubtitle = data.heroSubtitle;

  const iconMap = {
    palette: <PaletteIcon className="w-full h-full" />,
    tent: <TentIcon className="w-full h-full" />,
    mountain: <MountainIcon className="w-full h-full" />,
  };

  return (
    <div data-sb-object-id="content/pages/schedule.json">
      {/* Hero */}
      <section className="relative py-28 bg-gradient-to-br from-primary-dark to-primary text-white overflow-hidden">
        <div className="absolute inset-0 opacity-20 bg-cover bg-center"
          style={{ backgroundImage: `url("${img(featuredPhoto, 1400)}")` }} />
        <div className="absolute inset-0 bg-gradient-to-br from-primary-dark/85 to-primary/80" />
        <div className="relative max-w-4xl mx-auto px-4 text-center">
          <p className="text-gold font-semibold text-sm uppercase tracking-widest mb-4">Programs & Pricing</p>
          <h1 data-sb-field-path="heroTitle" className="text-5xl md:text-6xl font-bold mb-6" style={{ fontFamily: 'Playfair Display, serif' }}>
             {heroTitle}
          </h1>
          <p data-sb-field-path="heroSubtitle" className="text-xl text-blue-100 max-w-2xl mx-auto">
             {heroSubtitle}
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

          <div className="grid md:grid-cols-3 gap-8 mb-16" data-sb-field-path="pricingPlans">
            {pricingPlans.map((plan, idx) => (
              <div
                key={idx}
                data-sb-field-path={`.${idx}`}
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
                  <div className={`w-12 h-12 mb-4 ${idx === 1 ? 'text-gold' : 'text-primary'}`} data-sb-field-path=".icon">{iconMap[plan.icon] || <TentIcon className="w-full h-full" />}</div>
                  <h3
                    data-sb-field-path=".name"
                    className={`text-2xl font-bold mb-1 ${idx === 1 ? 'text-white' : 'text-primary-dark'}`}
                    style={{ fontFamily: 'Playfair Display, serif' }}
                  >
                    {plan.name}
                  </h3>
                  <p data-sb-field-path=".subtitle" className={`text-sm mb-2 ${idx === 1 ? 'text-blue-300' : 'text-gray-500'}`}>{plan.subtitle}</p>
                  <div className={`text-sm mb-4 flex items-center gap-2 ${idx === 1 ? 'text-blue-200' : 'text-gray-500'}`}>
                    <svg className="w-4 h-4 text-gold" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
                    </svg>
                    <span data-sb-field-path=".dates">{plan.dates}</span>
                  </div>
                  <div className={`text-4xl font-bold mb-6 ${idx === 1 ? 'text-gold' : 'text-primary'}`}>
                    <span data-sb-field-path=".price">{plan.price}</span>
                    {plan.priceSuffix && <span data-sb-field-path=".priceSuffix" className="text-lg font-normal opacity-70">{plan.priceSuffix}</span>}
                  </div>

                  <ul className="space-y-3 mb-8" data-sb-field-path=".features">
                    {plan.features?.map((f, i) => (
                      <li key={i} data-sb-field-path={`.${i}`} className={`flex items-start gap-2 text-sm ${idx === 1 ? 'text-blue-100' : 'text-gray-600'}`}>
                        <svg className="w-4 h-4 text-gold flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        <span data-sb-field-path=".feature">{f.feature}</span>
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
        </div>
      </section>

      {/* Weekly Schedule Table */}
      <section className="py-20 bg-accent">
        <div className="max-w-7xl mx-auto px-4">
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
                <tbody data-sb-field-path="weeklySchedule">
                  {weeklySchedule.map((day, i) => (
                    <tr key={i} data-sb-field-path={`.${i}`} className={i % 2 === 0 ? 'bg-white' : 'bg-accent'}>
                      <td data-sb-field-path=".day" className="py-4 px-6 font-bold text-primary-dark">{day.day}</td>
                      <td data-sb-field-path=".morning" className="py-4 px-6 text-gray-600 text-sm">{day.morning}</td>
                      <td data-sb-field-path=".afternoon" className="py-4 px-6 text-gray-600 text-sm">{day.afternoon}</td>
                      <td data-sb-field-path=".evening" className="py-4 px-6 text-gray-600 text-sm">{day.evening}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* Summer Calendar */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
           <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6" data-sb-field-path="calendarEvents">
            {calendarEvents.map((event, i) => (
              <div key={i} data-sb-field-path={`.${i}`} className="border-l-4 border-gold pl-5 py-3">
                <div data-sb-field-path=".date" className="text-gold font-bold text-sm uppercase tracking-wide mb-1">{event.date}</div>
                <h4 data-sb-field-path=".title" className="font-bold text-primary-dark mb-1">{event.title}</h4>
                <p data-sb-field-path=".desc" className="text-gray-500 text-sm">{event.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
