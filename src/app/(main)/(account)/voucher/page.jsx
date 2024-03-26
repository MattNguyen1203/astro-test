import CardVoucher from '@/components/cardvoucher'
import Image from 'next/image'

export default function VoucherPage() {
  return (
    <section className='p-[1.17rem] rounded-[0.58565rem] bg-white shadow-[2px_4px_20px_0px_rgba(0,0,0,0.02)]'>
      <div className='w-full h-[13.5rem] mb-[1.76rem] rounded-[0.58565rem] overflow-hidden'>
        <Image
          className='object-fill size-full'
          src={'/account/banner-voucher.jpg'}
          alt='voucher banner'
          width={700}
          height={200}
        />
      </div>
      <div className='grid grid-cols-2 gap-x-[0.84rem]'>
        <div>
          <h3 className='mb-[0.81rem] caption font-medium text-greyscale-80'>
            Voucher thành viên:
          </h3>
          <div className='space-y-[0.59rem]'>
            {Array(4)
              .fill(0)
              .map((_, index) => (
                <CardVoucher
                  className='w-full'
                  key={index}
                />
              ))}
          </div>
        </div>
        <div>
          <h3 className='mb-[0.81rem] caption font-medium text-greyscale-80'>
            Voucher ngành hàng:
          </h3>
          <div className='space-y-[0.59rem]'>
            {Array(4)
              .fill(0)
              .map((_, index) => (
                <CardVoucher
                  className='w-full'
                  key={index}
                />
              ))}
          </div>
        </div>
      </div>
    </section>
  )
}
