import React from 'react'

const RelatedButton = ({text, bg, color}) => {
  return (
    <div
      className={
        ' flex justify-center items-start h-[2.63543rem] py-[0.80527rem] px-[1.46413rem] gap-[0.58565rem] rounded-[7.32064rem]  ' +
        (bg ? `${bg}` : 'bg-[#F2F2F2]')
      }
    >
      <div
        style={{color: color}}
        className={
          ' caption1 uppercase font-semibold text-center  text-greyscale-30'
        }
      >
        {text}
      </div>
    </div>
  )
}

export default RelatedButton
