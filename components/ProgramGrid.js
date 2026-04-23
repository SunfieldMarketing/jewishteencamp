'use client';
import BlurFade from './ui/blur-fade';

export default function ProgramGrid({ title = "Our Programs", items }) {
  const defaultPrograms = [
    { title: 'Boys Teen Camp (Ages 12–17)', subtitle: 'Adventure & Growth', icon: '👦' },
    { title: 'Girls Week of Art & Adventure', subtitle: 'Creativity & Fun', icon: '🎨' },
    { title: 'Pacific Northwest Adventure', subtitle: 'Explore the Wild', icon: '🌲' },
    { title: 'Bar Mitzvah Preparation', subtitle: 'Jewish Heritage', icon: '✡️' },
  ];

  const displayItems = items || defaultPrograms;

  return (
    <section className="py-32 bg-accent">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-16 text-[#0B1F3D]">{title}</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {displayItems.map((item, idx) => (
            <BlurFade key={idx} delay={0.1 * idx}>
              <div className="bg-white p-8 rounded-3xl shadow-sm hover:shadow-xl transition-all border border-black/5 group">
                <div className="text-4xl mb-6 group-hover:scale-110 transition-transform inline-block">{item.icon}</div>
                <h3 className="text-xl font-bold mb-2 text-[#1B3A6B]">{item.title}</h3>
                <p className="text-gray-500 text-sm">{item.subtitle}</p>
              </div>
            </BlurFade>
          ))}
        </div>
      </div>
    </section>
  );
}
