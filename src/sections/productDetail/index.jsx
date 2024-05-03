'use client'
import SlideMultiple from '@/components/slidemultiple'
import SocialProduct from '../product/aside/SocialProduct'
import BreadCrumb from '@/components/breadcrumb'
import Variation from '@/components/popupproduct/Variation'
import TemVoucher from '@/components/popupproduct/TemVoucher'
import ChangeQuantity from '@/components/popupproduct/ChangeQuantity'
import ItemProduct from './itemProduct/Crosssell'
import {cn, fetcher, formatToVND} from '@/lib/utils'
import AddToCartBtn from './addToCartBtn'
import WishListIcon from './Wishlist'
import ProductPrice from '@/components/popupproduct/Price'
import SubInfo from './SubInfo/SubInfo'
import TechnicalInfo from './SubInfo/TechnicalInfo'
import VoucherList from './VoucherList'
import TabInfo from './SubInfo/TabInfo'
import {useEffect, useMemo, useRef, useState} from 'react'
import DialogProductCombo from '../home/components/dialogCrossell'

import CountDown from '@/components/countdown'
import Progress from '@/components/progress'
import RelatedProduct from '../preorderdetail/components/RelatedProduct'

import Loading from '@/components/loading'
import {useRouter} from 'next/navigation'
import {handleAddToSession} from './function'

