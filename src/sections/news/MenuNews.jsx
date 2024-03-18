export default function MenuNews({arr}) {
  return (
    <div className='relative w-full h-full overflow-hidden'>
      <div className='flex xmd:absolute top-0 left-0 xmd:w-full xmd:overflow-auto hidden-scrollbar'>
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
