'use client'

import {useEffect, useState, useTransition} from 'react'
import Image from 'next/image'

import {zodResolver} from '@hookform/resolvers/zod'
import {useForm} from 'react-hook-form'
import * as z from 'zod'

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
import {
  defaultPriceShip,
  formOrder,
  propertyPayment,
  propertyShip,
  rangeFreeShip,
} from '@/lib/constants'
import {handlePriceTotalOrder} from '@/lib/utils'
import {bestCouponOrder} from '@/actions/bestCouponOrder'
import CheckDefault from '@/components/sheetcategories/CheckDefault'

const formSchema = z.object({
  name: z.string(),
  email: z.string().email({message: 'Nhập đúng định dạng email!'}),
  address: z.string(),
  street: z.string(),
  note: z.string(),
  // password: z
  //   .string()
  //   .min(6, {message: 'Mật khẩu phải có từ 6 kí tự trở lên!'}),
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
  profile,
  dataCartsDefault,
  detailOrder,
  id,
}) {
  console.log('🚀 ~ detailOrder:', detailOrder)

  const isBuyNow = listIdItemCart ? false : true
  const router = useRouter()

  const isAuth = session?.status === 'authenticated'
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

  const [valueProvince, setValueProvince] = useState(defaultValuetProvince)
  const [idProvince, setIdProvince] = useState(defaultIdProvince)
  const [valueDistrict, setValueDistrict] = useState(defaultValueDistrict)
  const [idDistrict, setIdDistrict] = useState(defaultIdDistrict)
  const communeSplit = communeDefautl?.split(', ')
  const communeSearch =
    communeSplit?.[1]?.toLowerCase() || communeSplit?.[0]?.toLowerCase()
  const defaultValueCommune =
    commune?.find((e) => e?.name?.toLowerCase()?.includes(communeSearch))
      ?.name || null
  const [valueCommune, setValueCommune] = useState(defaultValueCommune)

  const [ship, setShip] = useState('in')
  const [payment, setPayment] = useState()
  const [carts, setCarts] = useState(
    id ? detailOrder?.product : isAuth ? dataCarts : [],
  )
  console.log('🚀 ~ carts:', carts)
  const [coupon, setCoupon] = useState(null)
  const [couponSearch, setCouponSearch] = useState(null)
  console.log('🚀 ~ couponSearch:', couponSearch)
  const [isCouponBest, setIsCouponBest] = useState(true)
  const [isFreeShipDefault, setIsFreeShipDefault] = useState(true)

  useEffect(() => {
    if (isCouponBest && couponSearch) {
      setCouponSearch(null)
    }
  }, [isCouponBest])

  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: profile?.display_name?.trim() || '',
      phone: profile?.phone || '',
      email: profile?.email || '',
      address: '',
      street: communeSplit?.length > 1 ? communeSplit?.[0] : '',
      note: '',
      // password: '',
    },
  })

  useEffect(() => {
    let sessionCart = null
    if (!id && isBuyNow) {
      sessionCart = JSON.parse(localStorage.getItem('sessionCart'))
      setCarts([sessionCart])
    }

    const productIds = handleGenderCoupon(
      isBuyNow && sessionCart && !id
        ? [sessionCart]
        : isAuth
        ? carts
        : JSON.parse(localStorage.getItem('cartAstro')),
    )

    // handle best voucher
    const request = {
      api: '/okhub/v1/coupon/cart',
      body: JSON.stringify({
        products: productIds,
      }),
    }
    bestCouponOrder(request)
      .then((res) => {
        if (res) {
          setCoupon(res)
        }
      })
      .catch((err) => console.log(err))
  }, [])

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
    } else {
      const listCartNew = []
      if (listIdItemCart?.length) {
        listIdItemCart?.forEach((e) => {
          listCartNew.push(dataCartsDefault[Number(e)])
        })
        setCarts(listCartNew)
      }
    }
  }, [listIdItemCart])

  const values = form.watch()

  const handleAddCoupon = (total, coupon) => {
    const min = coupon?.minimum_amount || 0
    const max = coupon?.maximum_amount || 0
    if (coupon?.type === 'fixed_cart') {
      if (total >= min && total <= max) {
        return coupon?.amount
      }
      if (!min && !max) {
        return coupon?.amount
      }
      if (total <= max && !min) {
        return coupon?.amount
      }
      if (total <= min && !max) {
        return coupon?.amount
      }
      return 0
    }
    if (coupon?.type === 'fixed_product') {
      if (total >= min && total <= max) {
        return coupon?.amount
      }
      if (!min && !max) {
        return coupon?.amount
      }
      if (total <= max && !min) {
        return coupon?.amount
      }
      if (total <= min && !max) {
        return coupon?.amount
      }
      return 0
    }
    if (coupon?.type === 'percent') {
      if (total >= min && total <= max) {
        const discountPercent = (total / 100) * Number(coupon?.amount)
        if (discountPercent > Number(coupon?.max_discount)) {
          return coupon?.max_discount
        } else {
          return discountPercent
        }
      }
      if (!min && !max) {
        const discountPercent = (total / 100) * Number(coupon?.amount)
        if (discountPercent > Number(coupon?.max_discount)) {
          return coupon?.max_discount
        } else {
          return discountPercent
        }
      }
      if (total <= max && !min) {
        const discountPercent = (total / 100) * Number(coupon?.amount)
        if (discountPercent > Number(coupon?.max_discount)) {
          return coupon?.max_discount
        } else {
          return discountPercent
        }
      }
      if (total <= min && !max) {
        const discountPercent = (total / 100) * Number(coupon?.amount)
        if (discountPercent > Number(coupon?.max_discount)) {
          return coupon?.max_discount
        } else {
          return discountPercent
        }
      }
      return 0
    }
  }

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
        quantity: product?.quantity || Number(product?.qty),
      }
    }
    if (product?.type === 'variable') {
      return {
        product_id: product?.id,
        variation_id: product?.variant_id || product?.variation?.variation_id,
        quantity: product?.quantity || Number(product?.qty),
        variation: handleGenderVariation(
          isBuyNow ? product?.variation?.attributes : product?.variation,
          isAuth,
        ),
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
    if (product?.meta?.[0]?.key?.includes('parent')) return null
    if (product?.type === 'variable') {
      return {
        product_id: product?.id,
        variation_id: product?.variant_id || product?.variation?.variation_id,
        quantity: product?.quantity || Number(product?.qty),
        variation: handleGenderVariation(
          isBuyNow ? product?.variation?.attributes : product?.variation,
          isAuth,
        ),
        cart_key: isAuth ? product?.key : '',
      }
    }
    if (product?.type === 'simple') {
      return {
        product_id: product?.id,
        quantity: product?.quantity || Number(product?.qty),
        cart_key: isAuth ? product?.key : '',
      }
    }
    if (product?.type === 'wooco') {
      const isHaskey = product?.hasOwnProperty('children')
      const lineItem = handleGenderWooco(
        isHaskey ? product?.children : product?.grouped_products,
      )
      const convertedObject = {}

      lineItem?.forEach((item) => {
        const key = Object.keys(item)?.[0] // Lấy key từ object
        convertedObject[key] = item[key] // Gán vào đối tượng mới
      })

      return {
        product_id: product?.id,
        quantity: product?.quantity || Number(product?.qty),
        line_item: convertedObject,
        cart_key: isAuth ? product?.key : '',
      }
    }
  }

  const handleGenderCoupon = (carts) => {
    return carts?.map((product) => {
      if (product?.type === 'wooco') {
        const lineItem = handleGenderWooco(product?.children)
        const convertedObject = {}

        lineItem?.forEach((item) => {
          const key = Object.keys(item)?.[0] // Lấy key từ object
          convertedObject[key] = item[key] // Gán vào đối tượng mới
        })
        return {
          product_id: product?.id,
          quantity: product?.quantity || Number(product?.qty),
          line_item: convertedObject,
        }
      } else if (product?.type === 'variable') {
        return {
          product_id: product?.id,
          variation_id: product?.variant_id,
          quantity: product?.quantity || Number(product?.qty),
          variation: handleGenderVariation(product?.variation),
        }
      } else {
        return {
          product_id: product?.id,
          quantity: product?.quantity || Number(product?.qty),
        }
      }
    })
  }

  function onSubmit(valueForm) {
    if (!payment) {
      return toast.error('Vui lòng chọn phương thức thanh toán!', {
        position: 'bottom-center',
      })
    }
    setTransition(() => {
      form.setValue(
        'address',
        valueCommune + ' - ' + valueDistrict + ' - ' + valueProvince,
      )

      const productIds = []
      let sessionCart = null
      if (isBuyNow) {
        sessionCart = JSON.parse(localStorage.getItem('sessionCart'))
      }
      if (isAuth) {
        if (isBuyNow && !id) {
          ;[sessionCart]?.forEach((e) =>
            productIds.push(handleGenderObjProduct(e, isAuth)),
          )
        } else {
          carts?.forEach((e) => {
            const data = handleGenderObjProduct(e, isAuth)
            if (data) {
              productIds.push(data)
            }
          })
        }
      } else {
        carts?.forEach((e) =>
          productIds.push({
            product_id: e?.id,
            quantity: 1,
            cart_key: '',
          }),
        )
      }
      console.log('🚀 ~ setTransition ~ productIds:', productIds)

      const totalPrice = handlePriceTotalOrder(
        carts,
        isFreeShipDefault || ship === 'in',
        handleAddCoupon,
        isCouponBest ? coupon : couponSearch,
      )

      const isFreeShip = isFreeShipDefault
        ? totalPrice?.before >= rangeFreeShip
        : false

      const shipFree = {
        id: 'free_shipping',
        title: 'Free shipping',
      }

      const priceShip = {
        id: 'flat_rate',
        title: 'Flat Rate',
      }

      const shipIn = {
        id: 'in_hcm',
        title: 'In HCM',
      }

      const body = formOrder({
        isAuth: isAuth,
        userId: session?.userId,
        values: values,
        valueCommune: valueCommune,
        valueDistrict: valueDistrict,
        valueProvince: valueProvince,
        productIds: [...productIds],
        coupon: isCouponBest
          ? coupon?.code
          : couponSearch?.code
          ? couponSearch?.code
          : '',
        priceShip:
          ship === 'in' ? '0' : isFreeShip ? '0' : defaultPriceShip.toString(),
        urlRedirect: process.env.NEXT_PUBLIC_DOMAIN + '/payment',
        method: payment === 'cod' ? 'cod' : 'onepay',
        titleMethod:
          payment === 'ck'
            ? 'Direct Bank Transfer'
            : payment === 'credit'
            ? 'One Pay'
            : 'Cash on delivery',
        propertyShip:
          ship === 'in' ? shipIn : isFreeShip ? shipFree : priceShip,
        cardList: null,
      })
      // payment === 'ck'
      //   ? 'DOMESTIC'
      //   : payment === 'credit'
      //   ? 'INTERNATIONAL'
      //   : payment === 'momo'
      //   ? 'MOMO'
      //   : null
      createOrder(JSON.stringify(body))
        .then((res) => {
          if (res?.success) {
            if (res?.paymen_cod === 'cod') {
              router.push(
                `/payment?tracking=${res?.order_id}&vpc_TxnResponseCode=0`,
              )
            } else {
              router.push(res?.url)
            }
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
    })
  }

  return (
    <section className='container relative flex justify-between pb-[7.17rem]'>
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
              {/* <FormField
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
              /> */}
            </form>
          </Form>
        </div>
        <div className='bg-white rounded-[0.58565rem] p-[1.76rem] space-y-[1.17rem]'>
          <h3 className='font-medium sub2 text-greyscale-80'>
            VOUCHER CỦA BẠN
          </h3>
          <div className='flex items-center'>
            <CheckDefault
              isCheck={isFreeShipDefault}
              setIsCheck={setIsFreeShipDefault}
            />
            {/* <div className='size-[1.75695rem] relative overflow-hidden cursor-pointer '>
              <ICBoxCheck className='size-full' />
              <div className='absolute top-0 left-0 flex items-center justify-center bg-blue-700 size-full rounded-[0.25rem]'>
                <ICCheck className='w-[0.8rem] h-auto' />
              </div>
              <input
                readOnly
                type='checkbox'
                className='opacity-0 pointer-events-none size-0'
              />
            </div> */}
            <p className='font-normal text-greyscale-40 ml-[0.59rem]'>
              Áp dụng{' '}
              <span className='font-semibold'>Voucher miễn phí vận chuyển</span>{' '}
              cho đơn hàng trên 300k
            </p>
          </div>
          <div className='flex items-center'>
            <CheckDefault
              isCheck={isCouponBest}
              setIsCheck={setIsCouponBest}
            />
            <p className='font-normal text-greyscale-40 ml-[0.59rem]'>
              Tự động áp dụng Voucher có giá trị cao nhất
            </p>
          </div>
          <div>
            <span className='inline-block mb-[0.59rem]'>
              Hoặc nhập mã Voucher
            </span>
            <FormUseVoucher
              setCouponSearch={setCouponSearch}
              setIsCouponBest={setIsCouponBest}
              isCouponBest={isCouponBest}
              isAuth={isAuth}
              carts={carts}
            />
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
        shipValue={ship}
        ship={propertyShip?.find((e) => e?.value === ship)?.label}
        payment={propertyPayment?.find((e) => e?.value === payment)?.label}
        isCOD={payment === 'cod'}
        isPending={isPending}
        coupon={isCouponBest ? coupon : couponSearch}
        isCouponBest={isCouponBest || couponSearch}
        isFreeShipDefault={isFreeShipDefault}
        handleAddCoupon={handleAddCoupon}
        id={id}
      />
    </section>
  )
}
