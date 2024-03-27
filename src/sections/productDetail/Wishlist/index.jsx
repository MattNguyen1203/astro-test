'use client'

import Image from 'next/image'
import React, {useState} from 'react'

const WishListIcon = () => {
  const [isActive, setIsActive] = useState(false)
  return (
    <div
      onClick={() => setIsActive((prev) => !prev)}
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
