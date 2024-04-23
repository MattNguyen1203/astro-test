import {auth} from '@/auth'
import ICArrowRightBlack from '@/components/icon/ICArrowRightBlack'
import {TabsProfile} from '@/components/tabprofile'
import {getDataProfile} from '@/lib/getDataProfile'
import getDataProxy from '@/lib/getDataProxy'
import AvatarRes from '@/sections/account/components/avatarres'
import Link from 'next/link'

export default async function AccountPage({searchParams}) {
  const {viewport} = searchParams
  const isMobile = viewport === 'mobile'

  const [province, district, commune, session] = await Promise.all([
    getDataProxy('/api/province'),
    getDataProxy('/api/district'),
    getDataProxy('/api/commune'),
    auth(),
  ])

  const profile = await getDataProfile({
    api: `/custom/v1/customer/customer?user_id=${session?.userId}`,
    token: session?.acessToken,
  })
  console.log('🚀 ~ AccountPage ~ profile:', profile)
  return (
    <>
      {isMobile && (
        <>
          <Link
            href='/dash-board'
            className='flex items-center pl-[0.59rem] h-[2.93rem] mb-[1.5rem]'
          >
            <ICArrowRightBlack className='rotate-180 size-[1.75rem] mr-[0.59rem]' />
            <span className='font-medium h5 text-greyscale-50'>
              Thông tin tài khoản
            </span>
          </Link>
          <AvatarRes />
        </>
      )}
      <TabsProfile
        profile={profile}
        isMobile={isMobile}
        province={province}
        district={district}
        commune={commune}
        session={session}
      />
    </>
  )
}
