import {formatToVND, handlePercentSale, renderPriceProduct} from '@/lib/utils'
import Image from 'next/image'

export default function ItemProductPayment({item, length, index}) {
  const price = renderPriceProduct(item)
  const percentSale = handlePercentSale(item)

  const handleNameChildrenWooco = (products) => {
    let name = ''
    products?.forEach((item) => {
      name += item?.name + ' + '
    })
    return name.slice(0, name.length - 3)
  }

  const isWooco = item?.type === 'wooco'
  return (
    <>
      <div className='p-[0.59rem] h-fit w-full flex space-x-[0.88rem]'>
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
        <div className='flex flex-col w-[35.79rem] relative'>
          <h2 className='font-medium text-greyscale-40 caption'>
            {item?.name}
          </h2>
          {item?.type === 'variable' && (
            <ul className='flex '>
              {item?.meta?.map((e, index) => (
                <li
                  key={index}
                  className='rounded-[0.43924rem] bg-elevation-20 size-fit py-[0.44rem] px-[0.59rem] caption1 leading-[1.2] text-greyscale-40'
                >
                  {e?.key?.includes('pa_') && e?.value}
                </li>
              ))}
            </ul>
          )}
          {item?.type === 'wooco' && (
            <p className='absolute bottom-0 left-0 font-medium line-clamp-2 text-greyscale-40 caption'>
              {handleNameChildrenWooco(item?.grouped_products)}
            </p>
          )}
        </div>
        <div className='flex flex-col items-end justify-between flex-1'>
          <span className='font-medium caption1 text-greyscale-40'>
            x{item?.quantity > 9 ? item?.quantity : '0' + item?.quantity}
          </span>
          <div className='flex flex-col'>
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
          </div>
        </div>
      </div>
      {index !== length - 1 && (
        <hr className='my-[0.59rem] bg-[#1E417C14] h-[0.07321rem]' />
      )}
    </>
  )
}
