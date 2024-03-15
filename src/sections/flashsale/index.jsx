import Image from 'next/image'
import BannerFlashSale from './components/banner'
import WrapperFlashSale from './components/wrapper'

export default function IndexFlashSale({isMobile}) {
  return (
    <>
      <main className='pt-[8rem] xmd:pt-[4.1rem] xmd:bg-transparent relative z-10'>
        <BannerFlashSale isMobile={isMobile} />
        <WrapperFlashSale isMobile={isMobile} />
      </main>
      {isMobile && (
        <Image
          className='fixed top-0 left-0 object-fill size-full'
          src={'/flashsale/flash-voucher-res.jpg'}
          alt='flash voucher responsive'
          width={380}
          height={900}
          priority
        />
      )}
    </>
  )
}
