import '../styles/globals.css';
import LayoutClient from '../components/LayoutClient';

export const metadata = {
  metadataBase: new URL('https://www.chicagojewishteens.com'),
  title: {
    default: 'Chicago Jewish Teens | Premier Jewish Day Camp in Northbrook, IL',
    template: '%s | Chicago Jewish Teens',
  },
  description:
    'Chicago Jewish Teens offers an unforgettable summer day camp experience for Jewish teens ages 12–17 in Northbrook, IL. Adventures, sports, overnight trips, Shabbatons, and rich Jewish culture. Enroll now!',
  keywords: [
    'Jewish teen camp Chicago',
    'Jewish day camp Northbrook',
    'teen summer camp Illinois',
    'Jewish summer camp Chicago',
    'CGI camp Chicago',
    'teen camp Northbrook IL',
    'Chicago Jewish Teens',
  ],
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://www.chicagojewishteens.com',
    siteName: 'Chicago Jewish Teens',
    title: 'Chicago Jewish Teens | Premier Jewish Day Camp in Northbrook, IL',
    description:
      'An unforgettable summer day camp for Jewish teens ages 12–17 in Northbrook, IL. Adventures, sports, trips, and authentic Jewish culture.',
    images: [
      {
        url: 'https://res.cloudinary.com/dai2pg27n/image/upload/v1775248027/Screenshot_2026-04-03_162553_xodsyd.png',
        width: 1200,
        height: 630,
        alt: 'Chicago Jewish Teens Summer Camp',
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
