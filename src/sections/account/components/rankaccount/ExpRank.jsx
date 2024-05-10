'use client'
import Image from 'next/image'
import {Swiper, SwiperSlide} from 'swiper/react'
import {FreeMode} from 'swiper/modules'
import 'swiper/css'
import './style.css'
export default function ExpRank({session, dataRank, isMobile}) {
  // const lastRank = dataRank[Object?.keys(dataRank)?.length - 1]
  // const percentPC = Math.min(
  //   (session?.memberTotalCharge / parseInt(lastRank?.amount_give_level)) * 95,
  //   95,
  // )
  // maxWidth = x rem
  let maxWidth = isMobile ? 60 : 120
  let trans = 5
  const widthRank = maxWidth / (Object?.keys(dataRank)?.length - 1)
  const numberRank = parseInt(session?.memberlevel)
  const nextRank =
    dataRank[numberRank + 1]?.amount_up_level -
    dataRank[numberRank]?.amount_up_level
  const wasRank =
    session?.memberTotalCharge - dataRank[numberRank]?.amount_up_level
  const percentPC =
    dataRank[numberRank]?.sort * 100 + (wasRank / nextRank) * 100
  return (
    <Swiper
      slidesPerView={'auto'}
      initialSlide={numberRank === 0 ? 0 : numberRank}
      freeMode={true}
      modules={[FreeMode]}
      className='lg:w-[101.7568rem] xmd:w-full h-[10.68rem] expRank'
    >
      <SwiperSlide>
        <div className='flex lg:w-[101.7568rem] xmd:w-[100rem] absolute py-[1.1713rem] pl-[1.5rem] xmd:px-0 flex-col justify-center items-start rounded-[0.58565rem] bg-white xmd:overflow-hidden'>
          <div
            style={{width: `${maxWidth}rem`}}
            className='flex items-center xmd:w-[53.73352rem] z-[99]'
          >
            <div className='flex relative flex-col justify-center items-start w-0 md:pl-[0.5rem]'>
              <div className='xmd:ml-[2rem] flex justify-center items-center w-[1.75695rem] h-[1.75695rem] pr-[0.00117rem]'>
                <Image
                  width={23.984}
                  height={24}
                  alt='icon rank'
                  src={'/account/icon-rank-1.svg'}
                />
              </div>
            </div>
            <div
              style={{
                width: `${widthRank}rem`,
                transform: `translateX(${trans}rem)`,
              }}
              className='flex relative flex-col justify-center items-end md:pl-[0.5rem]'
            >
              <div className='flex justify-center items-center w-[1.75695rem] h-[1.75695rem] pr-[0.00117rem]'>
                <Image
                  width={23.984}
                  height={24}
                  alt='icon rank'
                  src={'/account/cup-sivel.svg'}
                />
              </div>
              <div
                style={{
                  backgroundColor:
                    session?.memberlevel < 1 ? '#2f9f3e' : 'white',
                }}
                className='translate-x-[-0.35rem] rounded-full z-[99] absolute h-[1.1713rem] w-[1.1713rem] bottom-[-2.35rem] ml-[0.35rem]'
              ></div>
            </div>
            <div
              style={{
                width: `${widthRank}rem`,
                transform: `translateX(${trans}rem)`,
              }}
              className='flex relative flex-col justify-center items-end md:pl-[0.5rem]'
            >
              <div className='flex justify-center items-center w-[1.75695rem] h-[1.75695rem] pr-[0.00117rem]'>
                <Image
                  width={23.984}
                  height={24}
                  alt='icon rank'
                  src={'/account/cup-gold.svg'}
                />
              </div>
              <div
                style={{
                  backgroundColor:
                    session?.memberlevel < 2 ? '#2f9f3e' : 'white',
                }}
                className='translate-x-[-0.35rem] rounded-full z-[99] absolute h-[1.1713rem] w-[1.1713rem] bottom-[-2.35rem] ml-[0.35rem]'
              ></div>
            </div>
            <div
              style={{
                width: `${widthRank}rem`,
                transform: `translateX(${trans}rem)`,
              }}
              className='flex relative flex-col justify-center items-end md:pl-[0.5rem]'
            >
              <div className='flex justify-center items-center w-[1.75695rem] h-[1.75695rem] pr-[0.00117rem] '>
                <Image
                  width={23.984}
                  height={24}
                  alt='icon rank'
                  src={'/account/cup-kc.svg'}
                />
              </div>
              <div
                style={{
                  backgroundColor:
                    session?.memberlevel < 3 ? '#2f9f3e' : 'white',
                }}
                className='translate-x-[-0.35rem] rounded-full z-[99] absolute h-[1.1713rem] w-[1.1713rem] bottom-[-2.35rem] ml-[0.35rem]'
              ></div>
            </div>
          </div>
          <div
            style={{width: `${widthRank + trans}rem`}}
            className='flex my-[0.87848rem] relative justify-start items-center h-[1.75695rem]'
          >
            <div className='w-[1000%] xmd:w-[100rem] h-[1.75695rem] absolute rounded-[1.0981rem] bg-[#F0F0F0]'></div>
            <div className='w-[100%] absolute top-0'>
              <div
                style={{
                  width: `calc(${percentPC}% - ${
                    trans *
                    (dataRank[numberRank]?.sort === 0
                      ? 0
                      : dataRank[numberRank]?.sort - 1)
                  }rem)`,
                }}
                className={`h-[1.75695rem] text-end flex items-center justify-end absolute z-10 rounded-[0.43924rem] bg-gradient-to-l from-[#407F0F] to-[#29AA4D] shadow-[4px_4px_8px_0px_rgba(83,118,209,0.10)]`}
              ></div>
            </div>
          </div>
          <div
            style={{width: `${maxWidth}rem`}}
            className='flex items-center'
          >
            {Object.values(dataRank)?.map((rank, index) => (
              <div
                key={index}
                style={{
                  width: `${widthRank}rem`,
                  transform:
                    index === 0
                      ? 'translateX(0rem)'
                      : `translateX(${trans}rem)`,
                }}
                className='first:!w-0 flex flex-col items-end'
              >
                <div
                  style={
                    isMobile
                      ? {
                          transform:
                            index === 0
                              ? 'translateX(4.5rem)'
                              : 'translateX(1rem)',
                        }
                      : {
                          transform:
                            index === 0
                              ? 'translateX(3.5rem)'
                              : 'translateX(2rem)',
                        }
                  }
                  className='flex flex-col items-center w-max'
                >
                  <p className='font-normal body2 text-greyscale-40'>
                    {rank.ten}
                  </p>
                  <p className='mb-[0.29283rem] text-center sub2 font-semibold bg-gradient-to-l from-[#E0B181] to-[#BE9367] bg-clip-text'>
                    {parseInt(rank?.amount_up_level).toLocaleString('vi-VN')}đ
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide></SwiperSlide>
      <SwiperSlide></SwiperSlide>
      <SwiperSlide></SwiperSlide>
    </Swiper>
  )
}
