import ICArrowRightBlack from '@/components/icon/ICArrowRightBlack'
import Link from 'next/link'

export default function CategoryProductRes({title = '', href = '/'}) {
  return (
    <Link
      href={href}
      className='bg-[#F4F4F4] rounded-[0.58565rem] px-[0.88rem] flex justify-between items-center h-[2.92826rem]'
    >
      <h2 className='font-semibold sub2 text-greyscale-80 tracking-[0.01025rem]'>
        {title}
      </h2>
      <ICArrowRightBlack className='size-[1.46413rem]' />
    </Link>
  )
}
