'use client'

import {useState} from 'react'

export default function BtnScroll({isMobile}) {
  const [index, setIndex] = useState(-1)

  function scrollToSection(selector, idx) {
    const section = document.querySelector(selector)
    section.scrollIntoView({behavior: 'smooth', block: 'start'})
    setIndex(idx)
  }

  return (
    <div className='flex xmd:absolute xmd:top-0 xmd:left-0 xmd:items-center xmd:h-full xmd:w-fit xmd:px-[0.59rem] '>
      {new Array(3).fill(0).map((_, idx) => (
        <button
          onClick={() => scrollToSection(`#ipad${idx + 1}`, idx)}
          className={`${
            index === idx
              ? 'bg-[linear-gradient(44deg,#FFF0D8_52.89%,#FFD797_107.96%)] text-greyscale-80'
              : 'text-white'
          } first:ml-0 ml-[2.64rem] py-[0.88rem] px-[1.76rem] rounded-[7.5rem] w-fit button font-medium border border-solid border-white xmd:ml-[0.59rem] whitespace-nowrap`}
          key={idx}
        >
          Ipad {idx + 1}
        </button>
      ))}
    </div>
  )
}
