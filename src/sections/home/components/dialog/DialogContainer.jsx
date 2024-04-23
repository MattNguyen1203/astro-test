import PopupProduct from '@/components/popupproduct'
import {fetcher} from '@/lib/utils'

import useSWR from 'swr'

const DialogContainer = ({setIsOpen, data, setActiveData, type}) => {
  const {
    data: listVariations,
    error,
    isLoading,
  } = useSWR(
    data && data?.type === 'variable'
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
    <div className='relative min-h-[5rem]'>
      <PopupProduct
        type={type}
        setIsOpen={setIsOpen}
        data={{...data, listVariations: listVariations}}
        setSelectedPrd={setActiveData}
        handleChangeVariation
        isLoading={isLoading}
        isAddToCart
      />
    </div>
  )
}

export default DialogContainer
