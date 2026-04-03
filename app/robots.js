export default function robots() {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/api/'],
      },
    ],
    sitemap: 'https://www.chicagojewishteens.com/sitemap.xml',
    host: 'https://www.chicagojewishteens.com',
  };
}
