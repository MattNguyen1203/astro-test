import Image from 'next/image'
import Link from 'next/link'

export default function FlashVoucher() {
  return (
    <section className='w-full bg-linearFlash backdrop-blur-[5px] h-[70vh]'>
      <div className='container pt-[3.5rem] '>
        <div className='flex items-center justify-between pb-[2.05rem]'>
          <Image
            className='w-[32.91519rem] h-[1.87rem] flex-shrink-0 object-cover'
            src={'/home/flash-voucher.svg'}
            alt='flash voucher'
            width={530}
            height={30}
          />
          <div className='flex *:ml-[0.5rem]'>
            <div className='size-[4.375rem] flex justify-center items-center bg-white rounded-[0.25rem] ml-0'>
              <span className='text-[2.04978rem] leading-[1.2] font-bold bg-linearFlashText bg-clip-text text-transparent'>
                22
              </span>
            </div>
            <div className='size-[4.375rem] flex justify-center items-center bg-white rounded-[0.25rem]'>
              <span className='text-[2.04978rem] leading-[1.2] font-bold bg-linearFlashText bg-clip-text text-transparent'>
                22
              </span>
            </div>
            <div className='size-[4.375rem] flex justify-center items-center bg-white rounded-[0.25rem]'>
              <span className='text-[2.04978rem] leading-[1.2] font-bold bg-linearFlashText bg-clip-text text-transparent'>
                22
              </span>
            </div>
          </div>
        </div>
        <div className='grid grid-cols-4 grid-rows-2 gap-x-[0.79rem] gap-y-[1rem]'>
          {new Array(8).fill(0).map((e, index) => (
            <ItemVoucher
              key={index}
              category={'Bút cảm ứng'}
              src={'/layout/nav/pen.svg'}
              title={'Giảm 15%'}
              content={'Đơn Tối thiểu đ500k <br> Giảm Tối đa đ30K'}
            />
          ))}
        </div>
        <div className='mt-[7.91rem] flex h-[8.56515rem]'>
          <div className='bg-[#EEB357] w-1/2 relative rounded-tl-[1.1713rem] rounded-bl-[1.1713rem]'>
            <Image
              className='absolute bottom-0 left-0 w-[9.39971rem] h-[15.66618rem]'
              src={'/home/girl-voucher.png'}
              alt='girl voucher'
              width={130}
              height={215}
            />
          </div>
          <div className='bg-[#10273F] h6 font-semibold w-1/2 flex justify-center items-center rounded-tr-[1.1713rem] rounded-br-[1.1713rem] text-white'>
            <Link href={'/dang-ky'}>ĐĂNG KÝ /</Link>
            <Link href={'/dang-nhap'}>ĐĂNG NHẬP NGAY</Link>
          </div>
        </div>
      </div>
    </section>
  )
}

const ItemVoucher = ({src, alt = '', category, title, content}) => {
  return (
    <div className='w-full h-[5.125rem] rounded-[0.5rem] bg-white overflow-hidden flex'>
      <div
        className='size-[5.125rem] flex flex-col justify-center items-center'
        style={{
          background: 'linear-gradient(44deg, #FFF5E6 50.63%, #FFE4B9 106.58%)',
        }}
      >
        <Image
          className='size-[2.34261rem] object-cover'
          src={src}
          alt={alt || 'icon voucher'}
          width={20}
          height={20}
        />
        <span className='text-[0.65886rem] text-brown-700 inline-block mt-[0.44rem]'>
          {category}
        </span>
      </div>
      <div className='px-[0.88rem] flex justify-between items-center flex-1'>
        <div className='flex flex-col'>
          <h2 className='font-medium button text-greyscale-80'>{title}</h2>
          <p
            className='caption2 font-normal mt-[0.29rem] text-greyscale-40'
            dangerouslySetInnerHTML={{__html: content}}
          />
        </div>
        <button
          className='p-[0.51rem] rounded-[0.30476rem] size-fit caption2 font-semibold text-white'
          style={{
            background:
              'linear-gradient(104deg, #E78C03 -3.95%, #FFB84F 106.72%)',
          }}
        >
          COPY MÃ
        </button>
      </div>
    </div>
  )
}
ItemVoucher.displayName = 'ListItem'
