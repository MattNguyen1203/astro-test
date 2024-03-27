'use client'
import {Dialog, DialogContent, DialogTrigger} from '@/components/ui/dialog'
import {Slider} from '@/components/ui/slider'
import {useRef, useState} from 'react'

export function DialogAvatar({children, isOpen, setIsOpen}) {
  const fileRef = useRef(null)
  const [src, setSrc] = useState('')
  const [size, setSize] = useState(50)

  const handleDragOver = (event) => {
    event.preventDefault()
  }

  const handleDrop = (event) => {
    event.preventDefault()
    setSrc(URL.createObjectURL(event?.dataTransfer?.files[0]))
  }

  const handleChangeFile = (file) => {
    setSrc(URL.createObjectURL(file.target.files[0]))
  }

  return (
    <Dialog
      open={isOpen}
      onOpenChange={setIsOpen}
    >
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className='sm:max-w-[425px] w-[29.28258rem] rounded-[0.58565rem] py-[2.64rem] px-[1.17rem]'>
        <div className='relative block font-medium sub2 text-greyscale-80'>
          Cập nhật ảnh đại diện
          <div
            onClick={() => {
              setIsOpen(false)
              setSrc('')
            }}
            className='absolute -right-[0.5rem] -translate-y-1/2 top-1/2 p-[0.5rem] cursor-pointer active:scale-95'
          >
            <svg
              xmlns='http://www.w3.org/2000/svg'
              width='14'
              height='14'
              viewBox='0 0 14 14'
              fill='none'
              className='size-[1.02489rem]'
            >
              <path
                d='M10.5 10.5L7.00001 7.00001M7.00001 7.00001L3.5 3.5M7.00001 7.00001L10.5 3.5M7.00001 7.00001L3.5 10.5'
                stroke='#A9A9A9'
                strokeWidth='1.66667'
                strokeLinecap='round'
                strokeLinejoin='round'
              />
            </svg>
          </div>
        </div>
        <hr className='h-[0.07321rem] bg-[#ECECECB2] mt-[0.59rem] mb-[1.17rem]' />
        <div
          className={`${src ? 'h-[13.46999rem]' : ' h-[30.3rem]'} bg-[#EBF0F7]`}
        >
          <div
            className={`${
              src ? 'flex' : 'py-[1.17rem] px-[1.02rem]'
            } transition-all duration-200 h-full`}
          >
            {src && (
              <picture className='size-[13.46999rem] overflow-hidden relative flex-shrink-0 rounded-full'>
                <img
                  style={{
                    transform: `translate(-50%,-50%) scale(${size / 50})`,
                  }}
                  className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 min-w-[20rem] w-[20rem] h-auto object-fill block transition-all duration-100 origin-center'
                  src={src}
                  alt='avatar customer'
                />
              </picture>
            )}
            <div
              onDragOver={handleDragOver}
              onDrop={handleDrop}
              onClick={() => fileRef?.current.click()}
              className={`${
                src ? '' : 'border border-dashed border-blue-200'
              } rounded-[0.58565rem] flex justify-center items-center h-full cursor-crosshair w-full`}
            >
              <input
                onChange={handleChangeFile}
                ref={fileRef}
                type='file'
                id='fileImage'
                name='fileImage'
                className='hidden'
                accept='image/png, image/jpeg, image/svg+xml'
              />
              <span
                className={`${
                  src
                    ? 'w-[10.98097rem] text-center block mx-auto'
                    : 'w-[15.959rem]'
                }  body1 font-normal pointer-events-none`}
              >
                Nhấn để chọn hoặc kéo thả hình ảnh vào khung này.
              </span>
            </div>
          </div>
        </div>
        {src && (
          <>
            <div className='flex items-center my-[1.17rem]'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                width='12'
                height='12'
                viewBox='0 0 12 12'
                fill='none'
                className='size-[0.87848rem]'
              >
                <path
                  d='M3.5 5H6.5M7.5 7.5L10.5 10.5M5 8.5C3.067 8.5 1.5 6.933 1.5 5C1.5 3.067 3.067 1.5 5 1.5C6.933 1.5 8.5 3.067 8.5 5C8.5 6.933 6.933 8.5 5 8.5Z'
                  stroke='#A9A9A9'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                />
              </svg>
              <Slider
                defaultValue={[50]}
                min={10}
                max={100}
                step={1}
                minStepsBetweenThumbs={1}
                onValueChange={(value) => setSize(Number(value[0]))}
                className='w-[9.95608rem] mx-[0.88rem]'
              />

              <svg
                xmlns='http://www.w3.org/2000/svg'
                width='12'
                height='12'
                viewBox='0 0 12 12'
                fill='none'
                className='size-[0.87848rem]'
              >
                <path
                  d='M3.5 5H5M5 5H6.5M5 5V3.5M5 5V6.5M7.5 7.5L10.5 10.5M5 8.5C3.067 8.5 1.5 6.933 1.5 5C1.5 3.067 3.067 1.5 5 1.5C6.933 1.5 8.5 3.067 8.5 5C8.5 6.933 6.933 8.5 5 8.5Z'
                  stroke='#A9A9A9'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                />
              </svg>
            </div>
            <div className='grid grid-cols-2 gap-x-[0.59rem]'>
              <button
                onClick={() => {
                  setIsOpen(false)
                  setSrc('')
                }}
                className='rounded-[0.43924rem] border border-solid border-blue-800 text-blue-800 bg-white flex justify-center items-center caption font-semibold h-[2.4rem] active:scale-95'
              >
                HUỶ BỎ
              </button>
              <button
                onClick={() => {
                  setIsOpen(false)
                }}
                className='rounded-[0.43924rem] border border-solid border-blue-800 text-white bg-blue-800 flex justify-center items-center caption font-semibold h-[2.4rem]'
              >
                LƯU THAY ĐỔI
              </button>
            </div>
          </>
        )}
      </DialogContent>
    </Dialog>
  )
}
