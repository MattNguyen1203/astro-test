import {headers} from 'next/headers'
import Nav from '@/layout/nav'
import WrapperVoucherPin from '@/components/voucherpin/WrapperVoucherPin'

export default function HomeLayout({children}) {
  const headersList = headers()
  const userAgent = headersList.get('user-agent')
  const isMobile =
    /Android|webOS|iPhone|BlackBerry|IEMobile|ZaloTheme|FB_IAB|Opera Mini/i.test(
      userAgent,
    )

  //   /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(

  return (
    <>
      <Nav isMobile={isMobile} />
      {isMobile && <WrapperVoucherPin />}
      {children}
    </>
  )
}
