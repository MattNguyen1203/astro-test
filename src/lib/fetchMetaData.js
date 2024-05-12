export const fetchMetaData = async (slug) => {
  const result = await fetch(
    `${process.env.API}/wp-json/yoast/v1/get_head?url=${process.env.API}/${slug}`,
    {
      method: 'GET',
    },
  )
  return result.json()
}
