'use client'
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from '@/components/ui/form'
import {Input} from '@/components/ui/input'
import {zodResolver} from '@hookform/resolvers/zod'
import Image from 'next/image'
import {useForm} from 'react-hook-form'
import * as z from 'zod'
import PopupDate from './components/popupdate'
import {RadioGroup, RadioGroupItem} from '@/components/ui/radio-group'
import {Label} from '@/components/ui/label'
import BtnSubmit from '../auth/components/btnsubmit'
import {useState} from 'react'

const formSchema = z.object({
  voucher: z.string().min(1, {message: 'Bạn chưa nhập Voucher!'}),
})
export default function IndexAccount() {
  const [isEdit, setIsEdit] = useState(false)
  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      voucher: '',
    },
  })
  function onSubmit(values) {
    console.log('🚀 ~ onSubmit ~ values:', values)
  }

  const renderArrayDate = (start, end, before = '') => {
    const arr = []
    for (let index = start; index < end; index++) {
      arr.push(before + index)
    }
    return arr
  }
  return (
    <section>
      <article>
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className='space-y-[0.59rem]'
          >
            <div className='rounded-[0.58565rem] bg-white p-[1.17rem] shadow-[2px_4px_20px_0px_rgba(0,0,0,0.02)]'>
              <span className='inline-block font-medium sub2 text-greyscale-80'>
                Thông tin thành viên
              </span>
              <hr className='bg-[#ECECECB2] h-[0.07rem] w-full my-[0.59rem] block' />
              <div className='flex items-center justify-between'>
                <div className='w-[36.4rem] space-y-[0.7rem]'>
                  <FormField
                    control={form.control}
                    name='voucher'
                    render={({field}) => (
                      <FormItem className='relative w-full'>
                        <FormControl>
                          <Input
                            className=' !outline-none focus:!outline-none focus-visible:!outline-none border-none font-svnGraphik w-full'
                            placeholder='Nhập mã voucher của bạn'
                            {...field}
                          />
                        </FormControl>
                        <FormMessage className='absolute bottom-0 left-0 translate-y-full' />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name='voucher'
                    render={({field}) => (
                      <FormItem className='relative w-full'>
                        <FormControl>
                          <Input
                            className=' !outline-none focus:!outline-none focus-visible:!outline-none border-none font-svnGraphik w-full'
                            placeholder='Nhập mã voucher của bạn'
                            {...field}
                          />
                        </FormControl>
                        <FormMessage className='absolute bottom-0 left-0 translate-y-full' />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name='voucher'
                    render={({field}) => (
                      <FormItem className='relative w-full'>
                        <FormControl>
                          <Input
                            className=' !outline-none focus:!outline-none focus-visible:!outline-none border-none font-svnGraphik w-full'
                            placeholder='Nhập mã voucher của bạn'
                            {...field}
                          />
                        </FormControl>
                        <FormMessage className='absolute bottom-0 left-0 translate-y-full' />
                      </FormItem>
                    )}
                  />
                </div>
                <div className='size-[8.63836rem]'>
                  <Image
                    className='object-cover cursor-pointer size-full'
                    src={'/account/avatar-edit.svg'}
                    alt='icon avatar default'
                    width={120}
                    height={120}
                  />
                </div>
              </div>
              <div>
                <FormField
                  control={form.control}
                  name='voucher'
                  render={({field}) => (
                    <FormItem className='relative w-full'>
                      <FormControl>
                        <Input
                          className=' !outline-none focus:!outline-none focus-visible:!outline-none border-none font-svnGraphik w-full'
                          placeholder='Nhập mã voucher của bạn'
                          {...field}
                        />
                      </FormControl>
                      <FormMessage className='absolute bottom-0 left-0 translate-y-full' />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name='voucher'
                  render={({field}) => (
                    <FormItem className='relative w-full'>
                      <FormControl>
                        <Input
                          className=' !outline-none focus:!outline-none focus-visible:!outline-none border-none font-svnGraphik w-full'
                          placeholder='Nhập mã voucher của bạn'
                          {...field}
                        />
                      </FormControl>
                      <FormMessage className='absolute bottom-0 left-0 translate-y-full' />
                    </FormItem>
                  )}
                />
                <RadioGroup
                  defaultValue=''
                  className='grid grid-cols-2 gap-[0.59rem] mt-[1.17rem]'
                >
                  <Label
                    htmlFor='in'
                    className='flex items-center px-[0.88rem] py-[0.73rem] border border-solid border-white shadow-[0px_2px_20px_0px_rgba(0,0,0,0.04),2px_2px_12px_0px_rgba(0,0,0,0.02)] bg-white rounded-[0.58565rem] cursor-pointer'
                  >
                    <RadioGroupItem
                      className='size-[1.46413rem] rounded-full border-[2px] border-solid border-[#ECECEC]'
                      value='in'
                      id='in'
                    />

                    <span className='font-medium caption1 text-greyscale-40'>
                      Nam
                    </span>
                  </Label>
                  <Label
                    htmlFor='out'
                    className='flex items-center px-[0.88rem] py-[0.73rem] border border-solid border-white shadow-[0px_2px_20px_0px_rgba(0,0,0,0.04),2px_2px_12px_0px_rgba(0,0,0,0.02)] bg-white rounded-[0.58565rem] cursor-pointer'
                  >
                    <RadioGroupItem
                      className='size-[1.46413rem] rounded-full border-[2px] border-solid border-[#ECECEC]'
                      value='out'
                      id='out'
                    />

                    <span className='font-medium caption1 text-greyscale-40'>
                      Nữ
                    </span>
                  </Label>
                </RadioGroup>
              </div>
              <div>
                <PopupDate data={renderArrayDate(1, 31)} />
                <PopupDate
                  data={renderArrayDate(1, 12, 'Tháng ')}
                  type={1}
                />
                <PopupDate
                  data={renderArrayDate(1910, new Date().getFullYear())}
                  type={2}
                />
              </div>
            </div>
            <div className='rounded-[0.58565rem] bg-white p-[1.17rem] shadow-[2px_4px_20px_0px_rgba(0,0,0,0.02)]'>
              <span className='inline-block font-medium sub2 text-greyscale-80'>
                Địa chỉ nhận hàng
              </span>
              <hr className='bg-[#ECECECB2] h-[0.07rem] w-full my-[0.59rem] block' />
              <div></div>
              <FormField
                control={form.control}
                name='street'
                render={({field}) => (
                  <FormItem className='relative w-full'>
                    <FormControl>
                      <Input
                        className=' !outline-none focus:!outline-none focus-visible:!outline-none border-none font-svnGraphik w-full'
                        placeholder='Nhập mã voucher của bạn'
                        {...field}
                      />
                    </FormControl>
                    <FormMessage className='absolute bottom-0 left-0 translate-y-full' />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name='phone'
                render={({field}) => (
                  <FormItem className='relative w-full'>
                    <FormControl>
                      <Input
                        className=' !outline-none focus:!outline-none focus-visible:!outline-none border-none font-svnGraphik w-full'
                        placeholder='Nhập mã voucher của bạn'
                        {...field}
                      />
                    </FormControl>
                    <FormMessage className='absolute bottom-0 left-0 translate-y-full' />
                  </FormItem>
                )}
              />
            </div>
            <div className='rounded-[0.58565rem] bg-white p-[1.17rem] shadow-[2px_4px_20px_0px_rgba(0,0,0,0.02)]'>
              <div className='flex items-center'>
                <span className='inline-block font-medium sub2 text-greyscale-80'>
                  Đổi mật khẩu
                </span>
                <span>
                  (Để đảm bảo tính bảo mật vui lòng đặt mật khẩu với ít nhất 8
                  kí tự)
                </span>
              </div>
              <hr className='bg-[#ECECECB2] h-[0.07rem] w-full my-[0.59rem] block' />
              <FormField
                control={form.control}
                name='passwordBefore'
                render={({field}) => (
                  <FormItem className='relative w-full'>
                    <FormControl>
                      <Input
                        className=' !outline-none focus:!outline-none focus-visible:!outline-none border-none font-svnGraphik w-full'
                        placeholder='Nhập mã voucher của bạn'
                        {...field}
                      />
                    </FormControl>
                    <FormMessage className='absolute bottom-0 left-0 translate-y-full' />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name='password'
                render={({field}) => (
                  <FormItem className='relative w-full'>
                    <FormControl>
                      <Input
                        className=' !outline-none focus:!outline-none focus-visible:!outline-none border-none font-svnGraphik w-full'
                        placeholder='Nhập mã voucher của bạn'
                        {...field}
                      />
                    </FormControl>
                    <FormMessage className='absolute bottom-0 left-0 translate-y-full' />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name='passwordConfirm'
                render={({field}) => (
                  <FormItem className='relative w-full'>
                    <FormControl>
                      <Input
                        className=' !outline-none focus:!outline-none focus-visible:!outline-none border-none font-svnGraphik w-full'
                        placeholder='Nhập mã voucher của bạn'
                        {...field}
                      />
                    </FormControl>
                    <FormMessage className='absolute bottom-0 left-0 translate-y-full' />
                  </FormItem>
                )}
              />
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
      </article>
    </section>
  )
}
