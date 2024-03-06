import ICArrowRightWhite from '@/components/icon/ICArrowRightWhite'
import {Icon} from '@radix-ui/react-select'
import Image from 'next/image'
import Link from 'next/link'

export default function FeedBack() {
  return (
    <div className='relative w-full h-[77.5rem]'>
      <Image
        className='z-0 object-fill'
        src='/home/bg-feedback.png'
        alt='feedback custormer'
        fill
        sizes='100vw'
      />
      <div className='w-[29.3rem] h-[38.3rem] sticky top-[calc(100vh-38.3rem)] left-1/2 -translate-x-1/2 z-10'>
        <Image
          className='object-cover size-full'
          src={'/home/smart-phone.png'}
          alt='smart phone'
          width={400}
          height={523}
          quality={100}
        />
        <Link
          href={'/'}
          className='flex items-center py-[0.63536rem] px-[1.27rem] rounded-[7.5rem] bg-white justify-center w-fit bottom-[14rem] left-[12.6rem] absolute z-50'
        >
          <span className='text-[0.84714rem] tracking-[0.01061rem] leading-[1.2] font-bold text-greyscale-80 block w-fit mr-[0.64rem]'>
            Xem tại Shopee
          </span>
          <Image
            className='w-[1.4825rem] h-[1.64129rem] object-contain'
            src={'/home/icon-shoppe.svg'}
            alt='icon shoppe'
            width={23}
            height={23}
          />
        </Link>
        <ICArrowRightWhite className='-rotate-90 absolute bottom-[8.5rem] left-[16.9rem] z-50 w-[2.64729rem] h-[4.07679rem]' />
      </div>
      <div className='absolute z-20 w-full h-[25.69546rem] bg-[linear-gradient(180deg,rgba(255,255,255,0.00)_42.61%,#FFF_100%)] bottom-0 left-0 pointer-events-none'></div>
    </div>
  )
}
