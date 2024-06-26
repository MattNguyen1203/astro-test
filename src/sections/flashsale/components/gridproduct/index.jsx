import CardProduct from '@/components/cardproduct'
import ICArrowRightBlack from '@/components/icon/ICArrowRightBlack'
import getData from '@/lib/getData'
import Image from 'next/image'
import Link from 'next/link'

export default async function GridProductFL({isMobile, id, title, session}) {
  const products = await getData(
    `/okhub/v1/product/filter/products?category=${id}&limit=8&page=1&is_flashsale=true`,
  )

  // if (Number(products?.count) <= 0) return null
  const countMore = Number(products?.count) - 10

  return (
    <section className='container xmd:mx-[0.62rem] h-[77.28843rem] xmd:h-fit relative mt-[6.16rem] xmd:mt-[3.51rem]'>
      <div
        id={id}
        className='absolute top-0 left-0 -translate-y-[18rem] xmd:-translate-y-[10rem]'
      ></div>
      <div className='md:bg-[linear-gradient(44deg,#FFF0D8_52.89%,#FFD797_107.96%)] md:absolute md:w-[40.81091rem] h-[4.465rem] md:-top-[1.47rem] md:left-1/2 md:-translate-x-1/2 rounded-[1.1713rem] flex justify-center items-center xmd:bg-[#F4F4F4] xmd:rounded-[0.58565rem] xmd:h-[2.92826rem] xmd:justify-between xmd:px-[0.88rem] xmd:w-full'>
        <h2 className='font-bold h5 text-greyscale-80 xmd:sub2 xmd:font-semibold xmd:tracking-[0.01025rem] uppercase'>
          {title}
        </h2>
        {isMobile && <ICArrowRightBlack className='size-[1.46413rem]' />}
      </div>
      {!isMobile && (
        <Image
          className='z-0 object-contain'
          src={'/flashsale/bg-grid.png'}
          alt='background grid'
          fill
          sizes='87vw'
        />
      )}
      <div className='relative z-10 mx-auto pt-[7.75rem] w-[69.91215rem] xmd:pt-[1.17rem] xmd:w-full'>
        <div className='w-full grid grid-cols-4 grid-rows-2 gap-[1.17rem] xmd:gap-[0.59rem] xmd:grid-cols-2 xnd:grid-rows-4'>
          {products?.item?.map((product, index) => (
            <CardProduct
              boxPlaced
              key={index}
              session={session}
              product={product}
            />
          ))}
        </div>
        {countMore > 0 && (
          <Link
            href={`/san-pham/${id}?flashsale=true`}
            className='px-[1.46rem] py-[0.81rem] rounded-[7.5rem] bg-[#f2f2f2] w-fit mt-[2.34rem] xmd:mt-[1.17rem] mx-auto flex items-center'
          >
            <span className='font-semibold caption1 text-greyscale-80 inline-block mr-[0.59rem] xmd:tracking-[0.00439rem]'>
              +{countMore} SẢN PHẨM
            </span>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              width='7'
              height='10'
              viewBox='0 0 7 10'
              fill='none'
            >
              <path
                d='M1.51172 1L5.51172 5L1.51172 9'
                stroke='#262626'
                strokeWidth='2'
                strokeLinecap='round'
                strokeLinejoin='round'
              />
            </svg>
          </Link>
        )}
      </div>
    </section>
  )
}
