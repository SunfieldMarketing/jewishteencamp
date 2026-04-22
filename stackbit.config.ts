import { defineStackbitConfig } from '@stackbit/types';

export default defineStackbitConfig({
    stackbitVersion: '~0.6.0',
    ssgName: 'nextjs',
    nodeVersion: '18',
    dataDir: 'content',
    pagesDir: 'content/pages',
    pageLayoutKey: '_template',
    models: {
        page: {
            type: 'page',
            label: 'Page',
            urlPath: '/{slug}',
            filePath: 'content/pages/{slug}.json',
            hideInAddMenu: false,
            fields: [
                { name: 'title', type: 'string', label: 'Title', required: true },
                {
                    name: 'blocks',
                    type: 'list',
                    label: 'Blocks',
                    items: { type: 'model', models: ['hero', 'stats', 'featureGrid', 'splitSection', 'staff', 'testimonials', 'programs', 'faqs'] }
                }
            ]
        },
        schedule: {
            type: 'page',
            label: 'Schedule Page',
            urlPath: '/schedule',
            filePath: 'content/pages/schedule.json',
            fields: [
                { name: 'heroTitle', type: 'string' },
                { name: 'heroSubtitle', type: 'string' },
                {
                    name: 'pricingPlans',
                    type: 'list',
                    items: {
                        type: 'object',
                        fields: [
                            { name: 'name', type: 'string' },
                            { name: 'subtitle', type: 'string' },
                            { name: 'dates', type: 'string' },
                            { name: 'price', type: 'string' },
                            { name: 'priceSuffix', type: 'string' },
                            { name: 'icon', type: 'string' },
                            {
                                name: 'features',
                                type: 'list',
                                items: {
                                    type: 'object',
                                    fields: [{ name: 'feature', type: 'string' }]
                                }
                            }
                        ]
                    }
                },
                {
                    name: 'weeklySchedule',
                    type: 'list',
                    items: {
                        type: 'object',
                        fields: [
                            { name: 'day', type: 'string' },
                            { name: 'morning', type: 'string' },
                            { name: 'afternoon', type: 'string' },
                            { name: 'evening', type: 'string' }
                        ]
                    }
                },
                {
                    name: 'calendarEvents',
                    type: 'list',
                    items: {
                        type: 'object',
                        fields: [
                            { name: 'date', type: 'string' },
                            { name: 'title', type: 'string' },
                            { name: 'desc', type: 'string' }
                        ]
                    }
                }
            ]
        },
        hero: {
            type: 'object',
            label: 'Hero',
            labelField: 'title',
            fields: [
                { name: 'title', type: 'string', label: 'Title' },
                { name: 'subtitle', type: 'string', label: 'Subtitle' },
                { name: 'tagline', type: 'string', label: 'Tagline' },
                { name: 'ctaText', type: 'string', label: 'CTA Text' },
                { name: 'ctaLink', type: 'string', label: 'CTA Link' },
                { name: 'backgroundImage', type: 'image', label: 'Background Image' },
                {
                   name: 'trustSignals',
                   type: 'list',
                   items: {
                       type: 'object',
                       fields: [{ name: 'text', type: 'string' }]
                   }
                }
            ]
        },
        stats: {
            type: 'object',
            label: 'Stats Bar',
            fields: [
                {
                    name: 'items',
                    type: 'list',
                    items: {
                        type: 'object',
                        fields: [
                            { name: 'value', type: 'string' },
                            { name: 'label', type: 'string' }
                        ]
                    }
                }
            ]
        },
        featureGrid: {
            type: 'object',
            label: 'Feature Grid',
            fields: [
                { name: 'heading', type: 'string' },
                { name: 'subheading', type: 'string' },
                {
                    name: 'items',
                    type: 'list',
                    items: {
                        type: 'object',
                        fields: [
                            { name: 'title', type: 'string' },
                            { name: 'desc', type: 'string' },
                            { name: 'icon', type: 'string' }
                        ]
                    }
                }
            ]
        },
        splitSection: {
            type: 'object',
            label: 'Split Section',
            fields: [
                { name: 'heading', type: 'string' },
                { name: 'tagline', type: 'string' },
                { name: 'body', type: 'markdown', label: 'Body' },
                { name: 'imageSide', type: 'enum', options: ['left', 'right'] },
                {
                    name: 'listItems',
                    type: 'list',
                    items: {
                        type: 'object',
                        fields: [{ name: 'text', type: 'string' }]
                    }
                }
            ]
        },
        staff: {
            type: 'object',
            label: 'Staff Section',
            fields: [
                {
                    name: 'members',
                    type: 'list',
                    items: {
                        type: 'object',
                        fields: [
                            { name: 'name', type: 'string' },
                            { name: 'title', type: 'string' },
                            { name: 'phone', type: 'string' },
                            { name: 'email', type: 'string' },
                            { name: 'image', type: 'image' }
                        ]
                    }
                }
            ]
        },
        testimonials: {
            type: 'object',
            label: 'Testimonials',
            fields: [
                {
                    name: 'quotes',
                    type: 'list',
                    items: {
                        type: 'object',
                        fields: [
                            { name: 'quote', type: 'string' },
                            { name: 'name', type: 'string' },
                            { name: 'location', type: 'string' }
                        ]
                    }
                }
            ]
        },
        programs: {
            type: 'object',
            label: 'Programs Section',
            fields: [
                {
                    name: 'plans',
                    type: 'list',
                    items: {
                        type: 'object',
                        fields: [
                            { name: 'name', type: 'string' },
                            { name: 'dates', type: 'string' },
                            { name: 'price', type: 'string' }
                        ]
                    }
                }
            ]
        },
        faqs: {
            type: 'object',
            label: 'FAQ Section',
            fields: [
                {
                    name: 'items',
                    type: 'list',
                    items: {
                        type: 'object',
                        fields: [
                            { name: 'q', type: 'string', label: 'Question' },
                            { name: 'a', type: 'string', label: 'Answer' }
                        ]
                    }
                }
            ]
        }
    }
});
