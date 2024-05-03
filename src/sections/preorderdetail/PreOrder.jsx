'use client'
import SlideMultiple from '@/components/slidemultiple'
import SocialProduct from '../product/aside/SocialProduct'
import BreadCrumb from '@/components/breadcrumb'
import Variation from '@/components/popupproduct/Variation'
import ChangeQuantity from '@/components/popupproduct/ChangeQuantity'
import WishListIcon from '../productDetail/Wishlist'
import ProductPrice from '@/components/popupproduct/Price'
import SubInfo from '../productDetail/SubInfo/SubInfo'
import TechnicalInfo from '../productDetail/SubInfo/TechnicalInfo'
import TabInfo from '../productDetail/SubInfo/TabInfo'
import Progress from '@/components/progress'
import CountDown from '@/components/countdown'
import FormPreOrder from './components/FormPreOrder'
import RelatedProduct from './components/RelatedProduct'
import Gift from './components/Gift'
import {useMemo, useState} from 'react'
import {cn} from '@/lib/utils'
import {useRouter} from 'next/navigation'

const PreOrder = ({
  isMobile,
  data,
  voucher,
  variations,
  relatedProduct,
  mainData,
  FiveProduct,
}) => {
  const router = useRouter()

  // if (data?.meta_detect?.pre_order?._is_pre_order !== 'yes') {
  //   router.push('/404')
  // }
  console.log(data)
  const [selectedPrd, setSelectedPrd] = useState({
    ...data,
    variations: variations,
    quantity: 1,
    variation:
      (variations?.variations &&
        Object.values(variations?.variations)?.find((item) => item.default)) ||
      {},
  })

  //get list image
  const listGallery = useMemo(() => {
    const gallery = data?.galleryImgs?.map((item) => item)

    const listImgVariations =
      variations?.variations &&
      Object.values(variations?.variations)?.map((item) => item.image.url)

    if (listImgVariations) return gallery?.concat(listImgVariations)
    return gallery
  }, [data])

  //check user select variation or not
  const isHaveSelectedVar = useMemo(() => {
    if (data?.type === 'variable') {
      return (
        selectedPrd?.variation &&
        selectedPrd.attributes &&
        selectedPrd.attributes.length > 0
      )
    }
  }, [selectedPrd, data])

  const relatedProductList = useMemo(() => {
    if (!relatedProduct?.item && FiveProduct?.item) return FiveProduct?.item

    if (relatedProduct?.item && relatedProduct?.item?.length > 4) {
      return relatedProduct?.item
    }

    if (
      relatedProduct?.item &&
      relatedProduct?.item?.length <= 4 &&
      FiveProduct?.item
    ) {
      return FiveProduct?.item
    }

    return []
  }, [relatedProduct, FiveProduct])

  console.log('selectedPrd', selectedPrd)
  console.log('mainData', mainData)

  return (
    <>
      <div className='w-[73.7rem] mx-auto mt-[8.1rem] bg-elevation-10 relative xmd:w-full'>
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
                activeImage={selectedPrd?.variation?.image?.url}
              />
              <div className='xmd:hidden sub2 font-medium tracking-[0.01025rem] mt-[1.32rem] mb-[0.59rem] text-greyscale-30'>
                Ghé thăm gian hàng tại:
              </div>
              <div className='xmd:hidden'>
                <SocialProduct />
              </div>
            </div>
          </div>

          <div className='col w-[52.2694rem] xmd:w-full xmd:pr-0 pr-[0.92rem] mb-[6.6rem] xmd:mb-[1.17rem]'>
            <div className='subContainer xmd:rounded-0 md:relative'>
              <h2 className='md:w-[38rem] capitalize sub2 xmd:text-[1.31772rem] text-greyscale-50 font-medium w-full h-[2.489402rem] md:line-clamp-2 mb-[0.88rem] xmd:w-full xmd:h-fit'>
                {data?.name}
              </h2>
              <ProductPrice
                regularPrice={
                  selectedPrd?.variation?.display_regular_price ||
                  data?.regular_price
                }
                price={
                  selectedPrd?.variation?.display_price || data?.price || 0
                }
              />

              {data?.type === 'variable' && variations && (
                <Variation
                  data={variations}
                  setSelectedPrd={setSelectedPrd}
                  selectedPrd={selectedPrd}
                />
              )}
              <div className='absolute top-[1.17rem] right-[1.17rem] z-10'>
                <WishListIcon />
              </div>
              <div className='border-t xmd:border-none border-[rgba(236,236,236,0.70)] pt-[1.46rem] xmd:py-0 flex items-center my-[1.46rem] xmd:mb-0 xmd:flex-col xmd:justify-start xmd:items-start'>
                <div
                  className={cn(
                    data?.type === 'variable' &&
                      (!selectedPrd?.variation ||
                        !selectedPrd?.variation.max_qty)
                      ? 'pointer-events-none opacity-40 cursor-not-allowed'
                      : '',
                  )}
                >
                  <ChangeQuantity
                    stockQty={
                      selectedPrd?.variation?.max_qty ||
                      selectedPrd.stock_quantity
                    }
                    setChangeQty={setSelectedPrd}
                  />
                </div>
                <div className='flex xmd:flex-row-reverse h-[2.9282rem] xmd:h-[3.22108rem] xmd:w-full xmd:mb-[0.88rem]'>
                  <button
                    className={cn(
                      'caption1 font-semibold text-white flex items-center justify-center w-[10.688rem] xmd:w-full h-full rounded-[0.58565rem] bg-[#102841] px-[1.17rem] py-[0.73rem] uppercase ml-[0.88rem] xmd:ml-0',
                      !isHaveSelectedVar && 'opacity-50 pointer-events-none',
                      !selectedPrd?.variation?.attributes && 'opacity-50',
                    )}
                    disabled={!selectedPrd?.variation?.attributes}
                    onClick={() => handleAddToSession(selectedPrd, router)}
                  >
                    Đặt trước
                  </button>
                </div>
              </div>
              <div className='flex xmd:flex-col xmd:items-start items-center border-b xmd:border-none border-[rgba(236,236,236,0.70)] pb-[1.46rem] xmd:py-0 mb-[1.46rem]'>
                <div className='w-[18.08rem]'>
                  <Progress
                    ordered={
                      selectedPrd?.meta_detect?.pre_order
                        ?._pre_order_total_buyed
                    }
                    totalProd={
                      selectedPrd?.meta_detect?.pre_order?._pre_order_total_sale
                    }
                  />
                </div>

                {selectedPrd?.meta_detect?.pre_order?._pre_order_date && (
                  <div className='ml-[0.59rem]'>
                    <span className='caption1 font-medium text-greyscale-80 mr-[0.25rem]'>
                      Còn
                    </span>
                    <span className='caption1 font-bold text-[#FFB84F]'>
                      <CountDown
                        endTime={
                          selectedPrd?.meta_detect?.pre_order?._pre_order_date
                        }
                      />
                      {console.log(
                        selectedPrd?.meta_detect?.pre_order?._pre_order_date,
                      )}
                    </span>
                  </div>
                )}
              </div>
              <SubInfo />
            </div>

            {(mainData?.[0]?.acf?.gift ||
              mainData?.[0]?.acf?.gift?.is_show_gift) && (
              <div className='w-full mb-[1.46rem] mt-[0.5rem]'>
                <Gift data={mainData?.[0]?.acf?.gift} />
              </div>
            )}

            {/* thông tin kĩ thuật */}
            <div className='subContainer mt-[0.88rem] mb-[1.46rem]'>
              <TechnicalInfo techInfo={mainData?.[0]?.acf?.tech_info} />
            </div>

            {/* thông tin khác */}
            <TabInfo
              data={mainData?.[0]?.acf}
              isMobile={isMobile}
            />

            <FormPreOrder
              data={variations}
              setSelectedPrd={setSelectedPrd}
              selectedPrd={selectedPrd}
            />
          </div>
        </div>

        {/* sản phẩm tương tự */}
      </div>

      {relatedProductList && (
        <div className='container pb-[4.39rem]'>
          <RelatedProduct relatedProduct={relatedProductList || []} />
        </div>
      )}
    </>
  )
}

export default PreOrder
