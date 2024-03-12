import ItemCategory from './ItemCategory'

export default function CategoriesIndex({isMobile}) {
  return (
    <div className='flex flex-col mt-[1.76rem] xmd:mt-[1.14rem]'>
      {new Array(6).fill(0).map((_, index) => (
        <ItemCategory
          key={index}
          index={index}
        />
      ))}
    </div>
  )
}
