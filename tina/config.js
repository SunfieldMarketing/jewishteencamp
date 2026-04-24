import { defineConfig } from "tinacms";

export default defineConfig({
  branch: "main",
  clientId: null,
  token: null,
  build: {
    outputFolder: "admin",
    publicFolder: "public",
  },
  media: {
    tina: {
      mediaRoot: "images",
      publicFolder: "public",
    },
  },
  schema: {
    collections: [
      {
        name: "homepage",
        label: "Homepage",
        path: "content/homepage",
        format: "json",
        ui: {
          router: ({ document }) => {
            return "/";
          },
        },
        fields: [
          {
            type: "string",
            name: "heroTitle",
            label: "Hero Title",
          },
          {
            type: "string",
            name: "heroSubtitle",
            label: "Hero Subtitle",
            ui: { component: "textarea" },
          },
          {
            type: "string",
            name: "heroQuote",
            label: "Hero Quote",
            ui: { component: "textarea" },
          },
          {
            type: "object",
            list: true,
            name: "stats",
            label: "Stats Bar",
            ui: { itemProps: (item) => ({ label: item?.label }) },
            fields: [
              { type: "string", name: "label", label: "Label" },
              { type: "number", name: "value", label: "Value" },
              { type: "string", name: "suffix", label: "Suffix" },
            ],
          },
        ],
      },
    ],
  },
});
