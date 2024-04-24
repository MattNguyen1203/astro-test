import CardProduct from '@/components/cardproduct'
import Image from 'next/image'

const RelatedProduct = ({relatedProduct, session}) => {
  // const relatedProduct = new Array(5).fill(0)
  return (
    <>
      <div className='flex justify-between items-center bg-white py-[0.22rem] px-[0.59rem] rounded-[0.58565rem] mb-[0.88rem]'>
        <span className='uppercase font-semibold sub2 text-greyscale-80'>
          SẢN PHẨM TƯƠNG TỰ
        </span>

        <div className='flex items-center py-[0.88rem] px-[0.59rem] bg-elevation-20 rounded-[0.43924rem]'>
          <span className='caption1 font-medium text-blue-200 mr-[0.29rem]'>
            Xem tất cả
          </span>
          <Image
            src='/components/arrow.svg'
            alt='arrow icon'
            width={20}
            height={20}
            className='object-contain size-[0.87848rem]'
          />
        </div>
      </div>

      <div className='xmd:overflow-x-auto hidden-scrollbar'>
        <div className='grid grid-cols-5 gap-[0.88rem] xmd:flex xmd:gap-0 xmd:w-max'>
          {relatedProduct?.map((item, index) => (
            <div
              className='xmd:w-[15rem] xmd:mr-[0.88rem]'
              key={index}
            >
              <CardProduct
                product={item}
                session={session}
              />
            </div>
          ))}
        </div>
      </div>
    </>
  )
}

export default RelatedProduct
