'use client'
import ICSearchAccessory from '@/components/icon/ICSearchAccessory'
import {fetcher} from '@/lib/utils'
import {usePathname, useRouter, useSearchParams} from 'next/navigation'
import useSWR from 'swr'

export default function SearchTracking({isMobile}) {
  const router = useRouter()
  const pathName = usePathname()
  const searchParams = useSearchParams()

  const tracking = decodeURI(searchParams.get('tracking'))

  const {data, error, isLoading} = useSWR(
    tracking
      ? process.env.NEXT_PUBLIC_API + `/okhub/v1/order/${tracking}`
      : null,
    fetcher,
    {
      revalidateIfStale: false,
      revalidateOnFocus: false,
      revalidateOnReconnect: false,
    },
  )

  const handleSubmit = (e) => {
    e.preventDefault()
    const paramNew = new URLSearchParams(searchParams)

    if (e?.target?.[0]?.value) {
      paramNew.set('tracking', encodeURI(e?.target?.[0]?.value))
    } else {
      paramNew.delete('tracking')
    }

    router.push(pathName + '?' + paramNew.toString(), {
      scroll: false,
    })
  }
  return (
    <>
      <div className='mt-[1.76rem] xmd:mt-[2.34rem]'>
        <div className='md:w-[43.7rem] mx-auto xmd:container'>
          <h1 className='text-center h4 tracking-[0.00568rem] text-greyscale-80 font-medium xmd:h5 xmd:font-semibold xmd:tracking-[0.00366rem]'>
            Tra cứu mã đơn hàng
          </h1>
          <form
            onSubmit={handleSubmit}
            className='h-[3.51391rem] w-full flex my-[2.34rem] xmd:my-[1.17rem]'
          >
            <div className='w-full border border-solid border-greyscale-30 rounded-[0.58565rem] h-full flex justify-between xmd:border-blue-100'>
              <div className='px-[1.02rem] flex items-center w-full'>
                <ICSearchAccessory
                  stroke={tracking ? '#262626' : '#A9A9A9'}
                  className='size-[1.46413rem] pointer-events-none'
                />
                <input
                  type='text'
                  className='size-full pl-[0.59rem] placeholder:!text-greyscale-30 placeholder:sub2 placeholder:font-medium text-greyscale-80 sub2 font-medium'
                  placeholder='Nhập mã đơn hàng'
                  defaultValue={tracking}
                />
              </div>
              {!isMobile && (
                <button
                  className={`${
                    isLoading ? 'pointer-events-none cursor-not-allowed' : ''
                  } w-[10.2489rem] flex-shrink-0 rounded-tr-[0.58565rem] rounded-br-[0.58565rem] bg-blue-600 button font-semibold text-white flex justify-center items-center`}
                >
                  {isLoading ? (
                    <svg
                      class='animate-spin h-[2rem] w-[2rem] text-white'
                      xmlns='http://www.w3.org/2000/svg'
                      fill='none'
                      viewBox='0 0 24 24'
                    >
                      <circle
                        class='opacity-25'
                        cx='12'
                        cy='12'
                        r='10'
                        stroke='currentColor'
                        strokeWidth='4'
                      ></circle>
                      <path
                        fill='currentColor'
                        d='M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z'
                      ></path>
                    </svg>
                  ) : (
                    'TRA CỨU'
                  )}
                </button>
              )}
            </div>
          </form>
        </div>
      </div>
      {!isLoading && (
        <>
          {/* page1 */}
          {!tracking && (
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
          )}
          {/* page 2 */}
          {tracking && data && (
            <div className='flex w-[100rem] xmd:w-[27.45242rem] xmd:py-[1.1713rem ] xmd:px-[0] px-[24.52416rem] pb-[0.58565rem] justify-center items-center'>
              <div className='flex w-[50.87848rem] xmd:w-[27.45242rem] p-[1.1713rem] flex-col items-start rounded-[0.58565rem] bg-white'>
                <div className='flex flex-col items-start mb-[1.76rem]'>
                  <div className='flex flex-col justify-start'>
                    <div className='flex items-center justify-between'>
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
                        <span className='font-normal text-justify caption1 text-greyscale-40'>
                          Hoàng Văn Như
                        </span>
                      </div>
                      <div className='my-[0.87848rem] xmd:my-[0.14641rem] flex items-center'>
                        <p className='w-[12.00586rem] caption1 font-semibold text-greyscale-80 xmd:text-greyscale-60'>
                          - Số điện thoại:
                        </p>
                        <span className='font-normal text-justify caption1 text-greyscale-40'>
                          099222555
                        </span>
                      </div>
                      <div className='flex items-center'>
                        <p className='w-[12.00586rem] caption1 font-semibold text-greyscale-80 xmd:text-greyscale-60'>
                          - Email:
                        </p>
                        <span className='font-normal text-justify caption1 text-greyscale-40'>
                          nhuhoang12@gmail.com
                        </span>
                      </div>
                      <div className='my-[0.87848rem] xmd:my-[0.14641rem] flex items-center'>
                        <p className='w-[12.00586rem] caption1 font-semibold text-greyscale-80 xmd:text-greyscale-60'>
                          - Ngày đặt hàng:
                        </p>
                        <span className='font-normal text-justify caption1 text-greyscale-40'>
                          20/1/2024
                        </span>
                      </div>
                      <div className='flex items-center'>
                        <p className='w-[12.00586rem] caption1 font-semibold text-greyscale-80 xmd:text-greyscale-60'>
                          - Địa chỉ nhận hàng:
                        </p>
                        <span className='font-normal text-justify caption1 xmd:flex-1 text-greyscale-40'>
                          376 đường Nguyễn Thị Minh Khai, Phường 5 Quận 3, Tp.
                          Hồ Chí Minh
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className='my-[0.87848rem] w-[48.53587rem] xmd:w-[25.69546rem] h-[0.07321rem] bg-[rgba(236,236,236,0.70)]'></div>
                  <div className='flex flex-col items-start w-full'>
                    <div className='mb-[0.87848rem] w-full flex justify-between items-center'>
                      <p className='font-svnGraphik text-[1.02489rem] text-greyscale-40 text-right font-semibold leading-[1.61054rem] tracking-[0.00256rem]'>
                        Danh sách sản phẩm đã mua:
                      </p>
                      <span className='font-normal caption1 text-greyscale-30'>
                        3 sản phẩm
                      </span>
                    </div>
                    <div className='h-[20rem]'>{/*  */}</div>
                  </div>
                </div>
                <div className='flex w-full flex-col p-[0.87848rem] items-start rounded-[0.58565rem] bg-[#F3F9F0]'>
                  <div className='flex flex-col items-start w-full'>
                    <div className='flex flex-col items-start w-full'>
                      <div className='mb-[0.58565rem] w-full flex justify-between items-start'>
                        <p className='font-medium text-right caption1 text-greyscale-40'>
                          Hình thức thanh toán:
                        </p>
                        <span className='font-semibold text-right caption1 text-greyscale-80'>
                          COD
                        </span>
                      </div>
                      <div className='flex items-start justify-between w-full'>
                        <p className='font-medium text-right caption1 text-greyscale-40'>
                          Hình thức thanh toán:
                        </p>
                        <span className='font-semibold text-right caption1 text-greyscale-80'>
                          COD
                        </span>
                      </div>
                    </div>
                    <div className='my-[0.87848rem] w-[46.77892rem] xmd:w-[23.93851rem] h-[0.07321rem] bg-[rgba(30,65,124,0.16)]'></div>
                    <div className='flex flex-col items-start w-full'>
                      <div className='flex items-center justify-between w-full'>
                        <p className='font-medium text-right caption1 text-greyscale-40'>
                          Tổng tiền hàng:
                        </p>
                        <span className='font-semibold text-right caption1 text-greyscale-80'>
                          325.000đ
                        </span>
                      </div>
                      <div className='w-full my-[0.58565rem] flex justify-between items-center'>
                        <p className='font-medium text-right caption1 text-greyscale-40'>
                          Tổng tiền hàng:
                        </p>
                        <span className='font-semibold text-right caption1 text-greyscale-80'>
                          325.000đ
                        </span>
                      </div>
                      <div className='flex items-center justify-between w-full'>
                        <p className='font-medium text-right caption1 text-greyscale-40'>
                          Tổng tiền hàng:
                        </p>
                        <span className='font-semibold text-right caption1 text-greyscale-80'>
                          325.000đ
                        </span>
                      </div>
                      <div className='w-full my-[0.58565rem] flex justify-between items-center'>
                        <p className='font-medium text-right caption1 text-greyscale-40'>
                          Tổng tiền hàng:
                        </p>
                        <span className='font-semibold text-right caption1 text-greyscale-80'>
                          325.000đ
                        </span>
                      </div>
                      <div className='flex items-center justify-between w-full'>
                        <p className='font-medium text-right caption1 text-greyscale-40'>
                          Tổng tiền hàng:
                        </p>
                        <span className='font-semibold text-right caption1 text-greyscale-80'>
                          325.000đ
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className='w-[46.77892rem] xmd:w-[23.93851rem] h-[0.07321rem] bg-[rgba(30,65,124,0.16)] my-[0.87848rem]'></div>
                  <div className='flex items-center justify-between w-full'>
                    <p className='font-semibold text-right sub2 text-greyscale-50'>
                      Tổng thanh toán:
                    </p>
                    <span className='sub1 font-bold text-right text-[#D48E43]'>
                      225.000đ
                    </span>
                  </div>
                </div>
              </div>
            </div>
          )}

          {tracking && !data && (
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
                  <p className='font-normal body2 text-greyscale-40'>
                    Nhân viên AstroMazing sẽ hỗ trợ với quý khách trong thời
                    gian sớm nhất.
                  </p>
                </div>
              </div>
            </div>
          )}
        </>
      )}
    </>
  )
}
