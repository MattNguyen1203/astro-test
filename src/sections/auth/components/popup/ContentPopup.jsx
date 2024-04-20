import Image from 'next/image'
import Link from 'next/link'

export default function ContentPopup({
  isSignUp,
  isFoget,
  isLogin,
  onOpenChange,
}) {
  return (
    <div className='flex w-[35.35871rem] p-[1.46413rem] justify-center items-center rounded-[0.87848rem] bg-white select-none'>
      <div className='flex flex-col items-center justify-center flex-1'>
        <div className='flex flex-col items-center justify-center'>
          <Image
            className='object-contain w-[2.34261rem] h-[2.34261rem]'
            src={
              isLogin
                ? '/components/check-circle-failed.svg'
                : '/components/check-circle.svg'
            }
            alt='icon check'
            width={32}
            height={32}
          />
          <h3
            className={`${
              isLogin ? 'text-[#de5f5f]' : 'text-[#36BA61]'
            } mt-[0.58565rem] text-[1.46413rem] leading-[1.2] font-semibold `}
          >
            {isSignUp
              ? 'Đăng ký thành công'
              : isFoget
              ? 'Đặt lại mật khẩu thành công'
              : 'Đăng nhập thất bại!'}
          </h3>
        </div>
        <p className='body2 font-normal text-center text-blue-800/80 my-[1.46413rem]'>
          {isSignUp
            ? 'Bạn đã đăng kí thành công tài khoản thành viên tại Astromazing. Hãy ghé trang chủ để xem sản phẩm nhà Astromazing nhé!'
            : isFoget
            ? 'Chúc mừng bạn đã đặt lại mật khẩu thành công. Cùng Astro khám phá những sản phẩm công nghệ mới nhé!'
            : 'Vui lòng kiểm tra lại thông tin đăng nhập!'}
        </p>
        {isLogin ? (
          <button
            onClick={() => onOpenChange(false)}
            className='w-[12.95754rem] h-[3.22108rem] flex items-center justify-center py-[0.73206rem] pr-[1.1713rem] pl-[1.46413rem] rounded-[0.58565rem] bg-gradient-to-l from-[#1359A1] to-[#102841] font-semibold text-center text-white button whitespace-nowrap'
          >
            ĐĂNG NHẬP LẠI
          </button>
        ) : (
          <Link
            href={`/`}
            className='w-[12.95754rem] h-[3.22108rem] flex items-center justify-center py-[0.73206rem] pr-[1.1713rem] pl-[1.46413rem] rounded-[0.58565rem] bg-gradient-to-l from-[#1359A1] to-[#102841] font-semibold text-center text-white button whitespace-nowrap'
          >
            Đăng nhập ngay
            <svg
              xmlns='http://www.w3.org/2000/svg'
              width='17'
              height='16'
              viewBox='0 0 17 16'
              fill='none'
              className='w-[1.1713rem] h-[1.1713rem] ml-[0.59rem]'
            >
              <path
                d='M3.83398 8H13.1673M13.1673 8L9.16732 4M13.1673 8L9.16732 12'
                stroke='white'
                strokeWidth='2'
                strokeLinecap='round'
                strokeLinejoin='round'
              />
            </svg>
          </Link>
        )}
      </div>
    </div>
  )
}
