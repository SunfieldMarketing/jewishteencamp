"use client";
import React from "react";
import { HeroBlock } from "../components/blocks/Hero";
import { StatsBlock } from "../components/blocks/Stats";
import { FAQBlock } from "../components/blocks/FAQ";
import { AboutBlock } from "../components/blocks/About";

export default function HomeClient({ data }) {
  const [isMounted, setIsMounted] = React.useState(false);
  React.useEffect(() => setIsMounted(true), []);
  
  if (!isMounted) return null;

  if (!data || !data.sections) {
    return (
      <div className="p-20 text-center border-4 border-dashed border-gold m-10 rounded-3xl">
        <h2 className="text-2xl font-bold text-gold mb-4">Welcome to Sanity.io!</h2>
        <p className="text-gray-600 mb-6">Your site has been migrated. Go to <span className="font-mono bg-gray-100 px-2 py-1">/admin</span> to create your first page.</p>
        <a href="/admin" className="btn-primary">Open Sanity Studio</a>
      </div>
    );
  }

  return (
    <div className="page-builder min-h-screen">
      {data.sections.map((section, i) => {
        const type = section._type;

        switch (type) {
          case "hero":
            return <HeroBlock key={i} data={section} />;
          case "stats":
            // Sanity might name the list "items" or "stats"
            return <StatsBlock key={i} data={{ stats: section.items }} />;
          case "about":
            return <AboutBlock key={i} data={section} />;
          case "faq":
            return <FAQBlock key={i} data={section} />;
          default:
            return (
              <div key={i} className="p-10 bg-gray-100 text-center border-2 border-dashed border-gray-300 m-4">
                Unknown Section Type: {type}
              </div>
            );
        }
      })}
    </div>
  );
}
