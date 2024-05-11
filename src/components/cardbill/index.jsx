'use client'
import {formatToVND} from '@/lib/utils'
import ItemProductPayment from '@/sections/payment/ItemProductPayment'
import Image from 'next/image'
import BtnDetailOrder from './BtnDetailOrder'
import {rePayment} from '@/actions/rePayment'
import {useTransition} from 'react'
import {toast} from 'sonner'
import {useRouter} from 'next/navigation'

export default function CardBill({data, status, isMobile}) {
  const router = useRouter()
  const [isLoading, setTransition] = useTransition()
  const isDone = status === 'completed'
  const isPending = status === 'pending'
  const isProcessing = status === 'processing'

  const handleRePayment = () => {
    setTransition(() => {
      rePayment(
        `/okhub/v1/order/${data?.order_id}/pay?url_redirect=${process.env.NEXT_PUBLIC_DOMAIN}`,
      )
        .then((res) => {
          if (res?.url) {
            return router.push(res?.url)
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

  const handleReBuy = () => {
    return router.push(`/thanh-toan?id=${data?.order_id}`)
  }

  const handlePayment = () => {
    if (isDone) {
      handleReBuy()
    } else {
      handleRePayment()
    }
  }

  const handleFindParent = (meta) => {
    let isCheck = false
    meta?.forEach((item) => {
      if (item?.key?.includes('parent')) {
        return (isCheck = true)
      }
    })
    return isCheck
  }

  const dataNew = data?.product_name?.filter(
    (item) => !handleFindParent(item?.meta),
  )
  return (
    <article className='rounded-[0.58565rem] shadow-[2px_2px_12px_0px_rgba(0,0,0,0.02),-3px_2px_20px_0px_rgba(0,0,0,0.04)] p-[1.17rem] bg-white'>
      <div className='flex items-center justify-between'>
        <div className='flex'>
          <span className='font-normal caption1 text-greyscale-80 inline-block mr-[0.29rem]'>
            Mã đơn hàng:
          </span>
          <span className='text-brown-500 text-[0.87848rem] tracking-[0.00439rem] leading-[1.2] font-semibold'>
            {data?.order_id}
          </span>
        </div>
        <span className='font-normal caption1 text-greyscale-30'>
          {dataNew?.length} sản phẩm
        </span>
      </div>
      <hr className='bg-[#ECECECB2] h-[0.07rem] w-full my-[0.88rem] block' />
      {dataNew?.map((product, index) => (
        <ItemProductPayment
          key={index}
          item={product}
          index={index}
          length={dataNew?.length}
        />
      ))}
      <hr className='bg-[#ECECECB2] h-[0.07rem] w-full my-[0.88rem] block' />
      <div className='flex justify-end w-full xmd:flex xmd:items-center'>
        {!isDone && !isPending && isMobile && (
          <div className='flex items-center xmd:w-full'>
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
        <span className='text-[#D48E43] sub1 font-bold block text-end'>
          {formatToVND(data?.order_total)}
        </span>
      </div>
      <div
        className={`${isPending && '!justify-end'} ${
          isDone ? 'justify-end' : 'justify-between'
        } flex mt-[0.88rem] xmd:w-full`}
      >
        {!isDone && !isPending && !isMobile && (
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
          {!isProcessing && (
            <button
              onClick={handlePayment}
              className='p-[0.73rem] rounded-[0.43924rem] uppercase caption1 tracking-[0.00439rem] font-semibold text-white bg-blue-700 mr-[0.59rem] xmd:w-[49%] '
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
              ) : isDone ? (
                'Mua lại'
              ) : (
                'Thanh Toán Lại'
              )}
            </button>
          )}
          <BtnDetailOrder id={data?.order_id} />
        </div>
      </div>
    </article>
  )
}
