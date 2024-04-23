'use client'

import {Skeleton} from '@/components/ui/skeleton'
import ItemTechnology from '@/sections/home/components/technologyconner/ItemTechnology'

export default function GridProductHandBook({posts = []}) {
  return (
    <>
      <div className='w-full lg:h-[36.01757rem] flex xmd:flex-col xmd:px-[0.59rem]'>
        {posts[0] && (
          <div className='w-[57.9795rem] day xmd:w-full h-full rounded-[1.1713rem] lg:overflow-hidden lg:mr-[1.83rem] flex-shrink-0'>
            <ItemTechnology
              post={posts[0]}
              priority={true}
              prominent
              widthHeightImg='w-[57.9795rem] h-[36.01757rem] xmd:w-full xmd:h-[16.32613rem]'
              boxClass='pt-[1.83rem] pb-[1.17rem] px-[1.46rem] xmd:p-0 lg:absolute lg:top-0'
            />
          </div>
        )}
        {posts[1] && (
          <div className='xmd:hidden w-full grid grid-cols-1 grid-rows-2 gap-y-[1.54rem]'>
            <ItemTechnology
              isOther={true}
              priority={true}
              className='rounded-[1.1713rem] '
              boxClass='!p-[1.17rem]'
              post={posts[1]}
            />
            {posts[2] && (
              <ItemTechnology
                isOther={true}
                priority={true}
                className='rounded-[1.1713rem] '
                boxClass='!p-[1.17rem] lg:absolute'
                post={posts[2]}
              />
            )}
          </div>
        )}
      </div>
      {posts[3] && (
        <div className='relative mt-[1.83rem] xmd:w-full h-[17.13031rem] xmd:h-[14.5rem] overflow-hidden xmd:overflow-x-auto hidden-scrollbar'>
          <div className='lg:grid lg:grid-cols-3 lg:gap-x-[0.58565rem] flex h-full xmd:absolute xmd:overflow-auto xmd:top-0 xmd:left-0 xmd:pl-[0.59rem]'>
            {posts?.slice(3, 6)?.map((post, index) => (
              <ItemTechnology
                isOther={true}
                post={post}
                priority={true}
                key={index}
                className='rounded-[1.1713rem] xmd:w-[11.3rem] h-full xmd:mr-[0.58565rem]'
                boxClass='lg:!p-[1.17rem] xmd:!p-0 xmd:h-fit'
                widthHeightImg='xmd:w-[11.49341rem] xmd:h-[6.8879rem]'
                mbCard
              />
            ))}
          </div>
        </div>
      )}
    </>
  )
}

export const GridProductHandBookSkeleton = () => {
  return (
    <>
      <div className='w-full lg:h-[36.01757rem] flex xmd:flex-col'>
        <Skeleton className='w-[57.9795rem] xmd:w-[26.28111rem] h-full rounded-[1.1713rem] lg:overflow-hidden lg:mr-[1.83rem] flex-shrink-0' />
        <div className='xmd:hidden w-full grid grid-cols-1 grid-rows-2 gap-y-[1.54rem]'>
          <Skeleton className='rounded-[1.1713rem] size-full' />
          <Skeleton className='rounded-[1.1713rem] size-full' />
        </div>
      </div>
      <div className='relative mt-[1.83rem] xmd:w-full h-[17.13031rem] xmd:h-[19rem] overflow-hidden'>
        <div className='lg:grid lg:grid-cols-3 lg:gap-x-[0.58565rem] flex h-full xmd:absolute xmd:overflow-auto xmd:top-0 xmd:left-0 '>
          {Array(3)
            .fill(0)
            .map((_, index) => (
              <Skeleton
                key={index}
                className='rounded-[1.1713rem] size-full'
              />
            ))}
        </div>
      </div>
    </>
  )
}
