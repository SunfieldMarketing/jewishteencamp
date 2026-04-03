import Link from 'next/link';
import {
  MountainIcon, SportsIcon, StarOfDavidIcon, WavesIcon, MartialArtsIcon,
  TentIcon, BookOpenIcon, FishingIcon, TrophyIcon, CompassIcon, PaletteIcon,
} from '../../components/Icons';

export const metadata = {
  title: 'Photo Gallery | Chicago Jewish Teens',
  description:
    'Browse photos from Chicago Jewish Teens summer camp — adventures, sports, trips, Shabbatons, and life-changing moments at our Northbrook, IL Jewish teen camp.',
};

const categories = ['All', 'Adventures', 'Sports', 'Culture', 'Trips', 'Shabbatons'];

const photos = [
  { cat: 'Adventures', label: 'Indiana Dunes Hike', icon: <MountainIcon className="w-full h-full" />, gradient: 'from-blue-600 to-blue-400', size: 'large' },
  { cat: 'Sports', label: 'Basketball Court', icon: <SportsIcon className="w-full h-full" />, gradient: 'from-orange-500 to-yellow-400', size: 'normal' },
  { cat: 'Culture', label: 'Shabbat Celebration', icon: <StarOfDavidIcon className="w-full h-full" />, gradient: 'from-purple-600 to-purple-400', size: 'normal' },
  { cat: 'Trips', label: 'White Water Rafting', icon: <WavesIcon className="w-full h-full" />, gradient: 'from-cyan-600 to-cyan-400', size: 'normal' },
  { cat: 'Adventures', label: 'Paintball Action', icon: <CompassIcon className="w-full h-full" />, gradient: 'from-green-600 to-green-400', size: 'normal' },
  { cat: 'Shabbatons', label: 'Friday Night Dinner', icon: <StarOfDavidIcon className="w-full h-full" />, gradient: 'from-amber-600 to-amber-400', size: 'large' },
  { cat: 'Sports', label: 'Soccer League', icon: <SportsIcon className="w-full h-full" />, gradient: 'from-emerald-600 to-emerald-400', size: 'normal' },
  { cat: 'Trips', label: 'Speed Boating', icon: <WavesIcon className="w-full h-full" />, gradient: 'from-sky-600 to-sky-400', size: 'normal' },
  { cat: 'Culture', label: 'Jewish Learning', icon: <BookOpenIcon className="w-full h-full" />, gradient: 'from-indigo-600 to-indigo-400', size: 'normal' },
  { cat: 'Adventures', label: 'Camping Night', icon: <TentIcon className="w-full h-full" />, gradient: 'from-stone-600 to-stone-400', size: 'normal' },
  { cat: 'Sports', label: 'Martial Arts', icon: <MartialArtsIcon className="w-full h-full" />, gradient: 'from-red-600 to-red-400', size: 'normal' },
  { cat: 'Trips', label: 'Michigan Adventure', icon: <MountainIcon className="w-full h-full" />, gradient: 'from-teal-600 to-teal-400', size: 'large' },
  { cat: 'Shabbatons', label: 'Havdalah Ceremony', icon: <StarOfDavidIcon className="w-full h-full" />, gradient: 'from-violet-600 to-violet-400', size: 'normal' },
  { cat: 'Adventures', label: 'Canoeing', icon: <FishingIcon className="w-full h-full" />, gradient: 'from-blue-500 to-teal-400', size: 'normal' },
  { cat: 'Sports', label: 'Baseball Game', icon: <SportsIcon className="w-full h-full" />, gradient: 'from-green-500 to-lime-400', size: 'normal' },
  { cat: 'Culture', label: 'Bar Mitzvah Prep', icon: <BookOpenIcon className="w-full h-full" />, gradient: 'from-yellow-600 to-amber-400', size: 'normal' },
  { cat: 'Trips', label: 'Go-Karting', icon: <CompassIcon className="w-full h-full" />, gradient: 'from-rose-600 to-pink-400', size: 'normal' },
  { cat: 'Shabbatons', label: 'Shabbat Morning', icon: <TrophyIcon className="w-full h-full" />, gradient: 'from-orange-400 to-yellow-300', size: 'normal' },
];

