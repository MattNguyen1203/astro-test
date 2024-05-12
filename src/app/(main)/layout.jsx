// modules
import {headers} from 'next/headers'

// components
import Nav from '@/layout/nav'
import ListStrength from '@/components/liststrength'
import WrapperVoucherPin from '@/components/voucherpin/WrapperVoucherPin'

export default function MainLayout({children}) {
  const headersList = headers()
  const userAgent = headersList.get('user-agent')
  const isMobile =
    /Android|webOS|iPhone|BlackBerry|IEMobile|ZaloTheme|FB_IAB|Opera Mini/i.test(
      userAgent,
    )
  return (
    <>
      <Nav isMobile={isMobile} />
      {isMobile && <WrapperVoucherPin />}
      {children}
      <ListStrength />
    </>
  )
}
