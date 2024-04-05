import Image from 'next/image'

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
      tablet:p-[2rem]`}
    >
      <picture className='size-[3.51391rem] md:mr-[1.16rem] xmd:size-[2.63543rem]'>
        <Image
          className='object-contain size-full'
          src={item?.src || '/home/htmp.svg'}
          width={48}
          height={48}
          alt='icon strength'
          priority={priority}
        />
      </picture>
      <div className='h-[3.58712rem] flex flex-col justify-between xmd:mt-[0.59rem] xmd:h-fit'>
        <h2 className='font-semibold text-blue-600 uppercase sub2 tablet:text-[1.4rem] xmd:text-center xmd:mb-[0.29rem]'>
          {item?.title}
        </h2>
        <p
          className='font-normal text-greyscale-40 caption1 tablet:text-[1rem] xmd:text-center'
          dangerouslySetInnerHTML={item?.description}
        />
      </div>
    </article>
  )
}
