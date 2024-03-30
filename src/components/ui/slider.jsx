'use client'

import * as SliderPrimitive from '@radix-ui/react-slider'

import {cn} from '@/lib/utils'
import {forwardRef} from 'react'

const Slider = forwardRef(({className, ...props}, ref) => (
  <SliderPrimitive.Root
    ref={ref}
    className={cn(
      'relative flex w-full touch-none select-none items-center',
      className,
    )}
    {...props}
  >
    <SliderPrimitive.Track className='relative w-full h-2 overflow-hidden rounded-full grow bg-secondary'>
      <SliderPrimitive.Range className='absolute h-full bg-[#007BEE]' />
    </SliderPrimitive.Track>
    <SliderPrimitive.Thumb className='block size-[1rem] transition-colors rounded-full bg-[#007BEE] cursor-grab active:cursor-grabbing' />
  </SliderPrimitive.Root>
))
Slider.displayName = SliderPrimitive.Root.displayName

export {Slider}
