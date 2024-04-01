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
  if (product?.type === 'grouped') {
    // handle san pham combo
    let totalRegularPrice = 0
    let totalSalePrice = 0
    let countSale = 0
    product?.grouped_products?.forEach((item) => {
      if (!item?.salePrice) {
        countSale += 1
      }
      totalRegularPrice +=
        Number(item?.salePrice ? item?.regular_price : item?.price) || 0
      totalSalePrice += Number(item?.salePrice) || 0
    })
    // khong co san pham sale nao
    if (countSale === product?.grouped_products?.length) return null

    return Math.floor(
      (totalRegularPrice - totalSalePrice) / (totalRegularPrice / 100),
    )
  } else {
    // handle san pham don
    if (!product?.salePrice) return null
    return Math.floor(
      (Number(product?.regular_price) - Number(product?.salePrice)) /
        (Number(product?.regular_price) / 100),
    )
  }
}

export function renderPriceProduct(product) {
  if (product?.type === 'grouped') {
    // handle san pham combo
    let totalRegularPrice = 0
    let totalSalePrice = 0
    let countSale = 0
    product?.grouped_products?.forEach((item) => {
      if (!item?.salePrice) {
        countSale += 1
      }
      totalRegularPrice +=
        Number(item?.salePrice ? item?.regular_price : item?.price) || 0
      totalSalePrice += Number(item?.salePrice) || 0
    })
    // khong co san pham sale nao
    if (countSale === product?.grouped_products?.length)
      return {
        price: totalRegularPrice,
        sale: totalRegularPrice,
      }

    return {
      price: totalRegularPrice,
      sale: totalSalePrice,
    }
  } else {
    // handle san pham don
    if (!product?.salePrice)
      return {
        price: product?.price,
        sale: product?.price,
      }
    return {
      price: product?.regular_price,
      sale: product?.salePrice,
    }
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
