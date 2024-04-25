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
  const isAuth = session?.status === 'authenticated'
  // const isAuth = true
  if (!listProduct) return

  //handle request to Add item with token
  const addProductsWithAuth = async () => {
    const isError = checkProduct(listProduct, listCart, 'add', isAuth)

    if (isError) return
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
    const isError = checkProduct(listProduct, listCart, 'add')

    if (isError) return

    let updatedCart
    const isCombo =
      listProduct?.length === 1 &&
      !!listProduct[0] &&
      listProduct[0].type === 'wooco'

    //product is combo
    if (isCombo) {
      const listGroupProduct = listProduct[0]?.grouped_products

      if (!listGroupProduct || !Array.isArray(listGroupProduct)) return

      const findIndex = listCart.findIndex((itemCart) => {
        if (itemCart.type !== 'wooco' || itemCart.id !== listProduct[0].id)
          return

        const itemCartGroup = itemCart?.grouped_products

        let isMatch = true
        listGroupProduct.forEach((product) => {
          if (product.type !== 'variable') return

          const findItem = itemCartGroup.find(
            (item) =>
              item.id === product.id &&
              item?.variation?.variation_id ===
                product?.variation?.variation_id,
          )

          if (findItem) {
            const productAttr = product?.variation?.attributes
            const itemCartAttr = findItem?.variation?.attributes

            if (
              !Object.keys(productAttr).every(
                (attr) => productAttr[attr]?.key === itemCartAttr[attr]?.key,
              )
            )
              isMatch = false
          } else {
            isMatch = false
          }
        })

        return isMatch
      })

      if (findIndex < 0) {
        updatedCart = [...listCart, listProduct[0]]
      } else {
        const newItem = {
          ...listProduct[0],
          quantity:
            Number(listProduct[0].quantity) +
            Number(listCart[findIndex].quantity),
        }
        updatedCart = listCart.map((item, index) =>
          index === findIndex ? newItem : item,
        )
      }
    } else {
      //other product
      updatedCart = listProduct.reduce(
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
    }

    localStorage.setItem('cartAstro', JSON.stringify(updatedCart))
    setActionCart(!actionCart)
    toast.success('Đã thêm sản phẩm vào giỏ hàng', {
      duration: 3000,
      position: 'top-center',
    })
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

// validate list product: variant, quantity
export function checkProduct(listProduct, listCart, type, isAuth) {
  if (!listProduct) return
  if (listProduct.length <= 0) {
    toast.error('Vui lòng chọn sản phẩm', {
      duration: 3000,
      position: 'top-center',
    })
    return true
  }
  //validate for combo product

  if (
    listProduct.length === 1 &&
    !!listProduct[0] &&
    listProduct[0]?.type == 'wooco'
  ) {
    const isHaveVariant = listProduct[0]?.grouped_products?.some(
      (item) => item.type === 'variable' && !item.variation.attributes,
    )

    if (isHaveVariant) {
      toast.error('Vui lòng chọn option sản phẩm', {
        duration: 3000,
        position: 'top-center',
      })
      return true
    } else {
      return
    }
  }

  if (
    listProduct.some(
      (item) => item?.type === 'variable' && !item?.variation?.attributes,
    )
  ) {
    toast.error('Vui lòng chọn option sản phẩm', {
      duration: 3000,
      position: 'top-center',
    })
    return true
  }

  const isOverStock = listProduct.some((product) => {
    const index = findProductIndex(listCart, product, isAuth)
    const stockQty = product?.variation?.max_qty || product?.stock_quantity

    if (!stockQty) {
      return true
    }

    if (index < 0 && Number(product.quantity) > Number(stockQty)) {
      return true
    }

    if (
      index >= 0 &&
      Number(product.quantity) + Number(listCart?.[index]?.quantity) > stockQty
    ) {
      if (
        type === 'add' &&
        Number(product.quantity) + Number(listCart?.[index]?.quantity) >
          stockQty
      ) {
        return true
      } else if (type === 'update' && Number(product.quantity) > stockQty) {
        return true
      }
    }
  })

  if (isOverStock) {
    toast.info('Số lượng tồn kho không đủ', {
      duration: 3000,
      position: 'top-center',
    })
    return true
  }
}

//check product is existed in cart
export const findProductIndex = (cart, product, isAuth) => {
  if (product.type === 'variable') {
    return cart.findIndex((item) => {
      if (isAuth) {
        return (
          item.id === product.id &&
          (!product?.variation ||
            (item?.variation_id === product?.variation?.variation_id &&
              areAttributesMatching(item, product, isAuth)))
        )
      } else {
        return (
          item.id === product.id &&
          (!product?.variation ||
            (item?.variation?.variation_id ===
              product?.variation?.variation_id &&
              areAttributesMatching(item, product)))
        )
      }
    })
  } else if (product.type === 'simple') {
    return cart.findIndex((item) => item.id === product.id)
  }
}

export const areAttributesMatching = (item, product, isAuth) => {
  const keys = Object.keys(product?.variation?.attributes)
  return keys.every((key) => {
    if (isAuth) {
      return (
        item?.variation?.[key].key === product?.variation?.attributes[key]?.key
      )
    } else {
      return (
        item?.variation?.attributes[key].key ===
        product?.variation?.attributes[key]?.key
      )
    }
  })
}
