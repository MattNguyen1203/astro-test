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

const formSchema = z.object({
  voucher: z.string().min(1, {message: 'Bạn chưa nhập Voucher!'}),
})
function FormUseVoucher({setCouponSearch, setIsCouponBest, isCouponBest}) {
  console.log('🚀 ~ FormUseVoucher ~ FormUseVoucher render')
  const [isPending, setTransition] = useTransition()
  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      voucher: '',
    },
  })

  useEffect(() => {
    if (isCouponBest) {
      form.setValue('voucher', '')
      form.setError('voucher', {
        type: 'validate',
        message: '',
      })
    }
  }, [isCouponBest])

  function onSubmit(values) {
    setTransition(() => {
      applyCoupon(values?.voucher)
        .then((res) => {
          if (res?.code) {
            setIsCouponBest(false)
            setCouponSearch(res)
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
