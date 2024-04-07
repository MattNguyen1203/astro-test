import InfoAccount from '@/sections/account/components/infoaccount'
import {headers} from 'next/headers'

export default function AccountLayout({children}) {
  const headersList = headers()
  const userAgent = headersList.get('user-agent')
  const isMobile =
    /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|ZaloTheme|FB_IAB|Opera Mini/i.test(
      userAgent,
    )
  return (
    <main className='w-full h-fit bg-elevation-20 pt-[9.52rem] pb-[4.39rem]'>
      <div className='relative flex mx-auto xmd:flex-col w-fit h-fit xmd:w-full'>
        {!isMobile && <InfoAccount />}
        <div className='lg:w-[50.87848rem] h-fit relative ml-[0.88rem] xmd:container'>
          {children}
        </div>
      </div>
    </main>
  )
}
