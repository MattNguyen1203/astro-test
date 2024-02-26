import Image from 'next/image'
import Link from 'next/link'

const arr = new Array(5).fill(0)
export default function CardProduct({item}) {
  return (
    <Link
      href={item?.href || '/'}
      className='w-[16.82284rem] h-[28.2rem] ml-[0.94rem] first:ml-0 rounded-[0.87848rem] border border-solid border-[#E5E7EB] group shadow-[2px_4px_20px_0px_rgba(0,0,0,0.02)] hover:shadow-[2px_4px_20px_0px_rgba(12,46,112,0.04),-6px_2px_32px_0px_rgba(12,46,112,0.08)]'
    >
      <picture className='size-[16.82284rem] rounded-tl-[0.87848rem] rounded-tr-[0.87848rem] overflow-hidden relative'>
        <Image
          className='object-cover size-full'
          src={item?.thumnail || '/home/item-product.jpg'}
          alt='item product'
          width={230}
          height={230}
        />
        <div className='bg-[linear-gradient(104deg,#E88B00_-3.95%,#CE7B00_106.72%)] w-[2.78184rem] h-[1.02489rem] rounded-full caption2 font-semibold text-white absolute top-[0.88rem] left-[0.88rem] z-10 flex justify-center items-start tracking-normal pt-[0.15rem]'>
          {item?.sale || '- 10%'}
        </div>
      </picture>
      <div className='p-[0.73206rem]'>
        <h2 className='font-medium line-clamp-2 text-greyscale-60 caption1 h-[2.1rem]'>
          {item?.title || 'Chưa có thông tin!'}
        </h2>
        {item?.sale && (
          <div className='mt-[0.88rem] h-[1.76rem] rounded-[0.3rem] bg-[#10273F] relative overflow-hidden'>
            <div className='w-[40%] bg-[linear-gradient(99deg,#FFD99E_-58.6%,#E99207_95.15%)] h-full'></div>
            <div className='absolute top-0 left-0 flex items-center justify-center size-full'>
              <Image
                className='size-[1.1713rem] object-contain'
                src='/home/ts-white.svg'
                alt='icon tia set'
                width={16}
                height={16}
              />
              <span className='font-semibold text-white caption1 inline-block ml-[0.29rem]'>
                Đã bán 35 sản phẩm
              </span>
            </div>
          </div>
        )}
        <ul className='mt-[0.59rem] flex flex-wrap *:mt-[0.29rem] *:ml-[0.29rem] *:px-[0.58565rem] *:py-[0.29283rem] *:rounded-[6.5vw] *:bg-[#F6F6F6]'>
          {arr.slice(0, 4).map((e, index) => (
            <li
              key={index}
              className='font-normal first:ml-0 caption1 text-greyscale-40'
            >
              {index === 3 && arr.length > 4
                ? `+${arr.length - 3}`
                : `iPad gen ${arr.length}`}
            </li>
          ))}
        </ul>
        <button className='mt-[0.59rem] w-full h-[2.92826rem] rounded-[0.58565rem] bg-blue-50 group-hover:bg-blue-800 transition-all duration-500 py-[0.65886rem] px-[0.58565rem] flex justify-between items-center'>
          <div className='flex flex-col'>
            <span className='font-semibold text-blue-800 transition-all duration-500 sub2 size-full group-hover:text-white'>
              297.000đ
            </span>
            <span className='transition-all duration-500 giagoc size-full group-hover:text-greyscaletext-5-div'>
              330.000đ
            </span>
          </div>
          <div className='size-[1.46413rem] relative'>
            <Image
              className='absolute top-0 left-0 object-contain transition-all duration-500 size-full group-hover:opacity-0'
              src={'/home/cart.svg'}
              alt='icon cart'
              width={20}
              height={20}
            />
            <Image
              className='absolute top-0 left-0 object-contain transition-all duration-500 opacity-0 size-full group-hover:opacity-100'
              src={'/home/cart-active.svg'}
              alt='icon cart'
              width={20}
              height={20}
            />
          </div>
        </button>
      </div>
    </Link>
  )
}
