'use client'
import Image from 'next/image'
import Link from 'next/link'
import {useRouter} from 'next/navigation'
import {useState} from 'react'

export default function ProductSuggest({productSuggest}) {
  const router = useRouter()
  const [isMore, setIsMore] = useState(false)
  return (
    <>
      <span className='font-medium button text-greyscale-40 block mb-[1.46rem]'>
        Sản phẩm gợi ý
      </span>
      {productSuggest?.item?.slice(0, isMore ? 6 : 3)?.map((product, index) => (
        <Link
          href={product?.slug}
          key={index}
          className='flex items-center w-full h-fit'
        >
          <div className='p-[0.37rem] size-fit rounded-[0.3631rem] overflow-hidden'>
            <div className='w-[4.5388rem] h-[4.52884rem]'>
              <Image
                className='object-cover size-full'
                src={product?.featuredImage?.url || '/home/item-product.jpg'}
                alt={product?.featuredImage?.alt || 'item product'}
                width={62}
                height={62}
              />
            </div>
          </div>
          <h2 className='ml-[0.88rem] line-clamp-1 button font-medium text-greyscale-40 flex-1'>
            {product?.name}
          </h2>
        </Link>
      ))}
      <button
        onClick={() => {
          isMore && router.push('/san-pham')
          setIsMore(!isMore)
        }}
        className='flex items-center mx-auto w-fit px-[0.5rem] pt-[0.76rem] mt-[1rem] hover:scale-105 hover:active:scale-95 select-none'
      >
        <span className='text-[#007BEE] button font-medium block w-fit mr-[0.29rem]'>
          {isMore ? 'Xem tất cả' : 'Xem Thêm'}
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
    </>
  )
}
