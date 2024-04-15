'use client'

import OTP from '@/components/otp'
import BtnSubmit from '../auth/components/btnsubmit'

export default function OTPIndex() {
  return (
    <div className='w-full mt-[1.17rem]'>
      <OTP />
      <div className='w-full space-y-[0.88rem] mt-[0.88rem]'>
        <BtnSubmit
          title='XÁC NHẬN'
          className='w-full h-[3.22rem]'
        />
        <p className='font-normal text-center caption1 text-greyscale-40/50'>
          Thời gian hiệu lực mã OTP còn 1:04s
        </p>
        <button className='block text-[#0084FF] button font-medium text-center w-full'>
          Gửi lại mã xác thực cho tôi
        </button>
        <button className='w-full py-[0.73rem] px-[1.46rem] flex justify-center'>
          <div className='flex items-center justify-center h-[1.76rem]'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              width='17'
              height='16'
              viewBox='0 0 17 16'
              fill='none'
              className='size-[1.1713rem]'
            >
              <path
                d='M12.0827 7.99967H5.41602M5.41602 7.99967L8.08268 10.6663M5.41602 7.99967L8.08268 5.33301'
                stroke='#0D1F33'
                strokeWidth='2'
                strokeLinecap='round'
                strokeLinejoin='round'
              />
            </svg>
            <span className='font-semibold text-blue-800 button'>Trở về</span>
          </div>
        </button>
      </div>
    </div>
  )
}
