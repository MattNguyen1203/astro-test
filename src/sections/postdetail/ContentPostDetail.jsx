'use client'
import {useEffect, useLayoutEffect, useState} from 'react'
import Link from 'next/link'
const ContentPostDetail = ({data}) => {
  const ids = ['section1', 'section2', 'section3']
  useEffect(() => {
    const childElements = document.querySelectorAll('.tintuc h2')
    childElements.forEach((child, index) => {
      child.id = ids[index]
    })
  }, [])
  return (
    <div className=''>
      <div
        className='xmd:space-y-[1.57848rem] space-y-[0.67848rem] xmd:w-[26.4rem] flex flex-col items-start mb-[1rem] self-stretch 
              rounded-[0.58565rem] p-[0.86413rem] md:p-[1.46413rem] bg-[rgba(232,235,239,0.50)] '
      >
        <div className='font-medium sub1 text-greyscale-80 font-svnGraphik'>
          Nội dung chính
        </div>
        <div className=' w-full md:w-[56.58858rem] h-[0.07321rem] !mt-[0.75rem] bg-[#B7C2CC]'></div>
        <Link
          href='#section1'
          className='th-fl md:w-[55.7101rem] h-[1.75695rem] '
        >
          <div className='mb-[0.88rem] cursor-pointer body1 font-normal text-greyscale-40 md:w-[55.7101rem] md:shrink-0 md:self-stretch font-svnGraphik xmd:text-[1.1713rem] xmd:font-normal xmd:leading-[1.5]'>
            Redmi Buds 5 - Pin "khủng", khử tiếng ồn chủ động ANC
          </div>
        </Link>
        <Link
          href='#section2'
          className='th-fl md:w-[55.7101rem] h-[1.75695rem] '
        >
          <div className='mb-[0.88rem] cursor-pointer body1 font-normal text-greyscale-40 md:w-[55.7101rem] md:shrink-0 md:self-stretch font-svnGraphik xmd:text-[1.1713rem] xmd:font-normal xmd:leading-[1.5]'>
            Redmi Buds 5 Pro - Chất âm HIFI cao cấp, khử ồn thông minh được cá
            nhân hóa
          </div>
        </Link>
        <Link
          href='#section3'
          className='th-fl md:w-[55.7101rem] h-[1.75695rem] '
        >
          <div className='cursor-pointer body1 font-normal text-greyscale-40 md:w-[55.7101rem] md:shrink-0 md:self-stretch font-svnGraphik xmd:text-[1.1713rem] xmd:font-normal xmd:leading-[1.5]'>
            Chương trình ưu đãi
          </div>
        </Link>
      </div>
      <div className='tintuc xmd:w-[26.4rem] w-full'>
        <div dangerouslySetInnerHTML={{__html: data}} />
      </div>
    </div>
  )
}

export default ContentPostDetail
