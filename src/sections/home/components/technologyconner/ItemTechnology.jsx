import Image from 'next/image'
import Link from 'next/link'

export default function ItemTechnology({
  className = '',
  boxClass = '',
  index = '',
  widthHeightImg = '',
  mbCard,
}) {
  return (
    <Link
      href={'/'}
      className={`${
        index === 11
          ? 'before:absolute relative before:size-full before:rounded-[0.58565rem] before:bg-[#D9D9D9] before:z-10 before:pointer-events-none before:opacity-40 hover:before:opacity-0 before:transition-all before:duration-200'
          : ''
      } ${className} size-full rounded-[0.58565rem] xmd:rounded-[1.1713rem] lg:relative group !overflow-hidden block select-none`}
    >
      <div
        className={`relative size-full ${widthHeightImg} overflow-hidden xmd:rounded-[1.1713rem] xmd:mb-[0.58rem]`}
      >
        <Image
          className='absolute top-0 left-0 z-0 transition-all duration-300 size-full group-hover:scale-110 xmd:rounded-[1.1713rem]'
          src='/home/item-post-tech.jpg'
          alt='item post tech'
          fill
        />
      </div>
      <div
        className={`${boxClass} lg:absolute xmd:overflow-hidden lg:top-0 z-10 lg:size-full lg:px-[0.59rem] lg:pb-[1.54rem] lg:pt-[0.59rem] flex flex-col justify-between`}
      >
        {!mbCard ? (
          <div className='flex xmd:absolute relative top-[1.83rem] left-[1.76rem] xmd:top-[0.73rem] xmd:left-[0.73rem] items-center rounded-[0.29283rem] xmd:rounded-[0.58565rem] p-[0.59rem] bg-white/85 backdrop-blur-[2.5px] w-fit'>
            <Image
              className='size-[1.02489rem] object-contain'
              src={'/home/calendar.svg'}
              alt='icon calendar'
              width={16}
              height={16}
            />
            <span className='caption1 ml-[0.29rem] text-greyscale-80 font-medium block w-fit -mb-[0.4px] xmd:ml-[0.29283rem]'>
              12/12/2023
            </span>
          </div>
        ) : (
          <div className='flex items-center rounded-[0.29283rem] xmd:rounded-[0.58565rem] p-[0.59rem] bg-white/85 backdrop-blur-[2.5px] w-fit'>
            <Image
              className='size-[1.02489rem] object-contain'
              src={'/home/calendar.svg'}
              alt='icon calendar'
              width={16}
              height={16}
            />
            <span className='caption1 ml-[0.29rem] text-greyscale-80 font-medium block w-fit -mb-[0.4px] xmd:ml-[0.29283rem]'>
              12/12/2023
            </span>
          </div>
        )}
        <div className='lg:p-[1.46rem] xmd:flex xmd:flex-col xmd:overflow-hidden xmd:items-start xmd:w-full rounded-[0.58565rem] backdrop-blur-[15px] lg:bg-[linear-gradient(101deg,rgba(0,0,0,0.31)_0.17%,rgba(0,0,0,0.26)_87.85%)] lg:relative'>
          <div className='xmd:hidden lg:absolute z-[1] size-full bottom-0 left-1/2 -translate-x-1/2 group-hover:border-t-[2px] group-hover:border-r-[2px] rounded-[0.58565rem] group-hover:border-l-[2px] group-hover:border-white group-hover:border-solid transition-all duration-200 '></div>
          <h2 className='line-clamp-2 lg:h-[2.78184rem] sub1 xmd:h5 font-medium xmd:font-semibold text-white xmd:text-greyscale-80 mb-[0.88rem] relative z-10'>
            iPhone 15 có thể sạc ngược cho thiết bị khác
          </h2>

          <p className='xmd:h-[3.00146rem] w-full xmd:overflow-hidden line-clamp-2 body2 font-normal text-greyscaletext-5-div xmd:text-greyscale-30 lg:relative z-10 xmd:text-ellipsis xmd:whitespace-nowrap'>
            Cổng USB-C trên iPhone 15 có thể sạc cho tai nghe AirPods Pro 2,
            đồng hồ với công suất đầu ra 4,5W. Tính năng này được Apple nêu
            trong bản hướng dẫn sử dụng cổng USB-C của iPhone 15 mới công bố.
            Ngoài việc được nhận sạc từ các thiết bị hoặc bộ sạc cổng USB-C,
            Apple cho biết bản thân iPhone 15 cũng có thể sạc cho các thiết bị
            khác qua cổng này. "Bạn có thể sử dụng iPhone để sạc AirPods, Apple
            Watch hoặc một thiết bị nhỏ khác hỗ trợ USB Power Delivery với công
            suất lên tới 4,5 W", tài liệu của Apple viết.
          </p>
        </div>
      </div>
    </Link>
  )
}