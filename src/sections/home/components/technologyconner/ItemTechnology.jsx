import {convertDateFormat} from '@/lib/utils'
import Image from 'next/image'
import Link from 'next/link'

export default function ItemTechnology({
  post,
  className = '',
  boxClass = '',
  index = '',
  widthHeightImg = '',
  mbCard,
  priority = false,
  excerptClass = '',
}) {
  return (
    <Link
      href={`/tin-tuc/${post?.post_slug}`}
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
          className='absolute top-0 left-0 z-0 transition-all duration-300 size-full md:group-hover:scale-110 xmd:rounded-[1.1713rem] object-cover'
          src={post?.thumbnail_url || '/home/item-post-tech.jpg'}
          alt={post?.title || 'item post tech'}
          fill
          priority={priority}
        />
      </div>
      <div
        className={`${boxClass} xlg:absolute xlg:bottom-0 xlg:size-full lg:absolute xmd:overflow-hidden top-0 z-10 lg:size-full lg:px-[0.59rem] xlg:pb-[1.54rem] xlg:pt-[0.59rem] lg:pb-[1.54rem] lg:pt-[0.59rem] flex flex-col xmd:justify-start justify-between xmd:relative`}
      >
        {!mbCard ? (
          <div className='flex xmd:absolute relative top-[1.83rem] left-[1.76rem] xmd:top-[0.73rem] xmd:left-[0.73rem] items-center rounded-[0.29283rem] xmd:rounded-[0.58565rem] p-[0.59rem] bg-white/85 backdrop-blur-[2.5px] w-fit'>
            <Image
              className='size-[1.02489rem] object-contain'
              src={'/home/calendar.svg'}
              alt='icon calendar'
              priority={priority}
              width={16}
              height={16}
            />
            <span className='caption1 ml-[0.29rem] text-greyscale-80 font-medium block w-fit -mb-[0.4px] xmd:ml-[0.29283rem]'>
              {convertDateFormat(post?.post_date)}
            </span>
          </div>
        ) : (
          <div className='flex items-center rounded-[0.29283rem] xmd:rounded-[0.58565rem] p-[0.59rem] bg-white/85 backdrop-blur-[2.5px] w-fit'>
            <Image
              className='size-[1.02489rem] object-contain'
              src={'/home/calendar.svg'}
              alt='icon calendar'
              priority={priority}
              width={16}
              height={16}
            />
            <span className='caption1 ml-[0.29rem] text-greyscale-80 font-medium block w-fit -mb-[0.4px] xmd:ml-[0.29283rem]'>
              {convertDateFormat(post?.post_date)}
            </span>
          </div>
        )}
        <div
          className={`${excerptClass} xmd:p-0 p-[1.46rem] xmd:flex xmd:flex-col xmd:overflow-hidden xmd:items-start xmd:w-full rounded-[0.58565rem] backdrop-blur-[15px] bg-[linear-gradient(101deg,rgba(0,0,0,0.31)_0.17%,rgba(0,0,0,0.26)_87.85%)] xmd:bg-[linear-gradient(101deg,rgba(0,0,0,0),rgba(0,0,0,0))] xlg:relative lg:relative xlg:h-[9.6rem] lg:h-[9.6rem]`}
        >
          <div className='xmd:hidden xlg:absolute lg:absolute z-[1] size-full bottom-0 left-1/2 -translate-x-1/2 group-hover:border-t-[2px] group-hover:border-r-[2px] rounded-[0.58565rem] group-hover:border-l-[2px] group-hover:border-white group-hover:border-solid transition-all duration-200 '></div>
          <h2 className='line-clamp-2 lg:h-[2.78184rem] sub1 xmd:h5 font-medium xmd:font-semibold text-white xmd:text-greyscale-80 mb-[0.88rem] relative z-10'>
            {post?.title}
          </h2>

          {post?.post_excerpt && (
            <p className='xmd:h-[3.00146rem] w-full xmd:overflow-hidden line-clamp-2 body2 font-normal text-greyscaletext-5-div xmd:text-greyscale-30 lg:relative z-10 xmd:text-ellipsis xmd:whitespace-nowrap'>
              {post?.post_excerpt}
            </p>
          )}
        </div>
      </div>
    </Link>
  )
}
