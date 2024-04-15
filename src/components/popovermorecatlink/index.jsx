'use client'
import {Popover, PopoverContent, PopoverTrigger} from '@/components/ui/popover'
import Link from 'next/link'
import {usePathname} from 'next/navigation'

export function PopoverMoreCategoryLink({
  children,
  categoryCurrent,
  categories,
  isOpen,
  setIsOpen,
  setIsFilterPosts,
  handleHref,
}) {
  const pathName = usePathname()
  return (
    <Popover
      open={isOpen}
      onOpenChange={setIsOpen}
    >
      <PopoverTrigger asChild>{children}</PopoverTrigger>
      <PopoverContent className='flex flex-col w-full space-y-[0.44rem]'>
        {categories?.map((category, index) => (
          <Link
            onClick={() => {
              if (pathName?.includes(category?.slug)) return
              setIsFilterPosts(true)
              setIsOpen(false)
            }}
            scroll={false}
            href={handleHref(category)}
            key={index}
            className={`${
              categoryCurrent === category?.slug
                ? 'bg-blue-700 text-white'
                : 'bg-[#F2F2F2] text-greyscale-80'
            } font-semibold caption1 py-[0.81rem] px-[1.46rem] rounded-[0.3rem] whitespace-nowrap block xmd:h-[2.635rem]`}
          >
            {category?.name}
          </Link>
        ))}
      </PopoverContent>
    </Popover>
  )
}
