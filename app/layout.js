import '../styles/globals.css';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import StickyMobileButtons from '../components/StickyMobileButtons';
import TinaProvider from '../components/TinaProvider';

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
    'summer camp for teens',
    'Jewish teen program',
    'Bar Mitzvah program Chicago',
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
  twitter: {
    card: 'summary_large_image',
    title: 'Chicago Jewish Teens | Premier Jewish Day Camp',
    description:
      'An unforgettable summer day camp for Jewish teens in Northbrook, IL.',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: 'https://www.chicagojewishteens.com',
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
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'LocalBusiness',
              name: 'Chicago Jewish Teens',
              description:
                'Premier Jewish day camp for teens ages 12-17 in Northbrook, IL',
              url: 'https://www.chicagojewishteens.com',
              telephone: '+18474524609',
              email: 'zalman@chicagojewishteens.com',
              address: {
                '@type': 'PostalAddress',
                streetAddress: '2095 Landwehr Rd',
                addressLocality: 'Northbrook',
                addressRegion: 'IL',
                postalCode: '60062',
                addressCountry: 'US',
              },
              geo: {
                '@type': 'GeoCoordinates',
                latitude: '42.1294',
                longitude: '-87.8389',
              },
              openingHours: 'Mo-Fr 08:00-18:00',
              sameAs: [
                'https://www.facebook.com/ChicAgoJewishTeens/',
                'https://www.instagram.com/chicagojewishteens',
              ],
              priceRange: '$$',
            }),
          }}
        />
      </head>
      <body className="font-sans antialiased">
        <TinaProvider>
          <Navbar />
          <main>{children}</main>
          <Footer />
          <StickyMobileButtons />
        </TinaProvider>
      </body>
    </html>
  );
}
