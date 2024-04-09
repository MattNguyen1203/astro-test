'use client'

import useStore from '@/app/(store)/store'
import Image from 'next/image'
import {useRouter, useSearchParams} from 'next/navigation'

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
} from '@/components/ui/navigation-menu'

export default function PopupCategories({
  isOpen = true,
  categories = [],
  params,
}) {
  const router = useRouter()
  const searchParams = useSearchParams()
  const setIsFilterProduct = useStore((state) => state.setIsFilterProduct)

  const isActiveCategory = (slug) => {
    if (params?.category?.[0] === slug) return true
  }

  return (
    <>
      {isOpen && (
        <div className='absolute -bottom-[0.6rem] left-0 translate-y-full bg-white w-[19.03367rem] rounded-[0.58565rem] shadow-[0px_2px_30px_0px_rgba(0,0,0,0.10)] z-50'>
          <NavigationMenu
            viewPortChild='!h-full'
            viewPort='top-0 left-auto right-[0.6rem] translate-x-full w-[54.75842rem] !h-full popup_hover_categories_mega'
            className='justify-start w-full h-full max-w-full min-h-full'
            id='categories_mega_hover'
          >
            <NavigationMenuList
              className='flex flex-col w-full py-[0.88rem] h-full max-w-full'
              id='list_categories_mega_hover'
            >
              {categories?.map((category, index) => (
                <NavigationMenuItem
                  key={index}
                  className='w-full cursor-pointer pointer-events-auto'
                >
                  {category?.children?.length ? (
                    <>
                      <NavigationMenuTrigger
                        className={`relative size-full p-0 hover:!bg-transparent`}
                      >
                        <div
                          onClick={() => {
                            setIsFilterProduct(true)
                            const paramNew = new URLSearchParams(searchParams)
                            router.push(
                              `/san-pham/${category?.slug}` +
                                '?' +
                                paramNew.toString(),
                              {
                                scroll: false,
                              },
                            )
                          }}
                          className={`${
                            isActiveCategory(category?.slug)
                              ? 'shadow-[0px_2px_30px_0px_rgba(0,0,0,0.10)] bg-[linear-gradient(97deg,#102841_0%,#1359A1_100%)]'
                              : 'bg-white hover:bg-elevation-30'
                          } ${
                            index === 0 ? 'mt-0' : 'mt-[0.88rem]'
                          } transition-all duration-200 flex items-center py-[0.88rem] pl-[0.88rem] pr-[0.59rem] rounded-[0.29283rem] relative size-full`}
                        >
                          <Image
                            className='size-[1.21171rem] object-cover'
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
                            } caption1 block w-fit ml-[0.88rem] font-semibold transition-all duration-200`}
                          >
                            {category?.name}
                          </span>
                          <ICArrowRight
                            isActive={isActiveCategory(category?.slug)}
                            className='w-[1.1713rem] h-auto absolute top-1/2 right-[0.59rem] -translate-y-1/2'
                          />
                        </div>
                      </NavigationMenuTrigger>
                      <NavigationMenuContent className='w-[54.75842rem] rounded-[1.75695rem] p-[1.46rem]'>
                        <div className='flex justify-between'>
                          {category?.children?.map((item, index) => (
                            <div
                              key={index}
                              className='w-fit'
                            >
                              <h3
                                onClick={() => {
                                  setIsFilterProduct(true)
                                  const paramNew = new URLSearchParams(
                                    searchParams,
                                  )
                                  router.push(
                                    `/san-pham/${item?.slug}` +
                                      '?' +
                                      paramNew.toString(),
                                    {
                                      scroll: false,
                                    },
                                  )
                                }}
                                className='font-bold text-blue-600 caption1 pl-[0.3rem]'
                              >
                                {item?.name}
                              </h3>
                              <ul className='*:mt-[0.73rem] mt-[0.15rem] w-fit'>
                                {item?.children?.map((e, idx) => (
                                  <li
                                    onClick={() => {
                                      setIsFilterProduct(true)
                                      const paramNew = new URLSearchParams(
                                        searchParams,
                                      )
                                      router.push(
                                        `/san-pham/${e?.slug}` +
                                          '?' +
                                          paramNew.toString(),
                                        {
                                          scroll: false,
                                        },
                                      )
                                    }}
                                    key={idx}
                                    className={`${
                                      params?.category?.includes(e?.slug)
                                        ? 'bg-[linear-gradient(97deg,#102841_0%,#1359A1_100%)] text-white'
                                        : 'bg-elevation-20 text-blue-800'
                                    } font-bold caption1 w-fit px-[0.73rem] py-[0.44rem] rounded-[7.5rem]`}
                                  >
                                    {e?.name}
                                  </li>
                                ))}
                              </ul>
                            </div>
                          ))}
                        </div>
                      </NavigationMenuContent>
                    </>
                  ) : (
                    <div
                      onClick={() => {
                        setIsFilterProduct(true)
                        const paramNew = new URLSearchParams(searchParams)
                        router.push(
                          `/san-pham/${category?.slug}` +
                            '?' +
                            paramNew.toString(),
                          {
                            scroll: false,
                          },
                        )
                      }}
                      className={`${
                        isActiveCategory(category?.slug)
                          ? 'shadow-[0px_2px_30px_0px_rgba(0,0,0,0.10)] bg-[linear-gradient(97deg,#102841_0%,#1359A1_100%)]'
                          : 'bg-white hover:bg-elevation-30'
                      } ${
                        index === 0 ? 'mt-0' : 'mt-[0.88rem]'
                      } transition-all duration-200 flex items-center py-[0.88rem] pl-[0.88rem] pr-[0.59rem] rounded-[0.29283rem] relative size-full cursor-pointer`}
                    >
                      <Image
                        className='size-[1.21171rem] object-cover'
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
                        } caption1 block w-fit ml-[0.88rem] font-semibold transition-all duration-200`}
                      >
                        {category?.name}
                      </span>
                    </div>
                  )}
                </NavigationMenuItem>
              ))}
              <div className='w-full h-fit px-[0.8rem] pt-[0.88rem]'>
                <hr className='w-full bg-[#ECECECB2] h-[0.07321rem] mb-[0.88rem]' />
                <button
                  onClick={() => {
                    setIsFilterProduct(true)
                    const paramNew = new URLSearchParams(searchParams)
                    router.push(`/san-pham` + '?' + paramNew.toString(), {
                      scroll: false,
                    })
                  }}
                  className={`${
                    Number(params?.category?.[0]) || !params?.category
                      ? 'shadow-[0px_2px_30px_0px_rgba(0,0,0,0.10)] bg-[linear-gradient(97deg,#102841_0%,#1359A1_100%)] text-white'
                      : 'text-greyscale-80 hover:bg-elevation-20'
                  } font-semibold caption1 h-[2.92826rem] w-full flex justify-center items-center rounded-[0.29283rem]`}
                >
                  Tất cả sản phẩm
                </button>
              </div>
            </NavigationMenuList>
          </NavigationMenu>
        </div>
      )}
    </>
  )
}

const ICArrowRight = ({isActive, className = ''}) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width='16'
      height='17'
      viewBox='0 0 16 17'
      fill='none'
      className={className}
    >
      <path
        d='M6.66699 5.60938L9.33366 8.27604L6.66699 10.9427'
        stroke={isActive ? 'white' : 'black'}
        strokeWidth='2'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </svg>
  )
}
ICArrowRight.displayName = 'ICArrowRight'
