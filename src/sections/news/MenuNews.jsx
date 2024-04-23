'use client'

import {usePathname, useRouter} from 'next/navigation'
import {useState} from 'react'

import dynamic from 'next/dynamic'
const PopoverMoreCategory = dynamic(() =>
  import('@/components/popovermorecat').then((mod) => mod.PopoverMoreCategory),
)

export default function MenuNews({
  categories = [],
  categoryCurrent,
  searchParams,
  nameCategory,
  isPage = false,
}) {
  const router = useRouter()
  const pathName = usePathname()
  const [isOpen, setIsOpen] = useState(false)
  const isMore = categories?.length >= 5
  return (
    <div className='relative flex items-center justify-end overflow-hidden xlg:justify-start xmd:justify-end size-full'>
      <div className='flex xmd:top-0 xmd:left-0 xmd:absolute xmd:w-full xmd:overflow-auto hidden-scrollbar xmd:px-[0.59rem]'>
        <button
          onClick={() => {
            if (isPage) {
              router.push('/tin-tuc', {
                scroll: false,
              })
            } else {
              const paramNew = new URLSearchParams(searchParams)
              paramNew.delete(nameCategory)
              router.push(pathName + '?' + paramNew.toString(), {
                scroll: false,
              })
            }
          }}
          className={`${
            categoryCurrent
              ? 'bg-[#F2F2F2] text-greyscale-30'
              : 'bg-blue-700 text-white'
          } font-semibold font-svnGraphik uppercase caption1 py-[0.81rem] px-[1.46rem] rounded-[7.5rem] whitespace-nowrap xmd:h-[2.635rem]`}
        >
          Mới nhất
        </button>
        {categories?.slice(0, isMore ? 4 : 5)?.map((category, index) => (
          <button
            key={index}
            onClick={() => {
              if (isPage) {
                router.push('/tin-tuc/' + category?.slug, {scroll: false})
              } else {
                const paramNew = new URLSearchParams(searchParams)

                paramNew.set(nameCategory, category?.slug)
                router.push(pathName + '?' + paramNew.toString(), {
                  scroll: false,
                })
              }
            }}
            className={`${
              categoryCurrent === category?.slug
                ? 'bg-blue-700 text-white'
                : 'bg-[#F2F2F2] text-greyscale-30'
            } font-semibold uppercase font-svnGraphik caption1 py-[0.81rem] px-[1.46rem] rounded-[7.5rem] whitespace-nowrap ml-[1.17rem] xmd:h-[2.635rem]`}
          >
            {category?.name}
          </button>
        ))}
        {isMore && (
          <PopoverMoreCategory
            categoryCurrent={categoryCurrent}
            categories={categories?.slice(4, categories?.length)}
            setIsOpen={setIsOpen}
            nameCategory={nameCategory}
          >
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`${
                isOpen
                  ? 'bg-[linear-gradient(97deg,#102841_0%,#1359A1_100%)] text-white'
                  : 'bg-[#F2F2F2] text-greyscale-30'
              } font-semibold caption1 py-[0.81rem] px-[1.46rem] rounded-[7.5rem] whitespace-nowrap ml-[1.17rem] flex items-center xmd:h-[2.635rem]`}
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
          </PopoverMoreCategory>
        )}
      </div>
    </div>
  )
}
