export default {
  name: 'product',
  title: 'Product',
  type: 'document',
  fields: [
    {
      name: 'image',
      title: ' Image',
      type: 'array',
      of: [{type: 'image'}],
      options: {
        hotspot: 'true',
      },
    },
    {
      name: 'backimage',
      title: ' Backimage',
      type: 'array',
      of: [{type: 'image'}],
      options: {
        hotspot: 'true',
      },
    },
    {
      name: 'name',
      title: 'Name',
      type: 'string',
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'name',
        maxLength: 90,
      },
    },
    {
      name: 'price',
      title: 'Price',
      type: 'number',
    },
    {
      name: 'oldprice',
      title: 'Oldprice',
      type: 'number',
    },
    {
      name: 'details',
      title: 'Details',
      type: 'string',
    },
    {
      name: 'trending',
      title: 'Trending',
      type: 'boolean',
    },
    {
      name: 'featured',
      title: 'Featured',
      type: 'boolean',
    },
    {
      name: 'category',
      title: 'Category',
      type: 'string',
    },
  ],
}
