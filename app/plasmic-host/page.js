'use client';
import { PlasmicCanvasHost } from "@plasmicapp/loader-nextjs";
import { PLASMIC } from "../../plasmic-init";
import { useEffect, useState } from "react";

export default function PlasmicHost() {
  const [status, setStatus] = useState("Initializing...");

  useEffect(() => {
    if (PLASMIC) {
      setStatus("Bridge Active - Connecting to Studio...");
    }
  }, []);

  return (
    <div className="relative">
      {/* Invisible bridge for Plasmic */}
      <PlasmicCanvasHost />
      
      {/* Small status indicator for us to debug */}
      <div className="fixed bottom-4 right-4 bg-black/80 text-white text-[10px] px-3 py-1 rounded-full z-50 pointer-events-none">
        Connection: {status}
      </div>
    </div>
  );
}
