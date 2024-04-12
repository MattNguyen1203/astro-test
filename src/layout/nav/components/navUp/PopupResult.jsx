'use client'
import {useRouter} from 'next/navigation'
import ProductSuggest from './ProductSuggest'
import useStore from '@/app/(store)/store'

export default function PopupResult({
  productSuggest,
  categories = [],
  value,
  data,
}) {
  const router = useRouter()
  const setIsFocusSearchNav = useStore((state) => state.setIsFocusSearchNav)

  const categorySearch =
    categories?.filter((e) =>
      e?.name?.toLowerCase()?.includes(value.toLowerCase()),
    )?.length > 0 && value
      ? categories?.filter((e) =>
          e?.name?.toLowerCase()?.includes(value.toLowerCase()),
        )
      : categories?.slice(0, 3)

  return (
    <div className='p-[1.76rem] bg-white absolute -bottom-[1.1rem] left-0 w-full h-fit translate-y-full xmd:-bottom-[0.7rem]'>
      <span className='font-medium select-none button text-greyscale-40'>
        Có phải bạn muốn tìm kiếm
      </span>
      <ul className='flex flex-col mt-[1.02rem] *:py-[0.44rem] *:cursor-pointer '>
        {categorySearch?.map((category, index) => (
          <li
            onClick={() => {
              setIsFocusSearchNav(false)
              router.push(`/san-pham/${category?.slug}`)
            }}
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
        value={value}
      />
    </div>
  )
}
