'use client'

import Image from 'next/image'
import ProductInfo from './ProductInfo'

function PopupProduct(props) {
  const {
    setIsOpen,
    data = [],
    type,
    setSelectedPrd,
    handleChangeVariation,
    isLoading,
    isAddToCart,
  } = props

  return (
    <>
      {isLoading ? (
        <svg
          className='animate-spin h-[2rem] w-[2rem] text-black absolute top-1/2 left-1/2 -translate-1/2'
          xmlns='http://www.w3.org/2000/svg'
          fill='none'
          viewBox='0 0 24 24'
        >
          <circle
            className='opacity-25'
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
        <ProductInfo
          data={data}
          type={type}
          setSelectedPrd={setSelectedPrd}
          handleChangeVariation={handleChangeVariation}
          setIsOpen={setIsOpen}
          isAddToCart={isAddToCart}
        />
      )}

      <Image
        src={'/components/closeIcon.svg'}
        alt='close icon'
        width={12}
        height={12}
        className='size-[2.92826rem] xmd:size-[2rem] object-contain fixed right-[-4rem] top-1/2 cursor-pointer xmd:top-[-3rem] xmd:right-[1rem]'
        onClick={() => setIsOpen(false)}
      />
    </>
  )
}
export default PopupProduct
