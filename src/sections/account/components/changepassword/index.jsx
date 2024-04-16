'use client'
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form'
import {Input} from '@/components/ui/input'
import BtnSubmit from '@/sections/auth/components/btnsubmit'
import {zodResolver} from '@hookform/resolvers/zod'
import {useState} from 'react'
import {useForm} from 'react-hook-form'
import {z} from 'zod'

const formSchema = z.object({
  voucher: z.string().min(1, {message: 'Bạn chưa nhập Voucher!'}),
})
export default function ChangePassWord() {
  const [isEdit, setIsEdit] = useState(false)
  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      password: '',
      passwordNew: '',
      passwordConfirm: '',
    },
  })
  function onSubmit(values) {}
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)}>
        <div className='rounded-[0.58565rem] bg-white p-[1.17rem] shadow-[2px_4px_20px_0px_rgba(0,0,0,0.02)]'>
          <div className='flex items-center'>
            <span className='inline-block font-medium sub2 text-greyscale-80'>
              Đổi mật khẩu
            </span>
            <span>
              (Để đảm bảo tính bảo mật vui lòng đặt mật khẩu với ít nhất 8 kí
              tự)
            </span>
          </div>
          <hr className='bg-[#ECECECB2] h-[0.07rem] w-full my-[0.59rem] block' />
          <div className='flex items-center'>
            <FormLabel
              htmlFor='password'
              className='w-[11.2rem] caption1 font-normal text-greyscale-80 font-svnGraphik block flex-shrink-0'
            >
              Mật khẩu cũ:
            </FormLabel>
            <FormField
              control={form.control}
              name='password'
              render={({field}) => (
                <FormItem className='relative w-full'>
                  <FormControl>
                    <Input
                      className=' !outline-none focus:!outline-none focus-visible:!outline-none border-none font-svnGraphik w-full placeholder:caption1 placeholder:font-medium placeholder:text-greyscale-20'
                      placeholder='***********05'
                      {...field}
                    />
                  </FormControl>
                  <FormMessage className='pl-[0.73rem] mt-[0.2rem]' />
                </FormItem>
              )}
            />
          </div>
          <div className='flex items-center my-[0.59rem]'>
            <FormLabel
              htmlFor='passwordNew'
              className='w-[11.2rem] caption1 font-normal text-greyscale-80 font-svnGraphik block flex-shrink-0'
            >
              Mật khẩu mới:
            </FormLabel>
            <FormField
              control={form.control}
              name='passwordNew'
              render={({field}) => (
                <FormItem className='relative w-full'>
                  <FormControl>
                    <Input
                      className=' !outline-none focus:!outline-none focus-visible:!outline-none border-none font-svnGraphik w-full placeholder:caption1 placeholder:font-medium placeholder:text-greyscale-20'
                      placeholder='***********05'
                      {...field}
                    />
                  </FormControl>
                  <FormMessage className='pl-[0.73rem] mt-[0.2rem]' />
                </FormItem>
              )}
            />
          </div>
          <div className='flex items-center'>
            <FormLabel
              htmlFor='passwordConfirm'
              className='w-[11.2rem] caption1 font-normal text-greyscale-80 font-svnGraphik block flex-shrink-0'
            >
              Xác nhận mật khẩu:
            </FormLabel>
            <FormField
              control={form.control}
              name='passwordConfirm'
              render={({field}) => (
                <FormItem className='relative w-full'>
                  <FormControl>
                    <Input
                      className=' !outline-none focus:!outline-none focus-visible:!outline-none border-none font-svnGraphik w-full placeholder:caption1 placeholder:font-medium placeholder:text-greyscale-20'
                      placeholder='***********05'
                      {...field}
                    />
                  </FormControl>
                  <FormMessage className='pl-[0.73rem] mt-[0.2rem]' />
                </FormItem>
              )}
            />
          </div>
        </div>
        {isEdit ? (
          <div className='flex items-center justify-end !mt-[0.88rem]'>
            <button
              onClick={() => setIsEdit(false)}
              className='caption font-semibold text-blue-800 rounded-[0.43924rem] bg-white w-[8.63836rem] h-[2.4rem] flex items-center justify-center ml-auto mr-[0.59rem]'
            >
              HỦY BỎ
            </button>
            <BtnSubmit
              title='LƯU THAY ĐỔI'
              className='!w-[8.63836rem] !h-[2.4rem] !bg-[linear-gradient(90deg,rgba(16,40,65,1)_100%,rgba(16,40,65,1)_100%)] rounded-[0.43924rem] caption font-semibold'
            />
          </div>
        ) : (
          <button
            onClick={() => setIsEdit(true)}
            className='caption font-semibold text-white rounded-[0.43924rem] bg-blue-700 w-[11.78624rem] h-[2.4rem] flex items-center justify-center ml-auto !mt-[0.88rem]'
          >
            CHỈNH SỬA
          </button>
        )}
      </form>
    </Form>
  )
}
