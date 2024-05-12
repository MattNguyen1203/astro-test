import {IDGLOBALAPI} from '@/lib/IdPageAPI'
import getData from '@/lib/getData'
import Image from 'next/image'
import Link from 'next/link'

export default async function CategoriesProduct() {
  const categories = await getData(
    `/okhub/v1/acf-categories/?page_id=${IDGLOBALAPI}&cat_slug=navbar&cat_slug=product_cat`,
  )
  return (
    <div className='pt-[2.34rem] w-full'>
      <h2 className='font-semibold text-center sub1 text-greyscale-80 mb-[1.17rem]'>
        DANH MỤC SẢN PHẨM
      </h2>
      <div className='bg-[linear-gradient(153deg,#FFE5CB_0%,rgba(255,255,255,0.00)_44.86%)] pt-[0.95rem] relative'>
        <div className='absolute -bottom-[0.95rem] left-0 size-full z-[5] bg-[linear-gradient(333deg,#FFE5CB_0%,rgba(255,255,255,0.00)_37.65%)]'></div>
        <div className='grid grid-cols-4 grid-rows-2 gap-[0.59rem] container relative z-10'>
          {categories?.map((category, index) => (
            <Link
              href={`/san-pham/${category?.slug}`}
              key={index}
              className='flex flex-col p-[0.59rem] rounded-[0.58565rem] bg-white shadow-[2px_4px_20px_0px_rgba(2,87,176,0.04),-6px_2px_32px_0px_rgba(35,101,170,0.04)] justify-between items-center'
            >
              <Image
                className='size-[1.1713rem] object-cover'
                src={category?.thumbnail || '/layout/nav/pen.svg'}
                alt={category?.name}
                width={24}
                height={24}
              />
              <span className='block font-medium text-center line-clamp-2 caption text-greyscale-40'>
                {category?.name}
              </span>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}
