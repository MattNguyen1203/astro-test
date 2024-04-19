import {clsx} from 'clsx'
import {twMerge} from 'tailwind-merge'

export function cn(...inputs) {
  return twMerge(clsx(inputs))
}

export function handleViewPort(viewport, desktop, tablet, mobile) {
  if (viewport === 'desktop') {
    return desktop
  } else if (viewport === 'tablet') {
    return tablet || desktop
  } else {
    return mobile || desktop
  }
}

export function handlePercentSale(product) {
  const isFlashsale =
    product?.meta_detect?.flash_sale?.is_flash_sale === 'yes' ? true : false

  if (isFlashsale) {
    const priceFlashsale = Number(
      product?.meta_detect?.flash_sale?.flash_sale_price,
    )
    return Math.floor(
      (Number(product?.regular_price) - priceFlashsale) /
        (Number(product?.regular_price) / 100),
    )
  }

  if (Number(product?.price)) {
    const price =
      (Number(product?.regular_price) - Number(product?.price)) /
      (Number(product?.regular_price) / 100)
    return Math.floor(price)
  }
  return false
}

export function renderPriceProduct(product) {
  const isFlashsale =
    product?.meta_detect?.flash_sale?.is_flash_sale === 'yes' ? true : false

  if (isFlashsale) {
    return {
      price: product?.regular_price,
      sale: product?.meta_detect?.flash_sale?.flash_sale_price,
    }
  }

  if (
    Number(product?.price) &&
    Number(product?.price) < Number(product?.regular_price)
  ) {
    return {
      price: product?.regular_price,
      sale: product?.price,
    }
  }

  return {
    price: product?.regular_price,
    sale: 0,
  }
}

export function formatToVND(price) {
  if (!price) return null
  let formattedNumber = Number(price).toLocaleString('vi-VN')
  formattedNumber += 'đ'
  return formattedNumber.replaceAll(',', '.')
}

export function formatToShortVND(price) {
  if (!price) return null
  let formattedNumber = Number(price) / 1000
  formattedNumber = 'đ' + formattedNumber + 'k'
  return formattedNumber
}
const fetcher = (...args) => fetch(...args).then((res) => res.json())
export {fetcher}

export function convertDateFormat(dateTimeStr) {
  const dateTime = new Date(dateTimeStr)
  const day = dateTime.getDate().toString().padStart(2, '0') // Thêm số 0 nếu cần thiết để ngày có 2 chữ số
  const month = (dateTime.getMonth() + 1).toString().padStart(2, '0') // Tháng được trả lại từ 0-11
  const year = dateTime.getFullYear()

  return `${day}/${month}/${year}`
}

export function convertPhone(phone) {
  if (!phone) return
  let phoneEnd = phone?.startsWith('840')
    ? phone?.replace('840', '0')
    : phone?.startsWith('84')
    ? phone?.replace('84', '0')
    : ''
  return phoneEnd
}
