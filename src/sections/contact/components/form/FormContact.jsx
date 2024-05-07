'use client'

import {zodResolver} from '@hookform/resolvers/zod'
import {useForm} from 'react-hook-form'
import * as z from 'zod'

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form'
import {Input} from '@/components/ui/input'
import Image from 'next/image'

import {useState, useTransition} from 'react'
import {Textarea} from '@/components/ui/textarea'
import {toast} from 'sonner'
import {IDFORMCONTACT} from '@/lib/IdPageAPI'
import {submitForm} from '@/actions/submitForm'

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
  note: z.string(),
})

export default function FormContact() {
  const [isPending, startTransition] = useTransition()
  const [isSuccess, setIsSuccess] = useState(false)
  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
      email: '',
      phone: '',
      note: '',
    },
  })

  function onSubmit(values) {
    startTransition(() => {
      const formData = new FormData()
      formData.append('name', values.name)
      formData.append('phone', values.phone)
      formData.append('email', values.email)
      formData.append('message', values.note)
      formData.append('_wpcf7_unit_tag', IDFORMCONTACT)

      const promise = () =>
        submitForm(
          `/contact-form-7/v1/contact-forms/${IDFORMCONTACT}/feedback`,
          formData,
        )
          .then((res) => {
            console.log('🚀 ~ .then ~ res:', res)
            if (res?.status === 'mail_sent') {
              return res
            } else {
              throw new Error(res?.message || 'Lỗi không xác định.')
            }
          })
          .catch((err) => {
            throw new Error(err)
          })
      toast.promise(promise, {
        loading: 'Đang gửi yêu cầu...',
        success: (values) => {
          form.reset()
          return `Chúng tôi đã nhận được yêu cầu và sẽ phản hồi lại sớm nhất!`
        },
        error: 'Gửi yêu cầu thất bại!',
      })
    })
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className='space-y-[0.88rem] w-full xlg:px-[2rem] xmd:px-0'
      >
        <FormField
          control={form.control}
          name='name'
          render={({field}) => (
            <FormItem className='xmd:w-full'>
              <FormControl>
                <Input
                  type='text'
                  className='tablet:text-[2rem] tablet:placeholder:text-[2rem] placeholder:text-[1.02489rem] placeholder:font-normal placeholder:leading-[1.2] placeholder:text-greyscale-20 bg-transparent border border-solid rounded-[0.58565rem] border-greyscale-10 p-[1.02rem]'
                  placeholder='Tên của bạn *'
                  {...field}
                />
              </FormControl>
              <FormMessage className='pl-[0.88rem] mt-[0.5rem]' />
            </FormItem>
          )}
        />
        <div className='grid grid-cols-2 gap-x-[0.88rem] tablet:grid-cols-1 tablet:gap-y-[0.88rem] xmd:grid-cols-1 xmd:gap-x-0 xmd:gap-y-[0.88rem]'>
          <FormField
            control={form.control}
            name='phone'
            render={({field}) => (
              <FormItem className=''>
                <FormControl>
                  <Input
                    className='tablet:text-[2rem] tablet:placeholder:text-[2rem] placeholder:text-[1.02489rem] placeholder:font-normal placeholder:leading-[1.2] placeholder:text-greyscale-20 bg-transparent border border-solid rounded-[0.58565rem] border-greyscale-10 p-[1.02rem]'
                    placeholder='Số điện thoại *'
                    type='tel'
                    {...field}
                  />
                </FormControl>
                <FormMessage className='pl-[0.88rem] mt-[0.5rem]' />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name='email'
            render={({field}) => (
              <FormItem className=''>
                <FormControl>
                  <Input
                    type='email'
                    className='tablet:text-[2rem] tablet:placeholder:text-[2rem] placeholder:text-[1.02489rem] placeholder:font-normal placeholder:leading-[1.2] placeholder:text-greyscale-20 bg-transparent border border-solid rounded-[0.58565rem] border-greyscale-10 p-[1.02rem]'
                    placeholder='Email *'
                    {...field}
                  />
                </FormControl>
                <FormMessage className='pl-[0.88rem] mt-[0.5rem]' />
              </FormItem>
            )}
          />
        </div>

        <div className='w-full !mt-[1.76rem] xmd:!mt-[1.46rem]'>
          <FormField
            control={form.control}
            name='note'
            render={({field}) => (
              <FormItem>
                <FormLabel className='!font-svnGraphik sub2 tablet:text-[2rem] xmd:sub2 font-medium text-blue-600 mb-[0.88rem] block w-fit'>
                  Yêu cầu
                </FormLabel>
                <FormControl>
                  <Textarea
                    className='tablet:text-[2rem] tablet:placeholder:text-[2rem] tablet:p-[1rem] tablet:leading-[100%] placeholder:text-[1.02489rem] 
                    placeholder:font-normal placeholder:leading-[1.2] placeholder:text-greyscale-20 bg-transparent 
                    border border-solid rounded-[0.58565rem] border-greyscale-10 p-[0.88rem]'
                    placeholder='Viết yêu cầu của bạn'
                    {...field}
                  />
                </FormControl>
                <FormMessage className='pl-[0.88rem] mt-[0.5rem]' />
              </FormItem>
            )}
          />
        </div>
        {/* <BtnSubmit
              className='bg-[linear-gradient(100deg,#F39807_46.57%,#FFDBA3_100.64%)] w-full'
              isPending={isPending}
              title='GỬI YÊU CẦU'
            /> */}
        <button
          type='submit'
          className={`${
            isPending ? 'pointer-events-none' : ''
          } tablet:p-[2.5rem_2rem] flex justify-center items-center w-full h-[3.51391rem] rounded-[0.58565rem] bg-[linear-gradient(97deg,#102841_0%,#1359A1_100%)] !mt-[1.76rem] xlg:!mt-[1.5rem] `}
        >
          {isPending ? (
            <svg
              className='animate-spin h-[2rem] w-[2rem] text-white'
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              viewBox='0 0 24 24'
            >
              <circle
                className='opacity-25'
                cx='12'
                cy='12'
                r='10'
                stroke='currentColor'
                strokeWidth='4'
              ></circle>
              <path
                fill='currentColor'
                d='M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z'
              ></path>
            </svg>
          ) : (
            <>
              <span className='button font-semibold text-center text-white mr-[0.73206rem] tablet:text-[2rem]'>
                GỬI NGAY
              </span>
              <Image
                width={16}
                height={16}
                alt='next icon'
                src={'/contact/next.svg'}
              />
            </>
          )}
        </button>
      </form>
    </Form>
  )
}
