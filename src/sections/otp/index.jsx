import OTP from '@/components/otp'
import {Suspense} from 'react'

export default function OTPIndex({isMobile}) {
  return (
    <div className='w-full mt-[1.17rem] xmd:pb-[4.43rem]'>
      <Suspense>
        <OTP isMobile={isMobile} />
      </Suspense>
    </div>
  )
}
