import Image from 'next/image'

export default function CardStrength({
  className = '',
  src = '',
  title = '',
  description = '',
  background = false,
}) {
  return (
    <article
      className={`${className} ${
        background
          ? 'bg-white'
          : 'bg-[linear-gradient(95deg,#EEF8FF_0%,rgba(255,245,237,0.79)_100%)]'
      } w-[21.08346rem] p-[1.46rem] flex h-fit items-center  rounded-[0.58565rem]`}
    >
      <picture className='size-[3.51391rem] mr-[1.16rem]'>
        <Image
          className='object-contain size-full'
          src={src || '/home/htmp.svg'}
          width={48}
          height={48}
          alt='icon strength'
        />
      </picture>
      <div className='h-[3.58712rem] flex flex-col justify-between'>
        <h2 className='font-semibold text-blue-600 uppercase sub2'>
          {title || 'HOÀN TRẢ MIỄN PHÍ'}
        </h2>
        <p
          className='font-normal text-greyscale-40 caption1'
          dangerouslySetInnerHTML={{
            __html: description || `Trả hàng miễn phí <br>trong 7 ngày`,
          }}
        />
      </div>
    </article>
  )
}
