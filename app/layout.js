import '../styles/globals.css';
import LayoutClient from '../components/LayoutClient';

export const metadata = {
  metadataBase: new URL('https://www.chicagojewishteens.com'),
  title: {
    default: 'Chicago Jewish Teen Camp | Premier Jewish Day Camp in Beverly Hills, CA',
    template: '%s | Chicago Jewish Teen Camp',
  },
  description:
    'Chicago Jewish Teen Camp offers an unforgettable summer day camp experience for Jewish teens ages 12–17 in Beverly Hills, CA. Adventures, sports, overnight trips, Shabbatons, and rich Jewish culture. Enroll now!',
  keywords: [
    'Jewish teen camp California',
    'Jewish day camp Beverly Hills',
    'teen summer camp Illinois',
    'Jewish summer camp California',
    'CGI camp California',
    'teen camp Beverly Hills IL',
    'Chicago Jewish Teen Camp',
  ],
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://www.chicagojewishteens.com',
    siteName: 'Chicago Jewish Teen Camp',
    title: 'Chicago Jewish Teen Camp | Premier Jewish Day Camp in Beverly Hills, CA',
    description:
      'An unforgettable summer day camp for Jewish teens ages 12–17 in Beverly Hills, CA. Adventures, sports, trips, and authentic Jewish culture.',
    images: [
      {
        url: 'https://res.cloudinary.com/dai2pg27n/image/upload/v1775248027/Screenshot_2026-04-03_162553_xodsyd.png',
        width: 1200,
        height: 630,
        alt: 'Chicago Jewish Teen Camp Summer Camp',
      },
    ],
  },
};

export default function RootLayout({ children }) {
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
      <LayoutClient>{children}</LayoutClient>
    </html>
  );
}
