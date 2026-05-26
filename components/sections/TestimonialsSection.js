'use client';
import { StarOfDavidIcon } from '../Icons';

export default function TestimonialsSection() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <p className="section-subheading">Parent Testimonials</p>
          <h2 className="section-heading mb-4">
            What Families <span className="text-gold">Say About Us</span>
          </h2>
        </div>
        <div className="flex flex-wrap justify-center gap-8">
          {testimonials.map((t) => (
            <div key={t.name} className="testimonial-card w-full md:w-[calc(33.33%-1.5rem)] max-w-sm flex-shrink-0">
              <div className="mt-8">
                <p className="text-gray-600 leading-relaxed mb-6 italic">{t.quote}</p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center text-white font-bold text-sm">
                    {t.name[0]}
                  </div>
                  <div>
                    <div className="font-semibold text-primary-dark text-sm">{t.name}</div>
                    <div className="text-gray-500 text-xs">{t.location}</div>
                  </div>
                  <div className="ml-auto flex text-gold text-xs">
                    {[...Array(5)].map((_, i) => (
                      <StarOfDavidIcon key={i} className="w-3 h-3 fill-current" />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

const testimonials = [
  { quote: "My son came home from Teen Camp a completely different person - more confident, more Jewishly aware, and with friends he still talks to every day. Best investment we ever made.", name: 'Rachel K.', location: 'Beverly Hills, CA' },
  { quote: "The combination of exciting adventures and authentic Jewish values is unmatched. My teen couldn't stop talking about the Indiana Dunes hike and the Shabbaton experience.", name: 'David M.', location: 'California, IL' },
  { quote: "Rabbi Notik and the entire staff are incredible. They truly care about each child as an individual. My son went back summer after summer and begged to go again.", name: 'Sarah L.', location: 'Glenview, IL' },
];

