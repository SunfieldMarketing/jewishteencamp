export default {
  name: 'stats',
  title: 'Stats Bar',
  type: 'object',
  fields: [
    {
      name: 'items',
      title: 'Stat Items',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            { name: 'value', title: 'Value', type: 'number' },
            { name: 'suffix', title: 'Suffix', type: 'string' },
            { name: 'label', title: 'Label', type: 'string' },
          ],
        },
      ],
    },
  ],
};
