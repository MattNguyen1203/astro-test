import {Dialog, DialogContent} from '@/components/ui/dialog'
import ContentPopup from './ContentPopup'

export function PopupRegister({
  isOpen,
  setIsSuccess,
  isSignUp = false,
  isLogin = false,
  isFoget = false,
}) {
  return (
    <Dialog
      open={isOpen}
      onOpenChange={setIsSuccess}
    >
      <DialogContent
        className='max-w-fit w-fit rounded-[0.87848rem] bg-white p-[2rem]'
        overlay='bg-black/10'
        hiddenClose={true}
      >
        <ContentPopup
          isSignUp={isSignUp}
          isLogin={isLogin}
          isFoget={isFoget}
          onOpenChange={setIsSuccess}
        />
      </DialogContent>
    </Dialog>
  )
}
