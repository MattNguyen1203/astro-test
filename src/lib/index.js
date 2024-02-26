export function generateMetadataInit({
  url = process.env.NEXT_PUBLIC_DOMAIN,
  title = 'test',
  description = 'test',
  siteName = 'test',
  src = '/img.png',
  alt = 'alt',
  keywords = ['a', 'b', 'c'],
}) {
  return {
    metadataBase: new URL(url),
    title: title,
    description: description,
    applicationName: siteName,
    keywords: [...keywords],
    creator: 'FinnTVD',
    openGraph: {
      title: title,
      description: description,
      url: process.env.DOMAIN,
      siteName: siteName,
      images: [
        {
          url: src,
          alt: alt,
        },
      ],
      locale: 'en_US',
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: title,
      description: description,
      creator: siteName,
      images: [
        {
          url: src,
          alt: alt,
        },
      ],
    },
  }
}
