import postData from '@/lib/postData'
import {toast} from 'sonner'

export const handleCart = async (
  session,
  listCart,
  setListCart,
  setActionCart,
  actionCart,
  listProduct,
  setIsLoading,
  type,
) => {
  const isAuth = session.status === 'authenticated'
  // const isAuth = true
  if (!listProduct) return

  //handle request to Add item with token
  const addProductsWithAuth = async () => {
    setIsLoading(true)
    try {
      const result = await Promise.all(
        listProduct.map(async (product) => {
          const reqBody = createRequestBody(product)

          // console.log('reqBody', reqBody)
          return await postData('/okhub/v1/cart', JSON.stringify(reqBody), {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${session?.data?.accessToken}`,
          })
        }),
      )

      setIsLoading(false)
      processAuthResults(result)
    } catch (error) {
      console.log('Error', error)
      toast.error('Có lỗi xảy ra', {
        duration: 3000,
        position: 'top-center',
      })
      setIsLoading(false)
    }
  }

  //handle body of request
  const createRequestBody = (product) => {
    if (product.type === 'variable' && product?.variation?.attributes) {
      const variation = Object.fromEntries(
        Object.entries(product?.variation?.attributes).map(([key, val]) => [
          key,
          val.key,
        ]),
      )
      return {
        product_id: product?.id,
        quantity: product?.quantity,
        variation_id: product?.variation?.variation_id,
        variation,
      }
    } else if (product.type === 'simple') {
      return {
        product_id: product?.id,
        quantity: product?.quantity,
      }
    } else if (product.type === 'wooco') {
      const groupProducts = product?.grouped_products
      let lineItem = {}

      groupProducts.forEach((subProduct) => {
        if (subProduct.type === 'variable') {
          if (!subProduct?.variation?.attributes) {
            toast.error('Vui lòng chọn biến thể', {
              duration: 3000,
              position: 'top-center',
            })
            return
          }
          const variation = Object.fromEntries(
            Object.entries(subProduct?.variation?.attributes).map(
              ([key, val]) => [key, val.key],
            ),
          )

          console.log('variation', variation)
          lineItem[subProduct.id] = {
            product_id: subProduct?.id,
            variation_id: subProduct?.variation?.variation_id,
            variation: variation,
          }
        } else {
          lineItem[subProduct.id] = {
            product_id: subProduct?.id,
          }
        }
      })

      return {
        product_id: product?.id,
        quantity: product?.quantity,
        line_item: lineItem,
      }
    }
  }

  // handle message when request success or fail
  const processAuthResults = (result) => {
    if (result.every((item) => !!item?.cart_item)) {
      toast.success('Đã thêm sản phẩm vào giỏ hàng', {
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

  // add item to localStorage if not login
  const addProductsLocally = () => {
    if (listProduct.length <= 0) {
      toast.error('Vui lòng chọn sản phẩm', {
        duration: 3000,
        position: 'top-center',
      })

      return
    }
    const updatedCart = listProduct.reduce(
      (cart, product) => {
        const index = findProductIndex(cart, product)
        if (index >= 0) {
          cart[index].quantity += product.quantity
        } else {
          cart.push(product)
        }
        return cart
      },
      [...listCart],
    )

    localStorage.setItem('cartAstro', JSON.stringify(updatedCart))
    setActionCart(!actionCart)
    toast.success('Đã thêm sản phẩm vào giỏ hàng', {
      duration: 3000,
      position: 'top-center',
    })
  }
  //check product is existed in cart
  const findProductIndex = (cart, product) => {
    if (product.type === 'variable') {
      return cart.findIndex(
        (item) =>
          item.id === product.id &&
          (!product?.variation ||
            (item?.variation?.variation_id ===
              product?.variation?.variation_id &&
              areAttributesMatching(item, product))),
      )
    } else if (product.type === 'simple') {
      return cart.findIndex((item) => item.id === product.id)
    }
  }

  const areAttributesMatching = (item, product) => {
    const keys = Object.keys(product?.variation?.attributes)
    return keys.every(
      (key) =>
        item?.variation?.attributes[key].key ===
        product?.variation?.attributes[key]?.key,
    )
  }

  if (isAuth) {
    if (type === 'add') {
      await addProductsWithAuth()
    }
  } else {
    if (type === 'add') {
      addProductsLocally()
    }
  }
}
