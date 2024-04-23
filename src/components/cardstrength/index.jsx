import Image from 'next/image'
import Description from './Description'

export default function CardStrength({
  className = '',
  item,
  background = false,
  priority = false,
}) {
  return (
    <article
      className={`${className} ${
        background
          ? 'bg-white'
          : 'bg-[linear-gradient(95deg,#EEF8FF_0%,rgba(255,245,237,0.79)_100%)]'
      } w-[21.08346rem] p-[1.46rem] flex h-fit items-center rounded-[0.58565rem] xlg:w-full xmd:p-[0.88rem] xmd:flex-col xmd:items-center
      tablet:p-[1.8rem_4rem_4rem]`}
    >
      <picture className='size-[3.51391rem] tablet:size-[4rem] md:mr-[1.16rem] xmd:size-[2.63543rem]'>
        <Image
          className='object-contain size-full'
          src={item?.image_logo?.url || '/home/htmp.svg'}
          width={48}
          height={48}
          alt={item?.title || 'icon strength'}
          priority={priority}
        />
      </picture>
      <div className='h-[3.58712rem] flex flex-col justify-between xmd:mt-[0.59rem] xmd:h-fit'>
        <h2 className='tablet:mb-[0.5rem] font-semibold text-blue-600 uppercase sub2 tablet:text-[1.875rem] xmd:text-center xmd:mb-[0.29rem] xmd:caption2 font-svnGraphik'>
          {item?.title}
        </h2>
        <Description description={item?.description} />
      </div>
    </article>
  )
}
