export default async function getDataProxy(api) {
  const res = await fetch(`${process.env.DOMAIN}${api}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  })

  if (!res.ok) {
    return null
  }

  return res.json()
}
