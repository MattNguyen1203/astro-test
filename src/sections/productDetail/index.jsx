'use client'
import SlideMultiple from '@/components/slidemultiple'
import SocialProduct from '../product/aside/SocialProduct'
import BreadCrumb from '@/components/breadcrumb'
import NamePrice from '@/components/popupproduct/NamePrice'
import Variation from '@/components/popupproduct/Variation'
import TemVoucher from '@/components/popupproduct/TemVoucher'
import Image from 'next/image'
import CardVoucher from '@/components/cardvoucher'
import ChangeQuantity from '@/components/popupproduct/ChangeQuantity'
import {Tabs, TabsContent, TabsList, TabsTrigger} from '@/components/ui/tabs'
import {useEffect, useRef, useState} from 'react'
import ShowMore from '@/components/showmore'
import ItemProduct from './itemProduct'
import {cn} from '@/lib/utils'
import AddToCartBtn from './addToCartBtn'
import AccordionInfo from './Accordion'
import WishListIcon from './Wishlist'

const detailPrd = [
  {
    label: 'Thương hiệu',
    val: 'ASTROMAZING',
  },
  {
    label: 'Kiểu kết nối',
    val: 'Không dây',
  },
  {
    label: 'Gửi từ',
    val: 'TP. Hồ Chí Minh',
  },
]

const prdOther = [
  {
    key: 'highlight',
    label: 'Đặc điểm nổi bật',
    content: `<img src="${'/product/draft.jpg'}" alt=""/><div>Với xu hướng công nghệ phát triển như hiện nay, chuột và bàn phím là những phụ kiện không thể thiếu đối với những tín đồ công nghệ. Hiểu được vấn đề này, nhà Astro đem đến cho bạn một chiếc bàn phím sử dụng bluetooth 3.0 tích hợp chế độ tiết kiệm pin và chuột không dây siêu êm với vẻ ngoài nhỏ nhắn, gọn gàng. Cùng tham khảo ngay mẫu sản phẩm combo chuột và bàn phím AstroMazing bluetooth size mini cho các thiết bị điện tử sau đây nhé!</div>`,
  },

  {
    key: 'detail',
    label: 'Thông tin chi tiết',
    content:
      '<div>Với xu hướng công nghệ phát triển như hiện nay, chuột và bàn phím là những phụ kiện không thể thiếu đối với những tín đồ công nghệ. Hiểu được vấn đề này, nhà Astro đem đến cho bạn một chiếc bàn phím sử dụng bluetooth 3.0 tích hợp chế độ tiết kiệm pin và chuột không dây siêu êm với vẻ ngoài nhỏ nhắn, gọn gàng. Cùng tham khảo ngay mẫu sản phẩm combo chuột và bàn phím AstroMazing bluetooth size mini cho các thiết bị điện tử sau đây nhé!</div>',
  },

  {
    key: 'warranty',
    label: 'Cách sử dụng & bảo hành',
    content:
      '<div>Với xu hướng công nghệ phát triển như hiện nay, chuột và bàn phím là những phụ kiện không thể thiếu đối với những tín đồ công nghệ. Hiểu được vấn đề này, nhà Astro đem đến cho bạn một chiếc bàn phím sử dụng bluetooth 3.0 tích hợp chế độ tiết kiệm pin và chuột không dây siêu êm với vẻ ngoài nhỏ nhắn, gọn gàng. Cùng tham khảo ngay mẫu sản phẩm combo chuột và bàn phím AstroMazing bluetooth size mini cho các thiết bị điện tử sau đây nhé!</div>',
  },
]

