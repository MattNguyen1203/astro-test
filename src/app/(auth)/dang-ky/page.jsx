import SignUpIndex from '@/sections/signup'

export default function SignUpPage() {
  return (
    <div className='relative z-10 mt-[7.32rem] mx-auto w-[23rem]'>
      <span className='block font-normal text-center text-blue-900 h6'>
        Đăng ký tham gia
      </span>
      <h1 className='font-semibold text-center text-blue-900 h4'>
        Voucher thả ga
      </h1>
      <SignUpIndex />
    </div>
  )
}
