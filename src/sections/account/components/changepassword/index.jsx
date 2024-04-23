'use client'
import {updateProfile} from '@/actions/updateProfile'
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
import {PopupResetPass} from '@/sections/auth/components/popup/PopupResetPass'
import {zodResolver} from '@hookform/resolvers/zod'
import {useState, useTransition} from 'react'
import {useForm} from 'react-hook-form'
import {toast} from 'sonner'
import {z} from 'zod'

const formSchema = z
  .object({
    passwordOld: z
      .string()
      .min(1, {message: 'Vui lòng nhập mật khẩu hiện tại!'}),
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
  .refine((data) => data.passwordOld !== data.password, {
    message: 'Mật khẩu mới phải khác mật khẩu hiện tại!',
    path: ['password'],
  })
export default function ChangePassWord({profile, session}) {
  const [isEdit, setIsEdit] = useState(false)
  const [isPending, setTransition] = useTransition()
  const [isSuccess, setIsSuccess] = useState(false)

  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      passwordOld: '',
      password: '',
      confirmPassword: '',
    },
  })

  function onSubmit(values) {
    setTransition(() => {
      const formdata = new FormData()
      formdata.append('old_pass', values?.passwordOld)
      formdata.append('new_pass', values?.password)
      formdata.append('re_new', values?.confirmPassword)

      const request = {
        api: '/custom/v1/customer/updateCustomer',
        token: session?.accessToken,
        body: formdata,
      }

      updateProfile(request)
        .then((res) => {
          console.log('🚀 ~ .then ~ res:', res)
          if (res?.message?.includes('successfully')) {
            setIsEdit(false)
            setIsSuccess(true)
          } else {
            toast.error('Mật khẩu cũ chưa chính xác. Vui lòng thử lại!', {
              duration: 5000,
              position: 'bottom-center',
            })
          }
        })
        .catch((err) => console.log('err', err))
    })
  }
  return (
    <>
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
                htmlFor='passwordOld'
                className='w-[11.2rem] caption1 font-normal text-greyscale-80 font-svnGraphik block flex-shrink-0'
              >
                Mật khẩu cũ:
              </FormLabel>
              <FormField
                control={form.control}
                name='passwordOld'
                render={({field}) => (
                  <FormItem className='relative w-full'>
                    <FormControl>
                      <Input
                        className=' !outline-none focus:!outline-none focus-visible:!outline-none border-none font-svnGraphik w-full placeholder:caption1 placeholder:font-medium placeholder:text-greyscale-20'
                        placeholder='Nhập mật khẩu cũ'
                        disabled={!isEdit}
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
                htmlFor='password'
                className='w-[11.2rem] caption1 font-normal text-greyscale-80 font-svnGraphik block flex-shrink-0'
              >
                Mật khẩu mới:
              </FormLabel>
              <FormField
                control={form.control}
                name='password'
                render={({field}) => (
                  <FormItem className='relative w-full'>
                    <FormControl>
                      <Input
                        className=' !outline-none focus:!outline-none focus-visible:!outline-none border-none font-svnGraphik w-full placeholder:caption1 placeholder:font-medium placeholder:text-greyscale-20'
                        placeholder='Nhập mật khẩu mới'
                        disabled={!isEdit}
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
                htmlFor='confirmPassword'
                className='w-[11.2rem] caption1 font-normal text-greyscale-80 font-svnGraphik block flex-shrink-0'
              >
                Xác nhận mật khẩu:
              </FormLabel>
              <FormField
                control={form.control}
                name='confirmPassword'
                render={({field}) => (
                  <FormItem className='relative w-full'>
                    <FormControl>
                      <Input
                        className=' !outline-none focus:!outline-none focus-visible:!outline-none border-none font-svnGraphik w-full placeholder:caption1 placeholder:font-medium placeholder:text-greyscale-20'
                        placeholder='Nhập lại mật khẩu mới'
                        disabled={!isEdit}
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
                isPending={isPending}
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
      <PopupResetPass
        isChange={true}
        isOpen={isSuccess}
        setIsSuccess={setIsSuccess}
      />
    </>
  )
}
