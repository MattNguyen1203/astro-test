'use client'

export default function Description({description}) {
  return (
    <div
      className='font-normal text-greyscale-40 caption1 tablet:text-[1.4rem] xmd:text-center font-svnGraphik'
      dangerouslySetInnerHTML={{__html: description}}
    />
  )
}
