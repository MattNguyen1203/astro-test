'use client'
// component ui
import {
  Sheet,
  SheetContent,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet'

import {useEffect, useState} from 'react'
import {RadioGroup, RadioGroupItem} from '../ui/radio-group'
import {Label} from '../ui/label'
import {
  useParams,
  usePathname,
  useRouter,
  useSearchParams,
} from 'next/navigation'
import Device from '@/sections/product/aside/Device'
import Special from '@/sections/product/aside/Special'
import useStore from '@/app/(store)/store'
// import dynamic from 'next/dynamic'
// const SheetCategories = dynamic(() => import('../sheetcategories'))

export default function SheetSort({children, isMobile = false, categories}) {
  const router = useRouter()
  const params = useParams()
  const searchParams = useSearchParams()
  const pathName = usePathname()

  // const [isOpen, setIsOpen] = useState(false)
  const [isOpens, setIsOpens] = useState(false)
  const setIsFilterProduct = useStore((state) => state.setIsFilterProduct)
  const setUrlFilter = useStore((state) => state.setUrlFilter)
  const urlFilter = useStore((state) => state.urlFilter)

  const sort = searchParams.get('sort') || ''
  const price = searchParams.get('orderby') || ''
  const device = searchParams.get('device') || ''
  const type = searchParams.get('type') || ''
  const flashsale = searchParams.get('flashsale') || ''

  useEffect(() => {
    setUrlFilter({
      pathName,
      searchParams: {
        sort,
        type,
        flashsale,
        device,
        orderby: price,
        page: Number(params?.category?.[0])
          ? Number(params?.category?.[0])
          : Number(params?.category?.[1])
          ? Number(params?.category?.[1])
          : 1,
      },
    })

    const isSpecial = localStorage.getItem('isSpecial')

    if (isSpecial) {
      localStorage.setItem('filterType', JSON.stringify(['simple', 'wooco']))
    } else {
      if (type) {
        localStorage.setItem('filterType', JSON.stringify([type]))
      } else {
        localStorage.removeItem('filterType')
      }
    }
  }, [isOpens])

  // function handleNameCategory(categories, slug) {
  //   return categories?.find((e) => e?.slug === slug)?.name || 'Tất cả sản phẩm'
  // }

  const handleFilterFlashsale = () => {
    setUrlFilter({
      pathName: urlFilter.pathName,
      searchParams: {
        ...urlFilter?.searchParams,
        flashsale: urlFilter?.searchParams?.flashsale ? '' : 'true',
      },
    })
  }

  const handleSort = (query) => {
    setUrlFilter({
      pathName: urlFilter.pathName,
      searchParams: {
        ...urlFilter?.searchParams,
        orderby: query === 'new' ? '' : 'price',
        sort: query === 'new' ? '' : query,
      },
    })
  }
  const isReset = () => {
    if (pathName !== '/san-pham' || searchParams?.size) return true
    return false
  }

  function createQueryString(searchParams) {
    const query = Object.entries(searchParams)
      .filter(([key, value]) => value && key !== 'page') // Bỏ qua các cặp key-value không có giá trị hoặc giá trị là rỗng
      .map(([key, value]) => {
        return key + '=' + value
      })
      .join('&') // Nối các cặp với nhau bằng "&"

    return query
  }

  const handleReset = () => {
    if (!isReset()) return
    setIsOpens(false)
    setIsFilterProduct(true)
    router.push('/san-pham', {
      scroll: false,
    })
  }

  const handleFilterSubmit = () => {
    setIsOpens(false)
    setIsFilterProduct(true)
    const typeLocal = JSON.parse(localStorage.getItem('filterType'))
    if (typeLocal?.length === 2) {
      localStorage.setItem('isSpecial', 'all')
    } else {
      localStorage.removeItem('isSpecial')
    }
    const pathNameNew =
      urlFilter?.pathName +
      (Number(urlFilter?.searchParams?.page) > 1
        ? '/' + urlFilter?.searchParams?.page
        : '')
    const searchParamsNew = createQueryString(urlFilter?.searchParams)
    router.push(pathNameNew + '?' + searchParamsNew, {
      scroll: false,
    })
  }

  return (
    <Sheet
      open={isOpens}
      onOpenChange={setIsOpens}
    >
      <SheetTrigger asChild>{children}</SheetTrigger>
      <SheetContent
        side='bottom'
        className='pt-[1.46rem] pb-[2.64rem] px-[1.17rem] bg-white xmd:data-[state=open]:duration-200 rounded-tl-[0.87848rem] rounded-tr-[0.87848rem] shadow-[2px_4px_20px_0px_rgba(0,0,0,0.02)]'
      >
        <SheetTitle className='h-[3.80673rem] flex justify-start items-center px-[2.92rem] xmd:px-[0.88rem]'>
          Bộ lọc tìm kiếm
        </SheetTitle>
        <div className='w-full space-y-[0.88rem]'>
          <button
            onClick={handleFilterFlashsale}
            className={`${
              urlFilter?.searchParams?.flashsale
                ? 'bg-[linear-gradient(180deg,#E0B181_0.72%,#BE9367_99.87%)] text-white'
                : 'bg-elevation-20 text-greyscale-80'
            } rounded-[0.43924rem] w-full flex justify-center items-center caption font-semibold h-[2.63543rem]`}
          >
            FLASHSALE
          </button>
          {/* <SheetCategories
            categories={categories}
            isOpen={isOpen}
            setIsOpen={setIsOpen}
          >
            <button className='flex justify-between items-center px-[0.88rem] rounded-[0.29283rem] bg-elevation-20 h-[2.92826rem] w-full'>
              <span className='font-semibold sub2 text-greyscale-80'>
                {handleNameCategory(categories, params?.category?.[0])}
              </span>
              <Image
                className='size-[1.1713rem] object-contain'
                src={'/product/menu.svg'}
                alt='icon menu'
                width={24}
                height={24}
              />
            </button>
          </SheetCategories> */}
          <div className='pb-[0.88rem] border-b border-solid border-[#454545]/20'>
            <span className='block font-medium caption1 text-greyscale-70 mb-[0.15rem]'>
              Dành cho thiết bị:
            </span>
            <Device onMobile={true} />
          </div>
        </div>
        <div className='mt-[1.17rem] pb-[0.88rem] border-b border-solid border-[#454545]/20'>
          <span className='block font-medium caption1 text-greyscale-70'>
            Phân loại:
          </span>
          <Special onMobile={true} />
        </div>
        <div className='mt-[1.17rem] '>
          <span className='block font-medium caption1 text-greyscale-70'>
            Sắp xếp theo:
          </span>
          <RadioGroup
            defaultValue={sort || 'new'}
            onValueChange={(e) => {
              handleSort(e)
            }}
            className='flex flex-col mt-[0.58rem]'
          >
            <Label
              htmlFor='new'
              className='flex items-center py-[0.295rem] cursor-pointer'
            >
              <RadioGroupItem
                className='size-[1.46413rem] rounded-full border-[2px] border-solid border-[#ECECEC]'
                value='new'
                id='new'
              />

              <span className='caption font-normal text-greyscale-50 block w-fit ml-[0.59rem]'>
                Mới nhất
              </span>
            </Label>
            <Label
              htmlFor='desc'
              className='flex items-center py-[0.295rem] cursor-pointer'
            >
              <RadioGroupItem
                className='size-[1.46413rem] rounded-full border-[2px] border-solid border-[#ECECEC]'
                value='desc'
                id='desc'
              />

              <span className='caption font-normal text-greyscale-50 block w-fit ml-[0.59rem]'>
                Giá cao đến thấp
              </span>
            </Label>
            <Label
              htmlFor='asc'
              className='flex items-center py-[0.295rem] cursor-pointer'
            >
              <RadioGroupItem
                className='size-[1.46413rem] rounded-full border-[2px] border-solid border-[#ECECEC]'
                value='asc'
                id='asc'
              />

              <span className='caption font-normal text-greyscale-50 block w-fit ml-[0.59rem]'>
                Giá thấp đến cao
              </span>
            </Label>
          </RadioGroup>
          <div className='grid grid-cols-2 gap-x-[0.59rem] mt-[1.16rem] h-[2.63543rem]'>
            <button
              onClick={handleReset}
              className={`${
                isReset() ? 'bg-[#10273F]' : 'bg-greyscale-10'
              } text-white caption font-semibold flex justify-center items-center rounded-[0.43924rem]`}
            >
              THIẾP LẬP LẠI
            </button>
            <button
              onClick={handleFilterSubmit}
              className='rounded-[0.43924rem] bg-[#10273F] text-white flex justify-center items-center caption font-semibold'
            >
              LỌC
            </button>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  )
}
