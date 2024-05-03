'use client'

import {useState} from 'react'
import {DialogAvatar} from '../dialogavatar'
import Image from 'next/image'

export default function ItemAvt({user, profile}) {
  const [base64, setBase64] = useState('')
  const [isOpen, setIsOpen] = useState(false)
  return (
    <DialogAvatar
      isOpen={isOpen}
      setIsOpen={setIsOpen}
      setBase64={setBase64}
    >
      <div
        onClick={() => {
          setIsOpen(true)
        }}
        className='relative size-[3.2rem] rounded-full border border-solid border-[#FFF0D8] shadow-[2px_4px_20px_0px_rgba(0,0,0,0.02),-6px_2px_32px_0px_rgba(0,0,0,0.06)]'
      >
        {user?.image && (
          <Image
            className='object-cover rounded-full size-full'
            src={user?.image}
            alt={user?.name || user?.email?.split('@')?.[0]}
            width={44}
            height={44}
          />
        )}
        {(profile?.picture_profile || profile?.avatar_url) && (
          <Image
            className='absolute size-[1.1713rem] top-0 right-0 cursor-pointer'
            src={'/account/EDIT.svg'}
            alt='icon edit avatar'
            width={14.619}
            height={14.619}
          />
        )}
      </div>
    </DialogAvatar>
  )
}
