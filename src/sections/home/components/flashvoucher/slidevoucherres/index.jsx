import CardVoucher from '@/components/cardvoucher'

export default function VoucherSlideRes({data, className = ''}) {
  return (
    <div className={`${className} relative w-full overflow-x-auto h-[8.8rem]`}>
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
                  />
                ))}
            </div>
          ))}
      </div>
    </div>
  )
}
