import Image from 'next/image'

export default function ItemCategory({index, isMobile}) {
  return (
    <div
      className={`${
        index ? 'md:mt-[0.88rem]' : ''
      } w-full px-[0.59rem] h-[3.51rem] rounded-[0.58565rem] border border-solid border-[rgba(193,212,231,0.10)] bg-[rgba(20,20,20,0.10)] relative backdrop-blur-[5px] flex items-center group md:hover:border-[#EEF8FF] md:hover:bg-[#EBF0F7] transition-all duration-300 md:hover:shadow-[3px_4px_3px_0px_rgba(22,53,86,0.29)_inset,6px_5px_3px_0px_rgba(3,30,59,0.02)_inset] select-none cursor-pointer xmd:border-[2px] xmd:border-blue-500 xmd:rounded-[7.5rem] xmd:ml-[0.59rem] xmd:w-fit xmd:bg-white xmd:shadow-[11px_6px_24px_0px_rgba(0,0,0,0.04),0px_2px_32px_0px_rgba(0,0,0,0.04)] xmd:flex-shrink-0`}
    >
      <Image
        className='size-[3.51391rem] object-contain xmd:size-[2.92826rem]'
        src={'/home/item-iphone14.png'}
        alt='item iphone 14'
        width={48}
        height={48}
      />
      <span className='font-semibold text-white transition-all duration-300 whitespace-nowrap md:line-clamp-1 caption1 md:group-hover:text-greyscale-80 xmd:caption1 xmd:w-fit xmd:text-greyscale-80'>
        iPhone 14
      </span>
      {!isMobile && (
        <svg
          xmlns='http://www.w3.org/2000/svg'
          width='7'
          height='13'
          viewBox='0 0 7 13'
          fill='none'
          className='w-[0.51245rem] h-[0.95168rem] opacity-0 pointer-events-none md:group-hover:opacity-100 transition-all duration-300 absolute right-[0.01rem] translate-x-full top-1/2 -translate-y-1/2'
        >
          <path
            d='M7 6.5L0 13L3.53315e-07 0L7 6.5Z'
            fill='#EBF0F7'
          />
        </svg>
      )}
    </div>
  )
}
