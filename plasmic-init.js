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

/**
 * JEWISH TEEN CAMP DESIGN SYSTEM
 * Custom components registered for visual editing in Plasmic Studio.
 */

// --- 1. CORE LAYOUT ---
PLASMIC.registerComponent(Navbar, {
  name: "Navbar",
  props: {},
});

PLASMIC.registerComponent(Footer, {
  name: "Footer",
  props: {},
});

// --- 2. HERO & CTA ---
PLASMIC.registerComponent(Hero, {
  name: "HeroSection",
  props: {
    title: { type: "string", defaultValue: "Make a Lifelong Investment in Your Teen" },
    subtitle: { type: "string", defaultValue: "Chicago's premier Jewish day camp for teens ages 12-17." },
  },
});

PLASMIC.registerComponent(ContactForm, {
  name: "ContactForm",
  props: {},
});

// --- 3. PAGE BLOCKS ---
PLASMIC.registerComponent(ProgramGrid, {
  name: "ProgramGrid",
  props: {},
});

PLASMIC.registerComponent(PricingTable, {
  name: "PricingTable",
  props: {},
});

PLASMIC.registerComponent(MissionSection, {
  name: "MissionBlock",
  props: {},
});

PLASMIC.registerComponent(OriginsSection, {
  name: "OriginsBlock",
  props: {},
});

PLASMIC.registerComponent(FacilitiesSection, {
  name: "FacilitiesBlock",
  props: {},
});

PLASMIC.registerComponent(CultureSection, {
  name: "CultureBlock",
  props: {},
});

PLASMIC.registerComponent(SafetySection, {
  name: "SafetyBlock",
  props: {},
});

PLASMIC.registerComponent(StaffSection, {
  name: "StaffBlock",
  props: {},
});

PLASMIC.registerComponent(FAQSection, {
  name: "FAQBlock",
  props: {},
});

PLASMIC.registerComponent(TestimonialsSection, {
  name: "TestimonialsBlock",
  props: {},
});

// --- 4. FULL PAGE TEMPLATES ---
PLASMIC.registerComponent(HomeTemplate, {
  name: "FullHomeTemplate",
  description: "The complete themed home page as a single block.",
  props: {},
});
