'use client'

import Image from 'next/image'
import React, {useState} from 'react'
import {Input} from '@/components/ui/input'

const ChangeQuantity = () => {
  const [inputVal, setInputVal] = useState(1)
  const handleDec = () => {
    if (inputVal > 1) {
      setInputVal((prev) => prev - 1)
    }
  }
  const handleInc = () => {
    setInputVal((prev) => prev + 1)
  }
  return (
    <div className='flex'>
      <div
        className='w-[2.34261rem] h-[2.34261rem] p-[0.35rem] bg-white rounded-[0.46852rem] shadow-[1.6px_1.6px_9.6px_0px_rgba(0,0,0,0.02),-2.4px_1.6px_16px_0px_rgba(0,0,0,0.04)] cursor-pointer select-none'
        onClick={handleDec}
      >
        <Image
          src={'/components/minus.svg'}
          width={30}
          height={30}
          alt='icon minus'
        />
      </div>
      <div className='w-[2.3rem] h-[2.3rem]'>
        <input
          type='number'
          name='quantity'
          value={inputVal}
          className='input-hidden sub2 font-semibold text-[#000] flex items-center justify-center w-full h-full text-center px-[0.5rem]'
          onChange={(e) => setInputVal(e.target.value)}
        />
      </div>
      <div
        className='cursor-pointer w-[2.34261rem] h-[2.34261rem] p-[0.35rem] bg-white rounded-[0.46852rem] shadow-[1.6px_1.6px_9.6px_0px_rgba(0,0,0,0.02),-2.4px_1.6px_16px_0px_rgba(0,0,0,0.04)] select-none'
        onClick={handleInc}
      >
        <Image
          src={'/components/plus.svg'}
          width={30}
          height={30}
          alt='icon plus'
        />
      </div>
    </div>
  )
}

export default ChangeQuantity
