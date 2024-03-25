import TemVoucher from './TemVoucher'
import SlideMultiple from '../slidemultiple'
import Variation from './Variation'
import NamePrice from './NamePrice'
import ChangeQuantity from './ChangeQuantity'

export default function ProductInfo() {
  return (
    <div className='px-[1.17rem] pt-[1.17rem] pb-[1.14rem] rounded-[0.87848rem] bg-elevation-20 w-fit h-fit flex'>
      <SlideMultiple />
      <div className='w-[28.25769rem] relative'>
        <div className='bg-white rounded-[0.87848rem] p-[0.88rem]'>
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
