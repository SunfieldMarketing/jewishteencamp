'use client';
import Link from 'next/link';

export default function FAQSection() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-4xl mx-auto px-4">
        <div className="text-center mb-16">
          <p className="section-subheading">Frequently Asked Questions</p>
          <h2 className="section-heading mb-4">
            Everything You Need to <span className="text-gold">Know</span>
          </h2>
        </div>
        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <details key={i} className="faq-item group">
              <summary className="flex items-center justify-between p-6 cursor-pointer font-semibold text-primary-dark hover:text-gold transition-colors list-none">
                <span>{faq.q}</span>
                <svg className="w-5 h-5 flex-shrink-0 transition-transform group-open:rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="px-6 pb-6 text-gray-600 leading-relaxed border-t border-gray-100 pt-4">{faq.a}</div>
            </details>
          ))}
        </div>
        <div className="text-center mt-12">
          <p className="text-gray-600 mb-4">Still have questions?</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="tel:+18474524609" className="btn-secondary">Call (847) 452-4609</a>
            <Link href="/contact" className="btn-primary">Send Us a Message</Link>
          </div>
        </div>
      </div>
    </section>
  );
}

const faqs = [
  { q: 'What ages does Chicago Jewish Teens serve?', a: 'Our programs are designed for Jewish teens ages 12–17. We have separate programs and activities tailored to different age groups and interests.' },
  { q: 'Where is the camp located?', a: 'Our campsite is located at Chabad of California in Beverly Hills, CA 90210 - right in the heart of Beverly Hills with excellent indoor and outdoor facilities.' },
  { q: 'Is transportation provided?', a: 'Yes, we offer transportation options. Please contact us at (847) 452-4609 to discuss your specific needs and our available transportation routes.' },
  { q: 'Is the food kosher?', a: 'Absolutely. We serve nutritious and delicious kosher snacks, lunches, and drinks daily. During extended trips, we also provide dinner. Teens even enjoy meals at local Kosher restaurants.' },
  { q: 'What is the camper-to-staff ratio?', a: 'We maintain a low camper-to-staff ratio to ensure each child receives the highest quality supervision, caring guidance, and individual attention from our experienced counselors.' },
  { q: 'Is Bar Mitzvah preparation available?', a: 'Yes! We offer dynamic Judaic tutoring as well as personalized Bar Mitzvah preparation and celebration. Contact us for details on this specialized program.' },
  { q: 'What is included in the price?', a: 'Program fees include all daily activities, snacks, lunches, and trips. Extended full-day trips include dinner. Overnight and Shabbaton programming includes all meals. Contact us for complete pricing details.' },
  { q: 'Is financial assistance available?', a: 'We are committed to making our program accessible. Please contact us directly to discuss financial assistance options. We want every teen who wants to attend to have the opportunity.' },
];

