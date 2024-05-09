import {auth} from '@/auth'
import ICArrowRightBlack from '@/components/icon/ICArrowRightBlack'
import AvatarRes from '@/sections/account/components/avatarres'
import RackAccount from '@/sections/account/components/rankaccount'
import Link from 'next/link'
import getData from '@/lib/getData'
import {getDataTag} from '@/lib/getDataTag'

export default async function CustomerPage({searchParams}) {
  const {viewport} = searchParams
  const isMobile = viewport === 'mobile'

  const [session, dataRank] = await Promise.all([
    auth(),
    getData('/okhub/v1/member-option'),
  ])

  const profile =
    session?.accessToken &&
    (await getDataTag({
      api: `/custom/v1/customer/customer`,
      token: session?.accessToken,
      tags: 'profile',
    }))

  return (
    <>
      {isMobile && (
        <>
          <Link
            href='/dash-board'
            className='flex items-center pl-[0.59rem] h-[2.93rem] mb-[1.5rem] xmd:pl-[1.1rem]'
          >
            <ICArrowRightBlack className='rotate-180 size-[1.75rem] mr-[0.59rem]' />
            <span className='font-medium h5 text-greyscale-50'>
              Khách hàng thân thiết
            </span>
          </Link>
          <AvatarRes
            session={session}
            profile={profile}
          />
        </>
      )}
      <section className='inline-flex flex-col items-start justify-start w-full xmd:items-center h-fit xmd:mt-[1.17rem]'>
        <RackAccount
          isMobile={isMobile}
          session={session}
          dataRank={dataRank}
        />
      </section>
    </>
  )
}
