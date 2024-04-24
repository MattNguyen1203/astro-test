import CardBill from '@/components/cardbill'

export default function AllBill({data}) {
  console.log(data)
  return (
    <section>
      <div className='grid grid-cols-1 gap-y-[0.73rem]'>
        { data?.map((e, index) => (
          <CardBill key={index} data={e}  />
        ))}
      </div>
    </section>
  )
}
