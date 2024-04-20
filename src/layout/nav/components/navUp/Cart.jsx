'use client'
import useStore from '@/app/(store)/store'
import {getDataAuth} from '@/app/api/cart/route'
import SheetCart from '@/components/sheetcart'
import {useSession} from 'next-auth/react'
import Image from 'next/image'
import {useEffect, useState} from 'react'

export default function Cart({isMobile}) {
  const session = useSession()
  const isAuth = session?.status === 'authenticated'
  const isOpenMegaMenuRes = useStore((state) => state.isOpenMegaMenuRes)
  const actionCart = useStore((state) => state.actionCart)
  const [listCart, setListCart] = useState([])
  const [isLoading, setIsLoading] = useState(false)
  useEffect(() => {
    if (isAuth) {
      const fetchCart = async () => {
        setIsLoading(true)
        const res = await getDataAuth({
          token: session?.data?.accessToken,
          api: `/okhub/v1/cart`,
        })

        if (res) {
          setListCart(res || [])
        }
        setIsLoading(false)
      }
      fetchCart()
    } else {
      const localGet = JSON.parse(localStorage.getItem('cartAstro')) || []
      setListCart(localGet)
    }
  }, [actionCart])
  return (
    <SheetCart
      isMobile={isMobile}
      session={session}
      listCart={listCart}
      isLoading={isLoading}
      isAuth={isAuth}
    >
      <div
        className={`${
          isOpenMegaMenuRes ? 'opacity-0 pointer-events-none' : 'opacity-100'
        } transition-all duration-200 size-[2.63543rem] xmd:size-[2.34261rem] bg-elevation-20 rounded-[6.5vw] flex justify-center items-center cursor-pointer relative`}
      >
        <Image
          className='flex-shrink-0 object-cover size-[1.31772rem] xmd:w-[1.1713rem] xmd:h-auto'
          src={'/home/cart.svg'}
          alt='icon cart'
          width={18}
          height={18}
          priority
        />
        {listCart?.length > 0 && (
          <div className='absolute top-0 -translate-y-[0.22rem] right-0 translate-x-1/2 rounded-full bg-blue-600 border border-solid border-white flex justify-center items-center size-fit z-10 py-[0.05rem] px-[0.29rem] caption2 font-normal text-white'>
            {listCart?.length}
          </div>
        )}
      </div>
    </SheetCart>
  )
}
