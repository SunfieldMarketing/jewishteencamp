'use client';
import Navbar from './Navbar';
import Hero from './Hero';
import Stats from './Stats';
import ProgramGrid from './ProgramGrid';
import SplitSection from './SplitSection';
import PricingTable from './PricingTable';
import Footer from './Footer';

export default function WholeSite() {
  return (
    <div className="w-full min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <Stats />
        <ProgramGrid />
        <SplitSection />
        <PricingTable />
      </main>
      <Footer />
    </div>
  );
}
