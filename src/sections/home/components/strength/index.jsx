import CardStrength from '@/components/cardstrength'
import {listCardStrength} from '@/components/liststrength'

export default function BannerStrength() {
  return (
    <article className='container select-none rounded-[0.88rem] overflow-hidden'>
      <div className='flex justify-between mt-[1.17rem] mb-[4.41rem]'>
        {listCardStrength.map((e, index) => (
          <CardStrength
            key={index}
            item={e}
            background={true}
            priority={true}
          />
        ))}
      </div>
    </article>
  )
}
