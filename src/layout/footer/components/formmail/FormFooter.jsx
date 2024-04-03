'use client'

import {zodResolver} from '@hookform/resolvers/zod'
import {useForm} from 'react-hook-form'
import * as z from 'zod'

import {Form, FormControl, FormField, FormItem} from '@/components/ui/form'
import {Input} from '@/components/ui/input'
import Image from 'next/image'
import {useEffect, useState} from 'react'
import {toast} from 'sonner'

const formSchema = z.object({
  email: z
    .string()
    .min(1, {message: 'Vui lòng điền email!'})
    .email({message: 'Nhập đúng định dạng email!'}),
})
export default function SignInIndex({status}) {
  // const [isPending, startTransition] = useTransition()
  const [isFailed, setIsFailed] = useState(false)

  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: '',
    },
  })

  const {errors} = form.formState

  useEffect(() => {
    if (Number(status) === 401) {
      !isFailed && setIsFailed(true)
    } else {
      isFailed && setIsFailed(false)
    }
  }, [status])

  useEffect(() => {
    if (errors?.email?.message) {
      toast.error(errors?.email?.message, {
        duration: 5000,
      })
      const setError = setTimeout(() => {
        form.setError('email', '')
      }, 5000)
      return () => {
        clearTimeout(setError)
      }
    }
  }, [errors?.email?.message])

  // const values = form.watch()

  function onSubmit(values) {
    // startTransition(() => {})
    const promise = () =>
      new Promise((resolve) =>
        setTimeout(() => resolve({email: values?.email}), 2000),
      )
    toast.promise(promise, {
      loading: 'Đang xử lý...',
      success: (values) => {
        form.reset()
        return `Cảm ơn khách hàng có email: ${values?.email} đã ủng hộ Astromazing!`
      },
      error: 'Đã có lỗi xảy ra!',
    })
  }

  return (
    <article className='size-full xmd:h-fit'>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className='relative'
        >
          <FormField
            control={form.control}
            name='email'
            render={({field}) => (
              <FormItem>
                <FormControl>
                  <Input
                    className='!outline-none focus:!outline-none focus-visible:!outline-none border-none font-svnGraphik rounded-[1.46413rem] bg-white md:shadow-[2.25px_2.25px_3.375px_0px_rgba(0,0,0,0.18)_inset] pl-[1.1rem] pr-[3.6rem] placeholder:text-greyscale-30 placeholder:sub2 placeholder:font-medium xmd:rounded-[0.58565rem]'
                    placeholder='Nhập E-mail của bạn...'
                    {...field}
                  />
                </FormControl>
              </FormItem>
            )}
          />

          <button
            type='submit'
            className='size-fit absolute top-1/2 right-[0.6rem] -translate-y-1/2 p-[0.5rem] z-10 group'
          >
            <Image
              className='size-[1.75rem] group-active:scale-90'
              src={'/layout/footer/air.svg'}
              alt='icon air'
              width={24}
              height={24}
            />
          </button>
        </form>
      </Form>
    </article>
  )
}
