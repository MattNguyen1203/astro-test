import CardProduct from '@/components/cardproduct'
import Link from 'next/link'

export default function ProductPreOrder() {
  return (
    <section className='container '>
      <div className='my-[3.51rem] flex justify-center items-center rounded-[0.87848rem] bg-[linear-gradient(97deg,#102841_0%,#1359A1_100%)] px-[4.39rem] py-[1.17rem] w-fit mx-auto'>
        <h2 className='bg-[linear-gradient(44deg,#FFF0D8_52.89%,#FFD797_107.96%)] h6 font-bold bg-clip-text'>
          SẢN PHẨM SẮP RA MẮT
        </h2>
      </div>
      <div className='grid grid-cols-5 grid-rows-2 gap-x-[0.88rem] gap-y-[1.17rem] w-full'>
        {new Array(10).fill(0).map((e, index) => (
          <CardProduct key={index} />
        ))}
      </div>
      <Link
        className='w-fit px-[1.46rem] py-[0.81rem] rounded-[7.5rem] bg-[#F2F2F2] flex items-center caption1 font-semibold text-greyscale-80 mx-auto mt-[2.93rem] hover:bg-[#dddddd] transition-all duration-200'
        href={'/'}
      >
        + 16 SẢN PHẨM
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
    </section>
  )
}
