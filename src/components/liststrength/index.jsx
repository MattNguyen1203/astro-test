import CardStrength from '@/components/cardstrength'
import {IDGLOBALAPI} from '@/lib/IdPageAPI'
import getData from '@/lib/getData'

export default async function ListStrength() {
  const data = await getData(`/wp/v2/pages/${IDGLOBALAPI}`, 3600)
  const listCardStrength = data?.acf?.infomation

  return (
    <section className='py-[2.71rem] xmd:py-[3.22rem] bg-white relative z-10'>
      <div
        className='container flex justify-between xmd:grid xmd:grid-cols-2 xmd:gap-[0.59rem]
      tablet:grid tablet:grid-cols-2 tablet:gap-[2rem]'
      >
        {listCardStrength?.map((e, index) => (
          <CardStrength
            item={e}
            key={index}
          />
        ))}
      </div>
    </section>
  )
}
