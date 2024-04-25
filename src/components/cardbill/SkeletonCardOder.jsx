import React from 'react'
import { Skeleton } from '../ui/skeleton'
const SkeletonCardOder = () => {
  return (
    <div className='w-full h-[15.3rem] xmd:h-[22.1rem] rounded-[0.87848rem] border border-solid border-[#E5E7EB] group shadow-[2px_4px_20px_0px_rgba(0,0,0,0.02)] hover:shadow-[2px_4px_20px_0px_rgba(12,46,112,0.04),-6px_2px_32px_0px_rgba(12,46,112,0.08)] flex flex-col justify-center items-center mb-2' >
        <Skeleton className="w-[90%] mb-3 h-[3rem]"/>
        <Skeleton className="w-[90%] mb-3  h-[5rem]"/> 
        <Skeleton className="w-[90%] mb-3  h-[3rem]"/>
    </div>
  )
}

export default SkeletonCardOder