import CardProduct from '@/components/cardproduct'

export default function GridProductNewRes({
  products,
  session,
  isIPhone = false,
}) {
  console.log(isIPhone)
  return (
    <div className='container a xmd:mx-[0.59rem] grid grid-cols-2 grid-rows-4 gap-[0.59rem] mt-[1.17rem]'>
      {products?.item?.map((product, index) => (
        <CardProduct
          isIPhone={isIPhone}
          product={product}
          key={index}
          session={session}
        />
      ))}
    </div>
  )
}
