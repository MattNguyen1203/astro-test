import Image from 'next/image'

export default function BannerFlashSale({isMobile}) {
  return (
    <section className='relative'>
      <Image
        className='w-full object-cover h-[41.28843rem] 3xl:h-[56.28843rem] xmd:h-[22.98682rem]'
        src={isMobile ? '/flashsale/banner-res.jpg' : '/flashsale/banner.jpg'}
        alt='banner'
        width={isMobile ? 380 : 1400}
        height={isMobile ? 320 : 600}
        quality={100}
        priority
      />
      <div className='flex justify-center md:py-[1.54rem] bg-[#0A1A29] xmd:h-[5.49048rem] relative xmd:overflow-x-auto hidden-scrollbar'>
        <ul className='flex xmd:absolute xmd:top-0 xmd:left-0 xmd:items-center xmd:h-full xmd:w-fit xmd:px-[0.59rem]'>
          {new Array(isMobile ? 6 : 4).fill(0).map((_, index) => (
            <li
              className='first:ml-0 ml-[2.64rem] py-[0.88rem] px-[1.76rem] rounded-[7.5rem] w-fit button font-medium text-white border border-solid border-white xmd:ml-[0.59rem]'
              key={index}
            >
              Ipad
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
