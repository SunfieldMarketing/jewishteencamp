import { initPlasmicLoader } from "@plasmicapp/loader-nextjs";
import Hero from "./components/Hero";
import ContactForm from "./components/ContactForm";
import ProgramGrid from "./components/ProgramGrid";
import PricingTable from "./components/PricingTable";

export const PLASMIC = initPlasmicLoader({
  projects: [
    {
      id: "fBPwvBQ6Zs5GG7HUEDfovK",
      token: "7pce0ksh7FtkpYoMRammUOYbeO5WVTEJG9Gvbg9CEf6FVTNiEvwawAfHQsRhTW4i2NtnGokEEsMZ1j8ttgeg",
    },
  ],
  preview: true, // Switched to true to ensure Studio can always see latest drafts
});

// Register Custom Components 
// These will now show up in the (+) menu in Plasmic Studio!
PLASMIC.registerComponent(Hero, {
  name: "HeroSection",
  props: {
    title: {
        type: "string",
        defaultValue: "Ultimate Summer Adventure"
    },
    subtitle: {
        type: "string",
        defaultValue: "For Boys & Girls Ages 12-17"
    },
  },
});

PLASMIC.registerComponent(ContactForm, {
  name: "ContactForm",
  props: {},
});

PLASMIC.registerComponent(ProgramGrid, {
  name: "ProgramGrid",
  props: {},
});

PLASMIC.registerComponent(PricingTable, {
  name: "PricingTable",
  props: {},
});
