import {defineField, defineType} from 'sanity';

export const course = defineType({
  name: 'course',
  title: 'Course',
  type: 'document',
  fields: [
    defineField({name: 'title', title: 'Title', type: 'string'}),
    defineField({name: 'description', title: 'Description', type: 'text'}),
    defineField({name: 'duration', title: 'Duration', type: 'string'}),
    defineField({name: 'price', title: 'Price', type: 'string'}),
    defineField({name: 'qatarPrice', title: 'Qatar Price', type: 'string'}),
    defineField({name: 'image', title: 'Image Path', type: 'string'}),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
      },
    }),
    defineField({name: 'weight', title: 'Weight', type: 'number'}),
    defineField({name: 'category', title: 'Category', type: 'string'}),
    defineField({name: 'featured', title: 'Featured', type: 'boolean'}),
    defineField({name: 'mode', title: 'Mode', type: 'string'}),
    defineField({
      name: 'tags',
      title: 'Tags',
      type: 'array',
      of: [{type: 'string'}],
    }),
    defineField({
      name: 'faqs',
      title: 'FAQs',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            defineField({name: 'question', title: 'Question', type: 'string'}),
            defineField({name: 'answer', title: 'Answer', type: 'text'}),
          ],
        },
      ],
    }),
    defineField({name: 'date', title: 'Date', type: 'datetime'}),
    defineField({name: 'draft', title: 'Draft', type: 'boolean'}),
    defineField({name: 'body', title: 'Body', type: 'text'}),
  ],
});
