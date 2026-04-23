import { initPlasmicLoader } from "@plasmicapp/loader-nextjs";

/**
 * JEWISH TEEN CAMP PLASMIC CONFIG
 * Project: b6ZtAXBJJhXXQfhuHqtgD3
 */

export const PLASMIC = initPlasmicLoader({
  projects: [
    {
      id: "b6ZtAXBJJhXXQfhuHqtgD3",
      token: "2JQmNXnnZ4YLjem659unvYf5pY7T62N8vIaRSsGVI5IBwrYf82RTT94Rv8R3GJJEuDf1W2eMzq8Wb9NUKpqkQ",
    },
  ],
  // preview: true allows you to see unpublished changes in the Studio
  preview: true,
});

/**
 * ASYNC COMPONENT REGISTRATION
 * Individually wrapped to ensure total Studio stability.
 */
export async function registerComponents() {
  if (typeof window === 'undefined') return;

  const safeRegister = async (importPromise, name, props = {}) => {
    try {
      const module = await importPromise;
      const component = module.default || module;
      if (component) {
        PLASMIC.registerComponent(component, { name, props });
      }
    } catch (e) {
      console.warn(`Plasmic Shield: Skipping ${name}`);
    }
  };

  // Layout & Global Sections
  await safeRegister(import("./components/Navbar"), "Navbar");
  await safeRegister(import("./components/Footer"), "Footer");
  await safeRegister(import("./components/Hero"), "HeroSection", {
    title: { type: "string", defaultValue: "Chicago Jewish Teens" },
    subtitle: { type: "string" },
  });

  // Functional Blocks
  await safeRegister(import("./components/ContactForm"), "ContactForm");
  await safeRegister(import("./components/ProgramGrid"), "ProgramGrid");
  await safeRegister(import("./components/PricingTable"), "PricingTable");
  
  // Content Modules
  await safeRegister(import("./components/sections/MissionSection"), "MissionBlock", { props: {} });
  await safeRegister(import("./components/sections/OriginsSection"), "OriginsBlock", { props: {} });
  await safeRegister(import("./components/sections/FacilitiesSection"), "FacilitiesBlock", { props: {} });
  await safeRegister(import("./components/sections/CultureSection"), "CultureBlock", { props: {} });
  await safeRegister(import("./components/sections/SafetySection"), "SafetyBlock", { props: {} });
  await safeRegister(import("./components/sections/StaffSection"), "StaffBlock", { props: {} });
  await safeRegister(import("./components/sections/FAQSection"), "FAQBlock", { props: {} });
  await safeRegister(import("./components/sections/TestimonialsSection"), "TestimonialsBlock", { props: {} });
  
  // Root Template
  await safeRegister(import("./components/HomeTemplate"), "FullHomeTemplate", { props: {} });
}
