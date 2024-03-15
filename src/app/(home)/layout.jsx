import {headers} from 'next/headers'
import Nav from '@/layout/nav'
import VoucherPin from '@/components/voucherpin'
export default function HomeLayout({children}) {
  const headersList = headers()
  const referer = headersList.get('referer')
  const userAgent = headersList.get('user-agent')
  const isMobile = /Android|webOS|iPhone|BlackBerry|IEMobile|Opera Mini/i.test(
    userAgent,
  )
  //   /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(

  return (
    <>
      <Nav
        isMobile={isMobile}
        referer={referer}
      />
      {isMobile && <VoucherPin />}
      {children}
    </>
  )
}
