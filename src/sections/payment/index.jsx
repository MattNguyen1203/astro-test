'use client'
import ICBoxCheck from '@/components/icon/ICBoxCheck'
import ICCheck from '@/components/icon/ICCheck'
import {Label} from '@/components/ui/label'
import {RadioGroup, RadioGroupItem} from '@/components/ui/radio-group'
import ItemProductPayment from '@/sections/payment/ItemProductPayment'
import Image from 'next/image'
import {zodResolver} from '@hookform/resolvers/zod'
import {useForm} from 'react-hook-form'
import * as z from 'zod'

import {Form, FormControl, FormField, FormItem} from '@/components/ui/form'
import {Input} from '@/components/ui/input'

import {useState} from 'react'
import PopupProvince from './PopupProvince'
import PopupDistrict from './PopupDistrict'
import PopupCommune from './PopupCommune'
import {Textarea} from '@/components/ui/textarea'
import FormUseVoucher from './FormUseVoucher'

const formSchema = z.object({
  email: z.string().email({message: 'Nhập đúng định dạng email!'}),
  password: z
    .string()
    .min(6, {message: 'Mật khẩu phải có từ 6 kí tự trở lên!'}),
  // .regex(/[a-z]/, {
  //   message: 'Mật khẩu phải có ít nhất 1 chữ thường!',
  // })
  // .regex(/[A-Z]/, {
  //   message: 'Mật khẩu phải có ít nhất 1 chữ hoa!',
  // })
  // .regex(/[0-9]/, {message: 'Mật khẩu phải có ít nhất 1 chữ số!'}),
})

