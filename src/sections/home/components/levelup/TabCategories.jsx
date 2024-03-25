export default function TabCategories({indexCategory, setIndexCategory}) {
  return (
    <div className='flex'>
      {Array(3)
        .fill(0)
        .map((_, index) => (
          <button
            onClick={() => setIndexCategory(index)}
            className={`${
              indexCategory === index
                ? 'bg-[linear-gradient(97deg,#102841_0%,#1359A1_100%)] text-white border-transparent'
                : 'hover:bg-[linear-gradient(97deg,#102841_0%,#1359A1_100%)] hover:border-transparent border-[#E5E7EB] hover:text-white text-greyscale-60 '
            } mr-[0.44rem] p-[0.59rem] rounded-[0.43924rem] transition-all duration-200 flex items-center caption1 font-medium border border-solid`}
            key={index}
          >
            Phụ kiện iPad
          </button>
        ))}
    </div>
  )
}
