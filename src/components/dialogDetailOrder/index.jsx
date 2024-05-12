'use client'
import {Dialog, DialogContent, DialogTrigger} from '@/components/ui/dialog'
import {fetcher, handleDate, handleTimeBill, formatToVND} from '@/lib/utils'
import useSWR from 'swr'
import ICCloseDetailOrder from '../icon/ICCloseDetailOrder'
import {ScrollArea} from '../ui/scroll-area'
import ItemProductPayment from '@/sections/payment/ItemProductPayment'
import {propertyPayment} from '@/lib/constants'

export function DialogDetailOrder({children, isOpen, setIsOpen, id}) {
  const {data, error, isLoading} = useSWR(
    id && isOpen ? process.env.NEXT_PUBLIC_API + `/okhub/v1/order/${id}` : null,
    fetcher,
    {
      revalidateIfStale: false,
      revalidateOnFocus: false,
      revalidateOnReconnect: false,
    },
  )

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

  // const handleTotalBill = (data) => {
  //   let sum = Number(data?.total)
  //   sum +=
  //     handleAllPriceCoupon(data?.coupon) +
  //     handleAllPriceShip(data?.shipping_lines)
  //   return sum
  // }

  const handleTotalBill = () => {
    let sum = 0
    data?.coupon?.forEach((item) => (sum += Number(item?.coupon_discount)))
    return sum + Number(data?.total)
  }

  const totalBill = handleTotalBill()
  const isShipIn = data?.shipping_lines?.[0]?.method_id === 'in_hcm'
  const isFreeShip = data?.shipping_lines?.[0]?.method_id === 'free_shipping'
  console.log(data)

  return (
    <Dialog
      open={isOpen}
      onOpenChange={setIsOpen}
      className='z-[1000]'
    >
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent
        className={
          'z-[1000] xmd:!w-[95%] rounded-[0.87848rem] !w-[48.53587rem] !max-w-[48.53587rem] h-fit p-[2.34rem] overflow-hidden'
        }
      >
        <div className='absolute z-10 top-0 left-0 w-full px-[2.34rem] py-[0.88rem] flex justify-between items-center bg-elevation-20'>
          <div className='flex items-center'>
            <span className='sub2 font-semibold text-greyscale-80 block mr-[0.59rem]'>
              THÔNG TIN ĐƠN HÀNG:
            </span>
            <span className='font-semibold sub2 text-brown-500'>
              {data?.id}
            </span>
          </div>
          <div
            onClick={() => {
              setIsOpen(false)
            }}
            className='rounded-full size-[2.34261rem] bg-white cursor-pointer drop-shadow-[-3px_2px_20px_rgba(0,0,0,0.04)] flex justify-center items-center'
          >
            <ICCloseDetailOrder className='size-[1.8rem]' />
          </div>
        </div>
        <ScrollArea
          type='always'
          className='w-full h-[500px]'
        >
          <div className='space-y-[0.15rem] pt-[2rem]'>
            <div className='flex items-center'>
              <span className='w-[15.00732rem] block text-[0.87848rem] leading-[1.83] tracking-[0.0022rem] font-semibold text-greyscale-60'>
                - Khách hàng:
              </span>
              <span className='text-[0.87848rem] leading-[1.83] tracking-[0.0022rem] font-normal text-greyscale-40'>
                {data?.shipping?.first_name + data?.shipping?.last_name}
              </span>
            </div>
            <div className='flex items-center'>
              <span className='w-[15.00732rem] block text-[0.87848rem] leading-[1.83] tracking-[0.0022rem] font-semibold text-greyscale-60'>
                - Số điện thoại:
              </span>
              <span className='text-[0.87848rem] leading-[1.83] tracking-[0.0022rem] font-normal text-greyscale-40'>
                {data?.shipping?.phone}
              </span>
            </div>
            <div className='flex items-center'>
              <span className='w-[15.00732rem] block text-[0.87848rem] leading-[1.83] tracking-[0.0022rem] font-semibold text-greyscale-60'>
                - Email:
              </span>
              <span className='text-[0.87848rem] leading-[1.83] tracking-[0.0022rem] font-normal text-greyscale-40'>
                {data?.billing?.email}
              </span>
            </div>
            <div className='flex items-center'>
              <span className='w-[15.00732rem] block text-[0.87848rem] leading-[1.83] tracking-[0.0022rem] font-semibold text-greyscale-60'>
                - Ngày đặt hàng:
              </span>
              <span className='text-[0.87848rem] leading-[1.83] tracking-[0.0022rem] font-normal text-greyscale-40'>
                {handleDate(data?.date_created)}
              </span>
            </div>
            <div className='flex items-center'>
              <span className='w-[15.00732rem] block text-[0.87848rem] leading-[1.83] tracking-[0.0022rem] font-semibold text-greyscale-60'>
                - Địa chỉ nhận hàng:
              </span>
              <span className='text-[0.87848rem] leading-[1.83] tracking-[0.0022rem] font-normal text-greyscale-40'>
                {data?.shipping?.address_1 +
                  ', ' +
                  data?.shipping?.address_2 +
                  ', ' +
                  data?.shipping?.city}
              </span>
            </div>
            <div className='flex items-center'>
              <span className='w-[15.00732rem] block text-[0.87848rem] leading-[1.83] tracking-[0.0022rem] font-semibold text-greyscale-60'>
                - Hình thức thanh toán:
              </span>
              <span className='text-[0.87848rem] leading-[1.83] tracking-[0.0022rem] font-normal text-greyscale-40'>
                {data?.payment_method === 'onepay'
                  ? 'Chuyển khoản'
                  : propertyPayment?.find(
                      (e) => e?.value === data?.payment_method,
                    )?.label}
              </span>
            </div>
            <div className='flex items-center'>
              <span className='w-[15.00732rem] block text-[0.87848rem] leading-[1.83] tracking-[0.0022rem] font-semibold text-greyscale-60'>
                - Phương thức vận chuyển:
              </span>
              <span className='text-[0.87848rem] leading-[1.83] tracking-[0.0022rem] font-normal text-greyscale-40'>
                {isShipIn ? 'Hỏa tốc' : 'Tiêu chuẩn'}
              </span>
            </div>
          </div>
          <hr className='w-[48.53587rem] my-[0.88rem] h-[0.07321rem] bg-[rgba(236,236,236,0.70)]' />
          <div className='w-[43.53587rem] flex flex-col items-start'>
            <div className='mb-[0.87848rem] w-full flex justify-between items-center'>
              <p className='font-svnGraphik text-[1.02489rem] text-greyscale-40 text-right font-semibold leading-[1.61054rem] tracking-[0.00256rem]'>
                Danh sách sản phẩm đã mua:
              </p>
            </div>
            <div className='w-full'>
              {data?.product?.map((item, index) => (
                <ItemProductPayment
                  key={index}
                  item={item}
                  length={data?.product?.length}
                  index={index}
                />
              ))}
            </div>
            <div className='mt-[0.88rem] flex w-full flex-col p-[0.87848rem] items-start rounded-[0.58565rem] bg-[#F3F9F0]'>
              <div className='flex flex-col items-start w-full'>
                <div className='flex items-center justify-between w-full'>
                  <p className='font-medium text-right caption1 text-greyscale-40'>
                    Tổng tiền hàng:
                  </p>
                  <span className='font-semibold text-right caption1 text-greyscale-80'>
                    {formatToVND(totalBill)}
                  </span>
                </div>
                <div className='w-full my-[0.58565rem] flex justify-between items-center'>
                  <p className='font-medium text-right caption1 text-greyscale-40'>
                    Phí vận chuyển:
                  </p>
                  <span className='font-semibold text-right caption1 text-greyscale-80'>
                    {isShipIn ? 'Nhân viên sẽ liên hệ' : '30.000đ'}
                  </span>
                </div>
                {data?.coupon?.length && (
                  <div className='flex items-center justify-between w-full'>
                    <span className='font-medium caption1 text-greyscale-40'>
                      Voucher giảm giá
                    </span>
                    <span className='font-semibold caption1 text-greyscale-80'>
                      -{formatToVND(data?.coupon?.[0]?.coupon_discount)}
                    </span>
                  </div>
                )}
                {!!data?.counpon?.length && (
                  <div className='flex items-center justify-between w-full'>
                    <span className='font-medium caption1 text-greyscale-40'>
                      Voucher giảm giá
                    </span>
                    <span className='font-semibold caption1 text-greyscale-80'>
                      - 40.000đ
                    </span>
                  </div>
                )}
                <div className='w-full my-[0.58565rem] flex justify-between items-center'>
                  <p className='font-medium text-right caption1 text-greyscale-40'>
                    Giảm giá vận chuyển:
                  </p>
                  <span className='font-semibold text-right caption1 text-greyscale-80'>
                    {isFreeShip ? '-30.000đ' : '30.000đ'}
                  </span>
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
        </ScrollArea>
      </DialogContent>
    </Dialog>
  )
}
