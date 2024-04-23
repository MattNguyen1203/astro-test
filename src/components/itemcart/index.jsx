'use client'
import Image from 'next/image'
import ButtonChange from './ButtonChange'
import BoxCheck from '../sheetcart/BoxCheck'
import useStore from '@/app/(store)/store'
import {formatToVND} from '@/lib/utils'
import {useEffect, useState} from 'react'
import {DialogProduct} from '@/sections/home/components/dialog'
import {useSession} from 'next-auth/react'
import {deleteDataAuth} from '@/lib/deleteData'
import {toast} from 'sonner'
import Loading from '../loading'
import {putDataAuth} from '@/lib/putData'
import Link from 'next/link'

export default function ItemCart({cart, setCart, index, isMobile, item}) {
  const session = useSession()

  const isAuth = session?.status === 'authenticated'
  const setActionCart = useStore((state) => state.setActionCart)
  const setListCart = useStore((state) => state.setListCart)
  const listCart = useStore((state) => state.listCart)
  const [quantity, setQuantity] = useState(item.quantity || 1)
  const [isOpen, setIsOpen] = useState(false)
  const [productSelected, setProductSelected] = useState({})

  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    setProductSelected(item)
  }, [item])

  const handleDeleteItemCart = async (key) => {
    if (isAuth) {
      setIsLoading(true)
      const res = await deleteDataAuth({
        api: '/okhub/v1/cart',
        token: session?.data?.accessToken,
        body: {
          ['cart_items']: [{key: key}],
        },
      })
      setIsLoading(false)

      if (res.success) {
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
      const localGet = JSON.parse(localStorage.getItem('cartAstro')) || []
      localGet?.splice(localGet?.findIndex((e) => e?.slug === item?.slug))
      localStorage.setItem('cartAstro', JSON.stringify(localGet))
      setActionCart((prev) => !prev)
    }
  }

  const handleChangeVariation = async () => {
    if (isAuth) {
      if (!productSelected?.variation?.attributes) {
        toast.error('Vui lòng chọn biến thể', {
          duration: 3000,
          position: 'top-center',
        })
      }

      const variation = Object.fromEntries(
        Object.entries(productSelected?.variation?.attributes).map(
          ([key, val]) => [key, val.key],
        ),
      )
      const res = await putDataAuth({
        token: session?.data?.accessToken,
        api: `/okhub/v1/cart`,
        body: {
          product_id: productSelected?.id,
          variation: variation,
          quantity: productSelected.quantity,
        },
      })
    } else {
    }
  }

  if (isLoading) {
    return <Loading />
  }

  return (
    <article className='rounded-[0.58565rem] bg-white shadow-[2px_2px_12px_0px_rgba(0,0,0,0.02),-3px_2px_20px_0px_rgba(0,0,0,0.04)] py-[0.73rem] pl-[0.59rem] pr-[1.17rem] flex xmd:px-[0.73rem] xmd:py-[0.59rem] xmd:shadow-[-3px_2px_20px_0px_rgba(0,0,0,0.04),2px_2px_12px_0px_rgba(0,0,0,0.02)]'>
      <div className='flex flex-col items-center justify-center md:px-[0.59rem] xmd:mr-[0.44rem]'>
        <BoxCheck
          setCart={setCart}
          cart={cart}
          index={index}
        />
      </div>
      <div className='w-[6.44217rem] xmd:w-[6.00293rem] bg-white rounded-[0.48023rem] overflow-hidden flex-shrink-0 xmd:border xmd:border-solid xmd:border-[#F6F6F6]'>
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
      </div>
      <div className='flex justify-between w-full xmd:flex-col'>
        <div className='pl-[0.88rem] flex flex-col justify-center xmd:pl-[0.44rem]'>
          <div>
            <Link
              href={`/${productSelected?.slug}`}
              className='capitalize font-medium line-clamp-1 caption1 text-greyscale-40 xmd:text-greyscale-50 xmd:font-semibold leading-[1.2] xmd:tracking-[0.01025rem]'
            >
              {productSelected?.name}
            </Link>

            <div className='flex items-center md:my-[0.5rem] xmd:space-x-[0.29rem]'>
              <span className='font-semibold text-blue-600 sub2 xmd:caption1 md:mr-[0.25rem]'>
                {formatToVND(productSelected?.price)}
              </span>
              {productSelected?.regular_price && (
                <span className='font-normal line-through giagoc text-greyscale-40 xmd:tracking-normal'>
                  {formatToVND(productSelected?.regular_price)}
                </span>
              )}
            </div>
          </div>

          {productSelected?.variation &&
            productSelected?.type === 'variable' && (
              <div
                className='relative flex w-full mt-auto xmd:mt-[0.44rem]'
                onClick={() => setIsOpen(true)}
              >
                {Object.values(
                  productSelected?.variation?.attributes ||
                    productSelected?.variation,
                )?.map((variant) => (
                  <div className='cursor-pointer caption1 w-fit bg-elevation-20 rounded-[0.43924rem] py-[0.59rem] pl-[0.73rem] pr-[0.44rem] xmd:px-[0.59rem] xmd:py-[0.29rem] mr-[0.5rem]'>
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
              />
            )}

          {productSelected?.type === 'wooco' && productSelected?.children && (
            <div className='mt-auto xmd:mt-[0.44rem] caption1 pr-[0.44rem] xmd:px-[0.59rem] xmd:py-[0.29rem] mr-[0.5rem] line-clamp-1'>
              {productSelected?.children
                ?.map((variant) => variant.name)
                ?.join(', ')}
            </div>
          )}
        </div>
        <div className='flex md:h-full justify-between md:flex-col md:items-end xmd:pl-[0.44rem] xmd:mt-[0.59rem]'>
          <button
            onClick={() => handleDeleteItemCart(item.key)}
            className='w-[1.45695rem] h-fit block xmd:w-[1.5rem]'
          >
            <Image
              className='w-full h-auto'
              src={'/components/delete.svg'}
              alt='icon delete'
              width={24}
              height={24}
            />
          </button>
          <ButtonChange
            quantity={quantity}
            setQuantity={setQuantity}
          />
        </div>
      </div>
    </article>
  )
}
