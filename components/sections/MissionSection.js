'use client';
import Link from 'next/link';
import { img, aboutPhoto } from '../../lib/photos';
import { CompassIcon, HandshakeIcon, LightningIcon, StarOfDavidIcon, TentIcon } from '../Icons';

export default function MissionSection() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <p className="section-subheading">Our Philosophy</p>
            <h2 className="section-heading mb-6">
              More Than a Summer Camp - <span className="text-gold">A Life Investment</span>
            </h2>
            <div className="space-y-4 text-gray-600 leading-relaxed">
              <p>
                As a child grows so does his ability for self-discovery, adventure, bonding with friends, and appreciation of group dynamics. Under the leadership of a team of senior staff members, Teen Camp combines out-of-state trips, camping excursions, athletics, swimming, and outdoor adventures with authentic Jewish spirit to impart timeless values and appreciation of others.
              </p>
              <p>
                Teen Camp is a day camp that mimics the overnight camp experience with extended hours and special Shabbaton (weekend) experiences. This summer teen boys ages 12-17 can join the ultimate camping experience.
              </p>
              <p>
                Highlights include paintballing, go-karting, fishing, biking and speed boating. Teen Camp features a sports league complete with professional instructors and competitions.
              </p>
            </div>
            <blockquote className="mt-8 border-l-4 border-gold pl-6 py-2">
              <p className="text-xl italic text-gray-700 leading-relaxed">
                &ldquo;Every boy and girl is a seed and a sapling, which with the passage of time will bring forth fruit. And their fruit will produce more fruit, and so on for generations.&rdquo;
              </p>
              <footer className="text-gold font-semibold mt-2">- The Lubavitcher Rebbe</footer>
            </blockquote>
          </div>
          {/* Right: real camp photo + mission points */}
          <div className="space-y-6">
            <div className="rounded-3xl overflow-hidden shadow-xl mb-6" style={{ height: '260px' }}>
              <img
                src={img(aboutPhoto, 900)}
                alt="Chicago Jewish Teen Campers"
                className="w-full h-full object-cover"
              />
            </div>
            {missionPoints.map((point) => (
              <div key={point.title} className="flex gap-4 p-5 bg-accent rounded-2xl">
                <div className="w-12 h-12 bg-primary rounded-xl flex items-center justify-center text-white flex-shrink-0 p-2.5">
                  {point.icon}
                </div>
                <div>
                  <h3 className="font-bold text-primary-dark mb-1">{point.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{point.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

const missionPoints = [
  { icon: <CompassIcon className="w-full h-full" />, title: 'Self-Discovery', desc: 'We create environments where teens discover their strengths, values, and Jewish identity.' },
  { icon: <HandshakeIcon className="w-full h-full" />, title: 'Lifelong Friendships', desc: 'Small group dynamics foster genuine friendships that last long beyond the summer.' },
  { icon: <LightningIcon className="w-full h-full" />, title: 'Confidence Building', desc: 'Every activity is designed to boost self-esteem and give teens a sense of accomplishment.' },
  { icon: <StarOfDavidIcon className="w-full h-full" />, title: 'Jewish Identity', desc: 'Authentic programming that makes Jewish heritage exciting, relevant, and personally meaningful.' },
];

