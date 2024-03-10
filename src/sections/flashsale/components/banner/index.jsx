import Image from 'next/image'

export default function BannerFlashSale() {
  return (
    <section className='relative'>
      <Image
        className='w-full object-cover h-[41.28843rem]'
        src={'/flashsale/banner.jpg'}
        alt='banner'
        width={1400}
        height={600}
        priority
      />
      <div className='flex justify-center py-[1.54rem] bg-[#0A1A29]'>
        <ul className='flex '>
          {new Array(4).fill(0).map((_, index) => (
            <li
              className='first:ml-0 ml-[2.64rem] py-[0.88rem] px-[1.76rem] rounded-[7.5rem] w-fit button font-medium text-white border border-solid border-white'
              key={index}
            >
              Ipad
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
