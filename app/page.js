'use client';

import * as React from "react";
import HomeTemplate from "../components/HomeTemplate";
import { registerComponents } from "../plasmic-init";

/**
 * HOME PAGE: ASYNC CLIENT SHELL
 */
export default function Page() {
  const [ready, setReady] = React.useState(false);

  React.useEffect(() => {
    const init = async () => {
      await registerComponents();
      setReady(true);
    };
    init();
  }, []);
  
  // We render the template immediately (it doesn't need registration for basic HTML)
  // But registration activates the interaction features
  return <HomeTemplate />;
}
