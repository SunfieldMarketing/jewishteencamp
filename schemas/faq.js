export default {
  name: 'faq',
  title: 'FAQ Section',
  type: 'object',
  fields: [
    { name: 'heading', title: 'Heading', type: 'string' },
    { name: 'subheading', title: 'Subheading', type: 'string' },
    {
      name: 'faqs',
      title: 'FAQs',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            { name: 'q', title: 'Question', type: 'string' },
            { name: 'a', title: 'Answer', type: 'text' },
          ],
        },
      ],
    },
  ],
};
