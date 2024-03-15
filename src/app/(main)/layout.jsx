import {headers} from 'next/headers'

import Nav from '@/layout/nav'
import ListStrength from '@/components/liststrength'

export default function MainLayout({children}) {
  const headersList = headers()
  const referer = headersList.get('referer')
  console.log('🚀 ~ HomeLayout ~ activePath:', referer)

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
      {children}
      <ListStrength />
    </>
  )
}
