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

export default function PopupDistrict({
  district,
  valueDistrict,
  setValueDistrict,
  setIdDistrict,
  idProvince,
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
            valueDistrict
              ? 'text-greyscale-80 hover:text-greyscale-80 capitalize'
              : 'text-greyscale-20 hover:text-greyscale-20'
          } text-[0.87848rem] tracking-[0.00878rem] leading-[1.2] font-medium justify-start flex-1 p-[0.88rem] h-fit rounded-[0.58565rem] bg-elevation-20 font-svnGraphik relative w-full`}
        >
          {valueDistrict ? valueDistrict : 'Quận/ Huyện *'}
          <svg
            xmlns='http://www.w3.org/2000/svg'
            width='15'
            height='14'
            viewBox='0 0 15 14'
            fill='none'
            className='size-[0.875rem] absolute top-1/2 right-[0.5rem] -translate-y-1/2'
          >
            <path
              d='M11.4167 5.25L7.33333 9.33333L3.25 5.25'
              stroke='#A9A9A9'
              strokeWidth='2'
              strokeLinecap='round'
              strokeLinejoin='round'
            />
          </svg>
        </Button>
      </PopoverTrigger>
      <PopoverContent
        className={`${
          idProvince ? 'h-[27.8rem] ' : 'h-fit'
        } w-full p-0 pb-[0.73rem]`}
      >
        <ScrollArea
          type='always'
          className='h-full pr-[1.17rem] pl-[0.73rem]'
        >
          <Command>
            <CommandInput
              className='font-medium text-[0.87848rem] tracking-[0.00878rem] leading-[1.2] font-svnGraphik !text-greyscale-20'
              placeholder={
                idProvince ? 'Nhập Quận/ Huyện...' : 'Tỉnh chưa được chọn'
              }
            />
            <CommandEmpty>
              {idProvince
                ? 'Không tìm thấy!'
                : 'Vui lòng chọn Tỉnh/ Thành phố!'}
            </CommandEmpty>
            <CommandGroup className='p-0'>
              {idProvince &&
                district?.map((item) => (
                  <CommandItem
                    className={`${
                      valueDistrict === item?.name?.toLowerCase()
                        ? 'bg-[linear-gradient(97deg,#102841_0%,#1359A1_100%)] !text-white hover:!text-white'
                        : 'text-greyscale-60'
                    } p-[0.73rem] rounded-[0.43924rem] font-svnGraphik text-[0.87848rem] font-medium leading-[1.2] tracking-[0.00878rem] cursor-pointer mt-[0.51rem] h-fit`}
                    key={item?.name}
                    value={item?.name}
                    onSelect={(currentValue) => {
                      setValueDistrict(
                        currentValue === valueDistrict ? '' : currentValue,
                      )
                      setIdDistrict(item?.idDistrict)
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
