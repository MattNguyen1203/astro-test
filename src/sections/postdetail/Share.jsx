'use client'
import React, {useState} from 'react'
import Image from 'next/image'
const Share = () => {
  const [hover, setHover] = useState(false)
  const [hover2, setHover2] = useState(false)

  const handleClick = () => {
    setHover(false)
    setTimeout(() => {
      setHover(true)
    }, 500)
  }
  const handleClick2 = () => {
    setHover2(false)
    setTimeout(() => {
      setHover2(true)
    }, 500)
  }
  return (
    <div
      className='flex items-center self-stretch rounded-[0.87848rem] bg-[#FFF]
            md:py-[1.53734rem] md:pr-[50rem ] md:pl-[1.46413rem]'
    >
      <div className='flex items-center space-x-[0.73206rem]'>
        <div className='font-medium text-blue-700 sub1'>Chia sẻ</div>
        <div
          onMouseUp={() =>
            setTimeout(() => {
              setHover(true)
            }, 200)
          }
          onMouseDown={() => setHover(false)}
          onMouseEnter={() => setHover(true)}
          onMouseLeave={() => setHover(false)}
          className={
            'duration-500 ease-in-out rounded-[0.29283rem]  bg-[rgba(236,236,236,0.30)] p-[0.58565rem] w-[2.63543rem] h-[2.63543rem] th-fl ' +
            (hover ? 'hover:bg-[#17395C]' : 'bg-[#F5F5F5]')
          }
        >
          <svg
            className='!text-black'
            width='20'
            height='21'
            viewBox='0 0 20 21'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path
              className='!text-black duration-500 ease-in-out'
              d='M10.1668 2.86328H14.8335C15.7669 2.86328 16.2334 2.86328 16.5899 3.04494C16.9035 3.20473 17.1587 3.45951 17.3185 3.77311C17.5002 4.12963 17.5002 4.59634 17.5002 5.52976V10.1965C17.5002 11.1299 17.5002 11.5966 17.3185 11.9531C17.1587 12.2667 16.9033 12.522 16.5897 12.6818C16.2335 12.8633 15.7675 12.8633 14.8359 12.8633H12.5V15.1992C12.5 16.1308 12.5 16.5968 12.3185 16.9529C12.1587 17.2665 11.9035 17.522 11.5899 17.6818C11.2337 17.8633 10.7679 17.8633 9.83629 17.8633H5.16409C4.23249 17.8633 3.766 17.8633 3.40983 17.6818C3.09623 17.522 2.84144 17.2668 2.68166 16.9532C2.5 16.5967 2.5 16.1302 2.5 15.1968V10.5301C2.5 9.59669 2.5 9.12963 2.68166 8.77311C2.84144 8.45951 3.09623 8.20473 3.40983 8.04494C3.76635 7.86328 4.23341 7.86328 5.16683 7.86328H7.5V5.53011C7.5 4.59669 7.5 4.12963 7.68166 3.77311C7.84144 3.45951 8.09623 3.20473 8.40983 3.04494C8.76635 2.86328 9.23341 2.86328 10.1668 2.86328Z'
              fill={hover ? 'white' : '#828282'}
            />
            <rect
              x='2.87305'
              y='8.14648'
              width='9.2168'
              height='9.2168'
              rx='1'
              stroke='#F5F5F5'
            />
          </svg>
        </div>

        <div
          onMouseUp={() =>
            setTimeout(() => {
              setHover2(true)
            }, 200)
          }
          onMouseDown={() => setHover2(false)}
          onMouseEnter={() => setHover2(true)}
          onMouseLeave={() => setHover2(false)}
          className={
            'duration-500 ease-in-out rounded-[0.29283rem]  bg-[rgba(236,236,236,0.30)] p-[0.58565rem] w-[2.63543rem] h-[2.63543rem] th-fl ' +
            (hover2 ? 'hover:bg-[#17395C]' : 'bg-[#F5F5F5]')
          }
        >
          <svg
            width='20'
            height='21'
            viewBox='0 0 20 21'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path
              d='M12.1042 2.36328C11.082 2.36328 10.1017 2.76934 9.37886 3.49214C8.65606 4.21494 8.25 5.19526 8.25 6.21745V8.36328H6.1875C6.08417 8.36328 6 8.44661 6 8.55078V11.3841C6 11.4874 6.08333 11.5716 6.1875 11.5716H8.25V17.3841C8.25 17.4874 8.33333 17.5716 8.4375 17.5716H11.2708C11.3742 17.5716 11.4583 17.4883 11.4583 17.3841V11.5716H13.5392C13.625 11.5716 13.7 11.5133 13.7208 11.4299L14.4292 8.59661C14.4361 8.56897 14.4367 8.54009 14.4308 8.51219C14.425 8.48429 14.4128 8.45809 14.3953 8.43559C14.3778 8.4131 14.3554 8.39489 14.3298 8.38236C14.3041 8.36983 14.276 8.3633 14.2475 8.36328H11.4583V6.21745C11.4583 6.13264 11.475 6.04865 11.5075 5.9703C11.54 5.89194 11.5875 5.82075 11.6475 5.76077C11.7075 5.7008 11.7787 5.65323 11.857 5.62078C11.9354 5.58832 12.0194 5.57161 12.1042 5.57161H14.2708C14.3742 5.57161 14.4583 5.48828 14.4583 5.38411V2.55078C14.4583 2.44745 14.375 2.36328 14.2708 2.36328H12.1042Z'
              fill={hover2 ? 'white' : '#828282'}
            />
          </svg>
        </div>
      </div>
    </div>
  )
}

export default Share
