'use client'

import BoxCheck from '@/components/sheetcart/BoxCheck'

export default function page() {
  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('🚀 ~ handleSubmit ~ e:', Array(e?.target))
    console.log('🚀 ~ handleSubmit ~ e:', Array(e?.target)[0][0]?.checked)
    console.log('🚀 ~ handleSubmit ~ e:', Array(e?.target)[0][0]?.value)
    Array(e?.target).forEach((i) => {
      console.log('🚀 ~ e?.target?.forEach ~ e:', i?.checked)
    })
  }
  return (
    <div className='container min-h-screen'>
      <form onSubmit={handleSubmit}>
        <div className='size-[1.5rem] border border-solid border-black flex justify-center items-center'>
          <BoxCheck />
        </div>
        <div className='size-[1.5rem] border border-solid border-black flex justify-center items-center'>
          <BoxCheck />
        </div>
        <div className='size-[1.5rem] border border-solid border-black flex justify-center items-center'>
          <BoxCheck />
        </div>

        <button
          className='text-black'
          type='submit'
        >
          submit
        </button>
      </form>
    </div>
  )
}
