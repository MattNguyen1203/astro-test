import ICArrowRightBlack from '@/components/icon/ICArrowRightBlack'
import {TabsVoucher} from '@/components/tabvoucher'
import IndexVoucher from '@/sections/account/components/voucher'
import Link from 'next/link'

export default function VoucherPage({searchParams}) {
  const {viewport} = searchParams
  const isMobile = viewport === 'mobile'
  return (
    <>
      {isMobile && (
        <>
          <Link
            href='/dash-board'
            className='flex items-center pl-[0.59rem] h-[2.93rem] relative'
          >
            <ICArrowRightBlack className='rotate-180 size-[1.75rem] mr-[0.59rem]' />
            <span className='font-medium h5 text-greyscale-50'>
              Voucher của bạn
            </span>
          </Link>
          <hr className='h-[0.06rem] w-full mt-[0.5rem] mb-[1.25rem] bg-[#ECECEC]' />
        </>
      )}
      {isMobile ? <TabsVoucher /> : <IndexVoucher />}
    </>
  )
}
