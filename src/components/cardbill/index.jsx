import Image from 'next/image'

export default function CardBill({data, status}) {
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
        <div
          className='py-[0.59rem] flex'
          key={index}
        >
          <div className='size-[5.27086rem] pr-[0.73206rem] pb-[0.73206rem]'>
            <Image
              className='object-contain size-full'
              src={product?.featuredImage?.url}
              alt={product?.featuredImage?.alt}
              width={62}
              height={62}
            />
          </div>
          <div className='w-[37.555rem] mx-[0.88rem]'>
            <h2 className='caption1 font-medium text-greyscale-60 line-clamp-2 min-h-[2.19619rem] mb-[0.59rem]'>
              {product?.name}
            </h2>
            <ul className='flex *:px-[0.59rem] *:py-[0.44rem] *:bg-elevation-20 *:rounded-[0.43924rem] *:caption1 *:font-normal *:text-greyscale-40 *:ml-[0.59rem] *:block'>
              <li className='!ml-0'>xanh min</li>
              <li>Gen 10th</li>
            </ul>
          </div>
          <div className='flex flex-col justify-center'>
            <span className='block font-medium caption1 text-greyscale-40 text-end'>
              x{product.quantity}
            </span>
            <span className='block mt-[0.88rem] caption1 font-bold text-blue-600'>
              {parseInt(product.salePrice).toLocaleString('vi-VN')}đ
            </span>
            <span className='font-normal line-through caption1 text-greyscale-40'>
              {parseInt(product.regular_price).toLocaleString('vi-VN')}đ
            </span>
          </div>
        </div>
      ))}
      <hr className='bg-[#ECECECB2] h-[0.07rem] w-full my-[0.88rem] block' />
      <div className='w-full xmd:flex xmd:justify-between xmd:items-center flex justify-between'>
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
        <span className='text-[#D48E43] sub1 font-bold block text-end'>
          {parseInt(data?.order_total).toLocaleString('vi-VN')}đ
        </span>
      </div>
      <div className='flex mt-[0.88rem] justify-between xmd:w-full'>
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
            {status === 'done' ? 'Mua lại' : 'Thanh Toán Lại'}
          </button>
          <button className='p-[0.73rem] rounded-[0.43924rem] uppercase caption1 tracking-[0.00439rem] font-semibold bg-white text-blue-800 border border-solid border-blue-800 xmd:w-[49%]'>
            CHI TIẾT ĐƠN
          </button>
        </div>
      </div>
    </article>
  )
}
