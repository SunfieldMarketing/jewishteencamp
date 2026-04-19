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
            label: "Hero Title",
            isTitle: true,
            required: true
          },
          {
            type: "image",
            name: "heroImage",
            label: "Hero Background Image"
          },
          {
            type: "string",
            name: "heroDescription",
            label: "Hero Description",
            ui: { component: "textarea" }
          },
          {
            type: "object",
            name: "heroButtons",
            label: "Hero Buttons",
            fields: [
              { type: "string", name: "primaryLabel", label: "Primary Button Label" },
              { type: "string", name: "primaryLink", label: "Primary Button Link" },
              { type: "string", name: "secondaryLabel", label: "Secondary Button Label" },
              { type: "string", name: "secondaryLink", label: "Secondary Button Link" }
            ]
          },
          {
            type: "string",
            name: "heroQuote",
            label: "Hero Quote",
            ui: { component: "textarea" }
          },
          {
            type: "string",
            name: "heroQuoteAuthor",
            label: "Hero Quote Author"
          },
          {
            type: "object",
            list: true,
            name: "stats",
            label: "Stats Bar",
            fields: [
              { type: "number", name: "value", label: "Value" },
              { type: "string", name: "suffix", label: "Suffix" },
              { type: "string", name: "label", label: "Label" }
            ]
          },
          {
            type: "object",
            name: "about",
            label: "About Section",
            fields: [
              { type: "string", name: "subheading", label: "Subheading" },
              { type: "string", name: "heading", label: "Heading" },
              { type: "string", name: "p1", label: "Paragraph 1", ui: { component: "textarea" } },
              { type: "string", name: "p2", label: "Paragraph 2", ui: { component: "textarea" } },
              { type: "image", name: "image", label: "Image" }
            ]
          },
          {
            type: "object",
            list: true,
            name: "activities",
            label: "Activities",
            fields: [
              { type: "string", name: "title", label: "Title" },
              { type: "string", name: "desc", label: "Description", ui: { component: "textarea" } },
              { type: "string", name: "icon", label: "Icon Name (from Icons.js)" },
              { type: "string", name: "bg", label: "Background Color" },
              { type: "string", name: "color", label: "Icon Color" }
            ]
          },
          {
            type: "object",
            list: true,
            name: "testimonials",
            label: "Testimonials",
            fields: [
              { type: "string", name: "quote", label: "Quote", ui: { component: "textarea" } },
              { type: "string", name: "name", label: "Name" },
              { type: "string", name: "location", label: "Location" }
            ]
          },
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
});
export {
  config_default as default
};
