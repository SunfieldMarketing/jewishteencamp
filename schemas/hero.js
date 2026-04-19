export default {
  name: 'hero',
  title: 'Hero Section',
  type: 'object',
  fields: [
    { name: 'badge', title: 'Badge Text', type: 'string' },
    { name: 'title', title: 'Title', type: 'string' },
    { name: 'description', title: 'Description', type: 'text' },
    { name: 'backgroundImage', title: 'Background Image', type: 'image' },
    { name: 'primaryLabel', title: 'Primary Button Label', type: 'string' },
    { name: 'primaryLink', title: 'Primary Button Link', type: 'string' },
    { name: 'secondaryLabel', title: 'Secondary Button Label', type: 'string' },
    { name: 'secondaryLink', title: 'Secondary Button Link', type: 'string' },
  ],
};
