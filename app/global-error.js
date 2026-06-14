'use client';

import { useEffect } from 'react';

// global-error catches crashes in the root layout itself.
// It must include its own <html> and <body> tags.
export default function GlobalError({ error, reset }) {
  useEffect(() => {
    console.error('[Global Error]', error);
  }, [error]);

  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Something Went Wrong | Chicago Jewish Teen Camp</title>
        <style>{`
          *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
          body {
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
            background: #0f1f3d;
            color: #ffffff;
            min-height: 100vh;
            display: flex;
            align-items: center;
            justify-content: center;
            padding: 2rem;
          }
          .container { text-align: center; max-width: 560px; }
          .icon {
            width: 72px; height: 72px;
            background: rgba(239,68,68,0.15);
            border: 1px solid rgba(239,68,68,0.3);
            border-radius: 16px;
            display: flex; align-items: center; justify-content: center;
            margin: 0 auto 2rem;
          }
          h1 { font-size: 2rem; font-weight: 700; margin-bottom: 1rem; }
          p { color: #93c5fd; line-height: 1.7; margin-bottom: 2rem; }
          .digest { color: #4b5563; font-size: 0.75rem; font-family: monospace; margin-bottom: 2rem; }
          .actions { display: flex; flex-wrap: wrap; gap: 0.75rem; justify-content: center; }
          button, a {
            display: inline-flex; align-items: center; gap: 0.5rem;
            padding: 0.875rem 1.75rem;
            border-radius: 9999px;
            font-size: 0.9rem; font-weight: 700;
            text-decoration: none;
            cursor: pointer;
            transition: all 0.2s;
          }
          .btn-primary {
            background: #c8921a; color: #fff; border: none;
          }
          .btn-primary:hover { background: #a87315; }
          .btn-ghost {
            background: rgba(255,255,255,0.08);
            color: #fff;
            border: 1px solid rgba(255,255,255,0.12);
          }
          .btn-ghost:hover { background: rgba(255,255,255,0.15); }
        `}</style>
      </head>
      <body>
        <div className="container">
          <div className="icon">
            <svg width="36" height="36" fill="none" viewBox="0 0 24 24" stroke="#f87171" strokeWidth="1.5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z" />
            </svg>
          </div>

          <h1>Something Went Wrong</h1>
          <p>
            A critical error occurred. Please try refreshing the page. If the problem
            continues, contact us at{' '}
            <a href="mailto:RabbiZalman@chabadmammoth.com" style={{ color: '#c8921a' }}>
              RabbiZalman@chabadmammoth.com
            </a>{' '}
            or call{' '}
            <a href="tel:+18474524609" style={{ color: '#c8921a' }}>
              (847) 452-4609
            </a>.
          </p>

          {error?.digest && (
            <p className="digest">Reference: {error.digest}</p>
          )}

          <div className="actions">
            <button className="btn-primary" onClick={() => reset()}>
              Try Again
            </button>
            <a className="btn-ghost" href="/">
              Go to Homepage
            </a>
          </div>
        </div>
      </body>
    </html>
  );
}
