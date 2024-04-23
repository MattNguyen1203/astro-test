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
import {useSearchParams} from 'next/navigation'

import {signUpForm} from '@/actions/signUpForm'
import {toast} from 'sonner'

import dynamic from 'next/dynamic'
const PopupResetPass = dynamic(() =>
  import('../auth/components/popup/PopupResetPass').then(
    (mod) => mod.PopupResetPass,
  ),
)
const formSchema = z
  .object({
    password: z
      .string()
      .min(1, {message: 'Vui lòng nhập mật khẩu!'})
      .min(6, {message: 'Mật khẩu phải có từ 6 kí tự trở lên!'})
      .regex(/[a-z]/, {
        message: 'Mật khẩu phải có ít nhất 1 chữ thường!',
      })
      .regex(/[A-Z]/, {
        message: 'Mật khẩu phải có ít nhất 1 chữ hoa!',
      })
      .regex(/[0-9]/, {message: 'Mật khẩu phải có ít nhất 1 chữ số!'}),
    confirmPassword: z
      .string()
      .min(1, {message: 'Vui lòng nhập mật khẩu!'})
      .min(6, {message: 'Mật khẩu phải có từ 6 kí tự trở lên!'}),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: 'Xác thực mật khẩu chưa khớp!',
    path: ['confirmPassword'],
  })

export default function ResetPassIndex() {
  const searchParams = useSearchParams()
  const phone = searchParams.get('phone')
  const otp = searchParams.get('otp')
  const [isPending, startTransition] = useTransition()
  const [isSuccess, setIsSuccess] = useState(false)

  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      password: '',
      confirmPassword: '',
    },
  })

  function onSubmit(values) {
    startTransition(() => {
      const body = JSON.stringify({
        phone: phone,
        type: 'change-password',
        otp: otp,
        password: values?.password,
        re_password: values?.confirmPassword,
      })
      signUpForm(body)
        .then((res) => {
          console.log('🚀 ~ .then ~ res:', res)
          if (res?.message?.includes('success')) {
            // handle register success
            localStorage.setItem(
              'account',
              JSON.stringify({
                phone: phone,
                password: values?.password,
              }),
            )
            setIsSuccess(true)
          } else {
            if (res?.code === 'invalid_otp_not_found') {
              return toast.error('OTP chưa chính xác!. Vui lòng thử lại!')
            }
            if (res?.code === 'phone_error_exsited') {
              return toast.warning('Tài khoản đã tồn tại. Vui lòng đăng nhập!')
            }
            // handle register failed
          }
        })
        .catch((err) => {
          console.log(err)
          form.setValue('confirmPassword', err?.message)
        })
    })
  }

  return (
    <>
      <article className='mt-[1.17rem]'>
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className='space-y-[0.88rem] relative'
          >
            <FormField
              control={form.control}
              name='password'
              render={({field}) => (
                <FormItem>
                  <FormControl>
                    <Input
                      className=' !outline-none focus:!outline-none focus-visible:!outline-none border-none font-svnGraphik placeholder:text-greyscale-40/60 placeholder:font-medium placeholder:leading-[1.2] placeholder:tracking-[0.00375rem]'
                      placeholder='Nhập mật khẩu mới'
                      {...field}
                    />
                  </FormControl>
                  <FormMessage className='font-svnGraphik caption1 font-normal pl-[0.88rem]' />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name='confirmPassword'
              render={({field}) => (
                <FormItem>
                  <FormControl>
                    <Input
                      className=' !outline-none focus:!outline-none focus-visible:!outline-none border-none font-svnGraphik placeholder:text-greyscale-40/60 placeholder:font-medium placeholder:leading-[1.2] placeholder:tracking-[0.00375rem]'
                      placeholder='Nhập lại mật khẩu mới'
                      {...field}
                    />
                  </FormControl>
                  <FormMessage className='font-svnGraphik caption1 font-normal pl-[0.88rem]' />
                </FormItem>
              )}
            />
            <div className='flex justify-between xmd:!mb-[8.8rem]'>
              <BtnSubmit
                className='w-full'
                isPending={isPending}
                title='XÁC NHẬN'
              />
            </div>
          </form>
        </Form>
      </article>
      <PopupResetPass
        isOpen={isSuccess}
        setIsSuccess={setIsSuccess}
      />
    </>
  )
}
