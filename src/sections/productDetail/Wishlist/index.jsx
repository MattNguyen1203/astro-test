'use client'

import {addWishlist} from '@/actions/addWishlist'
import Image from 'next/image'
import {useState} from 'react'

const WishListIcon = ({data, session}) => {
  console.log('🚀 ~ WishListIcon ~ data:', data)
  console.log('🚀 ~ WishListIcon ~ session:', session)
  const [isActive, setIsActive] = useState(false)

  const handleWishlist = () => {
    setIsActive((prev) => !prev)
    const request = {
      api: '/custom/v1/wistlist/addProductToWishlist',
      token: session?.accessToken,
      body: JSON.stringify({
        product_id: data?.id,
      }),
    }
    console.log('🚀 ~ handleWishlist ~ request:', request)

    addWishlist(request)
      .then((res) => console.log('res', res))
      .catch((err) => console.log(err))
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
