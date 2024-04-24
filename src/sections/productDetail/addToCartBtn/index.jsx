import useStore from '@/app/(store)/store'
import {handleCart} from '@/components/itemcart/handleCart'
import Loading from '@/components/loading'
import {cn} from '@/lib/utils'

import Image from 'next/image'
import {useState} from 'react'

const AddToCartBtn = ({className, listProduct, session}) => {
  const [isLoading, setIsLoading] = useState(false)

  const listCart = useStore((state) => state.listCart)
  const setListCart = useStore((state) => state.setListCart)
  const setActionCart = useStore((state) => state.setActionCart)
  const actionCart = useStore((state) => state.actionCart)

  return (
    <button
      className={cn(
        'flex items-center md:!min-h-[3rem] justify-center w-[11rem] h-full rounded-[0.58565rem] border-2 border-solid border-[#102841] hover:border-[#FFF0D8] relative before:opacity-0 hover:before:opacity-100 transition-all duration-500 before:size-full before:absolute before:top-0 before:left-0 hover:before:shadow-[6px_5px_3px_0px_rgba(3,30,59,0.02)_inset,3px_4px_3px_0px_rgba(22,53,86,0.29)_inset] before:bg-transparent hover:before:bg-[linear-gradient(44deg,#FFF0D8_50.63%,#FFD797_106.58%)] mx-[0.88rem] overflow-hidden',
        className?.wrapper,
      )}
      onClick={() =>
        handleCart(
          session,
          listCart,
          setListCart,
          setActionCart,
          actionCart,
          listProduct,
          setIsLoading,
          'add',
        )
      }
    >
      {isLoading ? (
        <Loading className='top-[20%] left-[40%]' />
      ) : (
        <div className='relative z-10 flex items-center justify-center '>
          <Image
            src='/components/btnCartIcon.png'
            alt='button cart icon'
            width={100}
            height={100}
            className={cn(
              'w-[1.1713rem] h-[1.1713rem] object-contain mr-[0.59rem] xmd:mr-0',
              className?.img,
            )}
          />
          <span
            className={cn(
              'font-semibold uppercase caption1 text-greyscale-80',
              className?.text,
            )}
          >
            Thêm vào giỏ
          </span>
        </div>
      )}
    </button>
  )
}

export default AddToCartBtn
