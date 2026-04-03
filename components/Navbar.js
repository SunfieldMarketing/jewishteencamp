'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/day-camp', label: 'Day Camp' },
  { href: '/about', label: 'About Us' },
  { href: '/schedule', label: 'Schedule & Pricing' },
  { href: '/photos', label: 'Photos' },
  { href: '/parents', label: 'Parents Area' },
  { href: '/contact', label: 'Contact' },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (isMobileOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [isMobileOpen]);

  return (
    <>
      {/* Top Bar */}
      <div className="bg-primary-dark text-white text-sm py-2 hidden md:block">
        <div className="max-w-7xl mx-auto px-4 flex items-center justify-between">
          <div className="flex items-center gap-6">
            <a href="tel:+18474524609" className="flex items-center gap-2 hover:text-gold transition-colors">
              <PhoneIcon />
              <span>+1 (847) 452-4609</span>
            </a>
            <a href="mailto:zalman@chicagojewishteens.com" className="flex items-center gap-2 hover:text-gold transition-colors">
              <EmailIcon />
              <span>zalman@chicagojewishteens.com</span>
            </a>
          </div>
          <div className="flex items-center gap-4">
            <span className="text-gray-400">Follow us:</span>
            <a href="https://www.facebook.com/ChicAgoJewishTeens/" target="_blank" rel="noopener noreferrer" className="hover:text-gold transition-colors" aria-label="Facebook">
              <FacebookIcon />
            </a>
            <a href="https://www.instagram.com/chicagojewishteens" target="_blank" rel="noopener noreferrer" className="hover:text-gold transition-colors" aria-label="Instagram">
              <InstagramIcon />
            </a>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <nav
        className={`sticky top-0 z-50 transition-all duration-300 ${
          isScrolled ? 'bg-white shadow-lg py-3' : 'bg-white py-4'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-white shadow-md group-hover:bg-gold transition-colors duration-300 p-2.5">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-full h-full">
                <polygon points="12,1 15,9 23,9 17,14 19,22 12,17.5 5,22 7,14 1,9 9,9" />
              </svg>
            </div>
            <div>
              <div className="font-bold text-primary text-lg leading-tight" style={{ fontFamily: 'Playfair Display, serif' }}>
                Chicago Jewish
              </div>
              <div className="text-gold font-semibold text-sm uppercase tracking-widest leading-tight">
                Teens
              </div>
            </div>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`px-4 py-2 rounded-lg font-medium text-sm transition-all duration-200 ${
                  pathname === link.href
                    ? 'bg-primary text-white'
                    : 'text-gray-700 hover:text-primary hover:bg-blue-50'
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center gap-3">
            <a
              href="tel:+18474524609"
              className="flex items-center gap-2 text-primary font-semibold hover:text-gold transition-colors"
            >
              <PhoneIcon />
              <span className="text-sm">(847) 452-4609</span>
            </a>
            <Link
              href="/contact"
              className="bg-gold text-white font-bold px-5 py-2.5 rounded-full text-sm hover:bg-gold-dark transition-all duration-300 hover:shadow-lg"
            >
              Enroll Now
            </Link>
          </div>

          {/* Mobile Hamburger */}
          <button
            onClick={() => setIsMobileOpen(!isMobileOpen)}
            className="lg:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
            aria-label="Toggle menu"
            aria-expanded={isMobileOpen}
          >
            <div className={`w-6 h-0.5 bg-gray-700 transition-all duration-300 ${isMobileOpen ? 'rotate-45 translate-y-1.5' : ''}`} />
            <div className={`w-6 h-0.5 bg-gray-700 my-1.5 transition-all duration-300 ${isMobileOpen ? 'opacity-0' : ''}`} />
            <div className={`w-6 h-0.5 bg-gray-700 transition-all duration-300 ${isMobileOpen ? '-rotate-45 -translate-y-1.5' : ''}`} />
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileOpen && (
          <div className="lg:hidden bg-white border-t border-gray-100 shadow-xl mobile-menu-enter">
            <div className="max-w-7xl mx-auto px-4 py-4 space-y-1">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`block px-4 py-3 rounded-xl font-medium transition-all duration-200 ${
                    pathname === link.href
                      ? 'bg-primary text-white'
                      : 'text-gray-700 hover:bg-blue-50 hover:text-primary'
                  }`}
                >
                  {link.label}
                </Link>
              ))}
              <div className="pt-4 pb-2 border-t border-gray-100 mt-4 space-y-3">
                <a
                  href="tel:+18474524609"
                  className="flex items-center gap-3 px-4 py-3 bg-green-50 rounded-xl text-green-700 font-semibold"
                >
                  <PhoneIcon />
                  Call (847) 452-4609
                </a>
                <a
                  href="sms:+18474524609"
                  className="flex items-center gap-3 px-4 py-3 bg-blue-50 rounded-xl text-primary font-semibold"
                >
                  <TextIcon />
                  Text Us Now
                </a>
                <Link
                  href="/contact"
                  className="block text-center bg-gold text-white font-bold py-3 rounded-xl"
                >
                  Enroll Now - Free Consultation
                </Link>
              </div>
              <div className="pt-2 flex items-center gap-4 px-4 text-sm text-gray-500">
                <a href="https://www.facebook.com/ChicAgoJewishTeens/" target="_blank" rel="noopener noreferrer" className="hover:text-gold">Facebook</a>
                <a href="https://www.instagram.com/chicagojewishteens" target="_blank" rel="noopener noreferrer" className="hover:text-gold">Instagram</a>
                <a href="mailto:zalman@chicagojewishteens.com" className="hover:text-gold">Email</a>
              </div>
            </div>
          </div>
        )}
      </nav>
    </>
  );
}

function PhoneIcon() {
  return (
    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
      <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
    </svg>
  );
}

function TextIcon() {
  return (
    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
      <path fillRule="evenodd" d="M18 10c0 3.866-3.582 7-8 7a8.841 8.841 0 01-4.083-.98L2 17l1.338-3.123C2.493 12.767 2 11.434 2 10c0-3.866 3.582-7 8-7s8 3.134 8 7zM7 9H5v2h2V9zm8 0h-2v2h2V9zM9 9h2v2H9V9z" clipRule="evenodd" />
    </svg>
  );
}

function EmailIcon() {
  return (
    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
      <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
      <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
    </svg>
  );
}

function FacebookIcon() {
  return (
    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
    </svg>
  );
}

function InstagramIcon() {
  return (
    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
    </svg>
  );
}
