import CardBill from '@/components/cardbill'

export default function DoneBill() {
  return (
    <section>
      <div className='grid grid-cols-1 gap-y-[0.73rem]'>
        {new Array(4).fill(0).map((e, index) => (
          <CardBill key={index} />
        ))}
      </div>
    </section>
  )
}
