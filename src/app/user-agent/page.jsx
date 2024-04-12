import {headers} from 'next/headers'

export default function page({searchParams}) {
  const headersList = headers()
  const userAgent = headersList.get('user-agent')

  return (
    <div>
      <div className='h-screen'></div>
      <div className='absolute inset-0 z-10 flex flex-col items-center justify-center w-full h-screen'>
        <h1 className='text-black text-[3rem] xmd:text-[2rem]'>{userAgent}</h1>
        <h2>isMobile:{searchParams?.viewport}</h2>
      </div>
    </div>
  )
}
