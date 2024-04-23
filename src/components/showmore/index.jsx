'use client'

import {cn} from '@/lib/utils'
import Image from 'next/image'
import {useState, useRef, useEffect, memo} from 'react'

const ShowMore = ({
  children,
  maxHeight = 100,
  textClass,
  iconProp,
  wrapperClass,
}) => {
  const [isExpanded, setIsExpanded] = useState(false)
  const [showButton, setShowButton] = useState(false)
  const contentRef = useRef(null)

  useEffect(() => {
    const handleResize = () => {
      const contentHeight = contentRef.current?.scrollHeight
      setShowButton(contentHeight > maxHeight)
    }

    // Initial check
    handleResize()

    // Set up a resize observer to listen for content size changes
    const observer = new ResizeObserver(handleResize)
    if (contentRef.current) {
      observer.observe(contentRef.current)
    }

    // Cleanup observer on component unmount
    return () => observer.disconnect()
  }, [maxHeight])

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
