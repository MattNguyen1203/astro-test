import BannerLookUpOrder from './banner'

export default function IndexLookUpOrder() {
  return (
    <main className='pt-[8rem]'>
      <BannerLookUpOrder />
      <section className='mt-[2.34261rem]'>
        <div className='flex flex-col items-center'>
          <h4 className='h4 font-medium text-greyscale-80'>
            Tra cứu mã đơn hàng
          </h4>
          <div className='my-[2.34rem] xmd:my-[1.1713rem] relative flex flex-col items-start'>
            <div className='w-[43.70425rem] xmd:w-[25.10981rem] p-[1.02489rem] h-[3.51391rem]'>
              {/* input */}
            </div>
            <button className='flex lg:absolute right-0 top-0 justify-center items-center bg-[#153454] w-[10.2489rem] xmd:w-full h-[3.51391rem] py-[0.73206rem] px-[1.46413rem] rounded-r-[0.58565rem] xmd:rounded-[0.58565rem]'>
              <p className='button items-center text-white font-semibold'>
                TRA CỨU
              </p>
            </button>
          </div>
          {/* page1 */}
          <div className='flex lg:flex-col items-center xmd:w-[22.47438rem]'>
            <p className='mb-[0.58565rem] caption1 font-normal text-[#94A4B4] opacity-[0.45]'>
              Đăng nhập tài khoản sẽ giúp bạn quản lý đơn hàng dễ dàng hơn!
              <span className='lg:hidden caption1 font-medium text-[#204265] opacity-100'>
                Đăng nhập ngay
              </span>
            </p>
            <span className='xmd:hidden caption1 font-semibold text-[#0D1F33]'>
              Đăng nhập ngay
            </span>
          </div>
          {/* page 2 */}
          <br></br>
          <div className='flex w-[100rem] xmd:w-[27.45242rem] xmd:py-[1.1713rem ] xmd:px-[0] px-[24.52416rem] pb-[0.58565rem] justify-center items-center'>
            <div className='flex w-[50.87848rem] xmd:w-[27.45242rem] p-[1.1713rem] flex-col items-start rounded-[0.58565rem] bg-white'>
              <div className='flex flex-col items-start mb-[1.76rem]'>
                <div className='flex flex-col justify-start'>
                  <div className='flex justify-between items-center'>
                    <div className='flex items-center flex-1'>
                      <p className='mr-[0.58565rem] sub2 font-semibold text-center text-greyscale-80'>
                        THÔNG TIN ĐƠN HÀNG:
                      </p>
                      <span className='sub2 font-semibold text-right text-[#BE9367]'>
                        #112211212
                      </span>
                    </div>
                  </div>
                  <div className='w-[48.53587rem] xmd:w-[25.69546rem] my-[0.87848rem] h-[0.07321rem] bg-[rgba(236,236,236,0.70)]'></div>
                  <div className='flex flex-col items-start'>
                    <div className='flex items-center'>
                      <p className='w-[12.00586rem] caption1 font-semibold text-greyscale-80 xmd:text-greyscale-60'>
                        - Khách hàng:
                      </p>
                      <span className='caption1 font-normal text-justify text-greyscale-40'>
                        Hoàng Văn Như
                      </span>
                    </div>
                    <div className='my-[0.87848rem] xmd:my-[0.14641rem] flex items-center'>
                      <p className='w-[12.00586rem] caption1 font-semibold text-greyscale-80 xmd:text-greyscale-60'>
                        - Số điện thoại:
                      </p>
                      <span className='caption1 font-normal text-justify text-greyscale-40'>
                        099222555
                      </span>
                    </div>
                    <div className='flex items-center'>
                      <p className='w-[12.00586rem] caption1 font-semibold text-greyscale-80 xmd:text-greyscale-60'>
                        - Email:
                      </p>
                      <span className='caption1 font-normal text-justify text-greyscale-40'>
                        nhuhoang12@gmail.com
                      </span>
                    </div>
                    <div className='my-[0.87848rem] xmd:my-[0.14641rem] flex items-center'>
                      <p className='w-[12.00586rem] caption1 font-semibold text-greyscale-80 xmd:text-greyscale-60'>
                        - Ngày đặt hàng:
                      </p>
                      <span className='caption1 font-normal text-justify text-greyscale-40'>
                        20/1/2024
                      </span>
                    </div>
                    <div className='flex items-center'>
                      <p className='w-[12.00586rem] caption1 font-semibold text-greyscale-80 xmd:text-greyscale-60'>
                        - Địa chỉ nhận hàng:
                      </p>
                      <span className='caption1 xmd:flex-1 font-normal text-justify text-greyscale-40'>
                        376 đường Nguyễn Thị Minh Khai, Phường 5 Quận 3, Tp. Hồ
                        Chí Minh
                      </span>
                    </div>
                  </div>
                </div>
                <div className='my-[0.87848rem] w-[48.53587rem] xmd:w-[25.69546rem] h-[0.07321rem] bg-[rgba(236,236,236,0.70)]'></div>
                <div className='w-full flex flex-col items-start'>
                  <div className='mb-[0.87848rem] w-full flex justify-between items-center'>
                    <p className='font-svnGraphik text-[1.02489rem] text-greyscale-40 text-right font-semibold leading-[1.61054rem] tracking-[0.00256rem]'>
                      Danh sách sản phẩm đã mua:
                    </p>
                    <span className='caption1 font-normal text-greyscale-30'>
                      3 sản phẩm
                    </span>
                  </div>
                  <div className='h-[20rem]'>{/*  */}</div>
                </div>
              </div>
              <div className='flex w-full flex-col p-[0.87848rem] items-start rounded-[0.58565rem] bg-[#F3F9F0]'>
                <div className='flex w-full flex-col items-start'>
                  <div className='flex flex-col w-full items-start'>
                    <div className='mb-[0.58565rem] w-full flex justify-between items-start'>
                      <p className='caption1 font-medium text-right text-greyscale-40'>
                        Hình thức thanh toán:
                      </p>
                      <span className='caption1 font-semibold text-right text-greyscale-80'>
                        COD
                      </span>
                    </div>
                    <div className='flex w-full justify-between items-start'>
                      <p className='caption1 font-medium text-right text-greyscale-40'>
                        Hình thức thanh toán:
                      </p>
                      <span className='caption1 font-semibold text-right text-greyscale-80'>
                        COD
                      </span>
                    </div>
                  </div>
                  <div className='my-[0.87848rem] w-[46.77892rem] xmd:w-[23.93851rem] h-[0.07321rem] bg-[rgba(30,65,124,0.16)]'></div>
                  <div className='flex  flex-col w-full items-start'>
                    <div className='w-full flex justify-between items-center'>
                      <p className='caption1 font-medium text-right text-greyscale-40'>
                        Tổng tiền hàng:
                      </p>
                      <span className='caption1 font-semibold text-right text-greyscale-80'>
                        325.000đ
                      </span>
                    </div>
                    <div className='w-full my-[0.58565rem] flex justify-between items-center'>
                      <p className='caption1 font-medium text-right text-greyscale-40'>
                        Tổng tiền hàng:
                      </p>
                      <span className='caption1 font-semibold text-right text-greyscale-80'>
                        325.000đ
                      </span>
                    </div>
                    <div className='w-full flex justify-between items-center'>
                      <p className='caption1 font-medium text-right text-greyscale-40'>
                        Tổng tiền hàng:
                      </p>
                      <span className='caption1 font-semibold text-right text-greyscale-80'>
                        325.000đ
                      </span>
                    </div>
                    <div className='w-full my-[0.58565rem] flex justify-between items-center'>
                      <p className='caption1 font-medium text-right text-greyscale-40'>
                        Tổng tiền hàng:
                      </p>
                      <span className='caption1 font-semibold text-right text-greyscale-80'>
                        325.000đ
                      </span>
                    </div>
                    <div className='w-full flex justify-between items-center'>
                      <p className='caption1 font-medium text-right text-greyscale-40'>
                        Tổng tiền hàng:
                      </p>
                      <span className='caption1 font-semibold text-right text-greyscale-80'>
                        325.000đ
                      </span>
                    </div>
                  </div>
                </div>
                <div className='w-[46.77892rem] xmd:w-[23.93851rem] h-[0.07321rem] bg-[rgba(30,65,124,0.16)] my-[0.87848rem]'></div>
                <div className='w-full flex justify-between items-center'>
                  <p className='sub2 font-semibold text-right text-greyscale-50'>
                    Tổng thanh toán:
                  </p>
                  <span className='sub1 font-bold text-right text-[#D48E43]'>
                    225.000đ
                  </span>
                </div>
              </div>
            </div>
          </div>
          {/* page3 */}
          <br />
          <div className='flex lg:w-[51.53734rem] p-[1.1713rem] flex-col items-start rounded-[0.58565rem] bg-white '>
            <div className='flex flex-col items-start'>
              <div className='mb-[0.58565rem] w-full flex justify-center items-center py-[1.02489rem] px-[1.46413rem] bg-[#FFE2E2] rounded-[0.58565rem]'>
                <p className='sub1 font-medium text-[#C13333]'>
                  Mã vận đơn không tồn tại
                </p>
              </div>
              <div className='flex p-[1.1713rem] flex-col justify-center items-center rounded-[0.58565rem] bg-white'>
                <p className='mb-[0.58565rem] body2 font-normal text-greyscale-40'>
                  Quý khách vui lòng kiểm tra lại mã vận đơn hoặc gọi điện đến
                  số{' '}
                  <span className='font-svnGraphik tetx-[1.02489rem] font-semibold leading-[150%] tracking-[0.00256rem] bg-clip-text bg-[#1359A1]'>
                    094 649 2020
                  </span>{' '}
                  để được hỗ trợ
                </p>
                <p className='body2 font-normal text-greyscale-40'>
                  Nhân viên AstroMazing sẽ hỗ trợ với quý khách trong thời gian
                  sớm nhất.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
