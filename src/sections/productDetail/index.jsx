'use client'
import SlideMultiple from '@/components/slidemultiple'
import SocialProduct from '../product/aside/SocialProduct'
import BreadCrumb from '@/components/breadcrumb'
import Variation from '@/components/popupproduct/Variation'
import TemVoucher from '@/components/popupproduct/TemVoucher'
import ChangeQuantity from '@/components/popupproduct/ChangeQuantity'
import ItemProduct from './itemProduct/Crosssell'
import {cn} from '@/lib/utils'
import AddToCartBtn from './addToCartBtn'
import WishListIcon from './Wishlist'
import ProductPrice from '@/components/popupproduct/Price'
import SubInfo from './SubInfo/SubInfo'
import TechnicalInfo from './SubInfo/TechnicalInfo'
import VoucherList from './VoucherList'
import TabInfo from './SubInfo/TabInfo'
import {useEffect, useMemo, useState} from 'react'
import DialogProductCrossell from '../home/components/dialogCrossell'

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

const ProductDetail = ({isMobile, data, voucher, variations}) => {
  const [isOpen, setIsOpen] = useState(false) // open popup product
  const [activeId, setActiveId] = useState('') // activeID in open popup;
  const [selectedPrd, setSelectedPrd] = useState({
    ...data,
    variations: variations,
  })

  //get list image
  const listGallery = useMemo(() => {
    const gallery = data?.galleryImgs.map((item) => item)

    const listImgVariations = Object.values(variations?.variations)?.map(
      (item) => item.image.url,
    )

    return gallery.concat(listImgVariations)
  }, [data])

  //check user select variation or not
  const isHaveSelectedVar = useMemo(() => {
    if (data.type === 'variable') {
      return (
        selectedPrd?.selectedVariations &&
        selectedPrd.attributes &&
        selectedPrd.attributes.length > 0
      )
    }
  }, [selectedPrd, data])

  const handleAddToCart = () => {}
  console.log('selectedPrd', selectedPrd)
  return (
    <div className='container mt-[8.1rem] bg-elevation-10 relative xmd:w-full'>
      <div className='py-[1.76rem] xmd:px-[0.59rem] xmd:py-[1.17rem] xmd:bg-white'>
        <BreadCrumb
          category='sản phẩm'
          name={data?.name}
          categorySlg='/san-pham'
        />
      </div>
      <div className='relative flex justify-between xmd:flex-col'>
        <div className='col'>
          <div className='sticky top-[9rem] right-0 mb-[2rem]'>
            <SlideMultiple
              listGallery={listGallery}
              activeImage={selectedPrd?.selectedVariations?.image?.url}
            />
            <div className='xmd:hidden sub2 font-medium tracking-[0.01025rem] mt-[1.32rem] mb-[0.59rem] text-greyscale-30'>
              Ghé thăm gian hàng tại:
            </div>
            <div className='xmd:hidden'>
              <SocialProduct />
            </div>
          </div>
        </div>

        <div className='col w-[43.48rem] xmd:w-full xmd:pr-0 pr-[0.92rem] mb-[6.6rem] xmd:mb-[1.17rem]'>
          <div className='subContainer xmd:rounded-0 md:relative'>
            <h2 className='md:w-[38rem] capitalize sub2 xmd:text-[1.31772rem] text-greyscale-50 font-medium w-full h-[2.489402rem] md:line-clamp-2 mb-[0.88rem] xmd:w-full xmd:h-fit'>
              {data?.name}
            </h2>
            <ProductPrice
              regularPrice={
                selectedPrd?.selectedVariations?.display_regular_price ||
                data?.regular_price
              }
              price={
                selectedPrd?.selectedVariations?.display_price ||
                data?.price ||
                0
              }
            />

            <TemVoucher
              regularPrice={
                selectedPrd?.selectedVariations?.display_regular_price ||
                data?.regular_price
              }
              price={
                selectedPrd?.selectedVariations?.display_price ||
                data?.price ||
                0
              }
            />

            {data?.type === 'variable' && (
              <Variation
                data={variations}
                setSelectedPrd={setSelectedPrd}
              />
            )}
            <div className='absolute top-[1.17rem] right-[1.17rem] z-10'>
              <WishListIcon />
            </div>
            <div className='border-y xmd:border-none border-[rgba(236,236,236,0.70)] py-[1.46rem] xmd:py-0 flex items-center my-[1.46rem] xmd:mb-0 xmd:flex-col xmd:justify-start xmd:items-start'>
              <div
                className={cn(
                  data?.type === 'variable' &&
                    (!selectedPrd?.selectedVariations ||
                      !selectedPrd?.selectedVariations.max_qty)
                    ? 'pointer-events-none opacity-40 cursor-not-allowed'
                    : '',
                )}
              >
                <ChangeQuantity
                  stockQty={
                    selectedPrd?.selectedVariations?.max_qty ||
                    selectedPrd.stock_quantity
                  }
                />
              </div>
              <div className='flex xmd:flex-row-reverse h-[2.9282rem] xmd:h-[3.22108rem]'>
                <div
                  className={cn(
                    !isHaveSelectedVar && 'opacity-50 pointer-events-none',
                  )}
                >
                  <AddToCartBtn
                    className={{
                      wrapper:
                        'xmd:w-[3.22108rem] xmd:ml-[0.59rem] xmd:p-[0.58565rem] xmd:border-0 xmd:bg-blue-50 xmd:mr-0',
                      text: 'xmd:hidden',
                      img: 'xmd:size-[2rem]',
                    }}
                  />
                </div>

                <button
                  disabled={!isHaveSelectedVar}
                  className={cn(
                    'caption1 font-semibold text-white flex items-center justify-center w-[10.688rem] xmd:w-[21.3rem] h-full rounded-[0.58565rem] bg-[#102841] px-[1.17rem] py-[0.73rem] uppercase',
                  )}
                >
                  Mua ngay
                </button>
              </div>
            </div>

            <SubInfo />
          </div>

          {/* thông tin kĩ thuật */}
          <div className='subContainer mt-[0.88rem] mb-[1.46rem]'>
            <TechnicalInfo />
          </div>

          {/* thông tin khác */}
          <TabInfo
            info={prdOther}
            isMobile={isMobile}
          />

          {/* sản phẩm mua kèm */}

          <div className='subContainer'>
            <div className='sub2 font-medium mb-[0.88rem]'>
              Sản phẩm mua kèm phù hợp:
            </div>
            {data?.crossSellProducts?.map((item, index) => (
              <div
                key={index}
                className={cn(
                  index === data?.crossSellProducts?.length - 1
                    ? ''
                    : 'mb-[0.88rem] xmd:mb-[1.17rem]',
                )}
              >
                <ItemProduct
                  data={item}
                  setIsOpen={setIsOpen}
                  setActiveId={setActiveId}
                />
              </div>
            ))}

            <DialogProductCrossell
              isOpen={isOpen}
              setIsOpen={setIsOpen}
              data={data?.crossSellProducts}
              activeId={activeId}
            ></DialogProductCrossell>

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

        <div className='w-[21.22rem] flex flex-col items-center col h-full sticky top-[9rem] xmd:hidden'>
          <VoucherList voucher={voucher} />
        </div>
      </div>
    </div>
  )
}

export default ProductDetail
