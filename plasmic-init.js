import { initPlasmicLoader } from "@plasmicapp/loader-nextjs";

/**
 * JEWISH TEEN CAMP PLASMIC CONFIG
 * Centralized loader configuration.
 */

export const PLASMIC = initPlasmicLoader({
  projects: [
    {
      id: "fBPwvBQ6Zs5GG7HUEDfovK",
      token: "7pce0ksh7FtkpYoMRammUOYbeO5WVTEJG9Gvbg9CEf6FVTNiEvwawAfHQsRhTW4i2NtnGokEEsMZ1j8ttgeg",
    },
  ],
  preview: true,
});

/**
 * Manual Component Registration
 * This version is ULTRA-SAFE for Vercel builds.
 * It strictly only runs in the browser.
 */
export function registerComponents() {
  // THE ULTIMATE BUILD SHIELD: 
  // Next.js static analysis will NOT execute this block.
  if (typeof window === 'undefined') return;

  try {
    // Layout
    PLASMIC.registerComponent(require("./components/Navbar").default, { name: "Navbar", props: {} });
    PLASMIC.registerComponent(require("./components/Footer").default, { name: "Footer", props: {} });

    // Hero & Blocks
    PLASMIC.registerComponent(require("./components/Hero").default, {
      name: "HeroSection",
      props: {
        title: { type: "string", defaultValue: "Chicago Jewish Teens" },
        subtitle: { type: "string" },
      },
    });

    PLASMIC.registerComponent(require("./components/ContactForm").default, { name: "ContactForm", props: {} });
    PLASMIC.registerComponent(require("./components/ProgramGrid").default, { name: "ProgramGrid", props: {} });
    PLASMIC.registerComponent(require("./components/PricingTable").default, { name: "PricingTable", props: {} });
    
    // Module Sections
    PLASMIC.registerComponent(require("./components/sections/MissionSection").default, { name: "MissionBlock", props: {} });
    PLASMIC.registerComponent(require("./components/sections/OriginsSection").default, { name: "OriginsBlock", props: {} });
    PLASMIC.registerComponent(require("./components/sections/FacilitiesSection").default, { name: "FacilitiesBlock", props: {} });
    PLASMIC.registerComponent(require("./components/sections/CultureSection").default, { name: "CultureBlock", props: {} });
    PLASMIC.registerComponent(require("./components/sections/SafetySection").default, { name: "SafetyBlock", props: {} });
    PLASMIC.registerComponent(require("./components/sections/StaffSection").default, { name: "StaffBlock", props: {} });
    PLASMIC.registerComponent(require("./components/sections/FAQSection").default, { name: "FAQBlock", props: {} });
    PLASMIC.registerComponent(require("./components/sections/TestimonialsSection").default, { name: "TestimonialsBlock", props: {} });
    
    // Page Template Fallback
    PLASMIC.registerComponent(require("./components/HomeTemplate").default, { name: "FullHomeTemplate", props: {} });

  } catch (err) {
    // Silently handle any registration skips
  }
}
