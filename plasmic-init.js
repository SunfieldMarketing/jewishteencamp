import { initPlasmicLoader } from "@plasmicapp/loader-nextjs";

// Page Layouts - We don't import them here to avoid circular dependencies
// during the Vercel build's static analysis.

export const PLASMIC = initPlasmicLoader({
  projects: [
    {
      id: "fBPwvBQ6Zs5GG7HUEDfovK",
      token: "7pce0ksh7FtkpYoMRammUOYbeO5WVTEJG9Gvbg9CEf6FVTNiEvwawAfHQsRhTW4i2NtnGokEEsMZ1j8ttgeg",
    },
  ],
  preview: true,
});

// We register components using a helper to avoid top-level import crashes
export function registerAllComponents() {
  // Core Layout
  const Navbar = require("./components/Navbar").default;
  const Footer = require("./components/Footer").default;

  // Section Blocks
  const Hero = require("./components/Hero").default;
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

  PLASMIC.registerComponent(Navbar, { name: "Navbar", props: {} });
  PLASMIC.registerComponent(Footer, { name: "Footer", props: {} });
  PLASMIC.registerComponent(Hero, { name: "HeroSection", props: { title: "string", subtitle: "string" } });
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
}

// Initialize on first import
try {
  registerAllComponents();
} catch (e) {
  console.warn("Plasmic component registration skipped (likely build-time analysis)");
}
