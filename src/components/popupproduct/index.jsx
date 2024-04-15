'use client'

import Image from 'next/image'
import ProductInfo from './ProductInfo'
import useSWR from 'swr'
import {fetcher} from '@/lib/utils'

function PopupProduct(props) {
  const {
    setIsOpen,
    data = [],
    type,
    setSelectedPrd,
    handleChangeVariation,
  } = props
  const {
    data: listVariation,
    error,
    isLoading,
  } = useSWR(
    data && data.slug && data.type === 'variable'
      ? process.env.NEXT_PUBLIC_API +
          `/okhub/v1/product/${data?.slug}/attributes/detail`
      : null,
    fetcher,
    {
      revalidateIfStale: false,
      revalidateOnFocus: false,
      revalidateOnReconnect: false,
    },
  )

  return (
    <>
      {isLoading ? (
        <svg
          class='animate-spin h-[2rem] w-[2rem] text-black absolute top-1/2 left-1/2 -translate-1/2'
          xmlns='http://www.w3.org/2000/svg'
          fill='none'
          viewBox='0 0 24 24'
        >
          <circle
            class='opacity-25'
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
          variations={listVariation}
          setSelectedPrd={setSelectedPrd}
          handleChangeVariation={handleChangeVariation}
          setIsOpen={setIsOpen}
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
