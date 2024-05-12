export const getMeta = (result, slug) => {
  const baseURL = process.env.NEXT_PUBLIC_DOMAIN
  const meta = {
    metadataBase: new URL(`${baseURL}`),
    title: result?.json?.title,
    description: result?.json?.description,
    alternates: {
      canonical: `${baseURL}/${slug}`,
    },
    openGraph: {
      title: result?.json?.title,
      description: result?.json?.description,
      url: `${baseURL}/${slug}`,
      siteName: result?.json?.og_site_name,
      images: [],
      locale: result?.json?.og_locale,
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: result?.json?.title,
      description: result?.json?.description,
      creator: result?.json?.title,
      images: [],
    },
    verification: {
      google: '',
    },
  }
  if (result?.json?.og_image && result.json.og_image.length > 0) {
    meta.openGraph.images.push({
      url: result.json.og_image[0]?.url,
      width: result.json.og_image[0]?.width,
      height: result.json.og_image[0]?.height,
    })
    meta.twitter.images.push({
      url: result.json.og_image[0]?.url,
    })
  }

  console.log('meta', meta)
  return meta
}
