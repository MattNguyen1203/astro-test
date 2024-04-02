// modules
import {headers} from 'next/headers'

// components
import Nav from '@/layout/nav'
import ListStrength from '@/components/liststrength'
import VoucherPin from '@/components/voucherpin'

export default function MainLayout({children}) {
  const headersList = headers()
  const referer = headersList.get('referer')

  const userAgent = headersList.get('user-agent')
  const isMobile = /Android|webOS|iPhone|BlackBerry|IEMobile|Opera Mini/i.test(
    userAgent,
  )
  return (
    <>
      <Nav
        isMobile={isMobile}
        referer={referer}
      />
      {isMobile && <VoucherPin />}
      {children}
      <ListStrength />
    </>
  )
}
