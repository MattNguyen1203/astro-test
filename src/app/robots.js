export default function robots() {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/dang-ky', '/dang-nhap'],
    },
    sitemap: `${process.env.DOMAIN}/sitemap.xml`,
  }
}
