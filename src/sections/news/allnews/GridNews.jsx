'use client'

import {Fragment, useEffect} from 'react'
import ItemNews from '../ItemNews'
import useStore from '@/app/(store)/store'
import SkeletonItemNews from '../SkeletonItemNews'

export default function GridNews({postsNew}) {
  const setIsFilterPosts = useStore((state) => state.setIsFilterPosts)
  const isFilterPosts = useStore((state) => state.isFilterPosts)
  useEffect(() => {
    setIsFilterPosts(false)
  }, [])
  return (
    <>
      {postsNew?.map((post, index) => (
        <Fragment key={index}>
          {isFilterPosts ? (
            <SkeletonItemNews />
          ) : (
            <ItemNews
              isOption={true}
              post={post}
            />
          )}
          {index !== postsNew?.item?.length - 1 && (
            <hr className='w-full my-[1.76rem] h-[0.07rem] bg-[#EBF0F7]' />
          )}
        </Fragment>
      ))}
    </>
  )
}
