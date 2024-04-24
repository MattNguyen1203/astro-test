'use client'

import useDebounce from '@/hooks/useDebounce'
import {useEffect, useState} from 'react'
import {toast} from 'sonner'

export default function ButtonChange({handleQuantity, initQuantity, stockQty}) {
  const [quantity, setQuantity] = useState(1)
  const [action, setAction] = useState(false)

  const debounceQuantity = useDebounce(quantity, 300)

  useEffect(() => {
    setQuantity(initQuantity)
  }, [initQuantity])
  const handleDecre = () => {
    if (quantity === 1) {
      return toast.info('Số lượng sản phẩm đã giảm đến mức tối thiểu!', {
        position: 'top-center',
      })
    } else {
      setQuantity((prev) => prev - 1)
      setAction(true)
    }
  }

  const handleIncre = () => {
    if (stockQty === quantity || !stockQty) {
      toast.info('Số lượng tồn kho không đủ!', {
        position: 'top-center',
      })
      return
    }
    setQuantity((prev) => prev + 1)
    setAction(true)
  }

  useEffect(() => {
    if (action) {
      handleQuantity(debounceQuantity, 'updateQty')
    }
  }, [debounceQuantity])
  return (
    <div className='flex items-center w-fit'>
      <button
        onClick={handleDecre}
        className='size-[2.63543rem] xmd:size-[2.34261rem] rounded-[0.58565rem] bg-elevation-20 flex justify-center items-center group'
      >
        <svg
          xmlns='http://www.w3.org/2000/svg'
          width='24'
          height='24'
          viewBox='0 0 24 24'
          fill='none'
          className='size-[1.75695rem] group-hover:scale-110 origin-center group-hover:active:scale-90 transition-all duration-200'
        >
          <path
            d='M7 12H17'
            stroke='#262626'
            strokeWidth='2'
            className='xmd:stroke-[1.5]'
            strokeLinecap='round'
            strokeLinejoin='round'
          />
        </svg>
      </button>
      <div className='w-[2.05rem] relative xmd:w-[1.9rem]'>
        <span className='absolute font-semibold text-black -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 button xmd:caption1'>
          {quantity}
        </span>
      </div>
      <button
        onClick={handleIncre}
        className='size-[2.63543rem] xmd:size-[2.34261rem] rounded-[0.58565rem] bg-elevation-20 flex justify-center items-center group'
      >
        <svg
          xmlns='http://www.w3.org/2000/svg'
          width='24'
          height='24'
          viewBox='0 0 24 24'
          fill='none'
          className='size-[1.75695rem] group-hover:scale-110 origin-center group-hover:active:scale-90 transition-all duration-200'
        >
          <path
            d='M7 12H12M12 12H17M12 12V17M12 12V7'
            stroke='#262626'
            strokeWidth='2'
            className='xmd:stroke-[1.5]'
            strokeLinecap='round'
            strokeLinejoin='round'
          />
        </svg>
      </button>
    </div>
  )
}
