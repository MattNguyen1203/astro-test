'use client'

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
} from '@/components/ui/navigation-menu'
import Image from 'next/image'

export default function PopupCategories({
  isOpen = true,
  indexSelect = 0,
  setIsOpen,
  setIndexSelect,
}) {
  return (
    <>
      {isOpen && (
        <div className='absolute -bottom-[0.6rem] left-0 translate-y-full bg-white w-[19.03367rem] rounded-[0.58565rem] shadow-[0px_2px_30px_0px_rgba(0,0,0,0.10)] z-50'>
          <NavigationMenu
            viewPort='top-0 left-auto -right-[0.5rem] translate-x-full w-[54.75842rem] popup_hover_categories_mega'
            className='justify-start w-full max-w-full'
            id='categories_mega_hover'
          >
            <NavigationMenuList
              className='flex flex-col w-full py-[0.88rem]'
              id='list_categories_mega_hover'
            >
              {Array(7)
                .fill(0)
                .map((_, index) => (
                  <NavigationMenuItem
                    key={index}
                    className='w-full'
                  >
                    <NavigationMenuTrigger
                      className={`relative size-full p-0 hover:!bg-transparent`}
                    >
                      <div
                        onClick={() => {
                          setIsOpen(false)
                          setIndexSelect(index)
                        }}
                        className={`${
                          indexSelect === index
                            ? 'shadow-[0px_2px_30px_0px_rgba(0,0,0,0.10)] bg-[linear-gradient(97deg,#102841_0%,#1359A1_100%)]'
                            : 'bg-white hover:bg-elevation-30'
                        } ${
                          index === 0 ? 'mt-0' : 'mt-[0.88rem]'
                        } transition-all duration-200 flex items-center py-[0.88rem] pl-[0.88rem] pr-[0.59rem] rounded-[0.29283rem] relative size-full`}
                      >
                        <Image
                          className='size-[1.21171rem] object-cover'
                          src={'/layout/nav/pen.svg'}
                          alt='icon pen'
                          width={24}
                          height={24}
                        />
                        <span
                          className={`${
                            indexSelect === index
                              ? 'text-white'
                              : 'text-greyscale-80'
                          } caption1 block w-fit ml-[0.88rem] font-semibold transition-all duration-200`}
                        >
                          Bút cảm ứng {index + 1}
                        </span>
                        <svg
                          xmlns='http://www.w3.org/2000/svg'
                          width='16'
                          height='17'
                          viewBox='0 0 16 17'
                          fill='none'
                          className='w-[1.1713rem] h-auto absolute top-1/2 right-[0.59rem] -translate-y-1/2'
                        >
                          <path
                            d='M6.66699 5.60938L9.33366 8.27604L6.66699 10.9427'
                            stroke={indexSelect === index ? 'white' : 'black'}
                            strokeWidth='2'
                            strokeLinecap='round'
                            strokeLinejoin='round'
                          />
                        </svg>
                      </div>
                    </NavigationMenuTrigger>
                    {/* <NavigationMenuViewport className='top-0 right-0 translate-x-full'> */}
                    <NavigationMenuContent className='w-[54.75842rem] rounded-[1.75695rem] p-[1.46rem]'>
                      <div className='flex justify-between'>
                        {Array(4)
                          .fill(0)
                          .map((_, index) => (
                            <div
                              key={index}
                              className='w-fit'
                            >
                              <span className='font-bold text-blue-600 caption1'>
                                Dòng iPad {index + 1}
                              </span>
                              <ul className='*:mt-[0.73rem] mt-[0.15rem] w-fit'>
                                <li className='font-bold text-blue-800 caption1 w-fit px-[0.73rem] py-[0.44rem] rounded-[7.5rem] bg-elevation-20'>
                                  iPad Air
                                </li>
                                <li className='font-bold text-blue-800 caption1 w-fit px-[0.73rem] py-[0.44rem] rounded-[7.5rem] bg-elevation-20'>
                                  iPad Air
                                </li>
                                <li className='font-bold text-blue-800 caption1 w-fit px-[0.73rem] py-[0.44rem] rounded-[7.5rem] bg-elevation-20'>
                                  iPad Air
                                </li>
                                <li className='font-bold text-blue-800 caption1 w-fit px-[0.73rem] py-[0.44rem] rounded-[7.5rem] bg-elevation-20'>
                                  iPad Air
                                </li>
                                <li className='font-bold text-blue-800 caption1 w-fit px-[0.73rem] py-[0.44rem] rounded-[7.5rem] bg-elevation-20'>
                                  iPad Air
                                </li>
                              </ul>
                            </div>
                          ))}
                      </div>
                    </NavigationMenuContent>
                    {/* </NavigationMenuViewport> */}
                  </NavigationMenuItem>
                ))}
            </NavigationMenuList>
          </NavigationMenu>
        </div>
      )}
    </>
  )
}
