import AddressContact from './components/address'
import FormContact from './components/form'
import NavContact from './components/nav'

export default function ContactIndex() {
  return (
    <main className='relative xmd:overflow-hidden xmd:bg-[#17395C]'>
      <NavContact />
      <section className='lg:container lg:relative flex xmd:flex-col justify-between '>
        <AddressContact />
        <FormContact />
      </section>
    </main>
  )
}
