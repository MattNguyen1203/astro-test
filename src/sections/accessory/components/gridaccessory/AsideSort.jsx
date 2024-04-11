'use client'

import {usePathname, useRouter, useSearchParams} from 'next/navigation'

const sorts = [
  {
    name: 'Sản phẩm mới nhất',
    slug: 'new',
  },
  {
    name: 'Giá từ thấp đến cao',
    slug: 'asc',
  },
  {
    name: 'Giá từ cao đến thấp',
    slug: 'desc',
  },
]

export default function AsideSort() {
  const router = useRouter()
  const pathName = usePathname()
  const searchParams = useSearchParams()

  const sort = searchParams?.get('sort') || 'new'

  const handleSort = (item) => {
    if (sort === item?.slug) return
    const paramNew = new URLSearchParams(searchParams)

    if (item?.slug !== 'new') {
      paramNew.set('orderby', 'price')
      paramNew.set('sort', item?.slug)
    } else {
      paramNew.delete('sort')
      paramNew.delete('orderby')
    }

    router.push(pathName + '?' + paramNew.toString(), {
      scroll: false,
    })
  }

  return (
    <aside className='w-[6rem] h-[19.69253rem] sticky top-[9.76rem] left-0 p-[0.29rem] shadow-[2px_4px_20px_0px_rgba(0,0,0,0.02)] rounded-[0.87848rem] bg-[linear-gradient(97deg,#102841_0%,#1359A1_100%)] mt-[4.47rem] space-y-[0.29rem]'>
      {sorts?.map((item, index) => (
        <div
          key={index}
          onClick={() => handleSort(item)}
          className={`${
            sort === item?.slug
              ? 'bg-[linear-gradient(180deg,#E0B181_0.72%,#BE9367_99.87%)] text-white'
              : 'bg-white text-greyscale-80'
          } caption1 font-semibold tracking-[0.00439rem] px-[0.51rem] flex items-center text-center rounded-[0.58565rem] h-[5.27086rem] cursor-pointer`}
        >
          {item?.name}
        </div>
      ))}
    </aside>
  )
}
