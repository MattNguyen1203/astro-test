import getData from '@/lib/getData'
import ItemCategory from './ItemCategory'

export default async function CategoriesIndex({isMobile}) {
  const categories = await getData(
    '/okhub/v1/acf-categories/?page_id=861&acf_name=phu_kien_cho_thiet_bi&cat_slug=device',
  )
  return (
    <div className='flex md:flex-col md:mt-[1.76rem] xmd:absolute xmd:top-1/2 xmd:-translate-y-1/2 xmd:left-0 xmd:pr-[0.59rem] xmd:w-fit xmd:min-w-fit'>
      {categories?.map((category, index) => (
        <ItemCategory
          key={index}
          index={index}
          isMobile={isMobile}
          category={category}
        />
      ))}
      <div className='w-[0.59rem] min-w-[0.59rem]'></div>
    </div>
  )
}
