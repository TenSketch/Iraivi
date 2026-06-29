import {defineField, defineType} from 'sanity';

export const homeSettings = defineType({
  name: 'homeSettings',
  title: 'Home Settings',
  type: 'document',
  fields: [
    defineField({
      name: 'hero',
      title: 'Hero',
      type: 'object',
      fields: [
        defineField({name: 'enable', title: 'Enable', type: 'boolean'}),
        defineField({
          name: 'slides',
          title: 'Slides',
          type: 'array',
          of: [
            {
              type: 'object',
              fields: [
                defineField({name: 'image', title: 'Image Path', type: 'string'}),
                defineField({name: 'headline', title: 'Headline', type: 'string'}),
                defineField({name: 'caption', title: 'Caption', type: 'text'}),
                defineField({name: 'ctaLabel', title: 'CTA Label', type: 'string'}),
                defineField({name: 'ctaLink', title: 'CTA Link', type: 'string'}),
              ],
            },
          ],
        }),
      ],
    }),
    defineField({
      name: 'storyBanner',
      title: 'Story Banner',
      type: 'object',
      fields: [
        defineField({name: 'enable', title: 'Enable', type: 'boolean'}),
        defineField({name: 'image', title: 'Image Path', type: 'string'}),
        defineField({name: 'text', title: 'Text', type: 'text'}),
        defineField({name: 'ctaLabel', title: 'CTA Label', type: 'string'}),
        defineField({name: 'ctaLink', title: 'CTA Link', type: 'string'}),
      ],
    }),
    defineField({
      name: 'about',
      title: 'About',
      type: 'object',
      fields: [
        defineField({name: 'enable', title: 'Enable', type: 'boolean'}),
        defineField({name: 'image', title: 'Image Path', type: 'string'}),
        defineField({name: 'title', title: 'Title', type: 'string'}),
        defineField({name: 'intro', title: 'Intro', type: 'text'}),
        defineField({
          name: 'credentials',
          title: 'Credentials',
          type: 'array',
          of: [{type: 'string'}],
        }),
        defineField({name: 'ctaLabel', title: 'CTA Label', type: 'string'}),
        defineField({name: 'ctaLink', title: 'CTA Link', type: 'string'}),
      ],
    }),
    defineField({
      name: 'gallery',
      title: 'Gallery',
      type: 'object',
      fields: [
        defineField({name: 'enable', title: 'Enable', type: 'boolean'}),
        defineField({name: 'title', title: 'Title', type: 'string'}),
        defineField({
          name: 'items',
          title: 'Items',
          type: 'array',
          of: [
            {
              type: 'object',
              fields: [
                defineField({name: 'title', title: 'Title', type: 'string'}),
                defineField({name: 'image', title: 'Image Path', type: 'string'}),
                defineField({name: 'caption', title: 'Caption', type: 'text'}),
                defineField({name: 'link', title: 'Link', type: 'string'}),
              ],
            },
          ],
        }),
      ],
    }),
    defineField({
      name: 'courses',
      title: 'Courses',
      type: 'object',
      fields: [
        defineField({name: 'enable', title: 'Enable', type: 'boolean'}),
        defineField({name: 'title', title: 'Title', type: 'string'}),
        defineField({name: 'intro', title: 'Intro', type: 'text'}),
        defineField({name: 'ctaLabel', title: 'CTA Label', type: 'string'}),
        defineField({name: 'viewAllLabel', title: 'View All Label', type: 'string'}),
        defineField({name: 'featuredLimit', title: 'Featured Limit', type: 'number'}),
      ],
    }),
    defineField({
      name: 'journey',
      title: 'Journey',
      type: 'object',
      fields: [
        defineField({name: 'enable', title: 'Enable', type: 'boolean'}),
        defineField({name: 'title', title: 'Title', type: 'string'}),
        defineField({name: 'image', title: 'Image Path', type: 'string'}),
        defineField({
          name: 'steps',
          title: 'Steps',
          type: 'array',
          of: [
            {
              type: 'object',
              fields: [
                defineField({name: 'title', title: 'Title', type: 'string'}),
                defineField({name: 'image', title: 'Image Path', type: 'string'}),
                defineField({name: 'text', title: 'Text', type: 'text'}),
              ],
            },
          ],
        }),
      ],
    }),
    defineField({
      name: 'testimonials',
      title: 'Testimonials',
      type: 'object',
      fields: [
        defineField({name: 'enable', title: 'Enable', type: 'boolean'}),
        defineField({name: 'title', title: 'Title', type: 'string'}),
        defineField({
          name: 'items',
          title: 'Items',
          type: 'array',
          of: [
            {
              type: 'object',
              fields: [
                defineField({name: 'name', title: 'Name', type: 'string'}),
                defineField({name: 'image', title: 'Image Path', type: 'string'}),
                defineField({name: 'quote', title: 'Quote', type: 'text'}),
                defineField({name: 'linkLabel', title: 'Link Label', type: 'string'}),
                defineField({name: 'link', title: 'Link', type: 'string'}),
              ],
            },
          ],
        }),
      ],
    }),
    defineField({
      name: 'faq',
      title: 'FAQ',
      type: 'object',
      fields: [
        defineField({name: 'enable', title: 'Enable', type: 'boolean'}),
        defineField({name: 'title', title: 'Title', type: 'string'}),
        defineField({
          name: 'items',
          title: 'Items',
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
      ],
    }),
    defineField({
      name: 'lactationPromo',
      title: 'Lactation Promo',
      type: 'object',
      fields: [
        defineField({name: 'enable', title: 'Enable', type: 'boolean'}),
        defineField({name: 'title', title: 'Title', type: 'string'}),
        defineField({name: 'intro', title: 'Intro', type: 'text'}),
        defineField({name: 'image', title: 'Image Path', type: 'string'}),
        defineField({name: 'ctaLabel', title: 'CTA Label', type: 'string'}),
        defineField({name: 'ctaLink', title: 'CTA Link', type: 'string'}),
      ],
    }),
    defineField({
      name: 'finalBanner',
      title: 'Final Banner',
      type: 'object',
      fields: [
        defineField({name: 'enable', title: 'Enable', type: 'boolean'}),
        defineField({name: 'image', title: 'Image Path', type: 'string'}),
        defineField({name: 'text', title: 'Text', type: 'text'}),
        defineField({name: 'subtext', title: 'Subtext', type: 'text'}),
        defineField({name: 'ctaLabel', title: 'CTA Label', type: 'string'}),
        defineField({name: 'ctaLink', title: 'CTA Link', type: 'string'}),
        defineField({name: 'secondaryLabel', title: 'Secondary Label', type: 'string'}),
        defineField({name: 'secondaryLink', title: 'Secondary Link', type: 'string'}),
      ],
    }),
  ],
});
