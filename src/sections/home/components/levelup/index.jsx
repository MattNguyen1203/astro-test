import getData from '@/lib/getData'
import BoxLevelUpYourTech from './BoxLevelUpYourTech'
import {slugAccessory} from '@/lib/constants'

export default async function LevelUpYourTech({isMobile}) {
  const data = (await getData('/okhub/v1/category/category')) || []
  const categories = data?.find((e) => e?.slug === slugAccessory)?.children
  console.log('🚀 ~ LevelUpYourTech ~ categories:', categories)
  const productCategory = await getData(
    `/okhub/v1/product/productByCategory/${data[0]?.slug}?limit=16&page=1`,
  )

  return (
    <BoxLevelUpYourTech
      categories={categories}
      products={productCategory}
      isMobile={isMobile}
    />
  )
}
