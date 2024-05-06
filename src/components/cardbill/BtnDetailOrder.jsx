'use client'

import {useState} from 'react'

import dynamic from 'next/dynamic'
const DialogDetailOrder = dynamic(() =>
  import('../dialogDetailOrder').then((mod) => mod.DialogDetailOrder),
)

export default function BtnDetailOrder({id}) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <DialogDetailOrder
      isOpen={isOpen}
      setIsOpen={setIsOpen}
      id={id}
    >
      <button
        onClick={() => setIsOpen(!isOpen)}
        className='p-[0.73rem] rounded-[0.43924rem] uppercase caption1 tracking-[0.00439rem] font-semibold bg-white text-blue-800 border border-solid border-blue-800 xmd:w-[49%]'
      >
        CHI TIẾT ĐƠN
      </button>
    </DialogDetailOrder>
  )
}
