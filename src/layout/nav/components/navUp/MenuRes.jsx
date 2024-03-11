import Image from 'next/image'

export default function MenuRes() {
  return (
    <div className='size-[2.34261rem] flex justify-center items-center rounded-full'>
      <Image
        className='size-[1.1713rem] object-cover'
        src={'/layout/nav/menu.svg'}
        alt='icon menu'
        width={16}
        height={16}
      />
    </div>
  )
}
