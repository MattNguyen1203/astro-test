'use client'
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from '@/components/ui/form'
import {Input} from '@/components/ui/input'
import {zodResolver} from '@hookform/resolvers/zod'
import {useForm} from 'react-hook-form'
import * as z from 'zod'
import BtnSubmit from '../auth/components/btnsubmit'
import {applyCoupon} from '@/actions/applyCoupon'
import {memo, useEffect, useTransition} from 'react'
import {toast} from 'sonner'
import {handleShelfLife} from '@/lib/utils'

const formSchema = z.object({
  voucher: z.string().min(1, {message: 'Bạn chưa nhập Voucher!'}),
})
function FormUseVoucher({
  setCouponSearch,
  setIsCouponBest,
  isCouponBest,
  isAuth,
  carts,
}) {
  const [isPending, setTransition] = useTransition()
  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      voucher: '',
    },
  })

  useEffect(() => {
    //reset message validate khi chon voucher tot nhat
    if (isCouponBest) {
      form.setValue('voucher', '')
      form.setError('voucher', {
        type: 'validate',
        message: '',
      })
    }
  }, [isCouponBest])

  function onSubmit(values) {
    console.log('🚀 ~ onSubmit ~ values:', values)
    setTransition(() => {
      applyCoupon(values?.voucher)
        .then((coupon) => {
          console.log('🚀 ~ .then ~ coupon:', coupon)
          //handle coupon không tồn tại
          if (Number(coupon?.amount) === 0) {
            return toast.error('Voucher không tồn tại!', {
              duration: 5000,
              position: 'bottom-center',
            })
          }
          //handle hạn sử dụng của coupon
          if (!handleShelfLife(coupon?.date_expire)) {
            return toast.error('Voucher đã hết hạn sử dụng!', {
              duration: 5000,
              position: 'bottom-center',
            })
          }
          if (Number(coupon?.amount) > 0) {
            // handle coupon chỉ dành cho khách hàng có hạng thành viên
            if (coupon?.roles?.length && !isAuth) {
              return toast.warning('Voucher chỉ dành cho hạng thành viên!', {
                duration: 5000,
                position: 'bottom-center',
              })
            }
            // handle coupon chỉ dành cho các sản phẩm cụ thể
            if (coupon?.products?.length || coupon?.categories?.length) {
              const isCheckIdProduct = carts?.some((product) =>
                coupon?.products?.some((id) => id === product?.id),
              )
              const isCheckIdCategory = carts?.some((product) =>
                product?.categories?.some((category) =>
                  coupon?.categories?.come((id) => id === category),
                ),
              )

              if (!isCheckIdProduct && !isCheckIdCategory) {
                return toast.warning(
                  'Voucher không áp dụng cho sản phẩm trên!',
                  {
                    duration: 5000,
                    position: 'bottom-center',
                  },
                )
              }
            }
            setIsCouponBest(false)
            setCouponSearch(coupon)
          }
        })
        .catch((err) => console.log(err))
    })
  }
  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className='space-x-[1.17rem] flex'
      >
        <FormField
          control={form.control}
          name='voucher'
          render={({field}) => (
            <FormItem className='relative w-full'>
              <FormControl>
                <Input
                  className=' !outline-none focus:!outline-none focus-visible:!outline-none border-none font-svnGraphik w-full'
                  placeholder='Nhập mã voucher của bạn'
                  {...field}
                />
              </FormControl>
              <FormMessage className='absolute bottom-0 left-0 translate-y-full' />
            </FormItem>
          )}
        />
        <BtnSubmit
          isPending={isPending}
          title='DÙNG VOUCHER'
          className='p-[0.73rem] whitespace-nowrap w-[8.79rem]'
        />
      </form>
    </Form>
  )
}
export default memo(FormUseVoucher)
