import Image from 'next/image'

export default function ItemCategory({index}) {
  return (
    <div
      className={`${
        index ? 'mt-[0.88rem]' : ''
      } w-full px-[0.59rem] h-[3.51rem] rounded-[0.58565rem] border border-solid border-[rgba(193,212,231,0.10)] bg-[rgba(20,20,20,0.10)] relative backdrop-blur-[5px] flex items-center group hover:border-[#EEF8FF] hover:bg-[#EBF0F7] transition-all duration-300 hover:shadow-[3px_4px_3px_0px_rgba(22,53,86,0.29)_inset,6px_5px_3px_0px_rgba(3,30,59,0.02)_inset] select-none cursor-pointer`}
    >
      <Image
        className='size-[3.51391rem] object-contain'
        src={'/home/item-iphone14.png'}
        alt='item iphone 14'
        width={48}
        height={48}
      />
      <span className='font-semibold text-white transition-all duration-300 whitespace-nowrap line-clamp-1 caption1 group-hover:text-greyscale-80'>
        iPhone 14
      </span>
      <svg
        xmlns='http://www.w3.org/2000/svg'
        width='7'
        height='13'
        viewBox='0 0 7 13'
        fill='none'
        className='w-[0.51245rem] h-[0.95168rem] opacity-0 pointer-events-none group-hover:opacity-100 transition-all duration-300 absolute right-[0.01rem] translate-x-full top-1/2 -translate-y-1/2 '
      >
        <path
          d='M7 6.5L0 13L3.53315e-07 0L7 6.5Z'
          fill='#EBF0F7'
        />
      </svg>
    </div>
  )
}
