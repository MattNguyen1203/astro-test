import Image from 'next/image'
import MenuUser from '../menuuser'
import {auth} from '@/auth'
import ItemRank from './ItemRank'
import {getDataProfile} from '@/lib/getDataProfile'
import ItemAvt from './ItemAvt'

export default async function InfoAccount() {
  const session = await auth()
  const profile = await getDataProfile({
    api: `/custom/v1/customer/customer`,
    token: session?.accessToken,
  })
  const user = session?.user
  return (
    <aside className='w-[21.30307rem] h-fit sticky top-[9.52rem] left-0'>
      <div className='p-[1.17rem] rounded-[0.58565rem] bg-white shadow-[2px_4px_20px_0px_rgba(0,0,0,0.02)]'>
        <span className='font-medium sub2 text-greyscale-50'>
          Xin chào bạn!
        </span>
        <hr className='h-[0.07rem] w-full bg-[#ECECEC66] block my-[0.59rem]' />
        <div className='flex items-center'>
          <ItemAvt
            user={user}
            profile={profile}
          />
          <div className='flex flex-col ml-[0.88rem]'>
            {profile?.user_id && (
              <span className='font-medium caption1 text-greyscale-50'>
                {profile?.nickname ||
                  profile?.display_name ||
                  user?.email?.split('@')?.[0]}
              </span>
            )}
            <ItemRank rank={Number(profile?.member_level) || 0} />
          </div>
        </div>
      </div>

      <MenuUser session={session} />
    </aside>
  )
}
