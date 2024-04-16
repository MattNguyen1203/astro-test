import Image from 'next/image'
import Link from 'next/link'
import TitleAuth from '../title'

export default function NavAuth({children}) {
  return (
    <>
      <header className='fixed top-0 left-0 bg-[rgba(245,245,245,0.95)] h-[4.5388rem] w-full border-b-[2px] border-white backdrop-blur-[14px] flex items-center z-50 xmd:border-none'>
        <nav className='container flex items-center xmd:justify-between xmd:full-mb xmd:pl-[0.88rem] xmd:pr-[1.1rem]'>
          <Link
            className='w-[9rem] h-[2.31508rem] my-auto xmd:w-[9.66318rem] xmd:h-[2.56223rem]'
            href='/'
          >
            <Image
              className='object-cover size-full xmd:object-contain'
              src={'/layout/nav/logo-nav.svg'}
              alt='logo astromazing'
              width={123}
              height={32}
              priority
            />
          </Link>
          <div className='h-[1.53734rem] w-[0.07321rem] bg-[linear-gradient(97deg,#102841_0%,#1359A1_100%)] mx-[1.76rem] xmd:hidden'></div>
          <TitleAuth />
        </nav>
      </header>
      <main className='mt-[4.5388rem] h-[44.3631rem] relative xmd:h-[calc(100vh-4.1rem)]'>
        <Image
          className='z-0 object-cover size-full xmd:hidden'
          src={'/auth/bg-auth.jpg'}
          alt='background dang nhap'
          fill
          sizes='100vw'
          priority
          quality={100}
        />
        <Image
          className='md:hidden h-[32.43045rem] w-full object-cover z-0'
          src={'/auth/bg-auth-res.jpg'}
          alt='background dang nhap'
          fill
          sizes='100vw'
          priority
          quality={100}
        />
        <div className='container relative z-10 h-full xmd:full-mb'>
          <div className='absolute bottom-0 right-0 w-[28.9rem] h-[42rem] xmd:w-full xmd:h-fit xmd:bg-white xmd:rounded-tl-[1.46413rem] xmd:rounded-tr-[1.46413rem] xmd:pt-[3.51rem] xmd:pb-[3.73rem]'>
            <Image
              className='z-0 object-cover size-full xmd:hidden'
              src={'/auth/border-auth.png'}
              alt='auth'
              fill
              priority
              quality={100}
              sizes='(max-width: 1024px) 100vw, 28.3vw'
            />
            {children}
          </div>
        </div>
      </main>
    </>
  )
}
