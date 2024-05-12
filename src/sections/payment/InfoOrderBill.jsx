'use client'
import {rePayment} from '@/actions/rePayment'
import {propertyPayment} from '@/lib/constants'
import {formatToVND, handleDate} from '@/lib/utils'
import Link from 'next/link'
import {useRouter} from 'next/navigation'
import {useEffect, useTransition} from 'react'
import {toast} from 'sonner'
import ItemProductPayment from './ItemProductPayment'
import useStore from '@/app/(store)/store'

export default function InfoOrderBill({
  detailOrder,
  isSuccess,
  isMobile,
  dataCartNew,
}) {
  const router = useRouter()

  console.log('detailOrder', detailOrder)

  const [isPending, setTransition] = useTransition()
  const setProgress = useStore((state) => state.setProgress)

  useEffect(() => {
    const productsBill = detailOrder?.product
    localStorage.removeItem('sessionCart')
    const localGet = localStorage.getItem('cartAstro')
      ? JSON.parse(localStorage.getItem('cartAstro'))
      : []

    if (!localGet?.length) return
    const localGetNew = localGet?.filter((item) =>
      productsBill?.find((product) => product?.id !== item?.id),
    )
    localStorage.setItem('cartAstro', JSON.stringify(localGetNew))
    return () => {
      setProgress(100)
    }
  }, [])

  const isShipIn = detailOrder?.shipping_lines?.[0]?.method_id === 'in_hcm'

  const handleRePayment = () => {
    setTransition(() => {
      rePayment(
        `/okhub/v1/order/${detailOrder?.id}/pay?url_redirect=${process.env.NEXT_PUBLIC_DOMAIN}`,
      )
        .then((res) => {
          if (res?.url) {
            router.push(res?.url)
          } else {
            toast.error('Đã có lỗi xảy ra!', {
              duration: 5000,
              position: 'bottom-center',
            })
          }
        })
        .catch((err) =>
          toast.error('Đã có lỗi xảy ra!', {
            duration: 5000,
            position: 'bottom-center',
          }),
        )
    })
  }

  const handleTotalBill = () => {
    let sum = 0
    detailOrder?.coupon?.forEach(
      (item) => (sum += Number(item?.coupon_discount)),
    )
    return sum + Number(detailOrder?.total)
  }

  const totalBill = handleTotalBill()

  const isFreeShip =
    detailOrder?.shipping_lines?.[0]?.method_id === 'free_shipping' ||
    totalBill >= 300000

  return (
    <aside className='md:sticky top-[9.76rem] right-0 w-[36.2rem] xmd:w-full'>
      <div className='xmd:px-[0.58565rem] p-[1.46rem] rounded-[0.58565rem] bg-white'>
        <div className='flex items-center'>
          <span className='block w-fit mr-[0.59rem] sub2 font-semibold text-greyscale-80'>
            THÔNG TIN MÃ ĐƠN HÀNG:
          </span>
          <span className='font-semibold sub2 text-brown-500'>
            {detailOrder?.id}
          </span>
        </div>
        <hr className='my-[0.59rem] bg-[#ECECECB2] h-[0.07321rem] xmd:my-[0.88rem]' />
        <ul className='space-y-[0.88rem]'>
          <li className='flex'>
            <span className='w-[12.1rem] caption1 font-semibold text-greyscale-80 flex-shrink-0'>
              - Khách hàng:
            </span>
            <span className='font-normal caption1 text-greyscale-40'>
              {detailOrder?.shipping?.first_name +
                detailOrder?.shipping?.last_name}
            </span>
          </li>
          <li className='flex'>
            <span className='w-[12.1rem] caption1 font-semibold text-greyscale-80 flex-shrink-0'>
              - Số điện thoại:
            </span>
            <span className='font-normal caption1 text-greyscale-40'>
              {detailOrder?.shipping?.phone}
            </span>
          </li>
          <li className='flex'>
            <span className='w-[12.1rem] caption1 font-semibold text-greyscale-80 flex-shrink-0'>
              - Email:
            </span>
            <span className='font-normal caption1 text-greyscale-40'>
              {detailOrder?.billing?.email}
            </span>
          </li>
          <li className='flex'>
            <span className='w-[12.1rem] caption1 font-semibold text-greyscale-80 flex-shrink-0'>
              - Ngày đặt hàng:
            </span>
            <span className='font-normal caption1 text-greyscale-40'>
              {handleDate(detailOrder?.date_created)}
            </span>
          </li>
          <li className='flex'>
            <span className='w-[12.1rem] caption1 font-semibold text-greyscale-80 flex-shrink-0'>
              - Địa chỉ nhận hàng:
            </span>
            <span className='font-normal capitalize caption1 text-greyscale-40'>
              {detailOrder?.shipping?.address_1 +
                ', ' +
                detailOrder?.shipping?.address_2 +
                ', ' +
                detailOrder?.shipping?.city}
            </span>
          </li>
        </ul>
        {isMobile && (
          <div className='p-[1.46rem] xmd:px-[0.58565rem] rounded-[0.58565rem] bg-white'>
            <div className='flex items-center justify-between'>
              <span className='text-[0.87848rem] leading-[1.833] tracking-[0.0022rem] text-greyscale-40'>
                Danh sách sản phẩm :
              </span>
              <span className='font-normal caption1 text-greyscale-30'>
                {dataCartNew?.length} sản phẩm
              </span>
            </div>
            <hr className='my-[0.59rem] bg-[#1E417C14] h-[0.07321rem] xmd:my-[0.88rem]' />
            <div className='mt-[0.59rem]'>
              {dataCartNew?.map((item, index) => (
                <ItemProductPayment
                  key={index}
                  item={item}
                  length={dataCartNew?.length}
                  index={index}
                />
              ))}
            </div>
          </div>
        )}
        <div
          className={`${
            isSuccess ? 'bg-[#F3F9F0]' : 'bg-brown-50'
          } rounded-[0.58565rem] p-[0.88rem] space-y-[0.59rem] mt-[0.88rem]`}
        >
          <div className='flex items-center justify-between'>
            <span className='font-medium caption1 text-greyscale-40'>
              Hình thức thanh toán:
            </span>
            <span className='font-semibold caption1 text-greyscale-80'>
              {detailOrder?.payment_method === 'onepay'
                ? 'Chuyển khoản'
                : propertyPayment?.find(
                    (e) => e?.value === detailOrder?.payment_method,
                  )?.label}
            </span>
          </div>
          <div className='flex items-center justify-between'>
            <span className='font-medium caption1 text-greyscale-40'>
              Phương thức vận chuyển:
            </span>
            <span className='font-semibold caption1 text-greyscale-80'>
              {isShipIn ? 'Hỏa tốc' : 'Tiêu chuẩn'}
            </span>
          </div>

          <hr className='h-[0.07321rem] bg-[#1E417C29] my-[0.29rem] xmd:my-[0.88rem]' />
          <div className='flex items-center justify-between'>
            <span className='font-medium caption1 text-greyscale-40'>
              Tổng tiền hàng:
            </span>
            <span className='font-semibold caption1 text-greyscale-80'>
              {formatToVND(totalBill)}
            </span>
          </div>
          <div className='flex items-center justify-between'>
            <span className='font-medium caption1 text-greyscale-40'>
              Phí vận chuyển:
            </span>
            <span className='font-semibold caption1 text-greyscale-80'>
              {isShipIn ? 'Nhân viên sẽ liên hệ' : '30.000đ'}
            </span>
          </div>
          {detailOrder?.coupon?.length && (
            <div className='flex items-center justify-between'>
              <span className='font-medium caption1 text-greyscale-40'>
                Voucher giảm giá
              </span>
              <span className='font-semibold caption1 text-greyscale-80'>
                -{formatToVND(detailOrder?.coupon?.[0]?.coupon_discount)}
              </span>
            </div>
          )}
          {/* {!!detailOrder?.counpon?.length && (
            <div className='flex items-center justify-between'>
              <span className='font-medium caption1 text-greyscale-40'>
                Voucher giảm giá
              </span>
              <span className='font-semibold caption1 text-greyscale-80'>
                - 30.000đ
              </span>
            </div>
          )} */}
          {/* <div className='flex items-center justify-between'>
            <span className='font-medium caption1 text-greyscale-40'>
              Khuyến mãi hạng thành viên
            </span>
            <span className='font-semibold caption1 text-greyscale-80'>
              - 80.000đ
            </span>
          </div> */}
          {!isShipIn && (
            <div className='flex items-center justify-between'>
              <span className='font-medium caption1 text-greyscale-40'>
                Giảm giá vận chuyển:
              </span>
              <span className='font-semibold caption1 text-greyscale-80'>
                {isFreeShip ? '-30.000đ' : '30.000đ'}
              </span>
            </div>
          )}
          <hr className='h-[0.07321rem] bg-[#1E417C29] my-[0.29rem] xmd:my-[0.88rem]' />
          <div className='flex items-center justify-between'>
            <span className='font-semibold sub2 text-greyscale-50'>
              Tổng thanh toán:
            </span>
            <span className='sub1 font-bold text-[#D48E43]'>
              {formatToVND(detailOrder?.total)}
            </span>
          </div>
        </div>
      </div>
      {isSuccess ? (
        <Link
          href='/'
          className='flex items-center justify-center w-full text-white bg-blue-700 rounded-[0.58565rem] h-[2.92826rem] shadow-[2px_4px_20px_0px_rgba(0,0,0,0.02)] mt-[0.88rem] caption1 font-semibold'
        >
          QUAY VỀ TRANG CHỦ
        </Link>
      ) : (
        <div className='space-y-[0.88rem] mt-[0.88rem] xmd:px-[0.88rem]'>
          <div className='font-normal text-greyscale-40 caption1 h-[2.19619rem] rounded-[0.58565rem] bg-white flex items-center justify-center'>
            Đơn hàng sẽ tự động đưa vào mục "Chưa thanh toán" khi bạn rời trang
            này.
          </div>
          <button
            onClick={handleRePayment}
            className='flex items-center justify-center w-full text-white bg-blue-700 rounded-[0.58565rem] h-[2.92826rem] shadow-[2px_4px_20px_0px_rgba(0,0,0,0.02)] caption1 font-semibold'
          >
            {isPending ? (
              <svg
                className='animate-spin h-[2rem] w-[2rem] text-white'
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
            ) : (
              'THANH TOÁN LẠI'
            )}
          </button>
          <Link
            href='/'
            className='flex items-center justify-center shadow-[2px_4px_20px_0px_rgba(0,0,0,0.02)] bg-blue-50 rounded-[0.58565rem] h-[2.92826rem] text-greyscale-80 caption1 font-semibold'
          >
            VỀ TRANG CHỦ
          </Link>
        </div>
      )}
    </aside>
  )
}
