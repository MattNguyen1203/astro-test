import CardVoucher from '@/components/cardvoucher'
import {Skeleton} from '@/components/ui/skeleton'

export default function VoucherSlideRes({data, className = ''}) {
  return (
    <div
      className={`${className} relative w-full overflow-x-auto h-[8.8rem] hidden-scrollbar`}
    >
      <div className='absolute top-0 left-0 w-fit px-[0.55rem] h-full flex flex-col justify-between'>
        {Array(2)
          .fill(0)
          .map((_, index) => (
            <div
              key={index}
              className='flex flex-nowrap'
            >
              {data
                .slice(
                  index * (data.length / 2 - 1),
                  (index + 1) * (data.length / 2 - 1),
                )
                .map((_, idx) => (
                  <CardVoucher
                    className={idx === 0 ? '!ml-0' : 'ml-[0.59rem]'}
                    key={idx}
                    isPriority={idx < 2 ? true : false}
                  />
                ))}
            </div>
          ))}
      </div>
    </div>
  )
}
const VoucherSlideResLoading = () => {
  return (
    <div
      className={`relative w-full overflow-x-auto h-[8.8rem] hidden-scrollbar`}
    >
      <div className='absolute top-0 left-0 w-fit px-[0.55rem] h-full flex flex-col justify-between'>
        {Array(2)
          .fill(0)
          .map((_, index) => (
            <div
              key={index}
              className='flex flex-nowrap'
            >
              {Array(2)
                .fill(0)
                .map((_, idx) => (
                  <Skeleton
                    className={`${
                      idx === 0 ? '!ml-0' : 'ml-[0.59rem]'
                    } w-[21.22987rem] h-[5.12rem] xmd:w-[18.66764rem] xmd:h-[4.1rem] rounded-[0.58565rem]`}
                    key={idx}
                  />
                ))}
            </div>
          ))}
      </div>
    </div>
  )
}
VoucherSlideResLoading.displayName = 'VoucherSlideResLoading'
export {VoucherSlideResLoading}
