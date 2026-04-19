import BlurFade from '../ui/blur-fade';
import * as Icons from '../Icons';

export const ActivitiesBlock = ({ data }) => {
  const activities = data.activities || [
    { title: 'Aquatic Adventures', desc: 'Swimming, jet-skiing, and more.', icon: 'WaveIcon', bg: '#dbeafe', color: '#1d4ed8' },
    { title: 'Wildness Survival', desc: 'Fire building and shelter skills.', icon: 'TentIcon', bg: '#fef3c7', color: '#b45309' },
  ];

  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 text-center mb-16">
        <p className="section-subheading">{data.subheading || "What We Do"}</p>
        <h2 className="section-heading mb-4">{data.heading || "Non-Stop Action & Adventure"}</h2>
      </div>
      <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {activities.map((activity, i) => {
          const Icon = Icons[activity.icon] || Icons.TentIcon;
          return (
            <BlurFade key={i} delay={i * 0.1}>
              <div className="bg-white p-8 rounded-3xl shadow-sm hover:shadow-xl transition-all duration-300 group border border-gray-100 h-full">
                <div 
                  className="w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300"
                  style={{ backgroundColor: activity.bg || '#f3f4f6' }}
                >
                  <Icon className="w-8 h-8" style={{ color: activity.color || '#374151' }} />
                </div>
                <h3 className="text-2xl font-bold text-primary-dark mb-4 group-hover:text-primary transition-colors" style={{ fontFamily: 'Playfair Display, serif' }}>
                  {activity.title}
                </h3>
                <p className="text-gray-600 leading-relaxed mb-6">
                  {activity.desc}
                </p>
              </div>
            </BlurFade>
          );
        })}
      </div>
    </section>
  );
};
