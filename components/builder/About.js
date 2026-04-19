import Link from 'next/link';
import BlurFade from '../ui/blur-fade';
import { TentIcon } from '../Icons';

const About = (props) => {
  return (
    <section className="py-24 bg-white">
      <BlurFade delay={0.1} className="max-w-7xl mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="relative">
            <div className="aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl">
              <img
                src={props.image || '/images/about.png'}
                alt="Chicago Jewish Teens campers"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 bg-white rounded-2xl shadow-xl p-4 hidden md:flex items-center gap-3">
              <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center text-primary">
                <TentIcon className="w-6 h-6" />
              </div>
              <div>
                <div className="font-bold text-primary text-sm">Day Camp</div>
                <div className="text-gray-500 text-xs">Overnight Experience</div>
              </div>
            </div>
          </div>

          <div>
            <p className="section-subheading">{props.subheading || "About Chicago Jewish Teens"}</p>
            <h2 className="section-heading mb-6">{props.heading || "More Than a Camp - A Life Experience"}</h2>
            <p className="text-gray-600 text-lg leading-relaxed mb-6">
              {props.p1 || "Teen eXtreme is a bold new concept in Jewish camping."}
            </p>
            <p className="text-gray-600 leading-relaxed mb-8">
              {props.p2 || "Under the leadership of a team of senior staff members..."}
            </p>

            <div className="flex flex-wrap gap-4">
              <Link href={props.buttonLink || "/about"} className="btn-secondary">
                {props.buttonLabel || "Read Our Full Story"}
              </Link>
            </div>
          </div>
        </div>
      </BlurFade>
    </section>
  );
};

export default About;
