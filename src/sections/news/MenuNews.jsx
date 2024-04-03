export default function MenuNews({categories = []}) {
  return (
    <div className='relative flex items-center justify-end overflow-hidden size-full'>
      <div className='flex xmd:top-0 xmd:left-0 xmd:absolute xmd:w-full xmd:overflow-auto hidden-scrollbar '>
        <button className='font-semibold xmd:mt-[0.88rem] caption1 text-greyscale-80 py-[0.81rem] px-[1.46rem] rounded-[7.5rem] bg-[#F2F2F2] whitespace-nowrap'>
          Mới nhất
        </button>
        {categories?.map((category, index) => (
          <button
            key={index}
            className='font-semibold xmd:mt-[0.88rem] caption1 text-greyscale-80 py-[0.81rem] px-[1.46rem] rounded-[7.5rem] bg-[#F2F2F2] whitespace-nowrap ml-[1.17rem]'
          >
            {category?.name}
          </button>
        ))}
      </div>
    </div>
  )
}
