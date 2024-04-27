import Progress from '@/components/progress'
import Image from 'next/image'

const data =
  '<h3><strong>Điều kiện nhận quà tặng khi đặt hàng trước ngày  20.01.2024</strong></h3><ul><li> 50 chiếc túi bảo vệ màn hình tặng kèm cho 50 đơn hàng đầu tiên</li><li> 50 chiếc túi bảo vệ màn hình tặng kèm cho 50 đơn hàng đầu tiên</li><li> 50 chiếc túi bảo vệ màn hình tặng kèm cho 50 đơn hàng đầu tiên</li></ul>'

const Gift = ({data}) => {
  return (
    <div className='flex xmd:flex-col-reverse xmd: w-full'>
      <div className='w-1/2 xmd:w-full relative after:absolute after:top-0 after:right-0 after:w-[1px] after:h-full after:border-r  after:border-dashed after:border-[#A9A9A9] p-[1.17rem] bg-white rounded-[1.75695rem]'>
        <div className='flex items-center mb-[2.93rem] xmd:hidden'>
          <Image
            src='/components/rocket.svg'
            alt=''
            width={30}
            height={30}
            className='size-[3.51391rem] object-contain mr-[1.17rem]'
          />

          <span className='h6 font-medium text-[#0A1A29]'>
            Ưu đãi khi đặt hàng sớm
          </span>
        </div>

        <div
          dangerouslySetInnerHTML={{__html: data?.info}}
          className='p-[1.17rem] rounded-[1.02489rem] bg-[#E8EBEF80]'
        ></div>
      </div>
      <div className='w-1/2 xmd:w-full p-[1.17rem] bg-white rounded-[1.75695rem] relative'>
        <Image
          src={data?.gift_image?.url || '/no-image.jpg'}
          alt='astromazing'
          width={300}
          height={300}
          className='w-full h-[14.71449rem] object-contain'
        />
        <div className='sub2 font-semibold text-greyscale-80 uppercase mb-[0.5rem]'>
          DÀNH {data?.total_gift || 100} PHẦN QUÀ ĐẶC BIỆT & DUY NHẤT
        </div>
        <div className='sub2 font-semibold text-greyscale-80 mb-[0.88rem]'>
          {data?.gift_name}
        </div>

        <Progress
          ordered={data?.gift_given || 10}
          totalProd={data?.total_gift || 100}
          icon='/preorder/giftIcon.svg'
          className='bg-[linear-gradient(92deg,#1DA987_0%,#2AE7AE_100%)]'
        />

        <div className='flex absolute top-[1.46rem] right-[1.46rem] size-[3.22108rem] rounded-[1.02489rem] bg-[linear-gradient(92deg,#1DA987_0%,#2AE7AE_100%)] z-10 p-[0.73rem]'>
          <Image
            src='/preorder/iconGift2.svg'
            alt='astromazing'
            width={50}
            height={50}
            className='object-contain'
          />
        </div>
      </div>
    </div>
  )
}

export default Gift
