import ItemCategory from './ItemCategory'

export default function CategoriesIndex({isMobile}) {
  return (
    <div className='flex md:flex-col md:mt-[1.76rem] xmd:absolute xmd:top-1/2 xmd:-translate-y-1/2 xmd:left-0 xmd:pr-[0.59rem] xmd:w-fit xmd:min-w-fit'>
      {new Array(6).fill(0).map((_, index) => (
        <ItemCategory
          key={index}
          index={index}
          isMobile={isMobile}
        />
      ))}
    </div>
  )
}
