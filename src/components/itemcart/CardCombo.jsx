'use client'
import {ScrollArea} from '../ui/scroll-area'
import ItemCombo from './ItemCombo'

export default function CardCombo({products = []}) {
  return (
    <div className='bg-[#F1F1F1] rounded-[0.58565rem] w-full max-h-[15.66618rem] h-fit p-[0.59rem]'>
      <ScrollArea
        type='always'
        className='w-full h-[13.61rem]'
      >
        <div className='space-y-[0.29rem] size-full'>
          {products?.map((product, index) => (
            <ItemCombo
              key={index}
              data={product}
            />
          ))}
        </div>
      </ScrollArea>
    </div>
  )
}
