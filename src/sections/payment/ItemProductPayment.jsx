'use client'
import CardCombo from '@/components/itemcart/CardCombo'
import BtnCombo from '@/components/itemcart/BtnCombo'
import {formatToVND, handlePercentSale, renderPriceProduct} from '@/lib/utils'
import Image from 'next/image'
import {useState} from 'react'
import {usePathname, useSearchParams} from 'next/navigation'

export default function ItemProductPayment({item, length, index}) {
  const pathName = usePathname()
  const searchParams = useSearchParams()
  const isOrder = pathName?.includes('thanh-toan')
  const id = searchParams.get('id')
  const [isOpen, setIsOpen] = useState()
  // const price = renderPriceProduct(item)
  // const percentSale = handlePercentSale(item)

  const isWooco = item?.type === 'wooco'

  isWooco && console.log('🚀 ~ ItemProductPayment ~ item:', item)
  const isVariation = item?.type === 'variable'

  const handleSumPrice = (children) => {
    if (!isWooco) {
      return Number(item?.regular_price)
    }
    let sum = 0
    children?.forEach((item) => {
      sum +=
        Number(item?.quantity || item?.qty) *
        Number(item?.salePrice || item?.price || item?.regular_price)
    })
    return sum
  }

  const handlePriceResult = () => {
    if (isOrder && id && isWooco) {
      return Number(item?.subtotal)
    }
    if (isWooco) {
      return Number(item?.line_total || item?.subtotal)
    } else {
      return Number(item?.price || item?.regular_price)
    }
  }
  const arrVariations = []

  const handleVariation = () => {
    if (!isVariation || !item?.meta) return

    // Object.keys(item?.meta)?.forEach((key) => {
    //   if (!Number(item?.meta?.[key])) {
    //     arrVariations.push(item?.meta?.[key])
    //   }
    // })
  }

  handleVariation()

  const priceResult = handlePriceResult()

  const regularPriceResult = handleSumPrice(
    item?.children || item?.grouped_products,
  )

  const isEqual = priceResult === regularPriceResult

  return (
    <>
      <div className='p-[0.59rem] xmd:p-0 h-fit w-full flex space-x-[0.88rem]'>
        <Image
          className='object-cover rounded-[0.3631rem] size-[5.27086rem]'
          src={
            item?.featuredImage?.url ||
            item?.product_image ||
            '/home/item-product.jpg'
          }
          alt={item?.featuredImage?.alt || item?.name}
          width={72}
          height={72}
        />
        <div className='flex flex-col w-[35.79rem] relative justify-between'>
          <h2 className='font-medium text-greyscale-40 caption'>
            {item?.name}
          </h2>
          <div className='flex items-center mb-[0.44rem] mt-[0.29rem]'>
            <span className='sub2 font-semibold text-blue-600 mr-[0.59rem] xmd:text-[1.1713rem] xmd:leading-normal'>
              {formatToVND(priceResult)}
            </span>

            {!isEqual && regularPriceResult && (
              <span className='line-through caption1 text-greyscale-40 xmd:font-medium xmd:text-greyscale-30 xmd:leading-normal'>
                {formatToVND(regularPriceResult)}
              </span>
            )}
          </div>
          {!id && isVariation && Array.isArray(item?.meta) && (
            <ul className='flex '>
              {item?.meta?.map((e, index) => (
                <li
                  key={index}
                  className='rounded-[0.43924rem] bg-elevation-20 size-fit py-[0.44rem] px-[0.59rem] caption1 leading-[1.2] text-greyscale-40 mr-[0.5rem]'
                >
                  {e?.key?.includes('pa_') && e?.value}
                </li>
              ))}
            </ul>
          )}
          {isVariation && item?.variation && (
            <div className='relative flex w-full  mt-auto xmd:mt-[0.44rem]'>
              {item?.variation &&
                Object.values(
                  item?.variation?.attributes || item?.variation,
                )?.map((variant, index) => (
                  <div
                    key={index}
                    className='caption1 w-fit bg-elevation-20 rounded-[0.43924rem] py-[0.59rem] pl-[0.73rem] pr-[0.44rem] xmd:px-[0.59rem] xmd:py-[0.29rem] mr-[0.5rem]'
                  >
                    {variant?.label || variant}
                  </div>
                ))}
            </div>
          )}
          {arrVariations?.length > 0 && (
            <div className='relative flex w-full  mt-auto xmd:mt-[0.44rem]'>
              {arrVariations?.map((variant, index) => (
                <div
                  key={index}
                  className='caption1 w-fit bg-elevation-20 rounded-[0.43924rem] py-[0.59rem] pl-[0.73rem] pr-[0.44rem] xmd:px-[0.59rem] xmd:py-[0.29rem] mr-[0.5rem]'
                >
                  {variant}
                </div>
              ))}
            </div>
          )}
          {item?.type === 'wooco' && (
            <BtnCombo
              isOpen={isOpen}
              setIsOpen={setIsOpen}
            />
          )}
        </div>
        <div className='flex items-end justify-end flex-1'>
          <span className='font-medium caption1 text-greyscale-40'>
            x{item?.quantity > 9 ? item?.quantity : '0' + item?.quantity}
          </span>
          {/* <div className='flex flex-col'>
            <span className='font-bold text-blue-600 caption1'>
              {isWooco
                ? formatToVND(item?.total)
                : formatToVND(price?.sale) || formatToVND(price?.price)}
            </span>
            {!isWooco && !!percentSale && (
              <span className='font-normal line-through giagoc text-greyscale-40'>
                {formatToVND(price?.price)}
              </span>
            )}
          </div> */}
        </div>
      </div>
      {isOpen && (
        <CardCombo products={item?.grouped_products || item?.children} />
      )}
      {index !== length - 1 && (
        <hr className='my-[0.59rem] bg-[#1E417C14] h-[0.07321rem]' />
      )}
    </>
  )
}
