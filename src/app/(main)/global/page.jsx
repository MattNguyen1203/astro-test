'use client'

import BreadCrumb from '@/components/breadcrumb'
import CardBill from '@/components/cardbill'
import CardProduct from '@/components/cardproduct'
import CardVoucher from '@/components/cardvoucher'
import PopupProduct from '@/components/popupproduct'
import SlideMultiple from '@/components/slidemultiple'
import FormPreOrder from '@/sections/preorderdetail/components/FormPreOrder'
import Image from 'next/image'
import Link from 'next/link'
import {useState} from 'react'

export default function GlobalPage() {
  const [isIndex, setIsIndex] = useState(false)
  return (
    <div className='w-full'>
      <div className='h-[15rem]'></div>
      <div className='container'>
        <FormPreOrder />
      </div>
      <BreadCrumb />
      <div className='flex items-center justify-center w-full h-screen'>
        <div className='flex flex-col w-fit h-fit'>
          <SlideMultiple />
        </div>
      </div>
      <div className='flex items-center justify-center w-full h-screen'>
        {/* <PopupProduct /> */}
      </div>
      <div className='container h-[77.28843rem] relative'>
        <div className='bg-[linear-gradient(44deg,#FFF0D8_52.89%,#FFD797_107.96%)] absolute w-[40.81091rem] h-[4.465rem] -top-[1.47rem] left-1/2 -translate-x-1/2 rounded-[1.1713rem] flex justify-center items-center'>
          <h2 className='font-bold h5 text-greyscale-80'>PHỤ KIỆN IPAD</h2>
        </div>
        <Image
          className='z-0 object-contain'
          src={'/flashsale/bg-grid.png'}
          alt='background grid'
          fill
          sizes='87vw'
        />
        <div className='relative z-10 mx-auto pt-[7.75rem] md:w-[69.91215rem] xmd:mt-[2.5rem]'>
          <div className='w-full grid grid-cols-4 grid-rows-2 gap-[1.17rem]'>
            {new Array(8).fill(0).map((e, index) => (
              <CardProduct key={index} />
            ))}
          </div>
          <Link
            href={'/flashsale'}
            className='px-[1.46rem] py-[0.81rem] rounded-[7.32rem] bg-[#f2f2f2] w-fit mt-[2.34rem] mx-auto flex items-center'
          >
            <span className='font-semibold caption1 text-greyscale-80 inline-block mr-[0.59rem]'>
              +156 SẢN PHẨM
            </span>
            <svg
              xmrns='http://www.w3.org/2000/svg'
              width='7'
              height='10'
              viewBox='0 0 7 10'
              fill='none'
            >
              <path
                d='M1.51172 1L5.51172 5L1.51172 9'
                stroke='#262626'
                strokeWidth='2'
                strokeLinecap='round'
                strokeLinejoin='round'
              />
            </svg>
          </Link>
        </div>
      </div>

      <div className='container '>
        <div className='my-[3.51rem] flex justify-center items-center rounded-[0.87848rem] bg-[linear-gradient(97deg,#102841_0%,#1359A1_100%)] px-[4.39rem] py-[1.17rem] w-fit mx-auto'>
          <h2 className='bg-[linear-gradient(44deg,#FFF0D8_52.89%,#FFD797_107.96%)] h6 font-svnGraphik font-bold bg-clip-text'>
            SẢN PHẨM SẮP RA MẮT
          </h2>
        </div>
        <div className='grid grid-cols-5 grid-rows-2 gap-x-[0.88rem] gap-y-[1.17rem] w-full'>
          {new Array(10).fill(0).map((e, index) => (
            <CardProduct key={index} />
          ))}
        </div>
      </div>

      <div className='container flex flex-col items-center justify-center'>
        <div className='grid grid-cols-1 gap-y-[0.59rem]'>
          {new Array(4).fill(0).map((e, index) => (
            <CardVoucher
              isIndex={isIndex}
              setIsIndex={setIsIndex}
              index={index}
              key={index}
            />
          ))}
        </div>
        <button className='w-fit py-[0.81rem] px-[1.17rem] rounded-[7.32rem] caption1 text-greyscale-80 font-semibold mt-[1.17rem] bg-[#E9E9E9] mx-auto'>
          +12 voucher
        </button>
      </div>
      <CardBill />

      {/* đổi mk */}
      <div className='container flex items-center justify-center'>
        <div className='flex w-[35.35871rem] p-[1.46413rem] justify-center items-center rounded-[0.87848rem] bg-white'>
          <div className='flex flex-col items-center justify-center flex-1'>
            <div className='flex flex-col items-center justify-center'>
              <div className='w-[2.34261rem] h-[2.34261rem]'>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  width='33'
                  height='32'
                  viewBox='0 0 33 32'
                  fill='none'
                >
                  <g clip-path='url(#clip0_3069_230403)'>
                    <path
                      d='M16.5 32C25.3366 32 32.5 24.8366 32.5 16C32.5 7.16344 25.3366 0 16.5 0C7.66344 0 0.5 7.16344 0.5 16C0.5 24.8366 7.66344 32 16.5 32Z'
                      fill='#36BA61'
                    />
                    <path
                      d='M16.9034 19.5843C17.61 20.2909 17.61 21.5023 16.9034 22.2089L15.4397 23.6726C14.733 24.3792 13.5217 24.3792 12.8151 23.6726L6.40497 17.212C5.69834 16.5054 5.69834 15.2941 6.40497 14.5874L7.86869 13.1237C8.57532 12.4171 9.78667 12.4171 10.4933 13.1237L16.9034 19.5843Z'
                      fill='white'
                    />
                    <path
                      d='M22.5071 8.42841C23.2137 7.72178 24.4251 7.72178 25.1317 8.42841L26.5954 9.89213C27.3021 10.5988 27.3021 11.8101 26.5954 12.5167L15.4913 23.5704C14.7847 24.277 13.5734 24.277 12.8667 23.5704L11.403 22.1066C10.6964 21.4 10.6964 20.1887 11.403 19.482L22.5071 8.42841Z'
                      fill='white'
                    />
                  </g>
                  <defs>
                    <clipPath id='clip0_3069_230403'>
                      <rect
                        width='32'
                        height='32'
                        fill='white'
                        transform='translate(0.5)'
                      />
                    </clipPath>
                  </defs>
                </svg>
              </div>
              <p className='mt-[0.58565rem]'>Đặt lại mật khẩu thành công</p>
            </div>
            <div className='my-[1.46413rem]'>
              <p className='opacity-50 body2 font-normal text-center text-[#0D1F33]'>
                Chúc mừng bạn đã đặt lại mật khẩu thành công. Cùng Astro khám
                phá những sản phẩm công nghệ mới nhé!
              </p>
            </div>
            <div className='flex flex-col items-center'>
              <button className='w-[12.95754rem] h-[3.22108rem] flex items-center justify-center py-[0.73206rem] pr-[1.1713rem] pl-[1.46413rem] rounded-[0.58565rem] bg-gradient-to-l from-[#1359A1] to-[#102841]'>
                <p className='font-semibold text-center text-white button'>
                  KHÁM PHÁ NGAY
                </p>
                <div className='w-[1.1713rem] h-[1.1713rem]'>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    width='17'
                    height='16'
                    viewBox='0 0 17 16'
                    fill='none'
                  >
                    <path
                      d='M3.83398 8H13.1673M13.1673 8L9.16732 4M13.1673 8L9.16732 12'
                      stroke='white'
                      strokeWidth='2'
                      strokeLinecap='round'
                      strokeLinejoin='round'
                    />
                  </svg>
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* 2 */}
      <div className='container flex flex-col justify-center items-center mt-[2rem]'>
        <div className='flex flex-col items-start w-[22.47438rem] mb-[1.17rem]'>
          <div className='mb-[0.87848rem] flex w-full items-center py-[0.58565rem] pr-[1.1713rem] pl-[1.1713rem] rounded-[0.87848rem] bg-[#17395C]'>
            <div className='flex items-center w-[20.57101rem]'>
              <p className='py-[0.65886rem] px-[0.43924rem] sub2 font-semibold text-white'>
                KẾT NỐI VỚI CHÚNG TÔI
              </p>
            </div>
          </div>
          <div className='mb-[0.87848rem] w-full flex py-[0.58565rem] pr-[1.1713rem] pl-[1.1713rem] rounded-[0.87848rem] bg-[rgba(232,235,239,0.60)]'>
            <div className='flex items-center justify-between w-full'>
              <div className='flex items-center'>
                <div className='w-[2.63543rem] h-[2.63543rem] flex justify-center items-center mr-[0.43924rem] relative shadow-[0px_4px_4px_0px_rgba(0,0,0,0.10)]'>
                  <div className='w-full h-full rounded-[0.51245rem] bg-[#4B6FBE] absolute inset-0'></div>
                  <div className='w-[1.75695rem] h-[1.75695rem] z-10'>
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      width='24'
                      height='24'
                      viewBox='0 0 24 24'
                      fill='none'
                    >
                      <path
                        d='M17 9.00004H13.6508V7.00005C13.6508 5.96805 13.7306 5.31805 15.1359 5.31805H16.9107V2.13806C16.047 2.04406 15.1786 1.99806 14.3093 2.00006C11.7316 2.00006 9.85036 3.65706 9.85036 6.69905V9.00004H7V13L9.85036 12.999V22H13.6508V12.997L16.5639 12.996L17 9.00004Z'
                        fill='white'
                      />
                    </svg>
                  </div>
                </div>
                <div className='flex items-center py-[0.65886rem] px-[0.43924rem]'>
                  <p className='sub2 font-medium text-[#4B6FBE]'>
                    1,000,000 Fan
                  </p>
                </div>
              </div>
              <div className='flex items-center justify-end py-[0.07321rem]'>
                <div className='w-[0.07321rem] mr-[1.1713rem] h-[1.75695rem] opacity-50 bg-[#B7C2CC]'></div>
                <p className='sub2 text-[#4B6FBE] font-medium'>Like</p>
              </div>
            </div>
          </div>
          <div className='mb-[0.87848rem] w-full flex py-[0.58565rem] pr-[1.1713rem] pl-[1.1713rem] rounded-[0.87848rem] bg-[rgba(232,235,239,0.60)]'>
            <div className='flex items-center justify-between w-full'>
              <div className='flex items-center'>
                <div className='w-[2.63543rem] h-[2.63543rem] flex justify-center items-center mr-[0.43924rem] relative shadow-[0px_4px_4px_0px_rgba(0,0,0,0.10)]'>
                  <div className='w-full h-full rounded-[0.51245rem] absolute inset-0 bg-gradient-to-t to-[#2C5BB7] from-[#1B2852]'></div>
                  <div className='flex items-center justify-center w-[1.46413rem] h-[1.46413rem] px-[0.14641rem] pt-[0.29283rem] pb-[0.21962rem] z-10'>
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      width='20'
                      height='17'
                      viewBox='0 0 20 17'
                      fill='none'
                    >
                      <g clip-path='url(#clip0_78_55206)'>
                        <path
                          fillRule='evenodd'
                          clipRule='evenodd'
                          d='M10.0032 17C9.8616 17 9.72104 16.9629 9.59817 16.8899C8.54028 16.2491 0.702921 11.1063 0.407211 10.9494C0.182305 10.8393 0.0282025 10.6137 0.00217166 10.3554V3.13975C-0.00407573 2.87057 0.123996 2.61664 0.33849 2.46952L0.395758 2.43573C1.15273 1.94314 3.69022 0.322585 4.09213 0.0893647C4.18376 0.0326944 4.28893 0.00108981 4.39617 0C4.49613 0.00108981 4.59505 0.0272453 4.68355 0.0762869C4.68355 0.0762869 8.2352 2.49894 8.77872 2.71582C9.15981 2.8989 9.57527 2.99045 9.99488 2.98282C10.4697 2.99372 10.9403 2.87275 11.3568 2.63517C11.8878 2.34201 15.2812 0.0893647 15.3177 0.0893647C15.403 0.034874 15.502 0.00762869 15.6019 0.00871851C15.7092 0.00871851 15.8143 0.0403231 15.906 0.0980832C16.3683 0.365088 19.5138 2.38124 19.6482 2.47061C19.8699 2.6101 20.0032 2.86185 20.0011 3.13212V10.3456C19.9761 10.605 19.822 10.8306 19.5961 10.9395C19.3004 11.1096 11.487 16.2524 10.4093 16.8801C10.2864 16.9564 10.1469 16.9978 10.0043 16.9989L10.0032 17Z'
                          fill='url(#paint0_linear_78_55206)'
                        />
                      </g>
                      <defs>
                        <linearGradient
                          id='paint0_linear_78_55206'
                          x1='0.0521508'
                          y1='8.55722'
                          x2='19.868'
                          y2='8.41098'
                          gradientUnits='userSpaceOnUse'
                        >
                          <stop stopColor='#F8B500' />
                          <stop
                            offset='0.33'
                            stopColor='#EF7C00'
                          />
                          <stop
                            offset='0.56'
                            stopColor='#E7336F'
                          />
                          <stop
                            offset='0.78'
                            stopColor='#D14492'
                          />
                          <stop
                            offset='0.93'
                            stopColor='#B64F98'
                          />
                          <stop
                            offset='1'
                            stopColor='#AD529B'
                          />
                        </linearGradient>
                        <clipPath id='clip0_78_55206'>
                          <rect
                            width='20'
                            height='17'
                            fill='white'
                          />
                        </clipPath>
                      </defs>
                    </svg>
                  </div>
                </div>
                <div className='flex items-center py-[0.65886rem] px-[0.43924rem]'>
                  <p className='sub2 font-medium text-[#4B6FBE]'>
                    1,000,000 Lượt bán
                  </p>
                </div>
              </div>
              <div className='flex items-center justify-end py-[0.07321rem]'>
                <div className='w-[0.07321rem] mr-[1.1713rem] h-[1.75695rem] opacity-50 bg-[#B7C2CC]'></div>
                <p className='sub2 text-[#4B6FBE] font-medium'>Follow</p>
              </div>
            </div>
          </div>
          <div className='mb-[0.87848rem] w-full flex py-[0.58565rem] pr-[1.1713rem] pl-[1.1713rem] rounded-[0.87848rem] bg-[rgba(232,235,239,0.60)]'>
            <div className='flex items-center justify-between w-full'>
              <div className='flex items-center'>
                <div className='w-[2.63543rem] h-[2.63543rem] flex justify-center items-center mr-[0.43924rem] relative shadow-[0px_4px_4px_0px_rgba(0,0,0,0.10)]'>
                  <div className='w-full h-full rounded-[0.51245rem] bg-gradient-to-t to-[#EEF8FF] from-[rgba(255,245,237,0.90)] absolute inset-0'></div>
                  <div className='w-[1.75695rem] h-[1.75695rem] flex justify-center items-center z-10'>
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      width='17'
                      height='20'
                      viewBox='0 0 17 20'
                      fill='none'
                    >
                      <g clip-path='url(#clip0_78_58504)'>
                        <path
                          fillRule='evenodd'
                          clipRule='evenodd'
                          d='M1.94618 17.6633C-2.11523 14.0774 0.511526 6.09365 6.75539 7.09812V7.83756C1.48216 7.58804 -0.83906 13.988 1.94618 17.6633ZM13.3353 3.81352C13.9768 4.33514 14.8616 4.71992 16.0813 4.79336V5.51775C14.7316 5.26412 13.8762 4.5817 13.3353 3.81352ZM11.6422 0C11.6413 0.267311 11.6753 0.554466 11.7184 0.81676H9.22926V13.4267C9.22926 14.0081 9.17053 14.5256 9.05352 14.9797C8.03985 17.253 5.16988 16.956 4.37679 15.396C5.55746 16.1482 7.49894 15.9484 8.29584 14.1629C8.41196 13.7097 8.47069 13.1911 8.47069 12.6099V0H11.6424H11.6422Z'
                          fill='#00F7EF'
                        />
                        <path
                          fillRule='evenodd'
                          clipRule='evenodd'
                          d='M12.4016 0.816406V0.8326C12.4025 1.12454 12.4866 5.34633 16.8409 5.60976C16.8409 9.53733 16.843 5.60976 16.843 8.87178C16.5159 8.89163 13.9768 8.70483 12.3969 7.27088L12.392 13.6211C12.431 16.4965 10.8578 19.3165 7.9125 19.8847C7.08735 20.0437 6.34425 20.0617 5.097 19.7843C-2.08835 17.5975 0.299224 6.75428 7.51394 7.91475C7.51394 11.4153 7.51596 7.91384 7.51596 11.4153C4.53547 10.9692 3.53839 13.492 4.33059 15.2982C5.0515 16.9427 8.01898 17.2994 9.05417 14.9793C9.17141 14.5252 9.22991 14.0075 9.22991 13.4263V0.816406H12.4016Z'
                          fill='black'
                        />
                        <path
                          fillRule='evenodd'
                          clipRule='evenodd'
                          d='M6.75452 7.83721C7.00043 7.84816 7.25351 7.87279 7.51242 7.91453C7.51242 11.4151 7.51444 7.91361 7.51444 11.4151C4.53396 10.969 3.53688 13.4918 4.32907 15.298C4.34364 15.3308 4.35933 15.3637 4.37592 15.3954C4.02152 15.1698 3.73638 14.8598 3.5705 14.4812C2.77943 12.6748 3.77539 10.1522 6.75587 10.5981C6.75587 7.38971 6.75497 10.0596 6.75497 7.83698L6.75452 7.83721ZM16.0806 5.51739C16.3178 5.56187 16.5709 5.59357 16.8394 5.60976C16.8394 9.53733 16.8415 5.60976 16.8415 8.87178C16.5144 8.89163 13.9753 8.70483 12.3954 7.27088L12.3905 13.6211C12.4295 16.4965 10.8563 19.3165 7.91099 19.8847C7.08584 20.0437 6.34273 20.0617 5.09549 19.7843C3.69132 19.3571 2.65434 18.5981 1.94531 17.663C2.57701 18.2213 3.36987 18.6734 4.33781 18.9685C5.58372 19.2447 6.32704 19.2269 7.15219 19.0677C10.0975 18.4993 11.6707 15.6796 11.6326 12.805L11.6366 6.45389C13.2165 7.88784 15.7556 8.07555 16.0838 8.05457C16.0838 5.02519 16.0809 8.19575 16.0809 5.51716L16.0806 5.51739ZM12.4001 0.816406V0.8326C12.4001 1.00435 12.4304 2.52861 13.3346 3.81317C12.2447 2.92593 11.8563 1.64434 11.7175 0.816406H12.4001Z'
                          fill='#FF004F'
                        />
                      </g>
                      <defs>
                        <clipPath id='clip0_78_58504'>
                          <rect
                            width='16.8421'
                            height='20'
                            fill='white'
                          />
                        </clipPath>
                      </defs>
                    </svg>
                  </div>
                </div>
                <div className='flex items-center py-[0.65886rem] px-[0.43924rem]'>
                  <p className='sub2 font-medium text-[#4B6FBE]'>
                    1,000,000 Follower
                  </p>
                </div>
              </div>
              <div className='flex items-center justify-end py-[0.07321rem]'>
                <div className='w-[0.07321rem] mr-[1.1713rem] h-[1.75695rem] opacity-50 bg-[#B7C2CC]'></div>
                <p className='sub2 text-[#4B6FBE] font-medium'>Follow</p>
              </div>
            </div>
          </div>
        </div>
        {/* san pham moi nhat */}
        <div className='flex items-start flex-col p-[1.75695rem] rounded-[0.87848rem] bg-white'>
          <p className='sub1 font-medium text-[#102841] mb-[1.76rem]'>
            SẢN PHẨM MỚI NHẤT
          </p>
          <ul className='flex flex-col items-center'>
            <li className='mb-[1.17rem] w-[18.96047rem] flex items-center'>
              <div className='mr-[0.73206rem] w-[4.61201rem] h-[4.61201rem] justify-center items-center pr-[0.01603rem] bg-white'>
                <Image
                  className='rounded-[0.29283rem] object-cover'
                  alt='anh'
                  width={63}
                  height={63}
                  src={'/contact/ang-test.png'}
                />
              </div>
              <div className='flex flex-col items-start flex-1'>
                <p className='flex-1 overflow-hidden font-normal body2 text-ellipsis text-greyscale-60'>
                  Bút cảm ứng AstroMazing Pencil GD cho iPad
                </p>
                <p className='body2 font-normal text-ellipsis overflow-hidden text-[#F12B2C] flex-1'>
                  499.999
                </p>
              </div>
            </li>
            <li className='mb-[1.17rem] w-[18.96047rem] flex items-center'>
              <div className='mr-[0.73206rem] w-[4.61201rem] h-[4.61201rem] justify-center items-center pr-[0.01603rem] bg-white'>
                <Image
                  className='rounded-[0.29283rem] object-cover'
                  alt='anh'
                  width={63}
                  height={63}
                  src={'/contact/ang-test.png'}
                />
              </div>
              <div className='flex flex-col items-start flex-1'>
                <p className='flex-1 overflow-hidden font-normal body2 text-ellipsis text-greyscale-60'>
                  Bút cảm ứng AstroMazing Pencil GD cho iPad
                </p>
                <p className='body2 font-normal text-ellipsis overflow-hidden text-[#F12B2C] flex-1'>
                  499.999
                </p>
              </div>
            </li>
            <li className='mb-[1.17rem] w-[18.96047rem] flex items-center'>
              <div className='mr-[0.73206rem] w-[4.61201rem] h-[4.61201rem] justify-center items-center pr-[0.01603rem] bg-white'>
                <Image
                  className='rounded-[0.29283rem] object-cover'
                  alt='anh'
                  width={63}
                  height={63}
                  src={'/contact/ang-test.png'}
                />
              </div>
              <div className='flex flex-col items-start flex-1'>
                <p className='flex-1 overflow-hidden font-normal body2 text-ellipsis text-greyscale-60'>
                  Bút cảm ứng AstroMazing Pencil GD cho iPad
                </p>
                <p className='body2 font-normal text-ellipsis overflow-hidden text-[#F12B2C] flex-1'>
                  499.999
                </p>
              </div>
            </li>
            <li className='mb-[1.17rem] w-[18.96047rem] flex items-center'>
              <div className='mr-[0.73206rem] w-[4.61201rem] h-[4.61201rem] justify-center items-center pr-[0.01603rem] bg-white'>
                <Image
                  className='rounded-[0.29283rem] object-cover'
                  alt='anh'
                  width={63}
                  height={63}
                  src={'/contact/ang-test.png'}
                />
              </div>
              <div className='flex flex-col items-start flex-1'>
                <p className='flex-1 overflow-hidden font-normal body2 text-ellipsis text-greyscale-60'>
                  Bút cảm ứng AstroMazing Pencil GD cho iPad
                </p>
                <p className='body2 font-normal text-ellipsis overflow-hidden text-[#F12B2C] flex-1'>
                  499.999
                </p>
              </div>
            </li>
            <li className='mb-[1.17rem] w-[18.96047rem] flex items-center'>
              <div className='mr-[0.73206rem] w-[4.61201rem] h-[4.61201rem] justify-center items-center pr-[0.01603rem] bg-white'>
                <Image
                  className='rounded-[0.29283rem] object-cover'
                  alt='anh'
                  width={63}
                  height={63}
                  src={'/contact/ang-test.png'}
                />
              </div>
              <div className='flex flex-col items-start flex-1'>
                <p className='flex-1 overflow-hidden font-normal body2 text-ellipsis text-greyscale-60'>
                  Bút cảm ứng AstroMazing Pencil GD cho iPad
                </p>
                <p className='body2 font-normal text-ellipsis overflow-hidden text-[#F12B2C] flex-1'>
                  499.999
                </p>
              </div>
            </li>
            <button className='flex h-[2.63543rem] justify-center py-[0.80527rem] px-[1.46413rem] rounded-[7.32064rem] bg-[#F2F2F2]'>
              <div className='flex items-center justify-center'>
                <p className='font-semibold caption text-greyscale-80'>
                  XEM THÊM
                </p>
              </div>
            </button>
          </ul>
        </div>
      </div>
    </div>
  )
}
