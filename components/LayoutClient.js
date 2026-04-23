'use client';
import { usePathname } from 'next/navigation';
import Navbar from './Navbar';
import Footer from './Footer';
import StickyMobileButtons from './StickyMobileButtons';

export default function LayoutClient({ children }) {
  const pathname = usePathname();
  const isPlasmicHost = pathname === '/plasmic-host';

  return (
    <body className="font-sans antialiased">
        {!isPlasmicHost && <Navbar />}
        <main>{children}</main>
        {!isPlasmicHost && <Footer />}
        {!isPlasmicHost && <StickyMobileButtons />}
    </body>
  );
}
