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
import {useState, useTransition} from 'react'
import {DialogAvatar} from './components/dialogavatar'
import PopupProvince from '../payment/PopupProvince'
import PopupDistrict from '../payment/PopupDistrict'
import PopupCommune from '../payment/PopupCommune'
import {updateProfile} from '@/actions/updateProfile'

const formSchema = z.object({
  nickname: z.string(),
  fullName: z.string().min(1, 'Trường này là bắt buộc!'),
  email: z
    .string()
    .min(1, {message: 'Trường này là bắt buộc!'})
    .email({message: 'Nhập đúng định dạng email!'}),
  phone: z
    .string()
    .min(1, {message: 'Trường này là bắt buộc!'})
    .regex(/^[0-9]{6,15}$/, {message: 'Định dạng không hợp lệ!'}),
  address: z.string(),
  phoneShip: z.string(),
})
export default function IndexAccount({
  isMobile,
  province,
  district,
  commune,
  profile,
  session,
}) {
  const cityDefautl = profile?.shipping_address?.city?.toLowerCase()
  const districtDefautl = profile?.shipping_address?.address_2?.toLowerCase()
  const communeDefautl = profile?.shipping_address?.address_1

  const defaultValuetProvince =
    province.find((e) => e?.name?.toLowerCase()?.includes(cityDefautl))?.name ||
    null

  const defaultIdProvince =
    province.find((e) => e?.name?.toLowerCase()?.includes(cityDefautl))
      ?.idProvince || null

  const defaultValueDistrict =
    district.find((e) => e?.name?.toLowerCase()?.includes(districtDefautl))
      ?.name || null

  const defaultIdDistrict =
    district.find((e) => e?.name?.toLowerCase()?.includes(districtDefautl))
      ?.idDistrict || null

  const [isPending, setTransition] = useTransition()
  const [isEdit, setIsEdit] = useState(false)
  const [isOpen, setIsOpen] = useState(false)
  const [valueProvince, setValueProvince] = useState(defaultValuetProvince)

  const [idProvince, setIdProvince] = useState(defaultIdProvince)
  const [valueDistrict, setValueDistrict] = useState(defaultValueDistrict)
  const [idDistrict, setIdDistrict] = useState(defaultIdDistrict)

  const communeSplit = communeDefautl?.split(', ')
  const communeSearch =
    communeSplit?.[1]?.toLowerCase() || communeSplit?.[0]?.toLowerCase()
  const defaultValueCommune =
    commune.find((e) => e?.name?.toLowerCase()?.includes(communeSearch))
      ?.name || null

  const [valueCommune, setValueCommune] = useState(defaultValueCommune)

  const [base64, setBase64] = useState('')

  const [birthDay, setBirthDay] = useState(profile?.birthday?.split('/'))

  const [gender, setGender] = useState(
    profile?.gender == '1' ? 'female' : 'male',
  )

  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      nickname: profile?.nickname,
      fullName: profile?.display_name,
      email: profile?.email,
      phone: profile?.phone,
      address: '',
      street: communeSplit?.length > 1 ? communeSplit?.[0] : '',
      phoneShip: profile?.billing_address?.phone,
    },
  })
  const values = form.watch()
  function onSubmit(values) {
    console.log('🚀 ~ onSubmit ~ values:', values)
  }

  const handleBtnSubmit = () => {
    setTransition(() => {
      // const addressForm = JSON.stringify({
      //   address_1: 'KDT Đô Nghĩa, Phường Yên Nghĩa',
      //   address_2: 'Quận Hà Đông',
      //   city: 'Hà Nội',
      // })
      // console.log('🚀 ~ setTransition ~ addressForm:', addressForm)
      const formdata = new FormData()
      formdata.append('shipping_address', '{"company":"hanh"}')

      const request = {
        api: '/custom/v1/customer/customer',
        token: session?.accessToken,
        body: formdata,
      }

      fetch('http://localhost:3000/api/update-profile', request)
        .then((res) => console.log(res))
        .catch((err) => console.log(err))
    })
  }

  const handleReset = () => {
    setIsEdit(false)
    setBirthDay(profile?.birthday?.split('/'))
    setGender(profile?.gender == '1' ? 'female' : 'male')
    setValueProvince(defaultValuetProvince)
    setValueDistrict(defaultValueDistrict)
    setValueCommune(defaultValueCommune)
    setIdProvince(defaultIdProvince)
    setIdDistrict(defaultIdDistrict)
    form.reset({
      nickname: profile?.nickname,
      fullName: profile?.display_name,
      email: profile?.email,
      phone: profile?.phone,
      address: '',
      street: communeSplit?.length > 1 ? communeSplit?.[0] : '',
      phoneShip: profile?.billing_address?.phone,
    })
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
                    className={`${
                      !isEdit ? 'pointer-events-none cursor-not-allowed' : ''
                    } size-[8.63836rem] relative`}
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
                    defaultValue={gender}
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
                <div
                  className={`${
                    !isEdit ? 'cursor-not-allowed' : ''
                  } w-full grid grid-cols-3 gap-x-[0.75rem] `}
                >
                  <PopupDate
                    data={renderArrayDate(1, 31)}
                    defaultValue={convertDefaultValue(birthDay?.[0]) || '1'}
                    disabled={!isEdit}
                  />
                  <PopupDate
                    data={renderArrayDate(1, 13, 'Tháng ')}
                    type={1}
                    defaultValue={
                      convertDefaultValue(birthDay?.[1], 'Tháng ') || 'Tháng 1'
                    }
                    disabled={!isEdit}
                  />
                  <PopupDate
                    data={renderArrayDate(1910, new Date().getFullYear())}
                    type={2}
                    defaultValue={convertDefaultValue(birthDay?.[2]) || '1990'}
                    disabled={!isEdit}
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
                <div
                  className={`${
                    !isEdit ? 'cursor-not-allowed' : ''
                  } grid grid-cols-3 gap-x-[0.75rem] w-full`}
                >
                  <PopupProvince
                    province={province}
                    valueProvince={valueProvince}
                    setValueProvince={setValueProvince}
                    setIdProvince={setIdProvince}
                    disabled={!isEdit}
                  />
                  <PopupDistrict
                    district={district?.filter(
                      (e) => e?.idProvince === idProvince,
                    )}
                    valueDistrict={valueDistrict}
                    setValueDistrict={setValueDistrict}
                    setIdDistrict={setIdDistrict}
                    idProvince={idProvince}
                    disabled={!isEdit}
                  />
                  <PopupCommune
                    commune={commune?.filter(
                      (e) => e?.idDistrict === idDistrict,
                    )}
                    valueCommune={valueCommune}
                    setValueCommune={setValueCommune}
                    idDistrict={idDistrict}
                    disabled={!isEdit}
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
                <div
                  onClick={handleReset}
                  className='caption font-semibold text-blue-800 rounded-[0.43924rem] bg-white w-[8.63836rem] h-[2.4rem] flex items-center justify-center ml-auto mr-[0.59rem] cursor-pointer'
                >
                  HỦY BỎ
                </div>
                <BtnSubmit
                  isPending={isPending}
                  onClick={handleBtnSubmit}
                  title='LƯU THAY ĐỔI'
                  className='!w-[8.63836rem] !h-[2.4rem] !bg-[linear-gradient(90deg,rgba(16,40,65,1)_100%,rgba(16,40,65,1)_100%)] rounded-[0.43924rem] caption font-semibold'
                />
              </div>
            ) : (
              <div
                onClick={() => setIsEdit(true)}
                className='caption font-semibold text-white rounded-[0.43924rem] bg-blue-700 w-[11.78624rem] h-[2.4rem] flex items-center justify-center ml-auto !mt-[0.88rem] cursor-pointer'
              >
                CHỈNH SỬA
              </div>
            )}
          </form>
        </Form>
      </article>
    </section>
  )
}
