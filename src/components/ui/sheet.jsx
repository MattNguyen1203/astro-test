'use client'
import * as SheetPrimitive from '@radix-ui/react-dialog'
import {cva} from 'class-variance-authority'

import {cn} from '@/lib/utils'
import {forwardRef} from 'react'

const Sheet = SheetPrimitive.Root

const SheetTrigger = SheetPrimitive.Trigger

const SheetClose = SheetPrimitive.Close

const SheetPortal = SheetPrimitive.Portal

const SheetOverlay = forwardRef(({className, ...props}, ref) => (
  <SheetPrimitive.Overlay
    className={cn(
      'fixed inset-0 z-[9999] bg-black/80 xmd:bg-black/60 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0',
      className,
    )}
    {...props}
    ref={ref}
  />
))
SheetOverlay.displayName = SheetPrimitive.Overlay.displayName

const sheetVariants = cva(
  'fixed gap-4 bg-background p-6 shadow-lg transition ease-in-out data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:duration-300 data-[state=open]:duration-500 z-[9999]',
  {
    variants: {
      side: {
        top: 'inset-x-0 top-0 border-b data-[state=closed]:slide-out-to-top data-[state=open]:slide-in-from-top',
        bottom:
          'inset-x-0 bottom-0 border-t data-[state=closed]:slide-out-to-bottom data-[state=open]:slide-in-from-bottom',
        left: 'inset-y-0 left-0 h-full w-3/4 border-r data-[state=closed]:slide-out-to-left data-[state=open]:slide-in-from-left sm:max-w-sm',
        right:
          'inset-y-0 right-0 h-full w-[43.41142rem] xmd:w-full border-l data-[state=closed]:slide-out-to-right data-[state=open]:slide-in-from-right sm:max-w-sm',
      },
    },
    defaultVariants: {
      side: 'right',
    },
  },
)

const SheetContent = forwardRef(
  (
    {side = 'right', button = '', className, children, overlay, ...props},
    ref,
  ) => (
    <SheetPortal>
      <SheetOverlay className={overlay} />
      <SheetPrimitive.Content
        ref={ref}
        className={cn(sheetVariants({side}), className)}
        {...props}
      >
        {children}
        <SheetPrimitive.Close
          className={`${button} absolute right-[2.93rem] xmd:right-[0.88rem] top-[0.73rem] rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 disabled:pointer-events-none data-[state=open]:bg-secondary`}
        >
          <svg
            xmlns='http://www.w3.org/2000/svg'
            width='32'
            height='32'
            viewBox='0 0 32 32'
            fill='none'
            className='size-[2.34261rem]'
          >
            <rect
              width='32'
              height='32'
              rx='16'
              fill='#F0F0F0'
            />
            <path
              d='M21.3327 21.3336L15.9994 16.0003M15.9994 16.0003L10.666 10.667M15.9994 16.0003L21.3327 10.667M15.9994 16.0003L10.666 21.3337'
              stroke='#262626'
              strokeWidth='2.66667'
              strokeLinecap='round'
              strokeLinejoin='round'
            />
          </svg>
        </SheetPrimitive.Close>
      </SheetPrimitive.Content>
    </SheetPortal>
  ),
)
SheetContent.displayName = SheetPrimitive.Content.displayName

const SheetHeader = ({className, ...props}) => (
  <div
    className={cn(
      'flex flex-col space-y-2 text-center sm:text-left h-full',
      className,
    )}
    {...props}
  />
)
SheetHeader.displayName = 'SheetHeader'

const SheetFooter = ({className, ...props}) => (
  <div
    className={cn(
      'flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2',
      className,
    )}
    {...props}
  />
)
SheetFooter.displayName = 'SheetFooter'

const SheetTitle = forwardRef(({className, ...props}, ref) => (
  <SheetPrimitive.Title
    ref={ref}
    className={cn('text-lg font-semibold text-foreground', className)}
    {...props}
  />
))
SheetTitle.displayName = SheetPrimitive.Title.displayName

const SheetDescription = forwardRef(({className, ...props}, ref) => (
  <SheetPrimitive.Description
    ref={ref}
    className={cn('text-sm text-muted-foreground', className)}
    {...props}
  />
))
SheetDescription.displayName = SheetPrimitive.Description.displayName

export {
  Sheet,
  SheetPortal,
  SheetOverlay,
  SheetTrigger,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetFooter,
  SheetTitle,
  SheetDescription,
}
