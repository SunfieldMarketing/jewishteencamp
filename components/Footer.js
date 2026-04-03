import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-primary-dark text-white">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center gap-3 mb-5 group">
              <div className="w-12 h-12 bg-gold rounded-full flex items-center justify-center text-white shadow-lg p-2.5">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-full h-full">
                  <path d="M12 2.5l7.5 13H4.5z" />
                  <path d="M12 21.5l-7.5-13h15z" />
                </svg>
              </div>
              <div>
                <div className="font-bold text-xl leading-tight" style={{ fontFamily: 'Playfair Display, serif' }}>
                  Chicago Jewish
                </div>
                <div className="text-gold text-sm font-semibold uppercase tracking-widest">Teens</div>
              </div>
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              Premier Jewish day camp for teens ages 12–17 in Northbrook, IL. Building character, friendships, and Jewish identity since 2000.
            </p>
            <div className="flex gap-3">
              <a
                href="https://www.facebook.com/ChicAgoJewishTeens/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 bg-white/10 rounded-lg flex items-center justify-center hover:bg-gold transition-colors duration-300"
                aria-label="Facebook"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
              </a>
              <a
                href="https://www.instagram.com/chicagojewishteens"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 bg-white/10 rounded-lg flex items-center justify-center hover:bg-gold transition-colors duration-300"
                aria-label="Instagram"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-lg mb-5 text-white" style={{ fontFamily: 'Playfair Display, serif' }}>
              Quick Links
            </h4>
            <ul className="space-y-3">
              {[
                { href: '/', label: 'Home' },
                { href: '/day-camp', label: 'Day Camp' },
                { href: '/about', label: 'About Our Camp' },
                { href: '/schedule', label: 'Schedule & Pricing' },
                { href: '/photos', label: 'Photo Gallery' },
                { href: '/parents', label: 'Parents Area' },
                { href: '/contact', label: 'Contact Us' },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-gold transition-colors duration-200 text-sm flex items-center gap-2"
                  >
                    <span className="text-gold text-xs">›</span>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Programs */}
          <div>
            <h4 className="font-bold text-lg mb-5 text-white" style={{ fontFamily: 'Playfair Display, serif' }}>
              Our Programs
            </h4>
            <ul className="space-y-3">
              {[
                'Boys Teen Camp (Ages 12–17)',
                'Girls Week of Art & Adventure',
                'Pacific Northwest Adventure',
                'Bar Mitzvah Preparation',
                'Overnight & Shabbatons',
                'Sports Instruction',
                'Indiana Dunes Trips',
                'White Water Rafting',
              ].map((item) => (
                <li key={item} className="text-gray-400 text-sm flex items-start gap-2">
                  <svg className="w-3 h-3 text-gold mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 8 8"><circle cx="4" cy="4" r="3"/></svg>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-bold text-lg mb-5 text-white" style={{ fontFamily: 'Playfair Display, serif' }}>
              Contact Us
            </h4>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 bg-gold/20 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
                  <svg className="w-4 h-4 text-gold" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                  </svg>
                </div>
                <div>
                  <p className="text-white font-medium text-sm">Camp Location</p>
                  <p className="text-gray-400 text-sm">2095 Landwehr Rd</p>
                  <p className="text-gray-400 text-sm">Northbrook, IL 60062</p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-gold/20 rounded-lg flex items-center justify-center flex-shrink-0">
                  <svg className="w-4 h-4 text-gold" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                  </svg>
                </div>
                <div>
                  <a href="tel:+18474524609" className="text-white hover:text-gold transition-colors text-sm font-medium">
                    +1 (847) 452-4609
                  </a>
                  <p className="text-gray-500 text-xs">Call or Text</p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-gold/20 rounded-lg flex items-center justify-center flex-shrink-0">
                  <svg className="w-4 h-4 text-gold" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                  </svg>
                </div>
                <div>
                  <a href="mailto:zalman@chicagojewishteens.com" className="text-white hover:text-gold transition-colors text-sm font-medium break-all">
                    zalman@chicagojewishteens.com
                  </a>
                </div>
              </div>

              <div className="pt-2">
                <Link
                  href="/contact"
                  className="block text-center bg-gold text-white font-bold py-3 rounded-xl text-sm hover:bg-gold-dark transition-colors"
                >
                  Enroll Now
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 py-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-gray-500 text-sm text-center md:text-left">
            &copy; {new Date().getFullYear()} Chicago Jewish Teens. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <Link href="/contact" className="text-gray-500 hover:text-gold text-sm transition-colors">
              Privacy Policy
            </Link>
            <Link href="/contact" className="text-gray-500 hover:text-gold text-sm transition-colors">
              Terms of Service
            </Link>
            <span className="text-gray-600 text-sm">
              CGI Camp Network - Est. 2000
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
