export default function BtnSubmit({
  isPending = false,
  title = '',
  className = '',
}) {
  return (
    <button
      type='submit'
      className={`${
        isPending ? 'pointer-events-none cursor-not-allowed' : ''
      } ${className} w-[15.666rem] h-[2.928rem] rounded-[0.58565rem] bg-[linear-gradient(97deg,#102841_0%,#1359A1_100%)] text-white caption1 font-semibold flex justify-center items-center`}
    >
      {isPending ? (
        <svg
          className='animate-spin h-[2rem] w-[2rem] text-white'
          xmlns='http://www.w3.org/2000/svg'
          fill='none'
          viewBox='0 0 24 24'
        >
          <circle
            className='opacity-25'
            cx='12'
            cy='12'
            r='10'
            stroke='currentColor'
            strokeWidth='4'
          ></circle>
          <path
            fill='currentColor'
            d='M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z'
          ></path>
        </svg>
      ) : (
        title
      )}
    </button>
  )
}
