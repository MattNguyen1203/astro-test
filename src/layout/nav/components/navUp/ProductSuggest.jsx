'use client'
import Image from 'next/image'
import Link from 'next/link'
import {usePathname, useRouter, useSearchParams} from 'next/navigation'

export default function ProductSuggest({productSuggest, data, value}) {
  const router = useRouter()
  const pathName = usePathname()
  const searchParams = useSearchParams()

  const products = data
    ? data?.item?.slice(0, 3)
    : productSuggest?.item?.slice(0, 3)

  return (
    <>
      <span className='font-medium button text-greyscale-40 block mb-[1.46rem]'>
        {data ? 'Sản phẩm theo từ khoá tìm kiểm' : 'Sản phẩm gợi ý'}
      </span>
      {products?.map((product, index) => (
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
          const paramNew = new URLSearchParams(searchParams)
          if (value) {
            paramNew.set('search', encodeURI(value))
          } else {
            paramNew.delete('search')
          }
          if (pathName?.includes('/san-pham')) {
            router.push(pathName + '?' + paramNew.toString())
          } else {
            router.push('/san-pham' + '?' + paramNew.toString())
          }
        }}
        className='flex items-center mx-auto w-fit px-[0.5rem] pt-[0.76rem] mt-[1rem] hover:scale-105 hover:active:scale-95 select-none'
      >
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
    </>
  )
}
