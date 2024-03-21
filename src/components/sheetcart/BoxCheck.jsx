import ICBoxCheck from '../icon/ICBoxCheck'
import ICCheck from '../icon/ICCheck'

export default function BoxCheck({cart, setCart, index}) {
  const isCheck = cart.some((e) => e === index)
  return (
    <div
      onClick={() => {
        if (isCheck) {
          setCart([...cart?.filter((e) => e !== index)])
        } else {
          let cartClone = [...cart]
          cartClone.push(index)
          setCart(cartClone)
        }
      }}
      className='size-[1.75695rem] relative overflow-hidden cursor-pointer '
    >
      <ICBoxCheck className='size-full' />
      {isCheck && (
        <div className='absolute top-0 left-0 flex items-center justify-center bg-blue-700 size-full rounded-[0.25rem]'>
          <ICCheck className='w-[0.8rem] h-auto' />
        </div>
      )}
      <input
        readOnly
        checked={isCheck}
        type='checkbox'
        className='opacity-0 pointer-events-none size-0'
      />
    </div>
  )
}
