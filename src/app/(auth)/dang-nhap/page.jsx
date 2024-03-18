import SignInIndex from '@/sections/signin'

export default function SignInPage() {
  return (
    <div className='relative z-10 mt-[7.32rem] mx-auto w-[23rem]'>
      <span className='block font-normal text-center text-blue-900 h6'>
        Chào mừng bạn đến với
      </span>
      <h1 className='font-semibold text-center text-blue-900 h4'>
        AstroMazing
      </h1>
      <SignInIndex />
    </div>
  )
}
