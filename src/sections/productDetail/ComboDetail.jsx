'use client'
import SlideMultiple from '@/components/slidemultiple'
import SocialProduct from '../product/aside/SocialProduct'
import BreadCrumb from '@/components/breadcrumb'
import TemVoucher from '@/components/popupproduct/TemVoucher'
import ChangeQuantity from '@/components/popupproduct/ChangeQuantity'
import {cn} from '@/lib/utils'
import AddToCartBtn from './addToCartBtn'
import WishListIcon from './Wishlist'
import ProductPrice from '@/components/popupproduct/Price'
import SubInfo from './SubInfo/SubInfo'
import TechnicalInfo from './SubInfo/TechnicalInfo'
import TabInfo from './SubInfo/TabInfo'
import VoucherList from './VoucherList'
import ItemProduct from './itemProduct/Crosssell'
import {useEffect, useMemo, useState} from 'react'
import DialogProductCombo from '../home/components/dialogCrossell'
import {handleAddToSession, handlePrice} from './function'
import RelatedProduct from '../preorderdetail/components/RelatedProduct'
import {useRouter} from 'next/navigation'
import VoucherSlideRes from '../home/components/flashvoucher/slidevoucherres'
import useStore from '@/app/(store)/store'

const ComboDetail = ({
  isMobile,
  data,
  voucher,
  bestCoupon,
  session,
  mainData,
  FiveProduct,
  wishList,
  linkSocials,
}) => {
  const [isOpen, setIsOpen] = useState(false) // open popup product
  const [activeId, setActiveId] = useState('') // activeID in open popup;
  const [selectedPrd, setSelectedPrd] = useState({
    ...data,
    quantity: 1,
  })

  const router = useRouter()

  const [listProduct, setListProduct] = useState(data?.grouped_products)

  const setProgress = useStore((state) => state.setProgress)

  useEffect(() => {
    return () => {
      setProgress(100)
    }
  }, [])

  //get list image
  const listGallery = useMemo(() => {
    const gallery = data?.galleryImgs || []

    const listProductGallery = []

    data?.grouped_products?.forEach((item) => {
      if (item.galleryImgs) {
        listProductGallery.push(...item.galleryImgs)
      }
    })

    if (listProductGallery) return gallery?.concat(listProductGallery)
    return gallery
  }, [data])

  //calculate Price

  const [regular_price, price] = useMemo(() => {
    const isCalPrice = selectedPrd?.type_discount === 'Percentage'

    if (isCalPrice) {
      const regular_price = listProduct?.reduce((total, item) => {
        const [regularPriceResult, priceResult] = handlePrice(item)

        return total + regularPriceResult * Number(item?.qty)
      }, 0)

      const price = listProduct?.reduce((total, item) => {
        const [regularPriceResult, priceResult] = handlePrice(item)

        return total + priceResult * Number(item?.qty)
      }, 0)

      return [
        (regular_price * (100 - Number(selectedPrd.discount))) / 100,
        (price * (100 - Number(selectedPrd.discount))) / 100,
      ]
    } else {
      return [selectedPrd?.regular_price, selectedPrd?.price]
    }
  }, [listProduct, selectedPrd])

  const isOutOfStock = useMemo(() => {
    return selectedPrd?.stock_quantity < 1
  }, [selectedPrd])

  console.log('isOutOfStock', isOutOfStock)
  console.log('selectedPrd', selectedPrd)

  return (
    <div className='container mt-[8.1rem] xmd:mt-[4.1rem] bg-elevation-10 relative xmd:w-full'>
      <div className='py-[1.76rem] xmd:px-[0.59rem] xmd:py-[1.17rem] xmd:bg-white'>
        <BreadCrumb
          category='combo'
          name={data?.name}
          categorySlg='/san-pham'
        />
      </div>
      <div className='relative flex justify-between xmd:flex-col'>
        <div className='col'>
          <div className='sticky top-[9rem] right-0 mb-[2rem]'>
            <SlideMultiple listGallery={listGallery} />
            <div className='xmd:hidden sub2 font-medium tracking-[0.01025rem] mt-[1.32rem] mb-[0.59rem] text-greyscale-30'>
              Ghé thăm gian hàng tại:
            </div>
            <div className='xmd:hidden'>
              <SocialProduct linkSocials={linkSocials} />
            </div>
            {!isMobile && (
              <div className='w-[32.9429rem] mt-[1.46rem] flex flex-col items-start col h-full sticky top-[9rem] right-0 xmd:hidden'>
                <span className='w-[14.64129rem] font-medium text-greyscale-60 sub2 mb-[0.88rem]'>
                  Voucher ưu đãi dành cho bạn
                </span>
                <VoucherList voucher={voucher} />
              </div>
            )}
          </div>
        </div>

        <div className='col flex-1 w-[43.48rem] xmd:w-full xmd:pr-0 pr-[0.92rem] mb-[1.1rem] xmd:mb-[1.17rem] '>
          <div className='w-full bg-white xmd:flex xmd:flex-col xmd:rounded-0 md:relative subContainer'>
            <h1 className='md:w-[38rem] text-[1.52489rem] capitalize sub2 xmd:text-[1.31772rem] text-greyscale-50 font-medium w-full mb-[0.88rem] xmd:w-full xmd:h-fit'>
              {data?.name}
            </h1>

            {/* sản phẩm trong combo */}
            <div className='mb-[1.46rem] xmd:mb-0 xmd:mt-[1.46rem] xmd:order-2'>
              <div className='xmd:hidden caption1 mb-[0.88rem] text-greyscale-40'>
                Sản phẩm trong combo:
              </div>
              {listProduct?.map((item, index) => (
                <div
                  key={item.id}
                  className={cn(
                    index === listProduct?.length - 1
                      ? ''
                      : 'mb-[0.88rem] xmd:mb-[1.17rem]',
                  )}
                >
                  <ItemProduct
                    data={item}
                    setIsOpen={setIsOpen}
                    setActiveId={setActiveId}
                    type='combo'
                  />
                </div>
              ))}
            </div>
            <DialogProductCombo
              isOpen={isOpen}
              setIsOpen={setIsOpen}
              data={listProduct}
              setListCrossell={setListProduct}
              activeId={activeId}
              setActiveId={setActiveId}
              type='wooco'
              session={session}
            ></DialogProductCombo>

            <ProductPrice
              regularPrice={regular_price}
              price={price || 0}
              bestCoupon={bestCoupon}
            />
            <TemVoucher
              regularPrice={regular_price}
              price={price || 0}
              bestCoupon={bestCoupon}
            />

            <div className='absolute top-[1.17rem] right-[1.17rem] z-10'>
              <WishListIcon
                session={session}
                data={data}
                wishList={wishList}
              />
            </div>
            <div className='xmd:order-2 border-b xmd:border-none border-[rgba(236,236,236,0.70)] pb-[1.46rem] xmd:py-0 flex items-center my-[1.46rem] xmd:mb-0 xmd:flex-col xmd:justify-start xmd:items-start'>
              <ChangeQuantity
                setChangeQty={setSelectedPrd}
                stockQty={data?.stock_quantity}
              />
              <div className='flex xmd:flex-row-reverse h-[2.9282rem] xmd:h-[3.22108rem]'>
                <AddToCartBtn
                  className={{
                    wrapper:
                      'xmd:w-[3.22108rem] xmd:ml-[0.59rem] xmd:p-[0.58565rem] xmd:border-0 xmd:bg-blue-50 xmd:mr-0',
                    text: 'xmd:hidden',
                    img: 'xmd:size-[2rem]',
                  }}
                  listProduct={[
                    {...selectedPrd, grouped_products: listProduct},
                  ]}
                  session={session}
                />
                <button
                  onClick={() =>
                    handleAddToSession(
                      {...selectedPrd, grouped_products: listProduct},
                      router,
                    )
                  }
                  className='caption1 font-semibold text-white flex items-center justify-center w-[10.688rem] xmd:w-[21.3rem] h-full rounded-[0.58565rem] bg-[#102841] px-[1.17rem] py-[0.73rem] uppercase'
                >
                  Mua ngay
                </button>
              </div>
            </div>

            <SubInfo />
          </div>

          {isMobile && (
            <VoucherSlideRes
              className='mt-[0.88rem]'
              data={voucher?.coupon_list}
            />
          )}

          {/* thông tin kĩ thuật */}
          <div className='subContainer mt-[0.88rem] mb-[1.46rem] xmd:my-[1.17rem]'>
            <TechnicalInfo techInfo={mainData?.[0]?.acf?.tech_info} />
          </div>

          {/* thông tin khác */}
          <TabInfo
            data={mainData?.[0]?.acf}
            isMobile={isMobile}
          />
        </div>
      </div>

      {FiveProduct?.item && (
        <div className='pb-[3rem] mt-[2rem]'>
          <RelatedProduct relatedProduct={FiveProduct?.item} />
        </div>
      )}
    </div>
  )
}

export default ComboDetail
