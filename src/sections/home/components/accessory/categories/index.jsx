import ItemCategory from './ItemCategory'

export default function CategoriesIndex() {
  return (
    <div className='flex flex-col *:mt-[0.88rem] *:first:mt-0 mt-[1.76rem]'>
      {new Array(6).fill(0).map((_, index) => (
        <ItemCategory key={index} />
      ))}
    </div>
  )
}