export default function PaymentIndex({province, district, commune}) {
  const [valueProvince, setValueProvince] = useState(null)
  const [idProvince, setIdProvince] = useState(null)
  const [valueDistrict, setValueDistrict] = useState(null)
  const [idDistrict, setIdDistrict] = useState(null)
  const [valueCommune, setValueCommune] = useState(null)
  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
      phone: '',
      email: '',
      address: '',
      street: '',
      note: '',
      password: '',
    },
  })

  const values = form.watch()

  function onSubmit(values) {}
  return (
    <section className='container relative flex justify-between'>
      <article className='w-[50.88rem] h-fit sticky top-[9.76rem] left-0 space-y-[0.88rem]'>
        <div className='bg-white rounded-[0.58565rem] p-[1.76rem]'>
          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(onSubmit)}
              className='space-y-[0.88rem]'
            >
              <FormField
                control={form.control}
                name='name'
                render={({field}) => (
                  <FormItem>
                    <FormControl>
                      <Input
                        className=' !outline-none focus:!outline-none focus-visible:!outline-none border-none font-svnGraphik'
                        placeholder='Họ và tên *'
                        {...field}
                      />
                    </FormControl>
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name='phone'
                render={({field}) => (
                  <FormItem>
                    <FormControl>
                      <Input
                        className='placeholder:text-[0.87848rem] placeholder:font-medium placeholder:opacity-60 placeholder:leading-[1.2] placeholder:tracking-[0.00439rem] placeholder:text-greyscale-40 font-svnGraphik'
                        placeholder='Số điện thoại *'
                        {...field}
                      />
                    </FormControl>
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name='email'
                render={({field}) => (
                  <FormItem>
                    <FormControl>
                      <Input
                        className='placeholder:text-[0.87848rem] placeholder:font-medium placeholder:opacity-60 placeholder:leading-[1.2] placeholder:tracking-[0.00439rem] placeholder:text-greyscale-40 font-svnGraphik'
                        placeholder='Email *'
                        {...field}
                      />
                    </FormControl>
                  </FormItem>
                )}
              />
              <div className='flex space-x-[0.88rem]'>
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
                  commune={commune?.filter((e) => e?.idDistrict === idDistrict)}
                  valueCommune={valueCommune}
                  setValueCommune={setValueCommune}
                  idDistrict={idDistrict}
                />
              </div>
              <FormField
                control={form.control}
                name='street'
                render={({field}) => (
                  <FormItem>
                    <FormControl>
                      <Input
                        className='placeholder:text-[0.87848rem] placeholder:font-medium placeholder:opacity-60 placeholder:leading-[1.2] placeholder:tracking-[0.00439rem] placeholder:text-greyscale-40 font-svnGraphik'
                        placeholder='Số nhà, tên đường *'
                        {...field}
                      />
                    </FormControl>
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name='note'
                render={({field}) => (
                  <FormItem>
                    <FormControl>
                      <Textarea
                        placeholder='Ghi chú cho giao hàng (tùy chọn)'
                        {...field}
                      />
                    </FormControl>
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
                        className='placeholder:text-[0.87848rem] placeholder:font-medium placeholder:opacity-60 placeholder:leading-[1.2] placeholder:tracking-[0.00439rem] placeholder:text-greyscale-40 font-svnGraphik'
                        placeholder='Tạo mật khẩu để theo dõi đơn hàng *'
                        {...field}
                      />
                    </FormControl>
                  </FormItem>
                )}
              />
            </form>
          </Form>
        </div>
        <div className='bg-white rounded-[0.58565rem] p-[1.76rem] space-y-[1.17rem]'>
          <h3 className='font-medium sub2 text-greyscale-80'>
            VOUCHER CỦA BẠN
          </h3>
          <div className='flex items-center'>
            <div className='size-[1.75695rem] relative overflow-hidden cursor-pointer '>
              <ICBoxCheck className='size-full' />
              <div className='absolute top-0 left-0 flex items-center justify-center bg-blue-700 size-full rounded-[0.25rem]'>
                <ICCheck className='w-[0.8rem] h-auto' />
              </div>
              <input
                readOnly
                type='checkbox'
                className='opacity-0 pointer-events-none size-0'
              />
            </div>
            <p className='font-normal text-greyscale-40 ml-[0.59rem]'>
              Áp dụng{' '}
              <span className='font-semibold'>Voucher miễn phí vận chuyển</span>{' '}
              cho đơn hàng trên 300k
            </p>
          </div>
          <div className='flex items-center'>
            <div className='size-[1.75695rem] relative overflow-hidden cursor-pointer '>
              <ICBoxCheck className='size-full' />
              <div className='absolute top-0 left-0 flex items-center justify-center bg-blue-700 size-full rounded-[0.25rem]'>
                <ICCheck className='w-[0.8rem] h-auto' />
              </div>
              <input
                readOnly
                type='checkbox'
                className='opacity-0 pointer-events-none size-0'
              />
            </div>
            <p className='font-normal text-greyscale-40 ml-[0.59rem]'>
              Tự động áp dụng Voucher có giá trị cao nhất
            </p>
          </div>
          <div>
            <span className='inline-block mb-[0.59rem]'>
              Hoặc nhập mã Voucher
            </span>
            <FormUseVoucher />
          </div>
        </div>
        <div className='bg-white rounded-[0.58565rem] p-[1.76rem]'>
          <h3 className='font-medium sub2 text-greyscale-80'>
            HÌNH THỨC THANH TOÁN:
          </h3>

          <RadioGroup
            defaultValue=''
            className='grid grid-cols-2 gap-[0.59rem] mt-[1.17rem]'
          >
            <Label
              htmlFor='r1'
              className='flex items-center px-[0.88rem] py-[0.73rem] border border-solid border-white shadow-[0px_2px_20px_0px_rgba(0,0,0,0.04),2px_2px_12px_0px_rgba(0,0,0,0.02)] bg-white rounded-[0.58565rem] cursor-pointer'
            >
              <RadioGroupItem
                className='size-[1.46413rem] rounded-full border-[2px] border-solid border-[#ECECEC]'
                value='cod'
                id='r1'
              />
              <Image
                className='w-[1.46413rem] h-auto object-contain block ml-[0.88rem] mr-[0.44rem]'
                src={'/account/car.svg'}
                alt='icon car'
                width={24}
                height={24}
              />
              <span className='font-medium caption1 text-greyscale-40'>
                Thanh toán khi nhận hàng (COD)
              </span>
            </Label>
            <Label
              htmlFor='r2'
              className='flex items-center px-[0.88rem] py-[0.73rem] border border-solid border-white shadow-[0px_2px_20px_0px_rgba(0,0,0,0.04),2px_2px_12px_0px_rgba(0,0,0,0.02)] bg-white rounded-[0.58565rem] cursor-pointer'
            >
              <RadioGroupItem
                className='size-[1.46413rem] rounded-full border-[2px] border-solid border-[#ECECEC]'
                value='ck'
                id='r2'
              />
              <Image
                className='w-[1.46413rem] h-auto object-contain block ml-[0.88rem] mr-[0.44rem]'
                src={'/payment/banking.svg'}
                alt='icon banking'
                width={24}
                height={24}
              />
              <span className='font-medium caption1 text-greyscale-40'>
                Chuyển khoản
              </span>
            </Label>
            <Label
              htmlFor='r3'
              className='flex items-center px-[0.88rem] py-[0.73rem] border border-solid border-white shadow-[0px_2px_20px_0px_rgba(0,0,0,0.04),2px_2px_12px_0px_rgba(0,0,0,0.02)] bg-white rounded-[0.58565rem] cursor-pointer'
            >
              <RadioGroupItem
                className='size-[1.46413rem] rounded-full border-[2px] border-solid border-[#ECECEC]'
                value='momo'
                id='r3'
              />
              <Image
                className='w-[1.46413rem] h-auto object-contain block ml-[0.88rem] mr-[0.44rem]'
                src={'/payment/momo.svg'}
                alt='icon car'
                width={24}
                height={24}
              />
              <span className='font-medium caption1 text-greyscale-40'>
                Momo
              </span>
            </Label>
            <Label
              htmlFor='r4'
              className='flex items-center px-[0.88rem] py-[0.73rem] border border-solid border-white shadow-[0px_2px_20px_0px_rgba(0,0,0,0.04),2px_2px_12px_0px_rgba(0,0,0,0.02)] bg-white rounded-[0.58565rem] cursor-pointer'
            >
              <RadioGroupItem
                className='size-[1.46413rem] rounded-full border-[2px] border-solid border-[#ECECEC]'
                value='credit'
                id='r4'
              />
              <Image
                className='w-[1.46413rem] h-auto object-contain block ml-[0.88rem] mr-[0.44rem]'
                src={'/payment/credit.svg'}
                alt='icon credit'
                width={24}
                height={24}
              />
              <span className='font-medium caption1 text-greyscale-40'>
                Credit card
              </span>
            </Label>
          </RadioGroup>
        </div>
        <div className='bg-white rounded-[0.58565rem] p-[1.76rem]'>
          <h3 className='font-medium sub2 text-greyscale-80'>
            PHƯƠNG THỨC VẬN CHUYỂN:
          </h3>
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
              <Image
                className='w-[1.46413rem] h-auto object-contain block ml-[0.88rem] mr-[0.44rem]'
                src={'/payment/car-flash.svg'}
                alt='icon car flash'
                width={24}
                height={24}
              />
              <span className='font-medium caption1 text-greyscale-40'>
                Hỏa tốc (khu vực HCM)
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
              <Image
                className='w-[1.46413rem] h-auto object-contain block ml-[0.88rem] mr-[0.44rem]'
                src={'/account/car.svg'}
                alt='icon car'
                width={24}
                height={24}
              />
              <span className='font-medium caption1 text-greyscale-40'>
                Tiêu chuẩn
              </span>
            </Label>
          </RadioGroup>
          <div className='rounded-[0.58565rem] bg-elevation-20 p-[0.88rem] mt-[1.17rem]'>
            <div className='flex items-center'>
              <Image
                className='w-[1.46413rem] h-auto object-contain'
                src={'/payment/car-flash.svg'}
                alt='car flash'
                width={24}
                height={24}
              />
              <span className='block font-medium caption1 text-greyscale-80 ml-[0.59rem]'>
                Giao hàng hoả tốc:
              </span>
            </div>
            <p className='mt-[0.59rem] body2 font-normal text-greyscale-80'>
              Chỉ áp dụng trong khu vực thành phố Hồ Chí Minh <br /> Phí vận
              chuyển được nhân viên gọi trao đổi
            </p>
          </div>
        </div>
      </article>
      <aside className='w-[34.91947rem] flex-shrink-0 h-fit sticky top-[9.76rem] right-0 rounded-[0.58565rem] shadow-[-3px_2px_20px_0px_rgba(0,0,0,0.04),2px_2px_12px_0px_rgba(0,0,0,0.02)] p-[1.17rem]'>
        <h3 className='font-medium sub2 text-greyscale-80'>
          THÔNG TIN ĐƠN HÀNG:
        </h3>
        <hr className='my-[1.46rem] h-[0.07321rem] bg-[#1E417C29]' />
        <div className='flex items-center justify-between'>
          <span className='text-[0.87848rem] leading-[1.833] tracking-[0.0022rem] text-greyscale-40'>
            Danh sách sản phẩm :
          </span>
          <span className='font-normal caption1 text-greyscale-30'>
            3 sản phẩm
          </span>
        </div>
        <div className='mt-[0.59rem]'>
          {Array(4)
            .fill(0)
            .map((item, index) => (
              <>
                <ItemProductPayment key={index} />
                {index < 3 && (
                  <hr className='my-[0.59rem] bg-[#1E417C14] h-[0.07321rem]' />
                )}
              </>
            ))}
        </div>
        <div className='rounded-[0.58565rem] p-[0.88rem] bg-elevation-20 space-y-[0.59rem]'>
          <div className='flex items-center justify-between'>
            <span className='font-medium caption1 text-greyscale-40'>
              Hình thức thanh toán:
            </span>
            <span className='font-semibold caption1 text-greyscale-80'>
              COD
            </span>
          </div>
          <div className='flex items-center justify-between'>
            <span className='font-medium caption1 text-greyscale-40'>
              Phương thức vận chuyển:
            </span>
            <span className='font-semibold caption1 text-greyscale-80'>
              Hỏa tốc
            </span>
          </div>

          <hr className='h-[0.07321rem] bg-[#1E417C29] my-[0.29rem]' />
          <div className='flex items-center justify-between'>
            <span className='font-medium caption1 text-greyscale-40'>
              Tổng tiền hàng:
            </span>
            <span className='font-semibold caption1 text-greyscale-80'>
              325.000đ
            </span>
          </div>
          <div className='flex items-center justify-between'>
            <span className='font-medium caption1 text-greyscale-40'>
              Phí vận chuyển:
            </span>
            <span className='font-semibold caption1 text-greyscale-80'>
              40.000đ
            </span>
          </div>
          <div className='flex items-center justify-between'>
            <span className='font-medium caption1 text-greyscale-40'>
              Voucher giảm giá
            </span>
            <span className='font-semibold caption1 text-greyscale-80'>
              - 40.000đ
            </span>
          </div>
          <div className='flex items-center justify-between'>
            <span className='font-medium caption1 text-greyscale-40'>
              Khuyến mãi hạng thành viên
            </span>
            <span className='font-semibold caption1 text-greyscale-80'>
              - 80.000đ
            </span>
          </div>
          <div className='flex items-center justify-between'>
            <span className='font-medium caption1 text-greyscale-40'>
              Giảm giá vận chuyển:
            </span>
            <span className='font-semibold caption1 text-greyscale-80'>
              -20.000đ
            </span>
          </div>
          <hr className='h-[0.07321rem] bg-[#1E417C29] my-[0.29rem]' />
          <div className='flex items-center justify-between'>
            <span className='font-semibold sub2 text-greyscale-50'>
              Tổng thanh toán:
            </span>
            <span className='sub1 font-bold text-[#D48E43]'>225.000đ</span>
          </div>
        </div>
        <button
          type='submit'
          className='flex items-center justify-center w-full text-white bg-blue-700 rounded-[0.58565rem] mt-[1.64rem] h-[2.92826rem] caption1 font-semibold'
          onClick={form.handleSubmit(onSubmit)}
        >
          THANH TOÁN NGAY
        </button>
      </aside>
    </section>
  )
}
