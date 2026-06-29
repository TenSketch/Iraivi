import {defineField, defineType} from 'sanity';

export const enquiryForm = defineType({
  name: 'enquiryForm',
  title: 'Enquiry Form',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
    }),
    defineField({
      name: 'layout',
      title: 'Layout',
      type: 'string',
      initialValue: 'form',
    }),
    defineField({
      name: 'image',
      title: 'Image Path',
      type: 'string',
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
      name: 'weight',
      title: 'Weight',
      type: 'number',
    }),
    defineField({
      name: 'tags',
      title: 'Tags',
      type: 'array',
      of: [{type: 'string'}],
    }),
    defineField({
      name: 'showInEnquiry',
      title: 'Show In Enquiry',
      type: 'boolean',
      initialValue: true,
    }),
    defineField({
      name: 'date',
      title: 'Date',
      type: 'datetime',
    }),
    defineField({
      name: 'draft',
      title: 'Draft',
      type: 'boolean',
    }),
    defineField({
      name: 'body',
      title: 'Body',
      type: 'text',
      description: 'HTML or markdown content for the form body.',
      rows: 24,
    }),
  ],
});
