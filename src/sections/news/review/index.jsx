import ItemTechnology from '@/sections/home/components/technologyconner/ItemTechnology'
import ItemNews from '../ItemNews'
import {Fragment} from 'react'

export default function Review() {
  return (
    <section className='mt-[3.51rem] container'>
      <div className='h-[4.97804rem] bg-white rounded-[0.87848rem] flex justify-between items-center px-[1.76rem] mb-[0.88rem]'>
        <h2 className='font-semibold text-blue-700 h5'>Review sản phẩm</h2>
        <div className='flex'>
          {Array(5)
            .fill(0)
            .map((_, index) => (
              <div
                key={index}
                className='font-semibold caption1 text-greyscale-80 py-[0.81rem] px-[1.46rem] rounded-[7.5rem] bg-[#F2F2F2] ml-[1.17rem] whitespace-nowrap'
              >
                MỚI NHẤT
              </div>
            ))}
        </div>
      </div>
      <div className='bg-white rounded-[0.87848rem] py-[1.46rem] pl-[1.68rem] pr-[1.02rem] flex h-[38.14056rem]'>
        <div className='w-[46.33968rem] h-full mr-[2.05rem]'>
          <ItemTechnology
            className='rounded-[0.87848rem]'
            boxClass='!p-[1.46rem]'
          />
        </div>
        <div className='flex flex-col flex-1'>
          {Array(3)
            .fill(0)
            .map((_, index) => (
              <Fragment key={index}>
                <ItemNews />
                {index !== 2 && (
                  <hr className='w-full my-[1.17rem] h-[0.07rem] bg-[#EBF0F7]' />
                )}
              </Fragment>
            ))}
        </div>
      </div>
    </section>
  )
}
