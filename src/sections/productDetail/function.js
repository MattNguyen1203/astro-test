import {toast} from 'sonner'

export const handlePrice = (data) => {
  const regularPriceResult =
    data?.variation?.display_regular_price &&
    data?.variation?.display_regular_price !== ''
      ? Number(data?.variation?.display_regular_price)
      : Number(data?.regular_price)

  const priceResult =
    data?.variation?.display_price && data?.variation?.display_price !== ''
      ? Number(data?.variation?.display_price)
      : Number(data?.price)

  return [regularPriceResult, priceResult]
}

export const handleAddToSession = (product, router) => {
  if (product.type === 'variable' && !product?.variation?.attributes) {
    toast.info('Vui lòng chọn option sản phẩm', {
      duration: 3000,
      position: 'top-center',
    })

    return
  }

  if (product.type === 'wooco') {
    const isSelected = product?.grouped_products?.every((item) => {
      if (item.type === 'variable' && !item?.variation?.attributes) {
        return false
      }

      return true
    })

    if (!isSelected) {
      toast.info('Vui lòng chọn option sản phẩm', {
        duration: 3000,
        position: 'top-center',
      })
      return
    }
  }
  localStorage.setItem('sessionCart', JSON.stringify(product))
  router.push('/payment')
}
