import CardProduct from '@/components/cardproduct'

export default function GridProduct({products, priority, indexPriority}) {
  const colsProduct = products?.count
    ? Math.ceil(Number(products?.count) / 4)
    : 4
  return (
    <div
      style={{
        gridTemplateRows: `repeat(${colsProduct}, minmax(0, 1fr))`,
      }}
      className='grid grid-cols-4 gap-y-[1.17rem] gap-x-[0.88rem]'
    >
      {products?.item?.map((product, index) => (
        <CardProduct
          key={index}
          product={product}
          priority={priority && index < indexPriority ? true : false}
        />
      ))}
    </div>
  )
}
