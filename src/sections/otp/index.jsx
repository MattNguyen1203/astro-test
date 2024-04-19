import OTP from '@/components/otp'

export default function OTPIndex({isMobile}) {
  return (
    <div className='w-full mt-[1.17rem] xmd:pb-[4.43rem]'>
      <OTP isMobile={isMobile} />
    </div>
  )
}
