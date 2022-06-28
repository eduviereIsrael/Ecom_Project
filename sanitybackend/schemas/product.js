export default {
    name: 'product',
    title: 'product',
    type: 'document',
    fields: [
        {
            name: 'image',
            title: 'image',
            type: 'array',
            of: [{type: 'image'}],
            options: {
                hotspot: true,
            }
        },
        {
            name: 'name',
            title: 'name',
            type: 'string'
        },
        {
            name: 'slug',
            title: 'slug',
            type: 'slug',
            options: {
                source: 'name',
                maxlength: 90,
            }
        },
        {
            name: 'price',
            title: 'price',
            type: 'number'
        },
        {
            name: 'details',
            title: 'details',
            type: 'string',
        }
    ]
}