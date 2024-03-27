import PopupProduct from '@/components/popupproduct'
import {Dialog, DialogContent, DialogTrigger} from '@/components/ui/dialog'

export function DialogProduct({children, isOpen, setIsOpen}) {
  return (
    <Dialog
      open={isOpen}
      onOpenChange={setIsOpen}
    >
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className='sm:max-w-[425px] p-0 rounded-[0.8rem]'>
        <PopupProduct setIsOpen={setIsOpen} />
      </DialogContent>
    </Dialog>
  )
}
