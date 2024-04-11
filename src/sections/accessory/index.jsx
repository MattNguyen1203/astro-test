import BreadCrumb from '@/components/breadcrumb'
import SearchAccessory from './components/search'
import WrapperGridAccessory from './WrapperGridAccessory'

export default function AccessoryIndex({isMobile}) {
  return (
    <main className='pt-[9.76rem] xmd:pt-[4.1rem] xmd:bg-elevation-10'>
      <div className='container mt-[1.76rem] xmd:mt-[1.17rem]'>
        <BreadCrumb
          category={'Tìm kiếm phụ kiện theo thiết bị'}
          categorySlg={'/phu-kien'}
        />
      </div>
      <SearchAccessory isMobile={isMobile} />
      <WrapperGridAccessory isMobile={isMobile} />
    </main>
  )
}
