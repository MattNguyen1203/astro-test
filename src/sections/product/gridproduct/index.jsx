import CardProduct from '@/components/cardproduct'

export default function GridProduct({
  products,
  priority,
  indexPriority,
  isMobile,
}) {
  const limit = Number(products?.item?.length) || 0
  const colsProduct = limit ? Math.ceil(limit / 4) : 4
  return (
    <div
      style={{
        gridTemplateRows: `repeat(${colsProduct}, minmax(0, 1fr))`,
      }}
      className={`${
        isMobile ? 'grid-cols-2' : 'grid-cols-4'
      } grid gap-y-[1.17rem] gap-x-[0.88rem] xmd:gap-[0.59rem] xmd:container`}
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
