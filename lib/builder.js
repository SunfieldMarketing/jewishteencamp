import { builder, Builder } from '@builder.io/react';
import Hero from '../components/builder/Hero';
import Stats from '../components/builder/Stats';
import About from '../components/builder/About';
import FAQ from '../components/builder/FAQ';

builder.init(process.env.NEXT_PUBLIC_BUILDER_API_KEY);

Builder.registerComponent(Hero, {
  name: 'Hero',
  inputs: [
    { name: 'title', type: 'string', defaultValue: 'Make a Lifelong Investment in Your Teen' },
    { name: 'description', type: 'string', defaultValue: "Chicago's premier Jewish day camp for teens ages 12-17." },
    { name: 'badgeText', type: 'string', defaultValue: 'Now Enrolling for Summer 2026' },
    { name: 'backgroundImage', type: 'file', allowedFileTypes: ['jpeg', 'jpg', 'png', 'webp'] },
    { name: 'primaryLabel', type: 'string', defaultValue: 'Enroll Now' },
    { name: 'primaryLink', type: 'string', defaultValue: '/contact' },
    { name: 'secondaryLabel', type: 'string', defaultValue: 'Learn More' },
    { name: 'secondaryLink', type: 'string', defaultValue: '/about' },
  ],
});

Builder.registerComponent(Stats, {
  name: 'Stats',
  inputs: [
    {
      name: 'stats',
      type: 'list',
      subFields: [
        { name: 'value', type: 'number' },
        { name: 'suffix', type: 'string' },
        { name: 'label', type: 'string' },
      ],
    },
  ],
});

Builder.registerComponent(About, {
  name: 'About',
  inputs: [
    { name: 'subheading', type: 'string' },
    { name: 'heading', type: 'string' },
    { name: 'p1', type: 'string', ui: { component: 'textarea' } },
    { name: 'p2', type: 'string', ui: { component: 'textarea' } },
    { name: 'image', type: 'file' },
    { name: 'buttonLabel', type: 'string' },
    { name: 'buttonLink', type: 'string' },
  ],
});

Builder.registerComponent(FAQ, {
  name: 'FAQ',
  inputs: [
    {
      name: 'faqs',
      type: 'list',
      subFields: [
        { name: 'q', type: 'string', label: 'Question' },
        { name: 'a', type: 'string', label: 'Answer', ui: { component: 'textarea' } },
      ],
    },
  ],
});
