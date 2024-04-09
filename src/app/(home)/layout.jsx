import {headers} from 'next/headers'
import Nav, {NavLoading} from '@/layout/nav'
import VoucherPin from '@/components/voucherpin'
import {Suspense} from 'react'

export default function HomeLayout({children}) {
  const headersList = headers()
  const referer = headersList.get('referer')
  const userAgent = headersList.get('user-agent')
  const isMobile =
    /Android|webOS|iPhone|BlackBerry|IEMobile|ZaloTheme|FB_IAB|Opera Mini/i.test(
      userAgent,
    )
  //   /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(

  return (
    <>
      <Suspense fallback={<NavLoading />}>
        <Nav
          isMobile={isMobile}
          referer={referer}
        />
      </Suspense>
      {isMobile && <VoucherPin />}
      {children}
    </>
  )
}
