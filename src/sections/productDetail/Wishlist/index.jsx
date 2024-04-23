'use client'

import {addWishlist} from '@/actions/addWishlist'
import Image from 'next/image'
import {useEffect, useState} from 'react'
import {toast} from 'sonner'

const WishListIcon = ({data, session, wishList}) => {
  const [isActive, setIsActive] = useState(
    wishList?.some((e) => e?.product?.id === data?.id),
  )
  const [id, setId] = useState(
    wishList?.find((e) => e?.product?.id === data?.id)?.wishlist_id,
  )

  useEffect(() => {
    return () => {
      if (session?.status === 'authenticated') {
        if (isActive) {
          const request = {
            api: '/custom/v1/wistlist/addProductToWishlist',
            token: session?.accessToken,
            body: JSON.stringify({
              product_id: data?.id,
            }),
          }

          addWishlist(request)
            .then((res) => {
              if (res?.message?.includes('Successfully')) {
                setId(Number(res?.id))
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
                    id: id,
                  },
                ],
              }),
            }

            addWishlist(request)
              .then((res) => res)
              .catch((err) => err)
          }
        }
      }
    }
  }, [])

  const handleWishlist = () => {
    if (isActive) {
      //delete
      // init request
      const request = {
        api: '/custom/v1/wistlist/deleteWishlist',
        method: 'DELETE',
        token: session?.accessToken,
        body: JSON.stringify({
          wishlist_items: [
            {
              id: id,
            },
          ],
        }),
      }

      toast.warning('Đã xoá khỏi danh sách yêu thích!', {
        duration: 5000,
        position: 'bottom-center',
      })
      setIsActive((prev) => !prev)

      localStorage.setItem(
        'wishlist',
        JSON.stringify({
          type: 'delete',
          id: id,
          productId: data?.id,
        }),
      )
      addWishlist(request)
        .then((res) => {
          // if (res?.message?.includes('Successfully')) {
          // }
          return res
        })
        .catch((err) => err)
    } else {
      //add
      const request = {
        api: '/custom/v1/wistlist/addProductToWishlist',
        token: session?.accessToken,
        body: JSON.stringify({
          product_id: data?.id,
        }),
      }

      toast.success('Thêm vào danh sách yêu thích thành công!', {
        duration: 5000,
        position: 'bottom-center',
      })
      setIsActive((prev) => !prev)
      localStorage.setItem(
        'wishlist',
        JSON.stringify({
          type: 'add',
          id: id,
          productId: data?.id,
        }),
      )
      addWishlist(request)
        .then((res) => {
          if (res?.message?.includes('Successfully')) {
            setId(Number(res?.id))
          }
        })
        .catch((err) => err)
    }
  }
  return (
    <div
      onClick={handleWishlist}
      className='size-[2.342rem] bg-elevation-30 p-[0.29rem] rounded-[0.58565rem] flex items-center justify-center cursor-pointer'
    >
      {isActive ? (
        <Image
          src='/components/heartActive.svg'
          alt='wishlist'
          width={20}
          height={20}
          className='size-[1.75695rem] object-contain'
        />
      ) : (
        <Image
          src='/components/heart.svg'
          alt='wishlist'
          width={20}
          height={20}
          className='size-[1.75695rem] object-contain'
        />
      )}
    </div>
  )
}

export default WishListIcon
