export default {
  name: 'page',
  title: 'Pages',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Page Title',
      type: 'string',
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
    },
    {
      name: 'sections',
      title: 'Page Sections',
      type: 'array',
      of: [
        { type: 'hero' },
        { type: 'stats' },
        { type: 'about' },
        { type: 'faq' },
      ],
    },
  ],
};
