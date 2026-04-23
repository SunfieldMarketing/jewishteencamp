import { initPlasmicLoader } from "@plasmicapp/loader-nextjs";

// Page Layouts
import HomeTemplate from "./components/HomeTemplate";

// Core Layout
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

// Section Blocks
import Hero from "./components/Hero";
import ContactForm from "./components/ContactForm";
import ProgramGrid from "./components/ProgramGrid";
import PricingTable from "./components/PricingTable";
import MissionSection from "./components/sections/MissionSection";
import OriginsSection from "./components/sections/OriginsSection";
import FacilitiesSection from "./components/sections/FacilitiesSection";
import CultureSection from "./components/sections/CultureSection";
import SafetySection from "./components/sections/SafetySection";
import StaffSection from "./components/sections/StaffSection";
import FAQSection from "./components/sections/FAQSection";
import TestimonialsSection from "./components/sections/TestimonialsSection";

export const PLASMIC = initPlasmicLoader({
  projects: [
    {
      id: "fBPwvBQ6Zs5GG7HUEDfovK",
      token: "7pce0ksh7FtkpYoMRammUOYbeO5WVTEJG9Gvbg9CEf6FVTNiEvwawAfHQsRhTW4i2NtnGokEEsMZ1j8ttgeg",
    },
  ],
  preview: true,
});

// Register Custom Components 
// Simplified registration to clear "Red Dot" and fix black screen
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
