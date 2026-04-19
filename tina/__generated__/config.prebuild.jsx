// tina/config.js
import { defineConfig } from "tinacms";
var config_default = defineConfig({
  branch: process.env.HEAD || process.env.VERCEL_GIT_COMMIT_REF || "main",
  clientId: process.env.NEXT_PUBLIC_TINA_CLIENT_ID || null,
  token: process.env.TINA_TOKEN || null,
  build: {
    outputFolder: "admin",
    publicFolder: "public"
  },
  media: {
    tina: {
      mediaRoot: "uploads",
      publicFolder: "public"
    }
  },
  schema: {
    collections: [
      {
        name: "page",
        label: "Pages",
        path: "content/pages",
        format: "md",
        ui: {
          router: ({ document }) => {
            if (document._sys.filename === "home") {
              return "/";
            }
            return void 0;
          }
        },
        fields: [
          {
            type: "string",
            name: "title",
            label: "Internal Page Title",
            isTitle: true,
            required: true
          },
          {
            type: "object",
            list: true,
            name: "blocks",
            label: "Sections",
            templates: [
              {
                name: "hero",
                label: "Hero Section",
                fields: [
                  { type: "string", name: "title", label: "Title" },
                  { type: "string", name: "description", label: "Description", ui: { component: "textarea" } },
                  { type: "string", name: "badgeText", label: "Badge Text" },
                  { type: "image", name: "backgroundImage", label: "Background Image" },
                  { type: "string", name: "primaryLabel", label: "Button Label" },
                  { type: "string", name: "primaryLink", label: "Button Link" }
                ]
              },
              {
                name: "stats",
                label: "Stats Bar",
                fields: [
                  {
                    type: "object",
                    list: true,
                    name: "stats",
                    label: "Stats",
                    fields: [
                      { type: "number", name: "value", label: "Value" },
                      { type: "string", name: "suffix", label: "Suffix" },
                      { type: "string", name: "label", label: "Label" }
                    ]
                  }
                ]
              },
              {
                name: "about",
                label: "About Us Section",
                fields: [
                  { type: "string", name: "heading", label: "Heading" },
                  { type: "string", name: "subheading", label: "Subheading" },
                  { type: "string", name: "p1", label: "Paragraph 1", ui: { component: "textarea" } },
                  { type: "string", name: "p2", label: "Paragraph 2", ui: { component: "textarea" } },
                  { type: "image", name: "image", label: "Section Image" }
                ]
              },
              {
                name: "activities",
                label: "Activities Grid",
                fields: [
                  { type: "string", name: "heading", label: "Heading" },
                  { type: "string", name: "subheading", label: "Subheading" },
                  {
                    type: "object",
                    list: true,
                    name: "activities",
                    label: "Activity Cards",
                    fields: [
                      { type: "string", name: "title", label: "Title" },
                      { type: "string", name: "desc", label: "Description", ui: { component: "textarea" } },
                      { type: "string", name: "icon", label: "Icon Name (TentIcon, WaveIcon, SportsIcon, etc.)" },
                      { type: "string", name: "bg", label: "Icon Background Color (e.g., #dbeafe)" },
                      { type: "string", name: "color", label: "Icon Color (e.g., #1d4ed8)" }
                    ]
                  }
                ]
              },
              {
                name: "faq",
                label: "FAQ Section",
                fields: [
                  { type: "string", name: "heading", label: "Heading" },
                  { type: "string", name: "subheading", label: "Subheading" },
                  {
                    type: "object",
                    list: true,
                    name: "faqs",
                    label: "FAQs",
                    fields: [
                      { type: "string", name: "q", label: "Question" },
                      { type: "string", name: "a", label: "Answer", ui: { component: "textarea" } }
                    ]
                  }
                ]
              }
            ]
          }
        ]
      }
    ]
  }
});
export {
  config_default as default
};
