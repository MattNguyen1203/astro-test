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
import {PopupRegister} from '@/sections/auth/components/popup/PopupRegister'
import BtnSubmit from '@/sections/auth/components/btnsubmit'
import SelectOptions from './SelectOptions'
import {Textarea} from '@/components/ui/textarea'

const formSchema = z.object({
  name: z.string().min(1, {message: 'Vui lòng không để trống!'}),
  email: z
    .string()
    .min(1, {message: 'Vui lòng nhập email!'})
    .email({message: 'Nhập đúng định dạng email!'}),
  phone: z
    .string()
    .min(1, {message: 'Vui lòng nhập số điện thoại!'})
    .regex(/^[0-9]{6,15}$/, {message: 'Định dạng không hợp lệ!'}),
  options: z.string().min(1, {message: 'Vui lòng không để trống!'}),
  note: z.string(),
})

export default function FormPreOrder() {
  const [isPending, startTransition] = useTransition()
  const [isSuccess, setIsSuccess] = useState(false)
  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
      email: '',
      phone: '',
      options: '',
      note: '',
    },
  })

  const values = form.watch()

  function onSubmit(values) {
    // startTransition(() => {
    // })
  }

  return (
    <article className='mt-[1.76rem] bg-white p-[1.24rem] w-full'>
      <h3 className='sub2 font-medium text-greyscale-80 xmd:mb-[1.17rem]'>
        THÔNG TIN ĐẶT SẢN PHẨM:
      </h3>
      <div className='flex items-center mt-[1.46rem] mb-[0.88rem] xmd:hidden'>
        <div className='size-[5.27086rem] flex-shrink-0 mr-[0.88rem] rounded-[0.3631rem] overflow-hidden'>
          <Image
            className='object-contain size-full'
            src={'/home/item-product.jpg'}
            alt='item'
            width={72}
            height={72}
          />
        </div>
        <p className='font-medium line-clamp-2 body1 text-greyscale-50'>
          [Paperlike nam châm] Miếng dán AstroMazing Paperfilm Paper like tháo
          rời dành cho iPad Pro 11 12.9 Air 4 5 Gen 7 8 9 10
        </p>
      </div>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className='space-y-[0.88rem]'
        >
          <div className='grid grid-cols-3 gap-[0.88rem] xmd:gap-0 xmd:flex xmd:flex-wrap space-y-[0.88rem]'>
            <FormField
              control={form.control}
              name='name'
              render={({field}) => (
                <FormItem className='xmd:w-full'>
                  <FormControl>
                    <Input
                      type='text'
                      className=' !outline-none focus:!outline-none focus-visible:!outline-none border-none font-svnGraphik'
                      placeholder='Họ và tên *'
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
                <FormItem className='xmd:w-[11.22rem]'>
                  <FormControl>
                    <Input
                      type='email'
                      className=' !outline-none focus:!outline-none focus-visible:!outline-none border-none font-svnGraphik'
                      placeholder='Email *'
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
                <FormItem className='xmd:w-1/2  xmd:ml-[0.88rem]'>
                  <FormControl>
                    <Input
                      className='placeholder:text-[0.87848rem] placeholder:font-medium placeholder:opacity-60 placeholder:leading-[1.2] placeholder:tracking-[0.00439rem] placeholder:text-greyscale-40 font-svnGraphik'
                      placeholder='Số điện thoại *'
                      type='tel'
                      {...field}
                    />
                  </FormControl>
                  <FormMessage className='pl-[0.88rem] font-svnGraphik' />
                </FormItem>
              )}
            />
          </div>
          <div className='w-full xmd:h-[3.22rem]'>
            <SelectOptions form={form} />
          </div>
          <div className='w-full'>
            <FormField
              control={form.control}
              name='note'
              render={({field}) => (
                <FormItem>
                  <FormControl>
                    <Textarea
                      placeholder='Ghi chú thêm'
                      {...field}
                    />
                  </FormControl>
                  <FormMessage className='pl-[0.88rem] font-svnGraphik' />
                </FormItem>
              )}
            />
          </div>
          <div className='flex justify-between'>
            <BtnSubmit
              className='bg-[linear-gradient(100deg,#F39807_46.57%,#FFDBA3_100.64%)] w-full'
              isPending={isPending}
              title='GỬI YÊU CẦU'
            />
          </div>
          <div className='flex items-center h-fit'>
            <div className='bg-[#ECECEC] h-[3.07rem] w-[0.15rem] rounded-[0.07321rem] mr-[0.59rem] flex-shrink-0'></div>
            <p className='font-normal body2 text-greyscale-40'>
              Sau khi khách hàng gửi yêu cầu, AstroMazing sẽ liên hệ và giữ kết
              nối khi cần thiết trong quá trình cập nhật và thông báo cho khách
              hàng sớm nhất về thông tin sản phẩm
            </p>
          </div>
        </form>
      </Form>

      <PopupRegister
        isOpen={isSuccess}
        setIsSuccess={setIsSuccess}
        isSignUp={true}
      />
    </article>
  )
}
