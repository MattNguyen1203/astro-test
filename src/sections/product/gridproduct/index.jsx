import CardProduct from '@/components/cardproduct'

export default function GridProduct() {
  return (
    <div className='grid grid-cols-4 grid-rows-4 gap-y-[1.17rem] gap-x-[0.88rem]'>
      {new Array(16).fill(0).map((_, index) => (
        <CardProduct key={index} />
      ))}
    </div>
  )
}
