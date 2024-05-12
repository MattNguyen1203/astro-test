import PopupProduct from '@/components/popupproduct'
import {Dialog, DialogContent, DialogTrigger} from '@/components/ui/dialog'
import {cn, fetcher} from '@/lib/utils'
import {useEffect, useState} from 'react'
import useSWR from 'swr'

export function DialogProduct({
  children,
  isOpen,
  setIsOpen,
  type,
  productSelected,
  setProductSelected,
  className,
  isAddToCart,
  handleChangeVariation,
  session,
  isIPhone,
}) {
  const [initData, setInitData] = useState(productSelected || {})

  const {
    data: listVariations,
    error,
    isLoading,
  } = useSWR(
    productSelected && productSelected?.type === 'variable'
      ? process.env.NEXT_PUBLIC_API +
          `/okhub/v1/product/${productSelected?.slug}/attributes/detail`
      : null,
    fetcher,
    {
      revalidateIfStale: false,
      revalidateOnFocus: false,
      revalidateOnReconnect: false,
    },
  )

  useEffect(() => {
    if (listVariations) {
      setInitData((prev) => ({
        ...prev,
        listVariations: listVariations ? listVariations : {},
      }))
    }
  }, [listVariations])

  useEffect(() => {
    if (isAddToCart) {
      setProductSelected(initData)
    }
  }, [initData])

  return (
    <Dialog
      open={isOpen}
      onOpenChange={setIsOpen}
      className='z-[1000]'
    >
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent
        className={cn(
          'sm:max-w-[425px] p-0 rounded-[0.8rem] w-fit h-fit max-w-screen xmd:rounded-b-none xmd:bottom-0 xmd:top-auto xmd:translate-y-0 z-[100000]',
          className,
        )}
      >
        <div
          className={`${
            isIPhone ? 'xmd:h-[60vh]' : 'xmd:h-[80vh]'
          } relative bg-elevation-20 rounded-[0.87848rem] w-[55.49048rem] h-fit xmd:w-screen xmd:overflow-y-scroll`}
        >
          <div className='relative min-h-[25rem]'>
            <PopupProduct
              type={type}
              setIsOpen={setIsOpen}
              data={initData}
              setSelectedPrd={setInitData}
              isLoading={isLoading}
              isAddToCart={isAddToCart}
              handleChangeVariation={handleChangeVariation}
              session={session}
            />
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}
