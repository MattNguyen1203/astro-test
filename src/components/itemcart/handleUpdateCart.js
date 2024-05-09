import {toast} from 'sonner'

import {
  checkProduct,
  findProductIndex,
  areAttributesMatching,
} from './handleCart'
import {putDataAuth} from '@/lib/putData'

export const handleUpdateCart = async (
  session,
  listCart,
  setListCart,
  setActionCart,
  actionCart,
  product,
  setIsLoading,
  index,
  setIsOpen,
) => {
  const isAuth = session?.status === 'authenticated'

  if (!product) return
  const updateWithAuth = async () => {
    const isError = checkProduct([product], listCart, 'update', isAuth)
    if (isError) return
    if (product?.type === 'variable') {
      const findIndex = checkAttrVariant(listCart, product, isAuth)
      if (findIndex >= 0 && index !== findIndex) {
        toast.error('Option đã có trong giỏ hàng. Vui lòng chọn option khác', {
          duration: 3000,
          position: 'top-center',
        })

        return
      }
    }
    let reqBody
    if (product?.type === 'variable' && product?.variation?.attributes) {
      const variation = Object.fromEntries(
        Object.entries(product?.variation?.attributes).map(([key, val]) => [
          key,
          val.key,
        ]),
      )

      reqBody = {
        product_id: product?.id,
        variation: variation,
        variation_id: product.variation?.variation_id,
        quantity: product.quantity,
        cart_id: listCart[index].key,
      }
    } else {
      reqBody = {
        cart_items: [
          {
            quantity: product.quantity,
            key: listCart[index].key,
          },
        ],
      }
    }
    setIsLoading(true)
    const result = await putDataAuth({
      token: session?.accessToken,
      api: `/okhub/v1/cart`,
      body: reqBody,
    })

    if (!result?.data?.status) {
      setIsLoading(false)
      toast.success('Đã update thông tin sản phẩm', {
        duration: 3000,
        position: 'top-center',
      })
      setActionCart(!actionCart)
    } else {
      toast.error('Có lỗi xảy ra', {
        duration: 3000,
        position: 'top-center',
      })
    }
  }

  const updateWithLocal = () => {
    const isError = checkProduct([product], listCart, 'update')

    if (isError) return

    if (product.type === 'simple' || product.type === 'wooco') {
      const findIndex = listCart.findIndex((item) => item.id === product.id)
      if (findIndex < 0) return

      const updateCart = listCart.map((item, index) =>
        index === findIndex ? product : item,
      )
      localStorage.setItem('cartAstro', JSON.stringify(updateCart))
      setActionCart(!actionCart)
      toast.success('Đã cập nhật sản phẩm', {
        duration: 3000,
        position: 'top-center',
      })
      setIsOpen(false)
    } else if (product?.type === 'variable') {
      const findIndex = checkAttrVariant(listCart, product, isAuth)

      if (findIndex >= 0 && index !== findIndex) {
        toast.error('Option đã có trong giỏ hàng. Vui lòng chọn option khác', {
          duration: 3000,
          position: 'top-center',
        })

        return
      }
      const updateCart = listCart.map((item, subIndex) =>
        index === subIndex ? product : item,
      )
      localStorage.setItem('cartAstro', JSON.stringify(updateCart))
      setActionCart(!actionCart)
      toast.success('Đã cập nhật sản phẩm', {
        duration: 3000,
        position: 'top-center',
      })
      setIsOpen(false)
    }
  }

  if (isAuth) {
    await updateWithAuth()
  } else {
    updateWithLocal()
  }
}

export function checkAttrVariant(listCart, product, isAuth) {
  // Return the index of the item in listCart where the item's attributes match the product's attributes
  return listCart.findIndex((item) => {
    if (item.id !== product.id) return
    const itemAttributes = isAuth
      ? item?.variation
      : item?.variation?.attributes
    const productAttributes = product?.variation?.attributes

    // Only proceed if both items and product have attributes
    if (!itemAttributes || !productAttributes) {
      return false
    }

    // Check if every attribute in item matches the corresponding product attribute
    return Object.keys(itemAttributes).every(
      (attr) => itemAttributes[attr]?.key === productAttributes[attr]?.key,
    )
  })
}
