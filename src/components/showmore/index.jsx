import {cn} from '@/lib/utils'
import Image from 'next/image'
import React, {useState, useRef, useEffect, memo} from 'react'

const ShowMore = ({
  children,
  maxHeight = 100,
  textClass,
  iconProp,
  wrapperClass,
}) => {
  // API:{
  //   maxHeight={200}
  //   textClass='sub2 text-greyscale-30 font-medium mr-0.29rem'
  //   iconProp={{
  //     className: 'w-[1.1713rem] h-[1.1713rem] object-contain',
  //     url: '/product/arrow.svg',
  //   }}
  //   wrapperClass='bg-transparent relative'

  // }
  const [isExpanded, setIsExpanded] = useState(false)
  const [showButton, setShowButton] = useState(false)
  const contentRef = useRef(null)

  useEffect(() => {
    setTimeout(() => {
      const contentHeight = contentRef.current.scrollHeight
      setShowButton(contentHeight > maxHeight)
    }, 500)
  }, [maxHeight, children])

  const toggleExpand = () => setIsExpanded(!isExpanded)
  return (
    <>
      <div
        ref={contentRef}
        style={{
          maxHeight: isExpanded
            ? contentRef.current?.scrollHeight
            : `${maxHeight}px`,
          overflow: 'hidden',
        }}
        className='transition-all duration-500'
      >
        {children}
      </div>
      {showButton && (
        <div
          className={cn(
            'w-full h-[3.5rem] bg-white absolute flex justify-center items-center bottom-0 left-1/2 -translate-x-1/2',
            wrapperClass,
          )}
        >
          <div
            className='flex items-center justify-center cursor-pointer'
            onClick={toggleExpand}
          >
            <span className={textClass}>
              {isExpanded ? 'Rút gọn' : 'Xem thêm'}
            </span>
            <Image
              src={iconProp.url}
              alt=''
              width={10}
              height={10}
              className={iconProp.className}
            />
          </div>
        </div>
      )}
    </>
  )
}

export default ShowMore
