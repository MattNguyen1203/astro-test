'use client'

import {cn} from '@/lib/utils'
import Image from 'next/image'
import {useState} from 'react'

const ChangeQuantity = ({stockQty}) => {
  const [inputVal, setInputVal] = useState(1)
  const handleDec = () => {
    if (inputVal > 1) {
      setInputVal((prev) => Number(prev) - 1)
    }
  }
  const handleInc = () => {
    if (inputVal < stockQty) {
      setInputVal((prev) => Number(prev) + 1)
    }
  }
  return (
    <div className='flex items-center justify-between xmd:w-full xmd:mb-[0.88rem]'>
      <span className='hidden font-medium xmd:flex caption1 text-greyscale-30 '>
        Số lượng:
      </span>
      <div className='flex'>
        <div
          className={cn(
            'w-[2.34261rem] h-[2.34261rem] p-[0.35rem] bg-white rounded-[0.46852rem] shadow-[1.6px_1.6px_9.6px_0px_rgba(0,0,0,0.02),-2.4px_1.6px_16px_0px_rgba(0,0,0,0.04)] cursor-pointer select-none',
            inputVal === 1 && 'opacity-50',
          )}
          onClick={handleDec}
        >
          <Image
            src={'/components/minus.svg'}
            width={30}
            height={30}
            alt='icon minus'
          />
        </div>
        <div
          className={`${
            isAdd ? 'size-[2.92826rem]' : 'size-[2.3rem]'
          } select-none`}
        >
          <input
            type='number'
            name='quantity'
            value={inputVal}
            className='input-hidden sub2 font-semibold text-[#000] flex items-center justify-center w-full h-full text-center px-[0.5rem]'
            onChange={(e) => {
              if (e.target.value <= stockQty) setInputVal(e.target.value)
            }}
          />
        </div>
        <div
          className={cn(
            'cursor-pointer w-[2.34261rem] h-[2.34261rem] p-[0.35rem] bg-white rounded-[0.46852rem] shadow-[1.6px_1.6px_9.6px_0px_rgba(0,0,0,0.02),-2.4px_1.6px_16px_0px_rgba(0,0,0,0.04)] select-none',
            inputVal === stockQty && 'opacity-50',
          )}
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
    </div>
  )
}

export default ChangeQuantity
