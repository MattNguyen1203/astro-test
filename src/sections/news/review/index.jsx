import ItemTechnology from '@/sections/home/components/technologyconner/ItemTechnology'
import ItemNews from '../ItemNews'
import {Fragment} from 'react'
import MenuNews from '../MenuNews'

export default function Review() {
  return (
    <section className='mt-[3.51rem] container'>
      <div className='h-[4.97804rem] xmd:h-[6.3rem] bg-white rounded-[0.87848rem] flex xmd:flex-col justify-between items-center xmd:items-start lg:px-[1.76rem] xmd:mb-[1.76rem] mb-[0.88rem] '>
        <h2 className='font-semibold text-blue-700 h5 xmd:mb-[0.88rem] whitespace-nowrap'>
          Review sản phẩm
        </h2>
        <MenuNews arr={5} />
      </div>
      <div className='bg-white xmd:p-0 rounded-[0.87848rem] py-[1.46rem] pl-[1.68rem] pr-[1.02rem] flex xmd:flex-col '>
        <div className='lg:w-[46.33968rem] lg:h-full lg:mr-[2.05rem]'>
          <ItemTechnology
            className='rounded-[0.87848rem]'
            boxClass='lg:!p-[1.46rem]'
            widthHeightImg='w-[57.9795rem] h-[36.01757rem] xmd:w-[26.28111rem] xmd:h-[16.32613rem]'
          />
        </div>
        <div className='relative w-full h-full xmd:h-[12.08rem] overflow-hidden'>
          <div className='flex flex-1 w-full overflow-hidden lg:flex-col xmd:absolute xmd:top-0 xmd:left-0 xmd:overflow-x-auto hidden-scrollbar'>
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
      </div>
    </section>
  )
}
