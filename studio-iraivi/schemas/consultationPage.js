import {defineField, defineType} from 'sanity';

export const consultationPage = defineType({
  name: 'consultationPage',
  title: 'Consultation Page',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
      },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
    }),
    defineField({
      name: 'image',
      title: 'Image Path',
      type: 'string',
    }),
    defineField({
      name: 'duration',
      title: 'Duration',
      type: 'string',
    }),
    defineField({
      name: 'price',
      title: 'Price',
      type: 'string',
    }),
    defineField({
      name: 'qatarPrice',
      title: 'Qatar Price',
      type: 'string',
    }),
    defineField({
      name: 'mode',
      title: 'Mode',
      type: 'string',
    }),
    defineField({
      name: 'accordionSections',
      title: 'Accordion Sections',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            defineField({name: 'title', title: 'Title', type: 'string'}),
            defineField({name: 'body', title: 'Body', type: 'text'}),
          ],
        },
      ],
    }),
    defineField({
      name: 'body',
      title: 'Body',
      type: 'text',
      rows: 18,
    }),
  ],
});
