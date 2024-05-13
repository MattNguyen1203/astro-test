'use client'
import Image from 'next/image'
import ButtonChange from './ButtonChange'
import BoxCheck from '../sheetcart/BoxCheck'
import useStore from '@/app/(store)/store'
import {formatToVND} from '@/lib/utils'
import {useEffect, useMemo, useState} from 'react'
import {deleteDataAuth} from '@/lib/deleteData'
import {toast} from 'sonner'
import {putDataAuth} from '@/lib/putData'
import Link from 'next/link'
import {handleUpdateCart} from './handleUpdateCart'
import SkeletonItemCart from './SkeletonItemCart'
import BtnCombo from './BtnCombo'
import CardCombo from './CardCombo'

import dynamic from 'next/dynamic'
const DialogProduct = dynamic(
  () =>
    import('@/sections/home/components/dialog').then(
      (mod) => mod.DialogProduct,
    ),
  {ssr: false},
)

export default function ItemCart({
  cart,
  setCart,
  index,
  isMobile,
  item,
  session,
  setIsCheckNull,
}) {
  const isAuth = session?.status === 'authenticated'
  const setActionCart = useStore((state) => state.setActionCart)
  const actionCart = useStore((state) => state.actionCart)
  const setListCart = useStore((state) => state.setListCart)
  const listCart = useStore((state) => state.listCart)
  const [isOpen, setIsOpen] = useState(false)
  const [productSelected, setProductSelected] = useState({})
  const [isLoading, setIsLoading] = useState(false)
  const [isShow, setIsShow] = useState(false)

  const isZero = useMemo(() => {
    if (item.type === 'variable') {
      return !item?.variation?.max_qty || Number(item?.variation?.max_qty) < 1
    } else return item?.stock_quantity < 1
  }, [item])
  useEffect(() => {
    isZero && setIsCheckNull(isZero)
  }, [isZero])

  useEffect(() => {
    setProductSelected(item)
  }, [item])

  //handle delete item
  const handleDeleteItemCart = async (key, index) => {
    if (isAuth) {
      const result = await deleteDataAuth({
        api: '/okhub/v1/cart',
        token: session?.accessToken,
        body: {
          ['cart_items']: [{key: key}],
        },
      })
      setIsLoading(false)

      if (result.success) {
        const newListCart = listCart.filter((item) => item.key !== key)
        setListCart(newListCart)
        toast.success('Đã xóa sản phẩm', {
          duration: 3000,
          position: 'top-center',
        })
      } else {
        toast.error('Có lỗi xảy ra', {
          duration: 3000,
          position: 'top-center',
        })
      }
    } else {
      const newListCart = listCart.filter(
        (item, cartIndex) => cartIndex !== index,
      )
      localStorage.setItem('cartAstro', JSON.stringify(newListCart))
      setActionCart((prev) => !prev)

      toast.success('Xóa sản phẩm thành công', {
        duration: 3000,
        position: 'top-center',
      })
    }
  }

  const handleChangeVariation = (data) => {
    handleUpdateCart(
      session,
      listCart,
      setListCart,
      setActionCart,
      actionCart,
      data,
      setIsLoading,
      index,
      setIsOpen,
    )
  }

  const handleQuantity = async (quantity, type) => {
    const newProduct = {...productSelected, quantity: quantity}
    // update only quantity when logged in
    if (type === 'updateQty' && isAuth) {
      const stockQty = newProduct?.stock_quantity

      if (quantity > stockQty) {
        toast.info('Số lượng vượt quá tồn kho', {
          duration: 3000,
          position: 'top-center',
        })
      } else {
        const putData = async () => {
          const result = await putDataAuth({
            token: session?.accessToken,
            api: `/okhub/v1/cart`,
            body: {
              cart_items: [
                {
                  quantity: quantity,
                  key: listCart[index].key,
                },
              ],
            },
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

        putData()
      }
    } else {
      // update variable & quantity
      handleUpdateCart(
        session,
        listCart,
        setListCart,
        setActionCart,
        actionCart,
        newProduct,
        setIsLoading,
        index,
        setIsOpen,
      )
    }
  }

  const [price, regular_price] = useMemo(() => {
    if (productSelected?.type === 'wooco') {
      if (isAuth) {
        const priceTotal =
          Number(productSelected?.line_total) /
            Number(productSelected?.quantity) || 0
        return [priceTotal, priceTotal]
      } else {
        const totalPrice =
          productSelected?.grouped_products?.reduce((total, item) => {
            const itemPrice =
              item?.type === 'simple'
                ? item.price
                : item.variation.display_price
            return total + Number(itemPrice) * Number(item.qty)
          }, 0) || 0

        if (productSelected?.type_discount === 'Percentage') {
          return [
            totalPrice * ((100 - Number(productSelected?.discount)) / 100) || 0,
            '',
          ]
        } else {
          return [totalPrice || 0, '']
        }
      }
    } else {
      return [
        productSelected?.variation?.display_price ||
          productSelected?.price ||
          0,
        productSelected?.variation?.display_regular_price ||
          productSelected?.regular_price ||
          0,
      ]
    }
  }, [productSelected, isAuth])

  const isEqual = price === regular_price

  if (isLoading) return <SkeletonItemCart />

  return (
    <>
      <article className='rounded-[0.58565rem] bg-white shadow-[2px_2px_12px_0px_rgba(0,0,0,0.02),-3px_2px_20px_0px_rgba(0,0,0,0.04)] py-[0.73rem] pl-[0.59rem] pr-[1.17rem] flex xmd:px-[0.73rem] xmd:py-[0.59rem] xmd:shadow-[-3px_2px_20px_0px_rgba(0,0,0,0.04),2px_2px_12px_0px_rgba(0,0,0,0.02)] md:min-h-[7rem]'>
        <div className='flex flex-col items-center justify-center md:px-[0.59rem] xmd:mr-[0.44rem]'>
          {isZero ? (
            <div className='size-[1.75695rem]'></div>
          ) : (
            <BoxCheck
              setCart={setCart}
              cart={cart}
              index={index}
            />
          )}
        </div>
        <div className='w-[6.44217rem] xmd:w-[6.00293rem] bg-white rounded-[0.48023rem] overflow-hidden flex-shrink-0 xmd:border xmd:border-solid xmd:border-[#F6F6F6] relative'>
          <Image
            className='object-cover size-full'
            src={
              productSelected?.product_image ||
              productSelected?.featuredImage?.url ||
              '/no-image.jpg'
            }
            alt={
              productSelected?.product_name ||
              productSelected?.featuredImage?.url ||
              'astromazing'
            }
            width={82}
            height={82}
          />
          {isZero && (
            <div className='absolute top-0 left-0 flex items-center justify-center size-full bg-black/20'>
              <div className='size-[75%] rounded-full bg-white flex justify-center items-center'>
                <span className='font-semibold text-black text-[0.75rem] leading-[1.2]'>
                  Hết hàng
                </span>
              </div>
            </div>
          )}
        </div>
        <div className='flex justify-between w-full xmd:flex-col'>
          <div className='pl-[0.88rem] flex flex-col justify-between xmd:pl-[0.44rem]'>
            <div>
              <Link
                title={productSelected?.name}
                href={`/${productSelected?.slug || ''}`}
                className='capitalize font-medium line-clamp-1 caption1 text-greyscale-40 xmd:text-greyscale-50 xmd:font-semibold leading-[1.2] xmd:tracking-[0.01025rem]'
              >
                {productSelected?.name}
              </Link>

              <div className='flex items-center md:my-[0.5rem] xmd:space-x-[0.29rem] xmd:hidden'>
                <span className='font-semibold text-blue-600 sub2 xmd:caption1 md:mr-[0.25rem]'>
                  {formatToVND(price)}
                </span>
                {!isEqual && (
                  <span className='font-normal line-through giagoc text-greyscale-40 xmd:tracking-normal'>
                    {formatToVND(regular_price)}
                  </span>
                )}
              </div>
            </div>

            {productSelected?.variation &&
              productSelected?.type === 'variable' && (
                <div
                  className='relative flex w-full  mt-auto xmd:mt-[0.44rem]'
                  onClick={() => setIsOpen(true)}
                >
                  {Object.values(
                    productSelected?.variation?.attributes ||
                      productSelected?.variation,
                  )?.map((variant, index) => (
                    <div
                      key={index}
                      className='cursor-pointer caption1 w-fit bg-elevation-20 rounded-[0.43924rem] py-[0.59rem] pl-[0.73rem] pr-[0.44rem] xmd:px-[0.59rem] xmd:py-[0.29rem] mr-[0.5rem]'
                    >
                      {variant.label}
                    </div>
                  ))}
                </div>
              )}

            {productSelected.variation &&
              productSelected?.type === 'variable' &&
              isOpen && (
                <DialogProduct
                  isOpen={isOpen}
                  setIsOpen={setIsOpen}
                  productSelected={productSelected}
                  setProductSelected={setProductSelected}
                  className={'!left-[40%]'}
                  type='cart'
                  isAddToCart={false}
                  handleChangeVariation={handleChangeVariation}
                  session={session}
                />
              )}

            {productSelected?.type === 'wooco' &&
              (productSelected?.children ||
                productSelected?.grouped_products) && (
                <BtnCombo
                  isOpen={isShow}
                  setIsOpen={setIsShow}
                />
              )}
          </div>
          <div className='flex md:h-full justify-between md:flex-col md:items-end xmd:pl-[0.44rem] xmd:mt-[0.59rem]'>
            <button
              onClick={() => handleDeleteItemCart(item.key, index)}
              className='w-[1.45695rem] h-fit block xmd:w-[1.5rem] xmd:hidden'
            >
              <Image
                className='w-full h-auto'
                src={'/components/delete.svg'}
                alt='icon delete'
                width={24}
                height={24}
              />
            </button>

            <div className='md:hidden items-center md:my-[0.5rem] xmd:space-x-[0.29rem] flex'>
              <span className='font-semibold text-blue-600 sub2 xmd:caption1 md:mr-[0.25rem]'>
                {formatToVND(price)}
              </span>
              {!isEqual && (
                <span className='font-normal line-through giagoc text-greyscale-40 xmd:tracking-normal'>
                  {formatToVND(regular_price)}
                </span>
              )}
            </div>
            <div className={isZero ? 'pointer-events-none opacity-30' : ''}>
              <ButtonChange
                handleQuantity={handleQuantity}
                initQuantity={item.quantity || 1}
                stockQty={item?.variation?.max_qty || item?.stock_quantity}
              />
            </div>
          </div>
        </div>
      </article>
      {isShow && <CardCombo products={productSelected?.children} />}
    </>
  )
}
