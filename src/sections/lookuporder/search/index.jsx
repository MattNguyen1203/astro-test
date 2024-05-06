'use client'
import ICSearchAccessory from '@/components/icon/ICSearchAccessory'
import {fetcher, formatToVND} from '@/lib/utils'
import ItemProductPayment from '@/sections/payment/ItemProductPayment'
import {usePathname, useRouter, useSearchParams} from 'next/navigation'
import useSWR from 'swr'

export default function SearchTracking({isMobile}) {
  const router = useRouter()
  const pathName = usePathname()
  const searchParams = useSearchParams()

  const tracking = decodeURI(searchParams.get('tracking') || '')

  const {data, error, isLoading} = useSWR(
    tracking
      ? process.env.NEXT_PUBLIC_API + `/okhub/v1/order/${tracking}`
      : null,
    fetcher,
    {
      revalidateIfStale: false,
      revalidateOnFocus: false,
      revalidateOnReconnect: false,
    },
  )

  const handleDate = (dateString) => {
    // Tạo một đối tượng Date từ chuỗi ngày tháng
    const date = new Date(dateString)

    // Định dạng lại ngày tháng
    const formattedDate =
      (date.getDate() < 10 ? '0' : '') +
      date.getDate() +
      '/' +
      ((date.getMonth() + 1 < 10 ? '0' : '') + (date.getMonth() + 1)) +
      '/' +
      date.getFullYear()
    return formattedDate
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const paramNew = new URLSearchParams(searchParams)

    if (e?.target?.[0]?.value) {
      paramNew.set('tracking', encodeURI(e?.target?.[0]?.value))
    } else {
      paramNew.delete('tracking')
    }

    router.push(pathName + '?' + paramNew.toString(), {
      scroll: false,
    })
  }

  const handleAllPriceCoupon = (coupons) => {
    let sum = 0
    coupons?.forEach((coupon) => {
      if (coupon?.coupon_discount) {
        sum += Number(coupon?.coupon_discount)
      }
    })
    return sum
  }

  const handleAllPriceShip = (ships) => {
    let sum = 0
    ships?.forEach((ship) => {
      if (ship?.total) {
        sum += Number(ship?.total)
      }
    })
    return sum
  }

  const handleTotalBill = (data) => {
    let sum = Number(data?.total)
    sum +=
      handleAllPriceCoupon(data?.coupon) +
      handleAllPriceShip(data?.shipping_lines)
    return sum
  }
  return (
    <>
      <div className='mt-[1.76rem] xmd:mt-[2.34rem] xmd:w-full xmd:px-[1.17rem]'>
        <div className='md:w-[43.7rem] mx-auto'>
          <h1 className='text-center h4 tracking-[0.00568rem] text-greyscale-80 font-medium xmd:h5 xmd:font-semibold xmd:tracking-[0.00366rem]'>
            Tra cứu mã đơn hàng
          </h1>
          <form
            onSubmit={handleSubmit}
            className='h-[3.51391rem] w-full flex my-[2.34rem] xmd:my-[1.17rem] xmd:h-fit'
          >
            <div className='w-full border border-solid border-greyscale-30 rounded-[0.58565rem] h-full flex justify-between xmd:flex-col xmd:border-none'>
              <div className='px-[1.02rem] flex items-center w-full xmd:py-[1.02rem] xmd:h-fit xmd:border xmd:border-solid xmd:border-blue-100 xmd:rounded-[0.58565rem]'>
                <ICSearchAccessory
                  stroke={tracking ? '#262626' : '#A9A9A9'}
                  className='size-[1.46413rem] pointer-events-none'
                />
                <input
                  type='text'
                  className='size-full pl-[0.59rem] placeholder:!text-greyscale-30 placeholder:sub2 xmd:placeholder:button xmd:placeholder:font-normal placeholder:font-medium text-greyscale-80 sub2 font-medium'
                  placeholder='Nhập mã đơn hàng của bạn'
                  defaultValue={tracking}
                />
              </div>
              <button
                className={`${
                  isLoading ? 'pointer-events-none cursor-not-allowed' : ''
                } w-[10.2489rem] flex-shrink-0 rounded-tr-[0.58565rem] rounded-br-[0.58565rem] bg-blue-600 button font-semibold text-white flex justify-center items-center xmd:mt-[1.17rem] xmd:w-full xmd:h-[3.22108rem] xmd:rounded-[0.58565rem]`}
              >
                {isLoading ? (
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
                  'TRA CỨU'
                )}
              </button>
            </div>
          </form>
        </div>
      </div>
      {!isLoading && (
        <>
          {/* page1 */}
          {!tracking && (
            <div className='flex lg:flex-col items-center xmd:w-full xmd:px-[1.32rem]'>
              <p className='mb-[0.58565rem] caption1 font-svnGraphik xmd:font-normal font-semibold text-[#204265]/45 xmd:text-center'>
                Đăng nhập tài khoản sẽ giúp bạn quản lý đơn hàng dễ dàng hơn!{' '}
                <span className='lg:hidden caption1 font-medium text-[#204265] font-svnGraphik'>
                  Đăng nhập ngay
                </span>
              </p>
              <span className='xmd:hidden caption1 font-semibold text-[#0D1F33] font-svnGraphik'>
                Đăng nhập ngay
              </span>
            </div>
          )}
          {/* page 2 */}
          {tracking && data?.id && (
            <div className='flex w-[100rem] xmd:w-full xmd:py-[1.1713rem ] px-[24.52416rem] pb-[0.58565rem] justify-center items-center xmd:px-0'>
              <div className='flex w-[50.87848rem] xmd:w-full p-[1.1713rem] flex-col items-start rounded-[0.58565rem] bg-white xmd:px-[0.88rem]'>
                <div className='flex flex-col items-start mb-[1.76rem]'>
                  <div className='flex flex-col justify-start'>
                    <div className='flex items-center justify-between'>
                      <div className='flex items-center flex-1'>
                        <p className='mr-[0.58565rem] sub2 font-semibold text-center text-greyscale-80'>
                          THÔNG TIN ĐƠN HÀNG:
                        </p>
                        <span className='sub2 font-semibold text-right text-[#BE9367]'>
                          {tracking}
                        </span>
                      </div>
                    </div>
                    <div className='w-[48.53587rem] xmd:w-[25.69546rem] my-[0.87848rem] h-[0.07321rem] bg-[rgba(236,236,236,0.70)]'></div>
                    <div className='flex flex-col items-start'>
                      <div className='flex items-center'>
                        <p className='w-[12.00586rem] caption1 font-semibold text-greyscale-80 xmd:text-greyscale-60'>
                          - Khách hàng:
                        </p>
                        <span className='font-normal text-justify caption1 text-greyscale-40'>
                          {data?.billing?.first_name + data?.billing?.last_name}
                        </span>
                      </div>
                      <div className='my-[0.87848rem] xmd:my-[0.14641rem] flex items-center'>
                        <p className='w-[12.00586rem] caption1 font-semibold text-greyscale-80 xmd:text-greyscale-60'>
                          - Số điện thoại:
                        </p>
                        <span className='font-normal text-justify caption1 text-greyscale-40'>
                          {data?.billing?.phone}
                        </span>
                      </div>
                      <div className='flex items-center'>
                        <p className='w-[12.00586rem] caption1 font-semibold text-greyscale-80 xmd:text-greyscale-60'>
                          - Email:
                        </p>
                        <span className='font-normal text-justify caption1 text-greyscale-40'>
                          {data?.billing?.email}
                        </span>
                      </div>
                      <div className='my-[0.87848rem] xmd:my-[0.14641rem] flex items-center'>
                        <p className='w-[12.00586rem] caption1 font-semibold text-greyscale-80 xmd:text-greyscale-60'>
                          - Ngày đặt hàng:
                        </p>
                        <span className='font-normal text-justify caption1 text-greyscale-40'>
                          {handleDate(data?.date_create)}
                        </span>
                      </div>
                      <div className='flex items-center'>
                        <p className='w-[12.00586rem] caption1 font-semibold text-greyscale-80 xmd:text-greyscale-60'>
                          - Địa chỉ nhận hàng:
                        </p>
                        <span className='font-normal text-justify caption1 xmd:flex-1 text-greyscale-40'>
                          {data?.billing?.address_1 +
                            ', ' +
                            data?.billing?.address_2 +
                            ', ' +
                            data?.billing?.city}
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className='my-[0.87848rem] w-[48.53587rem] xmd:w-[25.69546rem] h-[0.07321rem] bg-[rgba(236,236,236,0.70)]'></div>
                  <div className='flex flex-col items-start w-full'>
                    <div className='mb-[0.87848rem] w-full flex justify-between items-center'>
                      <p className='font-svnGraphik text-[1.02489rem] text-greyscale-40 text-right font-semibold leading-[1.61054rem] tracking-[0.00256rem]'>
                        Danh sách sản phẩm đã mua:
                      </p>
                      {/* <span className='font-normal caption1 text-greyscale-30'>
                        3 sản phẩm
                      </span> */}
                    </div>
                    <div className=''>
                      {data?.product?.map((item, index) => (
                        <ItemProductPayment
                          key={index}
                          item={item}
                          length={data?.product?.length}
                          index={index}
                        />
                      ))}
                    </div>
                  </div>
                </div>
                <div className='flex w-full flex-col p-[0.87848rem] items-start rounded-[0.58565rem] bg-[#F3F9F0]'>
                  <div className='flex flex-col items-start w-full'>
                    <div className='flex flex-col items-start w-full'>
                      <div className='mb-[0.58565rem] w-full flex justify-between items-start'>
                        <p className='font-medium text-right caption1 text-greyscale-40'>
                          Hình thức thanh toán:
                        </p>
                        <span className='font-semibold text-right caption1 text-greyscale-80'>
                          COD
                        </span>
                      </div>
                      <div className='flex items-start justify-between w-full'>
                        <p className='font-medium text-right caption1 text-greyscale-40'>
                          Phương thức vận chuyển:
                        </p>
                        <span className='font-semibold text-right caption1 text-greyscale-80'>
                          Hỏa tốc
                        </span>
                      </div>
                    </div>
                    <div className='my-[0.87848rem] w-[46.77892rem] xmd:w-[23.93851rem] h-[0.07321rem] bg-[rgba(30,65,124,0.16)]'></div>
                    <div className='flex flex-col items-start w-full'>
                      <div className='flex items-center justify-between w-full'>
                        <p className='font-medium text-right caption1 text-greyscale-40'>
                          Tổng tiền hàng:
                        </p>
                        <span className='font-semibold text-right caption1 text-greyscale-80'>
                          {formatToVND(handleTotalBill(data))}
                        </span>
                      </div>
                      <div className='w-full my-[0.58565rem] flex justify-between items-center'>
                        <p className='font-medium text-right caption1 text-greyscale-40'>
                          Phí vận chuyển:
                        </p>
                        <span className='font-semibold text-right caption1 text-greyscale-80'>
                          {formatToVND(data?.shipping_lines?.[0]?.total)}
                        </span>
                      </div>
                      <div className='flex items-center justify-between w-full'>
                        <p className='font-medium text-right caption1 text-greyscale-40'>
                          Voucher giảm giá
                        </p>
                        <span className='font-semibold text-right caption1 text-greyscale-80'>
                          {handleAllPriceCoupon(data?.coupon) > 0
                            ? '-' +
                              formatToVND(handleAllPriceCoupon(data?.coupon))
                            : '0đ'}
                        </span>
                      </div>
                      <div className='w-full my-[0.58565rem] flex justify-between items-center'>
                        <p className='font-medium text-right caption1 text-greyscale-40'>
                          Giảm giá vận chuyển:
                        </p>
                        <span className='font-semibold text-right caption1 text-greyscale-80'>
                          {handleAllPriceShip(data?.shipping_lines) > 0
                            ? '-' +
                              formatToVND(
                                handleAllPriceShip(data?.shipping_lines),
                              )
                            : '0đ'}
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className='w-[46.77892rem] xmd:w-[23.93851rem] h-[0.07321rem] bg-[rgba(30,65,124,0.16)] my-[0.87848rem]'></div>
                  <div className='flex items-center justify-between w-full'>
                    <p className='font-semibold text-right sub2 text-greyscale-50'>
                      Tổng thanh toán:
                    </p>
                    <span className='sub1 font-bold text-right text-[#D48E43]'>
                      {formatToVND(data?.total)}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          )}

          {tracking && !data?.id && (
            <div className='flex lg:w-[51.53734rem] p-[1.1713rem] flex-col items-start rounded-[0.58565rem] bg-white '>
              <div className='flex flex-col items-start'>
                <div className='mb-[0.58565rem] w-full flex justify-center items-center py-[1.02489rem] px-[1.46413rem] bg-[#FFE2E2] rounded-[0.58565rem]'>
                  <p className='sub1 font-medium text-[#C13333]'>
                    Mã vận đơn không tồn tại
                  </p>
                </div>
                <div className='flex p-[1.1713rem] flex-col justify-center items-center rounded-[0.58565rem] bg-white'>
                  <p className='mb-[0.58565rem] body2 font-normal text-greyscale-40'>
                    Quý khách vui lòng kiểm tra lại mã vận đơn hoặc gọi điện đến
                    số{' '}
                    <span className='font-svnGraphik tetx-[1.02489rem] font-semibold leading-[150%] tracking-[0.00256rem] bg-clip-text bg-[#1359A1]'>
                      094 649 2020
                    </span>{' '}
                    để được hỗ trợ
                  </p>
                  <p className='font-normal body2 text-greyscale-40'>
                    Nhân viên AstroMazing sẽ hỗ trợ với quý khách trong thời
                    gian sớm nhất.
                  </p>
                </div>
              </div>
            </div>
          )}
        </>
      )}
    </>
  )
}
