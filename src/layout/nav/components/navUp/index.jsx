import Image from 'next/image'
import Link from 'next/link'

export default function NavUp() {
  return (
    <div className='pt-[0.66rem] flex justify-between'>
      <Link
        className='w-[9rem] h-[2.31508rem] my-auto'
        href='/'
      >
        <Image
          className='object-cover size-full'
          src={'/layout/nav/logo-nav.svg'}
          alt='logo astromazing'
          width={123}
          height={32}
          priority
        />
      </Link>
      <div className='bg-blue-50 rounded-[6.5vw] p-[0.29rem] flex items-center'>
        <div className='w-[21.45rem] rounded-[6.5vw] bg-elevation-20 relative'>
          <label
            htmlFor='search'
            className='absolute top-1/2 -translate-y-1/2 right-[0.88rem] size-[1.46413rem]'
          >
            <Image
              className='object-cover size-full'
              src={'/layout/nav/search.svg'}
              alt='icon search'
              height={20}
              width={20}
            />
          </label>
          <input
            className='bg-transparent outline-none placeholder:text-greyscale-30 placeholder:font-medium placeholder:leading-[1.2] placeholder:tracking-[0.00878rem] py-[1.02rem] px-[0.88rem]'
            type='text'
            id='search'
            name='search'
            placeholder='Tìm kiếm sản phẩm'
          />
        </div>
        <ul className='flex ml-[0.58rem]'>
          <li>
            <Link
              className='caption1 font-medium text-blue-800 p-[0.88rem]'
              href='/tra-cuu'
            >
              Tra cứu đơn hàng
            </Link>
          </li>
          <li>
            <Link
              className='caption1 font-medium text-blue-800 p-[0.88rem]'
              href={'/goc-cong-nghe'}
            >
              Góc công nghệ
            </Link>
          </li>
          <li>
            <Link
              className='caption1 font-medium text-blue-800 p-[0.88rem]'
              href={'/cua-hang'}
            >
              Cửa hàng
            </Link>
          </li>
          <li>
            <Link
              className='caption1 font-medium text-blue-800 p-[0.88rem]'
              href={'/chinh-sach'}
            >
              Chính sách
            </Link>
          </li>
        </ul>
      </div>
      <div className='flex items-center'>
        <Link
          href={'/ca-nhan'}
          className='size-[2.63543rem] bg-elevation-20 rounded-[6.5vw] flex justify-center items-center mr-[0.88rem]'
        >
          <Image
            className='flex-shrink-0 object-cover size-[1.31772rem]'
            src={'/layout/nav/user.svg'}
            alt='icon user'
            width={18}
            height={18}
          />
        </Link>
        <Link
          href={'/gio-hang'}
          className='size-[2.63543rem] bg-elevation-20 rounded-[6.5vw] flex justify-center items-center'
        >
          <Image
            className='flex-shrink-0 object-cover size-[1.31772rem]'
            src={'/layout/nav/user.svg'}
            alt='icon user'
            width={18}
            height={18}
          />
        </Link>
      </div>
    </div>
  )
}
