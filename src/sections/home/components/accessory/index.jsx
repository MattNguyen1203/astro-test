import CardProduct from '@/components/cardproduct'
import ICArrowRight from '@/components/icon/ICArrowRight'
export default function Accessory() {
  return (
    <section className='pt-[4.39rem] bg-elevation-20'>
      <div
        className='container flex py-[1.46rem] pr-[1.47rem] rounded-[1.1713rem] backdrop-blur-[5px]'
        style={{
          background:
            'linear-gradient(180deg, #1D4468 0.27%, #1D4468 44.01%, rgba(29, 68, 104, 0.20) 80.64%, rgba(255, 255, 255, 0.00) 105.16%)',
        }}
      >
        <div className='px-[1.46rem] flex-1'>
          <div className='relative'>
            <span className='font-semibold text-white h6'>
              Phụ kiện hay cho thiết bị của bạn
            </span>
            <ICArrowRight className='absolute bottom-0 right-0' />
          </div>
        </div>
        <div className='w-[69.03367rem] h-[31.8448rem] pt-[1.17rem] pl-[1.17rem] pb-[2.49rem] rounded-[0.87848rem] bg-white overflow-hidden'>
          <div className='flex w-fit'>
            {new Array(9).fill(0).map((e, index) => (
              <CardProduct key={index} />
            ))}
          </div>
        </div>
      </div>
      <div className='h-screen'></div>
    </section>
  )
}
