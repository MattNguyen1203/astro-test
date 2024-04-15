import CardStrength from '@/components/cardstrength'
import {IDGLOBALAPI} from '@/lib/IdPageAPI'
import getData from '@/lib/getData'

export default async function BannerStrength() {
  const data = await getData(`/wp/v2/pages/${IDGLOBALAPI}`, 3600)
  const listCardStrength = data?.acf?.infomation

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
