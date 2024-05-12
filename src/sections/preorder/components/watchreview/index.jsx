'use client'
import './style.css'

import Image from 'next/image'
import {Fragment, useRef, useState} from 'react'
import {Swiper, SwiperSlide} from 'swiper/react'
import ReactPlayer from 'react-player'

export default function WatchReview({isMobile, datavideo}) {
  const swiperRef = useRef(null)
  const [indexVideo, setIndexVideo] = useState(0)
  const [toggle, setToggle] = useState(false)

  // const [indexSlider, setIndexSlider] = useState(0)

  // const handleSlideChange = (swiper) => {
  //
  // }

  const handleNextSlide = () => {
    swiperRef.current?.slideNext()
  }
  const handlePrevSlide = () => {
    swiperRef.current?.slidePrev()
  }
  const handleVideo = (i) => {
    setIndexVideo(i)
    setToggle(true)
  }

  const handleClickOutside = (event) => {
    if (!event.target.closest('.child_video')) {
      setToggle(false)
    }
  }
  return (
    <section className='w-full overflow-hidden'>
      {!isMobile && (
        <div className='my-[3.51rem] flex justify-center items-center rounded-[0.87848rem] bg-[linear-gradient(97deg,#102841_0%,#1359A1_100%)] px-[4.39rem] py-[1.17rem] w-fit mx-auto'>
          <h2 className='font-bold text-white h6 font-svnGraphik'>
            CÙNG XEM REVIEW SẢN PHẨM
          </h2>
        </div>
      )}
      <div className='h-[43.2rem] w-full relative select-none md:scale-x-[1.015] xmd:h-[29.13616rem] xmd:mb-[2.34rem]'>
        <Swiper
          centeredSlides={true}
          loop={true}
          grabCursor={true}
          slideToClickedSlide={true}
          loopAdditionalSlides={5}
          speed={1000}
          // onSlideChange={handleSlideChange}
          breakpoints={{
            0: {
              slidesPerView: 3,
            },
            768: {
              slidesPerView: 5,
            },
          }}
          onBeforeInit={(swiper) => {
            swiperRef.current = swiper
          }}
          id='preview_swiper'
          className='size-full'
        >
          {new Array(Math.ceil(10 / datavideo?.length))
            .fill(0)
            .map((item, index) => (
              <Fragment key={index}>
                {datavideo?.map((e, i) => (
                  <SwiperSlide key={i}>
                    <div className='relative size-full'>
                      <div
                        onClick={() => handleVideo(i)}
                        className='bler h-[29.43rem] xmd:h-[18.00878rem] w-full md:max-w-[25vw] xmd:max-w-[40vw] absolute top-1/2 -translate-y-1/2 -translate-x-1/2 left-1/2 origin-center frame_phone rounded-[0.58565rem] overflow-hidden z-10'
                      >
                        <svg
                          xmlns='http://www.w3.org/2000/svg'
                          width='32'
                          height='39'
                          viewBox='0 0 32 39'
                          fill='none'
                          className='hidden slider_control_video w-[2.04978rem] h-[2.63543rem] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 cursor-pointer pointer-events-auto drop-shadow-xl'
                        >
                          <path
                            d='M2 5.84798C2 3.93347 2 2.97622 2.39935 2.44855C2.74725 1.98884 3.27902 1.70438 3.85467 1.67002C4.51544 1.63057 5.31225 2.16158 6.90592 3.22355L27.6449 17.0435C28.9617 17.921 29.6201 18.3598 29.8494 18.9128C30.0502 19.3963 30.0502 19.9396 29.8494 20.4232C29.6201 20.9762 28.9617 21.4148 27.6449 22.2925L6.90592 36.1123C5.31225 37.1743 4.51544 37.7053 3.85467 37.6659C3.27902 37.6316 2.74725 37.3472 2.39935 36.8874C2 36.3597 2 35.4024 2 33.488V5.84798Z'
                            fill='white'
                            stroke='white'
                            strokeWidth='2.57291'
                            strokeLinecap='round'
                            strokeLinejoin='round'
                          />
                        </svg>

                        <Image
                          className='object-cover size-full'
                          src={
                            e?.thumneil
                              ? e?.thumneil?.url
                              : '/preorder/poster.jpg'
                          }
                          alt='poster'
                          width={280}
                          height={530}
                        />
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
              </Fragment>
            ))}
        </Swiper>
        {!isMobile && (
          <div className='absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 h-[38.8rem] w-[21.2%] z-10 pointer-events-none'>
            <Image
              className='relative z-20 object-fill size-full'
              src={'/preorder/frame-smart-phone.png'}
              alt='frame'
              width={330}
              height={580}
              quality={100}
            />
            <button
              onClick={handlePrevSlide}
              className='size-[2.87899rem] rounded-full border-[0.678px] border-solid border-white bg-[rgba(255,255,255,0.56)] shadow-[1.356px_-2.034px_16.273px_0.678px_#E8E7E7] backdrop-blur-[5.08536px] flex justify-center items-center absolute -left-[1%] -translate-x-1/2 top-[21.18rem] pointer-events-auto z-50'
            >
              <svg
                xmlns='http://www.w3.org/2000/svg'
                width='7'
                height='13'
                viewBox='0 0 7 13'
                fill='none'
                className='w-[0.8rem] h-[1rem]'
              >
                <g clipPath='url(#clip0_3069_226055)'>
                  <path
                    d='M6.25124 0.967773C6.11911 0.967773 5.98698 1.01968 5.88317 1.11878L0.706628 6.30003C0.503719 6.50294 0.503719 6.82854 0.706628 7.03145L5.88789 12.208C6.0908 12.4109 6.41639 12.4109 6.6193 12.208C6.82221 12.0051 6.82221 11.6795 6.6193 11.4766L1.80611 6.66338L6.6193 1.85019C6.82221 1.64728 6.82221 1.32168 6.6193 1.11878C6.51549 1.01968 6.38336 0.967773 6.25124 0.967773Z'
                    fill='#414141'
                  />
                </g>
                <defs>
                  <clipPath id='clip0_3069_226055'>
                    <rect
                      width='6.21468'
                      height='11.3912'
                      fill='white'
                      transform='matrix(-1 0 0 1 6.77148 0.967773)'
                    />
                  </clipPath>
                </defs>
              </svg>
            </button>
            <button
              onClick={handleNextSlide}
              className='size-[2.87899rem] rounded-full border-[0.678px] border-solid border-white bg-[rgba(255,255,255,0.56)] shadow-[1.356px_-2.034px_16.273px_0.678px_#E8E7E7] backdrop-blur-[5.08536px] flex justify-center items-center absolute right-0 translate-x-1/2 top-[21.18rem] pointer-events-auto z-50'
            >
              <svg
                xmlns='http://www.w3.org/2000/svg'
                width='7'
                height='13'
                viewBox='0 0 7 13'
                fill='none'
                className='rotate-180 w-[0.8rem] h-[1rem]'
              >
                <g clipPath='url(#clip0_3069_226055)'>
                  <path
                    d='M6.25124 0.967773C6.11911 0.967773 5.98698 1.01968 5.88317 1.11878L0.706628 6.30003C0.503719 6.50294 0.503719 6.82854 0.706628 7.03145L5.88789 12.208C6.0908 12.4109 6.41639 12.4109 6.6193 12.208C6.82221 12.0051 6.82221 11.6795 6.6193 11.4766L1.80611 6.66338L6.6193 1.85019C6.82221 1.64728 6.82221 1.32168 6.6193 1.11878C6.51549 1.01968 6.38336 0.967773 6.25124 0.967773Z'
                    fill='#414141'
                  />
                </g>
                <defs>
                  <clipPath id='clip0_3069_226055'>
                    <rect
                      width='6.21468'
                      height='11.3912'
                      fill='white'
                      transform='matrix(-1 0 0 1 6.77148 0.967773)'
                    />
                  </clipPath>
                </defs>
              </svg>
            </button>
            <div className='w-[0.51rem] h-[3.15rem] absolute rounded-[0.80527rem] top-[5.7rem] -left-[1.8%]  bg-greyscale-80'></div>
            <div className='w-[0.51rem] h-[5.27086rem] absolute rounded-[0.80527rem] top-[9.66rem] -left-[1.8%]  bg-greyscale-80'></div>
            <div className='w-[0.51rem] h-[5.27086rem] absolute rounded-[0.80527rem] top-[6.81rem] -right-[1.8%]  bg-greyscale-80'></div>
          </div>
        )}
      </div>
      {toggle && (
        <div
          onClick={handleClickOutside}
          className={`flex fixed top-[50%] left-[50%] -translate-y-1/2 -translate-x-1/2 w-full h-full justify-center items-center bg-[#0000004d] z-[999999]`}
        >
          <div className='child_video flex justify-center items-center translate-y-[2rem] lg:size-max xmd:w-full xmd:h-[80%]'>
            {datavideo?.[indexVideo]?.check === 'url' && (
              <ReactPlayer
                className='!w-[61.5rem] !h-[41rem] xmd:!w-[22rem]'
                controls={true}
                playing={toggle ? true : false}
                width={isMobile ? 430 : 840}
                height={isMobile ? 764 : 560}
                url={datavideo?.[indexVideo]?.url_video}
              />
            )}
            {datavideo?.[indexVideo]?.check === 'file' && (
              <ReactPlayer
                className='!w-[61.5rem] !h-[41rem] xmd:w-[22rem]'
                controls={true}
                playing={toggle ? true : false}
                width={isMobile ? 430 : 840}
                height={isMobile ? 764 : 560}
                url={datavideo?.[indexVideo]?.file?.url}
              />
            )}
            {datavideo?.[indexVideo]?.check === 'id' && (
              <iframe
                id='video_preorder'
                className='w-[31.425rem] h-[52rem] translate-y-[2rem] overflow-hidden'
                src={`https://www.tiktok.com/embed/v2/${datavideo?.[indexVideo]?.id}`}
                width='320'
                height='560'
                frameborder='0'
                allowfullscreen
              />
            )}
          </div>
          <div
            onClick={() => {
              setToggle(false)
            }}
            className='lg:hidden absolute top-[4.5rem] right-[1.5rem] text-[2rem] text-white bg-black rounded-[50%] px-[1rem]'
          >
            X
          </div>
        </div>
      )}
    </section>
  )
}
