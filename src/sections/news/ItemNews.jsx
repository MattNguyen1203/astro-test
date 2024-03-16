import Image from 'next/image'
import Link from 'next/link'

export default function ItemNews({borderClass = '', isOption = false}) {
  return (
    <article className={`${isOption ? 'h-fit' : 'h-[10.1757rem]'} w-full flex`}>
      <Link
        href='/'
        className={`${
          isOption
            ? 'w-[16.47145rem] rounded-[1.1713rem] mr-[0.88rem]'
            : 'w-[10.1757rem] mr-[1.76rem] rounded-[0.87848rem] h-full'
        } block relative flex-shrink-0 overflow-hidden`}
      >
        <Image
          className='object-cover size-full'
          src={'/news/item-tech.jpg'}
          alt='banner tin tuc'
          fill
        />
      </Link>
      <div className='flex flex-col justify-between'>
        <h2
          className={`${
            isOption ? '' : 'h-[2.78184rem]'
          } sub1 font-medium tracking-[0.01464rem] text-greyscale-80`}
        >
          Review bị màn hình đen: Nguyên nhân và cách khắc phục hiệu quả
        </h2>
        <p
          className={`${
            isOption ? 'my-[0.88rem]' : ''
          } line-clamp-3 text-greyscale-30 body2 font-normal tracking-[0.00256rem]`}
        >
          Mạng xã hội Facebook là môi trường tiềm năng để kinh doanh hay phát
          triển thương hiệu. Tuy nhiên, nhiều người vẫn chưa biết cách chạy
          quảng cáo Facebook để quảng bá sản phẩm và dịch vụ của mình. Trong bài
          viết này,giới thiệu cho bạn các hình thức và phần mềm để chạy quảng
          cáo Facebook hiệu quả nhất. 
        </p>
        <div className={`${isOption ? 'p-[0.59rem]' : ''} flex items-center`}>
          <Image
            className='size-[1.02489rem] object-contain'
            src={'/home/calendar.svg'}
            alt='icon calendar'
            width={16}
            height={16}
          />
          <span
            className={`${
              isOption ? 'ml-[0.29rem]' : 'ml-[0.59rem]'
            } text-[0.87848rem] text-greyscale-80 font-medium block w-fit tracking-[0.00439rem] leading-[1.2]`}
          >
            12/12/2023
          </span>
        </div>
      </div>
    </article>
  )
}
