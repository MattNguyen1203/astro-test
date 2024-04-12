import getData from '@/lib/getData'
import BoxLevelUpYourTech from './BoxLevelUpYourTech'
import {slugAccessory} from '@/lib/constants'

export default async function LevelUpYourTech({isMobile}) {
  const data = (await getData('/okhub/v1/category/category')) || []
  const categories = data?.find((e) => e?.slug === slugAccessory)?.children
  const productCategory = await getData(
    `/okhub/v1/product/productByCategory/${categories && categories[0]?.slug}`,
  )

  return (
    <BoxLevelUpYourTech
      categories={categories}
      data={productCategory}
      isMobile={isMobile}
    />
  )
}
