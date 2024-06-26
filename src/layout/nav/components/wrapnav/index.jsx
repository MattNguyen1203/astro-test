'use client'

import useStore from '@/app/(store)/store'
import useClickOutSide from '@/hooks/useClickOutSide'
import {useEffect} from 'react'

export default function WrapNav({children, isMobile}) {
  const isFocusSearchNav = useStore((state) => state.isFocusSearchNav)
  const setIsFocusSearchNav = useStore((state) => state.setIsFocusSearchNav)
  const [sideRef, isOutSide] = useClickOutSide()

  useEffect(() => {
    if (isOutSide) {
      setIsFocusSearchNav(false)
    }
  }, [isOutSide])

  return (
    <div
      ref={sideRef}
      id={isFocusSearchNav && !isOutSide ? 'wrapper_nav' : ''}
      className='relative z-30 size-full'
    >
      <div
        className={`${
          isFocusSearchNav && !isOutSide && isMobile ? 'full-mb' : ''
        } container relative`}
      >
        {children}
        {isFocusSearchNav && !isOutSide && (
          <button
            id='btn_close_search_nav'
            className='absolute text-white md:p-[0.5rem] w-fit right-0 top-1/2 -translate-y-1/2 origin-center xmd:size-[2.63543rem] xmd:flex xmd:items-center xmd:justify-center'
            onClick={() => setIsFocusSearchNav(false)}
          >
            <svg
              xmlns='http://www.w3.org/2000/svg'
              width='18'
              height='18'
              viewBox='0 0 18 18'
              fill='none'
            >
              <path
                d='M16.9999 16.9999L9 9M9 9L1 1M9 9L17 1M9 9L1 17'
                stroke={isMobile ? '#A9A9A9' : 'white'}
                strokeWidth='2'
                strokeLinecap='round'
                strokeLinejoin='round'
              />
            </svg>
          </button>
        )}
      </div>
    </div>
  )
}
