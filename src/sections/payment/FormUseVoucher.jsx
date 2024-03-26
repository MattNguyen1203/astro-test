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

const formSchema = z.object({
  voucher: z.string().min(1, {message: 'Bạn chưa nhập Voucher!'}),
})
export default function FormUseVoucher() {
  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      voucher: '',
    },
  })
  function onSubmit(values) {
    console.log('🚀 ~ onSubmit ~ values:', values)
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
          title='DÙNG VOUCHER'
          className='p-[0.73rem] w-fit whitespace-nowrap'
        />
      </form>
    </Form>
  )
}
