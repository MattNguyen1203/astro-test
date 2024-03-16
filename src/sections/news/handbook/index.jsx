import ItemTechnology from '@/sections/home/components/technologyconner/ItemTechnology'

export default function HandBook() {
  return (
    <section className='mt-[1.76rem] container'>
      <div className='h-[4.97804rem] bg-white rounded-[0.87848rem] flex justify-between items-center px-[1.76rem] mb-[1.76rem]'>
        <h2 className='font-semibold text-blue-700 h5'>Cẩm nang sử dụng</h2>
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
      <div className='w-full h-[36.01757rem] flex'>
        <div className='w-[57.9795rem] h-full rounded-[1.1713rem] overflow-hidden mr-[1.83rem] flex-shrink-0'>
          <ItemTechnology boxClass='pt-[1.83rem] pb-[1.17rem] px-[1.46rem]' />
        </div>
        <div className='grid grid-cols-1 grid-rows-2 gap-y-[1.54rem]'>
          <ItemTechnology
            className='rounded-[1.1713rem]'
            boxClass='!p-[1.17rem]'
          />
          <ItemTechnology
            className='rounded-[1.1713rem]'
            boxClass='!p-[1.17rem]'
          />
        </div>
      </div>
      <div className='relative mt-[1.83rem] h-[17.13031rem]'>
        <div className='grid grid-cols-3 gap-x-[1.83rem] h-full'>
          {Array(3)
            .fill(0)
            .map((_, index) => (
              <ItemTechnology
                key={index}
                className='rounded-[1.1713rem]'
                boxClass='!p-[1.17rem]'
              />
            ))}
        </div>
      </div>
    </section>
  )
}
