import IndexAccount from '@/sections/account'

export default function AccountPage({searchParams}) {
  const {viewport} = searchParams
  const isMobile = viewport === 'mobile'

  return <IndexAccount isMobile={isMobile} />
}
