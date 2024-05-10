'use client'
import useStore from '@/app/(store)/store'
import {Popover, PopoverContent, PopoverTrigger} from '@/components/ui/popover'
import Image from 'next/image'
import {useParams} from 'next/navigation'
import {useState} from 'react'

export function PopoverCategory({children, category}) {
  const params = useParams()
  const [isOpen, setIsOpen] = useState(false)
  const setUrlFilter = useStore((state) => state.setUrlFilter)
  const urlFilter = useStore((state) => state.urlFilter)

  const isActiveCategory = (slug) => {
    if (params?.category?.[0] === slug) return true
  }

  return (
    <Popover
      open={isOpen}
      onOpenChange={setIsOpen}
    >
      <PopoverTrigger asChild>{children}</PopoverTrigger>
      <PopoverContent
        side='center'
        className='!w-[89vw] !z-[99999] relative p-[0.88rem] -translate-x-[5px]'
      >
        <div className='w-full'>
          <button
            onClick={() => {
              if (isActiveCategory(category?.slug)) return
              setUrlFilter({
                pathName:
                  '/san-pham/' +
                  category?.slug +
                  (Number(urlFilter?.searchParams?.page) > 1
                    ? '/' + urlFilter?.searchParams?.page
                    : ''),
                searchParams: {
                  ...urlFilter?.searchParams,
                },
              })
            }}
            className={`${
              isActiveCategory(category?.slug)
                ? 'shadow-[0px_2px_30px_0px_rgba(0,0,0,0.10)] bg-[linear-gradient(97deg,#102841_0%,#1359A1_100%)]'
                : 'bg-elevation-20'
            } px-[0.88rem] rounded-[0.29283rem] flex items-center h-[3.51391rem] w-full`}
          >
            <Image
              className='w-[1.21171rem] h-auto object-contain'
              src={category?.icon || '/layout/nav/pen.svg'}
              alt={category?.name || 'icon category'}
              width={24}
              height={24}
            />
            <span
              className={`${
                isActiveCategory(category?.slug)
                  ? 'text-white'
                  : 'text-greyscale-80'
              } font-semibold sub2 block ml-[0.59rem]`}
            >
              {category?.name}
            </span>
          </button>
          <hr className='my-[0.88rem] h-[0.073rem] bg-[#ECECECB2]' />
          <span className='font-semibold caption1 text-greyscale-80'>
            Phân loại
          </span>
          {category?.children?.length > 0 && (
            <div className='flex flex-wrap mt-[0.14rem]'>
              {category?.children?.map((item, index) => (
                <button
                  key={index}
                  onClick={() => {
                    if (isActiveCategory(item?.slug)) return
                    setUrlFilter({
                      pathName:
                        '/san-pham/' +
                        item?.slug +
                        (Number(urlFilter?.searchParams?.page) > 1
                          ? '/' + urlFilter?.searchParams?.page
                          : ''),
                      searchParams: {
                        ...urlFilter?.searchParams,
                      },
                    })
                  }}
                  className={`${
                    isActiveCategory(item?.slug)
                      ? 'shadow-[0px_2px_30px_0px_rgba(0,0,0,0.10)] bg-[linear-gradient(97deg,#102841_0%,#1359A1_100%)] text-white'
                      : 'bg-elevation-30 text-greyscale-30'
                  } caption font-normal rounded-[0.43924rem] px-[0.73rem] py-[0.51rem] size-fit mt-[0.59rem] mr-[0.59rem]`}
                >
                  {item?.name}
                </button>
              ))}
            </div>
          )}
          <button
            onClick={() => setIsOpen(false)}
            className='w-full bg-[#10273F] flex justify-center items-center rounded-[0.43924rem] caption font-semibold text-white h-[2.63543rem] mt-[1.17rem]'
          >
            QUAY LẠI
          </button>
        </div>
      </PopoverContent>
    </Popover>
  )
}
