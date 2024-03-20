import FogetPassIndex from '@/sections/fogetpass'

export default function ForgetPage() {
  return (
    <div className='relative z-10 mt-[8.13rem] mx-auto w-[23rem]'>
      <h1 className='font-semibold text-blue-900 h5'>Quên mật khẩu</h1>
      <p className='mt-[0.59rem] text-greyscale-50/50 caption1 font-normal'>
        Mã OTP sẽ được trả về số điện thoại/email bạn đã đăng ký với
        AstroMazing. Vui lòng nhập đúng số điện thoại/email
      </p>
      <FogetPassIndex />
    </div>
  )
}
