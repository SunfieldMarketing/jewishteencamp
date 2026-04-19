"use client";
import React from "react";
import { useTina } from "tinacms/dist/react";
import { HeroBlock } from "../components/blocks/Hero";
import { StatsBlock } from "../components/blocks/Stats";
import { FAQBlock } from "../components/blocks/FAQ";

export default function HomeClient({ props }) {
  const { data } = useTina({
    query: props.query,
    variables: props.variables,
    data: props.data,
  });

  const [isMounted, setIsMounted] = React.useState(false);
  React.useEffect(() => setIsMounted(true), []);
  if (!isMounted) return null;

  return (
    <div className="page-builder">
      {data.page.blocks?.map((block, i) => {
        // Use either __typename OR _template for maximum reliability
        const type = block.__typename || block._template;
        console.log("Rendering block:", type);

        switch (type) {
          case "PageBlocksHero":
          case "hero":
            return <HeroBlock key={i} data={block} />;
          case "PageBlocksStats":
          case "stats":
            return <StatsBlock key={i} data={block} />;
          case "PageBlocksFaq":
          case "faq":
            return <FAQBlock key={i} data={block} />;
          default:
            return (
              <div key={i} className="p-10 bg-gray-100 text-center border-2 border-dashed border-gray-300">
                Unknown Block Type: {type}
              </div>
            );
        }
      })}
    </div>
  );
}
