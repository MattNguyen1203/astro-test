import ItemProductPayment from '@/sections/payment/ItemProductPayment'
import Image from 'next/image'
import Link from 'next/link'

export default function PaymentPage() {
  return (
    <section className='container relative flex justify-between'>
      <article className='sticky top-[9.76rem] left-0 w-[50.87848rem] space-y-[0.88rem]'>
        <div className='w-full p-[1.46rem] bg-[#D5F7E0] rounded-[0.58565rem] flex justify-center items-center'>
          <Image
            className='size-[1.46rem] object-contain'
            src={'/components/check-circle.svg'}
            alt='icon check'
            width={24}
            height={24}
          />
          <span className='text-[#00983D] sub2 font-semibold block ml-[0.59rem]'>
            ĐẶT HÀNG THÀNH CÔNG
          </span>
        </div>
        <div className='w-full px-[1.17rem] py-[0.88rem] rounded-[0.58565rem] bg-white'>
          <p className='font-normal text-center body2 text-greyscale-40'>
            Cảm ơn quý khách đã cho AstroMazing cơ hội được phục vụ.
            <br /> Nhân viên AstroMazing sẽ liên hệ với quý khách trong thời
            gian sớm nhất
          </p>
        </div>
        <div className='p-[1.46rem] rounded-[0.58565rem] bg-white'>
          <div className='flex items-center justify-between'>
            <span className='text-[0.87848rem] leading-[1.833] tracking-[0.0022rem] text-greyscale-40'>
              Danh sách sản phẩm :
            </span>
            <span className='font-normal caption1 text-greyscale-30'>
              3 sản phẩm
            </span>
          </div>
          <hr className='my-[0.59rem] bg-[#1E417C14] h-[0.07321rem]' />
          <div className='mt-[0.59rem]'>
            {Array(4)
              .fill(0)
              .map((item, index) => (
                <>
                  <ItemProductPayment key={index} />
                  {index < 3 && (
                    <hr className='my-[0.59rem] bg-[#1E417C14] h-[0.07321rem]' />
                  )}
                </>
              ))}
          </div>
        </div>
      </article>
      <aside className='sticky top-[9.76rem] right-0 w-[36.2rem]'>
        <div className=' p-[1.46rem] rounded-[0.58565rem] bg-white'>
          <div className='flex items-center'>
            <span className='block w-fit mr-[0.59rem] sub2 font-semibold text-greyscale-80'>
              THÔNG TIN ĐƠN HÀNG:
            </span>
            <span className='font-semibold sub2 text-brown-500'>
              #112211212
            </span>
          </div>
          <hr className='my-[0.59rem] bg-[#ECECECB2] h-[0.07321rem]' />
          <ul className='space-y-[0.88rem]'>
            <li className='flex'>
              <span className='w-[12.1rem] caption1 font-semibold text-greyscale-80 flex-shrink-0'>
                - Khách hàng:
              </span>
              <span className='font-normal caption1 text-greyscale-40'>
                Hoàng Văn Như
              </span>
            </li>
            <li className='flex'>
              <span className='w-[12.1rem] caption1 font-semibold text-greyscale-80 flex-shrink-0'>
                - Số điện thoại:
              </span>
              <span className='font-normal caption1 text-greyscale-40'>
                099222555
              </span>
            </li>
            <li className='flex'>
              <span className='w-[12.1rem] caption1 font-semibold text-greyscale-80 flex-shrink-0'>
                - Email:
              </span>
              <span className='font-normal caption1 text-greyscale-40'>
                nhuhoang12@gmail.com
              </span>
            </li>
            <li className='flex'>
              <span className='w-[12.1rem] caption1 font-semibold text-greyscale-80 flex-shrink-0'>
                - Ngày đặt hàng:
              </span>
              <span className='font-normal caption1 text-greyscale-40'>
                20/1/2024
              </span>
            </li>
            <li className='flex'>
              <span className='w-[12.1rem] caption1 font-semibold text-greyscale-80 flex-shrink-0'>
                - Địa chỉ nhận hàng:
              </span>
              <span className='font-normal caption1 text-greyscale-40'>
                376 đường Nguyễn Thị Minh Khai, Phường 5 Quận 3, Tp. Hồ Chí Minh
              </span>
            </li>
          </ul>
          <div className='rounded-[0.58565rem] p-[0.88rem] bg-[#F3F9F0] space-y-[0.59rem] mt-[0.88rem]'>
            <div className='flex items-center justify-between'>
              <span className='font-medium caption1 text-greyscale-40'>
                Hình thức thanh toán:
              </span>
              <span className='font-semibold caption1 text-greyscale-80'>
                COD
              </span>
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
        </div>
        <Link
          href='/'
          className='flex items-center justify-center w-full text-white bg-blue-700 rounded-[0.58565rem] h-[2.92826rem] shadow-[2px_4px_20px_0px_rgba(0,0,0,0.02)] mt-[0.88rem] caption1 font-semibold'
        >
          QUAY VỀ TRANG CHỦ
        </Link>
      </aside>
    </section>
  )
}
