const slugAccessory = 'phu-kien'

const slugCategoryHandBook = 'cam-nang-su-dung'
const slugCategoryReview = 'review-san-pham'

const propertyPayment = [
  {
    id: 'r1',
    title: 'Thanh toán khi nhận hàng (COD)',
    label: 'COD',
    value: 'cod',
    icon: '/account/car.svg',
  },
  {
    id: 'r2',
    title: 'Chuyển khoản',
    label: 'Banking',
    value: 'ck',
    icon: '/payment/banking.svg',
  },
  {
    id: 'r3',
    title: 'Momo',
    label: 'Momo',
    value: 'momo',
    icon: '/payment/momo.svg',
  },
  {
    id: 'r4',
    title: 'Credit card',
    label: 'Credit',
    value: 'credit',
    icon: '/payment/credit.svg',
  },
]

const propertyShip = [
  {
    title: 'Hỏa tốc (khu vực HCM)',
    label: 'Hỏa tốc',
    value: 'in',
    icon: '/payment/car-flash.svg',
  },
  {
    title: 'Tiêu chuẩn',
    label: 'Tiêu chuẩn',
    value: 'out',
    icon: '/account/car.svg',
  },
]

const formOrder = ({
  isAuth,
  userId,
  values,
  valueCommune,
  valueDistrict,
  valueProvince,
  productIds,
  priceShip,
  urlRedirect,
  method,
  titleMethod,
}) => {
  return {
    customer_id: isAuth ? userId : '0',
    payment_method: method,
    payment_method_title: titleMethod,
    customer_note: values?.note,
    coupon_lines: [
      {
        code: 'mycouponcode',
      },
    ],
    shipping_lines: [
      {
        method_id: 'flat_rate',
        method_title: 'Flat Rate',
        total: priceShip,
      },
    ],
    billing_address: {
      first_name: values?.name,
      last_name: '',
      email: values?.email,
      address_1: values?.street + ', ' + valueCommune,
      address_2: valueDistrict,
      city: valueProvince,
      state: valueProvince,
      postcode: '100000',
      country: 'Việt Nam',
      phone: values?.phone,
    },
    shipping_information: {
      first_name: values?.name,
      last_name: '',
      email: values?.email,
      address_1: values?.street + ', ' + valueCommune,
      address_2: valueDistrict,
      city: valueProvince,
      state: valueProvince,
      postcode: '100000',
      country: 'Việt Nam',
      phone: values?.phone,
    },
    products: [...productIds],
    url_redirect: urlRedirect,
    card_list: null,
  }
}

const rangeFreeShip = 300000
const defaultPriceShip = 30000

export {
  slugAccessory,
  slugCategoryHandBook,
  slugCategoryReview,
  propertyPayment,
  propertyShip,
  formOrder,
  rangeFreeShip,
  defaultPriceShip,
}
