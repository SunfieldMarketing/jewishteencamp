import { initPlasmicLoader } from "@plasmicapp/loader-nextjs";

/**
 * JEWISH TEEN CAMP PLASMIC CONFIG
 */

export const PLASMIC = initPlasmicLoader({
  projects: [
    {
      id: "b6ZtAXBJJhXXQfhuHqtgD3",
      token: "2JQmNXnnZ4YLjem659unvYf5pY7T62N8vIaRSsGVI5IBwrYf82RTT94Rv8R3GJJEuDf1W2eMzq8Wb9NUKpqkQ",
    },
  ],
  preview: true,
});

/**
 * ULTR-HARDENED REGISTRATION
 * Individually wraps every component to prevent a single 'Red Dot' error 
 * from crashing the whole Studio registration.
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
      console.warn(`Plasmic Shield: Skipping ${name} due to load error.`);
    }
  };

  // Layout
  await safeRegister(import("./components/Navbar"), "Navbar");
  await safeRegister(import("./components/Footer"), "Footer");

  // Hero & Blocks
  await safeRegister(import("./components/Hero"), "HeroSection", {
    title: { type: "string", defaultValue: "Chicago Jewish Teens" },
    subtitle: { type: "string" },
  });

  await safeRegister(import("./components/ContactForm"), "ContactForm");
  await safeRegister(import("./components/ProgramGrid"), "ProgramGrid");
  await safeRegister(import("./components/PricingTable"), "PricingTable");
  
  // Section Blocks
  await safeRegister(import("./components/sections/MissionSection"), "MissionBlock");
  await safeRegister(import("./components/sections/OriginsSection"), "OriginsBlock");
  await safeRegister(import("./components/sections/FacilitiesSection"), "FacilitiesBlock");
  await safeRegister(import("./components/sections/CultureSection"), "CultureBlock");
  await safeRegister(import("./components/sections/SafetySection"), "SafetyBlock");
  await safeRegister(import("./components/sections/StaffSection"), "StaffBlock");
  await safeRegister(import("./components/sections/FAQSection"), "FAQBlock");
  await safeRegister(import("./components/sections/TestimonialsSection"), "TestimonialsBlock");
  
  // Template
  await safeRegister(import("./components/HomeTemplate"), "FullHomeTemplate");
}
