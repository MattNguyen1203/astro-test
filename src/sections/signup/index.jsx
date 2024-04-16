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
import Link from 'next/link'
import Image from 'next/image'
import {signIn} from 'next-auth/react'
import {signUpForm} from '@/actions/signUpForm'

import {useState, useTransition} from 'react'
import {PopupRegister} from '../auth/components/popup/PopupRegister'
import BtnSubmit from '../auth/components/btnsubmit'

const formSchema = z
  .object({
    email: z
      .string()
      .min(1, {message: 'Vui lòng nhập email!'})
      .email({message: 'Nhập đúng định dạng email!'}),
    phone: z
      .string()
      .min(1, {message: 'Vui lòng nhập số điện thoại!'})
      .regex(/^[0-9]{6,15}$/, {message: 'Định dạng không hợp lệ!'}),
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

export default function SignUpIndex() {
  const [isPending, startTransition] = useTransition()
  const [isSuccess, setIsSuccess] = useState(false)
  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: '',
      phone: '',
      password: '',
      confirmPassword: '',
    },
  })

  const values = form.watch()

  function onSubmit(values) {
    startTransition(() => {
      signUpForm(values)
        .then((res) => {
          if (res?.user_id) {
            // handle register success
            setIsSuccess(true)
          } else {
            setIsSuccess(true)
            // handle register failed
            const resFailed = JSON.parse(res)
            if (resFailed.code === 'email_exists') {
              form.setError('email', {
                type: 'validate',
                message: 'Email này đã tồn tại!',
              })
            } else {
              form.setError('confirmPassword', {
                type: 'validate',
                message: resFailed?.message,
              })
            }
          }
        })
        .catch((err) => {
          throw new Error(err)
        })
    })
  }

  return (
    <article className='mt-[1.76rem]'>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className='space-y-[0.88rem] xmd:space-y-[0.59rem]'
        >
          <FormField
            control={form.control}
            name='email'
            render={({field}) => (
              <FormItem>
                <FormControl>
                  <Input
                    type='email'
                    className=' !outline-none focus:!outline-none focus-visible:!outline-none border-none font-svnGraphik xmd:rounded-[0.58565rem]'
                    placeholder='Email của bạn *'
                    {...field}
                  />
                </FormControl>
                <FormMessage className='pl-[0.88rem] font-svnGraphik' />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name='phone'
            render={({field}) => (
              <FormItem>
                <FormControl>
                  <Input
                    className='placeholder:text-[0.87848rem] placeholder:font-medium placeholder:opacity-60 placeholder:leading-[1.2] placeholder:tracking-[0.00439rem] placeholder:text-greyscale-40 font-svnGraphik xmd:rounded-[0.58565rem]'
                    placeholder='Số điện thoại *'
                    type='tel'
                    {...field}
                  />
                </FormControl>
                <FormMessage className='pl-[0.88rem] font-svnGraphik' />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name='password'
            render={({field}) => (
              <FormItem>
                <FormControl>
                  <Input
                    className='placeholder:text-[0.87848rem] placeholder:font-medium placeholder:opacity-60 placeholder:leading-[1.2] placeholder:tracking-[0.00439rem] placeholder:text-greyscale-40 font-svnGraphik xmd:rounded-[0.58565rem]'
                    placeholder='Mật khẩu *'
                    type='password'
                    {...field}
                  />
                </FormControl>
                <FormMessage className='pl-[0.88rem] font-svnGraphik' />
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
                    className='placeholder:text-[0.87848rem] placeholder:font-medium placeholder:opacity-60 placeholder:leading-[1.2] placeholder:tracking-[0.00439rem] placeholder:text-greyscale-40 font-svnGraphik xmd:rounded-[0.58565rem]'
                    placeholder='Xác nhận mật khẩu *'
                    type='password'
                    {...field}
                  />
                </FormControl>
                <FormMessage className='pl-[0.88rem] font-svnGraphik' />
              </FormItem>
            )}
          />
          <span className='block font-normal opacity-50 caption1 text-greyscale-40 xmd:!mt-[0.88rem]'>
            Các mục có dấu (*) là những thông tin bắt buộc
          </span>

          <div className='flex justify-between xmd:!mt-[1.76rem]'>
            <BtnSubmit
              isPending={isPending}
              title='ĐĂNG KÝ'
            />
            <div
              className='size-[2.92826rem] flex justify-center items-center rounded-full bg-white shadow-[2.222px_2.222px_13.333px_0px_rgba(0,0,0,0.02),-3.333px_2.222px_22.222px_0px_rgba(0,0,0,0.04)] mr-[0.59rem] cursor-pointer'
              onClick={() => signIn('google', {callbackUrl: '/'})}
            >
              <Image
                src={'/auth/icon-gg.svg'}
                alt='icon google'
                width={20}
                height={20}
                priority
              />
            </div>
            <div
              className='size-[2.92826rem] flex justify-center items-center rounded-full bg-white shadow-[2.222px_2.222px_13.333px_0px_rgba(0,0,0,0.02),-3.333px_2.222px_22.222px_0px_rgba(0,0,0,0.04)] cursor-pointer'
              onClick={() => signIn('facebook', {callbackUrl: '/'})}
            >
              <Image
                src={'/auth/icon-fb.svg'}
                alt='icon facebook'
                width={20}
                height={20}
                priority
              />
            </div>
          </div>
        </form>
      </Form>

      <div className='flex items-center mx-auto w-fit mt-[2.93rem] xmd:mt-[7rem]'>
        <span className='font-semibold text-blue-500 cpation1 opacity-45'>
          Bạn đã có tài khoản ?
        </span>
        <Link
          className='p-[0.59rem] font-semibold caption1 text-blue-500'
          href={'/dang-nhap'}
        >
          Đăng nhập
        </Link>
      </div>

      <PopupRegister
        isOpen={isSuccess}
        setIsSuccess={setIsSuccess}
        isSignUp={true}
      />
    </article>
  )
}
