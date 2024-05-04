import {convertDateFormat} from '@/lib/utils'
import Image from 'next/image'
import Link from 'next/link'

export default function ItemTechnologyHome({post, index = ''}) {
  return (
    <Link
      href={`/tin-tuc/${post?.post_slug}`}
      className={`${
        index === 11
          ? 'before:absolute relative before:size-full before:rounded-[0.58565rem] before:bg-[#D9D9D9] before:z-10 before:pointer-events-none before:opacity-40 hover:before:opacity-0 before:transition-all before:duration-200'
          : ''
      } md:h-[30.4rem] xmd:h-[27.6rem] xmd:relative size-full rounded-[0.58565rem] lg:relative group !overflow-hidden block select-none`}
    >
      <div className={`relative size-full overflow-hidden xmd:mb-[0.58rem]`}>
        <Image
          className='absolute top-0 left-0 z-0 object-cover transition-all duration-300 size-full md:group-hover:scale-110'
          src={post?.thumbnail_url || '/home/item-post-tech.jpg'}
          alt={post?.title || 'item post tech'}
          fill
        />
      </div>
      <div
        className={`absolute xmd:overflow-hidden top-0 z-10 size-full px-[0.59rem] pb-[1.54rem] pt-[0.59rem] flex flex-col justify-between`}
      >
        <div className='flex items-center rounded-[0.29283rem] xmd:rounded-[0.58565rem] p-[0.59rem] bg-white/85 backdrop-blur-[2.5px] w-fit'>
          <Image
            className='size-[1.02489rem] object-contain'
            src={'/home/calendar.svg'}
            alt='icon calendar'
            width={16}
            height={16}
          />
          <span className='caption1 ml-[0.29rem] text-greyscale-80 font-medium block w-fit -mb-[0.4px] xmd:ml-[0.29283rem]'>
            {convertDateFormat(post?.post_date)}
          </span>
        </div>
        <div
          className={`xmd:absolute xmd:left-1/2 xmd:-translate-x-1/2 xmd:bottom-[0.36rem] xmd:rounded-[0.43924rem] xmd:w-[calc(100%-0.68rem)] xmd:bg-[linear-gradient(101deg,rgba(0,0,0,0.31)_0.17%,rgba(0,0,0,0.26)_87.85%)] lg:p-[1.46rem] xmd:flex xmd:flex-col xmd:overflow-hidden xmd:items-start rounded-[0.58565rem] backdrop-blur-[15px] lg:bg-[linear-gradient(101deg,rgba(0,0,0,0.31)_0.17%,rgba(0,0,0,0.26)_87.85%)] lg:relative lg:h-[9.6rem] xmd:px-[1.02rem] xmd:py-[1.14rem] overflow-hidden`}
        >
          <Image
            className='xmd:hidden lg:absolute z-[1] size-full left-0 top-[-1.5px] pointer-events-none opacity-0 group-hover:opacity-100 transition-all duration-200'
            src={'/home/border-post.png'}
            alt='border post'
            width={200}
            height={100}
          />
          <h2 className='line-clamp-2 lg:h-[2.78184rem] sub1 xmd:h5 font-medium xmd:font-bold text-white mb-[0.88rem] relative z-10 xmd:text-[0.87848rem] xmd:tracking-[0.01098rem] xmd:h-[2.04978rem] xmd:mb-[0.68rem]'>
            {post?.title}
          </h2>

          <p className='xmd:h-[2.33246rem] w-full xmd:overflow-hidden line-clamp-2 body2 font-normal text-greyscaletext-5-div lg:relative z-10 xmd:text-[0.73206rem] xmd:leading-normal xmd:tracking-[0.00183rem]'>
            {post?.post_excerpt}
          </p>
        </div>
      </div>
    </Link>
  )
}
