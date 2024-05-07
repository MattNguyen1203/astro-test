'use client'

export default function BtnCombo({isOpen, setIsOpen}) {
  return (
    <button
      onClick={() => setIsOpen(!isOpen)}
      className='flex justify-center items-center py-[0.59rem] pl-[0.73rem] pr-[0.44rem] bg-elevation-20 rounded-[0.43924rem] w-fit'
    >
      <span className='caption1 font-normal text-greyscale-40 inline-block mr-[0.15rem]'>
        {isOpen ? 'Thu gọn' : 'Chi tiết'}
      </span>
      <svg
        xmlns='http://www.w3.org/2000/svg'
        width='16'
        height='17'
        viewBox='0 0 16 17'
        fill='none'
        className='size-[1.1713rem] flex-shrink-0'
      >
        <path
          d='M10.6667 7.16663L8.00004 9.83329L5.33337 7.16663'
          stroke='#6A6A6A'
          strokeWidth='1.33333'
          strokeLinecap='round'
          strokeLinejoin='round'
        />
      </svg>
    </button>
  )
}
