import HomeIndex from '@/sections/home'

export default function HomePage({searchParams}) {
  const {viewport} = searchParams
  return <HomeIndex viewport={viewport} />
}
