'use client'
import useStore from '@/app/(store)/store'
import {getDataAuth} from '@/lib/getDataAuth'
import {getSession} from 'next-auth/react'
import Image from 'next/image'
import {useEffect, useState} from 'react'

import dynamic from 'next/dynamic'
const SheetCart = dynamic(() => import('@/components/sheetcart'), {ssr: false})

export default function Cart({isMobile, cartDefault, session}) {
  const isAuth = session?.status === 'authenticated'

  const isOpenMegaMenuRes = useStore((state) => state.isOpenMegaMenuRes)
  const actionCart = useStore((state) => state.actionCart)
  const listCart = useStore((state) => state.listCart)
  const setListCart = useStore((state) => state.setListCart)
  const [isLoading, setIsLoading] = useState(false)
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    if (isAuth) return
    async function myFunction() {
      const session = await getSession()
      return session
    }
    myFunction()
    if (cartDefault) {
      setListCart(Array.isArray(cartDefault) ? cartDefault : [])
      setIsLoading(false)
    }
  }, [])

  useEffect(() => {
    if (isAuth) {
      const fetchCart = async () => {
        setIsLoading(true)
        const res = await getDataAuth({
          token: session?.accessToken,
          api: `/okhub/v1/cart`,
        })

        if (res) {
          setListCart(Array.isArray(res) ? res : [])
        }
        setIsLoading(false)
      }
      fetchCart()
    } else {
      const localGet = localStorage.getItem('cartAstro')
        ? JSON.parse(localStorage.getItem('cartAstro'))
        : []
      setListCart(localGet)
    }
  }, [actionCart, isAuth])

  return (
    <>
      <div
        onClick={() => setIsOpen(!isOpen)}
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
        />
        {listCart?.length > 0 && (
          <div className='absolute top-0 -translate-y-[0.22rem] right-0 translate-x-1/2 rounded-full bg-blue-600 border border-solid border-white flex justify-center items-center size-fit z-10 py-[0.05rem] px-[0.29rem] caption2 font-normal text-white'>
            {listCart?.length}
          </div>
        )}
      </div>
      <SheetCart
        isMobile={isMobile}
        isLoading={isLoading}
        isAuth={isAuth}
        session={session}
        isOpen={isOpen}
        setIsOpen={setIsOpen}
      />
    </>
  )
}
