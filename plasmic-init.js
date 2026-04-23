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
 * Registering our industrial blocks synchronously.
 */

// Layout & Global Sections
import Navbar from "./components/Navbar";
PLASMIC.registerComponent(Navbar, { name: "Navbar", importPath: "./components/Navbar", props: {} });

import Footer from "./components/Footer";
PLASMIC.registerComponent(Footer, { name: "Footer", importPath: "./components/Footer", props: {} });

import Hero from "./components/Hero";
PLASMIC.registerComponent(Hero, { 
  name: "HeroSection", 
  importPath: "./components/Hero",
  props: {
    title: { type: "string", defaultValue: "Chicago Jewish Teens" },
    subtitle: { type: "string" },
  } 
});

// Functional Blocks
import ContactForm from "./components/ContactForm";
PLASMIC.registerComponent(ContactForm, { name: "ContactForm", importPath: "./components/ContactForm", props: {} });

import ProgramGrid from "./components/ProgramGrid";
PLASMIC.registerComponent(ProgramGrid, { name: "ProgramGrid", importPath: "./components/ProgramGrid", props: {} });

import PricingTable from "./components/PricingTable";
PLASMIC.registerComponent(PricingTable, { name: "PricingTable", importPath: "./components/PricingTable", props: {} });

// Content Modules
import MissionSection from "./components/sections/MissionSection";
PLASMIC.registerComponent(MissionSection, { name: "MissionBlock", importPath: "./components/sections/MissionSection", props: {} });

import OriginsSection from "./components/sections/OriginsSection";
PLASMIC.registerComponent(OriginsSection, { name: "OriginsBlock", importPath: "./components/sections/OriginsSection", props: {} });

import FacilitiesSection from "./components/sections/FacilitiesSection";
PLASMIC.registerComponent(FacilitiesSection, { name: "FacilitiesBlock", importPath: "./components/sections/FacilitiesSection", props: {} });

import CultureSection from "./components/sections/CultureSection";
PLASMIC.registerComponent(CultureSection, { name: "CultureBlock", importPath: "./components/sections/CultureSection", props: {} });

import SafetySection from "./components/sections/SafetySection";
PLASMIC.registerComponent(SafetySection, { name: "SafetyBlock", importPath: "./components/sections/SafetySection", props: {} });

import StaffSection from "./components/sections/StaffSection";
PLASMIC.registerComponent(StaffSection, { name: "StaffBlock", importPath: "./components/sections/StaffSection", props: {} });

import FAQSection from "./components/sections/FAQSection";
PLASMIC.registerComponent(FAQSection, { name: "FAQBlock", importPath: "./components/sections/FAQSection", props: {} });

import TestimonialsSection from "./components/sections/TestimonialsSection";
PLASMIC.registerComponent(TestimonialsSection, { name: "TestimonialsBlock", importPath: "./components/sections/TestimonialsSection", props: {} });

// Root Template
import HomeTemplate from "./components/HomeTemplate";
PLASMIC.registerComponent(HomeTemplate, { name: "FullHomeTemplate", importPath: "./components/HomeTemplate", props: {} });
