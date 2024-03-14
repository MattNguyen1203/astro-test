import TemVoucher from './TemVoucher'
import SlideMultiple from '../slidemultiple'
import Variation from './Variation'
import ChangeQuantity from './changeQuantity'
import NamePrice from './NamePrice'

export default function ProductInfo() {
  return (
    <div className='px-[1.17rem] pt-[1.17rem] pb-[1.14rem] rounded-[0.87848rem] bg-elevation-20 w-fit h-fit flex'>
      <SlideMultiple />
      <div className='w-[28.25769rem] relative'>
        <div className='bg-white rounded-[0.87848rem] p-[0.88rem]'>
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
          <NamePrice />
          <TemVoucher />
          <Variation />
        </div>

        <div className='mt-[0.88rem] flex'>
          <ChangeQuantity />
          <button className='w-[8.63836rem] h-[2.34261rem] p-[0.73206rem] mx-[0.59rem] flex items-center justify-center rounded-[0.43924rem] bg-white caption1 font-semibold text-blue-800 select-none'>
            Hủy bỏ
          </button>
          <button className='w-[8.63836rem] h-[2.34261rem] p-[0.73206rem] flex items-center justify-center rounded-[0.43924rem] bg-blue-700 caption1 font-semibold text-white select-none'>
            Lưu thay đổi
          </button>
        </div>
      </div>
    </div>
  )
}