export default function PhotosPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative py-28 bg-gradient-to-br from-primary-dark via-primary to-primary-light text-white overflow-hidden">
        <div className="absolute inset-0 opacity-5"
          style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'40\' height=\'40\' viewBox=\'0 0 40 40\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'none\' fill-rule=\'evenodd\'%3E%3Cg fill=\'%23ffffff\' fill-opacity=\'1\'%3E%3Cpath d=\'M0 40L40 0H20L0 20M40 40V20L20 40\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")', }}
        />
        <div className="relative max-w-4xl mx-auto px-4 text-center">
          <p className="text-gold font-semibold text-sm uppercase tracking-widest mb-4">Camp Life</p>
          <h1 className="text-5xl md:text-6xl font-bold mb-6" style={{ fontFamily: 'Playfair Display, serif' }}>
            Our <span className="text-gold">Photo Gallery</span>
          </h1>
          <p className="text-xl text-blue-100 max-w-2xl mx-auto">
            A glimpse into the unforgettable memories made every summer at Chicago Jewish Teens.
          </p>
          <nav className="mt-8 flex items-center justify-center gap-2 text-sm text-blue-300">
            <Link href="/" className="hover:text-gold">Home</Link>
            <span>/</span>
            <span className="text-white">Photos</span>
          </nav>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <p className="section-subheading">Memories That Last Forever</p>
            <h2 className="section-heading mb-4">
              Life at <span className="text-gold">Camp in Pictures</span>
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Every summer is filled with adventures, laughter, growth, and memories that our campers cherish for a lifetime.
            </p>
          </div>

          {/* Masonry-style grid */}
          <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 space-y-4">
            {photos.map((photo, i) => (
              <div
                key={i}
                className={`break-inside-avoid rounded-2xl overflow-hidden ${
                  photo.size === 'large' ? 'h-72' : 'h-52'
                } bg-gradient-to-br ${photo.gradient} flex flex-col items-center justify-center text-white group cursor-pointer hover:opacity-90 transition-all duration-300 hover:scale-[1.02] shadow-lg`}
              >
                <div className="w-10 h-10 mb-3 text-white/50 group-hover:scale-110 transition-transform duration-300">
                  {photo.icon}
                </div>
                <div className="text-white font-semibold text-sm">{photo.label}</div>
                <div className="text-white/60 text-xs mt-1">{photo.cat}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Social proof */}
      <section className="py-16 bg-accent">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <p className="section-subheading">Follow Along</p>
          <h2 className="section-heading mb-6">
            More Photos on <span className="text-gold">Social Media</span>
          </h2>
          <p className="text-gray-600 text-lg mb-8">
            Follow us on Facebook and Instagram for real-time summer updates, photos, and videos!
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <a
              href="https://www.facebook.com/ChicAgoJewishTeens/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 bg-blue-600 text-white px-6 py-3 rounded-xl font-bold hover:bg-blue-700 transition-colors"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
              </svg>
              Follow on Facebook
            </a>
            <a
              href="https://www.instagram.com/chicagojewishteens"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white px-6 py-3 rounded-xl font-bold hover:opacity-90 transition-opacity"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
              </svg>
              Follow on Instagram
            </a>
          </div>
        </div>
      </section>

      {/* Video section placeholder */}
      <section className="py-20 bg-primary-dark text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <p className="text-gold font-semibold text-sm uppercase tracking-widest mb-4">Camp Videos</p>
          <h2 className="text-4xl font-bold mb-6" style={{ fontFamily: 'Playfair Display, serif' }}>
            See the Magic <span className="text-gold">in Motion</span>
          </h2>
          <p className="text-blue-200 text-lg mb-10">
            Nothing captures the energy and excitement of Chicago Jewish Teens like our camp videos. Check our social media for the latest highlights!
          </p>
          <div className="bg-white/5 rounded-3xl p-16 flex items-center justify-center">
            <div className="text-center">
              <div className="w-20 h-20 mx-auto mb-6 text-white/30">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-full h-full">
                  <path d="M15 10l4.553-2.069A1 1 0 0121 8.87v6.26a1 1 0 01-1.447.894L15 14M3 8a2 2 0 012-2h8a2 2 0 012 2v8a2 2 0 01-2 2H5a2 2 0 01-2-2V8z"/>
                </svg>
              </div>
              <p className="text-blue-300 text-lg mb-6">
                Videos available on our Facebook & Instagram pages
              </p>
              <div className="flex gap-4 justify-center flex-wrap">
                <a
                  href="https://www.facebook.com/ChicAgoJewishTeens/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-blue-600 text-white px-6 py-3 rounded-xl font-semibold text-sm hover:bg-blue-700 transition-colors"
                >
                  Watch on Facebook
                </a>
                <a
                  href="https://www.instagram.com/chicagojewishteens"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-6 py-3 rounded-xl font-semibold text-sm hover:opacity-90 transition-opacity"
                >
                  Watch on Instagram
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gold text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-4" style={{ fontFamily: 'Playfair Display, serif' }}>
            Want Your Teen in These Photos?
          </h2>
          <p className="text-white/90 text-xl mb-8">
            Enroll today and make your teen part of the Chicago Jewish Teens story.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="bg-white text-gold font-bold px-8 py-4 rounded-full hover:shadow-xl transition-all">
              Enroll Now
            </Link>
            <a href="tel:+18474524609" className="border-2 border-white text-white font-bold px-8 py-4 rounded-full hover:bg-white hover:text-gold transition-all">
              Call (847) 452-4609
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
