import Image from 'next/image'
import React, {useState, useRef, useEffect} from 'react'

const ShowMore = ({children, maxHeight = 100, textClass, iconProp}) => {
  const [isExpanded, setIsExpanded] = useState(false)
  const [showButton, setShowButton] = useState(false)
  const contentRef = useRef(null)

  // Effect to determine whether to show the "Show More" button
  useEffect(() => {
    const contentHeight = contentRef.current.scrollHeight
    if (contentHeight > maxHeight) {
      setShowButton(true)
    } else {
      setShowButton(false)
    }
  }, [children, maxHeight, contentRef]) // Depend on children and maxHeight, recalculate when they change

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
        <div className='w-full h-[3.5rem] bg-white absolute flex justify-center items-center bottom-0 left-1/2 -translate-x-1/2'>
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
