import Link from 'next/link';
import ContactForm from '../../components/ContactForm';
import { PaletteIcon, TentIcon, MountainIcon } from '../../components/Icons';
import { getPayloadClient } from '../../lib/payload';

export const metadata = {
  title: 'Schedule & Pricing | Chicago Jewish Teens',
  description: 'View the summer schedule, program dates, and pricing for Chicago Jewish Teens.',
};

export default async function SchedulePage() {
  const payload = await getPayloadClient();
  
  // Fetch dynamic data from Payload
  const pricingPlansRes = await payload.find({ collection: 'pricing-plans' });
  const weeklyScheduleRes = await payload.find({ collection: 'weekly-schedule' });
  const calendarEventsRes = await payload.find({ collection: 'calendar-events' });

  const pricingPlans = pricingPlansRes.docs;
  const weeklySchedule = weeklyScheduleRes.docs;
  const calendarEvents = calendarEventsRes.docs;

  // Icon mapping
  const iconMap = {
    palette: <PaletteIcon className="w-full h-full" />,
    tent: <TentIcon className="w-full h-full" />,
    mountain: <MountainIcon className="w-full h-full" />,
  };

  return (
    <>
      {/* Hero Section (Keep your existing static/styled parts) */}
      <section className="relative py-28 bg-gradient-to-br from-primary-dark to-primary text-white overflow-hidden">
        {/* ... Rest of your hero code ... */}
        <div className="relative max-w-4xl mx-auto px-4 text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6" style={{ fontFamily: 'Playfair Display, serif' }}>
                Summer Schedule & <span className="text-gold">Pricing</span>
            </h1>
        </div>
      </section>

      {/* Pricing Cards Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {pricingPlans.map((plan, idx) => (
              <div key={plan.id} className="relative rounded-3xl overflow-hidden shadow-xl">
                <div className="p-8 bg-white">
                  <div className="w-12 h-12 mb-4 text-primary">{iconMap[plan.icon] || iconMap.tent}</div>
                  <h3 className="text-2xl font-bold mb-1 text-primary-dark" style={{ fontFamily: 'Playfair Display, serif' }}>
                    {plan.name}
                  </h3>
                  <p className="text-sm mb-4 flex items-center gap-2 text-gray-500">{plan.dates}</p>
                  <div className="text-4xl font-bold mb-6 text-primary">
                    {plan.price} <span className="text-lg font-normal opacity-70">{plan.priceSuffix}</span>
                  </div>
                  <ul className="space-y-3 mb-8">
                    {plan.features.map((f) => (
                      <li key={f.id} className="flex items-start gap-2 text-sm text-gray-600">
                        {f.feature}
                      </li>
                    ))}
                  </ul>
                  <Link href="/contact" className="block text-center py-3 rounded-xl font-bold bg-primary text-white">
                    Register Now
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* ... Weekly Schedule Table and Calendar ... (Follow same pattern) */}
    </>
  );
}
