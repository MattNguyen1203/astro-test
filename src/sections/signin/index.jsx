'use client'

import './style.css'

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
import {signIn, useSession} from 'next-auth/react'
import {loginForm} from '@/actions/loginForm'
import {useEffect, useState, useTransition} from 'react'
import BtnSubmit from '../auth/components/btnsubmit'
import {PopupResetPass} from '../auth/components/popup/PopupResetPass'

const formSchema = z.object({
  // email: z.string().email({message: 'Nhập đúng định dạng email!'}),
  phone: z
    .string()
    .min(1, {message: 'Vui lòng nhập số điện thoại!'})
    .regex(/^[0-9]{6,15}$/, {message: 'Định dạng không hợp lệ!'}),
  password: z
    .string()
    .min(6, {message: 'Mật khẩu phải có từ 6 kí tự trở lên!'}),
})

export default function SignInIndex({status}) {
  const {update} = useSession()
  const [isPending, startTransition] = useTransition()
  const [isFailed, setIsFailed] = useState(false)
  const [notePass, setNotePass] = useState(false)

  useEffect(() => {
    if (Number(status) === 401) {
      !isFailed && setIsFailed(true)
    } else {
      isFailed && setIsFailed(false)
    }
  }, [status])

  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      phone: '',
      password: '',
    },
  })

  useEffect(() => {
    update()
    const account = JSON.parse(localStorage.getItem('account'))
    if (account) {
      setNotePass(true)
      form.setValue('phone', account?.login)
      form.setValue('password', account?.password)
    }
  }, [])

  function onSubmit(values) {
    startTransition(() => {
      const payload = {
        login: values?.phone,
        password: values?.password,
        type: 'phone',
      }
      if (notePass) {
        localStorage.setItem(
          'account',
          JSON.stringify({
            login: values?.phone,
            password: values?.password,
          }),
        )
      } else {
        localStorage.removeItem('account')
      }
      loginForm(payload)
        .then((res) => {})
        .catch((err) => {
          console.log('err', err)
          setIsFailed(true)
        })
    })
  }

  return (
    <article className='mt-[1.98rem] xmd:mt-[1.17rem]'>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className='lg:space-y-[0.88rem]'
        >
          <FormField
            control={form.control}
            name='phone'
            render={({field}) => (
              <FormItem>
                <FormControl>
                  <Input
                    className=' !outline-none focus:!outline-none focus-visible:!outline-none border-none font-svnGraphik xmd:rounded-[0.58565rem] placeholder:text-[0.87848rem] placeholder:font-medium placeholder:opacity-60 placeholder:leading-[1.2] placeholder:tracking-[0.00439rem] placeholder:text-greyscale-40'
                    placeholder='Nhập số điện thoại'
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
                    className='placeholder:text-[0.87848rem] placeholder:font-medium placeholder:opacity-60 placeholder:leading-[1.2] placeholder:tracking-[0.00439rem] placeholder:text-greyscale-40 font-svnGraphik xmd:mt-[0.59rem] xmd:rounded-[0.58565rem]'
                    placeholder='Mật khẩu'
                    {...field}
                  />
                </FormControl>
                <FormMessage className='pl-[0.88rem] font-svnGraphik' />
              </FormItem>
            )}
          />

          <div className='flex justify-between xmd:mt-[1.76rem]'>
            <BtnSubmit
              isPending={isPending}
              title='Đăng nhập'
            />
            <div className='flex'>
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
          </div>
        </form>
      </Form>
      <div className='flex justify-between items-center mt-[1rem] mb-[1.98rem] xmd:mt-[2.34rem] xmd:mb-[2.64rem]'>
        <div>
          <label
            htmlFor='forfet_password'
            className='flex items-center cursor-pointer w-fit'
          >
            <input
              onChange={(e) => {
                setNotePass(e?.target?.checked)
              }}
              checked={notePass}
              type='checkbox'
              id='forfet_password'
              name='forfet_password'
            />
            <span className='text-blue-500 caption1 font-semibold opacity-45 block w-fit ml-[0.44rem] select-none group-checked:opacity-1'>
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
      <PopupResetPass
        isLogin={true}
        isOpen={isFailed}
        setIsSuccess={setIsFailed}
      />
    </article>
  )
}
