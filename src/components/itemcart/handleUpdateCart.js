import {toast} from 'sonner'

export const handleUpdateCart = async (
  session,
  listCart,
  setListCart,
  setActionCart,
  actionCart,
  product,
  setIsLoading,
  index,
) => {
  const isAuth = session?.status === 'authenticated'
  console.log('Running')

  if (!product) return

  const updateWithAuth = async () => {
    const res = await putDataAuth({
      token: session?.accessToken,
      api: `/okhub/v1/cart`,
      body: {
        product_id: productSelected?.id,
        variation: variation,
        quantity: productSelected.quantity,
      },
    })
  }

  const updateWithLocal = () => {
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
    } else if (product.type === 'variable') {
      const updateCart = listCart.map((item, subIndex) =>
        index === subIndex ? product : item,
      )

      localStorage.setItem('cartAstro', JSON.stringify(updateCart))
      setActionCart(!actionCart)
      toast.success('Đã cập nhật sản phẩm', {
        duration: 3000,
        position: 'top-center',
      })
    }
  }

  if (isAuth) {
    await updateWithAuth()
  } else {
    updateWithLocal()
  }
}
