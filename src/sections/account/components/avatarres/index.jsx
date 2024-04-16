import Image from 'next/image'

export default function AvatarRes() {
  return (
    <div className='flex mb-[1.17rem]'>
      <div className='size-[3.22108rem] rounded-full border border-solid border-black'></div>
      <div className='ml-[0.75rem] flex flex-col justify-between'>
        <h2 className='font-medium text-greyscale-50 sub1'>Ngọc Nguyễn</h2>
        <div className='items-center justify-center flex bg-[linear-gradient(92deg,#DDFFE5_0%,#A7FFE4_100.73%)] rounded-[2.125rem] py-[0.25rem] px-[0.5rem]'>
          <Image
            className='size-[0.75rem] object-contain'
            src={'/account/icon-rank-1.svg'}
            alt='icon rank'
            width={24}
            height={24}
          />
          <span className='font-medium caption2 text-greyscale-60 block w-fit ml-[0.25rem]'>
            Thành viên mới
          </span>
        </div>
      </div>
    </div>
  )
}
