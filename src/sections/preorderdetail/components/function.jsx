export function covertToText(data) {
  if (!data?.selectedVariations?.attributes) return null
  const listAttr = data.attributes
  let text = ''

  const result = listAttr.map((item) => {
    return {
      ...item,
      value: Object.values(data?.selectedVariations?.attributes)?.find(
        (attr) => attr.taxonomy === item.key,
      )?.label,
    }
  })

  if (result) {
    result.forEach((item, index) => {
      text += `${item.label}: ${item.value || ''}${
        index !== result.length - 1 ? ', ' : ''
      }`
    })
  }
  return text
}
