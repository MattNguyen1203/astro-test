'use client'

import {useEffect, useState} from 'react'
import Image from 'next/image'

import {zodResolver} from '@hookform/resolvers/zod'
import {useForm} from 'react-hook-form'
import * as z from 'zod'

import ICBoxCheck from '@/components/icon/ICBoxCheck'
import ICCheck from '@/components/icon/ICCheck'
import PopupProvince from './PopupProvince'
import PopupDistrict from './PopupDistrict'
import PopupCommune from './PopupCommune'
import FormUseVoucher from './FormUseVoucher'
import InfoOrder from './InfoOrder'

import {RadioGroup, RadioGroupItem} from '@/components/ui/radio-group'
import {Label} from '@/components/ui/label'
import {Form, FormControl, FormField, FormItem} from '@/components/ui/form'
import {Input} from '@/components/ui/input'
import {Textarea} from '@/components/ui/textarea'
import ShipHT from './ShipHT'
import ShipTC from './ShipTC'
import {toast} from 'sonner'
import {createOrder} from '@/actions/payment'
import {useRouter} from 'next/navigation'
import useStore from '@/app/(store)/store'
import {
  defaultPriceShip,
  formOrder,
  propertyPayment,
  propertyShip,
  rangeFreeShip,
} from '@/lib/constants'
import {handlePriceTotalOrder} from '@/lib/utils'

