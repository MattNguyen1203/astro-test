'use client'
import {formatToShortVND, formatToVND} from '@/lib/utils'
import Image from 'next/image'

export default function CardVoucher({
  className = '',
  item,
  isPriority = false,
  setIsIndex,
  isIndex = -1,
  index,
  noDetail = false,
}) {
  // const [isCopy, setCopy] = useState(false)
  // useEffect(() => {
  //   if (isCopy) {
  //     const voucherTimeout = setTimeout(() => {
  //       // setCopy(false)
  //       // setDisabled(false)
  //       setIsIndex(-1)
  //     }, 3000)

  //     return () => clearTimeout(voucherTimeout)
  //   }
  // }, [isCopy])

  //handle voucher giam gia fixed hay percent
  const handleDiscount = (item) => {
    if (item?.type === 'percent') {
      return Number(item?.amount) + '%'
    } else {
      return Number(item?.amount) / 1000 + 'K'
    }
  }

  // handle voucher giam toi da
  const handleDiscountMax = (item) => {
    if (Number(item?.max_discount) > 0) {
      return Number(item?.max_discount) / 1000 + 'K'
    }
    return null
  }

  return (
    <article
      className={`${className} ${
        noDetail
          ? 'h-[5.12445rem] w-[21.22987rem]'
          : 'h-[7.75988rem] w-[32.9429rem]'
      } bg-white xmd:w-[18.66764rem] xmd:h-[4.1rem] rounded-[0.58565rem] xmd:bg-white flex transition-all duration-200 select-none xmd:shadow-[2px_2px_12px_0px_rgba(0,0,0,0.02),-3px_2px_20px_0px_rgba(0,0,0,0.04)]`}
    >
      {item?.categories?.length > 0 && (
        <div
          className={`${
            noDetail ? 'w-[5.12445rem]' : 'w-[7.75988rem]'
          } h-full xmd:w-[4.09956rem] flex flex-col justify-center items-center bg-[linear-gradient(44deg,#FFF5E6_50.63%,#FFE4B9_106.58%)] rounded-tl-[0.58565rem] rounded-bl-[0.58565rem]`}
        >
          <Image
            className='size-[2.34261rem] xmd:size-[1.75695rem] object-contain'
            src={'/home/circle-flash-voucher1.png'}
            alt='astromazing'
            width={32}
            height={32}
            priority={isPriority}
          />
          <span className='inline-block mt-[0.44rem] xmd:mt-[0.29rem] text-brown-700 text-[0.65886rem] font-medium leading-[1.2] tracking-[0.00329rem] whitespace-nowrap xmd:caption3 xmd:text-brown-800'>
            {item?.categories?.[0]?.name}
          </span>
        </div>
      )}
      <div className='w-[9.6rem] xmd:w-[9.0776rem] h-full py-[0.59rem] px-[0.88rem] xmd:p-[0.59rem] flex flex-col justify-center'>
        <h3 className='font-medium button text-greyscale-80 mb-[0.29rem] xmd:mb-[0.15rem] xmd:caption xmd:font-semibold xmd:tracking-[0.00439rem] xmd:text-greyscale-60'>
          Giảm {handleDiscount(item)}
        </h3>
        <p className='font-normal caption2 tracking-[0.00732rem] text-greyscale-40 xmd:tracking-normal xmd:text-greyscale-30'>
          Đơn Tối thiểu {formatToShortVND(item?.minimum_amount)}
          <br />
          {item?.max_discount && (
            <span>Giảm Tối đa {handleDiscountMax(item)}</span>
          )}
        </p>
      </div>
      <div
        className={`${
          item?.categories?.length > 0
            ? 'justify-end pr-[0.88rem]'
            : 'justify-end pr-[0.88rem]'
        } flex items-center flex-1 size-full`}
      >
        <button
          onClick={() => {
            if (isIndex !== index) {
              setIsIndex(index)
              const couponCode = item?.code?.toString()
              navigator.clipboard.writeText(couponCode)
            }
          }}
          className={`${
            isIndex === index
              ? 'bg-[linear-gradient(90deg,rgba(16,40,65,1)_100%,rgba(16,40,65,1)_100%)]'
              : 'bg-[linear-gradient(104deg,#E78C03_-3.95%,#FFB84F_106.72%)] xmd:bg-[linear-gradient(180deg,#E0B181_0.72%,#BE9367_99.87%)]'
          } rounded-[0.30476rem] caption2 font-medium text-white w-[4.45649rem] xmd:w-[4.90483rem] h-[1.75695rem] xmd:h-[1.97657rem] flex justify-center items-center transition-all duration-1000 origin-right xmd:text-[0.65886rem] xmd:tracking-[0.00329rem] xmd:font-semibold relative`}
        >
          {isIndex === index ? 'ĐÃ LƯU' : 'COPY MÃ'}
        </button>
      </div>
    </article>
  )
}
