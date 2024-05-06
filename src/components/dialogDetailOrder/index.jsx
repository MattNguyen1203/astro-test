'use client'
import {Dialog, DialogContent, DialogTrigger} from '@/components/ui/dialog'
import {fetcher, handleDate, handleTimeBill} from '@/lib/utils'
import useSWR from 'swr'
import ICCloseDetailOrder from '../icon/ICCloseDetailOrder'
import {ScrollArea} from '../ui/scroll-area'

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

  console.log('🚀 ~ DialogDetailOrder ~ data:', data)
  return (
    <Dialog
      open={isOpen}
      onOpenChange={setIsOpen}
      className='z-[1000]'
    >
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent
        className={
          'rounded-[0.87848rem] !w-[48.53587rem] !max-w-[48.53587rem] h-fit p-[2.34rem] overflow-hidden'
        }
      >
        <div className='absolute top-0 left-0 w-full px-[2.34rem] py-[0.88rem] flex justify-between items-center bg-elevation-20'>
          <div className='flex items-center'>
            <span className='sub2 font-semibold text-greyscale-80 block mr-[0.59rem]'>
              THÔNG TIN ĐƠN HÀNG:
            </span>
            <span className='sub2 font-semibold text-brown-500'>
              {data?.id}
            </span>
          </div>
          <div className='rounded-full size-[2.34261rem] bg-white cursor-pointer drop-shadow-[-3px_2px_20px_rgba(0,0,0,0.04)] flex justify-center items-center'>
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
                {data?.billing?.first_name + data?.billing?.last_name}
              </span>
            </div>
            <div className='flex items-center'>
              <span className='w-[15.00732rem] block text-[0.87848rem] leading-[1.83] tracking-[0.0022rem] font-semibold text-greyscale-60'>
                - Số điện thoại:
              </span>
              <span className='text-[0.87848rem] leading-[1.83] tracking-[0.0022rem] font-normal text-greyscale-40'>
                {data?.billing?.phone}
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
                {handleDate(data?.date_created) +
                  ' - ' +
                  handleTimeBill(data?.date_created)}
              </span>
            </div>
            <div className='flex items-center'>
              <span className='w-[15.00732rem] block text-[0.87848rem] leading-[1.83] tracking-[0.0022rem] font-semibold text-greyscale-60'>
                - Địa chỉ nhận hàng:
              </span>
              <span className='text-[0.87848rem] leading-[1.83] tracking-[0.0022rem] font-normal text-greyscale-40'></span>
            </div>
            <div className='flex items-center'>
              <span className='w-[15.00732rem] block text-[0.87848rem] leading-[1.83] tracking-[0.0022rem] font-semibold text-greyscale-60'>
                - Hình thức thanh toán:
              </span>
              <span className='text-[0.87848rem] leading-[1.83] tracking-[0.0022rem] font-normal text-greyscale-40'></span>
            </div>
            <div className='flex items-center'>
              <span className='w-[15.00732rem] block text-[0.87848rem] leading-[1.83] tracking-[0.0022rem] font-semibold text-greyscale-60'>
                - Phương thức vận chuyển:
              </span>
              <span className='text-[0.87848rem] leading-[1.83] tracking-[0.0022rem] font-normal text-greyscale-40'></span>
            </div>
          </div>
        </ScrollArea>
      </DialogContent>
    </Dialog>
  )
}
