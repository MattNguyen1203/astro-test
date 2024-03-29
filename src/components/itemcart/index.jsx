import Image from 'next/image'
import ButtonChange from './ButtonChange'
import BoxCheck from '../sheetcart/BoxCheck'
import TemVoucher from '../popupproduct/TemVoucher'
import Variantion from './Variantion'

export default function ItemCart({cart, setCart, index, isMobile}) {
  return (
    <article className='rounded-[0.58565rem] bg-white shadow-[2px_2px_12px_0px_rgba(0,0,0,0.02),-3px_2px_20px_0px_rgba(0,0,0,0.04)] py-[0.73rem] pl-[0.59rem] pr-[1.17rem] flex'>
      <div className='flex flex-col items-center justify-center px-[0.59rem]'>
        <BoxCheck
          setCart={setCart}
          cart={cart}
          index={index}
        />
        <button className='w-[1.75695rem] h-fit block mt-[0.88rem]'>
          <Image
            className='w-full h-auto'
            src={'/components/delete.svg'}
            alt='icon delete'
            width={24}
            height={24}
          />
        </button>
      </div>
      <div className='w-[6.44217rem] bg-white rounded-[0.48023rem] overflow-hidden flex-shrink-0'>
        <Image
          className='object-contain size-full'
          src={'/home/item-product.jpg'}
          alt='item product'
          width={82}
          height={82}
        />
      </div>
      <div className='flex xmd:flex-col'>
        <div className='pl-[0.88rem] flex flex-col justify-center'>
          <div>
            <h2 className='font-medium line-clamp-1 caption1 text-greyscale-40'>
              Bút cảm ứng AstroMazing Pencil GD cho iPad
            </h2>
            {!isMobile && <TemVoucher className='mt-[0.44rem]' />}
          </div>
          <div className='relative flex w-full mt-auto'>
            <Variantion className='mr-[0.59rem]' />
            <Variantion />
          </div>
        </div>
        <div className='flex justify-between md:flex-col'>
          <div className='flex flex-col items-center'>
            <span className='font-semibold text-blue-600 sub2'>65.000đ</span>
            <span className='font-normal line-through giagoc text-greyscale-40'>
              130.000đ
            </span>
          </div>
          <ButtonChange />
        </div>
      </div>
    </article>
  )
}
