import {convertDateFormat} from '@/lib/utils'
import Image from 'next/image'
import Link from 'next/link'

export default function ItemNews({borderClass = '', isOption = false, post}) {
  return (
    <article
      className={`${
        isOption
          ? 'h-fit xmd:h-fit xlg:h-[15rem] xmd:w-full xmd:flex'
          : 'h-[10.1757rem] xmd:h-[12.08rem] xmd:flex-col mr-[1.76rem] xmd:mr-[0.6rem] xmd:w-[12.1rem]'
      } w-full flex `}
    >
      <Link
        href={`/tin-tuc/${post?.post_slug}`}
        className={`${
          isOption
            ? 'w-[16.47145rem] xlg:w-[20rem] xmd:w-[7.10102rem] xmd:h-[5.05124rem] rounded-[1.1713rem] mr-[0.88rem] xmd:mr-[0.6rem]'
            : 'w-[10.1757rem] xmd:h-[6.89rem] rounded-[0.87848rem] h-full mr-[0.88rem] xmd:w-full'
        } block relative flex-shrink-0 overflow-hidden xmd:mr-0 `}
      >
        <Image
          className='object-cover size-full'
          src={post?.thumbnail_url || '/news/item-tech.jpg'}
          alt={post?.title}
          fill
        />
      </Link>
      <div
        className={`${
          isOption ? 'xmd:mt-0' : 'xmd:mt-[0.6rem]'
        } flex h-full flex-col justify-between xmd:p-0 xlg:p-[1rem]`}
      >
        <Link
          href={`/tin-tuc/${post?.post_slug}`}
          className='block xmd:order-2'
        >
          <h2
            className={`${
              isOption
                ? 'xmd:body2 xmd:font-normal xmd:line-clamp-2'
                : 'h-[2.68184rem] xmd:!text-[1.02489rem] xmd:!font-semibold'
            } xmd:order-2 sub1 font-medium tracking-[0.01464rem] text-greyscale-80`}
          >
            {post?.title}
          </h2>
        </Link>
        <p
          className={`${
            isOption ? 'my-[0.88rem]' : ''
          } line-clamp-3 text-greyscale-30 body2 font-normal tracking-[0.00256rem] xmd:hidden h-[4.612rem]`}
        >
          {post?.post_excerpt ||
            'Mạng xã hội Facebook là môi trường tiềm năng để kinh doanh hay phát triển thương hiệu. Tuy nhiên, nhiều người vẫn chưa biết cách chạy quảng cáo Facebook để quảng bá sản phẩm và dịch vụ của mình. Trong bài viết này,giới thiệu cho bạn các hình thức và phần mềm để chạy quảng cáo Facebook hiệu quả nhất.'}
        </p>
        <div
          className={`${
            isOption ? 'lg:p-[0.59rem] opacity-50' : ''
          } xmd:order-1 xmd:mb-[0.29283rem] flex items-center`}
        >
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
            } text-[0.87848rem] text-greyscale-80 font-medium block w-fit tracking-[0.00439rem] leading-[1.2] xmd:caption xmd:font-normal xmd:text-greyscale-30`}
          >
            {convertDateFormat(post?.post_date)}
          </span>
        </div>
      </div>
    </article>
  )
}
