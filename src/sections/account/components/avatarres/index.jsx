import ItemAvt from '../infoaccount/ItemAvt'
import ItemRank from '../infoaccount/ItemRank'

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
        <ItemRank rank={Number(profile?.member_level) || 0} />
      </div>
    </div>
  )
}
