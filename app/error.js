'use client';

import { useEffect } from 'react';
import Link from 'next/link';

export default function Error({ error, reset }) {
  useEffect(() => {
    // Log the error to the console (swap for Sentry/Datadog in production)
    console.error('[App Error]', error);
  }, [error]);

  return (
    <main className="min-h-screen bg-primary-dark flex items-center justify-center relative overflow-hidden">
      {/* Background glow blobs */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-gold/10 rounded-full blur-3xl -mr-40 -mt-40 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-red-500/5 rounded-full blur-3xl -ml-40 -mb-40 pointer-events-none" />

      {/* Dot pattern */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage: 'radial-gradient(circle, #ffffff 1px, transparent 1px)',
          backgroundSize: '28px 28px',
        }}
      />

      <div className="relative z-10 text-center px-4 py-20 max-w-xl mx-auto">
        {/* Warning icon */}
        <div className="w-20 h-20 bg-red-500/20 rounded-2xl flex items-center justify-center mx-auto mb-8 border border-red-500/30">
          <svg
            className="w-10 h-10 text-red-400"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1.5}
              d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z"
            />
          </svg>
        </div>

        <h1
          className="text-3xl md:text-4xl font-bold text-white mb-4"
          style={{ fontFamily: 'Playfair Display, serif' }}
        >
          Something Went Wrong
        </h1>

        <p className="text-blue-200 text-lg leading-relaxed mb-4 max-w-md mx-auto">
          We hit an unexpected snag. Our team has been notified. Please try again or contact
          us directly if the problem persists.
        </p>

        {/* Show error digest in production (non-sensitive) */}
        {error?.digest && (
          <p className="text-gray-600 text-xs mb-8 font-mono">
            Error reference: {error.digest}
          </p>
        )}

        <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
          {/* Try again */}
          <button
            onClick={() => reset()}
            className="inline-flex items-center justify-center gap-2 bg-gold text-white font-bold px-7 py-4 rounded-full hover:bg-gold-dark transition-all duration-300 hover:shadow-[0_0_30px_rgba(200,146,42,0.4)] hover:-translate-y-0.5"
          >
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
              />
            </svg>
            Try Again
          </button>

          {/* Go home */}
          <Link
            href="/"
            className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 border border-white/10 hover:border-white/30 text-white font-bold px-7 py-4 rounded-full transition-all duration-200"
          >
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
              />
            </svg>
            Go Home
          </Link>

          {/* Contact us */}
          <Link
            href="/contact"
            className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 border border-white/10 hover:border-white/30 text-white font-bold px-7 py-4 rounded-full transition-all duration-200"
          >
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
              />
            </svg>
            Contact Us
          </Link>
        </div>
      </div>
    </main>
  );
}
