import CardProduct from '@/components/cardproduct'

export default function GridProductNewRes({products, session}) {
  return (
    <div className='container xmd:mx-[0.59rem] grid grid-cols-2 grid-rows-4 gap-[0.59rem] mt-[1.17rem]'>
      {products?.item?.map((product, index) => (
        <CardProduct
          product={product}
          key={index}
          session={session}
        />
      ))}
    </div>
  )
}
