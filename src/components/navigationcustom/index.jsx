export default function NavigationCustom({
  handleNextSlide,
  handlePrevSlide,
  indexSlider = 0,
  length = 0,
}) {
  return (
    <>
      <button
        onClick={handlePrevSlide}
        className={`${
          length && indexSlider === 0 ? 'hidden' : ''
        } absolute top-1/2 -translate-y-1/2 left-0 -translate-x-1/2 size-[2.63543rem] shadow-[2px_4px_20px_0px_rgba(12,46,112,0.04),-6px_2px_28px_0px_rgba(12,46,112,0.04)] bg-[linear-gradient(90deg,rgba(255,255,255,1)_0%,rgba(255,255,255,1)_100%)] rounded-full z-[5] flex justify-center items-center group hover:shadow-[0px_0px_32px_0px_rgba(0, 0, 0, 0.08)] hover:bg-[linear-gradient(80deg,#FFE2B5_-133.34%,#E78E00_92.23%)] hover:backdrop-blur-[5px] transition-all duration-300 pointer-events-auto`}
      >
        <svg
          xmlns='http://www.w3.org/2000/svg'
          width='24'
          height='24'
          viewBox='0 0 24 24'
          fill='none'
        >
          <path
            className='group-hover:stroke-white'
            d='M14 16L10 12L14 8'
            stroke='#BE9367'
            strokeWidth='2'
            strokeLinecap='round'
            strokeLinejoin='round'
          />
        </svg>
      </button>

      <button
        onClick={handleNextSlide}
        className={`${
          length && indexSlider === length - 1 ? 'hidden' : ''
        } absolute top-1/2 -translate-y-1/2 right-0 translate-x-1/2 size-[2.63543rem] shadow-[2px_4px_20px_0px_rgba(12,46,112,0.04),-6px_2px_28px_0px_rgba(12,46,112,0.04)] bg-[linear-gradient(90deg,rgba(255,255,255,1)_0%,rgba(255,255,255,1)_100%)] rounded-full z-[5] flex justify-center items-center group hover:shadow-[0px_0px_32px_0px_rgba(0, 0, 0, 0.08)] hover:bg-[linear-gradient(80deg,#FFE2B5_-133.34%,#E78E00_92.23%)] hover:backdrop-blur-[5px] transition-all duration-1000 pointer-events-auto`}
      >
        <svg
          xmlns='http://www.w3.org/2000/svg'
          width='24'
          height='24'
          viewBox='0 0 24 24'
          fill='none'
        >
          <path
            className='group-hover:stroke-white'
            d='M10 16L14 12L10 8'
            stroke='#BE9367'
            strokeWidth='2'
            strokeLinecap='round'
            strokeLinejoin='round'
          />
        </svg>
      </button>
    </>
  )
}
