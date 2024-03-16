export default function SearchAccessory({isMobile}) {
  return (
    <section className='mt-[1.76rem] xmd:mt-[2.34rem]'>
      <div className='md:w-[43.7rem] mx-auto xmd:container'>
        <h1 className='text-center h4 tracking-[0.00568rem] text-greyscale-80 font-medium xmd:h5 xmd:font-semibold xmd:tracking-[0.00366rem]'>
          Tìm kiếm phụ kiện theo thiết bị
        </h1>
        <form className='h-[3.51391rem] w-full flex mt-[2.34rem] mb-[1.17rem] xmd:my-[1.17rem]'>
          <div className='w-full border border-solid border-greyscale-30 rounded-[0.58565rem] h-full flex justify-between xmd:border-blue-100'>
            <input type='text' />
            {!isMobile && (
              <button className='w-[10.2489rem] flex-shrink-0 rounded-tr-[0.58565rem] rounded-br-[0.58565rem] bg-blue-600 button font-semibold text-white flex justify-center items-center'>
                TÌM KIẾM
              </button>
            )}
          </div>
        </form>
        <span className='font-medium caption1 text-greyscale-70'>
          Từ khoá nổi bật
        </span>
        <ul className='mt-[0.88rem] flex h-[2.04978rem]'>
          {Array(3)
            .fill(0)
            .map((_, index) => (
              <li
                key={index}
                className='w-fit h-full flex items-center px-[0.59rem] rounded-[0.29283rem] bg-elevation-20 text-greyscale-30 caption1 font-normal mr-[0.73rem] xmd:tracking-[0.00439rem]'
              >
                iPad Gen 10
              </li>
            ))}
        </ul>
      </div>
    </section>
  )
}
