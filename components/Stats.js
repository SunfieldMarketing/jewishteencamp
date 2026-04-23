'use client';
import NumberTicker from './ui/number-ticker';

export default function Stats({ items }) {
  const defaultItems = [
    { label: "Years Experience", value: "25" },
    { label: "Happy Campers", value: "1000" },
    { label: "Activities", value: "50" },
    { label: "Locations", value: "5" }
  ];

  const displayItems = items || defaultItems;

  return (
    <section className="bg-[#C8922A] py-12 relative z-30 shadow-2xl">
         <div className="max-w-7xl mx-auto px-4 grid grid-cols-2 lg:grid-cols-4 gap-8 divide-x divide-white/20">
            {displayItems.map((stat, s) => (
              <div key={s} className="text-center text-white px-4">
                <div className="text-5xl font-black mb-2">
                  <NumberTicker value={parseFloat(stat.value)} suffix={stat.value?.includes('%') ? '%' : '+'} />
                </div>
                <div className="text-xs font-bold uppercase tracking-tighter opacity-80">{stat.label}</div>
              </div>
            ))}
         </div>
      </section>
  );
}
