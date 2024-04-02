'use client'
import ProductSuggest from './ProductSuggest'

const keySuggests = [
  {
    title: 'Bút cảm ứng cho ipad',
  },
  {
    title: 'Ốp bảo vệ iPad',
  },
  {
    title: 'Kính cường lực iPad Pro',
  },
]

export default function PopupResult({productSuggest}) {
  return (
    <div className='p-[1.76rem] bg-white absolute -bottom-[1.1rem] left-0 w-full h-fit translate-y-full'>
      <span className='font-medium select-none button text-greyscale-40'>
        Có phải bạn muốn tìm kiếm
      </span>
      <ul className='flex flex-col mt-[1.02rem] *:py-[0.44rem] *:cursor-pointer '>
        {keySuggests.map((e, index) => (
          <li
            className='transition-all duration-300 hover:bg-greyscale-20/50 group rounded-[0.4rem]'
            key={index}
          >
            <span className='font-medium button text-greyscale-80 group-hover:translate-x-[1rem] inline-block transition-all duration-200'>
              {e.title}
            </span>
          </li>
        ))}
      </ul>
      <hr className='bg-[#E5E7EB] w-full h-[0.07321rem] mt-[1.32rem] mb-[1.76rem]' />
      <ProductSuggest productSuggest={productSuggest} />
    </div>
  )
}
