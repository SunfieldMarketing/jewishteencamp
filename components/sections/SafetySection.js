'use client';
export default function SafetySection() {
  return (
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
  );
}

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

