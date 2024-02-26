// 'use client'

// import useToggle from '@/hooks/useToggle'
import {NavigationMenuDemo} from './components/megamenu'
import {DialogDemo} from './components/dialog'
import {SonnerDemo} from './components/toast'
import TabInit from './components/tabs'
import IndexSWR from './components/swr'
import Banner from './components/banner'
import FlashVoucher from './components/flashvoucher'
import Accessory from './components/accessory'
import CardStrength from '@/components/cardstrength'
import CardVoucher from '@/components/cardvoucher'
import {ScrollArea} from '@/components/ui/scroll-area'

export default function HomeIndex() {
  // const [on, toggle] = useToggle(true)
  return (
    <main className='relative'>
      <div className='flex items-center justify-center w-full h-screen'>
        <CardStrength />
        <CardVoucher />
      </div>
      <Banner />
      <FlashVoucher />
      <Accessory />
      <ScrollArea
        type='always'
        className='h-[200px] w-[350px] rounded-md border p-4'
        dir='ltr'
      >
        Jokester began sneaking into the castle in the middle of the night and
        leaving jokes all over the place: under the king's pillow, in his soup,
        even in the royal toilet. The king was furious, but he couldn't seem to
        stop Jokester. And then, one day, the people of the kingdom discovered
        that the jokes left by Jokester were so funny that they couldn't help
        but laugh. And once they started laughing, they couldn't stop.
      </ScrollArea>
      {/* <IndexSWR />
      <div className='w-full h-screen bg-black'></div>
      <div className='right-0 top-0 size-[4rem] bg-black absolute'></div>
      <div className='flex items-center justify-center w-full h-screen'>
        <SonnerDemo />
        <DialogDemo />
        <TabInit />
      </div>

      <div className='container flex justify-center h-screen text-2xl text-black'>
        <div>
          <NavigationMenuDemo className='mt-[3rem]' />
          <CarouselDemo />
        </div>
      </div> */}
    </main>
  )
}
