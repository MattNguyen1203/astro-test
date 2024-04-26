import Image from 'next/image'
import SlideBannerPreOrder from './slidebanner'
import SlideBannerRes from './slidebanner/SlideBannerRes'
import getData from '@/lib/getData'

export default async function BannerPreOrder({isMobile}) {
  const products = await getData(
    '/okhub/v1/product/filter/products?limit=15&page=1&is_preorder=true&device=san-pham-noi-bat-pre-order',
  )

  return (
    <section className='pt-[8rem] xmd:pt-[4.1rem]'>
      <div className='w-full h-[67.82577rem] 3xl:h-[76.82577rem] relative xmd:h-fit'>
        <Image
          className='object-fill size-full xmd:h-[22.98682rem] xmd:block xmd:relative xmd:z-10'
          src={isMobile ? '/preorder/banner-res.jpg' : '/preorder/banner.png'}
          alt='banner'
          width={isMobile ? 380 : 1400}
          height={isMobile ? 320 : 950}
          priority
          quality={100}
        />
        <div className='md:absolute md:-bottom-[7.94rem] md:left-1/2 md:-translate-x-1/2 container md:h-[25.62225rem] z-10 drop-shadow-[2px_12px_6px_rgba(0,0,0,0.15)] xmd:relative xmd:full-mb xmd:pt-[2.5rem] '>
          {!isMobile && (
            <Image
              className='absolute top-0 left-0 object-cover size-full'
              src={'/preorder/frame-slide.png'}
              alt='frame slide'
              width={1200}
              height={350}
              priority
            />
          )}
          {isMobile ? (
            <SlideBannerRes products={products?.item} />
          ) : (
            <SlideBannerPreOrder products={products?.item} />
          )}
          <div className='bg-[linear-gradient(44deg,#FFF0D8_52.89%,#FFD797_107.96%)] rounded-[0.87848rem] h6 font-svnGraphik font-bold text-greyscale-80 xmd:text-[#0D2033] text-center w-fit absolute top-0 -translate-y-1/2 left-1/2 -translate-x-1/2 md:px-[4.39rem] md:py-[1.17rem] xmd:sub1 xmd:tracking-[0.01464rem] xmd:container xmd:h-[2.56223rem] xmd:rounded-[0.58565rem] xmd:flex xmd:justify-center xmd:items-center'>
            SẢN PHẨM NỔI BẬT
          </div>
        </div>
      </div>
      <div className='container h-[34.45593rem] mt-[12.85rem] xmd:mt-[2.34rem] xmd:relative xmd:z-20 xmd:full-mb xmd:h-[10.76135rem]'>
        <Image
          className='object-cover size-full'
          src={'/preorder/chien-dich.jpg'}
          alt='chien dich'
          width={isMobile ? 380 : 1200}
          height={isMobile ? 150 : 480}
          quality={85}
        />
      </div>
    </section>
  )
}
