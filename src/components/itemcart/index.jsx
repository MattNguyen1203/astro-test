import Image from 'next/image'
import ButtonChange from './ButtonChange'
import BoxCheck from '../sheetcart/BoxCheck'

export default function ItemCart({cart, setCart, index}) {
  return (
    <article className='rounded-[0.58565rem] bg-white shadow-[2px_2px_12px_0px_rgba(0,0,0,0.02),-3px_2px_20px_0px_rgba(0,0,0,0.04)] py-[0.73rem] pl-[0.59rem] pr-[1.17rem] flex'>
      <div className='flex flex-col items-center justify-center px-[0.59rem]'>
        <BoxCheck
          setCart={setCart}
          cart={cart}
          index={index}
        />
        <Image
          className='w-[1.75695rem] h-auto block mt-[0.88rem]'
          src={'/components/delete.svg'}
          alt='icon delete'
          width={24}
          height={24}
        />
      </div>
      <div className='w-[6.44217rem] bg-white rounded-[0.48023rem] overflow-hidden'>
        <Image
          className='object-contain size-full'
          src={'/home/item-product.jpg'}
          alt='item product'
          width={82}
          height={82}
        />
      </div>
      <div className='pl-[0.88rem]'>
        <h2>Bút cảm ứng AstroMazing Pencil GD cho iPad</h2>
      </div>
      <div>
        <ButtonChange />
      </div>
    </article>
  )
}
