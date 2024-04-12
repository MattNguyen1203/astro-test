'use client'
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
} from '@/components/ui/navigation-menu'
import Image from 'next/image'
import Link from 'next/link'

export default function NavDown({categories}) {
  return (
    <NavigationMenu className='max-w-full'>
      <NavigationMenuList className='flex justify-between lg:min-w-[87.84773060029283rem] xl:min-w-[1200px]'>
        {categories?.slice(0, 8)?.map((e, index) => (
          <NavigationMenuItem key={index}>
            <NavigationMenuTrigger className='px-0 py-[0.52rem] bg-transparent'>
              <Image
                className='size-[1.21171rem] object-contain'
                src={e?.icon || '/layout/nav/pen.svg'}
                alt={e?.name || 'icon category'}
                priority
                width={20}
                height={20}
              />
              <span className='caption1 font-normal text-greyscale-80 inline-block ml-[0.59rem]'>
                {e?.name}
              </span>
              {e?.children?.length > 0 && (
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  width='17'
                  height='17'
                  viewBox='0 0 17 17'
                  fill='none'
                  className='siz-[1.1713rem]'
                >
                  <path
                    d='M10.7747 6.94238L8.10807 9.60905L5.44141 6.94238'
                    stroke='#262626'
                    strokeWidth='1.5'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                  />
                </svg>
              )}
            </NavigationMenuTrigger>
            {e?.children?.length > 0 && (
              <NavigationMenuContent className='container xl:min-w-[1200px] h-fit p-[2.05rem] rounded-[0.87848rem] shadow-[0px_2px_30px_0px_rgba(0,0,0,0.10),2px_4px_6px_0px_rgba(0,0,0,0.02)]'>
                <div className='flex justify-between'>
                  {e?.children?.map((item, idx) => (
                    <div key={idx}>
                      <h2 className='font-bold text-blue-800 caption1 pl-[0.3rem]'>
                        {item?.name}
                      </h2>
                      {item?.children?.length > 0 && (
                        <ul className='flex flex-col mt-[0.15rem]'>
                          {item?.children?.map((child, i) => (
                            <li
                              key={i}
                              className='mt-[0.73rem]'
                            >
                              <Link
                                className='rounded-[1.75695rem] bg-elevation-20 px-[0.73rem] py-[0.44rem] caption1 font-normal text-blue-800 block w-fit'
                                href={'/'}
                              >
                                {child?.name}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      )}
                    </div>
                  ))}
                  {e?.banner && (
                    <div className='w-[30.16105rem] rounded-[0.87848rem] overflow-hidden'>
                      <Image
                        className='object-cover size-full'
                        src={e?.banner || '/layout/nav/banner-mega.jpg'}
                        alt='banner mega'
                        width={420}
                        height={200}
                      />
                    </div>
                  )}
                </div>
              </NavigationMenuContent>
            )}
          </NavigationMenuItem>
        ))}

        <NavigationMenuIndicator className='NavigationMenuIndicator'>
          <div className='Arrow' />
        </NavigationMenuIndicator>
      </NavigationMenuList>
    </NavigationMenu>
  )
}
