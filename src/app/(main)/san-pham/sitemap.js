export default async function sitemap() {
  return [
    {
      url: process.env.DOMAIN + '/san-pham',
      lastModified: new Date(),
      priority: 1,
    },
  ]
}
