import CardProduct from '@/components/cardproduct'
import Image from 'next/image'
import Link from 'next/link'

export default function GridProdutcFL() {
  return (
    <section className='container h-[77.28843rem] relative mt-[6.16rem] '>
      <div className='bg-[linear-gradient(44deg,#FFF0D8_52.89%,#FFD797_107.96%)] absolute w-[40.81091rem] h-[4.465rem] -top-[1.47rem] left-1/2 -translate-x-1/2 rounded-[1.1713rem] flex justify-center items-center'>
        <h2 className='font-bold h5 text-greyscale-80'>PHỤ KIỆN IPAD</h2>
      </div>
      <Image
        className='z-0 object-contain'
        src={'/flashsale/bg-grid.png'}
        alt='background grid'
        fill
        sizes='87vw'
      />
      <div className='relative z-10 mx-auto pt-[7.75rem] w-[69.91215rem]'>
        <div className='w-full grid grid-cols-4 grid-rows-2 gap-[1.17rem]'>
          {new Array(8).fill(0).map((e, index) => (
            <CardProduct key={index} />
          ))}
        </div>
        <Link
          href={'/flashsale'}
          className='px-[1.46rem] py-[0.81rem] rounded-[7.32rem] bg-[#f2f2f2] w-fit mt-[2.34rem] mx-auto flex items-center'
        >
          <span className='font-semibold caption1 text-greyscale-80 inline-block mr-[0.59rem]'>
            +156 SẢN PHẨM
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
      </div>
    </section>
  )
}
