import Image from 'next/image'

export default function ItemProductPayment({item}) {
  return (
    <div className='p-[0.59rem] h-fit w-full flex space-x-[0.88rem]'>
      <Image
        className='object-contain rounded-[0.3631rem] size-[5.27086rem]'
        src={
          item?.featuredImage?.url ||
          item?.product_image ||
          '/home/item-product.jpg'
        }
        alt={item?.featuredImage?.alt || item?.name}
        width={72}
        height={72}
      />
      <div className='flex flex-col justify-center space-x-[0.59rem]'>
        <h2>{item?.name}</h2>
        <ul className='flex '>
          <li className='rounded-[0.43924rem] bg-elevation-20 size-fit py-[0.44rem] px-[0.59rem] caption1 leading-[1.2] text-greyscale-40'>
            xanh min
          </li>
          <li className='rounded-[0.43924rem] bg-elevation-20 size-fit py-[0.44rem] px-[0.59rem] caption1 leading-[1.2] text-greyscale-40'>
            Gen 10th
          </li>
        </ul>
      </div>
      <div className='flex flex-col items-end justify-between'>
        <span className='font-medium caption1 text-greyscale-40'>x01</span>
        <div className='flex flex-col'>
          <span className='font-bold text-blue-600 caption1'>65.000đ</span>
          <span className='font-normal line-through giagoc text-greyscale-40'>
            110.000đ
          </span>
        </div>
      </div>
    </div>
  )
}