const ProductDetail = ({isMobile}) => {
  const fakeData = new Array(3).fill(0)

  return (
    <div className='container mt-[8.1rem] bg-elevation-10 relative xmd:w-full'>
      <div className='py-[1.76rem] xmd:px-[0.59rem] xmd:py-[1.17rem] xmd:bg-white'>
        <BreadCrumb />
      </div>
      <div className='relative flex justify-between xmd:flex-col'>
        <div className='col'>
          <SlideMultiple />
          <div className='xmd:hidden sub2 font-medium tracking-[0.01025rem] mt-[1.32rem] mb-[0.59rem] text-greyscale-30'>
            Ghé thăm gian hàng tại:
          </div>
          <div className='xmd:hidden'>
            <SocialProduct />
          </div>
        </div>

        <div className='col w-[43.48rem] xmd:w-full xmd:pr-0 pr-[0.92rem] mb-[6.6rem] xmd:mb-[1.17rem]'>
          <div className='subContainer xmd:rounded-0 md:relative'>
            <NamePrice />
            <TemVoucher />
            <Variation />
            <div className='absolute top-[1.17rem] right-[1.17rem] z-10'>
              <WishListIcon />
            </div>
            <div className='border-y xmd:border-none border-[rgba(236,236,236,0.70)] py-[1.46rem] xmd:py-0 flex items-center my-[1.46rem] xmd:mb-0 xmd:flex-col xmd:justify-start xmd:items-start'>
              <ChangeQuantity />
              <div className='flex xmd:flex-row-reverse h-[2.9282rem] xmd:h-[3.22108rem]'>
                <AddToCartBtn
                  className={{
                    wrapper:
                      'xmd:w-[3.22108rem] xmd:ml-[0.59rem] xmd:p-[0.58565rem] xmd:border-0 xmd:bg-blue-50 xmd:mr-0',
                    text: 'xmd:hidden',
                    img: 'xmd:size-[2rem]',
                  }}
                />
                <button className='caption1 font-semibold text-white flex items-center justify-center w-[10.688rem] xmd:w-[21.3rem] h-full rounded-[0.58565rem] bg-[#102841] px-[1.17rem] py-[0.73rem] uppercase'>
                  Mua ngay
                </button>
              </div>
            </div>

            <div className='flex justify-between xmd:hidden'>
              <div className='flex items-center'>
                <Image
                  src={'/components/productIcon1.svg'}
                  alt='7 Ngày miễn phí trả hàng'
                  width={20}
                  height={20}
                  className='w-[1.46413rem] h-[1.46413rem] object-contain mr-[0.59rem]'
                />
                <span className='font-semibold caption2 tracking-0 text-greyscale-80'>
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
                <span className='font-semibold caption2 tracking-0 text-greyscale-80'>
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
                <span className='font-semibold caption2 tracking-0 text-greyscale-80'>
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
                <span className='font-semibold caption2 tracking-0 text-greyscale-80'>
                  Hỗ trợ 24/7
                </span>
              </div>
            </div>
          </div>

          {/* thông tin kĩ thuật */}
          <div className='subContainer mt-[0.88rem] mb-[1.46rem]'>
            <div className='uppercase caption1 font-semibold pb-[1.17rem] border-b border-[#ECECECB2] mb-[1.17rem]'>
              Thông tin kĩ thuật
            </div>

            {detailPrd?.map((item, index) => {
              return (
                <div
                  className='flex mb-[0.29rem]'
                  key={index}
                >
                  <span className='sub2 text-greyscale-30 mr-[0.59rem] min-w-[7.54rem]'>
                    {item.label}:
                  </span>
                  <span className='sub2 text-greyscale-50'>{item.val}</span>
                </div>
              )
            })}
          </div>

          {/* thông tin khác */}

          {isMobile ? (
            <div className='px-[0.73rem] bg-white mb-[1.17rem]'>
              <AccordionInfo data={prdOther} />
            </div>
          ) : (
            <Tabs
              defaultValue={prdOther && prdOther[0].key}
              className='bg-white p-[1.17rem] rounded-[0.87848rem] mb-[0.88rem] xmd:hidden'
            >
              <TabsList className='bg-transparent pb-[1.17rem] mb-[1.17rem] border-b border-[#ECECECB2] w-full justify-start h-fit'>
                {prdOther?.map((info, index) => {
                  return (
                    <TabsTrigger
                      value={info.key}
                      key={info.key}
                      className='cation1 font-semibold px-[1.02rem] py-[0.59rem] rounded-[0.58565rem] bg-elevation-20 text-greyscale-20 mr-[0.59rem] !shadow-none data-[state=active]:bg-[linear-gradient(44deg,#FFF0D8_50.63%,#FFD797_106.58%)] data-[state=active]:text-greyscale-80 uppercase'
                    >
                      {info.label}
                    </TabsTrigger>
                  )
                })}
              </TabsList>

              {prdOther?.map((info, index) => {
                return (
                  <TabsContent
                    value={info.key}
                    key={info.key}
                    className='sub2 relative w-full pb-[3.5rem]'
                  >
                    <ShowMore
                      maxHeight={200}
                      textClass='sub2 text-greyscale-30 font-medium mr-0.29rem'
                      iconProp={{
                        className: 'w-[1.1713rem] h-[1.1713rem] object-contain',
                        url: '/product/arrow.svg',
                      }}
                    >
                      <div
                        dangerouslySetInnerHTML={{__html: info.content}}
                      ></div>
                    </ShowMore>
                  </TabsContent>
                )
              })}
            </Tabs>
          )}

          {/* sản phẩm mua kèm */}

          <div className='subContainer'>
            <div className='sub2 font-medium mb-[0.88rem]'>
              Sản phẩm mua kèm phù hợp:
            </div>
            {fakeData.map((item, index) => (
              <div
                key={index}
                className={cn(
                  index === fakeData?.length - 1
                    ? ''
                    : 'mb-[0.88rem] xmd:mb-[1.17rem]',
                )}
              >
                <ItemProduct />
              </div>
            ))}

            <div className='flex items-center justify-between mt-[1.17rem]'>
              <div className='flex items-center xmd:flex-col xmd:items-start'>
                <span className='sub1 font-bold xmd:font-semibold text-greyscale-20 xmd:text-greyscale-50 mr-[0.59rem] xmd:mr-0 xmd:mb-[0.3rem]'>
                  Tổng cộng:
                </span>
                <span className='h6 text-[#D48E43] font-bold xmd:font-semibold'>
                  195.000đ
                </span>
              </div>

              <AddToCartBtn
                className={{
                  wrapper: 'text-greyscale-20 w-[12rem] mx-0',
                  text: 'flex ml-[0.59rem]',
                  img: 'smd:size-[1.1713rem]',
                }}
              />
            </div>
          </div>
        </div>

        <div className='flex flex-col items-center col h-full sticky top-[9rem] xmd:hidden'>
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
    </div>
  )
}

export default ProductDetail
