export const fetchMetaData = async (slug) => {
  const result = await fetch(
    `${process.env.NEXT_PUBLIC_HOST}/wp-json/yoast/v1/get_head?url=${process.env.NEXT_PUBLIC_HOST}/${slug}`,
    {
      method: 'GET',
    },
  )
  return result.json()
}
