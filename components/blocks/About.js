import BlurFade from '../ui/blur-fade';
import { TentIcon } from '../Icons';
import { img, aboutPhoto } from '../../lib/photos';

export const AboutBlock = ({ data }) => {
  return (
    <section className="py-24 bg-white">
      <BlurFade delay={0.1} className="max-w-7xl mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="relative">
            <div className="aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl">
              <img
                src={data.image || img(aboutPhoto, 900)}
                alt="About Chicago Jewish Teens"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
              />
            </div>
          </div>

          <div>
            <p className="section-subheading">{data.subheading || "About Us"}</p>
            <h2 className="section-heading mb-6">{data.heading || "More Than a Camp"}</h2>
            <p className="text-gray-600 text-lg leading-relaxed mb-6">
              {data.p1 || "Teen eXtreme is a bold new concept in Jewish camping."}
            </p>
            <p className="text-gray-600 leading-relaxed mb-8">
              {data.p2 || "Under the leadership of senior staff, we combine adventure with authentic spirit."}
            </p>
          </div>
        </div>
      </BlurFade>
    </section>
  );
};
