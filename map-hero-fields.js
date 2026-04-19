const fs = require('fs');

// 1. Update tina/config.js to add more editable fields
let tinaConfig = fs.readFileSync('tina/config.js', 'utf8');
const newFields = `
          {
            type: "string",
            name: "title",
            label: "Title",
            isTitle: true,
            required: true,
          },
          {
            type: "string",
            name: "heroDescription",
            label: "Hero Description",
            ui: { component: "textarea" }
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
            label: "Hero Quote Author",
          },`;
tinaConfig = tinaConfig.replace(
  `          {
            type: "string",
            name: "title",
            label: "Title",
            isTitle: true,
            required: true,
          },`,
  newFields
);
fs.writeFileSync('tina/config.js', tinaConfig, 'utf8');

// 2. Update home.md with initial values so it doesn't break
let homeMd = fs.readFileSync('content/pages/home.md', 'utf8');
const newMdHeader = `---
title: Chicago Jewish Teens Camp
heroDescription: Chicago's premier Jewish day camp for teens ages 12-17. Adventures, sports, friendships, and authentic Jewish identity - all from the heart of Northbrook, IL.
heroQuote: Every boy and girl is a seed and a sapling, which with the passage of time will bring forth fruit.
heroQuoteAuthor: The Lubavitcher Rebbe
---`;
homeMd = homeMd.replace(/---([\s\S]*?)---/, newMdHeader);
fs.writeFileSync('content/pages/home.md', homeMd, 'utf8');

// 3. Map these new fields in home-client.js
let homeClient = fs.readFileSync('app/home-client.js', 'utf8');
homeClient = homeClient.replace(
  `            <p className="text-xl text-blue-100 leading-relaxed mb-8 max-w-2xl hero-animate-delay-2">
              Chicago&apos;s premier Jewish day camp for teens ages 12-17. Adventures, sports, friendships, and authentic Jewish identity - all from the heart of Northbrook, IL.
            </p>`,
  `            <p className="text-xl text-blue-100 leading-relaxed mb-8 max-w-2xl hero-animate-delay-2">
              {data.page.heroDescription || "Chicago's premier Jewish day camp for teens ages 12-17. Adventures, sports, friendships, and authentic Jewish identity - all from the heart of Northbrook, IL."}
            </p>`
);

homeClient = homeClient.replace(
  `            <blockquote className="border-l-4 border-gold pl-5 text-blue-200 italic text-sm mb-10 hero-animate-delay-2 max-w-lg mx-auto">
              &ldquo;Every boy and girl is a seed and a sapling, which with the passage of time will bring forth fruit.&rdquo;
              <footer className="text-gold text-xs mt-1.5 not-italic font-semibold">- The Lubavitcher Rebbe</footer>
            </blockquote>`,
  `            <blockquote className="border-l-4 border-gold pl-5 text-blue-200 italic text-sm mb-10 hero-animate-delay-2 max-w-lg mx-auto">
              &ldquo;{data.page.heroQuote || "Every boy and girl is a seed and a sapling, which with the passage of time will bring forth fruit."}&rdquo;
              <footer className="text-gold text-xs mt-1.5 not-italic font-semibold">- {data.page.heroQuoteAuthor || "The Lubavitcher Rebbe"}</footer>
            </blockquote>`
);

fs.writeFileSync('app/home-client.js', homeClient, 'utf8');