const formSchema = z.object({
  name: z.string(),
  email: z.string().email({message: 'Nhập đúng định dạng email!'}),
  address: z.string(),
  street: z.string(),
  note: z.string(),
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

export default function PaymentIndex({
  province,
  district,
  commune,
  listIdItemCart,
  session,
  dataCarts,
}) {
  const router = useRouter()

  const isAuth = session?.status === 'authenticated'

  const [valueProvince, setValueProvince] = useState(null)
  const [idProvince, setIdProvince] = useState(null)
  const [valueDistrict, setValueDistrict] = useState(null)
  const [idDistrict, setIdDistrict] = useState(null)
  const [valueCommune, setValueCommune] = useState(null)
  const [ship, setShip] = useState('in')
  const [payment, setPayment] = useState()
  const [carts, setCarts] = useState(isAuth ? dataCarts : [])
  console.log('🚀 ~ carts:', carts)

  const listCart = useStore((state) => state.listCart)

  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: 'trinh van duc',
      phone: '0338277705',
      email: 'trinhvanduc21062001@gmail.com',
      address: '',
      street: '',
      note: 'test',
      password: '',
    },
  })

  useEffect(() => {
    if (!isAuth) {
      const localGet = JSON.parse(localStorage.getItem('cartAstro')) || []
      const listCartNew = []
      if (listIdItemCart?.length) {
        listIdItemCart?.forEach((e) => {
          listCartNew.push(localGet[Number(e)])
        })
        setCarts(listCartNew)
      }
    }
  }, [listIdItemCart])

  // useEffect(() => {
  //   if (isAuth) {
  //     if (listCart?.length) {
  //       const listCartNew = []
  //       listIdItemCart?.forEach((e) => {
  //         listCartNew.push(listCart[Number(e)])
  //       })
  //       setCarts(listCartNew)
  //     }
  //   }
  // }, [listCart, listIdItemCart])

  const values = form.watch()

  const handleGenderVariation = (variation) => {
    let variationNew = {}
    for (const key in variation) {
      variationNew[key] = variation?.[key]?.key
    }
    return variationNew
  }

  const handleChildrenWooco = (product) => {
    if (product?.type === 'simple') {
      return {
        product_id: product?.id,
        quantity: product?.quantity,
      }
    }
    if (product?.type === 'variable') {
      return {
        product_id: product?.id,
        variation_id: product?.variant_id,
        quantity: product?.quantity,
        variation: handleGenderVariation(product?.variation, isAuth),
      }
    }
  }

  const handleGenderWooco = (products) => {
    let productNew = []
    products?.forEach((product) => {
      const obj = {}
      obj[product?.id] = handleChildrenWooco(product)
      productNew.push(obj)
    })
    return productNew
  }

  const handleGenderObjProduct = (product, isAuth) => {
    if (product?.type === 'variable') {
      return {
        product_id: product?.id,
        variation_id: product?.variant_id,
        quantity: product?.quantity,
        variation: handleGenderVariation(product?.variation, isAuth),
        cart_key: isAuth ? product?.key : '',
      }
    }
    if (product?.type === 'simple') {
      return {
        product_id: product?.id,
        quantity: product?.quantity,
        cart_key: isAuth ? product?.key : '',
      }
    }
    if (product?.type === 'wooco') {
      const lineItem = handleGenderWooco(product?.children)
      return {
        product_id: product?.id,
        quantity: product?.quantity,
        line_item: {
          ...lineItem,
        },
        cart_key: isAuth ? product?.key : '',
      }
    }
  }

  function onSubmit(valueForm) {
    form.setValue(
      'address',
      valueCommune + ' - ' + valueDistrict + ' - ' + valueProvince,
    )
    if (!payment) {
      return toast.error('Vui lòng chọn phương thức thanh toán!', {
        position: 'bottom-center',
      })
    }

    const productIds = []
    if (isAuth) {
      carts?.forEach((e) => productIds.push(handleGenderObjProduct(e, isAuth)))
    } else {
      carts?.forEach((e) =>
        productIds.push({
          product_id: e?.id,
          quantity: 1,
          cart_key: '',
        }),
      )
    }
    const totalPrice = handlePriceTotalOrder(carts)

    const isFreeShip = totalPrice >= rangeFreeShip
    console.log('🚀 ~ onSubmit ~ productIds:', productIds)

    const body = formOrder({
      isAuth: isAuth,
      userId: session?.userId,
      values: values,
      valueCommune: valueCommune,
      valueDistrict: valueDistrict,
      valueProvince: valueProvince,
      productIds: [...productIds],
      priceShip: isFreeShip ? '0' : defaultPriceShip.toString(),
      urlRedirect: 'http://localhost:3000/payment',
      method: payment === 'cod' ? 'cod' : 'onepay',
      titleMethod:
        payment === 'ck'
          ? 'Direct Bank Transfer'
          : payment === 'credit'
          ? 'Cash on delivery'
          : 'One Pay',
    })
    console.log('🚀 ~ onSubmit ~ body:', body)

    createOrder(JSON.stringify(body))
      .then((res) => {
        if (res?.success) {
          router.push(res?.url)
          //   4000 0000 0000 1091
          // 05/26
        } else {
          return toast.error(
            res?.message?.includes('Quantity in stock is not enough')
              ? 'Sản phẩm bạn mua đã hết hàng!'
              : 'Đã có lỗi xảy ra!',
            {
              position: 'bottom-center',
            },
          )
        }
      })
      .catch((err) => console.log('error payment', err))
  }

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
                        className=' !outline-none focus:!outline-none focus-visible:!outline-none border-none placeholder:text-[0.87848rem] placeholder:font-medium placeholder:opacity-60 placeholder:leading-[1.2] placeholder:tracking-[0.00439rem] placeholder:text-greyscale-40 font-svnGraphik'
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
            defaultValue={payment}
            onValueChange={(value) => setPayment(value)}
            className='grid grid-cols-2 gap-[0.59rem] mt-[1.17rem]'
          >
            {propertyPayment?.map((e, index) => (
              <Label
                key={index}
                htmlFor={e?.id}
                className='flex items-center px-[0.88rem] py-[0.73rem] border border-solid border-white shadow-[0px_2px_20px_0px_rgba(0,0,0,0.04),2px_2px_12px_0px_rgba(0,0,0,0.02)] bg-white rounded-[0.58565rem] cursor-pointer select-none'
              >
                <RadioGroupItem
                  className='size-[1.46413rem] rounded-full border-[2px] border-solid border-[#ECECEC]'
                  value={e?.value}
                  id={e?.id}
                />
                <Image
                  className='w-[1.46413rem] h-auto object-contain block ml-[0.88rem] mr-[0.44rem]'
                  src={e?.icon}
                  alt={e?.title}
                  width={24}
                  height={24}
                />
                <span className='font-medium caption1 text-greyscale-40'>
                  {e?.title}
                </span>
              </Label>
            ))}
          </RadioGroup>
        </div>
        <div className='bg-white rounded-[0.58565rem] p-[1.76rem]'>
          <h3 className='font-medium sub2 text-greyscale-80'>
            PHƯƠNG THỨC VẬN CHUYỂN:
          </h3>
          <RadioGroup
            defaultValue={ship}
            onValueChange={(value) => {
              setShip(value)
            }}
            className='grid grid-cols-2 gap-[0.59rem] mt-[1.17rem]'
          >
            {propertyShip?.map((e, index) => (
              <Label
                key={index}
                htmlFor={e?.value}
                className='flex items-center px-[0.88rem] py-[0.73rem] border border-solid border-white shadow-[0px_2px_20px_0px_rgba(0,0,0,0.04),2px_2px_12px_0px_rgba(0,0,0,0.02)] bg-white rounded-[0.58565rem] cursor-pointer select-none'
              >
                <RadioGroupItem
                  className='size-[1.46413rem] rounded-full border-[2px] border-solid border-[#ECECEC]'
                  value={e?.value}
                  id={e?.value}
                />
                <Image
                  className='w-[1.46413rem] h-auto object-contain block ml-[0.88rem] mr-[0.44rem]'
                  src={e?.icon}
                  alt={e?.title}
                  width={24}
                  height={24}
                />
                <span className='font-medium caption1 text-greyscale-40'>
                  {e?.title}
                </span>
              </Label>
            ))}
          </RadioGroup>
          <div className='rounded-[0.58565rem] bg-elevation-20 p-[0.88rem] mt-[1.17rem]'>
            {ship === 'out' ? <ShipTC /> : <ShipHT />}
          </div>
        </div>
      </article>
      <InfoOrder
        carts={carts}
        onSubmit={onSubmit}
        ship={propertyShip?.find((e) => e?.value === ship)?.label}
        payment={propertyPayment?.find((e) => e?.value === payment)?.label}
      />
    </section>
  )
}
