import Image from 'next/image'

export default function FeedBack() {
  return (
    <div className='relative w-full h-[77.5rem]'>
      <Image
        className='z-0 object-fill'
        src='/home/bg-feedback.png'
        alt='feedback custormer'
        fill
        sizes='100vw'
      />
      <Image
        className='w-[29.3rem] h-[38.3rem] object-cover sticky top-[calc(100vh-38.3rem)] left-1/2 -translate-x-1/2 z-10'
        src={'/home/smart-phone.png'}
        alt='smart phone'
        width={400}
        height={523}
      />
      <div className='absolute z-20 w-full h-[25.69546rem] bg-[linear-gradient(180deg,rgba(255,255,255,0.00)_42.61%,#FFF_100%)] bottom-0 left-0'></div>
    </div>
  )
}
