import ItemSpecial from './ItemSpecial'

const specials = [
  {
    name: 'Sản phẩm combo',
    slug: 'wooco',
  },
  {
    name: 'Sản phẩm lẻ',
    slug: 'simple',
  },
]

export default function Special({onMobile = false}) {
  return (
    <>
      {specials?.map((item, index) => (
        <ItemSpecial
          key={index}
          item={item}
          onMobile={onMobile}
        />
      ))}
    </>
  )
}
