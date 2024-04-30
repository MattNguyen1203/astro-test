import {auth} from '@/auth'
import ICArrowRightBlack from '@/components/icon/ICArrowRightBlack'
import AvatarRes from '@/sections/account/components/avatarres'
import RackAccount from '@/sections/account/components/rankaccount'
import Link from 'next/link'
import getData from '@/lib/getData'

export default async function CustomerPage({searchParams}) {
  const {viewport} = searchParams
  const isMobile = viewport === 'mobile'

  const [session, dataRank] = await Promise.all([
    auth(),
    getData('/okhub/v1/member-option'),
  ])
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
              Khách hàng thân thiết
            </span>
          </Link>
          <AvatarRes />
        </>
      )}
      <section className='inline-flex flex-col items-start justify-start w-full xmd:items-center h-fit xmd:mt-[1.17rem]'>
        <RackAccount
          session={session}
          dataRank={dataRank}
        />
      </section>
    </>
  )
}
