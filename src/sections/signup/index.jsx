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

import {useEffect, useState, useTransition} from 'react'
import BtnSubmit from '../auth/components/btnsubmit'
import {useRouter} from 'next/navigation'
import {sendOTP} from '@/actions/sendOTP'
import {convertPhone} from '@/lib/utils'
import ICEyeActive from '@/components/icon/ICEyeActive'
import ICEyeActiveDisable from '@/components/icon/ICEyeActiveDisable'
import useStore from '@/app/(store)/store'

const formSchema = z
  .object({
    phone: z
      .string()
      .min(1, {message: 'Vui lòng nhập số điện thoại!'})
      .regex(/^[0-9]{6,15}$/, {message: 'Định dạng không hợp lệ!'}),
    email: z
      .string()
      .min(1, {message: 'Vui lòng nhập email!'})
      .email({message: 'Nhập đúng định dạng email!'}),
    password: z
      .string()
      .min(1, {message: 'Vui lòng nhập mật khẩu!'})
      .min(6, {
        message: 'Phải có 6 kí tự trở lên, có chữ thường, chữ hoa và số!',
      })
      .regex(/[a-z]/, {
        message: 'Phải có 6 kí tự trở lên, có chữ thường, chữ hoa và số!',
      })
      .regex(/[A-Z]/, {
        message: 'Phải có 6 kí tự trở lên, có chữ thường, chữ hoa và số!',
      })
      .regex(/[0-9]/, {
        message: 'Phải có 6 kí tự trở lên, có chữ thường, chữ hoa và số!',
      }),
    confirmPassword: z
      .string()
      .min(1, {message: 'Vui lòng nhập mật khẩu!'})
      .min(6, {
        message: 'Phải có 6 kí tự trở lên, có chữ thường, chữ hoa và số!',
      }),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: 'Xác thực mật khẩu chưa khớp!',
    path: ['confirmPassword'],
  })

export default function SignUpIndex() {
  const router = useRouter()
  const setProgress = useStore((state) => state.setProgress)
  const [isPending, startTransition] = useTransition()
  const [isShowConfirmPass, setIsShowConfirmPass] = useState(false)
  const [isShowPass, setIsShowPass] = useState(false)

  useEffect(() => {
    return () => {
      setProgress(100)
    }
  }, [])

  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: '',
      phone: '',
      password: '',
      confirmPassword: '',
    },
  })

  function onSubmit(values) {
    startTransition(() => {
      let phoneEnd = convertPhone(values?.phone)

      const body = JSON.stringify({
        phone: phoneEnd,
        email: values?.email,
        type: 'register',
      })
      sendOTP(body).then((otp) => {
        if (otp?.data?.status === 400) {
          if (
            otp?.code === 'phone_error_exsited' ||
            otp?.code === 'phone_error_limit_code'
          ) {
            form.setError('phone', {
              type: 'validate',
              message: 'Số điện thoại này đã tồn tại!',
            })
          }
          if (otp?.code === 'email_error_exsited') {
            form.setError('email', {
              type: 'validate',
              message: 'Email này đã tồn tại!',
            })
          }
        } else {
          if (otp?.message === 'Send OTP Success') {
            localStorage.setItem('registerDraf', JSON.stringify(values))
            return router.push(
              `/otp?type=register&phone=${phoneEnd}&email=${values?.email}`,
            )
          } else {
            form.setError('confirmPassword', {
              type: 'validate',
              message: otp?.message,
            })
          }
        }
      })
    })
  }

  return (
    <article className='mt-[1.76rem]'>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className='space-y-[0.88rem] xmd:space-y-[0.59rem]'
          autoComplete='false'
        >
          <FormField
            control={form.control}
            name='phone'
            render={({field}) => (
              <FormItem>
                <FormControl>
                  <Input
                    className='placeholder:text-[0.87848rem] placeholder:font-medium placeholder:opacity-60 placeholder:leading-[1.2] placeholder:tracking-[0.00439rem] placeholder:text-greyscale-40 font-svnGraphik xmd:rounded-[0.58565rem]'
                    placeholder='+84   |   Nhập số điện thoại *'
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
            name='email'
            render={({field}) => (
              <FormItem>
                <FormControl>
                  <Input
                    type='email'
                    className=' !outline-none focus:!outline-none focus-visible:!outline-none border-none placeholder:text-[0.87848rem] placeholder:font-medium placeholder:opacity-60 placeholder:leading-[1.2] placeholder:tracking-[0.00439rem] placeholder:text-greyscale-40  font-svnGraphik xmd:rounded-[0.58565rem]'
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
            name='password'
            render={({field}) => (
              <FormItem>
                <FormControl>
                  <div className='relative size-full'>
                    <Input
                      className='placeholder:text-[0.87848rem] placeholder:font-medium placeholder:opacity-60 placeholder:leading-[1.2] placeholder:tracking-[0.00439rem] placeholder:text-greyscale-40 font-svnGraphik xmd:rounded-[0.58565rem]'
                      placeholder='Mật khẩu *'
                      type={isShowPass ? 'text' : 'password'}
                      {...field}
                    />
                    <div
                      onClick={() => setIsShowPass((prev) => !prev)}
                      className='size-[1.5rem] absolute top-1/2 -translate-y-1/2 right-[1rem] flex justify-center items-center cursor-pointer'
                    >
                      {isShowPass ? (
                        <ICEyeActive />
                      ) : (
                        <ICEyeActiveDisable className='size-[1.2rem] ' />
                      )}
                    </div>
                  </div>
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
                  <div className='relative size-full'>
                    <Input
                      className='placeholder:text-[0.87848rem] placeholder:font-medium placeholder:opacity-60 placeholder:leading-[1.2] placeholder:tracking-[0.00439rem] placeholder:text-greyscale-40 font-svnGraphik xmd:rounded-[0.58565rem]'
                      placeholder='Xác nhận mật khẩu *'
                      type={isShowConfirmPass ? 'text' : 'password'}
                      {...field}
                    />
                    <div
                      onClick={() => setIsShowConfirmPass((prev) => !prev)}
                      className='size-[1.5rem] absolute top-1/2 -translate-y-1/2 right-[1rem] flex justify-center items-center cursor-pointer'
                    >
                      {isShowConfirmPass ? (
                        <ICEyeActive />
                      ) : (
                        <ICEyeActiveDisable className='size-[1.2rem] ' />
                      )}
                    </div>
                  </div>
                </FormControl>
                <FormMessage className='pl-[0.88rem] font-svnGraphik' />
              </FormItem>
            )}
          />
          <span className='block font-normal opacity-50 caption1 text-[0.75rem] text-greyscale-40 xmd:!mt-[0.88rem]'>
            Mật khẩu phải có 6 kí tự trở lên, có chữ thường, chữ hoa và số.
          </span>
          <span className='block font-normal opacity-50 caption1 text-[0.75rem] text-greyscale-40 xmd:!mt-[0.88rem] md:!mt-[0.4rem]'>
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
            {/* <div
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
            </div> */}
          </div>
        </form>
      </Form>

      <div className='flex items-center mx-auto w-fit mt-[2.3rem] '>
        <span className='font-semibold text-blue-500 caption1 opacity-45'>
          Bạn đã có tài khoản ?
        </span>
        <Link
          className='p-[0.59rem] font-semibold caption1 text-blue-500'
          href={'/dang-nhap'}
        >
          Đăng nhập
        </Link>
      </div>
    </article>
  )
}
