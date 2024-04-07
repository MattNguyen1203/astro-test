'use client'

import ItemTechnology from '@/sections/home/components/technologyconner/ItemTechnology'

export default function GridProductHandBook({posts = []}) {
  return (
    <>
      <div className='w-full lg:h-[36.01757rem] flex xmd:flex-col'>
        {posts[0] && (
          <div className='w-[57.9795rem] xmd:w-[26.28111rem] h-full rounded-[1.1713rem] lg:overflow-hidden lg:mr-[1.83rem] flex-shrink-0'>
            <ItemTechnology
              post={posts[0]}
              priority={true}
              widthHeightImg='w-[57.9795rem] h-[36.01757rem] xmd:w-[26.28111rem] xmd:h-[16.32613rem]'
              boxClass='pt-[1.83rem] pb-[1.17rem] px-[1.46rem] xmd:p-0 lg:absolute lg:top-0'
            />
          </div>
        )}
        {posts[1] && (
          <div className='xmd:hidden w-full grid grid-cols-1 grid-rows-2 gap-y-[1.54rem]'>
            <ItemTechnology
              priority={true}
              className='rounded-[1.1713rem] '
              boxClass='!p-[1.17rem]'
              post={posts[1]}
            />
            {posts[2] && (
              <ItemTechnology
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
        <div className='relative mt-[1.83rem] xmd:w-full h-[17.13031rem] xmd:h-[19rem] overflow-hidden'>
          <div className='lg:grid lg:grid-cols-3 lg:gap-x-[0.58565rem] flex h-full xmd:absolute xmd:overflow-auto xmd:top-0 xmd:left-0 '>
            {posts?.slice(3, 6)?.map((post, index) => (
              <ItemTechnology
                post={post}
                priority={true}
                key={index}
                className='rounded-[1.1713rem] xmd:w-[11.3rem] h-full xmd:mr-[0.58565rem]'
                boxClass='lg:!p-[1.17rem]'
                widthHeightImg='xmd:w-[11.49341rem] xmd:h-[8.19912rem]'
                mbCard
              />
            ))}
          </div>
        </div>
      )}
    </>
  )
}