import Image from 'next/image'

export default function ItemStep({item, status}) {
  return (
    <div className='flex items-center'>
      <div
        className={`${
          status
            ? 'bg-[linear-gradient(97deg,#102841_0%,#1359A1_100%)]'
            : ' bg-white'
        } size-[2.34261rem] rounded-full flex justify-center items-center`}
      >
        <Image
          className='w-[1.30146rem] h-auto object-contain'
          src={'/home/cart.svg'}
          alt='cart icon'
          width={24}
          height={24}
        />
      </div>
      <span className='body2 font-semibold text-greyscale-40 block w-fit ml-[0.59rem] whitespace-nowrap'>
        {item?.title}
      </span>
    </div>
  )
}
