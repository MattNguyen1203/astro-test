export const fetchMetaData = async (slug) => {
  try {
    const result = await fetch(
      `${process.env.NEXT_PUBLIC_HOST}/wp-json/yoast/v1/get_head?url=${process.env.NEXT_PUBLIC_HOST}/${slug}`,
      {
        method: 'GET',
      },
    )
    return result.json()
  } catch (error) {
    console.log(
      '🚀 ~ fetchfailed:',
      `${process.env.NEXT_PUBLIC_HOST}/wp-json/yoast/v1/get_head?url=${process.env.NEXT_PUBLIC_HOST}/${slug}`,
    )
    return null
    // throw new Error(error)
  }
}
