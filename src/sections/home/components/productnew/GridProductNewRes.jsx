import CardProduct from '@/components/cardproduct'

export default function GridProductNewRes() {
  return (
    <div className='container grid grid-cols-2 grid-rows-4 gap-[0.59rem] mt-[1.17rem]'>
      {Array(8)
        .fill(0)
        .map((_, index) => (
          <CardProduct key={index} />
        ))}
    </div>
  )
}
