'use client'

import Image from 'next/image'
import Link from 'next/link'

const keySuggests = [
  {
    title: 'Bút cảm ứng cho ipad',
  },
  {
    title: 'Ốp bảo vệ iPad',
  },
  {
    title: 'Kính cường lực iPad Pro',
  },
]

export default function PopupResult() {
  return (
    <div className='p-[1.76rem] bg-white absolute -bottom-[1.1rem] left-0 w-full h-fit translate-y-full'>
      <span className='font-medium select-none button text-greyscale-40'>
        Có phải bạn muốn tìm kiếm
      </span>
      <ul className='flex flex-col mt-[1.02rem] *:py-[0.44rem] *:cursor-pointer '>
        {keySuggests.map((e, index) => (
          <li
            className='transition-all duration-300 hover:bg-greyscale-20/50 group rounded-[0.4rem]'
            key={index}
          >
            <span className='font-medium button text-greyscale-80 group-hover:translate-x-[1rem] inline-block transition-all duration-200'>
              {e.title}
            </span>
          </li>
        ))}
      </ul>
      <hr className='bg-[#E5E7EB] w-full h-[1.0.07321rem] mt-[1.32rem] mb-[1.76rem]' />
      <span className='font-medium button text-greyscale-40 block mb-[1.46rem]'>
        Sản phẩm gợi ý
      </span>
      {new Array(3).fill(0).map((_, index) => (
        <Link
          href='/'
          key={index}
          className='flex items-center w-full h-fit'
        >
          <div className='p-[0.37rem] size-fit rounded-[0.3631rem] overflow-hidden'>
            <div className='w-[4.5388rem] h-[4.52884rem]'>
              <Image
                className='object-cover size-full'
                src={'/home/item-product.jpg'}
                alt='item product'
                width={62}
                height={62}
              />
            </div>
          </div>
          <h2 className='ml-[0.88rem] line-clamp-1 button font-medium text-greyscale-40 flex-1'>
            [Paperlike nam châm] Miếng dán AstroMazing Paperfilm Paper like tháo
            rời dành cho iPad Pro 11 12.9 Air 4 5 Gen 7 8 9 10
          </h2>
        </Link>
      ))}
      <button className='flex items-center mx-auto w-fit px-[0.5rem] pt-[0.76rem] mt-[1rem] hover:scale-105 hover:active:scale-95'>
        <span className='text-[#007BEE] button font-medium block w-fit mr-[0.29rem]'>
          Xem Thêm
        </span>
        <svg
          xmlns='http://www.w3.org/2000/svg'
          width='17'
          height='17'
          viewBox='0 0 17 17'
          fill='none'
          className='size-[1.1713rem]'
        >
          <path
            d='M4.79102 5.15925L8.13131 8.49955L4.79102 11.8398'
            stroke='#007BEE'
            strokeWidth='1.2'
            strokeLinecap='round'
            strokeLinejoin='round'
          />
          <path
            opacity='0.3'
            d='M8.86914 5.15925L12.2094 8.49955L8.86914 11.8398'
            stroke='#007BEE'
            strokeWidth='1.2'
            strokeLinecap='round'
            strokeLinejoin='round'
          />
        </svg>
      </button>
    </div>
  )
}
