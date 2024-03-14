import SlideMultiple from '@/components/slidemultiple'
import React from 'react'
import SocialProduct from '../product/aside/SocialProduct'
import BreadCrumb from '@/components/breadcrumb'
import PopupProduct from '@/components/popupproduct'
import NamePrice from '@/components/popupproduct/NamePrice'
import Variation from '@/components/popupproduct/Variation'
import TemVoucher from '@/components/popupproduct/TemVoucher'
import ChangeQuantity from '@/components/popupproduct/ChangeQuantity'
import Image from 'next/image'
import CardVoucher from '@/components/cardvoucher'

const ProductDetail = () => {
  return (
    <div className='mt-[8.1rem] bg-elevation-10 relative'>
      <div className='container py-[1.76rem]'>
        <BreadCrumb />
      </div>
      <div className='container flex justify-between'>
        <div className='col'>
          <SlideMultiple />
          <div className='sub2 font-medium tracking-[0.01025rem] mt-[1.32rem] mb-[0.59rem] text-greyscale-30'>
            Ghé thăm gian hàng tại:
          </div>

          <SocialProduct />
        </div>

        <div className='col w-[43.48rem] pr-[0.92rem]'>
          <div className='bg-white p-[1.17rem] rounded-[0.87848rem]'>
            <NamePrice />
            <TemVoucher />
            <Variation />

            <div className='border-y border-[rgba(236,236,236,0.70)] py-[1.46rem] flex items-center my-[1.46rem]'>
              <ChangeQuantity />
              <button className='flex items-center justify-center w-[11rem] h-[2.9282rem] rounded-[0.58565rem] border-2 border-solid border-[#102841] px-[1.17rem] py-[0.73rem] mx-[0.88rem]'>
                <Image
                  src='/components/btnCartIcon.svg'
                  alt='button cart icon'
                  width={15}
                  height={15}
                  className='w-[1.1713rem] h-[1.1713rem] object-contain mr-[0.59rem]'
                />
                <span className='caption1 font-semibold text-greyscale-80 uppercase'>
                  Thêm vào giỏ
                </span>
              </button>
              <button className='caption1 font-semibold text-white flex items-center justify-center w-[10.688rem] h-[2.9282rem] rounded-[0.58565rem] bg-[#102841] px-[1.17rem] py-[0.73rem] uppercase'>
                Mua ngay
              </button>
            </div>

            <div className='flex justify-between'>
              <div className='flex items-center'>
                <Image
                  src={'/components/productIcon1.svg'}
                  alt='7 Ngày miễn phí trả hàng'
                  width={20}
                  height={20}
                  className='w-[1.46413rem] h-[1.46413rem] object-contain mr-[0.59rem]'
                />
                <span className='caption2 font-semibold tracking-0 text-greyscale-80'>
                  7 Ngày miễn phí trả hàng
                </span>
              </div>

              <div className='flex items-center'>
                <Image
                  src={'/components/productIcon2.svg'}
                  alt='Hàng chính hãng 100%'
                  width={20}
                  height={20}
                  className='w-[1.46413rem] h-[1.46413rem] object-contain mr-[0.59rem]'
                />
                <span className='caption2 font-semibold tracking-0 text-greyscale-80'>
                  Hàng chính hãng 100%
                </span>
              </div>

              <div className='flex items-center'>
                <Image
                  src={'/components/productIcon3.svg'}
                  alt='Miễn phí vận chuyển'
                  width={20}
                  height={20}
                  className='w-[1.46413rem] h-[1.46413rem] object-contain mr-[0.59rem]'
                />
                <span className='caption2 font-semibold tracking-0 text-greyscale-80'>
                  Miễn phí vận chuyển
                </span>
              </div>

              <div className='flex items-center'>
                <Image
                  src={'/components/productIcon4.svg'}
                  alt='Hỗ trợ 24/7'
                  width={20}
                  height={20}
                  className='w-[1.46413rem] h-[1.46413rem] object-contain mr-[0.59rem]'
                />
                <span className='caption2 font-semibold tracking-0 text-greyscale-80'>
                  Hỗ trợ 24/7
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className='col flex flex-col items-center'>
          <div className='grid grid-cols-1 gap-y-[0.59rem]'>
            {new Array(4).fill(0).map((e, index) => (
              <CardVoucher key={index} />
            ))}
          </div>
          <button className='w-fit py-[0.81rem] px-[1.17rem] rounded-[7.32rem] caption1 text-greyscale-80 font-semibold mt-[1.17rem] bg-[#E9E9E9] mx-auto'>
            +12 voucher
          </button>
        </div>
      </div>
      {/* <PopupProduct /> */}
    </div>
  )
}

export default ProductDetail
