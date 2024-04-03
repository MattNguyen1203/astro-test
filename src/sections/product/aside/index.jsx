import './style.css'

import {Input} from '@/components/ui/input'
import SocialProduct from './SocialProduct'
import WrapperBoxFilter from './WrapperBoxFilter'

const arr = [
  {
    title: 'iPad',
  },
  {
    title: 'Android',
  },
  {
    title: 'Surface',
  },
  {
    title: 'Surface',
  },
]

export default function Aside() {
  return (
    <aside className='w-[16.17862rem] h-fit sticky top-[9.76rem] left-0 z-[99]'>
      <div className='w-full rounded-[0.87848rem] bg-white shadow-[2px_4px_20px_0px_rgba(0,0,0,0.02)] p-[0.88rem] h-fit'>
        <WrapperBoxFilter />
        <hr className='w-full h-[0.07321rem] bg-[rgba(236,236,236,0.70)] my-[0.88rem]' />
        <span className='caption1 text-greyscale-80 font-semibold leading-[1.2] block pl-[0.15rem]'>
          Thiết bị
        </span>
        <ul className='flex flex-wrap mt-[0.14rem] *:px-[0.73rem] *:py-[0.51rem] *:rounded-[0.43924rem] *:bg-elevation-30 *:size-fit *:mt-[0.59rem] *:mr-[0.59rem] *:caption font-light text-greyscale-30 select-none'>
          {arr.map((e, index) => (
            <li
              key={index}
              className=''
            >
              {e.title}
            </li>
          ))}
        </ul>
        <hr className='w-full h-[0.07321rem] bg-[rgba(236,236,236,0.70)] my-[0.88rem]' />
        <span className='caption1 text-greyscale-80 font-semibold leading-[1.2] block pl-[0.15rem]'>
          Phân loại
        </span>
        <label
          htmlFor='combo'
          className='mt-[0.73rem] mb-[0.59rem] flex items-center select-none cursor-pointer'
        >
          <Input
            id='combo'
            name='combo'
            type='checkbox'
            className='size-[1.46413rem]'
          />
          <span className='ml-[0.59rem] inline-block caption font-normal text-greyscale-30'>
            Sản phẩm combo
          </span>
        </label>
        <label
          htmlFor='alone'
          className='flex items-center cursor-pointer select-none'
        >
          <Input
            id='alone'
            name='alone'
            type='checkbox'
            className='size-[1.46413rem]'
          />
          <span className='ml-[0.59rem] inline-block caption font-normal text-greyscale-30'>
            Sản phẩm lẻ
          </span>
        </label>
      </div>
      <div className='mt-[1.46rem]'>
        <span className='font-medium text-greyscale-30 block pl-[0.59rem]'>
          Ghé thăm gian hàng tại:
        </span>
        <SocialProduct priority={true} />
      </div>
    </aside>
  )
}
