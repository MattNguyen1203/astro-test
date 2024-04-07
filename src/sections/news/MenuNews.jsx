'use client'

import {usePathname, useRouter} from 'next/navigation'

export default function MenuNews({
  categories = [],
  categoryCurrent,
  searchParams,
  nameCategory,
  isPage = false,
}) {
  const router = useRouter()
  const pathName = usePathname()
  return (
    <div className='relative flex items-center xlg:justify-start xmd:justify-end justify-end overflow-hidden size-full'>
      <div className='flex xmd:top-0 xmd:left-0 xmd:absolute xmd:w-full xmd:overflow-auto hidden-scrollbar '>
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
              ? 'bg-[#F2F2F2] text-greyscale-80'
              : 'bg-blue-700 text-white'
          } font-semibold xmd:mt-[0.88rem] caption1 py-[0.81rem] px-[1.46rem] rounded-[7.5rem] whitespace-nowrap`}
        >
          Mới nhất
        </button>
        {categories?.map((category, index) => (
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
                : 'bg-[#F2F2F2] text-greyscale-80'
            } font-semibold xmd:mt-[0.88rem] caption1 py-[0.81rem] px-[1.46rem] rounded-[7.5rem] whitespace-nowrap ml-[1.17rem]`}
          >
            {category?.name}
          </button>
        ))}
      </div>
    </div>
  )
}
