import Image from 'next/image'
import Link from 'next/link'

export default function NotFound() {
  return (
    <div className='w-full h-[100vh] relative'>
      <Image
        className='size-full xmd:hidden tablet:hidden object-cover'
        alt='404'
        src={'/notfound.jpg'}
        width={1600}
        height={758}
        quality={100}
        draggable='false'
      />
      <Image
        className='size-full md:hidden object-cover'
        alt='404'
        src={'/notfound-res.jpg'}
        width={1600}
        height={758}
        quality={100}
        draggable='false'
      />
      <Image
        className='size-full xmd:hidden lg:hidden object-cover'
        alt='404'
        src={'/notfound-tablet.jpg'}
        width={1600}
        height={758}
        quality={100}
        draggable='false'
      />
      <div className='absolute xmd:w-full xmd:justify-center top-[50%] translate-y-[12rem] tablet:translate-y-[21rem] left-1/2 -translate-x-1/2 flex space-x-[0.59rem]'>
        <Link
          href={'/'}
          className='bg-white flex items-center space-x-[0.59rem] rounded-[0.58565rem] h-[3.22108rem] xmd:h-[2.34261rem] tablet:h-[2.92826rem] py-[0.73206rem] px-[1.46413rem] tablet:px-[1.1713rem] xmd:p-[0.73206rem]'
        >
          <svg
            className='xmd:hidden'
            xmlns='http://www.w3.org/2000/svg'
            width='16'
            height='16'
            viewBox='0 0 16 16'
            fill='none'
          >
            <path
              d='M13.3337 11.3334V7.63482C13.3337 7.27859 13.3334 7.10038 13.29 6.93462C13.2517 6.78772 13.1886 6.64871 13.1034 6.52309C13.0071 6.38134 12.8734 6.26379 12.6053 6.02922L9.40527 3.22922C8.90753 2.79369 8.65866 2.57604 8.37858 2.49321C8.13179 2.42023 7.86873 2.42023 7.62194 2.49321C7.34207 2.57598 7.09356 2.79343 6.59657 3.22829L3.39551 6.02922C3.12742 6.2638 2.99369 6.38134 2.89746 6.52309C2.81219 6.64871 2.74869 6.78772 2.71031 6.93462C2.66699 7.10038 2.66699 7.27859 2.66699 7.63482V11.3334C2.66699 11.9547 2.66699 12.2652 2.76849 12.5102C2.90381 12.8369 3.1632 13.0968 3.48991 13.2321C3.73494 13.3336 4.04556 13.3336 4.66682 13.3336C5.28808 13.3336 5.59905 13.3336 5.84408 13.2321C6.17078 13.0968 6.4301 12.837 6.56543 12.5103C6.66692 12.2653 6.66699 11.9546 6.66699 11.3334V10.6667C6.66699 9.93034 7.26395 9.33338 8.00033 9.33338C8.7367 9.33338 9.33366 9.93034 9.33366 10.6667V11.3334C9.33366 11.9546 9.33366 12.2653 9.43515 12.5103C9.57048 12.837 9.82987 13.0968 10.1566 13.2321C10.4016 13.3336 10.7122 13.3336 11.3335 13.3336C11.9547 13.3336 12.2657 13.3336 12.5107 13.2321C12.8374 13.0968 13.0968 12.8369 13.2321 12.5102C13.3336 12.2652 13.3337 11.9547 13.3337 11.3334Z'
              stroke='#204265'
              strokeWidth='2'
              strokeLinecap='round'
              strokeLinejoin='round'
            />
          </svg>
          <span className='button tablet:caption1 tablet:font-semibold xmd:caption xmd:font-semibold font-medium text-blue-500'>
            TRỞ VỀ TRANG CHỦ
          </span>
        </Link>
        <Link
          href={'/lien-he'}
          className='bg-white flex items-center space-x-[0.59rem] rounded-[0.58565rem] h-[3.22108rem] xmd:h-[2.34261rem] tablet:h-[2.92826rem] py-[0.73206rem] px-[1.46413rem] tablet:px-[1.1713rem] xmd:p-[0.73206rem]'
        >
          <svg
            className='xmd:hidden'
            xmlns='http://www.w3.org/2000/svg'
            width='16'
            height='16'
            viewBox='0 0 16 16'
            fill='none'
          >
            <path
              d='M6.33497 2.83815C6.13249 2.33193 5.64221 2 5.09701 2H3.26316C2.56554 2 2 2.5654 2 3.26302C2 9.19281 6.80719 14 12.737 14C13.4346 14 14 13.4344 14 12.7368L14.0003 10.9026C14.0003 10.3574 13.6685 9.86724 13.1622 9.66475L11.4046 8.96196C10.9499 8.78007 10.4322 8.86193 10.056 9.17546L9.60235 9.55378C9.07258 9.99526 8.29309 9.96015 7.80546 9.47252L6.52815 8.19404C6.04052 7.70641 6.00449 6.92756 6.44596 6.39779L6.82422 5.9442C7.13774 5.56797 7.22033 5.05011 7.03844 4.59539L6.33497 2.83815Z'
              stroke='#204265'
              strokeWidth='2'
              strokeLinecap='round'
              strokeLinejoin='round'
            />
          </svg>
          <span className='button tablet:caption1 tablet:font-semibold xmd:caption xmd:font-semibold font-medium text-blue-500'>
            LIÊN HỆ CHÚNG TÔI
          </span>
        </Link>
      </div>
    </div>
  )
}
