'use client'
import useStore from '@/app/(store)/store'
import useClickOutSide from '@/hooks/useClickOutSide'
import Image from 'next/image'
import {useEffect, useState} from 'react'

import dynamic from 'next/dynamic'
const MenuUser = dynamic(() => import('@/sections/account/components/menuuser'))

export default function Account({session, isMobile, profile}) {
  const [isOpen, setIsOpen] = useState(false)
  const [sideRef, isOutSide] = useClickOutSide(false)
  const isOpenMegaMenuRes = useStore((state) => state.isOpenMegaMenuRes)
  const isHasImage = profile?.picture_profile || profile?.avatar_url

  useEffect(() => {
    if (isOutSide) {
      setIsOpen(false)
    }
  }, [isOutSide])

  return (
    <div
      ref={sideRef}
      className={`${
        isOpenMegaMenuRes ? 'opacity-0 pointer-events-none' : 'opacity-100'
      } ${
        session?.accessToken ? '' : 'mr-[0.44rem]'
      } size-[2.63543rem] xmd:size-[2.34261rem] bg-elevation-20 rounded-[6.5vw] flex justify-center items-center ml-[1.17rem] relative cursor-pointer transition-all duration-200 xmd:mx-[0.73rem]`}
    >
      <Image
        onClick={() => setIsOpen(!isOpen)}
        className={`${
          isHasImage ? 'size-full' : 'size-[1.31772rem] xmd:size-[1.1713rem]'
        } flex-shrink-0 object-cover rounded-full `}
        src={
          profile?.picture_profile ||
          profile?.avatar_url ||
          '/layout/nav/user.svg'
        }
        alt='icon user'
        width={18}
        height={18}
        priority
      />
      {isOpen && !isOutSide && (
        <div
          id='popup_account_nav'
          className={`${
            isOpen ? 'active' : ''
          } absolute w-[15.8858rem] -bottom-[0.66rem] translate-y-full left-1/2 -translate-x-1/2 z-50 rounded-[0.58565rem] bg-white shadow-[2px_2px_12px_0px_rgba(0,0,0,0.02),-3px_2px_20px_0px_rgba(0,0,0,0.04)]`}
        >
          <MenuUser
            setIsOpen={setIsOpen}
            session={session}
          />
        </div>
      )}
    </div>
  )
}
