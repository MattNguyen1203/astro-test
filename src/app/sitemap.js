export default async function sitemap() {
  return [
    {
      url: process.env.DOMAIN,
      lastModified: new Date(),
      priority: 1,
    },
  ]
}
