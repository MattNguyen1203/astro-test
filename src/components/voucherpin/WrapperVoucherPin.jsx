import getData from '@/lib/getData'
import VoucherPin from '.'

export default async function WrapperVoucherPin() {
  const coupons = await getData('/okhub/v1/coupon/category/flash-sale')
  return <VoucherPin data={coupons?.coupon_list} />
}
