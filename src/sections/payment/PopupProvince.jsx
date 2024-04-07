'use client'
import {Button} from '@/components/ui/button'
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
} from '@/components/ui/command'
import {Popover, PopoverContent, PopoverTrigger} from '@/components/ui/popover'
import {ScrollArea} from '@/components/ui/scroll-area'
import {useState} from 'react'

export default function PopupProvince({
  province,
  valueProvince,
  setValueProvince,
  setIdProvince,
}) {
  const [open, setOpen] = useState(false)
  return (
    <Popover
      open={open}
      onOpenChange={setOpen}
    >
      <PopoverTrigger asChild>
        <Button
          variant='outline'
          role='combobox'
          aria-expanded={open}
          className={`${
            valueProvince
              ? 'text-greyscale-80 hover:text-greyscale-80 capitalize'
              : 'text-greyscale-20 hover:text-greyscale-20'
          } text-[0.87848rem] tracking-[0.00878rem] leading-[1.2] font-medium justify-start flex-1 p-[0.88rem] h-fit rounded-[0.58565rem] bg-elevation-20 font-svnGraphik`}
        >
          {valueProvince ? valueProvince : 'Tỉnh/ Thành phố *'}
        </Button>
      </PopoverTrigger>
      <PopoverContent className='w-full h-[27.8rem] p-0 pb-[0.73rem]'>
        <ScrollArea
          type='always'
          className='h-full pr-[1.17rem] pl-[0.73rem]'
        >
          <Command>
            <CommandInput
              className='font-medium text-[0.87848rem] tracking-[0.00878rem] leading-[1.2] font-svnGraphik !text-greyscale-20'
              placeholder='Nhập Tỉnh/ Thành phố...'
            />
            <CommandEmpty>Không tìm thấy!</CommandEmpty>
            <CommandGroup className='p-0'>
              {province?.map((item) => (
                <CommandItem
                  className={`${
                    valueProvince === item?.name?.toLowerCase()
                      ? 'bg-[linear-gradient(97deg,#102841_0%,#1359A1_100%)] !text-white hover:!text-white'
                      : 'text-greyscale-60'
                  } p-[0.73rem] rounded-[0.43924rem] font-svnGraphik text-[0.87848rem] font-medium leading-[1.2] tracking-[0.00878rem] cursor-pointer mt-[0.51rem] h-fit`}
                  key={item?.name}
                  value={item?.name}
                  onSelect={(currentValue) => {
                    setValueProvince(
                      currentValue === valueProvince ? '' : currentValue,
                    )
                    setIdProvince(item?.idProvince)
                    setOpen(false)
                  }}
                >
                  {item?.name}
                </CommandItem>
              ))}
            </CommandGroup>
          </Command>
        </ScrollArea>
      </PopoverContent>
    </Popover>
  )
}