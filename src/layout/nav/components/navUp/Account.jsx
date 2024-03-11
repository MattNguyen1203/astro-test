'use client'
import useClickOutSide from '@/hooks/useClickOutSide'
import MenuUser from '@/sections/account/components/menuuser'
import Image from 'next/image'
import {useEffect, useState} from 'react'

export default function Account({user, isMobile}) {
  const [isOpen, setIsOpen] = useState(false)
  const [sideRef, isOutSide] = useClickOutSide(false)

  useEffect(() => {
    if (isOutSide) {
      setIsOpen(false)
    }
  }, [isOutSide])

  return (
    <div className='size-[2.63543rem] xmd:size-[2.34261rem] bg-elevation-20 rounded-[6.5vw] flex justify-center items-center ml-[1.17rem] mr-[0.44rem] relative cursor-pointer'>
      <Image
        onClick={() => setIsOpen(!isOpen)}
        ref={sideRef}
        className={`${
          user?.image ? 'size-full' : 'size-[1.31772rem] xmd:size-[1.1713rem]'
        } flex-shrink-0 object-cover rounded-full `}
        src={user?.image || '/layout/nav/user.svg'}
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
          <MenuUser />
        </div>
      )}
    </div>
  )
}
