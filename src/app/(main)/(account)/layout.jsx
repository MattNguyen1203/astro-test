import InfoAccount from '@/sections/account/components/infoaccount'

export default function AccountLayout({children}) {
  return (
    <main className='w-full h-fit bg-elevation-20 pt-[9.52rem] pb-[4.39rem]'>
      <div className='relative flex xmd:flex-col mx-auto w-fit h-fit'>
        <InfoAccount />
        <div className='lg:w-[50.87848rem] h-fit relative ml-[0.88rem]'>
          {children}
        </div>
      </div>
    </main>
  )
}
