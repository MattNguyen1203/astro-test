'use client'
import {Sheet, SheetContent, SheetTrigger} from '@/components/ui/sheet'

import Image from 'next/image'
import Link from 'next/link'

export default function SheetMegaMenu({children}) {
  return (
    <Sheet>
      <SheetTrigger>{children}</SheetTrigger>
      <SheetContent className='p-0'>
        <div className=''>
          <h2 className='text-[1.1713rem] font-semibold leading-[1.2] tracking-[0.01171rem]'>
            Sắp xếp theo
          </h2>
        </div>
      </SheetContent>
    </Sheet>
  )
}
