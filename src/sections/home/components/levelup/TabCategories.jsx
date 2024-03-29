export default function TabCategories({
  indexCategory,
  setIndexCategory,
  categories,
}) {
  return (
    <div className='flex'>
      {categories?.map((category, index) => (
        <button
          onClick={() => setIndexCategory(index)}
          className={`${
            indexCategory === index
              ? 'bg-[linear-gradient(97deg,#102841_0%,#1359A1_100%)] text-white border-transparent'
              : 'hover:bg-[linear-gradient(97deg,#102841_0%,#1359A1_100%)] hover:border-transparent border-[#E5E7EB] hover:text-white text-greyscale-60 '
          } mr-[0.44rem] p-[0.59rem] rounded-[0.43924rem] transition-all duration-200 flex items-center caption1 font-medium border border-solid`}
          key={index}
        >
          {category?.name?.toLowerCase()?.includes('phụ kiện')
            ? category?.name
            : `Phụ kiện ${category?.name}`}
        </button>
      ))}
    </div>
  )
}
