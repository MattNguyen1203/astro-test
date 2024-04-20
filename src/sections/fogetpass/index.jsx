'use client'

import {zodResolver} from '@hookform/resolvers/zod'
import {useForm} from 'react-hook-form'
import * as z from 'zod'

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from '@/components/ui/form'
import {Input} from '@/components/ui/input'

import {useState, useTransition} from 'react'
import BtnSubmit from '../auth/components/btnsubmit'
import {sendOTP} from '@/actions/sendOTP'
import {convertPhone} from '@/lib/utils'
import {useRouter} from 'next/navigation'

const formSchema = z.object({
  phone: z
    .string()
    .min(1, {message: 'Vui lòng nhập số điện thoại!'})
    .regex(/^[0-9]{6,15}$/, {message: 'Định dạng không hợp lệ!'}),
})

export default function FogetPassIndex() {
  const router = useRouter()
  const [isPending, startTransition] = useTransition()
  const [isSuccess, setIsSuccess] = useState(false)

  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      phone: '',
    },
  })

  function onSubmit(values) {
    startTransition(() => {
      const phone = convertPhone(values?.phone)
      sendOTP(
        JSON.stringify({
          phone: phone,
          type: 'change-password',
        }),
      ).then((otp) => {
        console.log('🚀 ~ ).then ~ otp:', otp)
        if (otp?.data?.status === 400) {
          if (otp?.code === 'phone_error_not_exsits') {
            form.setError('phone', {
              type: 'validate',
              message: 'Không tìm thấy tài khoản này!',
            })
          } else if (otp?.code === 'phone_error_limit_code') {
            form.setError('phone', {
              type: 'validate',
              message:
                'Bạn đã vượt quá giới hạn 5 lần/ngày. Vui lòng thử lại vào ngày mai!',
            })
          } else {
            form.setError('phone', {
              type: 'validate',
              message: otp?.message,
            })
          }
        } else {
          if (otp?.message === 'Send OTP Success') {
            localStorage.setItem('registerDraf', JSON.stringify(values))
            return router.push(`/otp?type=password&phone=${phone}`)
          } else {
            form.setError('phone', {
              type: 'validate',
              message: otp?.message,
            })
          }
        }
      })
    })
  }

  return (
    <article className='mt-[1.17rem]'>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className='space-y-[0.88rem] relative'
        >
          <FormField
            control={form.control}
            name='phone'
            render={({field}) => (
              <FormItem>
                <FormControl>
                  <Input
                    className=' !outline-none focus:!outline-none focus-visible:!outline-none border-none font-svnGraphik placeholder:text-greyscale-40/60 placeholder:font-medium placeholder:leading-[1.2] placeholder:tracking-[0.00375rem]'
                    placeholder='Nhập số điện thoại'
                    {...field}
                  />
                </FormControl>
                <FormMessage className='font-svnGraphik absolute left-0 -bottom-[0.88rem] translate-y-full caption1 font-normal pl-[0.88rem]' />
              </FormItem>
            )}
          />
          <div className='flex justify-between xmd:!mb-[8.8rem]'>
            <BtnSubmit
              className='w-full'
              isPending={isPending}
              title='TIẾP TỤC'
            />
          </div>
        </form>
      </Form>
    </article>
  )
}
