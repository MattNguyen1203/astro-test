import PopupProduct from '@/components/popupproduct'
import {Button} from '@/components/ui/button'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog'

export function DialogProduct({children, isOpen}) {
  return (
    <Dialog open={isOpen}>
      <DialogTrigger asChild>
        {/* <Button
          variant='outline'
          // className='w-full p-0 m-0 h-fit hover:bg-transparent'
        > */}
        {children}
        {/* </Button> */}
      </DialogTrigger>
      <DialogContent className='sm:max-w-[425px]'>
        <PopupProduct />
        {/* <DialogHeader>
          <DialogTitle>Edit profile</DialogTitle>
          <DialogDescription>
            Make changes to your profile here. Click save when you're done.
          </DialogDescription>
        </DialogHeader>
        <div className='grid gap-4 py-4'>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Natus, ut?
            Fuga voluptates deleniti veniam ab doloribus harum quibusdam
            voluptas perferendis at veritatis fugiat molestias nihil quos quia
            blanditiis, dolor unde!
          </p>
        </div> */}
        {/* <DialogFooter>
          <Button type='submit'>Save changes</Button>
        </DialogFooter> */}
      </DialogContent>
    </Dialog>
  )
}
