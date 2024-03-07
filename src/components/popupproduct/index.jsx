import Image from 'next/image'
import TemVoucher from './TemVoucher'

export default function PopupProduct() {
  return (
    <div className='px-[1.17rem] pt-[1.17rem] pb-[1.14rem] rounded-[0.87848rem] bg-elevation-20 w-fit h-fit flex'>
      <div className='w-[21.81552rem] mr-[1.17rem]'>
        <div className='bg-white w-[21.81552rem] h-[21.76764rem] rounded-[0.67818rem] overflow-hidden'>
          <Image
            className='object-cover size-full'
            src={'/components/item-first.png'}
            alt='item product'
            width={300}
            height={300}
          />
        </div>
        <div className='grid grid-cols-5 mt-[0.5rem] gap-x-[0.4rem] h-[4.0399rem]'>
          {new Array(5).fill(0).map((_, index) => (
            <div
              key={index}
              className='bg-white size-full rounded-[0.45212rem]'
            >
              <Image
                className='object-cover size-full rounde-[0.45212rem]'
                src={'/components/item-first.png'}
                alt='item product'
                width={300}
                height={300}
              />
            </div>
          ))}
        </div>
      </div>
      <div className='w-[26.79356rem] p-[0.88rem] bg-white rounded-[0.87848rem] relative'>
        <svg
          xmlns='http://www.w3.org/2000/svg'
          width='32'
          height='32'
          viewBox='0 0 32 32'
          fill='none'
          className='size-[2.34261rem] absolute top-[0.37rem] right-[0.29rem] cursor-pointer'
        >
          <path
            d='M21.3327 21.3336L15.9994 16.0003M15.9994 16.0003L10.666 10.667M15.9994 16.0003L21.3327 10.667M15.9994 16.0003L10.666 21.3337'
            stroke='#262626'
            strokeWidth='2.66667'
            strokeLinecap='round'
            strokeLinejoin='round'
          />
        </svg>
        <h2 className='sub2 text-greyscale-50 font-medium w-[18.88726rem] h-[2.489402rem] line-clamp-2 mb-[0.88rem]'>
          Bút cảm ứng AstroMazing Pencil GD cho iPad
        </h2>
        <div className='w-[19rem] h-[2.78rem] rounded-[0.58565rem] bg-[linear-gradient(100deg,#E9940B_46.57%,#FFDBA3_100.64%)]'>
          <span>280.000đ</span>
          <span>330.000đ</span>
          <span>-15%</span>
        </div>
        <TemVoucher />
      </div>
    </div>
  )
}
