import Link from 'next/link'

export default function CategoryProduct({title = '', href = '/', children}) {
  return (
    <div className='bg-white rounded-[0.58565rem] pl-[1.46rem] pr-[0.59rem] container flex justify-between items-center h-[3.51391rem] xmd:h-[2.92826rem]'>
      <h2 className='font-semibold sub2 text-greyscale-80 xmd:tracking-[0.01025rem]'>
        {title}
      </h2>
      <div className='flex items-center'>
        {children}
        <Link
          href={href}
          className='p-[0.59rem] bg-elevation-20 rounded-[0.43924rem] w-fit flex items-center group border border-solid border-transparent hover:border-[rgba(10,24,39,0.10)] hover:shadow-[2px_4px_20px_0px_rgba(0,0,0,0.02)] transition-all duration-200'
        >
          <span className='font-medium text-blue-200 caption1 block w-fit mr-[0.29rem] group-hover:text-blue-400 transition-all duration-200'>
            Xem tất cả
          </span>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            width='12'
            height='12'
            viewBox='0 0 12 12'
            fill='none'
          >
            <path
              d='M4.5 2.5L8 6L4.5 9.5'
              stroke='#94A4B4'
              strokeWidth='2'
              strokeLinecap='round'
              strokeLinejoin='round'
              className='group-hover:stroke-[#45617D] transition-all duration-200'
            />
          </svg>
        </Link>
      </div>
    </div>
  )
}
