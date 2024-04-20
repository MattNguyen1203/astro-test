'use client'
import {
  Sheet,
  SheetContent,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet'
import ItemCart from '../itemcart'
import {useEffect, useState} from 'react'
import ICDelete from '../icon/ICDelete'
import {ScrollArea} from '../ui/scroll-area'
import ICBoxCheck from '../icon/ICBoxCheck'
import ICCheck from '../icon/ICCheck'
import useSWR from 'swr'
import {useRouter} from 'next/navigation'
import {toast} from 'sonner'
import useStore from '@/app/(store)/store'
import {GET} from '@/app/api/cart/route'

export default function SheetCart({children, isMobile = false, session}) {
  console.log('🚀 ~ SheetCart ~ session:', session)
  const isAuth = session?.accessToken === 'authenticated'
  const router = useRouter()
  const [isOpen, setIsOpen] = useState(false)
  const actionCart = useStore((state) => state.actionCart)

  const [cart, setCart] = useState([])
  const [listCart, setListCart] = useState([])

  useEffect(() => {
    if (isOpen) {
      const localGet = JSON.parse(localStorage.getItem('cartAstro')) || []

      if (isAuth) {

        console.log('res', res)
        const fetchCart = async () => {
          const res = await GET({
            headers: {
              'Content-Type': 'application/json',
              Authorization: session?.accessToken,
            },
          })

          console.log('res', res)
        }

        fetchCart()
        setListCart([])
      } else {
        setListCart(localGet)
      }
    }
  }, [isOpen, actionCart])

  const handleCart = () => {
    if (cart?.length === 10) {
      setCart([])
    } else {
      let arr = []
      Array(10)
        .fill(0)
        .map((_, index) => arr.push(index))
      setCart(arr)
    }
  }

  const handlePayment = () => {
    if (cart?.length) {
      const createOrder = cart.join('--')
      router.push('/thanh-toan?order=' + createOrder)
    } else {
      toast.warning('Vui lòng chọn sản phẩm muốn thanh toán!', {
        duration: 3000,
        position: 'bottom-center',
      })
    }
  }

  return (
    <Sheet
      open={isOpen}
      onOpenChange={setIsOpen}
    >
      <SheetTrigger asChild>{children}</SheetTrigger>
      <SheetContent className='p-0 bg-white xmd:data-[state=open]:duration-200 h-full '>
        <SheetTitle className='h-[3.80673rem] flex justify-start items-center px-[2.92rem] xmd:px-[0.88rem] xmd:border-b xmd:border-solid xmd:border-[#EFEFEF]'>
          GIỎ HÀNG:
        </SheetTitle>
        <div className='w-full absolute top-[3.80673rem] left-0 bg-[#EFEFEF] h-[1px] !my-0 xmd:hidden' />
        <div className='relative xmd:!m-0 h-full xmd:h-[calc(100%-3.80673rem)]'>
          <div className='px-[2.92rem] xmd:px-0'>
            <div className='md:mt-[1.46rem] flex justify-between bg-[#F5F5F5] md:rounded-[0.58565rem] px-[1.17rem] py-[0.88rem] mb-[0.88rem]'>
              <div
                onClick={handleCart}
                className='flex items-center cursor-pointer select-none w-fit'
              >
                <div className='size-[1.75695rem] relative overflow-hidden cursor-pointer '>
                  <ICBoxCheck className='size-full' />
                  {cart?.length === 10 && (
                    <div className='absolute top-0 left-0 flex items-center justify-center bg-blue-700 size-full rounded-[0.25rem]'>
                      <ICCheck className='w-[0.8rem] h-auto' />
                    </div>
                  )}
                </div>
                <span className='text-[1.02489rem] text-[#262626] leading-[1.2] tracking-[0.01025rem] font-semibold w-fit ml-[0.88rem] mr-[0.29rem]'>
                  Chọn tất cả
                </span>
                <span className='text-[1.02489rem] tracking-[0.01025rem] leading-[1.2] font-semibold text-brown-500'>
                  (5 sản phẩm)
                </span>
              </div>
              <div className='flex cursor-pointer items w-fit pl-[0.5rem]'>
                <ICDelete className='w-[0.83272rem] h-auto' />
                <span className='w-fit ml-[0.46rem] leading-[1.2] tracking-[0.00878rem] font-semibold text-[0.87848rem] text-[#262626] block translate-y-[22.5%] select-none'>
                  Xoá
                </span>
              </div>
            </div>
          </div>

          <div className='md:pr-[1.42rem]'>
            <ScrollArea
              type={isMobile ? 'never' : 'always'}
              className='w-full h-[calc(100vh-10rem-4rem)] xmd:h-[calc(100vh-10.17rem-3.6rem)] pl-[2.92rem] pr-[1.5rem] xmd:px-[0.59rem]'
            >
              <div className='grid grid-cols-1 gap-y-[0.88rem] xmd:mb-[4rem]'>
                {listCart?.map((item, index) => (
                  <ItemCart
                    key={index}
                    index={index}
                    setCart={setCart}
                    cart={cart}
                    isMobile={isMobile}
                    item={item}
                    isAuth={isAuth}
                  />
                ))}
              </div>
            </ScrollArea>
          </div>
          <div className='border-t border-solid border-[#EFEFEF] mt-auto h-[4.39239rem] xmd:h-[4.97804rem] px-[2.92rem] flex justify-between items-center xmd:absolute xmd:bottom-0 xmd:left-0 xmd:z-20 xmd:px-[0.59rem] xmd:w-full bg-white'>
            <div className='flex flex-col'>
              <div className='flex items-center space-x-[0.29rem]'>
                <span className='text-[#6A6A6A] caption font-medium xmd:text-[0.73206rem] xmd:tracking-normal'>
                  Tổng tiền hàng:
                </span>
                <span className='text-[#D48E43] font-bold text-[1.1713rem] leading-[1.2] md:tracking-[0.00586rem] xmd:text-[1.02489rem]'>
                  480.000đ
                </span>
              </div>
              <div className='flex items-center space-x-[0.29rem] mt-[0.44rem] xmd:mt-[0.29rem]'>
                <span className='text-[0.8rem] font-medium leading-[1.2] tracking-[0.00329rem] text-[#6A6A6A] xmd:text-[0.73206rem]'>
                  Tiết kiệm:
                </span>
                <span className='text-[#D48E43] text-[0.8rem] font-bold leading-[1.2] md:tracking-[0.00329rem] xmd:text-[0.73206rem] xmd:font-semibold'>
                  40.000đ
                </span>
              </div>
            </div>
            <button
              onClick={handlePayment}
              className='h-[2.92826rem] w-[12.15227rem] xmd:w-[10.2489rem] rounded-[0.58565rem] shadow-[2px_1px_12px_0px_rgba(0,0,0,0.06),2px_2px_20px_0px_rgba(0,0,0,0.04)] bg-[linear-gradient(97deg,#102841_0%,#1359A1_100%)] text-white caption1 font-semibold flex justify-center items-center ml-[0.88rem]'
            >
              THANH TOÁN
            </button>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  )
}
