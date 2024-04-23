import CardVoucher from '@/components/cardvoucher'

const VoucherList = ({voucher}) => {
  return (
    <>
      <div className='grid grid-cols-1 gap-y-[0.59rem]'>
        {voucher?.coupon_list?.map((voucherItem, index) => (
          <CardVoucher
            key={index}
            item={voucherItem}
          />
        ))}
      </div>

      {voucher?.coupon_list?.length > 4 && (
        <button className='w-fit py-[0.81rem] px-[1.17rem] rounded-[7.32rem] caption1 text-greyscale-80 font-semibold mt-[1.17rem] bg-[#E9E9E9] mx-auto'>
          +{voucher?.coupon_list?.length - 4} voucher
        </button>
      )}
    </>
  )
}

export default VoucherList
