'use client'

import * as React from 'react'
import * as RadioGroupPrimitive from '@radix-ui/react-radio-group'
import {Circle} from 'lucide-react'

import {cn} from '@/lib/utils'

const RadioGroup = React.forwardRef(({className, ...props}, ref) => {
  return (
    <RadioGroupPrimitive.Root
      className={cn('grid gap-2', className)}
      {...props}
      ref={ref}
    />
  )
})
RadioGroup.displayName = RadioGroupPrimitive.Root.displayName

const RadioGroupItem = React.forwardRef(({className, ...props}, ref) => {
  return (
    <RadioGroupPrimitive.Item
      ref={ref}
      className={cn(
        'aspect-square h-4 w-4 rounded-full border border-primary text-primary ring-offset-background focus:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 relative',
        className,
      )}
      {...props}
    >
      <RadioGroupPrimitive.Indicator className='relative flex items-center justify-center size-full'>
        <svg
          xmlns='http://www.w3.org/2000/svg'
          width='20'
          height='20'
          viewBox='0 0 20 20'
          fill='none'
          className='size-[1.46413rem] min-w-[1.46413rem] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 '
        >
          <circle
            cx='10'
            cy='10'
            r='8.75'
            stroke='#102841'
            strokeWidth='2.5'
          />
          <circle
            cx='10'
            cy='10'
            r='5'
            fill='#102841'
          />
        </svg>
      </RadioGroupPrimitive.Indicator>
    </RadioGroupPrimitive.Item>
  )
})
RadioGroupItem.displayName = RadioGroupPrimitive.Item.displayName

export {RadioGroup, RadioGroupItem}
