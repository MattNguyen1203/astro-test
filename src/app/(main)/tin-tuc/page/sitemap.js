import getData from '@/lib/getData'

export default async function sitemap() {
  const posts = await getData('/okhub/v1/post/post?limit=1&page=1')
  const afterPrefix = '/page/'

  function handleRenderPage(length) {
    const staticParams = []
    for (let index = 0; index < length; index++) {
      if (index) {
        staticParams.push({
          url: process.env.DOMAIN + afterPrefix + (index + 1),
          lastModified: new Date(),
          changeFrequency: 'daily',
          priority: 0.8,
        })
      }
    }
    return staticParams
  }

  return handleRenderPage(Math.ceil(Number(posts?.count) / 6))
}
