'use client'

import * as AccordionPrimitive from '@radix-ui/react-accordion'

import {cn} from '@/lib/utils'
import Image from 'next/image'
import {forwardRef} from 'react'

const Accordion = AccordionPrimitive.Root

const AccordionItem = forwardRef(({className, ...props}, ref) => (
  <AccordionPrimitive.Item
    ref={ref}
    className={cn('border-b', className)}
    {...props}
  />
))
AccordionItem.displayName = 'AccordionItem'

const AccordionTrigger = forwardRef(({className, children, ...props}, ref) => (
  <AccordionPrimitive.Header className='flex'>
    <AccordionPrimitive.Trigger
      ref={ref}
      className={cn(
        'flex flex-1 items-center justify-between py-4 font-medium transition-all hover:underline [&[data-state=open]>.acc-open]:hidden [&[data-state=open]>.acc-close]:block',
        className,
      )}
      {...props}
    >
      {children}
      <Image
        src='/components/plus.svg'
        width={10}
        height={10}
        alt=''
        className='acc-open size-[2.92826rem] transition-transform duration-200'
      />

      <Image
        src='/components/minus.svg'
        width={10}
        height={10}
        alt=''
        className='acc-close size-[2.92826rem] transition-transform duration-200 hidden'
      />
      {/* <ChevronDown className='w-4 h-4 transition-transform duration-200 shrink-0' /> */}
    </AccordionPrimitive.Trigger>
  </AccordionPrimitive.Header>
))
AccordionTrigger.displayName = AccordionPrimitive.Trigger.displayName

const AccordionContent = forwardRef(({className, children, ...props}, ref) => (
  <AccordionPrimitive.Content
    ref={ref}
    className='overflow-hidden text-sm transition-all data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down'
    {...props}
  >
    <div className={cn('pb-4 pt-0', className)}>{children}</div>
  </AccordionPrimitive.Content>
))

AccordionContent.displayName = AccordionPrimitive.Content.displayName

export {Accordion, AccordionItem, AccordionTrigger, AccordionContent}
