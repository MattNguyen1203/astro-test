import Image from 'next/image'

export default function ItemStep() {
  return (
    <div className='flex items-center'>
      <div className='size-[2.34261rem] rounded-full flex justify-center items-center bg-white'>
        <Image
          className='w-[1.03192rem] h-auto'
          src={'/home/cart.svg'}
          alt='cart icon'
          width={24}
          height={24}
        />
      </div>
      <span className='body2 font-semibold text-greyscale-40 block w-fit ml-[0.59rem] whitespace-nowrap'>
        Thông tin đặt hàng
      </span>
    </div>
  )
}
