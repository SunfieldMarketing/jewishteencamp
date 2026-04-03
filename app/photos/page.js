import Link from 'next/link';
import PhotoGallery from '../../components/PhotoGallery';
import { allPhotos, featuredPhoto, img } from '../../lib/photos';

export const metadata = {
  title: 'Photo Gallery | Chicago Jewish Teens',
  description:
    'Browse 75+ photos from Chicago Jewish Teens summer camp - adventures, sports, trips, Shabbatons, and life-changing moments at our Northbrook, IL Jewish teen camp.',
};

export default function PhotosPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative py-28 bg-gradient-to-br from-primary-dark via-primary to-primary-light text-white overflow-hidden">
        {/* Hero bg photo */}
        <div
          className="absolute inset-0 opacity-20 bg-cover bg-center"
          style={{ backgroundImage: `url("${img(featuredPhoto, 1400)}")` }}
        />
        <div className="absolute inset-0 bg-gradient-to-br from-primary-dark/80 via-primary/70 to-primary-light/80" />
        <div className="relative max-w-4xl mx-auto px-4 text-center">
          <p className="text-gold font-semibold text-sm uppercase tracking-widest mb-4">Camp Life</p>
          <h1 className="text-5xl md:text-6xl font-bold mb-6" style={{ fontFamily: 'Playfair Display, serif' }}>
            Our <span className="text-gold">Photo Gallery</span>
          </h1>
          <p className="text-xl text-blue-100 max-w-2xl mx-auto mb-4">
            {allPhotos.length}+ unforgettable memories from every summer at Chicago Jewish Teens.
          </p>
          <nav className="mt-6 flex items-center justify-center gap-2 text-sm text-blue-300">
            <Link href="/" className="hover:text-gold">Home</Link>
            <span>/</span>
            <span className="text-white">Photos</span>
          </nav>
        </div>
      </section>

      {/* Gallery */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <p className="section-subheading">Memories That Last Forever</p>
            <h2 className="section-heading mb-4">
              Life at Camp <span className="text-gold">in Pictures</span>
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Every summer is filled with adventures, laughter, growth, and moments our campers carry with them forever. Click any photo to enlarge.
            </p>
          </div>

          <PhotoGallery photos={allPhotos} showFilter={true} />
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
            <a href="https://www.facebook.com/ChicAgoJewishTeens/" target="_blank" rel="noopener noreferrer"
              className="flex items-center gap-3 bg-blue-600 text-white px-6 py-3 rounded-xl font-bold hover:bg-blue-700 transition-colors">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
              </svg>
              Follow on Facebook
            </a>
            <a href="https://www.instagram.com/chicagojewishteens" target="_blank" rel="noopener noreferrer"
              className="flex items-center gap-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white px-6 py-3 rounded-xl font-bold hover:opacity-90 transition-opacity">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
              </svg>
              Follow on Instagram
            </a>
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
