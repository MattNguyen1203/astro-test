import PopupProduct from '@/components/popupproduct'
import {Dialog, DialogContent, DialogTrigger} from '@/components/ui/dialog'
import {useEffect, useMemo, useState} from 'react'
import DialogContainer from './DialogContainer'
import {cn} from '@/lib/utils'
import Image from 'next/image'

export function DialogProduct({
  children,
  isOpen,
  setIsOpen,
  type,
  productSelected,
  setProductSelected,
}) {
  const [activeData, setActiveData] = useState({})

  const [listImg, setListImg] = useState([])
  const [activeId, setActiveId] = useState('')

  useEffect(() => {
    let initData
    if (type === 'wooco') {
      if (activeId === '') {
        setActiveId(productSelected?.grouped_products?.[0]?.id)
        initData = productSelected?.grouped_products?.[0]
      } else {
        initData = productSelected?.grouped_products.find(
          (item) => item.id === activeId,
        )
      }
      const listImage = productSelected?.grouped_products.map((item) => ({
        key: item?.id,
        src: item?.featuredImage.url || '/no-image.jpg',
      }))
      setListImg(listImage)
    } else {
      initData = {...productSelected}
    }
    setActiveData(initData)
  }, [productSelected, activeId])

  const handleActive = (key) => {
    setActiveId(key)
  }

  // console.log('activeData', activeData)

  return (
    <Dialog
      open={isOpen}
      onOpenChange={setIsOpen}
    >
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className='sm:max-w-[425px] p-0 rounded-[0.8rem] w-fit h-fit max-w-screen xmd:rounded-b-none xmd:bottom-0 xmd:top-auto xmd:translate-y-0'>
        <div className='relative bg-elevation-20 rounded-[0.87848rem] w-[55.49048rem] h-fit xmd:w-screen xmd:h-[35rem] xmd:overflow-y-scroll'>
          {listImg && listImg?.length > 0 && (
            <div className='flex xmd:hidden w-full h-[8.05rem] py-[0.87848rem] px-[1.75695rem] bg-white rounded-[0.87848rem]'>
              {listImg?.map((item, index) => {
                return (
                  <Image
                    key={item.key}
                    src={item.src}
                    alt='ảnh sp'
                    width={200}
                    height={200}
                    className={cn(
                      'h-full w-[6.29575rem] border-[0.61px] border-[#E7E7E7] mr-[0.59rem] rounded-[0.5358rem] object-cover cursor-pointer',
                      activeId === item.key
                        ? 'border-blue-800'
                        : 'border-[#E7E7E7]',
                    )}
                    onClick={() => handleActive(item.key)}
                  />
                )
              })}
            </div>
          )}

          <DialogContainer
            setIsOpen={setIsOpen}
            data={activeData}
            setActiveData={setActiveData}
            type={type}
          />
        </div>
      </DialogContent>
    </Dialog>
  )
}
