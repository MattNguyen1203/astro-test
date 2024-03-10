import BreadCrumb from '@/components/breadcrumb'
import CardBill from '@/components/cardbill'
import CardProduct from '@/components/cardproduct'
import CardVoucher from '@/components/cardvoucher'
import PopupProduct from '@/components/popupproduct'
import SlideMultiple from '@/components/slidemultiple'
import Image from 'next/image'
import Link from 'next/link'

export default function GlobalPage() {
  return (
    <div className='w-full'>
      <div className='h-[15rem]'></div>
      <BreadCrumb />
      <div className='flex items-center justify-center w-full h-screen'>
        <div className='flex flex-col w-fit h-fit'>
          <SlideMultiple />
        </div>
      </div>
      <div className='flex items-center justify-center w-full h-screen'>
        <PopupProduct />
      </div>
      <div className='container h-[77.28843rem] relative'>
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
      </div>

      <div className='container '>
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
      </div>

      <div className='container flex flex-col items-center justify-center'>
        <div className='grid grid-cols-1 gap-y-[0.59rem]'>
          {new Array(4).fill(0).map((e, index) => (
            <CardVoucher key={index} />
          ))}
        </div>
        <button className='w-fit py-[0.81rem] px-[1.17rem] rounded-[7.32rem] caption1 text-greyscale-80 font-semibold mt-[1.17rem] bg-[#E9E9E9] mx-auto'>
          +12 voucher
        </button>
      </div>
      <CardBill />
    </div>
  )
}
