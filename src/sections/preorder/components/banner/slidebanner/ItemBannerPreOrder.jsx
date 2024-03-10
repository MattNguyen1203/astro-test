import Image from 'next/image'
import Link from 'next/link'

export default function ItemBannerPreOrder() {
  return (
    <Link
      href={'/'}
      className='w-[21.43163rem] h-full pr-[4.1rem] block pb-[1rem]'
    >
      <Image
        className='size-[10.61493rem] block object-contain mx-auto'
        src={'/preorder/item-preorder.png'}
        alt='item preorder'
        width={150}
        height={150}
      />
      <div className='flex items-center justify-center my-[0.88rem]'>
        <span className='sub2 font-medium text-white w-fit mr-[0.37rem]'>
          Giá chỉ từ
        </span>
        <span className='bg-[linear-gradient(104deg,#E78C03_-3.95%,#FFB84F_106.72%)] bg-clip-text line-through font-medium text-[1.02489rem] leading-[1.2] tracking-[0.01025rem]'>
          400.000
        </span>
      </div>
      <div className='flex justify-end pr-[2.73rem]'>
        <div className='relative size-fit'>
          <div className='h-[4.09956rem] w-[5.19766rem] border border-solid border-[#FBEFCD] rounded-[0.29283rem] bg-[linear-gradient(95deg,#EEF8FF_0%,rgba(255,245,237,0.90)_100%)] flex items-center justify-center relative z-10'>
            <span className='font-bold text-center sub1 bg-clip-text bg-[linear-gradient(97deg,#102841_0%,#1359A1_100%)]'>
              ĐẶT
              <br />
              NGAY
            </span>
          </div>
          <div className='h-[2.70864rem] w-[8.19912rem] rounded-[0.29283rem] sub1 font-bold text-[#132F4C] bg-[linear-gradient(180deg,#FBEFCD_0%,#CCB17B_53.93%,#DFD3B1_100%)] absolute top-1/2 -translate-y-1/2 -translate-x-full left-[0.76rem] pl-[0.73rem] z-[5] flex items-center'>
            299.000đ
          </div>
        </div>
      </div>
    </Link>
  )
}
