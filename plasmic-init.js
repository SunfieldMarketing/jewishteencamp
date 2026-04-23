import { initPlasmicLoader } from "@plasmicapp/loader-nextjs";
import ShimmerButton from "./components/ui/shimmer-button";
import Hero from "./components/Hero";
import Stats from "./components/Stats";
import SplitSection from "./components/SplitSection";
import ProgramGrid from "./components/ProgramGrid";
import PricingTable from "./components/PricingTable";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

export const PLASMIC = initPlasmicLoader({
  projects: [
    {
      id: process.env.PLASMIC_PROJECT_ID,
      token: process.env.PLASMIC_PROJECT_TOKEN,
    },
  ],
  preview: true,
});

PLASMIC.registerComponent(Navbar, {
  name: "Navbar",
  props: {},
});

PLASMIC.registerComponent(Footer, {
  name: "Footer",
  props: {},
});

PLASMIC.registerComponent(ShimmerButton, {
  name: "ShimmerButton",
  props: {
    children: "slot",
    href: "string",
    className: "string",
  },
});

PLASMIC.registerComponent(Hero, {
  name: "Hero",
  props: {
    tagline: "string",
    title: "string",
    subtitle: "string",
    ctaText: "string",
    ctaLink: "string",
    backgroundImage: "string",
  },
});

PLASMIC.registerComponent(Stats, {
  name: "Stats",
  props: {
    items: {
      type: "object",
      defaultValue: [
        { label: "Campers", value: "500" },
        { label: "Staff", value: "50" },
      ]
    }
  },
});

PLASMIC.registerComponent(SplitSection, {
  name: "SplitSection",
  props: {
    tagline: "string",
    heading: "string",
    body: "string",
    imageSide: {
      type: "choice",
      options: ["left", "right"],
      defaultValue: "left"
    },
    listItems: {
        type: "object",
        defaultValue: [{text: "Sample 1"}, {text: "Sample 2"}]
    }
  },
});

PLASMIC.registerComponent(ProgramGrid, {
  name: "ProgramGrid",
  props: {
    title: "string",
    items: {
      type: "object",
      defaultValue: [
        { title: 'Program 1', subtitle: 'Fun times', icon: '👦' },
        { title: 'Program 2', subtitle: 'Adventure', icon: '🌲' },
      ]
    }
  }
});

PLASMIC.registerComponent(PricingTable, {
  name: "PricingTable",
  props: {
    title: "string",
    plans: {
      type: "object",
      defaultValue: [
        { name: 'Plan A', price: '$100', period: '/w', features: ['Feature 1'] },
        { name: 'Plan B', price: '$200', period: '/w', features: ['Feature 1', 'Feature 2'] },
      ]
    }
  }
});
