'use client';

import * as React from "react";
import HomeTemplate from "../components/HomeTemplate";
import { registerComponents } from "../plasmic-init";

/**
 * HOME PAGE: CLIENT-SAFE SHELL
 * Converts the root to a Client Component to bypass build-time 
 * analysis of complex template component hierarchies.
 */
export default function Page() {
  React.useEffect(() => {
    // Only register on the client side
    registerComponents();
  }, []);
  
  return <HomeTemplate />;
}
