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
        switch (block.__typename) {
          case "PageBlocksHero":
            return <HeroBlock key={i} data={block} />;
          case "PageBlocksStats":
            return <StatsBlock key={i} data={block} />;
          case "PageBlocksFaq":
            return <FAQBlock key={i} data={block} />;
          default:
            return null;
        }
      })}
    </div>
  );
}
