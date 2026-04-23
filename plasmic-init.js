import { initPlasmicLoader } from "@plasmicapp/loader-nextjs";

/**
 * JEWISH TEEN CAMP PLASMIC CONFIG
 * Project: fBPwvBQ6Zs5GG7HUEDfovK
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
 * COMPONENT REGISTRATION
 * Registering our industrial blocks to the new project.
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
  await safeRegister(import("./components/sections/MissionSection"), "MissionBlock");
  await safeRegister(import("./components/sections/OriginsSection"), "OriginsBlock");
  await safeRegister(import("./components/sections/FacilitiesSection"), "FacilitiesBlock");
  await safeRegister(import("./components/sections/CultureSection"), "CultureBlock");
  await safeRegister(import("./components/sections/SafetySection"), "SafetyBlock");
  await safeRegister(import("./components/sections/StaffSection"), "StaffBlock");
  await safeRegister(import("./components/sections/FAQSection"), "FAQBlock");
  await safeRegister(import("./components/sections/TestimonialsSection"), "TestimonialsBlock");
  
  // Root Template
  await safeRegister(import("./components/HomeTemplate"), "FullHomeTemplate");
}
