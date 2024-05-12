import {fetchMetaData} from '@/lib/fetchMetaData'
import {getMeta} from '@/lib/getMeta'
import IndexNews from '@/sections/news'

export async function generateMetadata({params}) {
  const result = await fetchMetaData(`tin-tuc/`)
  return getMeta(result, `tin-tuc`)
}

export default function NewsPage() {
  return <IndexNews />
}
