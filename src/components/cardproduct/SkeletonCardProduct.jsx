import {Skeleton} from '../ui/skeleton'

export default function SkeletonCardProduct() {
  return (
    <div className='w-full h-[28.2rem] xmd:h-[22.1rem] rounded-[0.87848rem] border border-solid border-[#E5E7EB] group shadow-[2px_4px_20px_0px_rgba(0,0,0,0.02)] hover:shadow-[2px_4px_20px_0px_rgba(12,46,112,0.04),-6px_2px_32px_0px_rgba(12,46,112,0.08)]'>
      <Skeleton className='size-full' />
    </div>
  )
}
