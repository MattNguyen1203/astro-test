import Image from 'next/image'
import ItemAvt from '../infoaccount/ItemAvt'
import ItemRank from '../infoaccount/ItemRank'

const ranks = [
  {
    id: 0,
    title: 'Thành viên mới',
    icon: '/account/cup-start.svg',
    background: 'bg-[linear-gradient(92deg,#DDFFE5_0%,#A7FFE4_100.73%)]',
  },
  {
    id: 1,
    title: 'Thành viên bạc',
    icon: '/account/cup-sivel.svg',
    background:
      'bg-[linear-gradient(99deg,#464646_0%,#535353_50.5%,#BCBCBC_100%)]',
  },
  {
    id: 2,
    title: 'Thành viên vàng',
    icon: '/account/cup-gold.svg',
    background:
      'bg-[linear-gradient(99deg,#FFA800_0%,rgba(254,107,0,0.73)_51.5%,#FBC400_100%)]',
  },
  {
    id: 3,
    title: 'Thành viên kim cương',
    icon: '/account/cup-kc.svg',
    background:
      'bg-[linear-gradient(99deg,#058FF2_0%,#81AFFF_59%,#00E0FF_100%)]',
  },
]

export default function AvatarRes({profile, session}) {
  return (
    <div className='flex mb-[1.17rem] xmd:px-[0.59rem]'>
      <ItemAvt
        profile={profile}
        session={session}
      />
      <div className='ml-[0.75rem] flex flex-col justify-between'>
        <h2 className='font-medium text-greyscale-50 sub1'>
          {profile?.nickname}
        </h2>
        {/* <div className='items-center justify-center flex bg-[linear-gradient(92deg,#DDFFE5_0%,#A7FFE4_100.73%)] rounded-[2.125rem] py-[0.25rem] px-[0.5rem]'>
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
        </div> */}
        <ItemRank rank={Number(profile?.member_level) || 0} />
      </div>
    </div>
  )
}
