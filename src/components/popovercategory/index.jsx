'use client'
import {Popover, PopoverContent, PopoverTrigger} from '@/components/ui/popover'
import {useState} from 'react'

export function PopoverCategory({children}) {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <Popover
      open={isOpen}
      onOpenChange={setIsOpen}
    >
      <PopoverTrigger asChild>{children}</PopoverTrigger>
      <PopoverContent className='!w-[89vw] !z-[99999] relative p-[0.88rem]'>
        <div className='w-full'>
          <span className='font-semibold caption1 text-greyscale-80'>
            Thiết bị
          </span>
          <div className='flex flex-wrap mt-[0.14rem]'>
            {Array(6)
              .fill(0)
              .map((_, index) => (
                <button
                  key={index}
                  className='text-greyscale-30 caption font-normal rounded-[0.43924rem] bg-elevation-30 px-[0.73rem] py-[0.51rem] size-fit mt-[0.59rem] mr-[0.59rem]'
                >
                  iPad mini
                </button>
              ))}
          </div>
          <button
            onClick={() => setIsOpen(false)}
            className='w-full bg-[#10273F] flex justify-center items-center rounded-[0.43924rem] caption font-semibold text-white h-[2.63543rem] mt-[1.17rem]'
          >
            QUAY LẠI
          </button>
        </div>
      </PopoverContent>
    </Popover>
  )
}
