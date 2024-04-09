'use client'
import {Fragment, useEffect} from 'react'

import useStore from '@/app/(store)/store'

import CardProduct from '@/components/cardproduct'
import SkeletonCardProduct from '@/components/cardproduct/SkeletonCardProduct'

export default function GridProduct({
  products,
  priority,
  indexPriority,
  isMobile,
}) {
  const isFilterProduct = useStore((state) => state.isFilterProduct)
  const setIsFilterProduct = useStore((state) => state.setIsFilterProduct)

  useEffect(() => {
    isFilterProduct && setIsFilterProduct(false)
  }, [])

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
        <Fragment key={index}>
          {isFilterProduct ? (
            <SkeletonCardProduct />
          ) : (
            <CardProduct
              product={product}
              priority={priority && index < indexPriority ? true : false}
            />
          )}
        </Fragment>
      ))}
    </div>
  )
}

const GridProductLoading = () => {
  return (
    <div
      style={{
        gridTemplateRows: `repeat(4, minmax(0, 1fr))`,
      }}
      className={`grid xmd:grid-cols-2 grid-cols-4 gap-y-[1.17rem] gap-x-[0.88rem] xmd:gap-[0.59rem] xmd:container`}
    >
      {Array(16)
        .fill(0)
        .map((_, index) => (
          <SkeletonCardProduct key={index} />
        ))}
    </div>
  )
}
GridProductLoading.displayName = 'GridProductLoading'
export {GridProductLoading}
