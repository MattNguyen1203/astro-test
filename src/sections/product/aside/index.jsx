import './style.css'

import SocialProduct from './SocialProduct'
import WrapperBoxFilter from './WrapperBoxFilter'
import Special from './Special'
import Device from './Device'
import {Skeleton} from '@/components/ui/skeleton'
import getData from '@/lib/getData'
import {IDGLOBALAPI} from '@/lib/IdPageAPI'

export default async function Aside() {
  const devices = await getData('/okhub/v1/product/devices')
  const linkSocials = await getData(`/wp/v2/pages/${IDGLOBALAPI}`)
  return (
    <aside className='w-[16.17862rem] h-fit sticky top-[9.76rem] left-0 z-[99]'>
      <div className='w-full rounded-[0.87848rem] bg-white shadow-[2px_4px_20px_0px_rgba(0,0,0,0.02)] p-[0.88rem] h-fit'>
        <WrapperBoxFilter />
        <hr className='w-full h-[0.07321rem] bg-[rgba(236,236,236,0.70)] my-[0.88rem]' />
        <span className='caption1 text-greyscale-80 font-semibold leading-[1.2] block pl-[0.15rem]'>
          Thiết bị
        </span>
        <Device devices={devices} />
        <hr className='w-full h-[0.07321rem] bg-[rgba(236,236,236,0.70)] my-[0.88rem]' />
        <span className='caption1 text-greyscale-80 font-semibold leading-[1.2] block pl-[0.15rem]'>
          Phân loại
        </span>
        <Special />
      </div>
      <div className='mt-[1.46rem]'>
        <span className='font-medium text-greyscale-30 block pl-[0.59rem]'>
          Ghé thăm gian hàng tại:
        </span>
        <SocialProduct
          linkSocials={linkSocials}
          priority={true}
        />
      </div>
    </aside>
  )
}

const AsideLoading = () => {
  return (
    <aside className='w-[16.17862rem] h-[20rem] sticky top-[9.76rem] left-0 z-[99] rounded-[0.87848rem] overflow-hidden'>
      <Skeleton className='size-full' />
    </aside>
  )
}
AsideLoading.displayName = 'AsideLoading'
export {AsideLoading}
