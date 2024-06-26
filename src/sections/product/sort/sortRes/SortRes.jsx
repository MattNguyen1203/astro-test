import Image from 'next/image'
import dynamic from 'next/dynamic'
const SheetSort = dynamic(() => import('@/components/sheetsort'), {ssr: false})

export default function SortRes({categories = [], devices}) {
  return (
    <SheetSort
      categories={categories}
      devices={devices}
    >
      <button className='w-[6.22255rem] h-[2.928rem] space-x-[0.6rem] flex justify-center items-center rounded-[0.58565rem] bg-elevation-20'>
        <Image
          className='w-[1.14546rem] h-auto'
          src={'/product/filter.svg'}
          alt='icon sort product'
          width={20}
          height={20}
          priority
        />
        <span className='font-medium xmd:font-svnGraphik caption1 text-greyscale-70 '>
          Bộ lọc
        </span>
      </button>
    </SheetSort>
  )
}
