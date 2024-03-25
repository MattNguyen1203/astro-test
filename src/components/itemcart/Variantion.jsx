import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'

export default function Variantion({className = ''}) {
  return (
    <div className={`${className} size-fit`}>
      <Select>
        <SelectTrigger className='w-fit bg-elevation-20 rounded-[0.43924rem]'>
          <SelectValue placeholder='Gen 10th' />
        </SelectTrigger>
        <SelectContent className='z-[999999]'>
          <SelectGroup>
            <SelectLabel>Hãng máy</SelectLabel>
            <SelectItem value='apple'>Apple</SelectItem>
            <SelectItem value='banana'>Banana</SelectItem>
            <SelectItem value='blueberry'>Blueberry</SelectItem>
            <SelectItem value='grapes'>Grapes</SelectItem>
            <SelectItem value='pineapple'>Pineapple</SelectItem>
          </SelectGroup>
        </SelectContent>
      </Select>
    </div>
  )
}
