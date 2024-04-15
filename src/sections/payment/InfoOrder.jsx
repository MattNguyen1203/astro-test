import ItemProductPayment from './ItemProductPayment'

export default function InfoOrder({carts, onSubmit}) {
  return (
    <aside className='w-[34.91947rem] flex-shrink-0 h-fit sticky top-[9.76rem] right-0 rounded-[0.58565rem] shadow-[-3px_2px_20px_0px_rgba(0,0,0,0.04),2px_2px_12px_0px_rgba(0,0,0,0.02)] p-[1.17rem]'>
      <h3 className='font-medium sub2 text-greyscale-80'>
        THÔNG TIN ĐƠN HÀNG:
      </h3>
      <hr className='my-[1.46rem] h-[0.07321rem] bg-[#1E417C29]' />
      <div className='flex items-center justify-between'>
        <span className='text-[0.87848rem] leading-[1.833] tracking-[0.0022rem] text-greyscale-40'>
          Danh sách sản phẩm :
        </span>
        <span className='font-normal caption1 text-greyscale-30'>
          3 sản phẩm
        </span>
      </div>
      <div className='mt-[0.59rem]'>
        {carts?.map((item, index) => (
          <>
            <ItemProductPayment
              key={index}
              item={item}
            />
            {index < 3 && (
              <hr className='my-[0.59rem] bg-[#1E417C14] h-[0.07321rem]' />
            )}
          </>
        ))}
      </div>
      <div className='rounded-[0.58565rem] p-[0.88rem] bg-elevation-20 space-y-[0.59rem]'>
        <div className='flex items-center justify-between'>
          <span className='font-medium caption1 text-greyscale-40'>
            Hình thức thanh toán:
          </span>
          <span className='font-semibold caption1 text-greyscale-80'>COD</span>
        </div>
        <div className='flex items-center justify-between'>
          <span className='font-medium caption1 text-greyscale-40'>
            Phương thức vận chuyển:
          </span>
          <span className='font-semibold caption1 text-greyscale-80'>
            Hỏa tốc
          </span>
        </div>

        <hr className='h-[0.07321rem] bg-[#1E417C29] my-[0.29rem]' />
        <div className='flex items-center justify-between'>
          <span className='font-medium caption1 text-greyscale-40'>
            Tổng tiền hàng:
          </span>
          <span className='font-semibold caption1 text-greyscale-80'>
            325.000đ
          </span>
        </div>
        <div className='flex items-center justify-between'>
          <span className='font-medium caption1 text-greyscale-40'>
            Phí vận chuyển:
          </span>
          <span className='font-semibold caption1 text-greyscale-80'>
            40.000đ
          </span>
        </div>
        <div className='flex items-center justify-between'>
          <span className='font-medium caption1 text-greyscale-40'>
            Voucher giảm giá
          </span>
          <span className='font-semibold caption1 text-greyscale-80'>
            - 40.000đ
          </span>
        </div>
        <div className='flex items-center justify-between'>
          <span className='font-medium caption1 text-greyscale-40'>
            Khuyến mãi hạng thành viên
          </span>
          <span className='font-semibold caption1 text-greyscale-80'>
            - 80.000đ
          </span>
        </div>
        <div className='flex items-center justify-between'>
          <span className='font-medium caption1 text-greyscale-40'>
            Giảm giá vận chuyển:
          </span>
          <span className='font-semibold caption1 text-greyscale-80'>
            -20.000đ
          </span>
        </div>
        <hr className='h-[0.07321rem] bg-[#1E417C29] my-[0.29rem]' />
        <div className='flex items-center justify-between'>
          <span className='font-semibold sub2 text-greyscale-50'>
            Tổng thanh toán:
          </span>
          <span className='sub1 font-bold text-[#D48E43]'>225.000đ</span>
        </div>
      </div>
      <button
        onClick={onSubmit}
        type='submit'
        className='flex items-center justify-center w-full text-white bg-blue-700 rounded-[0.58565rem] mt-[1.64rem] h-[2.92826rem] caption1 font-semibold'
      >
        THANH TOÁN NGAY
      </button>
    </aside>
  )
}
