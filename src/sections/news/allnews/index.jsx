import {Fragment} from 'react'
import ItemNews from '../ItemNews'

export default function AllNews() {
  return (
    <section className='container relative flex w-full h-fit mt-[3.51rem] justify-between pb-[6.59rem]'>
      <div className='flex flex-col w-[62.4451rem]'>
        <div className='h-[4.97804rem] bg-white rounded-[0.87848rem] flex justify-between items-center px-[1.76rem] mb-[0.88rem]'>
          <h2 className='font-semibold text-blue-700 h5'>Tin tức</h2>
          <div className='flex'>
            {Array(4)
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
        <div className='w-full bg-white p-[1.76rem] rounded-[0.87848rem]'>
          {Array(6)
            .fill(0)
            .map((_, index) => (
              <Fragment key={index}>
                <ItemNews isOption={true} />
                {index !== 5 && (
                  <hr className='w-full my-[1.76rem] h-[0.07rem] bg-[#EBF0F7]' />
                )}
              </Fragment>
            ))}
        </div>
      </div>
      <aside className='w-[22.47438rem] sticky top-[9.76rem] left-0 flex-shrink-0 bg-black h-[10rem]'></aside>
    </section>
  )
}
