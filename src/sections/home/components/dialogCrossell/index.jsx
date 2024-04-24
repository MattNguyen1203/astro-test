import PopupProduct from '@/components/popupproduct'
import {Dialog, DialogContent, DialogTrigger} from '@/components/ui/dialog'
import {cn} from '@/lib/utils'
import {useEffect, useMemo, useState} from 'react'
import Image from 'next/image'

export default function DialogProductCombo({
  children,
  isOpen,
  setIsOpen,
  data,
  activeId,
  setActiveId,
  setListCrossell,
  type,
  session,
}) {
  const listImg = useMemo(() => {
    return data?.map((item) => ({
      key: item?.id,
      src: item?.featuredImage.url || '/no-image.jpg',
    }))
  }, [data])
  const [dataActive, setDataActive] = useState(data?.[0] || {})

  useEffect(() => {
    if (activeId !== '') {
      const activeData = data?.find((item) => item.id === activeId)
      setDataActive(activeData)
    }
  }, [activeId])

  const handleActive = (key) => {
    setActiveId(key)
  }

  const handleChangeVariation = () => {
    setListCrossell((prev) => {
      const newList = prev.map((item) =>
        item?.id === dataActive?.id ? dataActive : item,
      )
      return newList
    })

    setIsOpen(false)
  }

  return (
    <Dialog
      open={isOpen}
      onOpenChange={setIsOpen}
    >
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className='sm:max-w-[425px] p-0 rounded-[0.8rem] w-fit h-fit max-w-screen xmd:rounded-b-none xmd:bottom-0 xmd:top-auto xmd:translate-y-0'>
        <div className='relative bg-elevation-20 rounded-[0.87848rem] w-[55.49048rem] h-[37.84773rem] xmd:w-screen xmd:h-[35rem] xmd:overflow-y-scroll'>
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

          <PopupProduct
            setIsOpen={setIsOpen}
            data={dataActive}
            setSelectedPrd={setDataActive}
            handleChangeVariation={handleChangeVariation}
            type={type}
            isLoading={false}
            session={session}
          />
        </div>
      </DialogContent>
    </Dialog>
  )
}
