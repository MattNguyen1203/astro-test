'use client'

import {useState} from 'react'
import Image from 'next/image'
import dynamic from 'next/dynamic'
const DialogAvatar = dynamic(() =>
  import('../dialogavatar').then((mod) => mod.DialogAvatar),
)

export default function ItemAvt({profile, session}) {
  const [isOpen, setIsOpen] = useState(false)
  const isHasImage = profile?.picture_profile || profile?.avatar_url

  return (
    <DialogAvatar
      isOpen={isOpen}
      setIsOpen={setIsOpen}
      setBase64={() => {}}
      updateNow={true}
      token={session?.accessToken}
      email={profile?.email}
    >
      <div
        onClick={() => {
          setIsOpen(true)
        }}
        className='relative size-[3.2rem] rounded-full border border-solid border-[#FFF0D8] shadow-[2px_4px_20px_0px_rgba(0,0,0,0.02),-6px_2px_32px_0px_rgba(0,0,0,0.06)]'
      >
        {!!isHasImage && (
          <Image
            className='object-cover rounded-full size-full'
            src={profile?.picture_profile || profile?.avatar_url}
            alt={profile?.display_name}
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
