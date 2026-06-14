'use client';

import * as React from "react";
import dynamic from "next/dynamic";
import { PLASMIC } from "../../plasmic-init";

const PlasmicComponent = dynamic(
  () => import("@plasmicapp/loader-nextjs").then(mod => mod.PlasmicComponent),
  { ssr: false }
);

const PlasmicRootProvider = dynamic(
  () => import("@plasmicapp/loader-nextjs").then(mod => mod.PlasmicRootProvider),
  { ssr: false }
);

export default function PlasmicPage({ params }) {
  const [plasmicData, setPlasmicData] = React.useState(null);
  const [is404, setIs404] = React.useState(false);

  React.useEffect(() => {
    const load = async () => {
      const p = await params;
      const path = p.segments ? `/${p.segments.join("/")}` : "/";
      const data = await PLASMIC.maybeFetchComponentData(path);

      if (!data || !data.entryCompMetas?.length) {
        setIs404(true);
      } else {
        setPlasmicData(data);
      }
    };
    load();
  }, [params]);

  // Show branded 404
  if (is404) {
    return <NotFoundPage />;
  }

  // Still fetching
  if (!plasmicData) {
    return (
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh', background: '#0f1f3d' }}>
        <div style={{ width: '40px', height: '40px', border: '4px solid rgba(255,255,255,0.1)', borderTop: '4px solid #C8922A', borderRadius: '50%', animation: 'spin 0.8s linear infinite' }} />
        <style>{`@keyframes spin{to{transform:rotate(360deg)}}`}</style>
      </div>
    );
  }

  const pageMeta = plasmicData.entryCompMetas[0];
  return (
    <PlasmicRootProvider loader={PLASMIC} prefetchedData={plasmicData}>
      <PlasmicComponent component={pageMeta.displayName || pageMeta.name} />
    </PlasmicRootProvider>
  );
}

function NotFoundPage() {
  return (
    <main style={{
      minHeight: '100vh', background: '#0f1f3d',
      display: 'flex', alignItems: 'center', justifyContent: 'center',
      position: 'relative', overflow: 'hidden',
      fontFamily: 'Inter, system-ui, sans-serif',
      padding: '2rem',
    }}>
      {/* Glow blobs */}
      <div style={{ position: 'absolute', top: 0, right: 0, width: '384px', height: '384px', background: 'rgba(200,146,42,0.1)', borderRadius: '50%', filter: 'blur(80px)', transform: 'translate(40%,-40%)', pointerEvents: 'none' }} />
      <div style={{ position: 'absolute', bottom: 0, left: 0, width: '384px', height: '384px', background: 'rgba(59,130,246,0.07)', borderRadius: '50%', filter: 'blur(80px)', transform: 'translate(-40%,40%)', pointerEvents: 'none' }} />
      {/* Dot grid */}
      <div style={{ position: 'absolute', inset: 0, opacity: 0.04, backgroundImage: 'radial-gradient(circle, #fff 1px, transparent 1px)', backgroundSize: '28px 28px' }} />

      <div style={{ position: 'relative', zIndex: 10, textAlign: 'center', maxWidth: '560px', margin: '0 auto' }}>
        {/* Star of David */}
        <div style={{ width: '72px', height: '72px', background: 'rgba(200,146,42,0.15)', border: '1px solid rgba(200,146,42,0.3)', borderRadius: '16px', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 2rem' }}>
          <svg viewBox="0 0 24 24" fill="none" stroke="#C8922A" strokeWidth="1.5" strokeLinejoin="miter" strokeMiterlimit="10" style={{ width: '40px', height: '40px' }}>
            <path d="M12 2.5l7.5 13H4.5z" />
            <path d="M12 21.5l-7.5-13h15z" />
          </svg>
        </div>

        {/* Ghost 404 */}
        <div style={{ fontSize: 'clamp(5rem,18vw,8rem)', fontWeight: 900, color: 'rgba(255,255,255,0.06)', lineHeight: 1, fontFamily: 'Georgia, serif', userSelect: 'none', marginBottom: '-0.5rem' }}>
          404
        </div>

        <h1 style={{ fontSize: '2rem', fontWeight: 700, color: '#fff', fontFamily: 'Georgia, serif', marginBottom: '1rem' }}>
          Page Not Found
        </h1>

        <p style={{ color: '#93c5fd', fontSize: '1.05rem', lineHeight: 1.7, maxWidth: '380px', margin: '0 auto 2.5rem' }}>
          Looks like this page took a detour on the way to camp. Let&apos;s get you back on track.
        </p>

        {/* Quick nav pills */}
        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '0.5rem', marginBottom: '2rem' }}>
          {[['/', 'Home'], ['/day-camp', 'Day Camp'], ['/social-events', 'Social Events'], ['/schedule', 'Schedule'], ['/contact', 'Contact']].map(([href, label]) => (
            <a key={href} href={href} style={{ padding: '0.5rem 1.2rem', background: 'rgba(255,255,255,0.08)', border: '1px solid rgba(255,255,255,0.12)', borderRadius: '9999px', color: '#fff', fontSize: '0.875rem', fontWeight: 500, textDecoration: 'none' }}>
              {label}
            </a>
          ))}
        </div>

        {/* Primary CTA */}
        <a href="/" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.6rem', background: '#C8922A', color: '#fff', fontWeight: 700, padding: '0.9rem 2rem', borderRadius: '9999px', textDecoration: 'none', fontSize: '1rem' }}>
          <svg style={{ width: '20px', height: '20px' }} fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
          </svg>
          Back to Home
        </a>
      </div>
    </main>
  );
}
