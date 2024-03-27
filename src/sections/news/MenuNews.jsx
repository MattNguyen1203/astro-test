export default function MenuNews({arr}) {
  return (
    <div className='relative flex items-center justify-end overflow-hidden size-full'>
      <div className='flex xmd:top-0 xmd:left-0 xmd:absolute xmd:w-full xmd:overflow-auto hidden-scrollbar '>
        {Array(arr)
          .fill(0)
          .map((_, index) => (
            <div
              key={index}
              style={{marginLeft: index == 0 ? '' : '1.17rem'}}
              className='font-semibold xmd:mt-[0.88rem] caption1 text-greyscale-80 py-[0.81rem] px-[1.46rem] rounded-[7.5rem] bg-[#F2F2F2] whitespace-nowrap'
            >
              MỚI NHẤT
            </div>
          ))}
      </div>
    </div>
  )
}
