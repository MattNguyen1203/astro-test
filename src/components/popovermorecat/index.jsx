'use client'
import {Popover, PopoverContent, PopoverTrigger} from '@/components/ui/popover'
import {usePathname, useRouter, useSearchParams} from 'next/navigation'

export function PopoverMoreCategory({
  children,
  categoryCurrent,
  categories,
  setIsOpen,
  nameCategory,
}) {
  const router = useRouter()
  const pathName = usePathname()
  const searchParams = useSearchParams()
  return (
    <Popover onOpenChange={setIsOpen}>
      <PopoverTrigger asChild>{children}</PopoverTrigger>
      <PopoverContent className='flex flex-col w-full space-y-[0.44rem]'>
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
            } font-semibold caption1 py-[0.81rem] px-[1.46rem] rounded-[0.3rem] whitespace-nowrap`}
          >
            {category?.name}
          </button>
        ))}
      </PopoverContent>
    </Popover>
  )
}
