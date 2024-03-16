import AccessoryIndex from '@/sections/accessory'

export default function AccessoryPage({searchParams}) {
  const {viewport} = searchParams
  const isMobile = viewport?.includes('mobile')
  return <AccessoryIndex isMobile={isMobile} />
}
