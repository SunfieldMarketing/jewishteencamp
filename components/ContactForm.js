'use client';

import { useState, useEffect } from 'react';
import { useSearchParams } from 'next/navigation';

export default function ContactForm({ variant = 'default' }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    childAge: '',
    subject: '',
    program: '',
    message: '',
  });

  const searchParams = useSearchParams();

  useEffect(() => {
    const programParam = searchParams.get('program');
    if (programParam) {
      setFormData((prev) => ({ ...prev, program: programParam }));
    }
  }, [searchParams]);
  const [status, setStatus] = useState('idle'); // idle | loading | success | error

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('loading');

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        setStatus('success');
        setFormData({ name: '', email: '', phone: '', childAge: '', subject: '', program: '', message: '' });
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    }
  };

  if (status === 'success') {
    return (
      <div className="text-center py-12 px-6">
        <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
          <svg className="w-10 h-10 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 className="text-2xl font-bold text-primary-dark mb-3" style={{ fontFamily: 'Playfair Display, serif' }}>
          Thank You!
        </h3>
        <p className="text-gray-600 mb-6">
          We&apos;ve received your inquiry and will be in touch within 24 hours. We can&apos;t wait to welcome your teen to the Chicago Jewish Teens family!
        </p>
        <a href="tel:+18474524609" className="btn-primary">
          Call Us Now: (847) 452-4609
        </a>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <div>
          <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">
            Parent / Guardian Name <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            placeholder="Your full name"
            className="input-field"
          />
        </div>
        <div>
          <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
            Email Address <span className="text-red-500">*</span>
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            placeholder="your@email.com"
            className="input-field"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <div>
          <label htmlFor="phone" className="block text-sm font-semibold text-gray-700 mb-2">
            Phone Number
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder="(847) 000-0000"
            className="input-field"
          />
        </div>
        <div>
          <label htmlFor="childAge" className="block text-sm font-semibold text-gray-700 mb-2">
            Teen&apos;s Age
          </label>
          <select
            id="childAge"
            name="childAge"
            value={formData.childAge}
            onChange={handleChange}
            className="input-field bg-white"
          >
            <option value="">Select age...</option>
            <option value="12">12 years old</option>
            <option value="13">13 years old</option>
            <option value="14">14 years old</option>
            <option value="15">15 years old</option>
            <option value="16">16 years old</option>
            <option value="17">17 years old</option>
          </select>
        </div>
      </div>

      <div>
        <label htmlFor="subject" className="block text-sm font-semibold text-gray-700 mb-2">
          Subject <span className="text-red-500">*</span>
        </label>
        <select
          id="subject"
          name="subject"
          value={formData.subject}
          onChange={handleChange}
          required
          className="input-field bg-white"
        >
          <option value="">Select a topic...</option>
          <option value="enrollment">Enrollment & Registration</option>
          <option value="pricing">Pricing & Financial Aid</option>
          <option value="schedule">Schedule & Programs</option>
          <option value="barmitzvah">Bar Mitzvah Preparation</option>
          <option value="general">General Question</option>
          <option value="other">Other</option>
        </select>
      </div>

      <div>
        <label htmlFor="program" className="block text-sm font-semibold text-gray-700 mb-2">
          Program of Interest
        </label>
        <select
          id="program"
          name="program"
          value={formData.program}
          onChange={handleChange}
          className="input-field bg-white"
        >
          <option value="">Select a program (optional)...</option>
          <option value="boys-teen-camp">Boys&apos; Teen Camp (June 18 – July 11)</option>
          <option value="girls-art-adventure">Girls&apos; Art & Adventure (July 17 – July 22)</option>
          <option value="pacific-nw">Pacific NW Adventure</option>
          <option value="day-camp">General Day Camp</option>
          <option value="shabbaton">Shabbatons & Overnights</option>
        </select>
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2">
          Message <span className="text-red-500">*</span>
        </label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          required
          rows={5}
          placeholder="Tell us about your teen and any questions you have..."
          className="input-field resize-none"
        />
      </div>

      {status === 'error' && (
        <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg text-sm">
          Something went wrong. Please try again or call us directly at (847) 452-4609.
        </div>
      )}

      <button
        type="submit"
        disabled={status === 'loading'}
        className="w-full bg-gold text-white font-bold py-4 px-8 rounded-xl text-lg transition-all duration-300 hover:bg-gold-dark hover:shadow-xl disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-3"
      >
        {status === 'loading' ? (
          <>
            <svg className="spinner w-5 h-5" fill="none" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
            </svg>
            Sending...
          </>
        ) : (
          <>
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
            </svg>
            Send Message - Enroll Today
          </>
        )}
      </button>

      <p className="text-center text-xs text-gray-500">
        By submitting, you agree to be contacted about Chicago Jewish Teens programs. We respect your privacy and never share your information.
      </p>
    </form>
  );
}
