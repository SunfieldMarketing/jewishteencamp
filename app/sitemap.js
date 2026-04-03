export default function sitemap() {
  const baseUrl = 'https://www.chicagojewishteens.com';

  const routes = [
    { url: '/', changeFrequency: 'weekly', priority: 1.0 },
    { url: '/about', changeFrequency: 'monthly', priority: 0.8 },
    { url: '/day-camp', changeFrequency: 'monthly', priority: 0.9 },
    { url: '/schedule', changeFrequency: 'weekly', priority: 0.9 },
    { url: '/photos', changeFrequency: 'weekly', priority: 0.7 },
    { url: '/parents', changeFrequency: 'monthly', priority: 0.8 },
    { url: '/contact', changeFrequency: 'monthly', priority: 0.8 },
  ];

  return routes.map((route) => ({
    url: `${baseUrl}${route.url}`,
    lastModified: new Date().toISOString(),
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }));
}
