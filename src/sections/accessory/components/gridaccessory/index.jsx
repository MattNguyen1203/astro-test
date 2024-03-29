import CardProduct from '@/components/cardproduct'
import Image from 'next/image'

export default function GridAccessory({isMobile}) {
  return (
    <section className='md:w-[77rem] mx-auto flex justify-between mt-[3.51rem] pb-[3.81rem] relative'>
      <div className='md:w-[69.9rem]'>
        <div className='w-full xmd:py-[0.59rem] xmd:px-[0.88rem] xmd:bg-white xmd:h-fit xmd:flex xmd:justify-between xmd:relative'>
          <h2 className='font-medium text-center h5 text-greyscale-80 md:mb-[2.34rem] xmd:text-[1.31772rem] xmd:tracking-[0.01318rem] xmd:font-semibold'>
            Phụ kiện nổi bật
          </h2>
          {isMobile && (
            <>
              <div className='w-[6.95461rem] h-[2.92826rem] pl-[0.29rem] pr-[0.88rem] flex justify-between items-center rounded-[0.58565rem] bg-elevation-20 relative'>
                <div className='size-[2.34261rem] flex justify-center items-center'>
                  <Image
                    className='w-[1.14546rem] h-[1.19824rem] object-contain'
                    src={'/accessory/icon-filter.svg'}
                    alt='icon filter'
                    width={18}
                    height={18}
                  />
                </div>
                <span className='font-medium caption1 text-greyscale-70'>
                  Sắp xếp
                </span>
              </div>
              <span className='absolute block w-fit bottom-[0.59rem] left-[0.88rem] caption1 font-normal tracking-[0.00439rem] text-greyscale-20'>
                (222 sản phẩm)
              </span>
            </>
          )}
        </div>
        <div className='grid grid-cols-4 grid-rows-5 gap-x-[0.88rem] gap-y-[1.17rem] xmd:grid-cols-2 xmd:grid-rows-4'>
          {!isMobile && (
            <div className='w-full h-full'>
              <Image
                className='object-cover size-full rounded-[0.87848rem]'
                src={'/accessory/item-first.jpg'}
                alt='item accessory'
                width={232}
                height={382}
              />
            </div>
          )}
          {Array(isMobile ? 8 : 19)
            .fill(0)
            .map((_, index) => (
              <CardProduct key={index} />
            ))}
        </div>
      </div>
      {!isMobile && (
        <aside className='w-[6rem] h-[19.69253rem] sticky top-[9.76rem] left-0 p-[0.29rem] shadow-[2px_4px_20px_0px_rgba(0,0,0,0.02)] rounded-[0.87848rem] bg-[linear-gradient(97deg,#102841_0%,#1359A1_100%)] mt-[4.47rem]'>
          <div className='caption1 font-semibold tracking-[0.00439rem] text-greyscale-80 px-[0.51rem] flex items-center text-center rounded-[0.58565rem] bg-white h-[5.27086rem] cursor-pointer'>
            Sản phẩm mới nhất
          </div>
          <div className='caption1 font-semibold tracking-[0.00439rem] text-greyscale-80 px-[0.51rem] flex items-center text-center rounded-[0.58565rem] bg-white h-[5.27086rem] cursor-pointer my-[0.29rem]'>
            Sản phẩm mới nhất
          </div>
          <div className='caption1 font-semibold tracking-[0.00439rem] text-greyscale-80 px-[0.51rem] flex items-center text-center rounded-[0.58565rem] bg-white h-[5.27086rem] cursor-pointer'>
            Sản phẩm mới nhất
          </div>
        </aside>
      )}
    </section>
  )
}
