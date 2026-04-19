import NumberTicker from '../ui/number-ticker';

export const StatsBlock = ({ data }) => {
  const stats = data.stats || [
    { value: 25, suffix: '+', label: 'Years of Excellence' },
    { value: 500, suffix: '+', label: 'Teen Campers Served' },
    { value: 50, suffix: '+', label: 'Adventure Trips' },
    { value: 100, suffix: '%', label: 'Parent Satisfaction' },
  ];

  return (
    <section className="bg-gold py-10">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 divide-x divide-white/20">
          {stats.map((stat, idx) => (
            <div key={idx} className="text-center text-white px-4">
              <div className="text-4xl md:text-5xl font-bold mb-1" style={{ fontFamily: 'Playfair Display, serif' }}>
                <NumberTicker value={stat.value} suffix={stat.suffix} duration={1800} />
              </div>
              <div className="text-white/80 text-sm font-medium">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
