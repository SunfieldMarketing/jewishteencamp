"use client";
import { BuilderComponent } from "@builder.io/react";
import "../lib/builder"; // Import registration

export function RenderBuilderContent({ content, model }) {
  return <BuilderComponent content={content} model={model} />;
}
