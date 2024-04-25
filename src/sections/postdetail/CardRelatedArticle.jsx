import Image from 'next/image'
import Link from 'next/link'
const CardRelatedArticle = ({data}) => {
  return (
    <div className='flex flex-col items-start overflow-hidden w-[11.49341rem] md:w-[28.11127rem] xmd:gap-[0.58565rem] rounded-[0.87848rem] bg-[#FFF] xmd:pb-[1rem]'>
      <Image
        alt='k'
        src={data?.thumbnail_url || '/postdetail/tintuc.png'}
        className='xmd:rounded-[0.87848rem] w-[11.49341rem] md:w-[28.11127rem] h-[6.8879rem] md:h-[17.13031rem] shrink-0'
        width={999}
        height={999}
      />
      <div className=' flex xmd:flex-col-reverse flex-col xmd:self-stretch items-start xmd:w-[11.49341] md:w-[28.03807rem] md:py-[1.46413rem] md:p-[1.46413rem] xmd:gap-[0.58565rem] gap-[0.87848rem]'>
        <Link
          href={`/tin-tuc/${data?.post_slug}`}
          className='self-stretch overflow-hidden font-medium sub1 xmd:sub2 line-clamp-2 text-ellipsis text-greyscale-80 font-svnGraphik'
        >
          {data?.title}
        </Link>
        <div className='overflow-hidden font-normal body2 xmd:hidden line-clamp-3 text-ellipsis text-greyscale-30 font-svnGraphik'>
          {data?.post_excerpt}
        </div>
        <div className=' gap-[0.58565rem] flex items-start'>
          <Image
            alt='k'
            src='/postdetail/calendar.svg'
            className='w-[1.02489rem] h-[1.02489rem] shrink-0'
            width={999}
            height={999}
          />
          <div className='font-medium caption text-greyscale-20'>
            {data?.post_date.split(' ')[0]}
          </div>
        </div>
      </div>
    </div>
  )
}

export default CardRelatedArticle
