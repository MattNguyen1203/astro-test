import Image from 'next/image'
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from '@/components/ui/hover-card'
import {formatToVND} from '@/lib/utils'

export default function TemVoucher({className = '', regularPrice, price}) {
  const discount = regularPrice ? Number(regularPrice) - Number(price) : 0
  const percent =
    regularPrice && Number(regularPrice) > 0
      ? (Number(discount) / Number(regularPrice)) * 100
      : 0
  return (
    <HoverCard openDelay={200}>
      <HoverCardTrigger asChild>
        <div
          className={`${className} mt-[0.59rem] px-[0.29rem] rounded-[0.43924rem] h-[1.46413rem] w-fit bg-[#1CB684] flex justify-between items-center cursor-context-menu`}
        >
          <Image
            className='size-[0.88rem] object-contain'
            src={'/components/check.svg'}
            alt='icon check'
            width={12}
            height={12}
          />
          <span className='font-normal text-white caption2 w-fit block mx-[0.29rem]'>
            Giá khi mua với voucher
          </span>
          <Image
            className='size-[0.87848rem]'
            src={'/components/icon-voucher.svg'}
            alt='icon voucher'
            width={15}
            height={15}
          />
        </div>
      </HoverCardTrigger>
      <HoverCardContent className='caption1 w-[22.62079rem] bg-white rounded-[0.58565rem] p-[0.88rem]'>
        <div className='font-semibold'>Chi tiết giá</div>

        <div className='py-[0.88rem] my-[0.88rem] border-y border-[#D4D4D459]'>
          <div className='flex mb-[0.59rem] justify-between items-center'>
            <span className='text-greyscale-40'>Giá gốc</span>
            <span className='font-semibold text-greyscale-80'>
              {formatToVND(regularPrice ? regularPrice : price)}
            </span>
          </div>

          {discount > 0 && (
            <div className='flex mb-[0.59rem] justify-between items-center'>
              <span className='flex text-greyscale-40'>
                <p className='mr-[0.25rem]'>Giảm giá sản phẩm:</p>
                <p className='font-semibold text-greyscale-80'>
                  -{Math.ceil(percent)}%
                </p>
              </span>
              <span className='font-semibold text-greyscale-80'>
                -{formatToVND(discount)}
              </span>
            </div>
          )}

          <div className='flex mb-[0.59rem] justify-between items-center'>
            <span className='text-greyscale-40'>Voucher giảm giá:</span>
            <span className='font-semibold text-greyscale-80'>-17.000đ</span>
          </div>
        </div>

        <div className='flex mb-[0.59rem] justify-between items-center'>
          <span className='font-medium text-greyscale-80 caption1'>
            Giá tạm tính:
          </span>
          <span className='font-bold text-orange-0 sub1'>280.000đ</span>
        </div>
      </HoverCardContent>
    </HoverCard>
  )
}
