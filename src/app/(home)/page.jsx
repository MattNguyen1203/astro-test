import {fetchMetaData} from '@/lib/fetchMetaData'
import {getMeta} from '@/lib/getMeta'
import HomeIndex from '@/sections/home'

export async function generateMetadata({params}) {
  const result = await fetchMetaData('')
  return getMeta(result, '')
}

export default function HomePage({searchParams}) {
  const {viewport} = searchParams
  return <HomeIndex viewport={viewport} />
}
