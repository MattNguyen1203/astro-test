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

export default function NavDown() {
  return (
    <NavigationMenu className='max-w-full'>
      <NavigationMenuList className='flex justify-between lg:min-w-[87.84773060029283rem] xl:min-w-[1200px]'>
        <NavigationMenuItem>
          <NavigationMenuTrigger className='px-0 py-[0.52rem] bg-transparent'>
            <Image
              className='size-[1.21171rem] object-contain'
              src={'/layout/nav/pen.svg'}
              alt='icon pen'
              priority
              width={20}
              height={20}
            />
            <span className='caption1 font-normal text-greyscale-80 inline-block ml-[0.59rem]'>
              Bút cảm ứng
            </span>
          </NavigationMenuTrigger>
          <NavigationMenuContent className='container xl:min-w-[1200px]'>
            <ul className='grid gap-3 p-4 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]'>
              <li className='row-span-3'>
                <Link
                  className='flex flex-col justify-end w-full h-full p-6 no-underline rounded-md outline-none select-none bg-gradient-to-b from-muted/50 to-muted focus:shadow-md'
                  href='/'
                >
                  <div className='w-6 h-6 bg-black' />
                  <div className='mt-4 mb-2 text-lg font-medium'>shadcn/ui</div>
                  <p className='text-sm leading-tight text-muted-foreground'>
                    Beautifully designed components built with Radix UI and
                    Tailwind CSS.
                  </p>
                </Link>
              </li>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger className='px-0 py-[0.52rem] bg-transparent'>
            <Image
              className='size-[1.21171rem] object-contain'
              src={'/layout/nav/pen.svg'}
              alt='icon pen'
              priority
              width={20}
              height={20}
            />
            <span className='caption1 font-normal text-greyscale-80 inline-block ml-[0.59rem]'>
              Bút cảm ứng
            </span>
          </NavigationMenuTrigger>
          <NavigationMenuContent className='container xl:min-w-[1200px]'>
            <ul className='grid gap-3 p-4 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]'>
              <li className='row-span-3'>
                <Link
                  className='flex flex-col justify-end w-full h-full p-6 no-underline rounded-md outline-none select-none bg-gradient-to-b from-muted/50 to-muted focus:shadow-md'
                  href='/'
                >
                  <div className='w-6 h-6 bg-black' />
                  <div className='mt-4 mb-2 text-lg font-medium'>shadcn/ui</div>
                  <p className='text-sm leading-tight text-muted-foreground'>
                    Beautifully designed components built with Radix UI and
                    Tailwind CSS.
                  </p>
                </Link>
              </li>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger className='px-0 py-[0.52rem] bg-transparent'>
            <Image
              className='size-[1.21171rem] object-contain'
              src={'/layout/nav/pen.svg'}
              alt='icon pen'
              priority
              width={20}
              height={20}
            />
            <span className='caption1 font-normal text-greyscale-80 inline-block ml-[0.59rem]'>
              Bút cảm ứng
            </span>
          </NavigationMenuTrigger>
          <NavigationMenuContent className='container xl:min-w-[1200px]'>
            <ul className='grid gap-3 p-4 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]'>
              <li className='row-span-3'>
                <Link
                  className='flex flex-col justify-end w-full h-full p-6 no-underline rounded-md outline-none select-none bg-gradient-to-b from-muted/50 to-muted focus:shadow-md'
                  href='/'
                >
                  <div className='w-6 h-6 bg-black' />
                  <div className='mt-4 mb-2 text-lg font-medium'>shadcn/ui</div>
                  <p className='text-sm leading-tight text-muted-foreground'>
                    Beautifully designed components built with Radix UI and
                    Tailwind CSS.
                  </p>
                </Link>
              </li>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger className='px-0 py-[0.52rem] bg-transparent'>
            <Image
              className='size-[1.21171rem] object-contain'
              src={'/layout/nav/pen.svg'}
              alt='icon pen'
              priority
              width={20}
              height={20}
            />
            <span className='caption1 font-normal text-greyscale-80 inline-block ml-[0.59rem]'>
              Bút cảm ứng
            </span>
          </NavigationMenuTrigger>
          <NavigationMenuContent className='container xl:min-w-[1200px]'>
            <ul className='grid gap-3 p-4 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]'>
              <li className='row-span-3'>
                <Link
                  className='flex flex-col justify-end w-full h-full p-6 no-underline rounded-md outline-none select-none bg-gradient-to-b from-muted/50 to-muted focus:shadow-md'
                  href='/'
                >
                  <div className='w-6 h-6 bg-black' />
                  <div className='mt-4 mb-2 text-lg font-medium'>shadcn/ui</div>
                  <p className='text-sm leading-tight text-muted-foreground'>
                    Beautifully designed components built with Radix UI and
                    Tailwind CSS.
                  </p>
                </Link>
              </li>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger className='px-0 py-[0.52rem] bg-transparent'>
            <Image
              className='size-[1.21171rem] object-contain'
              src={'/layout/nav/pen.svg'}
              alt='icon pen'
              priority
              width={20}
              height={20}
            />
            <span className='caption1 font-normal text-greyscale-80 inline-block ml-[0.59rem]'>
              Bút cảm ứng
            </span>
          </NavigationMenuTrigger>
          <NavigationMenuContent className='container xl:min-w-[1200px]'>
            <ul className='grid gap-3 p-4 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]'>
              <li className='row-span-3'>
                <Link
                  className='flex flex-col justify-end w-full h-full p-6 no-underline rounded-md outline-none select-none bg-gradient-to-b from-muted/50 to-muted focus:shadow-md'
                  href='/'
                >
                  <div className='w-6 h-6 bg-black' />
                  <div className='mt-4 mb-2 text-lg font-medium'>shadcn/ui</div>
                  <p className='text-sm leading-tight text-muted-foreground'>
                    Beautifully designed components built with Radix UI and
                    Tailwind CSS.
                  </p>
                </Link>
              </li>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger className='px-0 py-[0.52rem] bg-transparent'>
            <Image
              className='size-[1.21171rem] object-contain'
              src={'/layout/nav/pen.svg'}
              alt='icon pen'
              priority
              width={20}
              height={20}
            />
            <span className='caption1 font-normal text-greyscale-80 inline-block ml-[0.59rem]'>
              Bút cảm ứng
            </span>
          </NavigationMenuTrigger>
          <NavigationMenuContent className='container xl:min-w-[1200px]'>
            <ul className='grid gap-3 p-4 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]'>
              <li className='row-span-3'>
                <Link
                  className='flex flex-col justify-end w-full h-full p-6 no-underline rounded-md outline-none select-none bg-gradient-to-b from-muted/50 to-muted focus:shadow-md'
                  href='/'
                >
                  <div className='w-6 h-6 bg-black' />
                  <div className='mt-4 mb-2 text-lg font-medium'>shadcn/ui</div>
                  <p className='text-sm leading-tight text-muted-foreground'>
                    Beautifully designed components built with Radix UI and
                    Tailwind CSS.
                  </p>
                </Link>
              </li>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger className='px-0 py-[0.52rem] bg-transparent'>
            <Image
              className='size-[1.21171rem] object-contain'
              src={'/layout/nav/pen.svg'}
              alt='icon pen'
              priority
              width={20}
              height={20}
            />
            <span className='caption1 font-normal text-greyscale-80 inline-block ml-[0.59rem]'>
              Bút cảm ứng
            </span>
          </NavigationMenuTrigger>
          <NavigationMenuContent className='container xl:min-w-[1200px]'>
            <ul className='grid gap-3 p-4 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]'>
              <li className='row-span-3'>
                <Link
                  className='flex flex-col justify-end w-full h-full p-6 no-underline rounded-md outline-none select-none bg-gradient-to-b from-muted/50 to-muted focus:shadow-md'
                  href='/'
                >
                  <div className='w-6 h-6 bg-black' />
                  <div className='mt-4 mb-2 text-lg font-medium'>shadcn/ui</div>
                  <p className='text-sm leading-tight text-muted-foreground'>
                    Beautifully designed components built with Radix UI and
                    Tailwind CSS.
                  </p>
                </Link>
              </li>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger className='px-0 py-[0.52rem] bg-transparent'>
            <Image
              className='size-[1.21171rem] object-contain'
              src={'/layout/nav/pen.svg'}
              alt='icon pen'
              priority
              width={20}
              height={20}
            />
            <span className='caption1 font-normal text-greyscale-80 inline-block ml-[0.59rem]'>
              Bút cảm ứng
            </span>
          </NavigationMenuTrigger>
          <NavigationMenuContent className='container xl:min-w-[1200px]'>
            <ul className='grid gap-3 p-4 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]'>
              <li className='row-span-3'>
                <Link
                  className='flex flex-col justify-end w-full h-full p-6 no-underline rounded-md outline-none select-none bg-gradient-to-b from-muted/50 to-muted focus:shadow-md'
                  href='/'
                >
                  <div className='w-6 h-6 bg-black' />
                  <div className='mt-4 mb-2 text-lg font-medium'>shadcn/ui</div>
                  <p className='text-sm leading-tight text-muted-foreground'>
                    Beautifully designed components built with Radix UI and
                    Tailwind CSS.
                  </p>
                </Link>
              </li>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>

        <NavigationMenuIndicator className='NavigationMenuIndicator'>
          <div className='Arrow' />
        </NavigationMenuIndicator>
      </NavigationMenuList>
    </NavigationMenu>
  )
}
