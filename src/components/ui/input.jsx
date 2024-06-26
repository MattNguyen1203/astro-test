import {cn} from '@/lib/utils'
import {forwardRef} from 'react'

const Input = forwardRef(({className, type, ...props}, ref) => {
  return (
    <input
      type={type}
      className={cn(
        'flex w-full h-fit placeholder:text-[0.87848rem] placeholder:font-medium placeholder:leading-[1.2] placeholder:tracking-[0.00439rem] placeholder:text-greyscale-40 p-[0.73rem] bg-elevation-20 rounded-[0.58565rem] file:border-0 file:bg-transparent file:text-sm file:font-medium disabled:cursor-not-allowed disabled:opacity-50 !font-svnGraphik',
        className,
      )}
      ref={ref}
      {...props}
    />
  )
})
Input.displayName = 'Input'

export {Input}
