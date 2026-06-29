import {defineField, defineType} from 'sanity';

export const testimonial = defineType({
  name: 'testimonial',
  title: 'Testimonial',
  type: 'document',
  fields: [
    defineField({name: 'slug', title: 'Slug', type: 'slug', options: {source: 'name'}}),
    defineField({name: 'name', title: 'Name', type: 'string'}),
    defineField({name: 'focus', title: 'Focus', type: 'string'}),
    defineField({name: 'quote', title: 'Quote', type: 'text'}),
    defineField({name: 'image', title: 'Image Path', type: 'string'}),
    defineField({name: 'linkLabel', title: 'Link Label', type: 'string'}),
    defineField({name: 'link', title: 'Link', type: 'string'}),
    defineField({name: 'featured', title: 'Featured', type: 'boolean'}),
  ],
});
