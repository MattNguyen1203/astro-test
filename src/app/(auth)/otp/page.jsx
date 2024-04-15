import OTPIndex from '@/sections/otp'

export default function page() {
  return (
    <div className='relative z-10 mt-[8.13rem] mx-auto w-[23rem]'>
      <h1 className='font-semibold text-blue-900 h5'>NHẬP MÃ OTP</h1>
      <p className='mt-[0.59rem] text-greyscale-50/50 caption1 font-normal'>
        Vui lòng xác thực số điện thoại để bảo mật và đồng bộ tài khoản của bạn
        dễ dàng hơn
      </p>
      <OTPIndex />
    </div>
  )
}
