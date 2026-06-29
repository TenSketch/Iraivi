import {defineField, defineType} from 'sanity';

export const page = defineType({
  name: 'page',
  title: 'Page',
  type: 'document',
  fields: [
    defineField({name: 'title', title: 'Title', type: 'string'}),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
      },
    }),
    defineField({name: 'description', title: 'Description', type: 'text'}),
    defineField({name: 'image', title: 'Image Path', type: 'string'}),
    defineField({
      name: 'keywords',
      title: 'Keywords',
      type: 'array',
      of: [{type: 'string'}],
    }),
    defineField({
      name: 'body',
      title: 'Body',
      type: 'text',
      description: 'Markdown content for the page body.',
      rows: 18,
    }),
    defineField({name: 'draft', title: 'Draft', type: 'boolean'}),
  ],
});
