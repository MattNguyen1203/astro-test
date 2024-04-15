'use client'

import {InputOTP, InputOTPGroup, InputOTPSlot} from '@/components/ui/input-otp'
import {useState} from 'react'

export default function OTP() {
  const [value, setValue] = useState('')

  return (
    <div className='w-full space-y-2'>
      <InputOTP
        maxLength={6}
        value={value}
        onChange={(value) => setValue(value)}
        className='w-full'
      >
        <InputOTPGroup className='w-full grid grid-cols-6 gap-x-[0.55rem]'>
          <InputOTPSlot
            className='rounded-[0.36603rem] bg-[#F8F8F8] border w-full h-[3.22108rem]'
            index={0}
          />
          <InputOTPSlot
            className='rounded-[0.36603rem] bg-[#F8F8F8] border w-full h-[3.22108rem]'
            index={1}
          />
          <InputOTPSlot
            className='rounded-[0.36603rem] bg-[#F8F8F8] border w-full h-[3.22108rem]'
            index={2}
          />
          <InputOTPSlot
            className='rounded-[0.36603rem] bg-[#F8F8F8] border w-full h-[3.22108rem]'
            index={3}
          />
          <InputOTPSlot
            className='rounded-[0.36603rem] bg-[#F8F8F8] border w-full h-[3.22108rem]'
            index={4}
          />
          <InputOTPSlot
            className='rounded-[0.36603rem] bg-[#F8F8F8] border w-full h-[3.22108rem]'
            index={5}
          />
        </InputOTPGroup>
      </InputOTP>
    </div>
  )
}
