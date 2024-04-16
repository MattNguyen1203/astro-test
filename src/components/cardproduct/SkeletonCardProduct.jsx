import {Skeleton} from '../ui/skeleton'

export default function SkeletonCardProduct() {
  return (
    <div className='w-full h-[28.2rem] xmd:h-[22.1rem] rounded-[0.87848rem] border border-solid border-[#E5E7EB] group shadow-[2px_4px_20px_0px_rgba(0,0,0,0.02)] hover:shadow-[2px_4px_20px_0px_rgba(12,46,112,0.04),-6px_2px_32px_0px_rgba(12,46,112,0.08)]'>
      <Skeleton className='w-full h-[16.82284rem] rounded-tl-[0.87848rem] rounded-tr-[0.87848rem] overflow-hidden relative xmd:h-[10.9375rem]' />
      <div className='p-[0.73206rem] xmd:p-[0.44rem]'>
        <Skeleton className='w-full h-[2.1rem] xmd:h-[2.05rem]' />
        <div className='mt-[0.59rem] flex flex-wrap *:rounded-[6.5vw] xmd:grid xmd:grid-cols-2 xmd:h-[3.5rem] xmd:gap-[0.29rem]'>
          {new Array(4).fill(0).map((_, index) => (
            <Skeleton
              className='size-full'
              key={index}
            />
          ))}
        </div>
        <button className='mt-[0.59rem] w-full h-[2.92826rem] rounded-[0.58565rem] bg-blue-50'></button>
      </div>
    </div>
  )
}
