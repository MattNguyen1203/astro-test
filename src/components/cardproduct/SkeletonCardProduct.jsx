import {Skeleton} from '../ui/skeleton'

export default function SkeletonCardProduct() {
  return (
    <div className='w-full h-[28.2rem] xmd:h-[22.1rem] rounded-[0.87848rem] border border-solid border-[#E5E7EB] group shadow-[2px_4px_20px_0px_rgba(0,0,0,0.02)] hover:shadow-[2px_4px_20px_0px_rgba(12,46,112,0.04),-6px_2px_32px_0px_rgba(12,46,112,0.08)]'>
      <Skeleton className='w-full h-[16.82284rem] rounded-tl-[0.87848rem] rounded-tr-[0.87848rem] overflow-hidden relative xmd:h-[10.9375rem]' />
      <div className='p-[0.73206rem] xmd:p-[0.44rem] flex flex-col justify-between h-[calc(28.2rem-16.82284rem)] xmd:h-[calc(22.1rem-10.9375rem)]'>
        <Skeleton className='w-full h-[2.1rem] xmd:h-[2.05rem]' />
        <Skeleton className='w-full h-[2.92826rem] rounded-[0.58565rem] mt-auto' />
      </div>
    </div>
  )
}