const ProductDetail = ({
  isMobile,
  data,
  voucher,
  variations,
  bestCoupon,
  relatedProduct,
  session,
  wishList,
  mainData,
  FiveProduct,
}) => {
  console.log('🚀 ~ wishList:', wishList)
  const [isOpen, setIsOpen] = useState(false) // open popup product
  const [activeId, setActiveId] = useState('') // activeID in open popup;
  const [isLoading, setIsLoading] = useState(true)

  const firstLoadRef = useRef(true)
  const router = useRouter()
  const [selectedPrd, setSelectedPrd] = useState({
    ...data,
    variations: variations,
    quantity: 1,
    variation:
      Object.values(variations?.variations || {})?.find(
        (item) => item?.default,
      ) || {},
  })

  // create init list crossell product
  const [listCrossell, setListCrossell] = useState(
    data?.crossSellProducts?.map((item) => ({...item, quantity: 1})) || [],
  )

  const [listCrossellIndex, setCrossellIndex] = useState([])
  //get list image
  const [listGallery, isFlashSale] = useMemo(() => {
    const gallery = data?.galleryImgs

    const isFlashSale = data?.meta_detect?.flash_sale?.is_flash_sale === '1'
    if (selectedPrd.type === 'variable') {
      const listImgVariations = variations?.variations
        ? [
            ...new Set(
              Object.values(variations?.variations)?.map(
                (item) => item?.image?.url,
              ),
            ),
          ]
        : []

      if (listImgVariations)
        return [gallery.concat(listImgVariations), isFlashSale]
    } else {
      return [gallery, isFlashSale]
    }
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

  //handle Crossell Total Price
  const totalCrossell = useMemo(() => {
    const totalPrice = listCrossell?.reduce((value, currentValue) => {
      const quantity = Number(currentValue.quantity) || 1
      if (currentValue?.variation?.display_price) {
        return Number(currentValue?.variation?.display_price) * quantity + value
      } else {
        return Number(currentValue?.price) * quantity + value
      }
    }, 0)

    return totalPrice
  }, [listCrossell])

  // set default
  useEffect(() => {
    if (selectedPrd.type === 'simple') return
    const listVariations =
      variations?.variations && Object?.values(variations?.variations)
    listVariations?.forEach((item) => {
      if (item?.default) {
        setSelectedPrd((prev) => ({...prev, variation: item}))
      }
    })
  }, [variations])

  // get data of crossell product
  useEffect(() => {
    if (firstLoadRef.current) {
      const fetchVariations = async () => {
        setIsLoading(true)
        await Promise.all(
          listCrossell.map(async (item, index) => {
            if (item && item.slug && item.type === 'variable') {
              const url = `${process.env.NEXT_PUBLIC_API}/okhub/v1/product/${item.slug}/attributes/detail`
              const data = await fetcher(url)

              if (data) {
                const defaultValue =
                  data?.variations &&
                  Object?.values(data?.variations || {}).find(
                    (variation) => variation?.default,
                  )
                return {
                  ...item,
                  listVariations: data,
                  variation: defaultValue,
                }
              }
            }
            return item
          }),
        ).then((updatedItems) => {
          setListCrossell(updatedItems)
          firstLoadRef.current = false
          setIsLoading(false)
        })
      }

      fetchVariations()
    }
  }, [])

  const listCrossellAddToCart = useMemo(() => {
    return listCrossellIndex.map((item) => listCrossell[item])
  }, [listCrossellIndex, listCrossell])

  const [price, regular_price] = useMemo(() => {
    const price = selectedPrd?.variation?.display_price || selectedPrd?.price
    const regular_price =
      selectedPrd?.variation?.display_regular_price ||
      selectedPrd?.regular_price ||
      0
    if (isFlashSale) {
      const isPercentage =
        selectedPrd?.meta_detect?.flash_sale?.flash_sale_type == 'Percentage'

      const flashSaleAmount =
        selectedPrd?.meta_detect?.flash_sale?.flash_sale_price

      if (isPercentage) {
        return [
          Number(price) * (1 - Number(flashSaleAmount) / 100) || 0,
          regular_price,
        ]
      } else {
        return [flashSaleAmount, regular_price]
      }
    }

    return [price, regular_price]
  }, [selectedPrd, isFlashSale])

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

  return (
    <div className='container mt-[8.1rem] md:pb-[4rem] bg-elevation-10 relative xmd:w-full'>
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
              data={mainData?.[0]?.acf}
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
              regularPrice={regular_price}
              price={price}
              bestCoupon={bestCoupon}
            />

            <TemVoucher
              regularPrice={regular_price}
              price={price}
              bestCoupon={bestCoupon}
            />

            {data?.type === 'variable' && (
              <Variation
                data={variations}
                setSelectedPrd={setSelectedPrd}
                selectedPrd={selectedPrd}
              />
            )}
            {session?.accessToken && (
              <div className='absolute top-[1.17rem] right-[1.17rem] z-10'>
                <WishListIcon
                  data={data}
                  session={session}
                  wishList={wishList}
                />
              </div>
            )}
            <div className='border-y xmd:border-none border-[rgba(236,236,236,0.70)] py-[1.46rem] xmd:py-0 flex items-center my-[1.46rem] xmd:mb-0 xmd:flex-col xmd:justify-start xmd:items-start'>
              <div
                className={cn(
                  data?.type === 'variable' &&
                    (!selectedPrd?.variation || !selectedPrd?.variation.max_qty)
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
                  quantity={selectedPrd.quantity}
                />
              </div>
              <div className='flex xmd:flex-row-reverse h-[2.9282rem] xmd:h-[3.22108rem]'>
                <div
                  className={cn(
                    !isHaveSelectedVar &&
                      selectedPrd.type === 'variable' &&
                      'opacity-50 pointer-events-none',
                  )}
                >
                  <AddToCartBtn
                    className={{
                      wrapper:
                        'xmd:w-[3.22108rem] xmd:ml-[0.59rem] xmd:p-[0.58565rem] xmd:border-0 xmd:bg-blue-50 xmd:mr-0',
                      text: 'xmd:hidden',
                      img: 'xmd:size-[2rem]',
                    }}
                    listProduct={[selectedPrd]}
                    session={session}
                  />
                </div>

                <button
                  disabled={!isHaveSelectedVar}
                  className={cn(
                    'caption1 font-semibold text-white flex items-center justify-center w-[10.688rem] xmd:w-[21.3rem] h-full rounded-[0.58565rem] bg-[#102841] px-[1.17rem] py-[0.73rem] uppercase',
                  )}
                  onClick={() => handleAddToSession(selectedPrd, router)}
                >
                  Mua ngay
                </button>
              </div>
            </div>
            {isFlashSale && (
              <div className='mb-[2rem] flex xmd:flex-col w-full xmd:mt-[1rem]'>
                <div className='w-[18.08rem]'>
                  <Progress
                    ordered={
                      selectedPrd?.meta_detect?.flash_sale
                        ?.flash_sale_total_buyed
                    }
                    totalProd={
                      selectedPrd?.meta_detect?.flash_sale
                        ?.flash_sale_total_sale
                    }
                  />
                </div>
                {selectedPrd?.meta_detect?.flash_sale?.flash_sale_date && (
                  <div className='ml-[0.59rem]'>
                    <span className='caption1 font-medium text-greyscale-80 mr-[0.25rem]'>
                      Còn
                    </span>
                    <span className='caption1 font-bold text-[#FFB84F]'>
                      <CountDown
                        endTime={
                          selectedPrd?.meta_detect?.flash_sale?.flash_sale_date
                        }
                      />
                    </span>
                  </div>
                )}
              </div>
            )}
            <SubInfo />
          </div>

          {/* thông tin kĩ thuật */}
          <div className='subContainer mt-[0.88rem] mb-[1.46rem]'>
            <TechnicalInfo techInfo={mainData?.[0]?.acf?.tech_info || []} />
          </div>

          {/* thông tin khác */}
          <TabInfo
            isMobile={isMobile}
            data={mainData?.[0]?.acf}
          />

          {/* sản phẩm mua kèm */}

          {!isFlashSale && (
            <div className='subContainer'>
              <div className='sub2 font-medium mb-[0.88rem]'>
                Sản phẩm mua kèm phù hợp:
              </div>
              {isLoading ? (
                <div className='relative w-full min-h-[5rem]'>
                  <Loading />
                </div>
              ) : (
                listCrossell?.map((item, index) => (
                  <div
                    key={index}
                    className={cn(
                      index === listCrossell?.length - 1
                        ? ''
                        : 'mb-[0.88rem] xmd:mb-[1.17rem]',
                    )}
                  >
                    <ItemProduct
                      data={item}
                      setIsOpen={setIsOpen}
                      setActiveId={setActiveId}
                      listCrossellIndex={listCrossellIndex}
                      setCrossellIndex={setCrossellIndex}
                      index={index}
                    />
                  </div>
                ))
              )}

              <DialogProductCombo
                isOpen={isOpen}
                setIsOpen={setIsOpen}
                data={listCrossell}
                setListCrossell={setListCrossell}
                activeId={activeId}
                setActiveId={setActiveId}
                session={session}
              ></DialogProductCombo>

              <div className='flex items-center justify-between mt-[1.17rem]'>
                <div className='flex items-center xmd:flex-col xmd:items-start'>
                  <span className='sub1 font-bold xmd:font-semibold text-greyscale-20 xmd:text-greyscale-50 mr-[0.59rem] xmd:mr-0 xmd:mb-[0.3rem]'>
                    Tổng cộng:
                  </span>
                  <span className='h6 text-[#D48E43] font-bold xmd:font-semibold'>
                    {formatToVND(totalCrossell || 0)}
                  </span>
                </div>

                <AddToCartBtn
                  className={{
                    wrapper: 'text-greyscale-20 w-[12rem] mx-0',
                    text: 'flex ml-[0.59rem]',
                    img: 'smd:size-[1.1713rem]',
                  }}
                  listProduct={listCrossellAddToCart}
                  session={session}
                />
              </div>
            </div>
          )}
        </div>

        <div className='w-[21.22rem] flex flex-col items-center col h-full sticky top-[9rem] xmd:hidden'>
          <VoucherList voucher={voucher} />
        </div>
      </div>

      {isFlashSale && (
        <div className='xmd:hidden'>
          <RelatedProduct relatedProduct={relatedProductList} />
        </div>
      )}
    </div>
  )
}

export default ProductDetail
