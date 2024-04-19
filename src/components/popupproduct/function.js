export const getLastKey = (variationSelected, listParentKey) => {
  if (variationSelected.length === listParentKey.length - 1) {
    const remainKey = listParentKey.find((key) =>
      variationSelected.every((item) => item.parentkey !== key),
    )
    return remainKey
  } else if (variationSelected.length === listParentKey.length) {
    return variationSelected[variationSelected.length - 1].parentkey
  }
}

export const getListValueOutOfStock = (
  variations,
  variationSelected,
  lastKey,
) => {
  const result = variations.filter((item) => {
    let match = false
    variationSelected.forEach((variant) => {
      if (variant.parentkey === lastKey) return

      const isMatch =
        item?.attributes?.[variant.parentkey].key === variant.selectedkey
      if (isMatch && item.is_in_stock === true) {
        match = true
      }
    })

    if (match) return item
  })

  return result
}
