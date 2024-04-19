export const handlePrice = (data) => {
  const regularPriceResult =
    data?.selectedVariations?.display_regular_price &&
    data?.selectedVariations?.display_regular_price !== ''
      ? Number(data?.selectedVariations?.display_regular_price)
      : Number(data?.regular_price)

  const priceResult =
    data?.selectedVariations?.display_price &&
    data?.selectedVariations?.display_price !== ''
      ? Number(data?.selectedVariations?.display_price)
      : Number(data?.price)

  return [regularPriceResult, priceResult]
}
