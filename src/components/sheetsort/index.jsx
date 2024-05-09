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
import {usePathname, useRouter, useSearchParams} from 'next/navigation'
import Device from '@/sections/product/aside/Device'
import Special from '@/sections/product/aside/Special'
import useStore from '@/app/(store)/store'
// import dynamic from 'next/dynamic'
// const SheetCategories = dynamic(() => import('../sheetcategories'))

export default function SheetSort({
  children,
  isMobile = false,
  categories,
  devices,
}) {
  const router = useRouter()
  const searchParams = useSearchParams()
  const pathName = usePathname()

  const [isOpens, setIsOpens] = useState(false)
  const setIsFilterProduct = useStore((state) => state.setIsFilterProduct)
  const device = searchParams.get('device')?.split('--') || ''
  const type = searchParams.get('type')?.split('--') || ''
  const search = decodeURI(searchParams.get('search') || '')

  const sort = searchParams.get('sort') || ''
  const flashsale = searchParams.get('flashsale') || ''
  const preorder = searchParams.get('preorder') || ''
  const [isFlashsale, setIsFlashsale] = useState(!!flashsale)
  const [isPreorder, setIsPreorder] = useState(!!preorder)

  useEffect(() => {
    setIsFlashsale(!!flashsale)
    setIsPreorder(!!preorder)
    const dataQuery = JSON.parse(localStorage.getItem('dataQuery'))
    const dataQueryDefault = {
      sort: sort,
      orderby: sort ? 'price' : '',
      type: type?.length ? type?.join('--') : '',
      search: search,
      flashsale: flashsale,
      preorder: preorder,
      device: device?.length ? device?.join('--') : '',
      page: dataQuery?.page || 1,
    }
    localStorage.setItem('dataQuery', JSON.stringify(dataQueryDefault))
  }, [isOpens, searchParams])

  const handleFilterFlashsale = () => {
    const dataQuery = JSON.parse(localStorage.getItem('dataQuery'))
    if (!dataQuery) return
    dataQuery.flashsale = !dataQuery.flashsale
    localStorage.setItem('dataQuery', JSON.stringify(dataQuery))
    return setIsFlashsale(!!dataQuery.flashsale)
  }
  const handleFilterPreorder = () => {
    const dataQuery = JSON.parse(localStorage.getItem('dataQuery'))
    if (!dataQuery) return
    dataQuery.preorder = !dataQuery.preorder
    localStorage.setItem('dataQuery', JSON.stringify(dataQuery))
    return setIsPreorder(!!dataQuery.preorder)
  }
  const handleSort = (value) => {
    const dataQuery = JSON.parse(localStorage.getItem('dataQuery'))
    if (!dataQuery) return
    dataQuery.sort = value === 'new' ? '' : value
    dataQuery.orderby = value === 'new' ? '' : 'price'
    localStorage.setItem('dataQuery', JSON.stringify(dataQuery))
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

  const handleFilterSubmit = () => {
    const dataQuery = JSON.parse(localStorage.getItem('dataQuery'))
    if (!dataQuery) return

    const paramNew = new URLSearchParams(searchParams)

    const searchParamsNew = createQueryString(dataQuery)
    if (paramNew.toString() === searchParamsNew) return setIsOpens(false)
    router.push(pathName + '?' + searchParamsNew, {
      scroll: false,
    })
    setIsFilterProduct(true)
    return setIsOpens(false)
  }

  const isReset = () => {
    if (pathName !== '/san-pham' || searchParams?.size) return true
    return false
  }

  const handleReset = () => {
    if (!isReset()) return
    setIsOpens(false)
    setIsFilterProduct(true)
    router.push('/san-pham', {
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
              isFlashsale
                ? 'bg-[linear-gradient(180deg,#E0B181_0.72%,#BE9367_99.87%)] text-white'
                : 'bg-elevation-20 text-greyscale-80'
            } rounded-[0.43924rem] w-full flex justify-center items-center caption font-semibold h-[2.63543rem]`}
          >
            FLASHSALE
          </button>
          <button
            onClick={handleFilterPreorder}
            className={`${
              isPreorder
                ? 'bg-[linear-gradient(180deg,#E0B181_0.72%,#BE9367_99.87%)] text-white'
                : 'bg-elevation-20 text-greyscale-80'
            } rounded-[0.43924rem] w-full flex justify-center items-center caption font-semibold h-[2.63543rem]`}
          >
            PRE-ORDER
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
            <Device
              onMobile={true}
              devices={devices}
            />
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
