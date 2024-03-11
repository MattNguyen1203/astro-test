import TemVoucher from './TemVoucher'
import SlideMultiple from '../slidemultiple'

export default function PopupProduct() {
  return (
    <div className='px-[1.17rem] pt-[1.17rem] pb-[1.14rem] rounded-[0.87848rem] bg-elevation-20 w-fit h-fit flex'>
      <SlideMultiple />
      <div className='w-[26.79356rem] p-[0.88rem] bg-white rounded-[0.87848rem] relative'>
        <svg
          xmlns='http://www.w3.org/2000/svg'
          width='32'
          height='32'
          viewBox='0 0 32 32'
          fill='none'
          className='size-[2.34261rem] absolute top-[0.37rem] right-[0.29rem] cursor-pointer'
        >
          <path
            d='M21.3327 21.3336L15.9994 16.0003M15.9994 16.0003L10.666 10.667M15.9994 16.0003L21.3327 10.667M15.9994 16.0003L10.666 21.3337'
            stroke='#262626'
            strokeWidth='2.66667'
            strokeLinecap='round'
            strokeLinejoin='round'
          />
        </svg>
        <h2 className='sub2 text-greyscale-50 font-medium w-[18.88726rem] h-[2.489402rem] line-clamp-2 mb-[0.88rem]'>
          Bút cảm ứng AstroMazing Pencil GD cho iPad
        </h2>
        <div className='w-[19rem] h-[2.78rem] rounded-[0.58565rem] bg-[linear-gradient(100deg,#E9940B_46.57%,#FFDBA3_100.64%)]'>
          <span>280.000đ</span>
          <span>330.000đ</span>
          <span>-15%</span>
        </div>
        <TemVoucher />
      </div>
    </div>
  )
}