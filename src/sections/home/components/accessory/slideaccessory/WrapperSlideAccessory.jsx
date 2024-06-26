import getData from '@/lib/getData'
import SlideAccessory from '.'

export default async function WrapperSlideAccessory({session, isIPhone}) {
  const categories = await getData(
    '/okhub/v1/acf-categories/?page_id=861&acf_name=phu_kien_cho_thiet_bi&cat_slug=device',
  )
  const products = await getData(
    `/okhub/v1/product/filter/products?device=${categories?.[0]?.slug}`,
  )

  console.log('wrapper', isIPhone)
  return (
    <SlideAccessory
      isIPhone={isIPhone}
      products={products}
      session={session}
      categories={categories}
    />
  )
}
