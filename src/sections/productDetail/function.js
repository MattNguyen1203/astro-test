export const handlePrice = (data) => {
  const regularPriceResult =
    data?.variation?.display_regular_price &&
    data?.variation?.display_regular_price !== ''
      ? Number(data?.variation?.display_regular_price)
      : Number(data?.regular_price)

  const priceResult =
    data?.variation?.display_price && data?.variation?.display_price !== ''
      ? Number(data?.variation?.display_price)
      : Number(data?.price)

  return [regularPriceResult, priceResult]
}
