'use client';
import ShimmerButton from './ui/shimmer-button';

export default function PricingTable({ title = "Pricing & Enrollment", plans }) {
  const defaultPlans = [
    { name: 'Day Camp', price: '$400', period: '/week', features: ['All Activities', 'Lunch Included', 'Transportation'] },
    { name: 'Overnight', price: '$850', period: '/trip', features: ['Hotel/Camping', 'All Meals', 'Airfare/Bus'] },
  ];

  const displayPlans = plans || defaultPlans;

  return (
    <section className="py-32 bg-white">
      <div className="max-w-5xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-16 text-[#0B1F3D]">{title}</h2>
        <div className="grid md:grid-cols-2 gap-12">
          {displayPlans.map((plan, idx) => (
            <div key={idx} className="border border-gold/30 rounded-[3rem] p-12 hover:border-gold transition-colors">
              <h3 className="text-2xl font-bold mb-4 text-[#1B3A6B]">{plan.name}</h3>
              <div className="text-5xl font-black mb-8 text-[#0B1F3D]">
                {plan.price}<span className="text-lg font-normal text-gray-400">{plan.period}</span>
              </div>
              <ul className="space-y-4 mb-12">
                {plan.features.map((f, i) => (
                  <li key={i} className="flex items-center gap-3 text-gray-600">
                    <div className="w-1.5 h-1.5 rounded-full bg-gold" />
                    {f}
                  </li>
                ))}
              </ul>
              <ShimmerButton href="/contact" className="w-full">Enroll Now</ShimmerButton>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
