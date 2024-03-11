import {headers} from 'next/headers'

import Nav from '@/layout/nav'
import ListStrength from '@/components/liststrength'

export default function MainLayout({children}) {
  const headersList = headers()
  const userAgent = headersList.get('user-agent')
  const isMobile =
    /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
      userAgent,
    )
  return (
    <>
      <Nav isMobile={isMobile} />
      {children}
      <ListStrength />
    </>
  )
}
