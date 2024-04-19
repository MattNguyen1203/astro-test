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

const formSchema = z.object({
  account: z.string().min(1, {
    message: 'Nhập thông tin để tiếp tục!',
  }),
})

export default function FogetPassIndex() {
  const [isPending, startTransition] = useTransition()
  const [isSuccess, setIsSuccess] = useState(false)

  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      account: '',
    },
  })

  function onSubmit(values) {
    startTransition(() => {})
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
            name='account'
            render={({field}) => (
              <FormItem>
                <FormControl>
                  <Input
                    className=' !outline-none focus:!outline-none focus-visible:!outline-none border-none placeholder:text-[0.87848rem] placeholder:font-medium placeholder:opacity-60 placeholder:leading-[1.2] placeholder:tracking-[0.00439rem] placeholder:text-greyscale-40  font-svnGraphik '
                    placeholder='Nhập email/số điện thoại'
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
