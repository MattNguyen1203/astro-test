import Link from 'next/link'

export default function CategoryProductRes({title = '', href = '/'}) {
  return (
    <Link
      href={href}
      className='bg-[#F4F4F4] rounded-[0.58565rem] px-[0.88rem] flex justify-between items-center h-[2.92826rem]'
    >
      <h2 className='font-semibold sub2 text-greyscale-80 tracking-[0.01025rem]'>
        {title}
      </h2>
      <svg
        xmlns='http://www.w3.org/2000/svg'
        width='20'
        height='20'
        viewBox='0 0 20 20'
        fill='none'
        className='size-[1.46413rem]'
      >
        <path
          d='M1.66732 10.0013L18.334 10.0013M18.334 10.0013L11.6673 3.33464M18.334 10.0013L11.6673 16.668'
          stroke='#262626'
          strokeWidth='2'
          strokeLinecap='round'
          strokeLinejoin='round'
        />
      </svg>
    </Link>
  )
}
