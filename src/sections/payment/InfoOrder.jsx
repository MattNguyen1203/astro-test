import {formatToVND, handlePriceTotalOrder} from '@/lib/utils'
import ItemProductPayment from './ItemProductPayment'
import {defaultPriceShip, rangeFreeShip} from '@/lib/constants'
import {Fragment} from 'react'

export default function InfoOrder({
  carts,
  onSubmit,
  ship,
  payment,
  isCOD,
  isPending,
  coupon,
}) {
  console.log('🚀 ~ coupon:', coupon)
  const totalPrice = handlePriceTotalOrder(carts)

  const isFreeShip = totalPrice >= rangeFreeShip

  const handleTotalPayment = () => {
    const priceShip = isFreeShip ? 0 : defaultPriceShip
    return totalPrice + priceShip
  }

  const handleShowPrice = (price) => {
    if (Number(price)) {
      return '-' + formatToVND(price)
    } else {
      return '0đ'
    }
  }

  const handleAddCoupon = (total, coupon) => {
    if (coupon?.type === 'fixed_cart') {
      return handleShowPrice(coupon?.amount)
    }
    if (coupon?.type === 'fixed_product') {
    }
    if (coupon?.type === 'percent') {
      const discountPercent = (total / 100) * Number(coupon?.amount)
      if (discountPercent > Number(coupon?.max_discount)) {
        return handleShowPrice(coupon?.max_discount)
      } else {
        return handleShowPrice(discountPercent)
      }
    }
  }
  console.log('handleAddCoupon(coupon)', handleAddCoupon(totalPrice, coupon))

  return (
    <aside className='w-[34.91947rem] flex-shrink-0 h-fit sticky top-[9.76rem] right-0 rounded-[0.58565rem] shadow-[-3px_2px_20px_0px_rgba(0,0,0,0.04),2px_2px_12px_0px_rgba(0,0,0,0.02)] p-[1.17rem]'>
      <h3 className='font-medium sub2 text-greyscale-80'>
        THÔNG TIN ĐƠN HÀNG:
      </h3>
      <hr className='my-[1.46rem] h-[0.07321rem] bg-[#1E417C29]' />
      <div className='flex items-center justify-between'>
        <span className='text-[0.87848rem] leading-[1.833] tracking-[0.0022rem] text-greyscale-40'>
          Danh sách sản phẩm :
        </span>
        <span className='font-normal caption1 text-greyscale-30'>
          {carts?.length} sản phẩm
        </span>
      </div>
      <div className='mt-[0.59rem]'>
        {carts?.map((item, index) => (
          <Fragment key={index}>
            <ItemProductPayment item={item} />
            {index < 3 && (
              <hr className='my-[0.59rem] bg-[#1E417C14] h-[0.07321rem]' />
            )}
          </Fragment>
        ))}
      </div>
      <div className='rounded-[0.58565rem] p-[0.88rem] bg-elevation-20 space-y-[0.59rem]'>
        <div className='flex items-center justify-between'>
          <span className='font-medium caption1 text-greyscale-40'>
            Hình thức thanh toán:
          </span>
          <span className='font-semibold caption1 text-greyscale-80'>
            {payment || 'Null'}
          </span>
        </div>
        <div className='flex items-center justify-between'>
          <span className='font-medium caption1 text-greyscale-40'>
            Phương thức vận chuyển:
          </span>
          <span className='font-semibold caption1 text-greyscale-80'>
            {ship}
          </span>
        </div>

        <hr className='h-[0.07321rem] bg-[#1E417C29] my-[0.29rem]' />
        <div className='flex items-center justify-between'>
          <span className='font-medium caption1 text-greyscale-40'>
            Tổng tiền hàng:
          </span>
          <span className='font-semibold caption1 text-greyscale-80'>
            {formatToVND(totalPrice)}
          </span>
        </div>
        <div className='flex items-center justify-between'>
          <span className='font-medium caption1 text-greyscale-40'>
            Phí vận chuyển:
          </span>
          <span className='font-semibold caption1 text-greyscale-80'>
            {formatToVND(defaultPriceShip)}
          </span>
        </div>
        <div className='flex items-center justify-between'>
          <span className='font-medium caption1 text-greyscale-40'>
            Voucher giảm giá
          </span>
          <span className='font-semibold caption1 text-greyscale-80'>
            {handleAddCoupon(totalPrice, coupon)}
          </span>
        </div>
        {/* <div className='flex items-center justify-between'>
          <span className='font-medium caption1 text-greyscale-40'>
            Khuyến mãi hạng thành viên
          </span>
          <span className='font-semibold caption1 text-greyscale-80'>
            - 80.000đ
          </span>
        </div> */}
        <div className='flex items-center justify-between'>
          <span className='font-medium caption1 text-greyscale-40'>
            Giảm giá vận chuyển:
          </span>
          <span className='font-semibold caption1 text-greyscale-80'>
            {isFreeShip ? '-' : ''}
            {formatToVND(defaultPriceShip)}
          </span>
        </div>
        <hr className='h-[0.07321rem] bg-[#1E417C29] my-[0.29rem]' />
        <div className='flex items-center justify-between'>
          <span className='font-semibold sub2 text-greyscale-50'>
            Tổng thanh toán:
          </span>
          <span className='sub1 font-bold text-[#D48E43]'>
            {formatToVND(handleTotalPayment())}
          </span>
        </div>
      </div>
      <button
        onClick={onSubmit}
        type='submit'
        className='flex items-center justify-center w-full text-white bg-blue-700 rounded-[0.58565rem] mt-[1.64rem] h-[2.92826rem] caption1 font-semibold'
      >
        {isPending ? (
          <svg
            className='animate-spin size-[2rem] text-white'
            xmlns='http://www.w3.org/2000/svg'
            fill='none'
            viewBox='0 0 24 24'
          >
            <circle
              className='opacity-25'
              cx='12'
              cy='12'
              r='10'
              stroke='currentColor'
              strokeWidth='4'
            ></circle>
            <path
              fill='currentColor'
              d='M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z'
            ></path>
          </svg>
        ) : isCOD ? (
          'ĐẶT HÀNG NGAY'
        ) : (
          'THANH TOÁN NGAY'
        )}
      </button>
    </aside>
  )
}
