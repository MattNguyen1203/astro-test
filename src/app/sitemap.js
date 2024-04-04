export default async function sitemap() {
  return [
    {
      url: process.env.DOMAIN,
      lastModified: new Date(),
      priority: 1,
    },
    {
      url: process.env.DOMAIN + '/san-pham/sitemap.xml',
      lastModified: new Date(),
      priority: 1,
    },
  ]
}
