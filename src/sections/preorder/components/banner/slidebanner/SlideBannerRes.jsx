import ItemBannerPreOrderRes from './ItemBannerPreOrderRes'

export default function SlideBannerRes() {
  return (
    <div className='relative w-full overflow-x-auto h-[30rem] hidden-scrollbar'>
      <div className='absolute top-0 left-0 flex h-full w-fit'>
        {Array(3)
          .fill(0)
          .map((_, index) => (
            <div
              key={index}
              className='grid grid-cols-2 grid-rows-2 gap-y-[1.17rem] px-[0.295rem] w-screen'
            >
              {Array(4)
                .fill(0)
                .map((_, idx) => (
                  <ItemBannerPreOrderRes
                    key={idx}
                    isPriority={index === 0}
                  />
                ))}
            </div>
          ))}
      </div>
    </div>
  )
}
