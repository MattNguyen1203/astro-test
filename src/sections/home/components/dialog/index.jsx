import PopupProduct from '@/components/popupproduct'
import {Dialog, DialogContent, DialogTrigger} from '@/components/ui/dialog'
import {useEffect, useMemo, useState} from 'react'

export function DialogProduct({children, isOpen, setIsOpen, type, data}) {
  // const handleChangeVariation = () => {
  //   setListCrossell((prev) => {
  //     const newList = prev.map((item) =>
  //       item?.id === dataActive?.id ? dataActive : item,
  //     )
  //     return newList
  //   })

  //   setIsOpen(false)
  // }

  const [selectedPrd, setSelectedPrd] = useState({})
  return (
    <Dialog
      open={isOpen}
      onOpenChange={setIsOpen}
    >
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className='sm:max-w-[425px] p-0 rounded-[0.8rem] w-fit h-fit max-w-screen xmd:rounded-b-none xmd:bottom-0 xmd:top-auto xmd:translate-y-0'>
        <PopupProduct
          type={type}
          setIsOpen={setIsOpen}
          data={data}
          setSelectedPrd={setSelectedPrd}
        />
      </DialogContent>
    </Dialog>
  )
}
