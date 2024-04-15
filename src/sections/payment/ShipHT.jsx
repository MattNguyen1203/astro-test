import Image from 'next/image'

export default function ShipHT() {
  return (
    <>
      <div className='flex items-center'>
        <Image
          className='w-[1.46413rem] h-auto object-contain'
          src={'/payment/car-flash.svg'}
          alt='car flash'
          width={24}
          height={24}
        />
        <span className='block font-medium caption1 text-greyscale-80 ml-[0.59rem]'>
          Giao hàng hoả tốc:
        </span>
      </div>
      <p className='mt-[0.59rem] body2 font-normal text-greyscale-80'>
        Chỉ áp dụng trong khu vực thành phố Hồ Chí Minh <br /> Phí vận chuyển
        được nhân viên gọi trao đổi
      </p>
    </>
  )
}
