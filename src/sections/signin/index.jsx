'use client'

import './style.css'

import {zodResolver} from '@hookform/resolvers/zod'
import {useForm} from 'react-hook-form'
import * as z from 'zod'

import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form'
import {Input} from '@/components/ui/input'
import Link from 'next/link'
import Image from 'next/image'
import {signIn} from 'next-auth/react'
import {loginForm} from '@/actions/loginForm'

const formSchema = z.object({
  email: z.string().email({message: 'Invalid email address.'}),
  password: z.string().min(2, {
    message: 'Username must be at least 2 characters.',
  }),
})

export function SignInIndex() {
  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: 'duan@gmail.com',
      password: 'admin@123',
    },
  })

  function onSubmit(values) {
    loginForm(values)
  }

  return (
    <article>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className='space-y-8'
        >
          <FormField
            control={form.control}
            name='email'
            render={({field}) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input
                    placeholder='trinh van duc'
                    {...field}
                  />
                </FormControl>
                <FormDescription>
                  This is your public display name.
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name='password'
            render={({field}) => (
              <FormItem>
                <FormLabel>Password</FormLabel>
                <FormControl>
                  <Input
                    placeholder='finnit.th@gmail.com'
                    {...field}
                  />
                </FormControl>
                <FormDescription>
                  This is your public display name.
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />

          <div className='flex justify-between'>
            <button
              type='submit'
              className='w-[15.666rem] h-[2.928rem] rounded-[0.58565rem] bg-[linear-gradient(97deg,#102841_0%,#1359A1_100%)] text-white caption1 font-semibold flex justify-center items-center'
            >
              Đăng nhập
            </button>
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
          </div>
        </form>
      </Form>
      <div className='flex justify-between items-center mt-[1rem] mb-[1.98rem]'>
        <div>
          <label
            htmlFor='forfet_password'
            className='flex items-center cursor-pointer w-fit'
          >
            <input
              type='checkbox'
              id='forfet_password'
              name='forfet_password'
            />
            <span className='text-blue-500 caption1 opacity-45 block w-fit ml-[0.44rem] select-none group-checked:opacity-1'>
              Ghi nhớ mật khẩu
            </span>
          </label>
        </div>
        <Link
          className='font-semibold text-blue-500 caption1 py-[0.46rem] pl-[0.46rem] select-none'
          href={'/quen-mat-khau'}
        >
          Quên mật khẩu?
        </Link>
      </div>
      <div className='flex items-center mx-auto w-fit'>
        <span className='font-semibold text-blue-500 cpation1 opacity-45'>
          Bạn chưa có tài khoản ?
        </span>
        <Link
          className='p-[0.59rem] font-semibold caption1 text-blue-500'
          href={'/dang-ky'}
        >
          Đăng ký
        </Link>
      </div>
    </article>
  )
}
