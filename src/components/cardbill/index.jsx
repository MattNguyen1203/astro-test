import {formatToVND} from '@/lib/utils'
import ItemProductPayment from '@/sections/payment/ItemProductPayment'
import Image from 'next/image'

export default function CardBill({data, status}) {
  const isDone = status === 'completed'
  return (
    <article className='rounded-[0.58565rem] shadow-[2px_2px_12px_0px_rgba(0,0,0,0.02),-3px_2px_20px_0px_rgba(0,0,0,0.04)] p-[1.17rem] bg-white'>
      <div className='flex items-center justify-between'>
        <div className='flex'>
          <span className='font-normal caption1 text-greyscale-80 inline-block mr-[0.29rem]'>
            Mã đơn hàng:
          </span>
          <span className='text-brown-500 text-[0.87848rem] tracking-[0.00439rem] leading-[1.2] font-semibold'>
            #{data?.order_id}
          </span>
        </div>
        <span className='font-normal caption1 text-greyscale-30'>
          {data?.product_name.length} sản phẩm
        </span>
      </div>
      <hr className='bg-[#ECECECB2] h-[0.07rem] w-full my-[0.88rem] block' />
      {data?.product_name?.map((product, index) => (
        <ItemProductPayment
          key={index}
          item={product}
          index={index}
          length={data?.product_name?.length}
        />
      ))}
      <hr className='bg-[#ECECECB2] h-[0.07rem] w-full my-[0.88rem] block' />
      <div className='flex justify-end w-full xmd:flex xmd:justify-between xmd:items-center'>
        <span className='text-[#D48E43] sub1 font-bold block text-end'>
          {formatToVND(data?.order_total)}
        </span>
      </div>
      <div
        className={`${
          isDone ? 'justify-end' : 'justify-between'
        } flex mt-[0.88rem] xmd:w-full`}
      >
        {!isDone && (
          <div className='flex items-center'>
            <Image
              className='size-[1.1713rem] object-contain'
              src={'/account/car.svg'}
              alt='icon car'
              width={16}
              height={16}
            />
            <span className='font-medium sub2 text-brown-600 inline-block ml-[0.59rem] w-fit'>
              Đang xử lý
            </span>
          </div>
        )}
        {/* <div className='flex items-center xmd:hidden'>
          <Image
            className='size-[1.1713rem] object-contain'
            src={'/account/car.svg'}
            alt='icon car'
            width={16}
            height={16}
          />
          <span className='font-medium sub2 text-brown-600 inline-block ml-[0.59rem] w-fit'>
            Đang xử lý
          </span>
        </div> */}
        <div className='flex xmd:w-full'>
          <button className='p-[0.73rem] rounded-[0.43924rem] uppercase caption1 tracking-[0.00439rem] font-semibold text-white bg-blue-700 mr-[0.59rem] xmd:w-[49%] '>
            {isDone ? 'Mua lại' : 'Thanh Toán Lại'}
          </button>
          <button className='p-[0.73rem] rounded-[0.43924rem] uppercase caption1 tracking-[0.00439rem] font-semibold bg-white text-blue-800 border border-solid border-blue-800 xmd:w-[49%]'>
            CHI TIẾT ĐƠN
          </button>
        </div>
      </div>
    </article>
  )
}
