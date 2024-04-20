import AvatarRes from '@/sections/account/components/avatarres'
import MenuUser2 from '@/sections/account/components/menuuser/MenuUser2'
import ExpRank from '@/sections/account/components/rankaccount/ExpRank'
import {redirect} from 'next/navigation'

export default function page({searchParams}) {
  const {viewport} = searchParams
  const isDesktop = viewport === 'desktop'

  if (isDesktop) {
    return redirect('/tai-khoan-ca-nhan')
  }

  return (
    <div className='pt-[5.35rem] w-full bg-elevation-20 px-[0.5rem] pb-[1.25rem]'>
      <h1 className='font-medium h5 text-greyscale-50'>Xin chào bạn!</h1>
      <hr className='my-[1rem] h-[0.06rem] bg-[#ECECEC66] w-full' />
      <AvatarRes />
      <ExpRank />
      <MenuUser2 />
    </div>
  )
}