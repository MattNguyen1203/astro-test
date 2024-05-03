import ICArrowRightWhite from '@/components/icon/ICArrowRightWhite'
import {IDGLOBALAPI} from '@/lib/IdPageAPI'
import getData from '@/lib/getData'
import Image from 'next/image'
import Link from 'next/link'

export default async function FeedBack({isMobile}) {
  const data = await getData(`/wp/v2/pages/${IDGLOBALAPI}`)
  return (
    <div className='relative w-full h-[77.5rem] xmd:h-[67.13031rem]'>
      <Image
        className='z-0 object-fill'
        src={isMobile ? '/home/bg-feedback-res.jpg' : '/home/bg-feedback.png'}
        alt='feedback custormer'
        fill
        sizes='100vw'
      />
      <div className='w-[29.3rem] h-[38.3rem] xmd:w-[23.38719rem] xmd:h-[31.68594rem] sticky top-[calc(100vh-38.3rem)] left-1/2 -translate-x-[62%] xmd:-translate-x-[46%] z-10 xmd:ml-[10rem] xmd:top-[calc(100vh-33rem)]'>
        <Image
          className='object-cover size-full'
          src={'/home/smart-phone.png'}
          alt='smart phone'
          width={400}
          height={523}
          quality={100}
        />
        <Link
          href={data?.acf?.link_social?.shoppee || '/'}
          target='_blank'
          prefetch={false}
          className='flex items-center py-[0.63536rem] px-[1.27rem] xmd:py-[0.51rem] xmd:px-[1.01rem] rounded-[7.5rem] bg-white justify-center w-fit bottom-[14rem] left-[12.6rem] absolute z-50 xmd:left-[10.4rem] xmd:bottom-[12rem]'
        >
          <span className='text-[0.84714rem] tracking-[0.01061rem] leading-[1.2] font-bold text-greyscale-80 block w-fit mr-[0.64rem] xmd:mr-[0.51rem] xmd:text-[0.67548rem] xmd:tracking-[0.00842rem]'>
            Xem tại Shopee
          </span>
          <Image
            className='w-[1.4825rem] h-[1.64129rem] object-contain xmd:w-[1.18199rem] xmd:h-auto'
            src={'/home/icon-shoppe.svg'}
            alt='icon shoppe'
            width={23}
            height={23}
          />
        </Link>
        <div className='size-fit absolute bottom-[8.5rem] left-[16.9rem] z-50  animate-bounce xmd:left-[13.5rem]'>
          <ICArrowRightWhite className='-rotate-90 w-[2.64729rem] h-[4.07679rem] xmd:w-[2.45988rem] xmd:h-auto' />
        </div>
      </div>
      <div className='absolute z-20 w-full h-[25.69546rem] bg-[linear-gradient(180deg,rgba(255,255,255,0.00)_42.61%,#FFF_100%)] bottom-0 left-0 pointer-events-none'></div>
    </div>
  )
}
