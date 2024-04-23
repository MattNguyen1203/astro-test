import {Dialog, DialogContent} from '@/components/ui/dialog'
import ContentPopup from './ContentPopup'

export function PopupResetPass({isOpen, setIsSuccess, isLogin, isChange}) {
  return (
    <Dialog
      open={isOpen}
      onOpenChange={setIsSuccess}
    >
      <DialogContent
        className='max-w-fit w-fit rounded-[0.87848rem] bg-white p-[2rem]'
        overlay='bg-black/10'
        // hiddenClose={true}
      >
        <ContentPopup
          onOpenChange={setIsSuccess}
          isLogin={isLogin}
          isChange={isChange}
        />
      </DialogContent>
    </Dialog>
  )
}
