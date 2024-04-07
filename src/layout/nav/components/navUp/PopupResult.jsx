'use client'
import ProductSuggest from './ProductSuggest'

export default function PopupResult({
  productSuggest,
  categories = [],
  isValue,
  data,
}) {
  console.log('🚀 ~ isValue:', isValue)
  const categorySearch =
    categories?.filter((e) =>
      e?.name?.toLowerCase()?.includes(isValue.toLowerCase()),
    )?.length > 0 && isValue
      ? categories?.filter((e) =>
          e?.name?.toLowerCase()?.includes(isValue.toLowerCase()),
        )
      : categories?.slice(0, 3)
  return (
    <div className='p-[1.76rem] bg-white absolute -bottom-[1.1rem] left-0 w-full h-fit translate-y-full'>
      <span className='font-medium select-none button text-greyscale-40'>
        Có phải bạn muốn tìm kiếm
      </span>
      <ul className='flex flex-col mt-[1.02rem] *:py-[0.44rem] *:cursor-pointer '>
        {categorySearch?.map((category, index) => (
          <li
            className='transition-all duration-300 hover:bg-greyscale-20/50 group rounded-[0.4rem]'
            key={index}
          >
            <span className='font-medium button text-greyscale-80 group-hover:translate-x-[1rem] inline-block transition-all duration-200'>
              {category?.name}
            </span>
          </li>
        ))}
      </ul>
      <hr className='bg-[#E5E7EB] w-full h-[0.07321rem] mt-[1.32rem] mb-[1.76rem]' />
      <ProductSuggest
        productSuggest={productSuggest}
        data={data}
      />
    </div>
  )
}
