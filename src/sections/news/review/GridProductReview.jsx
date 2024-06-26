'use client'
import ItemTechnology from '@/sections/home/components/technologyconner/ItemTechnology'
import ItemNews from '../ItemNews'
import {Fragment} from 'react'
import {Skeleton} from '@/components/ui/skeleton'

export default function GridProductReview({posts = []}) {
  return (
    <div className='bg-white xmd:p-0 rounded-[0.87848rem] py-[1.46rem] pl-[1.68rem] pr-[1.02rem] flex xmd:flex-col '>
      <div className='lg:w-[46.33968rem] lg:h-full lg:mr-[2.05rem] xmd:px-[0.59rem]'>
        <ItemTechnology
          className='rounded-[0.87848rem]'
          boxClass='lg:!p-[1.46rem]'
          widthHeightImg='w-[57.9795rem] h-[36.01757rem] xmd:w-full xmd:h-[16.32613rem] xmd:px-[0.59rem]'
          post={posts[0]}
          mbCard={true}
        />
      </div>
      <div className='relative w-full h-full xmd:h-[12.08rem] overflow-hidden'>
        <div className='flex flex-1 w-full overflow-hidden lg:flex-col xmd:absolute xmd:top-0 xmd:left-0 xmd:overflow-x-auto hidden-scrollbar xmd:pl-[0.59rem]'>
          {posts?.slice(1, 4).map((post, index) => (
            <Fragment key={index}>
              <ItemNews post={post} />
              {index !== 2 && (
                <hr className='w-full my-[1.17rem] h-[0.07rem] bg-[#EBF0F7] xmd:hidden' />
              )}
            </Fragment>
          ))}
        </div>
      </div>
    </div>
  )
}

export const GridProductReviewSkeleton = () => {
  return (
    <div className='bg-white xmd:p-0 rounded-[0.87848rem] py-[1.46rem] pl-[1.68rem] pr-[1.02rem] flex xmd:flex-col '>
      <div className='lg:w-[46.33968rem] lg:h-[35.2123rem] lg:mr-[2.05rem] flex-shrink-0'>
        <Skeleton className='size-full rounded-[0.87848rem]' />
      </div>
      <div className='relative w-full h-full xmd:h-[12.08rem] overflow-hidden grid grid-cols-1 grid-rows-3 gap-y-[2.34rem] lg:h-[35.2123rem]'>
        {Array(3)
          .fill(0)
          .map((_, index) => (
            <Skeleton
              key={index}
              className='w-full h-[calc(35.2123rem/3)] rounded-[0.87848rem]'
            ></Skeleton>
          ))}
      </div>
    </div>
  )
}
