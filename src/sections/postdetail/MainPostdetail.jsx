import './postdetail.css'
import Image from 'next/image'
import ContentPostDetail from '@/sections/postdetail/ContentPostDetail'
const MainPostdetail = ({data}) => {
  return (
    <div className='flex relative flex-col space-y-[0.73206rem] items-start self-stretch md:p-[1.46413rem] rounded-[0.87848rem] bg-[#FFF]'>
      {/* thumbnail */}
      <Image
        alt='ss'
        src={data?.thumbnail}
        className='md:w-[59.51684rem] md:h-[36.53001rem] mb-[1rem] rounded-[1.1713rem] shrink-0'
        width={9999}
        height={9999}
      />
      {/* date */}
      <div
        className={
          'xmd:absolute top-3 left-3 z-50 flex p-[0.58565rem] !mt-0 items-center space-x-[0.29283rem] rounded-[0.58565rem] md:bg-[#17395C] bg-white bg-opacity-90 '
        }
      >
        <svg
          className={'xmd:stroke-black stroke-white '}
          width='14'
          height='15'
          viewBox='0 0 14 15'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
        >
          <g clip-path='url(#clip0_48_8791)'>
            <path
              d='M2.33398 5.0293H11.6673M2.33398 5.0293V10.1627C2.33398 10.8161 2.33398 11.1427 2.46114 11.3922C2.573 11.6118 2.75134 11.7904 2.97087 11.9023C3.22019 12.0293 3.54673 12.0293 4.19885 12.0293H9.80245C10.4546 12.0293 10.7806 12.0293 11.03 11.9023C11.2495 11.7904 11.4284 11.6118 11.5403 11.3922C11.6673 11.1429 11.6673 10.8168 11.6673 10.1647V5.0293M2.33398 5.0293V4.56274C2.33398 3.90935 2.33398 3.58241 2.46114 3.33284C2.573 3.11332 2.75134 2.93497 2.97087 2.82312C3.22043 2.69596 3.54737 2.69596 4.20077 2.69596H4.66732M11.6673 5.0293V4.56083C11.6673 3.90871 11.6673 3.58216 11.5403 3.33284C11.4284 3.11332 11.2495 2.93497 11.03 2.82312C10.7804 2.69596 10.4542 2.69596 9.80077 2.69596H9.33398M9.33398 1.5293V2.69596M9.33398 2.69596H4.66732M4.66732 1.5293V2.69596'
              stroke-width='1.33333'
              stroke-linecap='round'
              stroke-linejoin='round'
            />
          </g>
          <defs>
            <clipPath id='clip0_48_8791'>
              <rect
                width='14'
                height='14'
                fill='white'
                transform='translate(0 0.363281)'
              />
            </clipPath>
          </defs>
        </svg>
        <div className={'caption font-medium xmd:text-black text-[#EBF0F7]'}>
          {data?.post_date.split(' ')[0]}
        </div>
      </div>
      {/* main title */}
      <div className='self-stretch font-semibold h4 xmd:h5 xmd:text-[1.46413rem] text-greyscale-80 font-svnGraphik'>
        {data?.post_title}
      </div>

      {/* content */}
      <ContentPostDetail data={data?.post_content} />
    </div>
  )
}

export default MainPostdetail
