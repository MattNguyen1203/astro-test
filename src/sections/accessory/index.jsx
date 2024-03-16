import BreadCrumb from '@/components/breadcrumb'
import SearchAccessory from './components/search'
import GridAccessory from './components/gridaccessory'

export default function AccessoryIndex({isMobile}) {
  return (
    <main className='pt-[9.76rem] xmd:pt-[4.1rem] xmd:bg-elevation-10'>
      <div className='container mt-[1.76rem] xmd:mt-[1.17rem]'>
        <BreadCrumb />
      </div>
      <SearchAccessory isMobile={isMobile} />
      <GridAccessory isMobile={isMobile} />
    </main>
  )
}
