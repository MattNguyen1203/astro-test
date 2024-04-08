'use client'

import Link from 'next/link'
import {usePathname} from 'next/navigation'

export default function MenuNewsLink({
  categories = [],
  categoryCurrent,
  searchParams,
  nameCategory,
  isPage = false,
}) {
  const pathName = usePathname()

  const handleHref = (category) => {
    if (isPage) {
      return '/tin-tuc/' + category?.slug
    } else {
      const paramNew = new URLSearchParams(searchParams)
      paramNew.set(nameCategory, category?.slug)
      console.log(
        "🚀 ~ handleHref ~ pathName + '?' + paramNew.toString():",
        pathName + '?' + paramNew.toString(),
      )
      return pathName + '?' + paramNew.toString()
    }
  }
  return (
    <div className='relative flex items-center justify-end overflow-hidden xlg:justify-start xmd:justify-end size-full'>
      <div className='flex xmd:top-0 xmd:left-0 xmd:absolute xmd:w-full xmd:overflow-auto hidden-scrollbar '>
        <Link
          scroll={false}
          href='/tin-tuc'
          className={`${
            categoryCurrent
              ? 'bg-[#F2F2F2] text-greyscale-80'
              : 'bg-blue-700 text-white'
          } font-semibold xmd:mt-[0.88rem] caption1 py-[0.81rem] px-[1.46rem] rounded-[7.5rem] whitespace-nowrap`}
        >
          Mới nhất
        </Link>
        {categories?.map((category, index) => (
          <Link
            scroll={false}
            href={handleHref(category)}
            key={index}
            className={`${
              categoryCurrent === category?.slug
                ? 'bg-blue-700 text-white'
                : 'bg-[#F2F2F2] text-greyscale-80'
            } font-semibold xmd:mt-[0.88rem] caption1 py-[0.81rem] px-[1.46rem] rounded-[7.5rem] whitespace-nowrap ml-[1.17rem]`}
          >
            {category?.name}
          </Link>
        ))}
      </div>
    </div>
  )
}
