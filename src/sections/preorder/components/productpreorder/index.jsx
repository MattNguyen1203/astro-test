import CardProduct from '@/components/cardproduct'
import Link from 'next/link'

export default function ProductPreOrder({session, products}) {
  const lengthMore = Number(products?.count) - 10
  return (
    <section className='container relative z-10'>
      <div className='my-[3.51rem] flex justify-center items-center rounded-[0.87848rem] md:bg-[linear-gradient(97deg,#102841_0%,#1359A1_100%)] px-[4.39rem] py-[1.17rem] xmd:py-[0.73206rem] w-fit mx-auto xmd:mt-[2.34rem] xmd:mb-[1.17rem] xmd:w-full xmd:bg-[rgba(244,244,244,0.90)]'>
        <h2 className='md:bg-[linear-gradient(44deg,#FFF0D8_52.89%,#FFD797_107.96%)] h6 font-bold font-svnGraphik md:bg-clip-text xmd:rounded-[0.58565rem] xmd:sub2 xmd:tracking-[0.01025rem] xmd:text-greyscale-80 xmd:font-semibold'>
          SẢN PHẨM SẮP RA MẮT
        </h2>
      </div>
      <div className='grid grid-cols-5 grid-rows-2 gap-x-[0.88rem] gap-y-[1.17rem] w-full xmd:grid-cols-2 xmd:grid-rows-4 xmd:gap-[0.59rem]'>
        {products?.item?.map((product, index) => (
          <CardProduct
            key={index}
            session={session}
            product={product}
          />
        ))}
      </div>
      {lengthMore > 0 && (
        <Link
          className='w-fit px-[1.46rem] py-[0.81rem] rounded-[7.5rem] bg-[#F2F2F2] flex items-center caption1 font-semibold text-greyscale-80 mx-auto mt-[2.93rem] hover:bg-[#dddddd] transition-all duration-200 xmd:mt-[1.17rem]'
          href={'/san-pham'}
        >
          + {lengthMore} SẢN PHẨM
          <svg
            xmlns='http://www.w3.org/2000/svg'
            width='7'
            height='11'
            viewBox='0 0 7 11'
            fill='none'
            className='w-[0.5rem] h-[0.8rem] ml-[0.59rem]'
          >
            <path
              d='M1.5 1.66797L5.5 5.66797L1.5 9.66797'
              stroke='#262626'
              strokeWidth='2'
              strokeLinecap='round'
              strokeLinejoin='round'
            />
          </svg>
        </Link>
      )}
    </section>
  )
}
