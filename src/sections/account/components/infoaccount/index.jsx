import MenuUser from '../menuuser'
import ItemRank from './ItemRank'
import ItemAvt from './ItemAvt'
import {getDataTag} from '@/lib/getDataTag'

export default async function InfoAccount({session}) {
  const request = {
    api: `/custom/v1/customer/customer`,
    token: session ? session?.accessToken : null,
    tags: 'profile',
  }
  const profile = await getDataTag(request)
  return (
    <aside className='w-[21.30307rem] h-fit sticky top-[9.52rem] left-0'>
      <div className='p-[1.17rem] rounded-[0.58565rem] bg-white shadow-[2px_4px_20px_0px_rgba(0,0,0,0.02)]'>
        <span className='font-medium sub2 text-greyscale-50'>
          Xin chào bạn!
        </span>
        <hr className='h-[0.07rem] w-full bg-[#ECECEC66] block my-[0.59rem]' />
        <div className='flex items-center'>
          <ItemAvt
            profile={profile}
            session={session}
          />
          <div className='flex flex-col ml-[0.88rem]'>
            {profile?.user_id && (
              <span className='font-medium caption1 text-greyscale-50'>
                {profile?.nickname ||
                  profile?.display_name?.trim() ||
                  profile?.email?.split('@')?.[0]}
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
