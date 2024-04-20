'use client'
import {useSession} from 'next-auth/react'
import Image from 'next/image'

export default function AddToCart({data}) {
  const session = useSession()
  console.log('🚀 ~ AddToCart ~ session:', session)
  const isAuth = session?.status === 'unauthenticated'

  const handleAddToCard = () => {
    if (isAuth) {
    } else {
      const cartPrev = JSON.parse(localStorage.getItem('cartAstro')) || []
      const index = cartPrev?.findIndex((cart) => cart?.slug === data?.slug)
      if (index >= 0) {
        cartPrev[index] = data
        localStorage.setItem('cartAstro', JSON.stringify([...cartPrev]))
      } else {
        localStorage.setItem('cartAstro', JSON.stringify([...cartPrev, data]))
      }
    }
  }

  return (
    <button
      onClick={handleAddToCard}
      className='flex items-center addToCart rounded-[0.58565rem] border-[2px] border-solid border-[#102841] shadow-[2px_2px_20px_0px_rgba(0,0,0,0.04),2px_1px_12px_0px_rgba(0,0,0,0.06)] w-fit px-[1.17rem] h-[2.92826rem] ml-[0.88rem]'
    >
      <Image
        className='w-[0.9287rem] h-auto object-contain'
        src={'/home/cart-preoder-blue.svg'}
        alt='icon cart'
        width={24}
        height={24}
      />
      <span className='font-semibold caption1 text-greyscale-80 block ml-[0.59rem]'>
        THÊM VÀO GIỎ
      </span>
    </button>
  )
}
