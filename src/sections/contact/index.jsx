import AddressContact from './components/address'
import IndexFormContact from './components/form'
import NavContact from './components/nav'

export default function ContactIndex() {
  return (
    <main className='relative xmd:overflow-hidden xmd:bg-[#17395C]'>
      <NavContact />
      <section className='flex justify-between lg:container lg:relative xmd:flex-col tablet:flex-col-reverse'>
        <AddressContact />
        <IndexFormContact />
      </section>
    </main>
  )
}
