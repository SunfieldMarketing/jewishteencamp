'use client';
import { LockIcon, SportsIcon, WavesIcon, TentIcon } from '../Icons';

export default function FacilitiesSection() {
  return (
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
  );
}

const facilities = [
  { icon: <LockIcon className="w-full h-full" />, name: 'Air-Conditioned Indoors', desc: 'Fully air-conditioned spacious facilities for year-round programming' },
  { icon: <SportsIcon className="w-full h-full" />, name: 'Sports Fields', desc: 'Baseball, football, and soccer fields in large green expanses' },
  { icon: <WavesIcon className="w-full h-full" />, name: 'Aquatic Facilities', desc: 'Swimming and water sports with certified lifeguards' },
  { icon: <TentIcon className="w-full h-full" />, name: 'Camping Area', desc: 'Dedicated outdoor camping and fire pit areas for overnight experiences' },
];

