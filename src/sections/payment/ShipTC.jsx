import Image from 'next/image'

export default function ShipTC() {
  return (
    <>
      <div className='flex items-center'>
        <Image
          className='w-[1.46413rem] h-auto object-contain'
          src={'/account/car.svg'}
          alt='car flash'
          width={24}
          height={24}
        />
        <span className='block font-medium caption1 text-greyscale-80 ml-[0.59rem]'>
          Giao hàng tiêu chuẩn:
        </span>
      </div>
      <span className='font-normal body2 text-greyscale-80 block mt-[0.59rem]'>
        Phí vận chuyển : 30.000đ
      </span>
      <span className='block font-normal body2 text-greyscale-80'>
        Freeship với đơn hàng từ 300.000 đ
      </span>
      <span className='block font-normal body2 text-greyscale-80'>
        Thời gian giao hàng 1-3 ngày
      </span>
    </>
  )
}
