import Image from 'next/image'

export default function PreOder() {
  return (
    <div className='container h-[8.05rem] bg-white relative rounded-[0.87848rem] flex'>
      <Image
        className='w-[11.9rem] h-[11.7rem] object-cover absolute -left-[2.12rem] bottom-0 z-50'
        src={'/home/customer-preoder.png'}
        alt='customer'
        width={165}
        height={165}
      />
      <div className='w-[48.16984rem] h-full relative group'>
        <div className='relative z-10 size-full rounded-tr-[0.87848rem] rounded-br-[0.87848rem] bg-white before:absolute before:origin-bottom-right before:size-0 before:bg-blue-700 before:rounded-tr-[0.87848rem] before:rounded-br-[0.87848rem] group-hover:before:size-full before:transition-all before:duration-700 before:right-0 before:bottom-0'>
          <div className='flex'>
            <div className='flex flex-col'>
              <h3 className='font-bold text-blue-600 h5'>
                ĐẶT TRƯỚC SẢN PHẨM MỚI
              </h3>
              <span className='mt-[0.59rem] text-blue-600 font-medium'>
                iPhone 14 pro max sắp ra mắt
              </span>
            </div>
            <div className='size-[3.51391rem] relative'>
              <Image
                className='absolute top-0 left-0 z-10 object-contain transition-all duration-500 size-full group-hover:z-0 group-hover:opacity-0'
                src={'/home/cart-preoder-blue.svg'}
                alt='cart blue'
                width={38}
                height={48}
              />
              <Image
                className='absolute top-0 left-0 z-0 object-contain transition-all duration-500 opacity-0 size-full group-hover:z-10 group-hover:opacity-100'
                src={'/home/cart-preoder-white.svg'}
                alt='cart blue'
                width={38}
                height={48}
              />
            </div>
          </div>
        </div>
        <div className='absolute top-0 w-[17.2rem] h-full right-[1rem] bg-[linear-gradient(90deg,#FFF_5.23%,rgba(255,255,255,0.00)_89%)] translate-x-full'></div>
      </div>
      <div className='flex-1 h-full bg-[#ffedd2] rounded-tr-[0.87848rem] rounded-br-[0.87848rem]'></div>
    </div>
  )
}
