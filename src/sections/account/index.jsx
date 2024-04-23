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
import {zodResolver} from '@hookform/resolvers/zod'
import Image from 'next/image'
import {useForm} from 'react-hook-form'
import * as z from 'zod'
import PopupDate from './components/popupdate'
import {RadioGroup, RadioGroupItem} from '@/components/ui/radio-group'
import {Label} from '@/components/ui/label'
import BtnSubmit from '../auth/components/btnsubmit'
import {useState} from 'react'
import {DialogAvatar} from './components/dialogavatar'
import PopupProvince from '../payment/PopupProvince'
import PopupDistrict from '../payment/PopupDistrict'
import PopupCommune from '../payment/PopupCommune'

const formSchema = z.object({
  voucher: z.string().min(1, {message: 'Bạn chưa nhập Voucher!'}),
})
export default function IndexAccount({
  isMobile,
  province,
  district,
  commune,
  profile,
}) {
  const [isEdit, setIsEdit] = useState(false)
  const [isOpen, setIsOpen] = useState(false)
  const [valueProvince, setValueProvince] = useState(null)
  const [idProvince, setIdProvince] = useState(null)
  const [valueDistrict, setValueDistrict] = useState(null)
  const [idDistrict, setIdDistrict] = useState(null)
  const [valueCommune, setValueCommune] = useState(null)
  const [base64, setBase64] = useState('')

  const birthDay = profile?.birthday?.split('/')
  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      nickname: profile?.nickname,
      fullName: profile?.display_name,
      email: profile?.email,
      phone: profile?.phone,
      address: '',
      street: '',
      phoneShip: profile?.billing_address?.phone,
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

  const convertDefaultValue = (date, before = '') => {
    if (!date) return null
    if (date?.startsWith('0')) {
      return before + date?.slice(1)
    }
    return before + date
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
                  <div className='flex'>
                    <span className='w-[11.2rem] block caption1 font-normal text-greyscale-80'>
                      Tên đăng nhập:
                    </span>
                    <span className='block font-medium caption1 text-greyscale-80'>
                      {profile?.phone || profile?.email}
                    </span>
                  </div>
                  <div className='flex items-center'>
                    <FormLabel
                      htmlFor='nickname'
                      className='w-[11.2rem] caption1 font-normal text-greyscale-80 font-svnGraphik block flex-shrink-0'
                    >
                      Nick name:
                    </FormLabel>
                    <FormField
                      control={form.control}
                      name='nickname'
                      render={({field}) => (
                        <FormItem className='relative w-full'>
                          <FormControl>
                            <Input
                              className=' !outline-none focus:!outline-none focus-visible:!outline-none border-none font-svnGraphik w-full placeholder:caption1 placeholder:font-medium placeholder:text-greyscale-20'
                              placeholder='Thêm nick name'
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
                      htmlFor='fullName'
                      className='w-[11.2rem] caption1 font-normal text-greyscale-80 font-svnGraphik block flex-shrink-0'
                    >
                      Họ và tên:
                    </FormLabel>
                    <FormField
                      control={form.control}
                      name='fullName'
                      render={({field}) => (
                        <FormItem className='relative w-full'>
                          <FormControl>
                            <Input
                              className=' !outline-none focus:!outline-none focus-visible:!outline-none border-none font-svnGraphik w-full placeholder:caption1 placeholder:font-medium placeholder:text-greyscale-20'
                              placeholder='Trịnh Văn Đức'
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
                <DialogAvatar
                  isOpen={isOpen}
                  setIsOpen={setIsOpen}
                  setBase64={setBase64}
                >
                  <div
                    onClick={() => {
                      setIsEdit(true)
                      setIsOpen(true)
                    }}
                    className='size-[8.63836rem] relative'
                  >
                    <Image
                      className='object-cover rounded-full cursor-pointer size-full'
                      src={
                        profile?.picture_profile ||
                        profile?.avatar_url ||
                        '/account/avatar-edit.svg'
                      }
                      alt={profile?.display_name || 'icon avatar default'}
                      width={120}
                      height={120}
                    />
                    {(profile?.picture_profile || profile?.avatar_url) && (
                      <Image
                        className='absolute size-[1.90337rem] bottom-0 right-0 cursor-pointer'
                        src={'/account/edit-avatar.svg'}
                        alt='icon edit avatar'
                        width={36}
                        height={36}
                      />
                    )}
                  </div>
                </DialogAvatar>
              </div>
              <div>
                <div className='flex items-center my-[0.5rem]'>
                  <FormLabel
                    htmlFor='email'
                    className='w-[11.2rem] caption1 font-normal text-greyscale-80 font-svnGraphik block flex-shrink-0'
                  >
                    Email:
                  </FormLabel>
                  <FormField
                    control={form.control}
                    name='email'
                    render={({field}) => (
                      <FormItem className='relative w-full'>
                        <FormControl>
                          <Input
                            className=' !outline-none focus:!outline-none focus-visible:!outline-none border-none font-svnGraphik w-full placeholder:caption1 placeholder:font-medium placeholder:text-greyscale-20'
                            placeholder='Email của bạn'
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
                    htmlFor='phone'
                    className='w-[11.2rem] caption1 font-normal text-greyscale-80 font-svnGraphik block flex-shrink-0'
                  >
                    Số điện thoại:
                  </FormLabel>
                  <FormField
                    control={form.control}
                    name='phone'
                    render={({field}) => (
                      <FormItem className='relative w-full'>
                        <FormControl>
                          <Input
                            className=' !outline-none focus:!outline-none focus-visible:!outline-none border-none font-svnGraphik w-full placeholder:caption1 placeholder:font-medium placeholder:text-greyscale-20'
                            placeholder='Số điện thoại của bạn'
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
                  <span className='w-[11.2rem] block flex-shrink-0 caption1 font-normal text-greyscale-80'>
                    Giới tính:
                  </span>
                  <RadioGroup
                    defaultValue={profile?.gender == '1' ? 'female' : 'male'}
                    className='grid grid-cols-2 gap-[0.59rem] mt-[1.17rem]'
                    disabled={!isEdit}
                  >
                    <Label
                      htmlFor='male'
                      className='flex items-center px-[0.88rem] py-[0.73rem] cursor-pointer'
                    >
                      <RadioGroupItem
                        className='size-[1.46413rem] rounded-full border-[2px] border-solid border-[#ECECEC]'
                        value='male'
                        id='male'
                      />

                      <span className='font-medium caption1 text-greyscale-40 inline-block w-fit ml-[0.59rem]'>
                        Nam
                      </span>
                    </Label>
                    <Label
                      htmlFor='female'
                      className='flex items-center px-[0.88rem] py-[0.73rem] cursor-pointer'
                    >
                      <RadioGroupItem
                        className='size-[1.46413rem] rounded-full border-[2px] border-solid border-[#ECECEC]'
                        value='female'
                        id='female'
                      />

                      <span className='font-medium caption1 text-greyscale-40 inline-block w-fit ml-[0.59rem]'>
                        Nữ
                      </span>
                    </Label>
                  </RadioGroup>
                </div>
              </div>
              <div className='flex items-center'>
                <span className='w-[11.2rem] block flex-shrink-0 caption1 font-normal text-greyscale-80'>
                  Ngày sinh:
                </span>
                <div className='w-full grid grid-cols-3 gap-x-[0.75rem]'>
                  <PopupDate
                    data={renderArrayDate(1, 31)}
                    defaultValue={convertDefaultValue(birthDay?.[0]) || '1'}
                  />
                  <PopupDate
                    data={renderArrayDate(1, 13, 'Tháng ')}
                    type={1}
                    defaultValue={
                      convertDefaultValue(birthDay?.[1], 'Tháng ') || 'Tháng 1'
                    }
                  />
                  <PopupDate
                    data={renderArrayDate(1910, new Date().getFullYear())}
                    type={2}
                    defaultValue={convertDefaultValue(birthDay?.[2]) || '1990'}
                  />
                </div>
              </div>
            </div>
            <div className='rounded-[0.58565rem] bg-white p-[1.17rem] shadow-[2px_4px_20px_0px_rgba(0,0,0,0.02)]'>
              <span className='inline-block font-medium sub2 text-greyscale-80'>
                Địa chỉ nhận hàng
              </span>
              <hr className='bg-[#ECECECB2] h-[0.07rem] w-full my-[0.59rem] block' />
              <div className='flex items-center'>
                <span className='w-[11.2rem] caption1 font-normal text-greyscale-80 font-svnGraphik block flex-shrink-0'>
                  Địa chỉ:
                </span>
                <div className='grid grid-cols-3 gap-x-[0.75rem] w-full'>
                  <PopupProvince
                    province={province}
                    valueProvince={valueProvince}
                    setValueProvince={setValueProvince}
                    setIdProvince={setIdProvince}
                  />
                  <PopupDistrict
                    district={district?.filter(
                      (e) => e?.idProvince === idProvince,
                    )}
                    valueDistrict={valueDistrict}
                    setValueDistrict={setValueDistrict}
                    setIdDistrict={setIdDistrict}
                    idProvince={idProvince}
                  />
                  <PopupCommune
                    commune={commune?.filter(
                      (e) => e?.idDistrict === idDistrict,
                    )}
                    valueCommune={valueCommune}
                    setValueCommune={setValueCommune}
                    idDistrict={idDistrict}
                  />
                </div>
              </div>
              <div className='flex items-center my-[0.56rem]'>
                <FormLabel
                  htmlFor='street'
                  className='w-[11.2rem] caption1 font-normal text-greyscale-80 font-svnGraphik block flex-shrink-0'
                >
                  Địa chỉ cụ thể:
                </FormLabel>
                <FormField
                  control={form.control}
                  name='street'
                  render={({field}) => (
                    <FormItem className='relative w-full'>
                      <FormControl>
                        <Input
                          className=' !outline-none focus:!outline-none focus-visible:!outline-none border-none font-svnGraphik w-full placeholder:caption1 placeholder:font-medium placeholder:text-greyscale-20'
                          placeholder='Số nhà, tên đường*'
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
                  htmlFor='phoneShip'
                  className='w-[11.2rem] caption1 font-normal text-greyscale-80 font-svnGraphik block flex-shrink-0'
                >
                  Số điện thoại:
                </FormLabel>
                <FormField
                  control={form.control}
                  name='phoneShip'
                  render={({field}) => (
                    <FormItem className='relative w-full'>
                      <FormControl>
                        <Input
                          className=' !outline-none focus:!outline-none focus-visible:!outline-none border-none font-svnGraphik w-full placeholder:caption1 placeholder:font-medium placeholder:text-greyscale-20'
                          placeholder='Số điện thoại nhận hàng'
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
