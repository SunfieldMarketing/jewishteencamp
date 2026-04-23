import { initPlasmicLoader } from "@plasmicapp/loader-nextjs";

/**
 * JEWISH TEEN CAMP PLASMIC CONFIG
 * Connected to Fresh Project: b6ZtAXBJJhXXQfhuHqtgD3
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
 * ASYNC COMPONENT REGISTRATION
 * This ensures all your local designs (Navbar, Hero, Blocks) 
 * show up in your BRAND NEW Plasmic project automatically.
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
