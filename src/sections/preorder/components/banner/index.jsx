import Image from 'next/image'
import SlideBannerPreOrder from './slidebanner'

export default function BannerPreOrder() {
  return (
    <section className='pt-[8rem]'>
      <div className='w-full h-[67.82577rem] 3xl:h-[76.82577rem] relative'>
        <Image
          className='object-fill size-full'
          src={'/preorder/banner.png'}
          alt='banner'
          width={1400}
          height={950}
          priority
          quality={100}
        />
        <div className='absolute -bottom-[7.94rem] left-1/2 -translate-x-1/2 container h-[25.62225rem] z-10 shadow-[0px_10px_10px_0px_rgba(0,0,0,0.15)]'>
          <Image
            className='absolute top-0 left-0 object-cover size-full'
            src={'/preorder/frame-slide.png'}
            alt='frame slide'
            width={1200}
            height={350}
            priority
          />
          <SlideBannerPreOrder />
          <div className='bg-[linear-gradient(44deg,#FFF0D8_52.89%,#FFD797_107.96%)] rounded-[0.87848rem] h6 font-bold text-greyscale-80 text-center w-fit absolute top-0 -translate-y-1/2 left-1/2 -translate-x-1/2 px-[4.39rem] py-[1.17rem]'>
            SẢN PHẨM NỔI BẬT
          </div>
        </div>
      </div>
      <div className='container h-[34.45593rem] mt-[12.85rem]'>
        <Image
          className='object-cover size-full'
          src={'/preorder/chien-dich.jpg'}
          alt='chien dich'
          width={1200}
          height={480}
        />
      </div>
    </section>
  )
}
