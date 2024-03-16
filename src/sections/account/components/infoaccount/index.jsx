import {auth} from '@/auth'
import Image from 'next/image'
import {redirect} from 'next/navigation'
import MenuUser from '../menuuser'

export default async function InfoAccount() {
  // const {user} = await auth()
  // if (!user?.email) return redirect('/dang-Nhap')
  return (
    <aside className='w-[21.30307rem] h-fit sticky top-[9.52rem] left-0'>
      <div className='p-[1.17rem] rounded-[0.58565rem] bg-white shadow-[2px_4px_20px_0px_rgba(0,0,0,0.02)]'>
        <span className='font-medium sub2 text-greyscale-50'>
          Xin chào bạn!
        </span>
        <hr className='h-[0.07rem] w-full bg-[#ECECEC66] block my-[0.59rem]' />
        <div className='flex items-center'>
          <div className='size-[3.2rem] rounded-full border border-solid border-[#FFF0D8] shadow-[2px_4px_20px_0px_rgba(0,0,0,0.02),-6px_2px_32px_0px_rgba(0,0,0,0.06)]'>
            {/* {user?.image && (
              <Image
                className='object-cover rounded-full size-full'
                src={user?.image}
                alt={user?.name}
                width={44}
                height={44}
              />
            )} */}
          </div>
          <div className='flex flex-col ml-[0.88rem]'>
            {/* {user?.name && (
              <span className='font-medium caption1 text-greyscale-50'>
                {user?.name}
              </span>
            )} */}
            <div className='flex items-center px-[0.6rem] py-[0.3rem] rounded-[7.4rem] bg-[linear-gradient(99deg,#058FF2_0%,#81AFFF_59%,#00E0FF_100%)] w-fit mt-[0.44rem]'>
              <Image
                className='size-[0.87848rem] object-contain'
                src={'/account/cup-kc.svg'}
                alt='cup kim cương'
                width={12}
                height={12}
                priority
              />
              <span className='block ml-[0.29rem] caption2 font-normal text-white w-fit'>
                Thành viên kim cương
              </span>
            </div>
          </div>
        </div>
      </div>

      <MenuUser />
    </aside>
  )
}
