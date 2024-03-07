export default function ButtonChange() {
  return (
    <div className='flex items-center w-fit'>
      <button className='size-[2.63543rem] rounded-[0.58565rem] bg-elevation-20 flex justify-center items-center group'>
        <svg
          xmlns='http://www.w3.org/2000/svg'
          width='24'
          height='24'
          viewBox='0 0 24 24'
          fill='none'
          className='size-[1.75695rem] group-hover:scale-110 origin-center group-hover:active:scale-90 transition-all duration-200'
        >
          <path
            d='M7 12H17'
            stroke='#262626'
            strokeWidth='2'
            strokeLinecap='round'
            strokeLinejoin='round'
          />
        </svg>
      </button>
      <div className='w-[2.05rem] relative'>
        <span className='absolute font-semibold text-black -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 button'>
          1
        </span>
      </div>
      <button className='size-[2.63543rem] rounded-[0.58565rem] bg-elevation-20 flex justify-center items-center group'>
        <svg
          xmlns='http://www.w3.org/2000/svg'
          width='24'
          height='24'
          viewBox='0 0 24 24'
          fill='none'
          className='size-[1.75695rem] group-hover:scale-110 origin-center group-hover:active:scale-90 transition-all duration-200'
        >
          <path
            d='M7 12H12M12 12H17M12 12V17M12 12V7'
            stroke='#262626'
            strokeWidth='2'
            strokeLinecap='round'
            strokeLinejoin='round'
          />
        </svg>
      </button>
    </div>
  )
}
