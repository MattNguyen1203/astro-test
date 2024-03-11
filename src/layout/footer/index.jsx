import Image from 'next/image'
import FormEmail from './components/formmail'
import Social from './components/social'
import InfoFooter from './components/infofooter'
import Link from 'next/link'

export default function Footer() {
  return (
    <footer className='w-full overflow-x-hidden bg-elevation-20'>
      <div className='h-[4.46559rem] bg-[linear-gradient(0deg,#10273F_0%,#10273F_100%)] flex items-center'>
        <div className='container flex justify-between items-center pr-[0.95rem]'>
          <Social />
          <FormEmail />
        </div>
      </div>
      <div className='container pr-[5.27rem] mb-[3.37rem]'>
        <Image
          className='w-[25.56245rem] h-[2.47262rem] object-cover block mt-[2.93rem] mb-[2.87rem]'
          src={'/layout/footer/t-astro.svg'}
          alt='text astromazing'
          width={350}
          height={35}
        />
        <InfoFooter />
      </div>
      <hr className='bg-[#E2E2E299]' />
      <div className='container'>
        <div className='font-normal body2 text-greyscale-30 block mb-[1.02rem] mt-[1.39rem]'>
          Bản quyền thuộc về AstroMazing{' '}
          <Link
            target='_blank'
            href={'https://okhub.vn/'}
          >
            | Cung cấp bởi OkHub Agency
          </Link>
        </div>
      </div>
    </footer>
  )
}
