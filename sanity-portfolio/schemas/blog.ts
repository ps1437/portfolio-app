export default {
  name: 'blog',
  title: 'Blog',
  type: 'document',
  fields: [
    { name: 'title', type: 'string' },
    { name: 'slug', type: 'slug', options: { source: 'title', maxLength: 96 } },
    { name: 'author', type: 'string' },
    { name: 'publishedAt', type: 'datetime' },
    { name: 'excerpt', type: 'text', title: 'Excerpt' },
    { name: 'mainImage', type: 'image', title: 'Thumbnail Image' },
    {
      name: 'content',
      type: 'array',
      of: [
        { type: 'block' },
        {
          type: 'code',
          options: {
            languageAlternatives: [
              { title: 'JavaScript', value: 'javascript' },
              { title: 'Java', value: 'java' },
              { title: 'SQL', value: 'sql' }
            ]
          }
        }
      ]
    }
  ]
}
