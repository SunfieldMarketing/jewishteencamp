export default function robots() {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/api/'],
      },
    ],
    sitemap: 'https://www.californiajewishteens.com/sitemap.xml',
    host: 'https://www.californiajewishteens.com',
  };
}
