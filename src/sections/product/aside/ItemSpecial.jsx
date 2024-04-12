'use client'

import useStore from '@/app/(store)/store'
import CheckDefault from '@/components/sheetcategories/CheckDefault'
import {usePathname, useRouter, useSearchParams} from 'next/navigation'
import {useEffect, useState} from 'react'

export default function ItemSpecial({item, onMobile}) {
  const router = useRouter()
  const searchParams = useSearchParams()
  const pathName = usePathname()
  const type = searchParams.get('type')
  const urlFilter = useStore((state) => state.urlFilter)

  const [isCheck, setIsCheck] = useState(
    onMobile && urlFilter?.searchParams?.type === item?.slug
      ? true
      : type === item?.slug
      ? true
      : false,
  )
  const setIsFilterProduct = useStore((state) => state.setIsFilterProduct)

  const setUrlFilter = useStore((state) => state.setUrlFilter)

  useEffect(() => {
    if (type === item?.slug) {
      !isCheck && setIsCheck(true)
      if (onMobile) {
        localStorage.setItem('filterType', JSON.stringify([type]))
      }
    } else {
      if (onMobile) {
        const isSpecial = localStorage.getItem('isSpecial')
        if (isSpecial) {
          setIsCheck(true)
        }
      } else {
        isCheck && setIsCheck(false)
      }
    }
  }, [searchParams])

  const handleFilterSpecial = () => {
    const typeLocal = JSON.parse(localStorage.getItem('filterType')) || ''

    if (!typeLocal) {
      localStorage.setItem('filterType', JSON.stringify([item?.slug]))
    } else {
      if (typeLocal?.includes(item?.slug)) {
        const typeLocalNew = [...typeLocal]
        typeLocalNew?.splice(typeLocalNew?.indexOf(item?.slug), 1)
        localStorage.setItem('filterType', JSON.stringify(typeLocalNew))
      } else {
        localStorage.setItem(
          'filterType',
          JSON.stringify([...typeLocal, item?.slug]),
        )
      }
    }

    if (onMobile) {
      if (urlFilter?.searchParams?.type === item?.slug) {
        setUrlFilter({
          pathName: urlFilter?.pathName,
          searchParams: {
            ...urlFilter?.searchParams,
            type: '',
          },
        })
      } else {
        setUrlFilter({
          pathName: urlFilter?.pathName,
          searchParams: {
            ...urlFilter?.searchParams,
            type: urlFilter?.searchParams?.type ? '' : item?.slug,
          },
        })
      }
    } else {
      const paramNew = new URLSearchParams(searchParams)
      setIsFilterProduct(true)
      if (type === item?.slug) {
        paramNew.delete('type')
      } else {
        if (type) {
          paramNew.delete('type')
        } else {
          paramNew.set('type', item?.slug)
        }
      }
      router.push(pathName + '?' + paramNew.toString(), {
        scroll: false,
      })
    }
    setIsCheck(!isCheck)
  }

  return (
    <div
      onClick={handleFilterSpecial}
      className='mt-[0.73rem] mb-[0.59rem] flex items-center select-none cursor-pointer'
    >
      <CheckDefault
        preventDefault={true}
        isCheck={isCheck}
        setIsCheck={setIsCheck}
        className='size-[1.46413rem]'
      />
      <span className='ml-[0.59rem] inline-block caption font-normal text-greyscale-30'>
        {item?.name}
      </span>
    </div>
  )
}
