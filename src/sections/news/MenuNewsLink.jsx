'use client'

import useStore from '@/app/(store)/store'
import Link from 'next/link'
import {usePathname} from 'next/navigation'

import dynamic from 'next/dynamic'
import {useState} from 'react'
const PopoverMoreCategoryLink = dynamic(() =>
  import('@/components/popovermorecatlink').then(
    (mod) => mod.PopoverMoreCategoryLink,
  ),
)

export default function MenuNewsLink({
  categories = [],
  categoryCurrent,
  searchParams,
  nameCategory,
  isPage = false,
}) {
  const pathName = usePathname()
  const setIsFilterPosts = useStore((state) => state.setIsFilterPosts)
  const [isOpen, setIsOpen] = useState(false)

  const handleHref = (category) => {
    if (isPage) {
      return '/danh-muc/' + category?.slug
    } else {
      const paramNew = new URLSearchParams(searchParams)
      paramNew.set(nameCategory, category?.slug)
      return pathName + '?' + paramNew.toString()
    }
  }

  const isMore = categories?.length >= 5
  return (
    <div className='relative flex items-center justify-end overflow-hidden xlg:justify-start xmd:justify-end size-full'>
      <div className='flex xmd:top-0 xmd:left-0 xmd:absolute xmd:w-full xmd:overflow-auto hidden-scrollbar xmd:px-[0.59rem]'>
        <Link
          onClick={() => {
            if (pathName?.includes('/tin-tuc')) return
            setIsFilterPosts(true)
          }}
          scroll={false}
          href='/tin-tuc'
          className={`${
            categoryCurrent
              ? 'bg-[#F2F2F2] text-greyscale-80'
              : 'bg-blue-700 text-white'
          } font-semibold caption1 py-[0.81rem] px-[1.46rem] rounded-[7.5rem] whitespace-nowrap xmd:h-[2.635rem]`}
        >
          Mới nhất
        </Link>
        {categories?.slice(0, isMore ? 3 : 4)?.map((category, index) => (
          <Link
            onClick={() => {
              if (pathName?.includes(category?.slug)) return
              setIsFilterPosts(true)
            }}
            scroll={false}
            href={handleHref(category)}
            key={index}
            className={`${
              categoryCurrent === category?.slug
                ? 'bg-blue-700 text-white'
                : 'bg-[#F2F2F2] text-greyscale-80'
            } font-semibold caption1 py-[0.81rem] px-[1.46rem] rounded-[7.5rem] whitespace-nowrap ml-[1.17rem] xmd:h-[2.635rem]`}
          >
            {category?.name}
          </Link>
        ))}
        {isMore && (
          <PopoverMoreCategoryLink
            categoryCurrent={categoryCurrent}
            isOpen={isOpen}
            setIsOpen={setIsOpen}
            handleHref={handleHref}
            setIsFilterPosts={setIsFilterPosts}
            categories={categories?.slice(3, categories.length)}
          >
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`${
                isOpen
                  ? 'bg-[linear-gradient(97deg,#102841_0%,#1359A1_100%)] text-white'
                  : 'bg-[#F2F2F2] text-greyscale-30'
              } font-semibold caption1 py-[0.81rem] px-[1.46rem] rounded-[7.5rem] whitespace-nowrap ml-[1.17rem] flex items-center `}
            >
              XEM THÊM
              <svg
                xmlns='http://www.w3.org/2000/svg'
                width='10'
                height='6'
                viewBox='0 0 10 6'
                fill='none'
                className='ml-[0.29rem]'
              >
                <path
                  d='M5 5.5L0 0.5H10L5 5.5Z'
                  fill={isOpen ? 'white' : '#262626'}
                />
              </svg>
            </button>
          </PopoverMoreCategoryLink>
        )}
      </div>
    </div>
  )
}
