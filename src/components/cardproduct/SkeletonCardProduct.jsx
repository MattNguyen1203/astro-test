import {Skeleton} from '../ui/skeleton'

export default function SkeletonCardProduct() {
  return (
    <div className='w-full h-[28.2rem] xmd:h-[23.1rem] rounded-[0.87848rem] border border-solid border-[#E5E7EB] group shadow-[2px_4px_20px_0px_rgba(0,0,0,0.02)] hover:shadow-[2px_4px_20px_0px_rgba(12,46,112,0.04),-6px_2px_32px_0px_rgba(12,46,112,0.08)]'>
      <Skeleton className='w-full h-[16.82284rem] rounded-tl-[0.87848rem] rounded-tr-[0.87848rem] overflow-hidden relative' />
      <div className='p-[0.73206rem]'>
        <Skeleton className='w-full h-[2.1rem]' />
        <div className='mt-[0.59rem] flex flex-wrap *:w-[6.07613rem] *:h-[1.61rem] *:mt-[0.29rem] *:ml-[0.29rem] *:px-[0.58565rem] *:py-[0.29283rem] *:rounded-[6.5vw] *:bg-[#F6F6F6]'>
          {new Array(4).fill(0).map((_, index) => (
            <Skeleton key={index} />
          ))}
        </div>
        <button className='mt-[0.59rem] w-full h-[2.92826rem] rounded-[0.58565rem] bg-blue-50'></button>
      </div>
    </div>
  )
}
