import {auth} from '@/auth'
import InfoAccount from '@/sections/account/components/infoaccount'
import {headers} from 'next/headers'
import {redirect} from 'next/navigation'

export default async function AccountLayout({children}) {
  const headersList = headers()
  const userAgent = headersList.get('user-agent')
  const isMobile =
    /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|ZaloTheme|FB_IAB|Opera Mini/i.test(
      userAgent,
    )
  const session = await auth()
  if (!session?.accessToken) return redirect('/dang-nhap')
  return (
    <main className='w-full h-fit bg-elevation-20 pt-[9.52rem] pb-[4.39rem] xmd:pt-[5.56rem]'>
      <div className='relative flex mx-auto xmd:flex-col w-fit h-fit xmd:w-full'>
        {!isMobile && <InfoAccount session={session} />}
        <div className='lg:w-[50.87848rem] h-fit relative md:ml-[0.88rem] xmd:w-full xmd:px-0'>
          {children}
        </div>
      </div>
    </main>
  )
}
