import { initPlasmicLoader } from "@plasmicapp/loader-nextjs";

/**
 * JEWISH TEEN CAMP PLASMIC CONFIG
 * This file handles the bridge between your code and the Plasmic Visual Editor.
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

// Component Registration
// We use a try-catch and careful imports to ensure the build never fails
export function registerComponents() {
  try {
    // 1. Navbar & Footer
    const Navbar = require("./components/Navbar").default;
    const Footer = require("./components/Footer").default;
    PLASMIC.registerComponent(Navbar, { name: "Navbar", props: {} });
    PLASMIC.registerComponent(Footer, { name: "Footer", props: {} });

    // 2. Hero
    const Hero = require("./components/Hero").default;
    PLASMIC.registerComponent(Hero, {
      name: "HeroSection",
      props: {
        title: { type: "string", defaultValue: "Make a Lifelong Investment in Your Teen" },
        subtitle: { type: "string", defaultValue: "Chicago's premier Jewish day camp." },
      },
    });

    // 3. Main Sections
    const ContactForm = require("./components/ContactForm").default;
    const ProgramGrid = require("./components/ProgramGrid").default;
    const PricingTable = require("./components/PricingTable").default;
    const MissionSection = require("./components/sections/MissionSection").default;
    const OriginsSection = require("./components/sections/OriginsSection").default;
    const FacilitiesSection = require("./components/sections/FacilitiesSection").default;
    const CultureSection = require("./components/sections/CultureSection").default;
    const SafetySection = require("./components/sections/SafetySection").default;
    const StaffSection = require("./components/sections/StaffSection").default;
    const FAQSection = require("./components/sections/FAQSection").default;
    const TestimonialsSection = require("./components/sections/TestimonialsSection").default;
    const HomeTemplate = require("./components/HomeTemplate").default;

    PLASMIC.registerComponent(ContactForm, { name: "ContactForm", props: {} });
    PLASMIC.registerComponent(ProgramGrid, { name: "ProgramGrid", props: {} });
    PLASMIC.registerComponent(PricingTable, { name: "PricingTable", props: {} });
    PLASMIC.registerComponent(MissionSection, { name: "MissionBlock", props: {} });
    PLASMIC.registerComponent(OriginsSection, { name: "OriginsBlock", props: {} });
    PLASMIC.registerComponent(FacilitiesSection, { name: "FacilitiesBlock", props: {} });
    PLASMIC.registerComponent(CultureSection, { name: "CultureBlock", props: {} });
    PLASMIC.registerComponent(SafetySection, { name: "SafetyBlock", props: {} });
    PLASMIC.registerComponent(StaffSection, { name: "StaffBlock", props: {} });
    PLASMIC.registerComponent(FAQSection, { name: "FAQBlock", props: {} });
    PLASMIC.registerComponent(TestimonialsSection, { name: "TestimonialsBlock", props: {} });
    PLASMIC.registerComponent(HomeTemplate, { name: "FullHomeTemplate", props: {} });

  } catch (err) {
    console.warn("Plasmic components not registered during build analysis.");
  }
}

// Global registration
registerComponents();
