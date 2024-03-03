import Image from 'next/image'
import Link from 'next/link'

export default function NavAuth({children, params, searchParams}) {
  console.log('🚀 ~ NavAuth ~ searchParams:', searchParams)
  console.log('🚀 ~ NavAuth ~ params:', params)
  return (
    <>
      <header className='fixed top-0 left-0 bg-[rgba(245,245,245,0.95)] h-[4.5388rem] w-full border-b-[2px] border-white backdrop-blur-[14px] flex items-center z-50'>
        <nav className='container flex items-center'>
          <Link
            className='w-[9rem] h-[2.31508rem] my-auto'
            href='/'
          >
            <Image
              className='object-cover size-full'
              src={'/layout/nav/logo-nav.svg'}
              alt='logo astromazing'
              width={123}
              height={32}
              priority
            />
          </Link>
          <div className='h-[1.53734rem] w-[0.07321rem] bg-[linear-gradient(97deg,#102841_0%,#1359A1_100%)] mx-[1.76rem]'></div>
          <span className='inline-block h6 font-medium bg-clip-text bg-[linear-gradient(180deg,#E0B181_0.72%,#BE9367_99.87%)]'>
            Đăng Nhập
          </span>
        </nav>
      </header>
      <main className='mt-[4.5388rem] h-[44.3631rem] relative'>
        <Image
          className='z-0 object-cover size-full'
          src={'/auth/bg-auth.jpg'}
          alt='background dang nhap'
          fill
          sizes='100vw'
          priority
          quality={100}
        />
        <div className='container relative z-10 h-full'>
          <div className='absolute bottom-0 right-0 w-[28.9rem] h-[42rem]'>
            <Image
              className='z-0 object-cover size-full'
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
