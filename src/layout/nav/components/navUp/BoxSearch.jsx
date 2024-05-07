'use client'

import Link from 'next/link'
import InputSearchNav from './InputSearchNav'
import PopupResult from './PopupResult'
import {useEffect, useState} from 'react'
import useStore from '@/app/(store)/store'
import PopupStore from '../popupstore'
import useSWR from 'swr'
import {fetcher} from '@/lib/utils'
import {addWishlist} from '@/actions/addWishlist'

const linkNavUp = [
  {
    title: 'Tra cứu đơn hàng',
    href: '/tra-cuu-don-hang',
  },
  {
    title: 'Góc công nghệ',
    href: '/danh-muc/goc-cong-nghe',
  },
  {
    title: 'Cửa hàng',
    href: '',
  },
  {
    title: 'Flash sale',
    href: '/flash-sale',
  },
  {
    title: 'Pre-order',
    href: '/pre-order',
  },
]

export default function BoxSearch({
  isMobile,
  productSuggest,
  categories,
  linkSocial,
  session,
}) {
  const [value, setValue] = useState('')
  const isFocusSearchNav = useStore((state) => state.isFocusSearchNav)
  const isOpenMegaMenuRes = useStore((state) => state.isOpenMegaMenuRes)

  useEffect(() => {
    // handle miss wishlist
    if (session?.status === 'authenticated') {
      const objWishList = JSON.parse(localStorage.getItem('wishlist'))
      if (objWishList) {
        if (objWishList?.type === 'add') {
          const request = {
            api: '/custom/v1/wistlist/addProductToWishlist',
            token: session?.accessToken,
            body: JSON.stringify({
              product_id: objWishList?.productId,
            }),
          }

          addWishlist(request)
            .then((res) => {
              if (res?.message?.includes('Successfully')) {
                localStorage.removeItem('wishlist')
              }
            })
            .catch((err) => err)
        } else {
          if (id) {
            const request = {
              api: '/custom/v1/wistlist/deleteWishlist',
              method: 'DELETE',
              token: session?.accessToken,
              body: JSON.stringify({
                wishlist_items: [
                  {
                    id: objWishList?.id,
                  },
                ],
              }),
            }

            addWishlist(request)
              .then((res) => {
                if (res?.message?.includes('Successfully')) {
                  localStorage.removeItem('wishlist')
                }
              })
              .catch((err) => err)
          }
        }
      }
    }
  }, [])

  const {data, error, isLoading} = useSWR(
    value
      ? process.env.NEXT_PUBLIC_API +
          `/okhub/v1/product/filter/products?limit=10&page=1&order=desc&keyword=${value}`
      : null,
    fetcher,
    {
      revalidateIfStale: false,
      revalidateOnFocus: false,
      revalidateOnReconnect: false,
    },
  )

  // refreshInterval: value ? 1000 : false,

  return (
    <div
      id='container_search_nav'
      className={`${
        isOpenMegaMenuRes ? 'opacity-0 pointer-events-none' : 'opacity-100'
      } transition-all duration-200 bg-blue-50 xmd:bg-elevation-20 rounded-[7.5rem] md:p-[0.29rem] flex items-center h-[3.22108rem] xmd:h-[2.34261rem] w-fit relative xmd:-mr-[4.4rem]`}
    >
      <InputSearchNav
        setValue={setValue}
        value={value}
        isMobile={isMobile}
        data={data}
      />
      {!isMobile && (
        <ul
          id='categories_nav'
          className='flex ml-[0.58rem]'
        >
          {linkNavUp.map((e, index) => (
            <li
              key={index}
              className={`${
                index === 2
                  ? 'relative group before:absolute before:w-full before:h-[2rem] before:bottom-0 before:left-0 before:translate-y-full'
                  : ''
              }`}
            >
              {index === 2 ? (
                <>
                  <span className='caption1 font-medium text-blue-800 p-[0.88rem]'>
                    {e.title}
                  </span>
                  <PopupStore linkSocial={linkSocial} />
                </>
              ) : (
                <Link
                  className='caption1 font-medium text-blue-800 p-[0.88rem]'
                  href={e.href}
                >
                  {e.title}
                </Link>
              )}
            </li>
          ))}
        </ul>
      )}
      {isFocusSearchNav && value && (
        <PopupResult
          productSuggest={productSuggest}
          categories={categories}
          value={value}
          data={data}
        />
      )}
    </div>
  )
}
