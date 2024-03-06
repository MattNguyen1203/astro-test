// import InfoAccountPage from './@info/page'

export default function AccountLayout({children}) {
  return (
    <main className='w-full h-fit bg-elevation-20 pt-[9.52rem] pb-[4.39rem]'>
      <div className='relative flex mx-auto w-fit h-fit'>
        {/* <InfoAccountPage /> */}
        <div className='w-[50.87848rem] h-fit relative ml-[0.88rem]'>
          {children}
        </div>
      </div>
    </main>
  )
}
