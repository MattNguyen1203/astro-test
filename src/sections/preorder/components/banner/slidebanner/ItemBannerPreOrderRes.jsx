import Image from 'next/image'
import Link from 'next/link'

export default function ItemBannerPreOrderRes({isPriority}) {
  return (
    <Link
      href={'/'}
      className='px-[0.295rem] size-full relative block'
    >
      <div className='relative w-full aspect-square rounded-[0.87848rem] border border-solid border-[#FBEFCD] shadow-[2px_4px_16px_0px_rgba(12,46,112,0.04),-6px_2px_28px_0px_rgba(12,46,112,0.08)]'>
        <Image
          className='absolute top-0 left-0 size-full rounded-[0.87848rem]'
          src={'/preorder/bg-item-res.jpg'}
          alt='background item'
          width={180}
          height={180}
          priority={isPriority}
        />
        <Image
          className='relative z-10 rounded-[0.87848rem] size-full object-contain'
          src={'/preorder/item-preorder.png'}
          alt='item-preorder'
          width={180}
          height={180}
          priority={isPriority}
        />
        <div className='bg-[linear-gradient(104deg,#E88B00_-3.95%,#CE7B00_106.72%)] w-[2.489012rem] h-[1.02489rem] rounded-full font-semibold text-white absolute top-[0.44rem] left-[0.44rem] text-[0.58565rem] z-20 flex justify-center items-start tracking-[0.00293rem] pt-[0.07rem] leading-[1.2]'>
          - 10%
        </div>
      </div>
      <button className='absolute bottom-[0.45rem] z-30 -translate-x-1/2 left-1/2 w-[10.61493rem]'>
        <div className='w-[7.02782rem] h-[2.70864rem] bg-[linear-gradient(180deg,#FBEFCD_0%,#CCB17B_53.93%,#DFD3B1_100%)] rounded-[0.29283rem] relative flex flex-col justify-center items-start pl-[0.59rem] pt-[0.3rem]'>
          <span className='line-through text-[0.73206rem] font-svnGraphik text-[#132F4C] font-normal leading-[1.2] block'>
            265.000đ
          </span>
          <span className='body2 font-svnGraphik font-bold tracking-[0.00256rem] text-[#132F4C] block -translate-y-[0.25rem]'>
            165.000đ
          </span>
          <div className='bg-[linear-gradient(95deg,#EEF8FF_0%,rgba(255,245,237,0.90)_100%)] border border-solid border-[#FBEFCD] rounded-[0.29283rem] flex justify-center items-center w-[4.75842rem] h-[3.51391rem] absolute right-[1rem] top-1/2 -translate-y-1/2 z-10 translate-x-full'>
            <span className='button font-svnGraphik font-bold bg-[linear-gradient(97deg,#102841_0%,#1359A1_100%)] bg-clip-text inline-block'>
              ĐẶT NGAY
            </span>
          </div>
        </div>
      </button>
    </Link>
  )
}
