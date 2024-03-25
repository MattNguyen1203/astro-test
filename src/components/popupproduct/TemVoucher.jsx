import Image from 'next/image'

export default function TemVoucher({className = ''}) {
  return (
    <div
      className={`${className} mt-[0.59rem] px-[0.29rem] rounded-[0.43924rem] h-[1.46413rem] w-fit bg-[#1CB684] flex justify-between items-center`}
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
  )
}
