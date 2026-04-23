'use client';
import { usePathname } from 'next/navigation';
import '../styles/globals.css';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import StickyMobileButtons from '../components/StickyMobileButtons';

export default function RootLayout({ children }) {
  const pathname = usePathname();
  const isPlasmicHost = pathname === '/plasmic-host';

  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&family=Playfair+Display:wght@400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
        <link rel="icon" href="/favicon.png" />
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />
        <meta name="theme-color" content="#1B3A6B" />
      </head>
      <body className="font-sans antialiased">
        {!isPlasmicHost && <Navbar />}
        <main>{children}</main>
        {!isPlasmicHost && <Footer />}
        {!isPlasmicHost && <StickyMobileButtons />}
      </body>
    </html>
  );
}
