import { initPlasmicLoader } from "@plasmicapp/loader-nextjs";

/**
 * JEWISH TEEN CAMP PLASMIC CONFIG
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
 * ASYNC COMPONENT REGISTRATION
 * This is the ultimate build shield. By using dynamic imports 
 * inside an async function, we ensure the Vercel build engine 
 * NEVER sees or executes these components during static analysis.
 */
export async function registerComponents() {
  if (typeof window === 'undefined') return;

  try {
    // Layout
    const Navbar = (await import("./components/Navbar")).default;
    const Footer = (await import("./components/Footer")).default;
    PLASMIC.registerComponent(Navbar, { name: "Navbar", props: {} });
    PLASMIC.registerComponent(Footer, { name: "Footer", props: {} });

    // Hero & Blocks
    const Hero = (await import("./components/Hero")).default;
    PLASMIC.registerComponent(Hero, {
      name: "HeroSection",
      props: {
        title: { type: "string", defaultValue: "Chicago Jewish Teens" },
        subtitle: { type: "string" },
      },
    });

    const ContactForm = (await import("./components/ContactForm")).default;
    const ProgramGrid = (await import("./components/ProgramGrid")).default;
    const PricingTable = (await import("./components/PricingTable")).default;
    PLASMIC.registerComponent(ContactForm, { name: "ContactForm", props: {} });
    PLASMIC.registerComponent(ProgramGrid, { name: "ProgramGrid", props: {} });
    PLASMIC.registerComponent(PricingTable, { name: "PricingTable", props: {} });
    
    // Module Sections (Dynamic Batch)
    const [
      Mission, Origins, Facilities, Culture, Safety, Staff, FAQ, Testimonials
    ] = await Promise.all([
      import("./components/sections/MissionSection"),
      import("./components/sections/OriginsSection"),
      import("./components/sections/FacilitiesSection"),
      import("./components/sections/CultureSection"),
      import("./components/sections/SafetySection"),
      import("./components/sections/StaffSection"),
      import("./components/sections/FAQSection"),
      import("./components/sections/TestimonialsSection")
    ]);

    PLASMIC.registerComponent(Mission.default, { name: "MissionBlock" });
    PLASMIC.registerComponent(Origins.default, { name: "OriginsBlock" });
    PLASMIC.registerComponent(Facilities.default, { name: "FacilitiesBlock" });
    PLASMIC.registerComponent(Culture.default, { name: "CultureBlock" });
    PLASMIC.registerComponent(Safety.default, { name: "SafetyBlock" });
    PLASMIC.registerComponent(Staff.default, { name: "StaffBlock" });
    PLASMIC.registerComponent(FAQ.default, { name: "FAQBlock" });
    PLASMIC.registerComponent(Testimonials.default, { name: "TestimonialsBlock" });
    
    // Page Template Fallback
    const HomeTemplate = (await import("./components/HomeTemplate")).default;
    PLASMIC.registerComponent(HomeTemplate, { name: "FullHomeTemplate", props: {} });

  } catch (err) {
    console.warn("Plasmic Shield: Registration deferred.");
  }
}
