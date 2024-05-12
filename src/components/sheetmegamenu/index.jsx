'use client'
import useStore from '@/app/(store)/store'
import {Sheet, SheetContent, SheetTrigger} from '@/components/ui/sheet'
import Image from 'next/image'
import Link from 'next/link'
import ContentMegaMenu from './ContentMegaMenu'
import {useParams, usePathname} from 'next/navigation'
import {useEffect, useState} from 'react'

const listCategories = [
  {
    title: 'DANH MỤC SẢN PHẨM',
    href: '/san-pham',
  },
  {
    title: 'TÀI KHOẢN',
    href: '/dash-board',
  },
  {
    title: 'FLASHSALE',
    href: '/flash-sale',
  },
  {
    title: 'PRE-ODER',
    href: '/pre-order',
  },
  {
    title: 'GÓC CÔNG NGHỆ',
    href: '/danh-muc/goc-cong-nghe',
  },
  // {
  //   title: 'CỬA HÀNG',
  //   href: '/cua-hang',
  // }
]

export default function SheetMegaMenu({children, categoryOptions, categories}) {
  const params = useParams()
  const pathName = usePathname()
  const setIsOpenMegaMenuRes = useStore((state) => state.setIsOpenMegaMenuRes)
  const isOpenMegaMenuRes = useStore((state) => state.isOpenMegaMenuRes)
  const [indexCat, setIndexCat] = useState(0)

  useEffect(() => {
    const indexCurrent = handleIndexCategory()
    setIndexCat(indexCurrent)
  }, [])
  const handleIndexCategory = () => {
    let id = 0
    categories?.find((item) => {
      if (item?.slug === params?.category?.[0]) {
        id = item?.id
        return true
      } else {
        return item?.children?.find((i) => {
          if (i?.slug === params?.category?.[0]) {
            id = item?.id
            return true
          } else {
            return i?.children?.find((e) => {
              if (e?.slug === params?.category?.[0]) {
                id = item?.id
                return true
              }
            })
          }
        })
      }
    })
    return categoryOptions?.findIndex((item) => item?.id === id)
  }

  const handleCategory = () => {
    return categories?.find(
      (item) => item?.id === categoryOptions?.[indexCat]?.id,
    )?.children
  }
  const categoryCurrent = handleCategory()

  const categoryChildren = Number(params?.category?.[0]) ? [] : categoryCurrent

  return (
    <Sheet
      open={isOpenMegaMenuRes}
      onOpenChange={setIsOpenMegaMenuRes}
    >
      <SheetTrigger>{children}</SheetTrigger>
      <SheetContent
        className='p-0 bg-transparent data-[state=open]:duration-300 !border-none'
        overlay={'!bg-transparent'}
        button='xmd:top-[0.9rem]'
      >
        <aside className={`size-full pt-[4.1rem]`}>
          <div className='bg-white pointer-events-auto size-full'>
            <div className='h-[3.66032rem] w-full bg-blue-800 relative overflow-x-auto hidden-scrollbar'>
              <ul className='absolute top-0 left-0 flex items-center h-full w-fit px-[0.15rem]'>
                {listCategories.map((e, index) => (
                  <li key={index}>
                    <Link
                      href={e?.href || '/'}
                      onClick={() => {
                        setIsOpenMegaMenuRes(false)
                      }}
                      className={`${
                        pathName?.includes(e?.href)
                          ? 'bg-clip-text bg-[linear-gradient(44deg,#FFF0D8_52.89%,#FFD797_107.96%)]'
                          : 'text-greyscale-30'
                      } block p-[0.73rem] caption1 tracking-[0.00439rem] font-medium whitespace-nowrap `}
                    >
                      {e?.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div className='flex size-full'>
              <div className='w-[7.32934rem] h-[85%] overflow-y-auto relative hidden-scrollbar mt-[1.68rem]'>
                <ul className='absolute top-0 w-[6.14934rem] -translate-x-1/2 left-1/2 h-fit'>
                  {categoryOptions?.map((category, index) => (
                    <li
                      key={index}
                      onClick={() => setIndexCat(index)}
                      className={`${
                        index === indexCat
                          ? 'before:absolute before:top-0 before:left-0 before:size-full before:border-[3px] before:border-solid before:border-blue-800 before:rounded-[0.58565rem] before:pointer-events-none'
                          : ''
                      } first:mt-0 mt-[0.44rem] relative last:mb-[1rem]`}
                    >
                      <div className='flex flex-col items-center p-[0.59rem] bg-white shadow-[2px_4px_20px_0px_rgba(2,87,176,0.04),-6px_2px_32px_0px_rgba(35,101,170,0.04)] rounded-[0.58565rem]'>
                        <Image
                          className='w-[1.1713rem] h-auto'
                          src={category?.icon || '/layout/nav/pen.svg'}
                          alt={category?.name}
                          width={36}
                          height={36}
                          quality={100}
                        />
                        <span className='block font-medium text-center text-greyscale-20 caption1 mt-[0.73rem]'>
                          {category?.name}
                        </span>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
              <div className='flex-1 h-full shadow-[2px_4px_20px_0px_rgba(2,87,176,0.04),-6px_2px_32px_0px_rgba(35,101,170,0.04)] relative pl-[0.59rem] pr-[0.88rem] pt-[1.76rem] pb-[4.6rem]'>
                <div className='relative size-full pb-[4rem]'>
                  <div className='relative overflow-y-auto size-full hidden-scrollbar'>
                    <div className='absolute top-0 left-0 w-full h-fit'>
                      {categoryChildren?.length > 0 && (
                        <ContentMegaMenu
                          data={categoryChildren}
                          setIsOpenMegaMenuRes={setIsOpenMegaMenuRes}
                        />
                      )}
                    </div>
                  </div>

                  <div className='absolute bottom-0 left-0 z-10 w-full h-fit py-[0.59rem] bg-white'>
                    <Link
                      onClick={() => setIsOpenMegaMenuRes(false)}
                      href={`/san-pham/${categoryOptions?.[indexCat]?.slug}`}
                      className='caption1 font-semibold tracking-[0.00439rem] text-blue-800 bg-elevation-20 rounded-[0.58565rem] flex justify-center items-center h-[2.19619rem] w-full'
                    >
                      Xem tất cả
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </aside>
      </SheetContent>
    </Sheet>
  )
}
